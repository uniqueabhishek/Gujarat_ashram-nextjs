import { NextRequest, NextResponse } from 'next/server'
import { db, infoCard } from '@/lib/db'

export async function GET() {
  try {
    const cards = await db.query.infoCard.findMany({
      orderBy: (infoCard, { asc }) => [asc(infoCard.order)],
    })

    return NextResponse.json(cards)
  } catch (error) {
    console.error('Error fetching info cards:', error)
    return NextResponse.json(
      { error: 'Failed to fetch info cards' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const cards = await request.json()
    const now = new Date()

    const created = await db.transaction(async (tx) => {
      await tx.delete(infoCard)
      return await tx
        .insert(infoCard)
        .values(
          cards.map((card: any, index: number) => ({
            icon: card.icon,
            title: card.title,
            description: card.description,
            order: index,
            isActive: card.isActive !== false,
            createdAt: now,
            updatedAt: now,
          }))
        )
        .returning()
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save info cards error:', error)
    return NextResponse.json(
      { error: 'Failed to save info cards' },
      { status: 500 }
    )
  }
}
