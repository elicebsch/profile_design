'use client'

import React from 'react'
import { useParams } from 'next/navigation'

function EditPage() {
  const { id } = useParams()

  return (
    <div>
      <h1>Mitarbeiter bearbeiten: {id}</h1>
    </div>
  )
}

export default EditPage
