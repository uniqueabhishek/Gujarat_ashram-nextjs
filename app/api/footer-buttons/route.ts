import { NextRequest, NextResponse } from 'next/server'
import { db, footerButton } from '@/lib/db'

export async function GET() {
  try {
    const buttons = await db.query.footerButton.findMany({
      orderBy: (footerButton, { asc }) => [asc(footerButton.order)],
    })

    return NextResponse.json(buttons)
  } catch (error) {
    console.error('Error fetching footer buttons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch footer buttons' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const buttons = await request.json()
    const now = new Date()

    const created = await db.transaction(async (tx) => {
      await tx.delete(footerButton)
      return await tx
        .insert(footerButton)
        .values(
          buttons.map((button: any, index: number) => ({
            label: button.label,
            url: button.url,
            order: index,
            isActive: button.isActive !== false,
            createdAt: now,
            updatedAt: now,
          }))
        )
        .returning()
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save footer buttons error:', error)
    return NextResponse.json(
      { error: 'Failed to save footer buttons' },
      { status: 500 }
    )
  }
}
