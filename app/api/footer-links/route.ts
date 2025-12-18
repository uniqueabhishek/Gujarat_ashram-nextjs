import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const links = await prisma.footerLink.findMany({
      orderBy: { order: 'asc' },
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
    await prisma.footerLink.deleteMany()

    const created = await Promise.all(
      links.map((link: any, index: number) =>
        prisma.footerLink.create({
          data: {
            label: link.label,
            url: link.url,
            order: index,
          },
        })
      )
    )

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save footer links error:', error)
    return NextResponse.json(
      { error: 'Failed to save footer links' },
      { status: 500 }
    )
  }
}
