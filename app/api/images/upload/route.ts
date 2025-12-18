import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    const category = (formData.get('category') as string) || 'general'

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP allowed.' },
        { status: 400 }
      )
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      )
    }

    // Generate unique filename
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
    const ext = file.name.split('.').pop()
    const filename = `${uniqueSuffix}.${ext}`

    // Ensure upload directory exists
    const uploadDir = join(process.cwd(), 'public', 'images')
    await mkdir(uploadDir, { recursive: true })

    // Write file
    const filePath = join(uploadDir, filename)
    await writeFile(filePath, buffer)

    // Get current max order
    const maxOrder = await prisma.siteImage.findFirst({
      where: { category },
      orderBy: { order: 'desc' },
      select: { order: true },
    })

    // Save to database
    const image = await prisma.siteImage.create({
      data: {
        category,
        filename,
        path: `/images/${filename}`,
        alt: file.name,
        order: (maxOrder?.order || 0) + 1,
      },
    })

    return NextResponse.json(image)
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}
