

import EditEmployeeForm from '@/app/components/form/edit_employee-form';
import { fetchEmployeesById } from '@/src/lib/data'
import React from 'react'


async function EditPage({ params }: { params: { id: string } }) {

  const id: number = Number(params.id);
  const data = await fetchEmployeesById(id);

  return (
    <div>
      <EditEmployeeForm data={data}/>
    </div>
  )
}

export default EditPage
