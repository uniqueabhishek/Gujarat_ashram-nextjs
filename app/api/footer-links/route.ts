import { NextRequest, NextResponse } from 'next/server'
import { db, footerLink } from '@/lib/db'

export async function GET() {
  try {
    const links = await db.query.footerLink.findMany({
      orderBy: (footerLink, { asc }) => [asc(footerLink.order)],
    })

    return NextResponse.json(links)
  } catch (error) {
    console.error('Error fetching footer links:', error)
    return NextResponse.json(
      { error: 'Failed to fetch footer links' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const links = await request.json()
    const now = new Date()

    const created = await db.transaction(async (tx) => {
      await tx.delete(footerLink)
      return await tx
        .insert(footerLink)
        .values(
          links.map((link: any, index: number) => ({
            label: link.label,
            url: link.url,
            order: index,
            createdAt: now,
            updatedAt: now,
          }))
        )
        .returning()
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save footer links error:', error)
    return NextResponse.json(
      { error: 'Failed to save footer links' },
      { status: 500 }
    )
  }
}
