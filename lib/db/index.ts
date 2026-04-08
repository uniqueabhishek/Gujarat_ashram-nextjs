import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Get DATABASE_URL from environment
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set')
}

// Create PostgreSQL client
const client = postgres(databaseUrl)

// Create Drizzle instance with all schema tables
export const db = drizzle(client, { schema })

export * from './schema'
