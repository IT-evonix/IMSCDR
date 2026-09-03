const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Auto-detect and sanitize database URL
let effectiveDbUrl = process.env.DATABASE_URL || '';

if (effectiveDbUrl.startsWith('DATABASE_URL:')) {
  effectiveDbUrl = effectiveDbUrl.replace(/^DATABASE_URL:\s*/, '').trim();
}

if (!effectiveDbUrl || !effectiveDbUrl.startsWith('postgres')) {
  if (process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_NAME) {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || '5432';
    effectiveDbUrl = `postgresql://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PASSWORD)}@${host}:${port}/${process.env.DB_NAME}?schema=public`;
  } else {
    effectiveDbUrl = 'postgresql://imswebsite:QvAYcgqwnop397@localhost:5432/imswebsitedb?schema=public';
  }
}

effectiveDbUrl = effectiveDbUrl.replace(/^["']|["']$/g, '').trim();
process.env.DATABASE_URL = effectiveDbUrl;

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'imscdr_prod_sec_key_9f83a21b8c4d7e6f501a2b3c4d5e6f7a8b9c0d1e2f';
}
if (!process.env.JWT_REFRESH_SECRET) {
  process.env.JWT_REFRESH_SECRET = 'imscdr_prod_refresh_sec_key_7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b';
}

// Auto-write .env and prisma/.env to disk so Prisma Rust Engine reads it natively
try {
  const rootEnv = path.join(__dirname, '.env');
  const prismaDir = path.join(__dirname, 'prisma');
  const prismaEnv = path.join(prismaDir, '.env');

  if (!fs.existsSync(rootEnv)) {
    fs.writeFileSync(rootEnv, `DATABASE_URL="${effectiveDbUrl}"\nNODE_ENV=production\n`, 'utf8');
  }
  if (fs.existsSync(prismaDir) && !fs.existsSync(prismaEnv)) {
    fs.writeFileSync(prismaEnv, `DATABASE_URL="${effectiveDbUrl}"\n`, 'utf8');
  }
} catch (e) {
  // Silently ignore if file write is restricted
}

const next = require('next');
const expressApp = require('./src/server/app');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Initialize Next.js Application Instance
const nextApp = next({ dev, dir: __dirname });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Pass all non-API requests to Next.js handler
  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  const server = expressApp.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server ready on http://localhost:${port} [Mode: ${dev ? 'Development' : 'Production'}]`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const nextPort = Number(port) + 1;
      console.warn(`Port ${port} is busy. Retrying on port ${nextPort}...`);
      expressApp.listen(nextPort, () => {
        console.log(`> Server fallback ready on http://localhost:${nextPort}`);
      });
    } else {
      console.error('Server error:', err);
    }
  });
}).catch((err) => {
  console.error('Error starting server:', err);
});
