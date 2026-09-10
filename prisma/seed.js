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

  // 2. Seed System Content Types for Production
  console.log('🌱 Seeding core content types...');
  const initialContentTypes = [
    { name: 'News', label: 'News Only', slug: 'news', module: 'news-events' },
    { name: 'Event', label: 'Events Only', slug: 'event', module: 'news-events' },
    { name: 'Blog', label: 'Blogs Only', slug: 'blog', module: 'news-events' },
    { name: 'Notice', label: 'Notices Only', slug: 'notice', module: 'news-events' },
    { name: 'Circular', label: 'Circulars Only', slug: 'circular', module: 'news-events' },
    { name: 'Notice,Circular', label: 'Notices & Circulars', slug: 'notice-circular', module: 'categories' },
    { name: 'All', label: 'Universal / All Modules', slug: 'all', module: 'categories' },
  ];

  for (const item of initialContentTypes) {
    await prisma.contentType.upsert({
      where: { name: item.name },
      update: {
        label: item.label,
        slug: item.slug,
        module: item.module,
        isActive: true,
      },
      create: {
        name: item.name,
        label: item.label,
        slug: item.slug,
        module: item.module,
        isActive: true,
      },
    });
  }

  console.log('✅ Content types seeded successfully.');
  console.log('✅ Databas e seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
