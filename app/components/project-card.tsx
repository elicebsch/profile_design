import React from 'react'
import Link from 'next/link'
import { PencilIcon } from '@heroicons/react/24/solid'
import { Project } from '../definitions'


function ProjectCard({
    id,
    project_name
}: Project) {
    return (
        <div className=''>
            <div className="rounded-xl bg-white shadow-md p-4 flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-800">
                    <h1>{project_name}</h1>
                </div>
                <div className='flex gap-1'>
                    <Link href={`/projekte/${id}/edit`}>
                        <button className="text-gray-500 hover:text-gray-700">
                            <PencilIcon className="h-5 w-5 hover:text-gray-700" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
