require('dotenv').config({ path: '.env.local' })
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const cards = await prisma.infoCard.findMany({
    orderBy: { order: 'asc' }
  })
  console.log('Info Cards in database:', cards.length)
  cards.forEach(card => {
    console.log(`- ${card.title} (icon: ${card.icon}, order: ${card.order})`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
