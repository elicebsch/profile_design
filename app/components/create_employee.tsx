import Link from 'next/link'
import React from 'react'

function CreateEmployee() {
  return (
    <div className='px-2'>
      <Link href="/mitarbeiter/create" className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
        <span className=''>Mitarbeiter hinzufügen</span>
      </Link>
    </div>
  )
}

export default CreateEmployee
