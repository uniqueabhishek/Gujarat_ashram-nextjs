import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const buttons = await prisma.heroButton.findMany({
      orderBy: { order: 'asc' },
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
    await prisma.heroButton.deleteMany()

    const created = await Promise.all(
      buttons.map((btn: any, index: number) =>
        prisma.heroButton.create({
          data: {
            name: btn.name,
            url: btn.url,
            variant: btn.variant || 'default',
            order: index,
          },
        })
      )
    )

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save hero buttons error:', error)
    return NextResponse.json(
      { error: 'Failed to save hero buttons' },
      { status: 500 }
    )
  }
}
