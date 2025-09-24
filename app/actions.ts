'use server'

import { db } from "@/src"
import { mitarbeiterTable } from "@/src/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from 'zod';




export async function handleCreateNewEmployee(formData: FormData){
    const data = {
        firstName: formData.get('vorname') as string,
        lastName: formData.get('name') as string,
    };
    console.log(data);
    await db.insert(mitarbeiterTable).values(data);


    revalidatePath('/mitarbeiter');
    redirect('/mitarbeiter');
    
    
}

export async function handleAddingSkills(formData: FormData){

}

export async function handleAddingProjects(formData:FormData) {
    
}