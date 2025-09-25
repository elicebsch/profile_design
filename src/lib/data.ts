import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

import { db } from '..';
import { mitarbeiterTable, projectTable, skillTable } from '@/src/db/schema';
import { eq, like, or } from 'drizzle-orm';
import { Employee, Project, Skill } from '@/app/definitions';

// ah also jetzt beim development meckert er immer, aber beim deployment kommt einfach rein was reinkommt und etwas passiert mit den Daten ja?

// wichtig hier die ganze validierung mit zod auch zu machen
export function fetchEmployeesById(id: number): Employee { // besser immer mit dem Rückgabetyp machen, damit man sicher sein kann, dass auch das zurückkommt womit man weiter arbeiten kann
    return db.select().from(mitarbeiterTable).where(eq(mitarbeiterTable.id, id));
}

export function fetchEmployees(): Employee{

    return db.select().from(mitarbeiterTable)
}

export function fetchEmployeesBySearchParams(searchParams: string = 'Mustermann') { 
    return db.select()
        .from(mitarbeiterTable)
        .where(
            or(
                like(mitarbeiterTable.lastName, `%${searchParams}%`),
                like(mitarbeiterTable.firstName, `%${searchParams}%`)
            )
        );
}


export function fetchSkillsById(id: number) {

    return db.select().from(skillTable).where(eq(skillTable.id, id)); // man muss noch Fall einbauen, wenn id gar nicht existiert, weil id ist ja noch optional
}

export function fetchSkills(): Skill {

    return db.select().from(skillTable);
}



export function fetchProjectsById(id: number): Project[] { // Fall einbauen, wenn es nicht existiert

    return db.select().from(projectTable).where(eq(projectTable.id, id)); 
}

export function fetchProjects(): Project[] { 

    return db.select().from(projectTable);
}

export function fetchProjectsBySearchParams(searchParams: string = 'TestProjekt'): Project[] {

    return db.select()
    .from(projectTable)
    .where(
        like(projectTable.project_name, `%${searchParams}%`)
    )
}
