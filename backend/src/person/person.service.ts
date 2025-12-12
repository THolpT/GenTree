import { Injectable } from '@nestjs/common';
import { PersonCreateInput, PersonUpdateInput } from 'src/generated/models';
import { Person } from 'src/generated/client';
import { PrismaService } from 'prisma/prisma.service';

type GedcomIndi = {
  id: string;
  name?: string;
  sex?: string;
  birthDate?: string;
  birthPlace?: string;
  deathDate?: string;
  deathPlace?: string;
};
type GedcomFam = {
  id: string;
  husband?: string;
  wife?: string;
  children: string[];
  marrDate?: string;
  marrPlace?: string;
};

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}
  
  async create(data: PersonCreateInput): Promise<Person> {
    return this.prisma.person.create({ data });
  }

  async findAll(): Promise<Person[]> {
    return this.prisma.person.findMany();
  }

  async findOne(id: string): Promise<Person | null> {
    return this.prisma.person.findUnique({ where: { id } });
  }

  async update(id: string, data: PersonUpdateInput): Promise<Person> {
    return this.prisma.person.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Person> {
    const children = await this.prisma.person.findMany({ where: { childId: id } });
    for (const child of children) {
      await this.remove(child.id);
    }
    return await this.prisma.person.delete({ where: { id } });
  }

  async importGedcomToTree(treeId: string, gedcomText: string) {
    await this.prisma.person.deleteMany({ where: { treeId } });
  
    const { individuals, families } = this.parseGedcom(gedcomText);
    const mapGedToDb = new Map<string, string>();

    for (const indi of Object.values(individuals)) {
      const { givenName, surname, patronymic, fullName } = this.splitNameFields(indi.name || '');
      const created = await this.prisma.person.create({
        data: {
          name: givenName,
          givenName: surname || fullName,
          surname: patronymic,
          gender: this.mapGender(indi.sex),
          birthDate: indi.birthDate ? new Date(indi.birthDate) : undefined,
          birthPlace: indi.birthPlace || undefined,
          deathDate: indi.deathDate ? new Date(indi.deathDate) : undefined,
          deathPlace: indi.deathPlace || undefined,
          treeId,
        },
      });
      mapGedToDb.set(indi.id, created.id);
    }

    for (const fam of Object.values(families)) {
      const hId = fam.husband ? mapGedToDb.get(fam.husband) : undefined;
      const wId = fam.wife ? mapGedToDb.get(fam.wife) : undefined;

      if (hId && fam.marrDate) {
        await this.prisma.person.update({
          where: { id: hId },
          data: { marriageDate: new Date(fam.marrDate), marriagePlace: fam.marrPlace || undefined },
        });
      }
      if (wId && fam.marrDate) {
        await this.prisma.person.update({
          where: { id: wId },
          data: { marriageDate: new Date(fam.marrDate), marriagePlace: fam.marrPlace || undefined },
        });
      }

      if (hId && wId) {
        const setOn = hId < wId ? hId : wId;
        const spouseFor = setOn === hId ? hId : wId;
        const other = setOn === hId ? wId : hId;
        await this.prisma.person.update({
          where: { id: spouseFor },
          data: { spouseId: other },
        });
      }

      for (const ch of fam.children) {
        const childDbId = mapGedToDb.get(ch);
        if (!childDbId) continue;

        if (hId) {
          await this.prisma.person.update({
            where: { id: hId },
            data: { childId: childDbId },
          });
        }
        if (wId) {
          await this.prisma.person.update({
            where: { id: wId },
            data: { childId: childDbId },
          });
        }
      }
    }

    const count = await this.prisma.person.count({ where: { treeId } });
    return { imported: count };
  }

  parseGedcom(text: string): { individuals: Record<string, GedcomIndi>, families: Record<string, GedcomFam> } {
    const lines = text.split(/\r?\n/);
    const individuals: Record<string, GedcomIndi> = {};
    const families: Record<string, GedcomFam> = {};

    let currentType: 'INDI' | 'FAM' | null = null;
    let currentId: string | null = null;
    let pointerStack: string[] = [];

    for (let raw of lines) {
      raw = raw.trim();
      if (!raw) continue;
      const m = raw.match(/^(\d+)\s+(?:(@[^@]+@)\s+)?(\w+)(?:\s+(.*))?/);
      if (!m) continue;
      const level = parseInt(m[1], 10);
      const xref = m[2] || null;
      const tag = m[3];
      const rest = m[4] || '';

      if (level === 0) {
        currentType = null;
        currentId = null;
        if (xref && (tag === 'INDI' || tag === 'FAM')) {
          currentType = tag as 'INDI' | 'FAM';
          currentId = xref;
          if (currentType === 'INDI') {
            individuals[currentId] = { id: currentId, children: undefined } as any;
          } else if (currentType === 'FAM') {
            families[currentId] = { id: currentId, children: [] };
          }
        }
        continue;
      }

      if (!currentType || !currentId) continue;

      if (currentType === 'INDI') {
        const indi = individuals[currentId]!;
        if (tag === 'NAME') {
          indi.name = rest.trim();
        } else if (tag === 'SEX') {
          indi.sex = rest.trim();
        } else if (tag === 'BIRT') {
          pointerStack = ['BIRT'];
        } else if (tag === 'DEAT') {
          pointerStack = ['DEAT'];
        } else if (tag === 'DATE' && pointerStack[0] === 'BIRT') {
          indi.birthDate = this.normalizeDate(rest.trim());
          pointerStack = [];
        } else if (tag === 'PLAC' && pointerStack[0] === 'BIRT') {
          indi.birthPlace = rest.trim();
          pointerStack = [];
        } else if (tag === 'DATE' && pointerStack[0] === 'DEAT') {
          indi.deathDate = this.normalizeDate(rest.trim());
          pointerStack = [];
        } else if (tag === 'PLAC' && pointerStack[0] === 'DEAT') {
          indi.deathPlace = rest.trim();
          pointerStack = [];
        }
      } else if (currentType === 'FAM') {
        const fam = families[currentId]!;
        if (tag === 'HUSB' && rest) {
          fam.husband = rest.trim();
        } else if (tag === 'WIFE' && rest) {
          fam.wife = rest.trim();
        } else if (tag === 'CHIL' && rest) {
          fam.children.push(rest.trim());
        } else if (tag === 'MARR') {
          pointerStack = ['MARR'];
        } else if ((tag === 'DATE' || tag === 'PLAC') && pointerStack[0] === 'MARR') {
          if (tag === 'DATE') fam.marrDate = this.normalizeDate(rest.trim());
          if (tag === 'PLAC') fam.marrPlace = rest.trim();
          pointerStack = [];
        }
      }
    }

    return { individuals, families };
  }

  normalizeDate(raw: string) {
    const d = new Date(raw);
    if (!isNaN(d.getTime())) return d.toISOString();
    const y = raw.match(/\d{4}/);
    if (y) return new Date(`${y[0]}-01-01`).toISOString();
    return undefined;
  }

  splitNameFields(raw: string) {
    const fullName = raw.trim();
    if (!fullName) return { givenName: undefined, surname: undefined, patronymic: undefined, fullName };

    const slashMatch = fullName.match(/^(.*)\/([^\/]+)\/(.*)?$/);
    if (slashMatch) {
      const before = (slashMatch[1] || '').trim();
      const surname = (slashMatch[2] || '').trim();
      const parts = before.split(/\s+/).filter(Boolean);
      const givenName = parts[0] || undefined;
      const patronymic = parts.slice(1).join(' ') || undefined;
      return { givenName, surname, patronymic, fullName };
    }

    const parts = fullName.split(/\s+/).filter(Boolean);
  
    if (parts.length === 1) {
      return { givenName: parts[0], surname: undefined, patronymic: undefined, fullName };
    }
    if (parts.length === 2) {
      return { surname: parts[0], givenName: parts[1], patronymic: undefined, fullName };
    }
    const surname = parts[0];
    const givenName = parts[1];
    const patronymic = parts.slice(2).join(' ') || undefined;
  
    return { givenName, surname, patronymic, fullName };
  }
  

  mapGender(g?: string) {
    if (!g) return 'UNKNOWN';
    const up = g.toUpperCase();
    if (up === 'M' || up === 'MALE') return 'MALE';
    if (up === 'F' || up === 'FEMALE') return 'FEMALE';
    return 'UNKNOWN';
  }
}
