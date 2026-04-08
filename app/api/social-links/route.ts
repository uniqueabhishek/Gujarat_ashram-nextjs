import { NextRequest, NextResponse } from 'next/server'
import { db, socialLink } from '@/lib/db'

export async function GET() {
  try {
    const links = await db.query.socialLink.findMany({
      orderBy: (socialLink, { asc }) => [asc(socialLink.order)],
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
    const now = new Date()

    const created = await db.transaction(async (tx) => {
      await tx.delete(socialLink)
      return await tx
        .insert(socialLink)
        .values(
          links.map((link: any, index: number) => ({
            platform: link.platform,
            url: link.url,
            order: index,
            isActive: link.isActive !== false,
            createdAt: now,
            updatedAt: now,
          }))
        )
        .returning()
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save social links error:', error)
    return NextResponse.json(
      { error: 'Failed to save social links' },
      { status: 500 }
    )
  }
}
