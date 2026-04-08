import { NextRequest, NextResponse } from 'next/server'
import { db, siteImage } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function POST(request: NextRequest) {
  try {
    const { updates } = await request.json()

    if (!Array.isArray(updates)) {
      return NextResponse.json(
        { error: 'updates must be an array' },
        { status: 400 }
      )
    }

    await db.transaction(async (tx) => {
      for (const { id, order } of updates) {
        await tx
          .update(siteImage)
          .set({ order: Number(order) })
          .where(eq(siteImage.id, Number(id)))
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reorder images error:', error)
    return NextResponse.json(
      { error: 'Failed to reorder images' },
      { status: 500 }
    )
  }
}
