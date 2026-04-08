import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { db, event, menuItem, siteImage } from '@/lib/db'
import { eq, desc, and } from 'drizzle-orm'

/**
 * Database Operations Tests
 * Tests core database CRUD operations across models
 */
describe('Database Operations', () => {
  describe('Event Model - Create Operations', () => {
    let testEventId: number

    afterEach(async () => {
      if (testEventId) {
        await db.delete(event).where(eq(event.id, testEventId))
      }
    })

    it('should insert event with all required fields', async () => {
      const newEvent = {
        title: 'Yoga Meditation',
        date: '2026-04-20',
        description: 'Morning meditation session',
        category: 'yoga',
        isActive: true,
      }

      const result = await db.insert(event).values(newEvent).returning()

      expect(result).toHaveLength(1)
      expect(result[0]).toMatchObject(newEvent)
      expect(result[0].id).toBeDefined()

      testEventId = result[0].id
    })

    it('should set default values for optional fields', async () => {
      const minimalEvent = {
        title: 'Test Event',
        date: '2026-04-21',
        description: 'Basic event',
      }

      const result = await db.insert(event).values(minimalEvent).returning()

      expect(result[0].isActive).toBe(true)
      expect(result[0].category).toBe('yoga')
      expect(result[0].buttonText).toBeNull()
      expect(result[0].buttonUrl).toBeNull()

      testEventId = result[0].id
    })

    it('should accept optional button properties', async () => {
      const eventWithButton = {
        title: 'Workshop',
        date: '2026-04-25',
        description: 'Advanced workshop',
        buttonText: 'Register Now',
        buttonUrl: 'https://example.com/register',
      }

      const result = await db.insert(event).values(eventWithButton).returning()

      expect(result[0].buttonText).toBe('Register Now')
      expect(result[0].buttonUrl).toBe('https://example.com/register')

      testEventId = result[0].id
    })

    it('should handle date ranges with endDate', async () => {
      const multiDayEvent = {
        title: 'Multi-day Retreat',
        date: '2026-05-01',
        endDate: '2026-05-05',
        description: '5-day retreat',
      }

      const result = await db.insert(event).values(multiDayEvent).returning()

      expect(result[0].date).toBe('2026-05-01')
      expect(result[0].endDate).toBe('2026-05-05')

      testEventId = result[0].id
    })
  })

  describe('Event Model - Read Operations', () => {
    let testEventIds: number[] = []

    beforeEach(async () => {
      // Create test events
      const events = [
        { title: 'Event A', date: '2026-04-20', description: 'Test A' },
        { title: 'Event B', date: '2026-04-21', description: 'Test B' },
        { title: 'Inactive Event', date: '2026-04-22', description: 'Test', isActive: false },
      ]

      for (const e of events) {
        const result = await db.insert(event).values(e).returning()
        testEventIds.push(result[0].id)
      }
    })

    afterEach(async () => {
      for (const id of testEventIds) {
        await db.delete(event).where(eq(event.id, id))
      }
      testEventIds = []
    })

    it('should retrieve all events', async () => {
      const allEvents = await db.select().from(event)

      expect(Array.isArray(allEvents)).toBe(true)
      expect(allEvents.length).toBeGreaterThan(0)
    })

    it('should retrieve active events only', async () => {
      const activeEvents = await db
        .select()
        .from(event)
        .where(eq(event.isActive, true))

      expect(activeEvents.every(e => e.isActive)).toBe(true)
    })

    it('should retrieve events by category', async () => {
      const yogaEvents = await db
        .select()
        .from(event)
        .where(eq(event.category, 'yoga'))

      expect(yogaEvents.every(e => e.category === 'yoga')).toBe(true)
    })

    it('should retrieve events with ordering', async () => {
      const orderedEvents = await db
        .select()
        .from(event)
        .orderBy(desc(event.date))

      for (let i = 0; i < orderedEvents.length - 1; i++) {
        const current = new Date(orderedEvents[i].date)
        const next = new Date(orderedEvents[i + 1].date)
        expect(current.getTime()).toBeGreaterThanOrEqual(next.getTime())
      }
    })

    it('should apply multiple filters', async () => {
      const filtered = await db
        .select()
        .from(event)
        .where(and(
          eq(event.isActive, true),
          eq(event.category, 'yoga')
        ))

      expect(filtered.every(e => e.isActive && e.category === 'yoga')).toBe(true)
    })
  })

  describe('Event Model - Update Operations', () => {
    let testEventId: number

    beforeEach(async () => {
      const result = await db
        .insert(event)
        .values({
          title: 'Original Title',
          date: '2026-04-20',
          description: 'Original description',
        })
        .returning()

      testEventId = result[0].id
    })

    afterEach(async () => {
      await db.delete(event).where(eq(event.id, testEventId))
    })

    it('should update event title', async () => {
      const result = await db
        .update(event)
        .set({ title: 'Updated Title' })
        .where(eq(event.id, testEventId))
        .returning()

      expect(result[0].title).toBe('Updated Title')
    })

    it('should update multiple fields', async () => {
      const updates = {
        title: 'New Title',
        description: 'New description',
        isActive: false,
      }

      const result = await db
        .update(event)
        .set(updates)
        .where(eq(event.id, testEventId))
        .returning()

      expect(result[0]).toMatchObject(updates)
    })

    it('should update timestamp on modification', async () => {
      const before = await db
        .select()
        .from(event)
        .where(eq(event.id, testEventId))

      const beforeTime = before[0].updatedAt.getTime()

      await new Promise(resolve => setTimeout(resolve, 10))

      const after = await db
        .update(event)
        .set({ description: 'Modified' })
        .where(eq(event.id, testEventId))
        .returning()

      expect(after[0].updatedAt.getTime()).toBeGreaterThan(beforeTime)
    })
  })

  describe('Event Model - Delete Operations', () => {
    let testEventId: number

    beforeEach(async () => {
      const result = await db
        .insert(event)
        .values({
          title: 'To Delete',
          date: '2026-04-20',
          description: 'Test',
        })
        .returning()

      testEventId = result[0].id
    })

    it('should delete event by id', async () => {
      await db.delete(event).where(eq(event.id, testEventId))

      const check = await db
        .select()
        .from(event)
        .where(eq(event.id, testEventId))

      expect(check).toHaveLength(0)
    })

    it('should handle deleting non-existent event', async () => {
      const result = await db
        .delete(event)
        .where(eq(event.id, 999999))

      expect(result).toBeDefined()
    })
  })

  describe('SiteImage Model', () => {
    let testImageId: number

    afterEach(async () => {
      if (testImageId) {
        await db.delete(siteImage).where(eq(siteImage.id, testImageId))
      }
    })

    it('should create image record with category', async () => {
      const newImage = {
        category: 'hero',
        filename: 'hero-image-1.jpg',
        path: '/images/hero-image-1.jpg',
        order: 1,
      }

      const result = await db
        .insert(siteImage)
        .values(newImage)
        .returning()

      expect(result[0]).toMatchObject(newImage)
      testImageId = result[0].id
    })

    it('should retrieve images by category', async () => {
      const result = await db
        .insert(siteImage)
        .values({
          category: 'gallery',
          filename: 'gallery-1.jpg',
          path: '/images/gallery-1.jpg',
        })
        .returning()

      testImageId = result[0].id

      const gallery = await db
        .select()
        .from(siteImage)
        .where(eq(siteImage.category, 'gallery'))

      expect(gallery.some(img => img.id === testImageId)).toBe(true)
    })

    it('should order images by category order', async () => {
      const ids: number[] = []

      for (let i = 0; i < 3; i++) {
        const result = await db
          .insert(siteImage)
          .values({
            category: 'hero',
            filename: `test-${i}.jpg`,
            path: `/images/test-${i}.jpg`,
            order: i,
          })
          .returning()

        ids.push(result[0].id)
      }

      const images = await db
        .select()
        .from(siteImage)
        .where(eq(siteImage.category, 'hero'))
        .orderBy(siteImage.order)

      testImageId = ids[0]

      expect(
        images
          .filter(img => ids.includes(img.id))
          .map(img => img.order)
      ).toEqual([0, 1, 2])

      // Cleanup
      for (const id of ids) {
        await db.delete(siteImage).where(eq(siteImage.id, id))
      }
      testImageId = -1
    })
  })

  describe('Cross-Model Operations', () => {
    it('should handle transactions with multiple models', async () => {
      const eventResult = await db
        .insert(event)
        .values({
          title: 'Gallery Event',
          date: '2026-05-10',
          description: 'Event with images',
        })
        .returning()

      const eventId = eventResult[0].id

      const imageResult = await db
        .insert(siteImage)
        .values({
          category: 'event',
          filename: 'event-image.jpg',
          path: '/images/event-image.jpg',
        })
        .returning()

      const imageId = imageResult[0].id

      // Verify both records exist
      const eventCheck = await db
        .select()
        .from(event)
        .where(eq(event.id, eventId))
      expect(eventCheck).toHaveLength(1)

      const imageCheck = await db
        .select()
        .from(siteImage)
        .where(eq(siteImage.id, imageId))
      expect(imageCheck).toHaveLength(1)

      // Cleanup
      await db.delete(event).where(eq(event.id, eventId))
      await db.delete(siteImage).where(eq(siteImage.id, imageId))
    })
  })
})
