
export type User = {
    id: string,
    email: string,
    login: string,
    password: string,
    trees: Tree[]
}

export type Tree = {
    id: string,
    name: string,
    persons: Person[],
    author: User,
    authorId: string
}

export type Person = {
    id: string,
    name: string,
    givenName: string | null,
    surname: string | null,
    gender: Gender,
    birthDate: string | null,
    birthPlace: string | null,
    deathDate: string | null,
    deathPlace: string | null,
    img: string | null,

    spouseId: string | null,
    childId: string | null,
    treeId: string
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    UNKNOWN = "UNKNOWN"
}

type OrgChartNode = {
  id: string;
  pid?: string;
  name: string;
  img?: string;
};
function exportToGedcom(people: Person[]) {
    let gedcom = "0 HEAD\n1 SOUR ChatGPT Export\n1 GEDC\n2 VERS 5.5.1\n1 CHAR UTF-8\n";

    // Сопоставим ID с индексами GEDCOM (например, @I1@, @I2@)
    const idMap = new Map<string, string>();
    people.forEach((p, i) => idMap.set(p.id, `@I${i + 1}@`));

    // Создаём список семей (на основе parent-child связей)
    const families: { familyId: string; husbandId?: string; wifeId?: string; children: string[] }[] = [];

    // Находим всех, кто имеет childId → значит, это родители
    people.forEach(parent => {
        const child = parent.childId ? people.find(p => p.id === parent.childId) : null;
        if (child) {
            // Ищем, существует ли уже семья с этим ребёнком
            let fam = families.find(f => f.children.includes(idMap.get(child.id)!));
            if (!fam) {
                fam = { familyId: `@F${families.length + 1}@`, children: [idMap.get(child.id)!] };
                families.push(fam);
            }
            // Добавляем родителя в семью
            if (parent.gender === "MALE") fam.husbandId = idMap.get(parent.id)!;
            else if (parent.gender === "FEMALE") fam.wifeId = idMap.get(parent.id)!;
            else {
                // неизвестный пол — просто добавим как родителя
                if (!fam.husbandId) fam.husbandId = idMap.get(parent.id)!;
                else if (!fam.wifeId) fam.wifeId = idMap.get(parent.id)!;
            }
        }
    });

    // Добавляем индивидуальные записи
    for (const p of people) {
        const ref = idMap.get(p.id);
        gedcom += `0 ${ref} INDI\n`;
        const given = p.givenName || "";
        const surname = p.surname || "";
        gedcom += `1 NAME ${given} /${surname}/\n`;
        if (p.gender === "MALE") gedcom += "1 SEX M\n";
        else if (p.gender === "FEMALE") gedcom += "1 SEX F\n";

        if (p.birthDate || p.birthPlace) {
            gedcom += "1 BIRT\n";
            if (p.birthDate) gedcom += `2 DATE ${p.birthDate}\n`;
            if (p.birthPlace) gedcom += `2 PLAC ${p.birthPlace}\n`;
        }

        if (p.deathDate || p.deathPlace) {
            gedcom += "1 DEAT\n";
            if (p.deathDate) gedcom += `2 DATE ${p.deathDate}\n`;
            if (p.deathPlace) gedcom += `2 PLAC ${p.deathPlace}\n`;
        }

        // Добавляем связь с семьёй (как ребёнок)
        const famAsChild = families.find(f => f.children.includes(ref!));
        if (famAsChild) gedcom += `1 FAMC ${famAsChild.familyId}\n`;

        // Добавляем связь как родителя
        const famAsParent = families.find(f => f.husbandId === ref || f.wifeId === ref);
        if (famAsParent) gedcom += `1 FAMS ${famAsParent.familyId}\n`;
    }

    // Добавляем семейные записи
    for (const fam of families) {
        gedcom += `0 ${fam.familyId} FAM\n`;
        if (fam.husbandId) gedcom += `1 HUSB ${fam.husbandId}\n`;
        if (fam.wifeId) gedcom += `1 WIFE ${fam.wifeId}\n`;
        for (const c of fam.children) gedcom += `1 CHIL ${c}\n`;
    }

    gedcom += "0 TRLR\n";
    return gedcom;
}

// 💾 Функция для скачивания файла
export function downloadGedcom(people: Person[], filename = "family_tree.ged") {
    const gedcomData = exportToGedcom(people);
    const blob = new Blob([gedcomData], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
