import { defineConfig } from 'drizzle-kit'
import { ENV_VARS } from './lib/envVars'
export default defineConfig({
  schema: "./db/schema.ts",
  dialect: 'postgresql',
  migrations: {
    prefix: 'supabase'
  },
  dbCredentials: {
    url: ENV_VARS.DATABASE_URL
  }
})