# Testing Strategy & Implementation Guide

## Overview

This document outlines the testing approach for the Gujarat Ashram Next.js project. We'll use **Vitest** (faster, lighter than Jest) with integration tests that hit a real test database.

---

## Testing Stack

| Tool | Purpose | Why |
|------|---------|-----|
| **Vitest** | Test runner | 10x faster than Jest, better Vite integration |
| **@vitest/ui** | Test dashboard | Visual test results |
| **supertest** | HTTP testing | Easy API endpoint testing |
| **dotenv** | Env config | Test environment variables |

---

## Testing Pyramid

```
       E2E Tests (5%)
      UI Component Tests (15%)
     Integration Tests (30%)
    Unit Tests (50%)
```

### What We'll Test:

1. **Unit Tests (50%)**
   - Database helpers
   - Utility functions
   - Data validation

2. **Integration Tests (30%)**
   - API routes with real database
   - Database operations (CRUD)
   - Error handling

3. **UI Component Tests (15%)**
   - Form submissions
   - Button clicks
   - State changes

4. **E2E Tests (5%)**
   - Complete user workflows
   - Cross-feature interactions

---

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm add -D vitest @vitest/ui supertest @testing-library/react @testing-library/jest-dom dotenv
pnpm add -D @types/supertest
```

### 2. Configure Vitest

Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.config.*',
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    }
  }
})
```

### 3. Create Test Setup File

Create `tests/setup.ts`:

```typescript
import { expect, afterAll, beforeAll, describe } from 'vitest'
import dotenv from 'dotenv'

// Load test environment
dotenv.config({ path: '.env.test' })

// Global test setup
beforeAll(() => {
  console.log('🧪 Test suite starting...')
})

afterAll(() => {
  console.log('✅ Test suite complete')
})
```

### 4. Create `.env.test`

```bash
# Test environment - uses separate test database
DATABASE_URL="postgresql://neondb_owner:PASSWORD@HOST/neondb_test"
NODE_ENV="test"
JWT_SECRET="test-secret-key-for-testing-only"
```

---

## Test Organization

```
tests/
├── setup.ts                 # Global setup
├── fixtures/                # Test data
│   ├── menuItems.json
│   ├── events.json
│   └── images.json
├── api/                     # API route tests
│   ├── about.test.ts
│   ├── events.test.ts
│   ├── images.test.ts
│   ├── menu-items.test.ts
│   └── ... (all 15 endpoints)
├── db/                      # Database tests
│   ├── schema.test.ts
│   ├── operations.test.ts
│   └── migrations.test.ts
└── utils/                   # Utility tests
    ├── validators.test.ts
    └── helpers.test.ts
```

---

## Example Test: API Route

### File: `tests/api/menu-items.test.ts`

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import request from 'supertest'
import { db, menuItem } from '@/lib/db'
import { eq } from 'drizzle-orm'

const baseUrl = 'http://localhost:3000'

describe('Menu Items API', () => {
  let testItemId: number

  beforeEach(async () => {
    // Insert test data
    const result = await db
      .insert(menuItem)
      .values({
        name: 'Test Item',
        url: '/test',
        order: 99,
      })
      .returning()
    
    testItemId = result[0].id
  })

  afterEach(async () => {
    // Clean up test data
    await db.delete(menuItem).where(eq(menuItem.id, testItemId))
  })

  describe('GET /api/menu-items', () => {
    it('should return all menu items', async () => {
      const response = await request(baseUrl)
        .get('/api/menu-items')
        .expect(200)

      expect(response.body).toHaveProperty('data')
      expect(Array.isArray(response.body.data)).toBe(true)
      expect(response.body.data.length).toBeGreaterThan(0)
    })

    it('should have valid menu item structure', async () => {
      const response = await request(baseUrl)
        .get('/api/menu-items')
        .expect(200)

      const item = response.body.data[0]
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('name')
      expect(item).toHaveProperty('url')
      expect(item).toHaveProperty('order')
    })
  })

  describe('POST /api/menu-items', () => {
    it('should create new menu item', async () => {
      const newItem = {
        name: 'New Menu Item',
        url: '/new',
        order: 5,
      }

      const response = await request(baseUrl)
        .post('/api/menu-items')
        .send(newItem)
        .expect(200)

      expect(response.body.id).toBeDefined()
      expect(response.body.name).toBe(newItem.name)
    })

    it('should reject missing required fields', async () => {
      const invalidItem = {
        name: 'Incomplete Item',
        // url is missing
      }

      const response = await request(baseUrl)
        .post('/api/menu-items')
        .send(invalidItem)
        .expect(400)

      expect(response.body).toHaveProperty('error')
    })
  })

  describe('PUT /api/menu-items/:id', () => {
    it('should update menu item', async () => {
      const updates = {
        name: 'Updated Name',
        url: '/updated',
      }

      const response = await request(baseUrl)
        .put(`/api/menu-items/${testItemId}`)
        .send(updates)
        .expect(200)

      expect(response.body.name).toBe(updates.name)
      expect(response.body.url).toBe(updates.url)
    })

    it('should handle non-existent item', async () => {
      const response = await request(baseUrl)
        .put('/api/menu-items/99999')
        .send({ name: 'Test' })
        .expect(404)

      expect(response.body).toHaveProperty('error')
    })
  })

  describe('DELETE /api/menu-items/:id', () => {
    it('should delete menu item', async () => {
      const response = await request(baseUrl)
        .delete(`/api/menu-items/${testItemId}`)
        .expect(200)

      // Verify deletion
      const check = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, testItemId))
      
      expect(check).toHaveLength(0)
    })
  })
})
```

---

## Example Test: Database Operations

### File: `tests/db/operations.test.ts`

```typescript
import { describe, it, expect, beforeEach } from 'vitest'
import { db, event, menuItem } from '@/lib/db'
import { eq, desc } from 'drizzle-orm'

