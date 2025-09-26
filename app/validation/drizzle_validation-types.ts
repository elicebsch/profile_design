import { skillTable, projectTable, employeeTable } from "@/src/db/schema"

import { InferInsertModel, InferSelectModel } from "drizzle-orm"


// nur für Compile-Time sinnvoll zu benutzen
export type InsertSkill = InferInsertModel<typeof skillTable>;
export type SelectSkill = InferSelectModel<typeof skillTable>;

export type InsertProject = InferInsertModel<typeof projectTable>;
export type SelectProject = InferSelectModel<typeof projectTable>;

export type InsertEmployee = InferInsertModel<typeof employeeTable>;
export type SelectEmployee = InferSelectModel<typeof employeeTable>;

