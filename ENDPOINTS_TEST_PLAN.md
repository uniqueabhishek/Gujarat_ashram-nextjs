# API Endpoints Testing Plan

## Overview

This document outlines the remaining **13 API endpoints** that need test coverage. Two endpoints already have test examples:
- ✅ `menu-items` (reference example in `tests/api/menu-items.test.ts`)
- ✅ Database operations (reference example in `tests/db/operations.test.ts`)

---

## Testing Status

| # | Endpoint | Model | Tests | Priority | Notes |
|---|----------|-------|-------|----------|-------|
| 1 | `/api/menu-items` | MenuItem | ✅ Done | - | Reference example |
| 2 | `/api/hero-buttons` | HeroButton | ⏳ TODO | HIGH | Similar to menu-items |
| 3 | `/api/footer-links` | FooterLink | ⏳ TODO | MEDIUM | Similar to menu-items |
| 4 | `/api/footer-buttons` | FooterButton | ⏳ TODO | MEDIUM | Simple CRUD |
| 5 | `/api/social-links` | SocialLink | ⏳ TODO | MEDIUM | Simple CRUD |
| 6 | `/api/info-cards` | InfoCard | ⏳ TODO | MEDIUM | Includes active flag |
| 7 | `/api/events` | Event | ⏳ TODO | HIGH | Complex data, dates |
| 8 | `/api/about` | AboutContent | ⏳ TODO | MEDIUM | Singleton data |
| 9 | `/api/contact` | ContactInfo | ⏳ TODO | MEDIUM | Multiple types |
| 10 | `/api/footer-settings` | FooterSettings | ⏳ TODO | LOW | Singleton data |
| 11 | `/api/images/upload` | SiteImage | ⏳ TODO | HIGH | File handling |
| 12 | `/api/images/by-category/[category]` | SiteImage | ⏳ TODO | MEDIUM | Filtering |
| 13 | `/api/images/[id]` | SiteImage | ⏳ TODO | MEDIUM | Single record |
| 14 | `/api/images/reorder` | SiteImage | ⏳ TODO | HIGH | Complex operation |
| 15 | `/api/test` | Multiple | ✅ Basic | LOW | Diagnostic endpoint |

---

## Quick Copy-Paste Templates

### Template 1: Simple CRUD Endpoints
Use for: `hero-buttons`, `footer-buttons`, `footer-links`, `social-links`

```typescript
// tests/api/ENDPOINT_NAME.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { db, MODEL_NAME } from '@/lib/db'
import { eq } from 'drizzle-orm'

describe('ENDPOINT_NAME API', () => {
  let testId: number

  beforeEach(async () => {
    const result = await db
      .insert(MODEL_NAME)
      .values({
        // Add required fields from schema
      })
      .returning()
    testId = result[0].id
  })

  afterEach(async () => {
    await db.delete(MODEL_NAME).where(eq(MODEL_NAME.id, testId))
  })

  describe('CRUD Operations', () => {
    it('should retrieve all items', async () => {
      const items = await db.select().from(MODEL_NAME)
      expect(Array.isArray(items)).toBe(true)
    })

    it('should create item', async () => {
      const result = await db
        .insert(MODEL_NAME)
        .values({ /* fields */ })
        .returning()
      expect(result[0].id).toBeDefined()
      await db.delete(MODEL_NAME).where(eq(MODEL_NAME.id, result[0].id))
    })

    it('should update item', async () => {
      const result = await db
        .update(MODEL_NAME)
        .set({ /* field */ })
        .where(eq(MODEL_NAME.id, testId))
        .returning()
      expect(result[0]).toBeDefined()
    })

    it('should delete item', async () => {
      await db.delete(MODEL_NAME).where(eq(MODEL_NAME.id, testId))
      const check = await db.select().from(MODEL_NAME).where(eq(MODEL_NAME.id, testId))
      expect(check).toHaveLength(0)
      testId = -1
    })
  })
})
```

### Template 2: Endpoints with Special Fields
Use for: `info-cards` (has `isActive`), `events` (complex fields)

```typescript
describe('Filtering by Active Status', () => {
  it('should retrieve only active items', async () => {
    const active = await db
      .select()
      .from(MODEL_NAME)
      .where(eq(MODEL_NAME.isActive, true))
    
    expect(active.every(item => item.isActive)).toBe(true)
  })

  it('should toggle active status', async () => {
    const result = await db
      .update(MODEL_NAME)
      .set({ isActive: !isActive })
      .where(eq(MODEL_NAME.id, testId))
      .returning()
    
    expect(result[0].isActive).toBe(!isActive)
  })
})
```

### Template 3: Singleton Data (Single Record)
Use for: `about`, `footer-settings`

