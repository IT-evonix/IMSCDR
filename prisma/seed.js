// Database Seeder File
// Run using: `npx prisma db seed` or `npm run db:seed`

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function main() {
  console.log('🌱 Starting database seeding...');

  const defaultPassword = 'Evonix@287';
  const hashedPassword = await bcrypt.hash(defaultPassword, 10);

  const adminAccount = await prisma.admin.upsert({
    where: { email: 'admin@evonix.co' },
    update: {
      password: hashedPassword,
      role: 'Administrator',
    },
    create: {
      email: 'admin@evonix.co',
      name: 'System Administrator',
      password: hashedPassword,
      role: 'Administrator',
    },
  });

  console.log('✅ Admin account seeded successfully:', adminAccount.email);
  console.log('✅ Database seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
