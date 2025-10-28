
export type User = {
    id: string,
    login: string,
    password: string,
    trees: Tree[]
}

export type Tree = {
    id: string,
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
