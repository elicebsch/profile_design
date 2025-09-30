
import EmployeeCard from '@/app/components/employee-card';
import SkillCard from '@/app/components/skill-card';
import MergeWrapper from '@/app/components/wrapper/merge_wrapper';
import { fetchEmployeeById } from '@/src/lib/data'
import React from 'react'


async function MergePage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const employee = await fetchEmployeeById(Number(id));


  return (
    <div>
      <div>
        <h1>Employee MergePage von:</h1>


        <EmployeeCard
          id={Number(id)}
          firstName={employee.firstName}
          lastName={employee.lastName}
        />
      </div>

      <MergeWrapper
        employee={employee}
      />

    </div>
  )
}

export default MergePage
