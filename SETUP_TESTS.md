# Setup Tests - Step by Step ✅

## Prerequisites
- Node.js 18+ ✅
- pnpm installed ✅
- PostgreSQL database access ✅
- Your project cloned ✅

---

## Step 1: Install Dependencies ⏱️ 2 minutes

```bash
cd "d:\D Desktop\Next JS Gujarat_Ashram"
pnpm install
```

**What this does:**
- Installs Vitest, Supertest, Testing Library, etc.
- Updates `node_modules` with test dependencies
- Creates `pnpm-lock.yaml` entries

**Expected output:**
```
├─ vitest@1.1.0
├─ @vitest/ui@1.1.0
├─ supertest@6.3.3
└─ ... (other dependencies)
```

---

## Step 2: Configure Test Database ⏱️ 5 minutes

### Option A: Using Neon (Recommended)

1. **Go to Neon Console**
   - https://console.neon.tech
   - Find your project

2. **Create Test Branch**
   - Click "Create Branch"
   - Name it: `test-db` or `testing`
   - Branch from: `main`

3. **Get Connection String**
   - Copy the connection string from new branch
   - It will be: `postgresql://user:pass@host/neondb_test`

4. **Update `.env.test`**
   ```bash
   # Open file: d:\D Desktop\Next JS Gujarat_Ashram\.env.test
   
   # Replace this line:
   DATABASE_URL="postgresql://..."
   
   # With your test branch connection:
   DATABASE_URL="postgresql://neondb_owner:password@ep-branch.c-3.us-east-2.aws.neon.tech/neondb_test?channel_binding=require&sslmode=require"
   ```

### Option B: Using Local PostgreSQL

1. **Ensure PostgreSQL is running**
   ```bash
   # On Windows, PostgreSQL service should be running
   # Check: Services → PostgreSQL
   ```

2. **Create test database**
   ```sql
   CREATE DATABASE neondb_test;
   ```

3. **Update `.env.test`**
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/neondb_test"
   ```

---

## Step 3: Verify Configuration ⏱️ 2 minutes

Test the database connection:

```bash
# This will print the database info
cd "d:\D Desktop\Next JS Gujarat_Ashram"
pnpm test:setup
```

**Expected output:**
```
✅ Test environment loaded
📊 Database: neondb_test
```

**If you get an error:**
- ❌ "DATABASE_URL not set" → Check `.env.test` exists
- ❌ "Connection refused" → Check PostgreSQL is running
- ❌ "Authentication failed" → Check credentials are correct

---

## Step 4: Run Existing Tests ⏱️ 3 minutes

```bash
# Run all tests once
pnpm test

# Or run with output
pnpm test --reporter=verbose
```

**Expected output:**
```
✓ tests/api/menu-items.test.ts (20 tests) 234ms
  ✓ Menu Items API
    ✓ GET - Retrieve menu items
      ✓ should retrieve all menu items
      ✓ should have valid structure
      ... (15 more tests)
    ✓ POST - Create menu items (3 tests)
    ✓ PUT - Update menu items (3 tests)
    ✓ DELETE - Remove menu items (2 tests)

✓ tests/db/operations.test.ts (25 tests) 456ms
  ✓ Database Operations
    ✓ Event Model (12 tests)
    ✓ SiteImage Model (6 tests)
    ✓ Cross-Model Operations (1 test)

Test Files  2 passed (2)
     Tests  45 passed (45)
