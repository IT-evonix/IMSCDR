const prisma = require('../config/db');

const initialCategories = [
  { name: 'Examination', slug: 'examination', type: 'Notice,Circular' },
  { name: 'Scholarship', slug: 'scholarship', type: 'Notice,Circular' },
  { name: 'Academic', slug: 'academic', type: 'Notice,Circular' },
  { name: 'Placement', slug: 'placement', type: 'Notice,Circular' },
  { name: 'University', slug: 'university', type: 'Notice,Circular' },
  { name: 'Accounts', slug: 'accounts', type: 'Notice,Circular' },
  { name: 'Library', slug: 'library', type: 'Notice,Circular' },
  { name: 'Sports', slug: 'sports', type: 'Notice,Circular' },
  { name: 'Cultural', slug: 'cultural', type: 'Notice,Circular' },
  { name: 'Admission', slug: 'admission', type: 'Notice,Circular' },
  { name: 'Internship', slug: 'internship', type: 'Notice,Circular' },
  { name: 'Workshop', slug: 'workshop', type: 'Notice,Circular' },
  { name: 'ERP', slug: 'erp', type: 'Notice,Circular' },
  { name: 'Research', slug: 'research', type: 'Notice,Circular' },
  { name: 'Committee', slug: 'committee', type: 'Notice,Circular' },
  { name: 'Hostel', slug: 'hostel', type: 'Notice,Circular' },
  { name: 'Alumni', slug: 'alumni', type: 'Notice,Circular' },
  { name: 'Holiday', slug: 'holiday', type: 'Notice,Circular' },
  { name: 'Fee', slug: 'fee', type: 'Notice,Circular' },
  { name: 'General', slug: 'general', type: 'NewsEvent' },
];

async function seedCategories() {
  console.log('Seeding categories for Notices, Circulars, & Events...');
  let createdCount = 0;
  let updatedCount = 0;

  for (const cat of initialCategories) {
    const existing = await prisma.category.findFirst({
      where: {
        OR: [
          { name: { equals: cat.name, mode: 'insensitive' } },
          { slug: { equals: cat.slug, mode: 'insensitive' } },
        ],
      },
    });

    if (existing) {
      // If deleted, restore; also update type if needed
      await prisma.category.update({
        where: { id: existing.id },
        data: {
          name: cat.name,
          slug: cat.slug,
          type: cat.type,
          deletedAt: null,
        },
      });
      updatedCount++;
    } else {
      await prisma.category.create({
        data: {
          name: cat.name,
          slug: cat.slug,
          type: cat.type,
        },
      });
      createdCount++;
    }
  }

  console.log(`Seeding complete: ${createdCount} created, ${updatedCount} verified/updated.`);
  process.exit(0);
}

seedCategories().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
