const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Restoring Ashram Site Content...');

  // 1. About Content
  await prisma.aboutContent.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      heroTitle: "Art of Living",
      heroSubtitle: "Gujarat Ashram",
      heroDescription: "Discover a sanctuary of peace and spirituality in the heart of Gujarat.",
      aboutBadge: "Discover",
      aboutTitle: "Why Visit the Gujarat Ashram?",
      aboutDescription: "Experience a calm environment designed for yoga, meditation, and self-discovery.",
      footerTitle: "Gujarat Ashram",
      footerDescription: "A sanctuary for peace and spiritual growth."
    }
  });

  // 2. Info Cards
  const cards = [
    { title: "Yoga", description: "Daily sessions across various levels.", icon: "Yoga", order: 1 },
    { title: "Meditation", description: "Satsangs and guided meditation.", icon: "Meditation", order: 2 },
    { title: "Peace", description: "A quiet space for reflection.", icon: "Peace", order: 3 }
  ];
  for (const card of cards) {
    await prisma.infoCard.create({ data: { ...card, isActive: true } });
  }

  // 3. Hero Buttons
  await prisma.heroButton.createMany({
    data: [
      { name: "Explore Ashram", url: "#about", variant: "default", order: 1 },
      { name: "View Schedule", url: "/calendar", variant: "outline", order: 2 }
    ]
  });

  // 4. Contact Info
  await prisma.contactInfo.createMany({
    data: [
      { type: "address", label: "Location", value: "Gujarat, India", isActive: true },
      { type: "email", label: "Email", value: "info@gujaratashram.org", isActive: true }
    ]
  });

  console.log('Restoration Complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
