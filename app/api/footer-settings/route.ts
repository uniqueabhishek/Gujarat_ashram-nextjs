import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const settings = await prisma.footerSettings.findFirst()
    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error fetching footer settings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch footer settings' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description } = await request.json()

    // Delete existing and create new (single record table)
    await prisma.footerSettings.deleteMany()

    const settings = await prisma.footerSettings.create({
      data: {
        title,
        description,
      },
    })

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Save footer settings error:', error)
    return NextResponse.json(
      { error: 'Failed to save footer settings' },
      { status: 500 }
    )
  }
}
