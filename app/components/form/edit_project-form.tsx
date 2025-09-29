'use client'


import React from 'react'
import { handleCreateProject, handleUpdateProject } from '@/app/actions'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Project } from '@/app/validation/fetch-validation'
import { useParams } from 'next/navigation';


export default function EditProjectForm({ project }: { project: Project }) { // hatte die Idee das hier als edit und create vorlage zu nehmen und wenn es true ist oder so dann wird das selbe nur mit defaultValues ausgeführt

    // const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm<Project>();

    const {id} = useParams();
    const ident = Number(id);


    return (
        <div>
            <form onSubmit={handleSubmit((data) => { console.log(data); handleUpdateProject(data, ident) })}>

                <input {...register('market')} placeholder="Markt"
                    defaultValue={project.market ?? ''}
                />
                <input {...register('project_name', { required: 'Projektname ist erforderlich!' })} placeholder="Projektname"
                    defaultValue={project.project_name}
                />
                <p className='text-red-600'>{errors.project_name?.message}</p>
                <input {...register('description')} placeholder="Beschreibung"
                    defaultValue={project.description ?? ''}
                />
                <input type="date" {...register('start')}
                    defaultValue={project.start ?? ''}
                />
                <input type="date" {...register('end')}
                    defaultValue={project.end ?? ''}
                />
                <select {...register('status')} className='input-base'
                    defaultValue={project.status ?? ''}>
                    <option value="">Status wählen</option>
                    <option value="completed">Abgeschlossen</option>
                    <option value="inProgress">In Bearbeitung</option>
                </select>
                <input type="number" {...register('priority')} placeholder="Priorität"
                    defaultValue={project.priority ?? ''}
                />
                <input {...register('project_manager')} placeholder="Projektleiter"
                    defaultValue={project.project_manager ?? ''}
                />

                <input type="number" min='0' max='100' {...register('progress')} placeholder="Fortschritt (%)"
                    defaultValue={project.progress ?? ''}
                />
                {/* <label htmlFor="progress">Fortschritt</label>
                <input type="range" min="0" max="100" step="5" {...register('progress')} placeholder="Fortschritt (%)" /> */}

                <input {...register('customer')} placeholder="Kunde" 
                defaultValue={project.customer ?? ''}
                />
                <input {...register('comment')} placeholder="Bemerkung" 
                defaultValue={project.comment ?? ''}
                />


                <button type='submit'>Speichern</button>
            </form>
        </div>
    )
}



