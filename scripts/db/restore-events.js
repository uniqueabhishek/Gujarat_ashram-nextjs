const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Adding sample courses...');

  await prisma.event.createMany({
    data: [
      { 
        title: "Morning Yoga Sanctuary", 
        date: "2026-04-10", 
        endDate: "2026-04-12",
        category: "yoga", 
        description: "A 3-day immersive yoga retreat to rejuvenate your soul.",
        buttonText: "Join Now",
        buttonUrl: "/register",
        isActive: true
      },
      { 
        title: "Meditation Satsang", 
        date: "2026-04-15", 
        category: "meditation", 
        description: "An evening of deep silence and spiritual wisdom.",
        buttonText: "Learn More",
        buttonUrl: "/register",
        isActive: true
      }
    ]
  });

  console.log('Sample data restored!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
