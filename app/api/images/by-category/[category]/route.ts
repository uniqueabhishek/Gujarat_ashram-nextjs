import { NextRequest, NextResponse } from 'next/server'
import { db, siteImage } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params
    const images = await db.query.siteImage.findMany({
      where: (siteImage, { eq }) => eq(siteImage.category, category),
      orderBy: (siteImage, { asc }) => [asc(siteImage.order)],
    })

    return NextResponse.json(images)
  } catch (error) {
    console.error('Fetch images by category error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    )
  }
}
