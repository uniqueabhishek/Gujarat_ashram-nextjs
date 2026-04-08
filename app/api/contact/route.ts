import { NextRequest, NextResponse } from 'next/server'
import { db, contactInfo } from '@/lib/db'

export async function GET() {
  try {
    const contacts = await db.query.contactInfo.findMany({
      orderBy: (contactInfo, { asc }) => [asc(contactInfo.order)],
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
    const now = new Date()

    const created = await db.transaction(async (tx) => {
      await tx.delete(contactInfo)
      return await tx
        .insert(contactInfo)
        .values(
          contacts.map((contact: any, index: number) => ({
            type: contact.type,
            label: contact.label,
            value: contact.value,
            url: contact.url,
            order: index,
            isActive: contact.isActive !== false,
            createdAt: now,
            updatedAt: now,
          }))
        )
        .returning()
    })

    return NextResponse.json(created)
  } catch (error) {
    console.error('Save contact info error:', error)
    return NextResponse.json(
      { error: 'Failed to save contact info' },
      { status: 500 }
    )
  }
}
