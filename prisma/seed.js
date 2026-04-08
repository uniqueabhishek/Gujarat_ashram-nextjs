import dotenv from 'dotenv'
dotenv.config()

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { admin } from '../lib/db/schema.js'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.error('DATABASE_URL environment variable is not set')
  process.exit(1)
}

const client = postgres(databaseUrl)
const db = drizzle(client)

async function main() {
  const user = process.env.SEED_ADMIN_USER || 'admin'
  const pass = process.env.SEED_ADMIN_PASS || ''

  if (!pass) {
    console.error('Please set SEED_ADMIN_PASS in .env before running seed.')
    process.exit(1)
  }

  const exists = await db.query.admin.findFirst({
    where: (admin, { eq }) => eq(admin.username, user),
  })

  if (exists) {
    console.log('Admin already exists, UPDATING password...')
    const hash = await bcrypt.hash(pass, 12)
    await db
      .update(admin)
      .set({ passwordHash: hash })
      .where(eq(admin.username, user))
    console.log('Password updated to:', pass)
    return
  }

  const hash = await bcrypt.hash(pass, 12)
  const created = await db
    .insert(admin)
    .values({ username: user, passwordHash: hash })
    .returning()

  console.log('Created admin id=', created[0].id)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
