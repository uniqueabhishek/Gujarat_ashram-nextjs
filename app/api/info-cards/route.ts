import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const cards = await prisma.infoCard.findMany({
      orderBy: { order: 'asc' },
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
    await prisma.infoCard.deleteMany()

    const created = await Promise.all(
      cards.map((card: any, index: number) =>
        prisma.infoCard.create({
          data: {
            icon: card.icon,
            title: card.title,
            description: card.description,
            order: index,
          },
        })
      )
    )

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save info cards error:', error)
    return NextResponse.json(
      { error: 'Failed to save info cards' },
      { status: 500 }
    )
  }
}
