import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const content = await prisma.aboutContent.findFirst()

    if (!content) {
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

    return NextResponse.json(content)
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

    // Delete existing and create new
    await prisma.aboutContent.deleteMany()
    const content = await prisma.aboutContent.create({ data })

    return NextResponse.json(content)
  } catch (error) {
    console.error('Save about content error:', error)
    return NextResponse.json(
      { error: 'Failed to save about content' },
      { status: 500 }
    )
  }
}
