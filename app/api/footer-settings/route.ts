import { NextRequest, NextResponse } from 'next/server'
import { db, footerSettings } from '@/lib/db'

export async function GET() {
  try {
    const settings = await db.query.footerSettings.findFirst()

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
    const data = await request.json()
    const { title, description } = data
    const now = new Date()

    const result = await db.transaction(async (tx) => {
      await tx.delete(footerSettings)
      const created = await tx
        .insert(footerSettings)
        .values({ title, description, createdAt: now, updatedAt: now })
        .returning()
      return created[0]
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Save footer settings error:', error)
    return NextResponse.json(
      { error: 'Failed to save footer settings' },
      { status: 500 }
    )
  }
}
