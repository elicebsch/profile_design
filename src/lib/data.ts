import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

import { db } from '@/src/index';
import { employeeTable, projectTable, skillTable } from '@/src/db/schema';
import { eq, like, or } from 'drizzle-orm';
import { Employee, Project, Skill } from '@/app/definitions';

import { employeeSchema, employeesSchema } from '@/app/validation/fetch-validation';


import { FetchedEmployee } from '@/app/validation/fetch-validation';

// ah also jetzt beim development meckert er immer, aber beim deployment kommt einfach rein was reinkommt und etwas passiert mit den Daten ja?

// wichtig hier die ganze validierung mit zod auch zu machen
export async function fetchEmployeesById(id: number): Promise<FetchedEmployee> { // besser immer mit dem Rückgabetyp machen, damit man sicher sein kann, dass auch das zurückkommt womit man weiter arbeiten kann

    const rawData = await db.select().from(employeeTable).where(eq(employeeTable.id, id)).limit(1); // Drizzle liefert Promise<T>, Promise muss man mit await abwarten, wenn await dann muss function auch async
    // console.log(rawData);
    const one = rawData[0]; // Fall mit empty
    const parsedData: FetchedEmployee = employeeSchema.parse(one);
    
    return parsedData;
}

export async function fetchEmployees(): Promise<FetchedEmployee[]>{ 

    const data = db.select().from(employeeTable);
    const parsedData: FetchedEmployee[] = employeesSchema.parse(data);
    
    return parsedData;
}

export function fetchEmployeesBySearchParams(searchParams: string) { 
    return db.select()
        .from(employeeTable)
        .where(
            or(
                like(employeeTable.lastName, `%${searchParams}%`),
                like(employeeTable.firstName, `%${searchParams}%`)
            )
        );
}


export function fetchSkillsById(id: number): Promise<Skill> { // ganz wichtig, dass wir hier ein Promise zurückgeben, weil sonst hat await dort wo die Funktion aufgerufen wird keinen Effekt!

    return db.select().from(skillTable).where(eq(skillTable.id, id)); 
}

export function fetchSkills(): Skill {

    return db.select().from(skillTable);
}



export function fetchProjectsById(id: number): Project { // Fall einbauen, wenn es nicht existiert

    const data = db.select().from(projectTable).where(eq(projectTable.id, id));

    return  
}

export function fetchProjects(): Promise<Project[]> { 

    return db.select().from(projectTable);
}

export function fetchProjectsBySearchParams(searchParams: string = 'TestProjekt'): Promise<Project[]> {

    return db.select()
    .from(projectTable)
    .where(
        like(projectTable.project_name, `%${searchParams}%`)
    )
}
