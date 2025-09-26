import { z } from 'zod'

const fetchEmployeeSchema = z.object({
    id: z.number(),
    lastName: z.string(),
    firstName: z.string(),
    kuerzel: z.string(),
    skill_name: z.string().nullable().optional(),
    skill_level: z.coerce.number().int().nullable().optional()
});

export const employeeSchema = fetchEmployeeSchema.transform((db => ({
    id: db.id,
    lastName: db.lastName,
    firstName: db.firstName,
    kuerzel: db.kuerzel,
    skill_name: db.skill_name ?? undefined,
    skill_level: db.skill_level != null && [1, 2, 3].includes(db.skill_level)
    ? (db.skill_level as 1 | 2 | 3)
    : undefined,
})));

export type FetchedEmployee = z.infer<typeof employeeSchema>;
