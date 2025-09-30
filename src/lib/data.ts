// man muss noch Fälle bauen, falls unser db.select() nichts zurück gibt


import 'dotenv/config';


import { db } from '@/src/index';
import { employeeTable, projectTable, skillTable } from '@/src/db/schema';
import { eq, like, or } from 'drizzle-orm';
import { Project, selectProjectSchema, selectProjectsSchema } from '@/app/validation/fetch-validation';
import { Employee, selectEmployeesSchema, selectEmployeeSchema } from '@/app/validation/fetch-validation';
import { Skill, selectSkillSchema, selectSkillsSchema } from '@/app/validation/fetch-validation';



// ah also jetzt beim development meckert er immer, aber beim deployment kommt einfach rein was reinkommt und etwas passiert mit den Daten ja?

// wichtig hier die ganze validierung mit zod auch zu machen
export async function fetchEmployeeById(id: number): Promise<Employee> { // besser immer mit dem Rückgabetyp machen, damit man sicher sein kann, dass auch das zurückkommt womit man weiter arbeiten kann

    const data = await db.select().from(employeeTable).where(eq(employeeTable.id, id)).limit(1); // Drizzle liefert Promise<T>, Promise muss man mit await abwarten, wenn await dann muss function auch async
    // Fall falls empty
    const parsedData: Employee = selectEmployeeSchema.parse(data[0]);
    
    return parsedData;
}

export async function fetchEmployees(): Promise<Employee[]>{ 

    const data = await db.select().from(employeeTable);

    const parsedData: Employee[] = selectEmployeesSchema.parse(data);
    
    return parsedData;
}

export async function fetchEmployeesBySearchParams(searchParams: string): Promise<Employee[]> { 

    const data = await db.select()
    .from(employeeTable)
    .where(
        or(
            like(employeeTable.lastName, `%${searchParams}%`),
            like(employeeTable.firstName, `%${searchParams}%`)
        )
    );

    const parsedData = selectEmployeesSchema.parse(data);

    return parsedData;
}



export async function fetchProjectById(id: number): Promise<Project> { // Fall einbauen, wenn es nicht existiert

    const data = await db.select().from(projectTable).where(eq(projectTable.id, id));

    const parsedData = selectProjectSchema.parse(data[0]);

    return parsedData
}

export async function fetchProjects(): Promise<Project[]> { 

    const data = await db.select().from(projectTable);

    const parsedData = selectProjectsSchema.parse(data);

    return parsedData;
}

export async function fetchProjectsBySearchParams(searchParams: string = 'TestProjekt'): Promise<Project[]> {

    const data = await db.select()
    .from(projectTable)
    .where(
        like(projectTable.project_name, `%${searchParams}%`)
    );

    const parsedData = selectProjectsSchema.parse(data);

    return parsedData;
}

export async function fetchSkills(): Promise<Skill[]>{

    const data = await db.select().from(skillTable);

    const parsedData = selectSkillsSchema.parse(data);

    return parsedData;
    
};
