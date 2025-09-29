

import React from 'react'
import { fetchProjectById } from '@/src/lib/data';

import EditProjectForm from '@/app/components/form/edit_project-form';

export default async function EditProjectPage({ params }: { params: { id: string } }) {

  const id: number = Number(params.id);
  const project = await fetchProjectById(id)
  
  return (
    <div>
      <EditProjectForm project={project}/>
    </div>
  )
}

