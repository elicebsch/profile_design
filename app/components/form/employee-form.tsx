'use client'

import React from 'react'

import { useForm } from 'react-hook-form'

import { Employee } from '@/app/validation/fetch-validation'
import { Project } from '@/app/validation/fetch-validation'
import { handleCreateNewEmployee } from '@/app/actions'


export default function EmployeeForm({ projects }: { projects: Project[] }) {

    const { register, handleSubmit, formState: { errors } } = useForm<Employee>()

    return (
        <div>
            <form onSubmit={handleSubmit((data) => handleCreateNewEmployee(data))} className='flex-col space-y-0.5'>

                <div>
                    {/* <label htmlFor="Vorname">Vorname</label> */}
                    <input {...register("firstName", { required: 'Vorname erforderlich!' })} type="text" placeholder='Vorname' />
                    <span className='text-red-600'>{errors.firstName?.message}</span>
                </div>

                <div>
                    {/* <label htmlFor="Name">Name</label> */}
                    <input {...register("lastName", { required: 'Nachname erforderlich!' })} type="text" placeholder='Name' />
                    <span className='text-red-600'>{errors.lastName?.message}</span>
                </div>

                <div>
                    {/* <label htmlFor="kuerzel">Kürzel</label> */}
                    <input {...register("kuerzel", {required: 'Kürzel erforderlich!'}) } type="text" placeholder='Kürzel' />
                    <span className='text-red-600'>{errors.kuerzel?.message}</span>
                </div>

                <div>
                    <label htmlFor="Skills">Skills</label>
                    {/* <SkillTable /> */}
                    <div>
                        <input {...register("skill_name")} type="text" placeholder='Skill' />
                        <input {...register("skill_level")} type="text" placeholder='Level' />
                        {/* Button */}
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="Projekte">Projekte</label>
                    {/* ProjektTable */}
                    <select name="project" id="project" className='input-base'>
                        <option value="Projekt auswählen">Projekt auswählen</option>
                        {projects.map((p) => (
                            <option key={p.project_name} value={p.project_name}>
                                {p.project_name}
                            </option>
                        ))}
                    </select>

                </div>

                <button type='submit' className=''>Submit</button>

            </form>

        </div>
    )
}
