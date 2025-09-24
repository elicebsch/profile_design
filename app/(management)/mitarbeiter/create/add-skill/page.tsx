import React from 'react'
import { handleAddingSkills } from '@/app/actions'

function AddSkillPage() {
    return (
        <div>
            <form action={handleAddingSkills}>
                <div>
                    <input name='skill' type="text" placeholder='Skill' />
                    <input name='level' type="text" placeholder='Level' />
                </div>

                <button type='submit'>Speichern</button>

            </form>

        </div>
    )
}

export default AddSkillPage
