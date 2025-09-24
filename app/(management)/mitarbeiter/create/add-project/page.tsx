'use client'

import React from 'react'
import { handleAddingProjects } from '@/app/actions'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Project } from '@/app/definitions';


function AddProjectPage() { // am besten einfach bestehendes Projekt dem Mitarbeiter hinzufügen oder neues erstellen, dabei ist aber sehr wichtig, dass diese Projekte auch der Projekt Tabelle hinzugefügt werden

    const { register, handleSubmit, formState: { errors } } = useForm<Project>(); // <Project> scheint sehr wichtig gewesen zu sein! useForm muss wissen von welchem Typ, damit handleSubmit das auch weiß, welche Form data hat, um es zu übergeben

    console.log(errors);

    return (
        <div>
            <form onSubmit={handleSubmit((data) => {console.log(data); handleAddingProjects(data)})}>

                <input {...register('market')} placeholder="Markt" />
                <input {...register('project_name', { required: 'Projektname ist erforderlich!' })} placeholder="Projektname" />
                <p className='text-red-600'>{errors.project_name?.message}</p>
                <input {...register('description')} placeholder="Beschreibung" />
                <input type="date" {...register('start')} />
                <input type="date" {...register('end')} />
                <select {...register('status')} className='input-base'>
                    <option value="">Status wählen</option>
                    <option value="completed">Abgeschlossen</option>
                    <option value="inProgress">In Bearbeitung</option>
                </select>
                <input type="number" {...register('priority')} placeholder="Priorität" />
                <input {...register('project_manager')} placeholder="Projektleiter" />

                <input type="number" min='0' max='100' {...register('progress')} placeholder="Fortschritt (%)" />
                {/* <label htmlFor="progress">Fortschritt</label>
                <input type="range" min="0" max="100" step="5" {...register('progress')} placeholder="Fortschritt (%)" /> */}

                <input {...register('customer')} placeholder="Kunde" />
                <input {...register('comment')} placeholder="Bemerkung" />


                <button type='submit'>Speichern</button>
            </form>
        </div>
    )
}

export default AddProjectPage
