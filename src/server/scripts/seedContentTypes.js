const prisma = require('../config/db');

const initialContentTypes = [
  { name: 'News', label: 'News Only', slug: 'news', module: 'news-events', isActive: true },
  { name: 'Event', label: 'Events Only', slug: 'event', module: 'news-events', isActive: true },
  { name: 'Blog', label: 'Blogs Only', slug: 'blog', module: 'news-events', isActive: true },
  { name: 'Notice', label: 'Notices Only', slug: 'notice', module: 'news-events', isActive: true },
  { name: 'Circular', label: 'Circulars Only', slug: 'circular', module: 'news-events', isActive: true },
  { name: 'Notice,Circular', label: 'Notices & Circulars', slug: 'notice-circular', module: 'categories', isActive: true },
  { name: 'All', label: 'Universal / All Modules', slug: 'all', module: 'categories', isActive: true },
];

async function seedContentTypes() {
  console.log('Seeding content_types table in PostgreSQL...');
  let created = 0;
  let updated = 0;

  for (const item of initialContentTypes) {
    const existing = await prisma.contentType.findFirst({
      where: {
        OR: [
          { name: { equals: item.name, mode: 'insensitive' } },
          { slug: { equals: item.slug, mode: 'insensitive' } },
        ],
      },
    });

    if (existing) {
      await prisma.contentType.update({
        where: { id: existing.id },
        data: {
          name: item.name,
          label: item.label,
          slug: item.slug,
          module: item.module,
          isActive: item.isActive,
        },
      });
      updated++;
    } else {
      await prisma.contentType.create({
        data: item,
      });
      created++;
    }
  }

  console.log(`Content types seeded: ${created} created, ${updated} verified/updated.`);
  process.exit(0);
}

seedContentTypes().catch((err) => {
  console.error('Failed to seed content types:', err);
  process.exit(1);
});
