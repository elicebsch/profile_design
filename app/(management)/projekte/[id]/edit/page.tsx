

import React from 'react'
import { fetchProjectById } from '@/src/lib/data';

import EditProjectForm from '@/app/components/form/edit_project-form';

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {

  const {id} = await params;
  const project = await fetchProjectById(Number(id));
  
  return (
    <div>
      <EditProjectForm project={project}/>
    </div>
  )
}

