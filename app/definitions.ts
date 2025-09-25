export type Employee = {
    id?: number,
    lastName: string,
    firstName: string,
    kuerzel: string,
    // skill?: Skill, // eigentlich will ich das so haben und nicht getrennt, hat mir aber erstmal viel kaputt gemacht, also später nochmal anpassen
    skill_name?: string
    skill_level?: string
}

export type Skill = {
    name: string,
    level: 1 | 2 | 3,
}

export type Project = {
    id?: number,
    market?: string,
    project_name: string,
    description?: string,
    start?: Date,
    end?: Date,
    status?: 'completed' | 'inProgress',
    priority?: number,
    project_manager?: string
    progress?: number,
    customer?: string,
    comment?: string
}

