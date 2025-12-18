import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const menuItemCount = await prisma.menuItem.count()
    const adminCount = await prisma.admin.count()

    return NextResponse.json({
      status: 'ok',
      message: 'Database connected successfully',
      data: {
        menuItems: menuItemCount,
        admins: adminCount
      }
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
