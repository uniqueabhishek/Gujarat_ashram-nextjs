import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { db, menuItem } from '@/lib/db'
import { eq } from 'drizzle-orm'

/**
 * Menu Items API Tests
 * Tests CRUD operations for menu items
 */
describe('Menu Items API', () => {
  let testItemId: number

  beforeEach(async () => {
    // Insert test data before each test
    const result = await db
      .insert(menuItem)
      .values({
        name: 'Test Menu Item',
        url: '/test-menu',
        isSpecial: false,
        variant: 'default',
        order: 99,
      })
      .returning()

    if (result.length === 0) {
      throw new Error('Failed to create test menu item')
    }

    testItemId = result[0].id
  })

  afterEach(async () => {
    // Clean up test data after each test
    try {
      await db.delete(menuItem).where(eq(menuItem.id, testItemId))
    } catch (error) {
      console.error('Cleanup failed:', error)
    }
  })

  describe('GET - Retrieve menu items', () => {
    it('should retrieve all menu items from database', async () => {
      const items = await db.select().from(menuItem)

      expect(Array.isArray(items)).toBe(true)
      expect(items.length).toBeGreaterThan(0)
    })

    it('should have valid menu item structure', async () => {
      const items = await db.select().from(menuItem).limit(1)

      const item = items[0]
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('name')
      expect(item).toHaveProperty('url')
      expect(item).toHaveProperty('order')
      expect(item).toHaveProperty('isSpecial')
      expect(item).toHaveProperty('variant')
      expect(item).toHaveProperty('createdAt')
      expect(item).toHaveProperty('updatedAt')
    })

    it('should retrieve specific menu item by id', async () => {
      const items = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, testItemId))

      expect(items).toHaveLength(1)
      expect(items[0].name).toBe('Test Menu Item')
    })

    it('should return empty array for non-existent id', async () => {
      const items = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, 999999))

      expect(items).toHaveLength(0)
    })
  })

  describe('POST - Create menu items', () => {
    it('should create new menu item with required fields', async () => {
      const newItem = {
        name: 'New Menu Item',
        url: '/new-menu',
        order: 5,
      }

      const result = await db
        .insert(menuItem)
        .values(newItem)
        .returning()

      expect(result).toHaveLength(1)
      expect(result[0].id).toBeDefined()
      expect(result[0].name).toBe(newItem.name)
      expect(result[0].url).toBe(newItem.url)

      // Cleanup
      await db.delete(menuItem).where(eq(menuItem.id, result[0].id))
    })

    it('should set default values for optional fields', async () => {
      const newItem = {
        name: 'Minimal Item',
        url: '/minimal',
      }

      const result = await db
        .insert(menuItem)
        .values(newItem)
        .returning()

      expect(result[0].isSpecial).toBe(false)
      expect(result[0].variant).toBe('default')
      expect(result[0].order).toBe(0)

      // Cleanup
      await db.delete(menuItem).where(eq(menuItem.id, result[0].id))
    })

    it('should set timestamps on creation', async () => {
      const newItem = {
        name: 'Timestamped Item',
        url: '/timestamp',
      }

      const result = await db
        .insert(menuItem)
        .values(newItem)
        .returning()

      expect(result[0].createdAt).toBeDefined()
      expect(result[0].updatedAt).toBeDefined()
      expect(result[0].createdAt instanceof Date).toBe(true)

      // Cleanup
      await db.delete(menuItem).where(eq(menuItem.id, result[0].id))
    })

    it('should support special menu items', async () => {
      const specialItem = {
        name: 'Special Button',
        url: '/special',
        isSpecial: true,
        variant: 'outline',
      }

      const result = await db
        .insert(menuItem)
        .values(specialItem)
        .returning()

      expect(result[0].isSpecial).toBe(true)
      expect(result[0].variant).toBe('outline')

      // Cleanup
      await db.delete(menuItem).where(eq(menuItem.id, result[0].id))
    })
  })

  describe('PUT - Update menu items', () => {
    it('should update menu item name', async () => {
      const updates = {
        name: 'Updated Name',
      }

      const result = await db
        .update(menuItem)
        .set(updates)
        .where(eq(menuItem.id, testItemId))
        .returning()

      expect(result[0].name).toBe('Updated Name')
      expect(result[0].url).toBe('/test-menu') // Other fields unchanged
    })

    it('should update multiple fields', async () => {
      const updates = {
        name: 'Fully Updated',
        url: '/updated',
        isSpecial: true,
        variant: 'ghost',
      }

      const result = await db
        .update(menuItem)
        .set(updates)
        .where(eq(menuItem.id, testItemId))
        .returning()

      expect(result[0]).toMatchObject(updates)
    })

    it('should update timestamp on modification', async () => {
      const before = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, testItemId))

      const originalUpdatedAt = before[0].updatedAt

      // Wait a moment to ensure timestamp difference
      await new Promise(resolve => setTimeout(resolve, 10))

      const after = await db
        .update(menuItem)
        .set({ name: 'Modified' })
        .where(eq(menuItem.id, testItemId))
        .returning()

      expect(after[0].updatedAt.getTime()).toBeGreaterThan(
        originalUpdatedAt.getTime()
      )
    })

    it('should not affect non-updated fields', async () => {
      const before = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, testItemId))

      await db
        .update(menuItem)
        .set({ name: 'New Name' })
        .where(eq(menuItem.id, testItemId))

      const after = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, testItemId))

      expect(after[0].url).toBe(before[0].url)
      expect(after[0].order).toBe(before[0].order)
    })
  })

  describe('DELETE - Remove menu items', () => {
    it('should delete menu item by id', async () => {
      // Verify exists
      let items = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, testItemId))
      expect(items).toHaveLength(1)

      // Delete
      await db.delete(menuItem).where(eq(menuItem.id, testItemId))

      // Verify deleted
      items = await db
        .select()
        .from(menuItem)
        .where(eq(menuItem.id, testItemId))
      expect(items).toHaveLength(0)

      // Prevent afterEach cleanup error
      testItemId = -1
    })

    it('should handle deleting non-existent item gracefully', async () => {
      const result = await db
        .delete(menuItem)
        .where(eq(menuItem.id, 999999))

      // No error should be thrown
      expect(result).toBeDefined()
    })
  })

  describe('Edge Cases', () => {
    it('should handle special characters in name', async () => {
      const special = {
        name: 'Items & "Quotes" < >',
        url: '/special-chars',
      }

      const result = await db
        .insert(menuItem)
        .values(special)
        .returning()

      expect(result[0].name).toBe(special.name)

      // Cleanup
      await db.delete(menuItem).where(eq(menuItem.id, result[0].id))
    })

    it('should handle long URLs', async () => {
      const longUrl =
        '/very/long/path/with/many/segments/that/goes/on/and/on'

      const result = await db
        .insert(menuItem)
        .values({
          name: 'Long URL Item',
          url: longUrl,
        })
        .returning()

      expect(result[0].url).toBe(longUrl)

      // Cleanup
      await db.delete(menuItem).where(eq(menuItem.id, result[0].id))
    })

    it('should handle large order numbers', async () => {
      const result = await db
        .insert(menuItem)
        .values({
          name: 'Large Order',
          url: '/large-order',
          order: 999999,
        })
        .returning()

      expect(result[0].order).toBe(999999)

      // Cleanup
      await db.delete(menuItem).where(eq(menuItem.id, result[0].id))
    })
  })
})
