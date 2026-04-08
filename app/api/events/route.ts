import { NextRequest, NextResponse } from 'next/server'
import { db, event } from '@/lib/db'

export async function GET() {
  try {
    const events = await db.query.event.findMany({
      orderBy: (event, { asc }) => [asc(event.date)],
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const events = Array.isArray(data) ? data : [data]
    const now = new Date()

    const eventsWithTimestamps = events.map((e: any) => ({
      ...e,
      createdAt: e.createdAt || now,
      updatedAt: e.updatedAt || now,
    }))

    const created = await db.transaction(async (tx) => {
      await tx.delete(event)
      return await tx.insert(event).values(eventsWithTimestamps).returning()
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save events error:', error)
    return NextResponse.json(
      { error: 'Failed to save events' },
      { status: 500 }
    )
  }
}
