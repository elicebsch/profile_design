'use server'

import { db } from "@/src"

import * as z from 'zod';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { Skill, Employee, Project } from "./definitions";

import { skillTable, employeeTable, projectTable } from "@/src/db/schema";

// Typen die zur Compile-Time überprüfen, ob das Datenformat stimmmt --> nützlich für die Entwicklung, aber nicht für das Deployment, denn zur Laufzeit können ja trotzdem falsche Werte reinkommen
import {
  InsertSkill, InsertEmployee, InsertProject,
  SelectSkill, SelectEmployee, SelectProject
} from "./validation/drizzle_validation-types";

// sind die Rückgabetypen der Parser, also sind es die Compile-Time Datentypen der Validierungen und die Parser stellen auch zur Laufzeit sicher, dass die Datentypen richtig sind
import {
  NewSkill, NewEmployee, NewProject
} from "./validation/insert-validation";

// zur Laufzeit kann aber alles mögliche reinkommen und damit muss man ja auch umgehen können, also sind das hier meine Parser die das richtige Datenformat sicherstellen, indem möglicherweise falsche Werte in einen gültigen Wert gemappt werden 
import {
  insertSkillSchema, insertEmployeeSchema, insertProjectSchema
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


// geht auch formData: unknown, weil es ja sowieso geparsed wird in einen validated Skill
// --> vllt will man aber vorher schon möglichst viel kontrollieren was reinkommt
export async function handleAddingSkills(formData: Skill) {

  // Validierung und Parsing
  const parsedData = insertSkillSchema.parse(formData);

  db.insert(skillTable).values(parsedData);

  revalidatePath("/mitarbeiter/create")
  redirect("/mitarbeiter/create")

}


export async function handleAddingProjects(formData: Project) {

  const parsedData = insertProjectSchema.parse(formData);


  const data: InsertProject = {
    market: formData.market,
    project_name: formData.project_name,
    description: formData.description,
    start: formData.start ? new Date(formData.start).toISOString().slice(0, 10) : null, // ein Format, dass string und Date gleichzeitig ist oder so, aber am Ende trotzdem kompatible mit Drizzle
    end: formData.end ? new Date(formData.end).toISOString().slice(0, 10) : null,
    status: formData.status,
    priority: formData.priority,
    project_manager: formData.project_manager,
    progress: formData.progress,
    customer: formData.customer,
    comment: formData.comment,
  };

  // console.log(data);
  // console.log(parsedData)

  await db.insert(projectTable).values(parsedData);

  revalidatePath('/projekte');
  redirect('/projekte');

}