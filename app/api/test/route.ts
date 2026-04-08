import { NextResponse } from 'next/server'
import { db, menuItem, admin } from '@/lib/db'
import { count } from 'drizzle-orm'

export async function GET() {
  try {
    const menuCount = await db
      .select({ count: count() })
      .from(menuItem)

    const adminCount = await db
      .select({ count: count() })
      .from(admin)

    return NextResponse.json({
      status: 'ok',
      message: 'Database connection successful',
      data: {
        menuItems: menuCount[0]?.count || 0,
        admins: adminCount[0]?.count || 0,
      },
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json(
      {
        status: 'error',
        message: 'Database connection failed',
        error: String(error),
      },
      { status: 500 }
    )
  }
}
