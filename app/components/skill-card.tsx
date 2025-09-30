'use client'

import React from 'react'
import { Employee } from '../validation/fetch-validation'

export default function SkillCard({
    employee,
    add,
}: { employee: Employee, 
    add: () => void, 
}) {
    return (
        <div className=''>
            <div className="rounded-xl bg-white shadow-md p-4 flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-800">
                    <h1>{employee.skill_name}</h1>
                    <h2>Level: {employee.skill_level}</h2>
                </div>
                <div className='flex gap-1'>
                    <button onClick={add}>Hinzufügen</button>
                </div>
            </div>
        </div>
    )
}

