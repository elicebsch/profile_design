
import React from 'react'

import { fetchProjects, fetchProjectById} from '@/src/lib/data'

import EmployeeForm from '@/app/components/form/employee-form'




export default async function CreateNewEmployee() {
 
  const projects = await fetchProjects(); // ohne Angabe von id werden alle Projects gefetched --> sollte ich nicht machen, muss man trennen
  

  // const [projects, setProjects] = useState<Project[]>([])

  // useEffect(() => {
  //   const loadProjects = async () => {
  //     const data = await fetchProjects()
  //     setProjects(data)
  //   }
  //   loadProjects()
  // }, [])

  return (
    <div>
      <EmployeeForm projects={projects}/>

    </div>
  )
}


