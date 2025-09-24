import { Table } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";
import { pgTable as table } from "drizzle-orm/pg-core";

// export const usersTable = table("users", {
//   id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: t.varchar({ length: 255 }).notNull(),
//   age: t.integer().notNull(),
//   email: t.varchar({ length: 255 }).notNull().unique(),
// });

export const mitarbeiterTable = table("mitarbeiter", {
  id: t.integer().primaryKey().generatedByDefaultAsIdentity(),
  firstName: t.varchar({ length: 255 }).notNull(),
  lastName: t.varchar({length: 255}).notNull(),
}
);