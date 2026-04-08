import { beforeAll, afterAll, afterEach, describe } from 'vitest'
import dotenv from 'dotenv'

// Load test environment variables
dotenv.config({ path: '.env.test' })

// Ensure test database is configured
if (!process.env.DATABASE_URL) {
  throw new Error(
    '❌ DATABASE_URL not set in .env.test\n' +
    'Please create .env.test with a test database connection string'
  )
}

console.log('✅ Test environment loaded')
console.log(`📊 Database: ${process.env.DATABASE_URL?.split('@')[1]?.split('/')[0]}`)

// Global test hooks
beforeAll(() => {
  console.log('\n🧪 Starting test suite...\n')
})

afterAll(() => {
  console.log('\n✅ Test suite complete\n')
})

// Clean up after each test to prevent side effects
afterEach(async () => {
  // Note: Individual test files handle their own cleanup
  // This is a global hook for any shared cleanup
})
