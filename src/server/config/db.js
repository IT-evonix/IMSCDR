// Prisma ORM Database Connection Client
const { PrismaClient } = require('@prisma/client');

// Auto-detect and sanitize database URL if provided
let dbUrl = process.env.DATABASE_URL || '';

// Handle case where 'DATABASE_URL:' prefix was accidentally pasted or quotes exist
if (dbUrl.startsWith('DATABASE_URL:')) {
  dbUrl = dbUrl.replace(/^DATABASE_URL:\s*/, '').trim();
}
dbUrl = dbUrl.replace(/^["']|["']$/g, '').trim();

if (dbUrl) {
  process.env.DATABASE_URL = dbUrl;
}

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: dbUrl,
    },
  },
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

module.exports = prisma;
