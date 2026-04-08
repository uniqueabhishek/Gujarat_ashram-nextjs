# Testing Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
pnpm install
```

### Step 2: Configure Test Database

Copy `.env.test` and update with your test database:

```bash
# Copy template
cp .env.test .env.test

# Edit with your test database connection
# (Use a separate PostgreSQL database for testing)
```

### Step 3: Run Tests

```bash
# Run all tests
pnpm test

# Watch mode (auto-rerun on changes)
pnpm test:watch

# View test UI dashboard
pnpm test:ui

# Generate coverage report
pnpm test:coverage
```

---

## 📋 What's Included

### Test Files
- ✅ **Menu Items API** - Complete CRUD test example (`tests/api/menu-items.test.ts`)
- ✅ **Database Operations** - Model-level tests (`tests/db/operations.test.ts`)
- 📋 **Test Template** - Copy for new endpoints (`tests/API_TEST_TEMPLATE.ts`)

### Configuration Files
- ✅ `vitest.config.ts` - Test runner configuration
- ✅ `tests/setup.ts` - Global test setup
- ✅ `.env.test` - Test environment variables
- ✅ `.github/workflows/test.yml` - CI/CD automation

---

## 🧪 Writing Your First Test

### 1. Copy the Template

```bash
cp tests/API_TEST_TEMPLATE.ts tests/api/my-feature.test.ts
```

### 2. Update the Template

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { db, myModel } from '@/lib/db'
import { eq } from 'drizzle-orm'

describe('My Feature API', () => {
  let testId: number

  beforeEach(async () => {
    // Create test data
    const result = await db
      .insert(myModel)
      .values({ name: 'Test', /* ... */ })
      .returning()
    
    testId = result[0].id
  })

  afterEach(async () => {
    // Clean up
    await db.delete(myModel).where(eq(myModel.id, testId))
  })

  describe('GET', () => {
    it('should retrieve items', async () => {
      const items = await db.select().from(myModel)
      expect(items.length).toBeGreaterThan(0)
    })
  })

  describe('POST', () => {
    it('should create item', async () => {
      const result = await db
        .insert(myModel)
        .values({ name: 'New' })
        .returning()
      
      expect(result[0].id).toBeDefined()
    })
  })

  // Add more tests...
})
```

### 3. Run Your Tests

```bash
# Run all tests
pnpm test

# Run only your test file
pnpm test tests/api/my-feature.test.ts

# Watch mode
pnpm test:watch
```

---

## 🎯 Testing Checklist

For each API endpoint, create tests for:

- [ ] **GET** - Retrieve all items
- [ ] **GET :id** - Retrieve single item
- [ ] **POST** - Create new item
- [ ] **PUT :id** - Update item
- [ ] **DELETE :id** - Delete item
- [ ] **Error cases** - Invalid input, missing fields
- [ ] **Edge cases** - Special characters, boundary values

---

## 📊 Current Test Coverage

| File | Tests | Status |
|------|-------|--------|
| menu-items | 20+ | ✅ Complete |
| database-operations | 25+ | ✅ Complete |
| Other 13 endpoints | 0 | ⏳ TODO |

### Priority Order for New Tests

1. **High Priority** (Most critical)
   - `images/upload` - File handling
   - `events` - Complex data
   - `admin` - Authentication

2. **Medium Priority**
   - `hero-buttons`, `footer-links`
   - `social-links`, `contact`

3. **Low Priority**
   - `test` endpoint
   - Less frequently used endpoints

---

## 🔍 Test Examples

### Simple Test
```typescript
it('should create menu item', async () => {
  const result = await db.insert(menuItem).values({
    name: 'Test Item',
    url: '/test',
  }).returning()

  expect(result[0].id).toBeDefined()
})
```

### Test with Cleanup
```typescript
it('should update item', async () => {
  const item = await db.insert(menuItem)
    .values({ name: 'Original', url: '/test' })
    .returning()

  const updated = await db.update(menuItem)
    .set({ name: 'Updated' })
    .where(eq(menuItem.id, item[0].id))
    .returning()

  expect(updated[0].name).toBe('Updated')

  // Cleanup
  await db.delete(menuItem).where(eq(menuItem.id, item[0].id))
})
```

### Test with Multiple Assertions
```typescript
it('should validate event structure', async () => {
  const items = await db.select().from(event)

  expect(items.length).toBeGreaterThan(0)
  
  const item = items[0]
  expect(item).toHaveProperty('id')
  expect(item).toHaveProperty('title')
  expect(item).toHaveProperty('date')
  expect(item.isActive).toBe(true)
})
```

---

## 🐛 Debugging Tests

### Run Single Test File
```bash
pnpm test tests/api/menu-items.test.ts
```

### Run Specific Test
```bash
pnpm test -t "should create menu item"
```

### Watch Mode
```bash
pnpm test:watch
```

### View Test UI
```bash
pnpm test:ui
# Opens http://localhost:51204/__vitest__/
```

### Debug in Node Inspector
```bash
node --inspect-brk ./node_modules/vitest/vitest.mjs run
```

---

## 📈 Coverage Reports

```bash
# Generate coverage
pnpm test:coverage

# View HTML report
open coverage/index.html
```

Coverage targets:
- Lines: 80%
- Functions: 80%
- Branches: 80%
- Statements: 80%

---

## 🚦 Best Practices

### ✅ DO
- Use descriptive test names
- Test one thing per test
- Clean up after each test
- Use `beforeEach`/`afterEach` for setup/teardown
- Test error cases
- Group related tests with `describe`

### ❌ DON'T
- Don't share state between tests
- Don't test implementation details
- Don't ignore test failures
- Don't write tests that depend on test order
- Don't hardcode test data
- Don't skip tests without reason

---

## 🔗 CI/CD Integration

Tests automatically run on:
- ✅ Every push to master/main/develop
- ✅ Every pull request
- ✅ Coverage reports uploaded to Codecov

View status in GitHub Actions tab.

---

## 📚 More Resources

- [Vitest Documentation](https://vitest.dev)
- [Drizzle ORM Testing](https://orm.drizzle.team)
- [Testing Best Practices](./TESTING_STRATEGY.md)
- [Audit Report](./AUDIT_REPORT.md)

---

## 💡 Need Help?

1. Check test examples in `tests/api/menu-items.test.ts`
2. Copy template from `tests/API_TEST_TEMPLATE.ts`
3. Read `TESTING_STRATEGY.md` for detailed guide
4. Run `pnpm test:ui` to see visual results

Happy testing! 🎉
