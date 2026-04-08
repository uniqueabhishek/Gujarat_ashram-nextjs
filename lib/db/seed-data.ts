import { db, menuItem, heroButton, footerLink, infoCard, event, contactInfo, aboutContent } from './index'

export async function seedDatabase() {
  try {
    console.log('🌱 Starting database seed...')

    // 1. Seed Menu Items
    console.log('📝 Seeding menu items...')
    await db.delete(menuItem)
    await db.insert(menuItem).values([
      { name: 'Home', url: '/', order: 0, isSpecial: false, variant: 'default' },
      { name: 'About', url: '#about', order: 1, isSpecial: false, variant: 'default' },
      { name: 'Programs', url: '#programs', order: 2, isSpecial: false, variant: 'default' },
      { name: 'Gallery', url: '#gallery', order: 3, isSpecial: false, variant: 'default' },
      { name: 'Schedule', url: '/calendar', order: 4, isSpecial: true, variant: 'outline' },
    ])

    // 2. Seed Hero Buttons
    console.log('🎯 Seeding hero buttons...')
    await db.delete(heroButton)
    await db.insert(heroButton).values([
      { name: 'Explore Programs', url: '#programs', variant: 'default', order: 0 },
      { name: 'Visit Us', url: '#contact', variant: 'outline', order: 1 },
    ])

    // 3. Seed Info Cards
    console.log('💎 Seeding info cards...')
    await db.delete(infoCard)
    await db.insert(infoCard).values([
      {
        title: 'Meditation',
        description: 'Find inner peace through guided meditation practices and mindfulness techniques.',
        icon: 'Leaf',
        order: 0,
        isActive: true,
      },
      {
        title: 'Yoga',
        description: 'Strengthen body and mind with traditional yoga asanas and breathing exercises.',
        icon: 'Activity',
        order: 1,
        isActive: true,
      },
      {
        title: 'Wellness',
        description: 'Comprehensive wellness programs designed for holistic health and rejuvenation.',
        icon: 'Heart',
        order: 2,
        isActive: true,
      },
      {
        title: 'Retreat',
        description: 'Immersive retreat experiences in a serene and spiritual environment.',
        icon: 'Zap',
        order: 3,
        isActive: true,
      },
    ])

    // 4. Seed Events
    console.log('📅 Seeding events...')
    await db.delete(event)
    const today = new Date()
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    const twoWeeks = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)

    await db.insert(event).values([
      {
        title: 'Morning Yoga Session',
        date: today.toISOString().split('T')[0],
        endDate: today.toISOString().split('T')[0],
        description: 'Join us for an energizing morning yoga session to start your day with vitality.',
        category: 'yoga',
        buttonText: 'Register Now',
        buttonUrl: '#contact',
        isActive: true,
      },
      {
        title: 'Meditation Retreat',
        date: nextWeek.toISOString().split('T')[0],
        endDate: nextWeek.toISOString().split('T')[0],
        description: 'A transformative 3-day meditation retreat in the peaceful surroundings of our ashram.',
        category: 'meditation',
        buttonText: 'Learn More',
        buttonUrl: '#contact',
        isActive: true,
      },
      {
        title: 'Wellness Workshop',
        date: twoWeeks.toISOString().split('T')[0],
        endDate: twoWeeks.toISOString().split('T')[0],
        description: 'Discover holistic wellness practices including nutrition, fitness, and mindfulness.',
        category: 'wellness',
        buttonText: 'Join Us',
        buttonUrl: '#contact',
        isActive: true,
      },
    ])

    // 5. Seed Contact Info
    console.log('📞 Seeding contact information...')
    await db.delete(contactInfo)
    await db.insert(contactInfo).values([
      {
        type: 'phone',
        label: 'Phone',
        value: '+91 79xxxx xxxx',
        url: 'tel:+917900000000',
        order: 0,
        isActive: true,
      },
      {
        type: 'email',
        label: 'Email',
        value: 'info@gujaratashram.org',
        url: 'mailto:info@gujaratashram.org',
        order: 1,
        isActive: true,
      },
      {
        type: 'whatsapp',
        label: 'WhatsApp',
        value: '+91 79xxxx xxxx',
        url: 'https://wa.me/917900000000',
        order: 2,
        isActive: true,
      },
      {
        type: 'address',
        label: 'Address',
        value: 'Gujarat Ashram, Ahmedabad, Gujarat, India',
        url: 'https://goo.gl/maps/gujaratashram',
        order: 3,
        isActive: true,
      },
    ])

    // 6. Seed Footer Links
    console.log('🔗 Seeding footer links...')
    await db.delete(footerLink)
    await db.insert(footerLink).values([
      { label: 'Home', url: '/', order: 0 },
      { label: 'About Us', url: '#about', order: 1 },
      { label: 'Programs', url: '#programs', order: 2 },
      { label: 'Contact', url: '#contact', order: 3 },
      { label: 'Privacy Policy', url: '/privacy', order: 4 },
      { label: 'Terms & Conditions', url: '/terms', order: 5 },
    ])

    // 7. About Content (already has default, but let's ensure it's set)
    console.log('📖 Seeding about content...')
    await db.delete(aboutContent)
    await db.insert(aboutContent).values([
      {
        heroTitle: 'Art of Living',
        heroSubtitle: 'Gujarat Ashram',
        heroDescription: 'Discover a sanctuary for inner peace, ancient wisdom, and holistic rejuvenation amidst nature\'s embrace.',
        aboutBadge: 'Discover',
        aboutTitle: 'Why Visit the Gujarat Ashram?',
        aboutDescription: 'Experience a calm environment filled with wisdom and transformative meditation practices. Our ashram offers a unique blend of traditional yoga, meditation, and modern wellness techniques in a serene setting.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        footerTitle: 'Sri Sri Gujarat Ashram',
        footerDescription: 'A sanctuary for peace, meditation, and spiritual growth in the heart of Gujarat. Join us on your journey to inner transformation.',
      },
    ])

    console.log('✅ Database seeding completed successfully!')
    console.log('')
    console.log('📊 Seeded Data Summary:')
    console.log('  ✓ 5 Menu Items')
    console.log('  ✓ 2 Hero Buttons')
    console.log('  ✓ 4 Info Cards')
    console.log('  ✓ 3 Events')
    console.log('  ✓ 4 Contact Information entries')
    console.log('  ✓ 6 Footer Links')
    console.log('  ✓ About Content')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  }
}
