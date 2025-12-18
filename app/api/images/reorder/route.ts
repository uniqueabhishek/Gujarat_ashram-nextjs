import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { updates } = await request.json()

    if (!Array.isArray(updates)) {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      )
    }

    // Update orders in a transaction
    await prisma.$transaction(
      updates.map(({ id, order }) =>
        prisma.siteImage.update({
          where: { id: Number(id) },
          data: { order: Number(order) },
        })
      )
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reorder error:', error)
    return NextResponse.json(
      { error: 'Failed to reorder images' },
      { status: 500 }
    )
  }
}
