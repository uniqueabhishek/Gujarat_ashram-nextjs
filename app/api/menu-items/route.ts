import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const items = await prisma.menuItem.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(items)
  } catch (error) {
    console.error('Error fetching menu items:', error)
    return NextResponse.json(
      { error: 'Failed to fetch menu items' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const items = await request.json()

    // Delete existing items
    await prisma.menuItem.deleteMany()

    // Create new items
    const created = await Promise.all(
      items.map((item: any, index: number) =>
        prisma.menuItem.create({
          data: {
            name: item.name,
            url: item.url,
            isSpecial: item.isSpecial || false,
            variant: item.variant || 'default',
            order: index,
          },
        })
      )
    )

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save menu items error:', error)
    return NextResponse.json(
      { error: 'Failed to save menu items' },
      { status: 500 }
    )
  }
}
