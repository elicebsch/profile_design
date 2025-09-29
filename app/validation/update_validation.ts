import * as z from 'zod';

const insertUpdatedProjectSchema = z.object({
    id: z.number(),
    market: z.string().optional(),
    project_name: z.string(),
    description: z.string(),
    start: z.date().optional(),
    end: z.date().optional(),
    status: z.enum(["completed", "inProgress"]).optional(),
    priority: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    project_manager: z.string().optional(),
    progress: z.number().min(0).max(100).optional(),
    customer: z.string().optional(),
    comment: z.string().optional(),
})

const projectSchema = insertUpdatedProjectSchema.transform((db) => ({
    
}))