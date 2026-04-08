import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { db, siteImage } from '@/lib/db'
import { desc, eq } from 'drizzle-orm'

const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
const MAX_SIZE = 5 * 1024 * 1024 // 5MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    const category = (formData.get('category') as string) || 'general'

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Allowed: jpg, png, gif, webp' },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Max 5MB' },
        { status: 400 }
      )
    }

    // Get file extension
    const ext = file.type.split('/')[1]
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(7)
    const filename = `${timestamp}-${random}.${ext}`

    // Ensure directory exists
    const imagesDir = join(process.cwd(), 'public', 'images')
    await mkdir(imagesDir, { recursive: true })

    // Write file
    const filepath = join(imagesDir, filename)
    const bytes = await file.arrayBuffer()
    await writeFile(filepath, Buffer.from(bytes))

    // Get current max order for this category
    const maxOrderResult = await db
      .select({ order: siteImage.order })
      .from(siteImage)
      .where(eq(siteImage.category, category))
      .orderBy(desc(siteImage.order))
      .limit(1)

    const nextOrder = (maxOrderResult[0]?.order || 0) + 1

    // Create database record
    const result = await db
      .insert(siteImage)
      .values({
        category,
        filename,
        path: `/images/${filename}`,
        order: nextOrder,
      })
      .returning()

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Upload image error:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}