```

**If tests fail:**
1. Check error message carefully
2. Verify `.env.test` has correct DATABASE_URL
3. Try: `pnpm test -- --reporter=verbose` for more details
4. Check PostgreSQL connection: `psql -U postgres -h localhost`

---

## Step 5: Try the Test UI ⏱️ 2 minutes

```bash
# Opens visual dashboard
pnpm test:ui
```

**Expected:**
- Browser opens automatically
- Shows all tests with green checkmarks ✅
- Can click tests to see details
- Can filter by name
- URL: http://localhost:51204/__vitest__/

---

## Step 6: Run Tests in Watch Mode ⏱️ 5 minutes

```bash
# Auto-rerun tests on file changes
pnpm test:watch
```

**How to use:**
- Make a change to a test file
- Watch the results update automatically
- Press `q` to quit
- Press `a` to run all
- Press `p` to filter by filename

---

## Step 7: Generate Coverage Report ⏱️ 3 minutes

```bash
# Generate coverage report
pnpm test:coverage
```

**Expected output:**
```
File           | % Statements | % Branch | % Funcs | % Lines
---------------|--------------|----------|---------|--------
lib/db/schema  |        100   |   100    |   100   |  100
All files      |         45   |    35    |    50   |   45
```

**View HTML report:**
```bash
# Open coverage report in browser
start coverage/index.html
```

---

## ✅ Success Checklist

After completing all steps, verify:

- [ ] All dependencies installed (`node_modules` exists)
- [ ] `.env.test` file exists and has DATABASE_URL
- [ ] Can connect to test database
- [ ] `pnpm test` runs and shows 45+ passing tests
- [ ] `pnpm test:ui` opens in browser
- [ ] Coverage report generates successfully

---

## Quick Reference Commands

```bash
# Install
pnpm install

# Run once
pnpm test

# Watch mode
pnpm test:watch

# Visual UI
pnpm test:ui

# Coverage
pnpm test:coverage

# Single file
pnpm test tests/api/menu-items.test.ts

# Match pattern
pnpm test -t "should create"

# Verbose output
pnpm test --reporter=verbose
```

---

## Troubleshooting 🔧

### "Module not found: @/lib/db"
**Solution:** Clear cache and reinstall
```bash
del .next
pnpm install
pnpm test
```

### "Database connection timeout"
**Solution:** 
1. Check PostgreSQL is running
2. Check database URL in `.env.test`
3. Try connecting with psql:
   ```bash
   psql "your-connection-string"
   ```

### "Port 5432 already in use"
**Solution:** PostgreSQL might be running twice
```bash
# Kill all PostgreSQL processes
taskkill /F /IM postgres.exe
# Then restart PostgreSQL service
```

### "Tests timeout after 5 seconds"
**Solution:** Increase timeout in `vitest.config.ts`:
```typescript
test: {
  testTimeout: 30000  // 30 seconds
}
```

### "Test database not initialized"
**Solution:** Create tables by running migrations
```bash
# If you have migration scripts
pnpm prisma migrate dev

# Or seed test data
pnpm seed
```

---

## Next Steps After Setup 🚀

1. **Learn from examples**
   - Read: `tests/api/menu-items.test.ts`
   - Read: `tests/db/operations.test.ts`

2. **Write new tests**
   - Copy: `tests/API_TEST_TEMPLATE.ts`
   - Follow: `ENDPOINTS_TEST_PLAN.md`

3. **Improve coverage**
   - Target: 80% coverage
   - Focus: HIGH priority endpoints first

4. **Integrate with CI/CD**
   - Tests already run on GitHub Actions
   - View results in Actions tab

---

## Estimated Time ⏱️

| Task | Time |
|------|------|
| Install dependencies | 2 min |
| Configure database | 5 min |
| Verify setup | 2 min |
| Run tests | 3 min |
| Try UI | 2 min |
| Watch mode | 2 min |
| Coverage | 3 min |
| **Total** | **~20 minutes** |

---

## Support Resources 📚

- **Quick Start:** `TESTING_QUICKSTART.md`
- **Detailed Guide:** `TESTING_STRATEGY.md`
- **Test Plan:** `ENDPOINTS_TEST_PLAN.md`
- **Summary:** `TESTING_SUMMARY.md`
- **Example Tests:** `tests/api/menu-items.test.ts`

---

## You're Done! 🎉

You now have:
- ✅ Working test infrastructure
- ✅ 45+ passing tests
- ✅ Test UI dashboard
- ✅ Coverage reporting
- ✅ Watch mode
- ✅ CI/CD integration

**Start writing more tests!** Pick one endpoint from `ENDPOINTS_TEST_PLAN.md` and copy the template. You've got this! 🚀
