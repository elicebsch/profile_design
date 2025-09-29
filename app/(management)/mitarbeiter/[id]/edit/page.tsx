

import EditEmployeeForm from '@/app/components/form/edit_employee-form';
import { fetchEmployeeById } from '@/src/lib/data'
import React from 'react'


export default async function EditPage({ params }: { params: { id: string } }) {

  const { id } = params;
  const data = await fetchEmployeeById(Number(id));

  return (
    <div>
      <EditEmployeeForm data={data}/>
    </div>
  )
}


