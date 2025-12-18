import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const contacts = await prisma.contactInfo.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contact info' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const contacts = await request.json()
    await prisma.contactInfo.deleteMany()

    const created = await Promise.all(
      contacts.map((contact: any, index: number) =>
        prisma.contactInfo.create({
          data: {
            type: contact.type,
            label: contact.label,
            value: contact.value,
            url: contact.url,
            isActive: contact.isActive !== false,
            order: index,
          },
        })
      )
    )

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save contact info error:', error)
    return NextResponse.json(
      { error: 'Failed to save contact info' },
      { status: 500 }
    )
  }
}
