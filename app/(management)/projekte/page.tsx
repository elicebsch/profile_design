import React from 'react'
import ProjectForm from '@/app/components/form/create_project-form'
import Link from 'next/link'
import ProjectTable from '@/app/components/tables/table-projects'
import { SearchParams } from 'next/dist/server/request/search-params'
import Search from '@/app/components/search-bar'

export default async function ProjectPage(props: { 
  searchParams?: Promise<{
      query?: string;
      page?: string;
  }>;
}) {

    const searchParams = await props.searchParams;
    
  return (
    <div className='space-y-1'>

      <div className='flex gap-2 p-2'>

        <Search placeholder='Suche nach Projekten' />

        <Link href='/projekte/create'>
          <button>Projekt hinzufügen</button>
        </Link>

      </div>

      <div className=''>
        <h1 className="p-6">Projekt Übersicht</h1>
        <ProjectTable searchParams={searchParams} />
      </div>

    </div>
  )
}


