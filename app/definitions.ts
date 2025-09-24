export type Employee = {
    id?: number,
    lastName: string,
    firstName: string,
}

export type Skill = {
    name: string,
    level: 1 | 2 | 3,
}

export type Project = {
    name: string,
    date: Date,
}