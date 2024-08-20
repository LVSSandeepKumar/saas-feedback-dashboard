import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema';

const connectionString = JSON.stringify(process.env.DATABASE_URL);

const client = postgres(connectionString)
export const db = drizzle(client, {schema});
