import React from 'react'
import { handleAddingProjects } from '@/app/actions'

function AddProjectPage() {
    return (
        <div>
            <form action={handleAddingProjects}>
                <div>
                    <input name='projectName' type="text" placeholder='Projekt Name' />
                </div>
                
                <button type='submit'>Speichern</button>

            </form>
        </div>
    )
}

export default AddProjectPage
