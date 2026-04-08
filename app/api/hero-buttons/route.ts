import { NextRequest, NextResponse } from 'next/server'
import { db, heroButton } from '@/lib/db'

export async function GET() {
  try {
    const buttons = await db.query.heroButton.findMany({
      orderBy: (heroButton, { asc }) => [asc(heroButton.order)],
    })

    return NextResponse.json(buttons)
  } catch (error) {
    console.error('Error fetching hero buttons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hero buttons' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const buttons = await request.json()
    const now = new Date()

    const created = await db.transaction(async (tx) => {
      await tx.delete(heroButton)
      return await tx
        .insert(heroButton)
        .values(
          buttons.map((btn: any, index: number) => ({
            name: btn.name,
            url: btn.url,
            variant: btn.variant || 'default',
            order: index,
            createdAt: now,
            updatedAt: now,
          }))
        )
        .returning()
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save hero buttons error:', error)
    return NextResponse.json(
      { error: 'Failed to save hero buttons' },
      { status: 500 }
    )
  }
}
