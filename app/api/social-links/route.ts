import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const links = await prisma.socialLink.findMany({
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(links)
  } catch (error) {
    console.error('Error fetching social links:', error)
    return NextResponse.json(
      { error: 'Failed to fetch social links' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const links = await request.json()

    // Delete existing
    await prisma.socialLink.deleteMany()

    // Create new links
    const created = await Promise.all(
      links.map((link: any, index: number) =>
        prisma.socialLink.create({
          data: {
            platform: link.platform,
            url: link.url,
            order: index,
            isActive: link.isActive !== false,
          },
        })
      )
    )

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save social links error:', error)
    return NextResponse.json(
      { error: 'Failed to save social links' },
      { status: 500 }
    )
  }
}
