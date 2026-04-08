import { NextRequest, NextResponse } from 'next/server'
import { unlink } from 'fs/promises'
import { join } from 'path'
import { db, siteImage } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const imageId = parseInt(id)

    // Find the image first
    const image = await db.query.siteImage.findFirst({
      where: (siteImage, { eq }) => eq(siteImage.id, imageId),
    })

    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    // Delete physical file (ignore errors)
    try {
      await unlink(join(process.cwd(), 'public', image.path))
    } catch (err) {
      console.warn('Failed to delete physical file:', err)
    }

    // Delete from database
    await db.delete(siteImage).where(eq(siteImage.id, imageId))

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Delete image error:', error)
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    )
  }
}
