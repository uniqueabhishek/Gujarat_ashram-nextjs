import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import {
  menuItem,
  heroButton,
  footerLink,
  infoCard,
  event,
  contactInfo,
  aboutContent,
  siteImage,
  socialLink,
  footerButton,
  footerSettings,
} from './lib/db/schema.ts'

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.error('❌ DATABASE_URL not set')
  process.exit(1)
}

const client = postgres(databaseUrl)
const db = drizzle(client)

async function seed() {
  try {
    console.log('🌱 Starting comprehensive database seed...')
    const now = new Date()

    // 1. Menu Items
    console.log('📝 Seeding menu items...')
    await db.delete(menuItem)
    await db.insert(menuItem).values([
      { name: 'Home', url: '/', order: 0, isSpecial: false, variant: 'default', createdAt: now, updatedAt: now },
      { name: 'About', url: '#about', order: 1, isSpecial: false, variant: 'default', createdAt: now, updatedAt: now },
      { name: 'Programs', url: '#programs', order: 2, isSpecial: false, variant: 'default', createdAt: now, updatedAt: now },
      { name: 'Gallery', url: '#gallery', order: 3, isSpecial: false, variant: 'default', createdAt: now, updatedAt: now },
      { name: 'Schedule', url: '/calendar', order: 4, isSpecial: true, variant: 'outline', createdAt: now, updatedAt: now },
      { name: 'Contact', url: '#contact', order: 5, isSpecial: false, variant: 'default', createdAt: now, updatedAt: now },
    ])

    // 2. Hero Buttons
    console.log('🎯 Seeding hero buttons...')
    await db.delete(heroButton)
    await db.insert(heroButton).values([
      { name: 'Explore Programs', url: '#programs', variant: 'default', order: 0, createdAt: now, updatedAt: now },
      { name: 'Book a Session', url: '#contact', variant: 'outline', order: 1, createdAt: now, updatedAt: now },
    ])

    // 3. Info Cards
    console.log('💎 Seeding info cards...')
    await db.delete(infoCard)
    await db.insert(infoCard).values([
      {
        title: 'Ashram Overview',
        description: 'Discover the spiritual sanctuary nestled in the serene landscapes of Gujarat, dedicated to holistic wellness.',
        icon: 'Mountain',
        order: 0,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Activities & Programs',
        description: 'Engage in transformative yoga, meditation, and wellness programs designed for all experience levels.',
        icon: 'Activity',
        order: 1,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Facilities',
        description: 'Experience world-class facilities including meditation halls, yoga studios, and comfortable accommodations.',
        icon: 'Home',
        order: 2,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Nature Trails',
        description: 'Explore peaceful walking paths through natural landscapes, connecting you with the beauty of nature.',
        icon: 'Leaf',
        order: 3,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
    ])

    // 4. Events
    console.log('📅 Seeding events...')
    await db.delete(event)
    const today = new Date()
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    const twoWeeks = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)
    const threeWeeks = new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000)

    await db.insert(event).values([
      {
        title: 'Sunrise Yoga',
        date: today.toISOString().split('T')[0],
        endDate: today.toISOString().split('T')[0],
        description: 'Begin your day with an energizing sunrise yoga session to awaken body and mind.',
        category: 'yoga',
        buttonText: 'Register',
        buttonUrl: '#contact',
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Meditation & Mindfulness',
        date: nextWeek.toISOString().split('T')[0],
        endDate: nextWeek.toISOString().split('T')[0],
        description: 'A guided meditation session focusing on inner peace, clarity, and spiritual growth.',
        category: 'meditation',
        buttonText: 'Join Us',
        buttonUrl: '#contact',
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Wellness Retreat',
        date: twoWeeks.toISOString().split('T')[0],
        endDate: threeWeeks.toISOString().split('T')[0],
        description: 'A transformative 3-day wellness retreat combining yoga, meditation, and holistic healing practices.',
        category: 'retreat',
        buttonText: 'Learn More',
        buttonUrl: '#contact',
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
    ])

    // 5. Contact Info
    console.log('📞 Seeding contact information...')
    await db.delete(contactInfo)
    await db.insert(contactInfo).values([
      {
        type: 'phone',
        label: 'Phone',
        value: '+91 79XXX XXXXX',
        url: 'tel:+917900000000',
        order: 0,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        type: 'email',
        label: 'Email',
        value: 'info@gujaratashram.org',
        url: 'mailto:info@gujaratashram.org',
        order: 1,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        type: 'whatsapp',
        label: 'WhatsApp',
        value: '+91 79XXX XXXXX',
        url: 'https://wa.me/917900000000',
        order: 2,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        type: 'address',
        label: 'Address',
        value: 'Gujarat Ashram, Ahmedabad, Gujarat, India',
        url: 'https://maps.google.com/?q=Gujarat+Ashram',
        order: 3,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
    ])

    // 6. Footer Links
    console.log('🔗 Seeding footer links...')
    await db.delete(footerLink)
    await db.insert(footerLink).values([
      { label: 'Home', url: '/', order: 0, createdAt: now, updatedAt: now },
      { label: 'About Us', url: '#about', order: 1, createdAt: now, updatedAt: now },
      { label: 'Programs', url: '#programs', order: 2, createdAt: now, updatedAt: now },
      { label: 'Gallery', url: '#gallery', order: 3, createdAt: now, updatedAt: now },
      { label: 'Schedule', url: '/calendar', order: 4, createdAt: now, updatedAt: now },
      { label: 'Contact', url: '#contact', order: 5, createdAt: now, updatedAt: now },
    ])

    // 7. Footer Buttons
    console.log('🔘 Seeding footer buttons...')
    await db.delete(footerButton)
    await db.insert(footerButton).values([
      { label: 'Book Now', url: '#contact', order: 0, isActive: true, createdAt: now, updatedAt: now },
      { label: 'Learn More', url: '#about', order: 1, isActive: true, createdAt: now, updatedAt: now },
    ])

    // 8. Social Links
    console.log('📱 Seeding social links...')
    await db.delete(socialLink)
    await db.insert(socialLink).values([
      { platform: 'facebook', url: 'https://facebook.com', order: 0, isActive: true, createdAt: now, updatedAt: now },
      { platform: 'instagram', url: 'https://instagram.com', order: 1, isActive: true, createdAt: now, updatedAt: now },
      { platform: 'youtube', url: 'https://youtube.com', order: 2, isActive: true, createdAt: now, updatedAt: now },
      { platform: 'twitter', url: 'https://twitter.com', order: 3, isActive: true, createdAt: now, updatedAt: now },
    ])

    // 9. Footer Settings
    console.log('⚙️ Seeding footer settings...')
    await db.delete(footerSettings)
    await db.insert(footerSettings).values([
      {
        title: 'Sri Sri Gujarat Ashram',
        description: 'A sanctuary for peace, meditation, and spiritual growth. Transform your life through ancient wisdom and modern wellness.',
        createdAt: now,
        updatedAt: now,
      },
    ])

    // 10. About Content
    console.log('📖 Seeding about content...')
    await db.delete(aboutContent)
    await db.insert(aboutContent).values([
      {
        heroTitle: 'Art of Living',
        heroSubtitle: 'Gujarat Ashram',
        heroDescription: 'Discover a sanctuary for inner peace, ancient wisdom, and holistic rejuvenation amidst nature\'s embrace.',
        aboutBadge: 'Discover',
        aboutTitle: 'Why Visit the Gujarat Ashram?',
        aboutDescription: 'Experience a calm environment filled with wisdom and transformative meditation practices. Our ashram offers a unique blend of traditional yoga, meditation, and modern wellness techniques in a serene setting, surrounded by nature and guided by experienced teachers.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        footerTitle: 'Sri Sri Gujarat Ashram',
        footerDescription: 'A sanctuary for peace, meditation, and spiritual growth in the heart of Gujarat. Join us on your journey to inner transformation.',
        createdAt: now,
        updatedAt: now,
      },
    ])

    // 11. Site Images (Hero, Gallery, etc.)
    console.log('🖼️ Seeding site images...')
    await db.delete(siteImage)
    await db.insert(siteImage).values([
      // Hero Images (Primary)
      {
        category: 'hero',
        filename: 'ashram-hero1.jpg',
        path: '/images/ashram-hero1.jpg',
        order: 0,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero',
        filename: 'ashram-hero2.jpg',
        path: '/images/ashram-hero2.jpg',
        order: 1,
        createdAt: now,
        updatedAt: now,
      },
      // Hero Images (Desktop - Additional)
      {
        category: 'hero',
        filename: '1766090011704-331534662.jpg',
        path: '/images/1766090011704-331534662.jpg',
        order: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero',
        filename: '1766090161373-209701731.jpg',
        path: '/images/1766090161373-209701731.jpg',
        order: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero',
        filename: '1766090226629-165850984.jpg',
        path: '/images/1766090226629-165850984.jpg',
        order: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero',
        filename: '1766090245555-385412751.jpg',
        path: '/images/1766090245555-385412751.jpg',
        order: 5,
        createdAt: now,
        updatedAt: now,
      },
      // Hero Images (Mobile)
      {
        category: 'hero-mobile',
        filename: 'ashram-hero1.jpg',
        path: '/images/ashram-hero1.jpg',
        order: 0,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero-mobile',
        filename: 'ashram-hero2.jpg',
        path: '/images/ashram-hero2.jpg',
        order: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero-mobile',
        filename: '1766090273026-588909014.jpg',
        path: '/images/1766090273026-588909014.jpg',
        order: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero-mobile',
        filename: '1766090379958-906322016.jpg',
        path: '/images/1766090379958-906322016.jpg',
        order: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero-mobile',
        filename: '1766090408876-875305727.jpg',
        path: '/images/1766090408876-875305727.jpg',
        order: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'hero-mobile',
        filename: '1766090607257-886701455.jpg',
        path: '/images/1766090607257-886701455.jpg',
        order: 5,
        createdAt: now,
        updatedAt: now,
      },
      // Gallery Images
      {
        category: 'gallery',
        filename: '1766091350081-121507178.jpg',
        path: '/images/1766091350081-121507178.jpg',
        order: 0,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'gallery',
        filename: '1766091381047-411968063.jpg',
        path: '/images/1766091381047-411968063.jpg',
        order: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'gallery',
        filename: '1766091397914-471553690.jpg',
        path: '/images/1766091397914-471553690.jpg',
        order: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'gallery',
        filename: '1766140418138-797823383.jpg',
        path: '/images/1766140418138-797823383.jpg',
        order: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'gallery',
        filename: '1766140454315-486747217.jpg',
        path: '/images/1766140454315-486747217.jpg',
        order: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'gallery',
        filename: '1766140483617-965368543.jpg',
        path: '/images/1766140483617-965368543.jpg',
        order: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'gallery',
        filename: '1766142569193-722967540.jpg',
        path: '/images/1766142569193-722967540.jpg',
        order: 6,
        createdAt: now,
        updatedAt: now,
      },
      // Logo/Brand Images
      {
        category: 'logo',
        filename: 'ashram-logo-transparent.png',
        path: '/images/ashram-logo-transparent.png',
        order: 0,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'logo',
        filename: 'ashram-sketch-transparent.png',
        path: '/images/ashram-sketch-transparent.png',
        order: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'logo',
        filename: 'aol-logo-transparent.png',
        path: '/images/aol-logo-transparent.png',
        order: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'logo',
        filename: 'aol-logo-final.png',
        path: '/images/aol-logo-final.png',
        order: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        category: 'logo',
        filename: 'aol-logo-official.jpg',
        path: '/images/aol-logo-official.jpg',
        order: 4,
        createdAt: now,
        updatedAt: now,
      },
    ])

    console.log('')
    console.log('✅ Comprehensive database seeding completed!')
    console.log('')
    console.log('📊 Complete Seeded Data:')
    console.log('  ✓ 6 Menu Items')
    console.log('  ✓ 2 Hero Buttons')
    console.log('  ✓ 4 Info Cards')
    console.log('  ✓ 3 Events')
    console.log('  ✓ 4 Contact Information entries')
    console.log('  ✓ 6 Footer Links')
    console.log('  ✓ 2 Footer Buttons')
    console.log('  ✓ 4 Social Links')
    console.log('  ✓ Footer Settings')
    console.log('  ✓ About Content')
    console.log('  ✓ Site Images: 6 Hero + 6 Hero Mobile + 7 Gallery + 5 Logo = 24 images')
    console.log('')
    console.log('🌐 Visit http://localhost:3000 to see the updated homepage!')
    console.log('🔐 Admin panel: http://localhost:3000/admin (login: admin/admin123)')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seed()
