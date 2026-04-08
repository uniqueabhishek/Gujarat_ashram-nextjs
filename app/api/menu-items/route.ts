import { NextRequest, NextResponse } from 'next/server'
import { db, menuItem } from '@/lib/db'

export async function GET() {
  try {
    const items = await db.query.menuItem.findMany({
      orderBy: (menuItem, { asc }) => [asc(menuItem.order)],
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
    const now = new Date()

    const created = await db.transaction(async (tx) => {
      await tx.delete(menuItem)
      return await tx
        .insert(menuItem)
        .values(
          items.map((item: any, index: number) => ({
            name: item.name,
            url: item.url,
            isSpecial: item.isSpecial || false,
            variant: item.variant || 'default',
            order: index,
            createdAt: now,
            updatedAt: now,
          }))
        )
        .returning()
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save menu items error:', error)
    return NextResponse.json(
      { error: 'Failed to save menu items' },
      { status: 500 }
    )
  }
}
