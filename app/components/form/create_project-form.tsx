'use client'


import React from 'react'
import { handleCreateProject } from '@/app/actions'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Project } from '@/app/validation/fetch-validation'


export default function ProjectForm() { // hatte die Idee das hier als edit und create vorlage zu nehmen und wenn es true ist oder so dann wird das selbe nur mit defaultValues ausgeführt

  const { register, handleSubmit, formState: { errors } } = useForm<Project>();

  return (
    <div>
      <form onSubmit={handleSubmit((data) => { console.log(data); handleCreateProject(data) })}>

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
        <input type="number" {...register('priority')} placeholder="Priorität"/>
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


