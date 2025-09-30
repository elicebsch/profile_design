import React from 'react'
import { Employee } from '../validation/fetch-validation'
import SkillCard from './skill-card'

export default function MergeTable({card}: {card?: Employee}) {
    if(!card) return (
        <div>Kein Auswahl!</div>
    )
  return (
    <div>
      <SkillCard 
      employee={card}
      add={() => {}}
      />
    </div>
  )
}