```typescript
describe('Singleton Content', () => {
  it('should retrieve singleton record', async () => {
    const records = await db.select().from(MODEL_NAME)
    // Singleton should have exactly 1 record
    expect(records.length).toBeLessThanOrEqual(1)
  })

  it('should update singleton fields', async () => {
    const records = await db.select().from(MODEL_NAME)
    const id = records[0]?.id
    
    if (!id) return
    
    const result = await db
      .update(MODEL_NAME)
      .set({ field: 'new value' })
      .where(eq(MODEL_NAME.id, id))
      .returning()
    
    expect(result[0].field).toBe('new value')
  })
})
```

### Template 4: Filtering & Ordering
Use for: `images/by-category`, `events` with filtering

```typescript
describe('Filtering and Ordering', () => {
  it('should filter by category', async () => {
    const filtered = await db
      .select()
      .from(siteImage)
      .where(eq(siteImage.category, 'hero'))
    
    expect(filtered.every(img => img.category === 'hero')).toBe(true)
  })

  it('should order by specified field', async () => {
    const ordered = await db
      .select()
      .from(MODEL_NAME)
      .orderBy(MODEL_NAME.order)
    
    for (let i = 0; i < ordered.length - 1; i++) {
      expect(ordered[i].order).toBeLessThanOrEqual(ordered[i + 1].order)
    }
  })
})
```

### Template 5: Complex Operations
Use for: `images/reorder` (batch update)

```typescript
describe('Batch Operations', () => {
  it('should reorder items', async () => {
    // Create test items
    const items = []
    for (let i = 0; i < 3; i++) {
      const result = await db
        .insert(siteImage)
        .values({ /* ... */, order: i })
        .returning()
      items.push(result[0])
    }

    // Reorder them
    const newOrder = [2, 0, 1] // Map old order to new positions
    for (let i = 0; i < items.length; i++) {
      await db
        .update(siteImage)
        .set({ order: newOrder[i] })
        .where(eq(siteImage.id, items[i].id))
    }

    // Verify
    const result = await db
      .select()
      .from(siteImage)
      .orderBy(siteImage.order)

    // Cleanup
    for (const item of items) {
      await db.delete(siteImage).where(eq(siteImage.id, item.id))
    }
  })
})
```

---

## Specific Endpoint Guides

### 1. `/api/hero-buttons` ⭐ HIGH PRIORITY
**Model:** HeroButton
**Fields:** id, name, url, variant, order, createdAt, updatedAt

Copy from `menu-items.test.ts` with these adjustments:
- Change `menuItem` to `heroButton`
- Test `variant` field (default value test)
- Test `order` field functionality

```bash
cp tests/api/menu-items.test.ts tests/api/hero-buttons.test.ts
# Then edit and customize
```

---

### 2. `/api/events` ⭐ HIGH PRIORITY
**Model:** Event
**Fields:** id, title, date, endDate, description, buttonText, buttonUrl, isActive, category, createdAt, updatedAt

Focus tests on:
- ✅ Date validation (startDate < endDate)
- ✅ Category filtering (yoga, meditation, etc.)
- ✅ Active/inactive status
- ✅ Optional button fields
- ✅ Date range queries

```typescript
describe('Event Date Handling', () => {
  it('should store date range correctly', async () => {
    const result = await db
      .insert(event)
      .values({
        title: 'Multi-day event',
        date: '2026-05-01',
        endDate: '2026-05-05',
        description: 'Test'
      })
      .returning()
    
    expect(result[0].date).toBe('2026-05-01')
    expect(result[0].endDate).toBe('2026-05-05')
  })
})
```

---

### 3. `/api/images/upload` ⭐ HIGH PRIORITY
**Model:** SiteImage
**Special:** File upload handling

Focus tests on:
- ✅ File type validation (jpg, png, gif, webp)
- ✅ File size validation (5MB limit)
- ✅ Category assignment
- ✅ Order auto-increment
- ✅ Database record creation

```typescript
describe('Image Upload Validation', () => {
  it('should reject invalid file types', async () => {
    // Mock invalid file type
    // Verify error handling
  })

  it('should enforce file size limit', async () => {
    // Test file > 5MB
    // Verify rejection
  })

  it('should assign category correctly', async () => {
    // Upload image with category
    // Verify category is stored
  })

  it('should auto-increment order per category', async () => {
    // Upload multiple images to same category
    // Verify order is sequential
  })
})
```

---

### 4. `/api/images/by-category/[category]`
**Model:** SiteImage
**Special:** Category filtering

```typescript
describe('Image Filtering by Category', () => {
  it('should return images for specific category', async () => {
    const hero = await db
      .select()
      .from(siteImage)
      .where(eq(siteImage.category, 'hero'))
    
    expect(hero.every(img => img.category === 'hero')).toBe(true)
  })

  it('should return empty array for unknown category', async () => {
    const result = await db
      .select()
      .from(siteImage)
      .where(eq(siteImage.category, 'unknown'))
    
    expect(result).toHaveLength(0)
  })
})
```

