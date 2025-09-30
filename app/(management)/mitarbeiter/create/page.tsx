
import React from 'react'

import { fetchProjects, fetchProjectById, fetchSkills} from '@/src/lib/data'

import EmployeeForm from '@/app/components/form/employee-form'




export default async function CreateNewEmployee() {
 
  const projects = await fetchProjects(); // ohne Angabe von id werden alle Projects gefetched --> sollte ich nicht machen, muss man trennen
  
  const skills = await fetchSkills();

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
      <EmployeeForm 
      skills={skills}
      projects={projects}/>

    </div>
  )
}


