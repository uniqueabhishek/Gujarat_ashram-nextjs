import { NextRequest, NextResponse } from 'next/server'
import { db, aboutContent } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function GET() {
  try {
    const result = await db.query.aboutContent.findFirst()

    if (!result) {
      // Return default content if none exists
      return NextResponse.json({
        id: 'default',
        heroTitle: 'Art of Living',
        heroSubtitle: 'Gujarat Ashram',
        heroDescription: 'Discover a sanctuary for inner peace, ancient wisdom, and holistic rejuvenation amidst nature\'s embrace.',
        aboutBadge: 'Discover',
        aboutTitle: 'Why Visit the Gujarat Ashram?',
        aboutDescription: 'Experience a calm environment filled with wisdom and transformative meditation practices.',
        footerTitle: 'Gujarat Ashram',
        footerDescription: 'A sanctuary for peace, meditation, and spiritual growth in the heart of Gujarat.',
      })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching about content:', error)
    return NextResponse.json(
      { error: 'Failed to fetch about content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const now = new Date()

    await db.transaction(async (tx: any) => {
      // Delete existing
      await tx.delete(aboutContent)
      // Create new
      await tx.insert(aboutContent).values({
        ...data,
        createdAt: data.createdAt || now,
        updatedAt: data.updatedAt || now,
      })
    })

    const result = await db.query.aboutContent.findFirst()
    return NextResponse.json(result)
  } catch (error) {
    console.error('Save about content error:', error)
    return NextResponse.json(
      { error: 'Failed to save about content' },
      { status: 500 }
    )
  }
}
