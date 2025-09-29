'use server'

import { db } from "@/src"

import {z} from 'zod';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { Project } from "./validation/fetch-validation";
import { Employee } from "./validation/fetch-validation";

import { skillTable, employeeTable, projectTable } from "@/src/db/schema";

// Typen die zur Compile-Time überprüfen, ob das Datenformat stimmmt --> nützlich für die Entwicklung, aber nicht für das Deployment, denn zur Laufzeit können ja trotzdem falsche Werte reinkommen
import {
  InsertSkill, InsertEmployee, InsertProject,
  SelectSkill, SelectEmployee, SelectProject
} from "./validation/drizzle_validation-types";

// sind die Rückgabetypen der Parser, also sind es die Compile-Time Datentypen der Validierungen und die Parser stellen auch zur Laufzeit sicher, dass die Datentypen richtig sind

// zur Laufzeit kann aber alles mögliche reinkommen und damit muss man ja auch umgehen können, also sind das hier meine Parser die das richtige Datenformat sicherstellen, indem möglicherweise falsche Werte in einen gültigen Wert gemappt werden 
import {
  insertEmployeeSchema, insertProjectSchema,
  updateProjectSchema
} from "./validation/insert-validation";
import { eq } from "drizzle-orm";


// alles mit zod validieren einmal, der guckt nochmal genau ob, dass was reinkommt auch mit der Form übereinstimmt, die ich weitergeben will an die Datenbank
// --> ich muss wissen wie die Form aussieht und diese dann einmal definieren mithilfe von zod und dann macht er das, auch kompatibel mit RHF!
// --> noch besser ist drizzle-zod, denn da wir sowieso schon mit Drizzle arbeiten, erspart uns drizzle-zod die ganze manuelle Arbeit die wir bei zod machen müssten
// trotzdem erlaubt uns drizzle-zod noch weitere zusätzliche Ergänzungen mit denen weitere Daten überprüft werden können

export async function handleCreateNewEmployee(formData: Employee) {

  const parsedData = insertEmployeeSchema.parse(formData); 
  await db.insert(employeeTable).values(parsedData);

  revalidatePath('/mitarbeiter');
  redirect('/mitarbeiter');

}

export async function handleUpdateEmployee(formData: Employee, id: number) { //wahrscheinlich ist es eher ein FetchedEmployee, aber durch das Mapping sollte das wieder einfach klappen


  const parsedData = insertEmployeeSchema.extend({
    id: z.number().default(id),
  }).safeParse(formData);

  if(!parsedData.success){
    parsedData.error;
  }else{
    await db.update(employeeTable).set(parsedData.data).where(eq(employeeTable.id, parsedData.data.id));
  }
  
  revalidatePath('/mitarbeiter');
  redirect('/mitarbeiter');

}

export async function handleDeleteEmployee(formData: FormData){

  const id = formData.get('id');

  await db.delete(employeeTable).where(eq(employeeTable.id, Number(id)));

  revalidatePath('/mitarbeiter');
  redirect('/mitarbeiter');
  
}


export async function handleCreateProject(formData: Project) {

  const parsedData = insertProjectSchema.parse(formData);

  await db.insert(projectTable).values(parsedData);

  revalidatePath('/projekte');
  redirect('/projekte');

}

export async function handleUpdateProject(formData: Project, id: number){

  const parsedData = updateProjectSchema.extend({
    id: z.number().default(id),
  }).safeParse(formData);

  if(!parsedData.success){
    parsedData.error;
  }else{
    await db.update(projectTable).set(parsedData.data).where(eq(projectTable.id, parsedData.data.id)); // es gibt noch Probleme mit dem Date
  }

  revalidatePath('/projekte');
  redirect('/projekte');
  
}

// export async function handleUpdateProject(formData: Project, id: number) {

//   const parsedData = updateProjectSchema.extend({
//     id: z.number().default(id),
//   }).safeParse(formData);

//   if (!parsedData.success) {
//     parsedData.error;
//     console.error(parsedData.error)
//     return
//   }

//   const parsed = parsedData.data;

//   // Mapping für Drizzle (Date -> string | null)
//   const dbData = {
//     ...parsed,
//     start: parsed.start ? parsed.start.toISOString().split("T")[0] : null,
//     end: parsed.end ? parsed.end.toISOString().split("T")[0] : null,
//   };

//   await db.update(projectTable).set(dbData).where(eq(projectTable.id, parsedData.data.id));


//   revalidatePath('/projekte');
//   redirect('/projekte');

// }

export async function handleDeleteProject(formData: FormData){

  const id = formData.get('id');
// Fall einbauen falls id nicht existiert bzw. ungültig ist
  await db.delete(projectTable).where(eq(projectTable.id, Number(id)));

  revalidatePath('/projekte');
  redirect('/projekte');

}