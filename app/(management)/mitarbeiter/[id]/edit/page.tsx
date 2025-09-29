

import EditEmployeeForm from '@/app/components/form/edit_employee-form';
import { fetchEmployeesById } from '@/src/lib/data'
import React from 'react'


export default async function EditPage({ params }: { params: { id: string } }) {

  const { id } = params;
  const data = await fetchEmployeesById(Number(id));

  return (
    <div>
      <EditEmployeeForm data={data}/>
    </div>
  )
}


