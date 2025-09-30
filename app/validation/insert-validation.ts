import { z } from 'zod';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import { employeeTable, projectTable, skillTable } from '@/src/db/schema';
import { selectProjectsSchema, selectSkillsSchema } from './fetch-validation';


// für (optionale) leere Input Felder defaultValue auf Null setzen statt auf einen (globale) definierten default-Wert; 
// --> Best-Practice!

// Skills

export const insertSkillSchema = createInsertSchema(skillTable).extend({skill_level: z.number()});
export const insertSkillsSchema = z.array(insertSkillSchema);

export const updateSkillSchema = createUpdateSchema(skillTable);

// Project

export const insertProjectSchema = createInsertSchema(projectTable, {
  progress: z.preprocess(
    val => {
      if (val === "" || val == null) return null; // oder undefined
      return Number(val);
    },
    z.number().nullable()
  ),
  priority: z.preprocess(
    val => {
      if (val === "" || val == null) return null;
      return Number(val);
    }, z.number().nullable()
  ),
  start: z.preprocess(
    val =>
      val === "" ? null : val,
    z.date().nullable()),
  end: z.preprocess(
    val =>
      val === "" ? null : val,
    z.date().nullable()),
  status: z.preprocess(
    val => val === "" ? undefined : val,
    z.enum(["completed", "inProgress"]).optional()
  )

}); // hier kann ich auch ein Objekt mitgeben in dem die zu validierenden Felder weitere Eigenschaften bekommen sollen, sowie defaultWerte
export const insertProjectsSchema = z.array(insertProjectSchema);

export type NewProject = z.infer<typeof insertProjectSchema>;

export const updateProjectSchema = createInsertSchema(projectTable, {
  progress: z.preprocess(
    val => {
      if (val === "" || val == null) return null; // oder undefined
      return Number(val);
    },
    z.number().nullable()
  ),
  priority: z.preprocess(
    val => {
      if (val === "" || val == null) return null;
      return Number(val);
    }, z.number().nullable()
  ),
  start: z.preprocess(
    val =>
      val === "" ? null : val,
    z.date().nullable()),
  end: z.preprocess(
    val =>
      val === "" ? null : val,
    z.date().nullable()),
  status: z.preprocess(
    val => val === "" ? undefined : val,
    z.enum(["completed", "inProgress"]).optional()
  )

});



// Employee

export const insertEmployeeSchema = createInsertSchema(employeeTable).extend({
  skills: selectSkillsSchema,
  projects: selectProjectsSchema,
});
export type NewEmployee = z.infer<typeof insertEmployeeSchema>;

export const updateEmployeeSchema = createInsertSchema(employeeTable, {

});

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
