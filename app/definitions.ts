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