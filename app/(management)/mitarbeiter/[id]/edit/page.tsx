

import EditEmployeeForm from '@/app/components/form/edit_employee-form';
import { fetchEmployeeById } from '@/src/lib/data'
import React from 'react'


export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  const data = await fetchEmployeeById(Number(id));

  return (
    <div>
      <EditEmployeeForm data={data}/>
    </div>
  )
}


