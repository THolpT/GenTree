import { Injectable } from '@nestjs/common';
import { PersonCreateInput, PersonUpdateInput } from 'src/generated/models';
import { Person } from 'src/generated/client';
import { PrismaService } from 'prisma/prisma.service';

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
}
