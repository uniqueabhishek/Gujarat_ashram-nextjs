import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Get DATABASE_URL from environment
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set')
}

// Singleton pattern: reuse the connection across Next.js HMR reloads in dev.
// Without this, every hot-reload creates a new TCP/TLS/auth roundtrip → 3-4s cold starts.
declare global {
  var __db: ReturnType<typeof drizzle> | undefined
}

function createDb() {
  const client = postgres(databaseUrl!, {
    max: 3,             // small pool; enough for concurrent API routes
    idle_timeout: 30,   // release idle connections after 30s
    connect_timeout: 10, // fail fast if DB unreachable
  })
  return drizzle(client, { schema })
}

export const db = globalThis.__db ?? (globalThis.__db = createDb())

export * from './schema'
