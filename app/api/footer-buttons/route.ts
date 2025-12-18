import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const buttons = await prisma.footerButton.findMany({
      orderBy: { order: 'asc' },
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

    // Delete existing
    await prisma.footerButton.deleteMany()

    // Create new buttons
    const created = await Promise.all(
      buttons.map((button: any, index: number) =>
        prisma.footerButton.create({
          data: {
            label: button.label,
            url: button.url,
            order: index,
            isActive: button.isActive !== false,
          },
        })
      )
    )

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save footer buttons error:', error)
    return NextResponse.json(
      { error: 'Failed to save footer buttons' },
      { status: 500 }
    )
  }
}
