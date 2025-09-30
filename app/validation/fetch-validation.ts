import { number, z } from 'zod'

import { createSelectSchema } from 'drizzle-zod';

import { employeeTable, projectTable, skillTable } from '@/src/db/schema';

export const selectSkillSchema = createSelectSchema(skillTable).extend({skill_level: z.number()});
export const selectSkillsSchema = z.array(selectSkillSchema);
export type Skill = z.infer<typeof selectSkillSchema>;

export const selectProjectSchema = createSelectSchema(projectTable);
export const selectProjectsSchema = z.array(selectProjectSchema);
export type Project = z.infer<typeof selectProjectSchema>;

export const selectEmployeeSchema = createSelectSchema(employeeTable).extend({
    skills: selectSkillsSchema,
    projects: selectProjectsSchema,
});
export const selectEmployeesSchema = z.array(selectEmployeeSchema);
export type Employee = z.infer<typeof selectEmployeeSchema>;
// export type Employees = z.infer<typeof selectEmployeesSchema>; --> äquivalent zu Employee[]




// const fetchEmployeeSchema = z.object({
//     id: z.number(),
//     lastName: z.string(),
//     firstName: z.string(),
//     kuerzel: z.string(),
//     skill_name: z.string().nullable().optional(),
//     skill_level: z.coerce.number().int().nullable().optional()
// });


// export const employeeSchema = fetchEmployeeSchema.transform((db => ({
//     id: db.id,
//     lastName: db.lastName,
//     firstName: db.firstName,
//     kuerzel: db.kuerzel,
//     skill_name: db.skill_name ?? undefined,
//     skill_level: db.skill_level != null && [1, 2, 3].includes(db.skill_level)
//     ? (db.skill_level as 1 | 2 | 3)
//     : undefined,
// })));

// export const employeesSchema = z.array(employeeSchema);

// export type FetchedEmployee = z.infer<typeof employeeSchema>;
