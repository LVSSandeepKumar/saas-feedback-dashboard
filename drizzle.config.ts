import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./db/schema.ts",
  dialect: 'postgresql',
  migrations: {
    prefix: 'supabase'
  },
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://postgres.slnvwyslmekwowhznnkb:Fd0eQZo0q3Xsyq2M@aws-0-ap-south-1.pooler.supabase.com:5432/postgres"
  }
})