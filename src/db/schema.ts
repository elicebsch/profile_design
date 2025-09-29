import { Table } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";
import { pgTable as table } from "drizzle-orm/pg-core";
import { pgEnum } from "drizzle-orm/pg-core";



// export const usersTable = table("users", {
//   id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: t.varchar({ length: 255 }).notNull(),
//   age: t.integer().notNull(),
//   email: t.varchar({ length: 255 }).notNull().unique(),
// });

export const employeeTable = table("mitarbeiter", {
  id: t.integer().primaryKey().generatedByDefaultAsIdentity(),
  firstName: t.varchar({ length: 255 }).notNull(),
  lastName: t.varchar({ length: 255 }).notNull(),
  kuerzel: t.varchar({ length: 255 }).notNull(),
  skill_name: t.varchar({ length: 255 }),
  skill_level: t.varchar({ length: 255 })
});

export const statusEnum = pgEnum('status', ['completed', 'inProgress', '']);

export const projectTable = table("projects", {
  id: t.integer().primaryKey().generatedByDefaultAsIdentity(),
  market: t.varchar('market', { length: 100 }),
  project_name: t.varchar('name', { length: 255 }).notNull(),
  description: t.text('description'),
  start: t.date('start'),
  end: t.date('end'),
  status: statusEnum('status'),
  priority: t.integer('priority'),
  project_manager: t.varchar('project_manager', { length: 255 }), // aktuell als string
  progress: t.integer('progress'),
  customer: t.varchar('customer', { length: 255 }),
  comment: t.text('comment'),
})

export const skillTable = table("skills", {
  id: t.integer().primaryKey().generatedByDefaultAsIdentity(),
  skill_name: t.varchar('name', { length: 100 }),
  skill_level: t.integer('level'),
})