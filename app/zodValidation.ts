import { z } from 'zod';

export const skillSchema = z.object({
  name: z.string().min(1),
  level: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});

export const employeeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  kuerzel: z.string().min(1),
  skill: skillSchema,
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;
