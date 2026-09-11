const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const prismaEnv = path.join(rootDir, 'prisma', '.env');
const rootEnv = path.join(rootDir, '.env');

// Live Production Database URL
const LIVE_DATABASE_URL = 'postgresql://imswebsite:QvAYcgqwnop397@localhost:5432/imswebsitedb?schema=public';

// 1. Remove conflicting prisma/.env if it exists
if (fs.existsSync(prismaEnv)) {
  try {
    fs.unlinkSync(prismaEnv);
    console.log('✔ Successfully removed conflicting prisma/.env');
  } catch (err) {
    console.warn('⚠ Notice: Could not remove prisma/.env:', err.message);
  }
}

// 2. Ensure root .env exists and contains DATABASE_URL
if (!fs.existsSync(rootEnv)) {
  const defaultEnvContent = `# Auto-generated root .env
DATABASE_URL="${LIVE_DATABASE_URL}"
NODE_ENV=production
PORT=3000
CONTACT_STORAGE_MODE=database
`;
  fs.writeFileSync(rootEnv, defaultEnvContent, 'utf8');
  console.log('✔ Created root .env with live DATABASE_URL');
} else {
  // Check if DATABASE_URL is present in the existing root .env
  const existingContent = fs.readFileSync(rootEnv, 'utf8');
  if (!existingContent.includes('DATABASE_URL')) {
    fs.appendFileSync(rootEnv, `\nDATABASE_URL="${LIVE_DATABASE_URL}"\n`, 'utf8');
    console.log('✔ Appended DATABASE_URL to existing root .env');
  }
}

console.log('✔ Environment preparation complete.');
