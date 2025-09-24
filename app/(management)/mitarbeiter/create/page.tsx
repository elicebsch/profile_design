import React from 'react'
import { handleCreateNewEmployee } from '@/app/actions'
import Link from 'next/link'
import SkillTable from '@/app/components/Tables/table-skills'
import ProjectTable from '@/app/components/Tables/table-projects'




function CreateNewEmployee() {
  return (
    <div>
      <form action={handleCreateNewEmployee} className='flex-col space-y-0.5'>

        <div>
          {/* <label htmlFor="Vorname">Vorname</label> */}
          <input name='vorname' type="text" placeholder='Vorname' />
        </div>

        <div>
          {/* <label htmlFor="Name">Name</label> */}
          <input name='name' type="text" placeholder='Name' />
        </div>

        <div>
          {/* <label htmlFor="kuerzel">Kürzel</label> */}
          <input name='kuerzel' type="text" placeholder='Kürzel'/>
        </div>

        <div>
          <label htmlFor="Skills">Skills</label>
          <SkillTable />
          <Link className='button' href='/mitarbeiter/create/add-skill'>Skills hinzufügen</Link>
        </div>

        <div>
          <label htmlFor="Projekte">Projekte</label>
          <ProjectTable />
          <Link className='button' href='/mitarbeiter/create/add-project'>Projekte hinzufügen</Link>
        </div>

        <button type='submit' className=''>Submit</button>

      </form>

    </div>
  )
}

export default CreateNewEmployee
