import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

import { db } from '..';
import { mitarbeiterTable } from '../db/schema';
import { eq, like, or } from 'drizzle-orm';



export function fetchEmployeesById(id?: number) {
    return id === undefined // selbe wie in Kotlin mit '=='
      ? db.select().from(mitarbeiterTable)
      : db.select().from(mitarbeiterTable).where(eq(mitarbeiterTable.id, id));
  }

export function fetchEmployeesBySearchParams(searchParams: string = 'Mustermann'){ // hier fehlt noch das man auch nach dem vornamen suchen kann
    return db.select()
    .from(mitarbeiterTable)
    .where(
        or(
            like(mitarbeiterTable.lastName, `%${searchParams}%`),
            like(mitarbeiterTable.firstName, `%${searchParams}%`)
        )
    );
}
  