describe('Database Operations', () => {
  describe('Create Operations', () => {
    it('should insert event with all fields', async () => {
      const newEvent = {
        title: 'Test Yoga Class',
        date: '2026-04-15',
        endDate: '2026-04-15',
        description: 'Beginner yoga session',
        category: 'yoga',
        isActive: true,
      }

      const result = await db
        .insert(event)
        .values(newEvent)
        .returning()

      expect(result[0]).toMatchObject(newEvent)
      expect(result[0].id).toBeDefined()
    })

    it('should set default values', async () => {
      const result = await db
        .insert(event)
        .values({
          title: 'Test Event',
          date: '2026-04-20',
          description: 'Test',
        })
        .returning()

      expect(result[0].isActive).toBe(true)
      expect(result[0].category).toBe('yoga')
    })
  })

  describe('Read Operations', () => {
    it('should retrieve items ordered by property', async () => {
      const items = await db
        .select()
        .from(menuItem)
        .orderBy(desc(menuItem.order))

      expect(Array.isArray(items)).toBe(true)
      // Verify ordering
      for (let i = 0; i < items.length - 1; i++) {
        expect(items[i].order).toBeGreaterThanOrEqual(items[i + 1].order)
      }
    })
  })

  describe('Update Operations', () => {
    it('should update timestamp on modification', async () => {
      const item = await db
        .insert(menuItem)
        .values({ name: 'Test', url: '/test', order: 0 })
        .returning()

      const originalUpdatedAt = item[0].updatedAt

      // Wait a bit
      await new Promise(resolve => setTimeout(resolve, 100))

      const updated = await db
        .update(menuItem)
        .set({ name: 'Updated' })
        .where(eq(menuItem.id, item[0].id))
        .returning()

      expect(updated[0].updatedAt.getTime())
        .toBeGreaterThan(originalUpdatedAt.getTime())
    })
  })

  describe('Delete Operations', () => {
    it('should delete record and verify removal', async () => {
      const item = await db
        .insert(menuItem)
        .values({ name: 'Delete Test', url: '/delete', order: 0 })
        .returning()

      const id = item[0].id

      await db.delete(menuItem).where(eq(menuItem.id, id))

      const check = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, id))

      expect(check).toHaveLength(0)
    })
  })
})
```

---

## Running Tests

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# UI dashboard
pnpm test:ui

# Coverage report
pnpm test:coverage

# Run specific test file
pnpm test tests/api/menu-items.test.ts

# Run tests matching pattern
pnpm test -t "should create"
```

---

## Update `package.json`

Add these scripts:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

---

## CI/CD Integration

### GitHub Actions Workflow

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: neondb_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'

      - run: pnpm install
      - run: pnpm test
      - run: pnpm test:coverage
```

---

## Best Practices

### 1. **Test Database Isolation**
- Use separate test database
- Clean up after each test
- Never share state between tests

### 2. **Meaningful Assertions**
```typescript
// ❌ Bad
expect(response.status).toBe(200)

// ✅ Good
expect(response.status).toBe(200)
expect(response.body).toHaveProperty('data')
expect(response.body.data).toEqual(expectedData)
```

### 3. **Clear Test Names**
```typescript
// ❌ Bad
it('works', () => { ... })

// ✅ Good
it('should return 404 when deleting non-existent menu item', () => { ... })
```

### 4. **Test Edge Cases**
- Missing fields
- Invalid types
- Boundary values
- Concurrent operations
- Error states

### 5. **Arrange-Act-Assert Pattern**
```typescript
it('should create item and return with id', async () => {
  // Arrange
  const newItem = { name: 'Test', url: '/test' }

  // Act
  const response = await request(baseUrl)
    .post('/api/menu-items')
    .send(newItem)

  // Assert
  expect(response.status).toBe(200)
  expect(response.body.id).toBeDefined()
})
```

---

## Coverage Goals

| Category | Target | Current |
|----------|--------|---------|
| API Routes | 90% | 0% |
| Database Ops | 85% | 0% |
| Utilities | 100% | 0% |
| Components | 70% | 0% |
| **Overall** | **80%** | **0%** |

---

## Next Steps

1. Install Vitest and dependencies
2. Create test setup file
3. Create `.env.test` with test database
4. Write tests for critical API routes first
5. Add tests for database operations
6. Set up CI/CD automation
7. Aim for 80% coverage

---

## Resources

- [Vitest Docs](https://vitest.dev)
- [Supertest Docs](https://github.com/visionmedia/supertest)
- [Testing Library](https://testing-library.com)
