'use client'

import { Employee } from '@/app/validation/fetch-validation';
import React from 'react'
import { useState } from 'react';
import SkillCard from '../skill-card';
import MergeTable from '../merge-table';


export default function MergeWrapper({ employee }: { employee: Employee }) {

    // you would extract Skill[] from your current employee and use a state with skillCard, later with the projects from the employee too
    
    const [card, setCard] = useState<Employee>();

    const addCard = () => {
        setCard(employee);
    };

    return (
        <div>
            <div className='flex'>
                <div className='flex-1 p-4'>
                    {/* gesamtes Profil */}
                    <SkillCard
                        employee={employee}
                        add={addCard}
                    />
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className='flex-1 p-4'>
                    {/* angepasstes Profil */}
                    <MergeTable 
                    card={card}
                    />
                </div>
            </div>
        </div>
    )
}


