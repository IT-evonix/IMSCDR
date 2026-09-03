const fs = require('fs');
const path = require('path');
// Prisma ORM Database Connection Client
const { PrismaClient } = require('@prisma/client');

// Auto-detect and sanitize database URL
let dbUrl = process.env.DATABASE_URL || '';

// Handle case where 'DATABASE_URL:' prefix was accidentally pasted into the value in Plesk UI
if (dbUrl.startsWith('DATABASE_URL:')) {
  dbUrl = dbUrl.replace(/^DATABASE_URL:\s*/, '').trim();
}

if (!dbUrl || !dbUrl.startsWith('postgres')) {
  if (process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_NAME) {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || '5432';
    dbUrl = `postgresql://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PASSWORD)}@${host}:${port}/${process.env.DB_NAME}?schema=public`;
  } else {
    dbUrl = 'postgresql://imswebsite:QvAYcgqwnop397@localhost:5432/imswebsitedb?schema=public';
  }
}

// Clean any surrounding quotes
dbUrl = dbUrl.replace(/^["']|["']$/g, '').trim();
process.env.DATABASE_URL = dbUrl;

// Auto-write .env and prisma/.env to disk so Prisma Rust Engine reads it natively
try {
  const rootEnv = path.join(process.cwd(), '.env');
  const prismaDir = path.join(process.cwd(), 'prisma');
  const prismaEnv = path.join(prismaDir, '.env');

  if (!fs.existsSync(rootEnv)) {
    fs.writeFileSync(rootEnv, `DATABASE_URL="${dbUrl}"\nNODE_ENV=production\n`, 'utf8');
  }
  if (fs.existsSync(prismaDir) && !fs.existsSync(prismaEnv)) {
    fs.writeFileSync(prismaEnv, `DATABASE_URL="${dbUrl}"\n`, 'utf8');
  }
} catch (e) {
  // Silently ignore if file write is restricted
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
