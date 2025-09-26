import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';
import { employeeTable, projectTable, skillTable } from '@/src/db/schema';

// für (optionale) leere Input Felder defaultValue auf Null setzen statt auf einen (globale) definierten default-Wert; 
// --> Best-Practice!

export const insertSkillSchema = createInsertSchema(skillTable, {
  skill_name: (z) => z.min(1).max(100),
  skill_level: (z) => z.min(1).max(3),
});
export type NewSkill = z.infer<typeof insertSkillSchema>;


export const insertEmployeeSchema = createInsertSchema(employeeTable);
export type NewEmployee = z.infer<typeof  insertEmployeeSchema>;

export const updateEmployeeSchema = createInsertSchema(employeeTable, {
  
});



export const insertProjectSchema = createInsertSchema(projectTable); // hier kann ich auch ein Objekt mitgeben in dem die zu validierenden Felder weitere Eigenschaften bekommen sollen, sowie defaultWerte
export type NewProject = z.infer<typeof insertProjectSchema>;


// export const skillSchema = z.object({
//   name: z.string().min(1),
//   level: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// });

// export const employeeSchema = z.object({
//   firstName: z.string().min(1),
//   lastName: z.string().min(1),
//   kuerzel: z.string().min(1),
//   skill: skillSchema,
// });

// export type EmployeeFormData = z.infer<typeof employeeSchema>;