---

### 5. `/api/images/reorder` ⭐ HIGH PRIORITY
**Model:** SiteImage
**Special:** Batch update operation

```typescript
describe('Image Reordering', () => {
  it('should reorder items within category', async () => {
    // Setup: Create 3 images in 'hero' category
    // Execute: Reorder them [2, 0, 1]
    // Verify: Check new order in DB
  })

  it('should maintain order consistency', async () => {
    // Verify no duplicate orders in same category
    // Verify no gaps in order sequence
  })
})
```

---

### 6. `/api/contact` (ContactInfo)
**Fields:** id, type, label, value, url, order, isActive, createdAt, updatedAt
**Types:** phone, email, whatsapp, address, website

```typescript
describe('Contact Info Types', () => {
  it('should support all contact types', async () => {
    const types = ['phone', 'email', 'whatsapp', 'address', 'website']
    
    for (const type of types) {
      const result = await db
        .insert(contactInfo)
        .values({
          type,
          label: `Test ${type}`,
          value: `value-${type}`
        })
        .returning()
      
      expect(result[0].type).toBe(type)
      await db.delete(contactInfo).where(eq(contactInfo.id, result[0].id))
    }
  })

  it('should include URL for web types', async () => {
    const result = await db
      .insert(contactInfo)
      .values({
        type: 'website',
        label: 'Website',
        value: 'ashram.com',
        url: 'https://ashram.com'
      })
      .returning()
    
    expect(result[0].url).toBe('https://ashram.com')
  })
})
```

---

## Writing Order Recommendation

1. **HIGH PRIORITY** (Most critical, 70% of bug risk)
   - [ ] `/api/events` - Complex data, most used
   - [ ] `/api/images/upload` - File handling, edge cases
   - [ ] `/api/images/reorder` - Batch operations
   - [ ] `/api/hero-buttons` - Foundation endpoint

2. **MEDIUM PRIORITY** (Important, 20% of bug risk)
   - [ ] `/api/footer-links`
   - [ ] `/api/footer-buttons`
   - [ ] `/api/social-links`
   - [ ] `/api/info-cards`
   - [ ] `/api/contact`
   - [ ] `/api/images/[id]`
   - [ ] `/api/images/by-category/[category]`

3. **LOW PRIORITY** (Nice-to-have, 10% of bug risk)
   - [ ] `/api/about` - Singleton
   - [ ] `/api/footer-settings` - Singleton
   - [ ] `/api/test` - Diagnostic

---

## Progress Tracking

```bash
# Count completed tests
find tests/api -name "*.test.ts" -type f | wc -l

# View coverage
pnpm test:coverage
```

---

## Validation Checklist

For each endpoint, test:

- [ ] **CRUD Operations**
  - [ ] GET (list all)
  - [ ] GET by id (single)
  - [ ] POST (create)
  - [ ] PUT (update)
  - [ ] DELETE (remove)

- [ ] **Data Validation**
  - [ ] Required fields validation
  - [ ] Type validation
  - [ ] Length/format validation
  - [ ] Enum validation (if applicable)

- [ ] **Default Values**
  - [ ] Auto-set fields (timestamps)
  - [ ] Default values (isActive, category, etc.)

- [ ] **Edge Cases**
  - [ ] Special characters
  - [ ] Long strings
  - [ ] Boundary values
  - [ ] Null/undefined handling

- [ ] **Error Handling**
  - [ ] Missing required fields
  - [ ] Invalid data types
  - [ ] Non-existent records
  - [ ] Concurrent operations

- [ ] **Performance**
  - [ ] Query ordering
  - [ ] Filtering accuracy
  - [ ] Batch operations

---

## Resources

- Reference: [Menu Items Test](./tests/api/menu-items.test.ts)
- Reference: [DB Operations Test](./tests/db/operations.test.ts)
- Template: [API Test Template](./tests/API_TEST_TEMPLATE.ts)
- Guide: [Testing Strategy](./TESTING_STRATEGY.md)
- Quick Start: [Testing Quickstart](./TESTING_QUICKSTART.md)

---

## Running Tests

```bash
# All tests
pnpm test

# Watch mode
pnpm test:watch

# Specific file
pnpm test tests/api/events.test.ts

# Matching pattern
pnpm test -t "should create"

# View UI
pnpm test:ui
```

---

**Next Step:** Pick 1-2 HIGH PRIORITY endpoints and write their tests. Start with `/api/hero-buttons` (simple copy) or `/api/events` (learn complex scenarios).

Let's go! 🚀
