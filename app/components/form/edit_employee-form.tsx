'use client'

import { Employee } from '@/app/definitions'
import { handleAddingProjects, handleCreateNewEmployee, handleUpdateEmployee } from '@/app/actions'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Project } from '@/app/definitions';
import React from 'react'
import { FetchedEmployee } from '@/app/validation/fetch-validation';
import { useParams } from 'next/navigation';

export default function EditEmployeeForm({ data }: { data: FetchedEmployee }) {

    const { register, handleSubmit, formState: { errors } } = useForm<FetchedEmployee>();
    const {id} = useParams();
    const ident = Number(id);

    return (
        <div>
            <form onSubmit={handleSubmit((data) => handleUpdateEmployee(data, ident))} className='flex-col space-y-0.5'>

                <div>
                    {/* <label htmlFor="Vorname">Vorname</label> */}
                    <input {...register("firstName", { required: 'Vorname erforderlich!' })} type="text" placeholder='Vorname'
                        defaultValue={data.firstName}
                    />
                    <span className='text-red-600'>{errors.firstName?.message}</span>
                </div>

                <div>
                    {/* <label htmlFor="Name">Name</label> */}
                    <input {...register("lastName", { required: 'Nachname erforderlich!' })} type="text" placeholder='Name'
                        defaultValue={data.lastName}
                    />
                    <span className='text-red-600'>{errors.lastName?.message}</span>
                </div>

                <div>
                    {/* <label htmlFor="kuerzel">Kürzel</label> */}
                    <input {...register("kuerzel", { required: 'Kürzel erforderlich!' })} type="text" placeholder='Kürzel'
                        defaultValue={data.kuerzel ?? 'schon wieder undefined???'} 
                        />
                    <span className='text-red-600'>{errors.kuerzel?.message}</span>
                </div>

                <div>
                    <label htmlFor="Skills">Skills</label>
                    {/* <SkillTable /> */}
                    <div>
                        <input {...register("skill_name")} type="text" placeholder='Skill' 
                        defaultValue={data.skill_name ?? ''}
                        />
                        <input {...register("skill_level")} type="number" placeholder='Level' 
                        defaultValue={data.skill_level ?? ''}
                        />
                        {/* Button der einen neuen Skill hinzufügt*/}
                    </div>
                </div>

                {/* <div className='flex flex-col'>
                    <label htmlFor="Projekte">Projekte</label> */}
                {/* ProjektTable */}
                {/* <select name="project" id="project" className='input-base'>
                        <option value="Projekt auswählen">Projekt auswählen</option>
                        {projects.map((p) => (
                            <option key={p.project_name} value={p.project_name}>
                                {p.project_name}
                            </option>
                        ))}
                    </select>

                </div> */}

                <button type='submit' className=''>Submit</button>

            </form>
        </div>
    )
}

