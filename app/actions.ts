'use server'

import { db } from "@/src"
import { mitarbeiterTable } from "@/src/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from 'zod';
import { Employee, Skill } from "./definitions";
import { Project } from "./definitions";
import { projectTable } from "@/src/db/schema";




export async function handleCreateNewEmployee(formData: FormData) {
    const data = {
        firstName: formData.get('vorname') as string,
        lastName: formData.get('name') as string,
        kuerzel: formData.get('kuerzel') as string,
    };
    console.log(data);
    await db.insert(mitarbeiterTable).values(data);


    revalidatePath('/mitarbeiter');
    redirect('/mitarbeiter');


}

export async function handleAddingSkills(formData: Skill) {

}

// function handleAddingProjects(formData: FormData): Promise<void>;
// function handleAddingProjects(formData: Employee) Promise<void>;
export async function handleAddingProjects(formData: Project) {
    
  // theoretisch kann man formData direkt an .values(formData) übergeben, aber man muss dann noch darauf achten, dass das Format auch kompatible ist mit dem was man einfügen will
  // --> eigentlich mal gucken, ob es sich noch lohnt zod zur Validierung zu benutzen
  
  const data = {
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

  console.log(data);
  
  await db.insert(projectTable).values(data);

  revalidatePath('/mitarbeiter/create');
  redirect('/mitarbeiter/create'); // muss angepasst werden, weil wir wollen das auslagern und nicht direkt in /../create
    
}