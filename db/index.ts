import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema';
import { ENV_VARS } from '@/lib/envVars';


const connectionString = ENV_VARS.DATABASE_URL;

const client = postgres(connectionString)
export const db = drizzle(client, {schema});
