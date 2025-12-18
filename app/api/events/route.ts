import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: 'asc' },
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
    const events = await request.json()

    // If it's an array, replace all events
    if (Array.isArray(events)) {
      await prisma.event.deleteMany()
      const created = await Promise.all(
        events.map((event: any) =>
          prisma.event.create({ data: event })
        )
      )
      return NextResponse.json(created)
    }

    // If it's a single event, create it
    const event = await prisma.event.create({ data: events })
    return NextResponse.json(event)
  } catch (error) {
    console.error('Save events error:', error)
    return NextResponse.json(
      { error: 'Failed to save events' },
      { status: 500 }
    )
  }
}
