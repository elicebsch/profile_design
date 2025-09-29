import { fetchProjects, fetchProjectById, fetchProjectsBySearchParams } from '@/src/lib/data'
import { SearchParams } from 'next/dist/server/request/search-params'
import React from 'react'
import ProjectCard from '../project-card';

async function ProjectTable({ searchParams } 
  : {
    searchParams?
    : {
      query?: string,
      page?: string
    }
  }) { // hier nicht von nextJS sonder wirklich als Prop übergeben, weil ich mich entschieden habe die Auswertung erst in dieser Component zu machen

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  const projects = await fetchProjectsBySearchParams(query);

  return (
    <div>

      {projects.map((p) =>

        <ul className=''
          key={p.id}>
          <div className=''>
            <ProjectCard
              project={p}
            />
          </div>
        </ul>

      )}

    </div>
  )
}

export default ProjectTable
