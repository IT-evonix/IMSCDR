# IMS CDR - Plesk Server Deployment Guide

## Production Environment & Domain Details
- **Live URL:** `https://loving-rosalind.217-154-41-210.plesk.page`
- **API Base URL:** `https://loving-rosalind.217-154-41-210.plesk.page/api`
- **Application Startup File:** `server.js`
- **Node.js Engine:** `>= 20.0.0`
- **Framework:** Next.js (App Router) + Express.js Backend + Prisma ORM (PostgreSQL)

---

## 1. Environment Variables Configuration (.env)

When deploying to the Plesk server, create a `.env` file in the project's root directory (or paste the contents of `.env.production` into `.env`):

```env
# Server Port & Environment
PORT=3000
NODE_ENV=production

# PostgreSQL Database Connection String (Plesk Database)
# Replace <DB_USER>, <DB_PASSWORD>, and <DB_NAME> with your actual database credentials
DATABASE_URL="postgresql://<DB_USER>:<DB_PASSWORD>@localhost:5432/<DB_NAME>?schema=public"

# Production Domain URLs
APP_URL=https://loving-rosalind.217-154-41-210.plesk.page
NEXT_PUBLIC_APP_URL=https://loving-rosalind.217-154-41-210.plesk.page
NEXT_PUBLIC_API_URL=https://loving-rosalind.217-154-41-210.plesk.page/api

# JWT Authentication Secrets
JWT_SECRET=imscdr_prod_sec_key_9f83a21b8c4d7e6f501a2b3c4d5e6f7a8b9c0d1e2f
JWT_REFRESH_SECRET=imscdr_prod_refresh_sec_key_7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b
JWT_EXPIRES_IN=24h
```

---

## 2. PostgreSQL Database Setup on Plesk

1. **Log in to Plesk Control Panel** and navigate to **Databases**.
2. Click **Add Database**:
   - **Database Type:** `PostgreSQL`
   - **Database Name:** e.g., `ims_db`
   - **Database User:** Create a dedicated user with a strong password.
3. **Import Initial Schema & Data**:
   - Run the provided `ims_db_dump.sql` database dump:
     ```bash
     psql -U <DB_USER> -d <DB_NAME> -f ims_db_dump.sql
     ```
   - *Alternatively, deploy Prisma migrations:*
     ```bash
     npx prisma migrate deploy --schema=./prisma/schema
     ```
4. **Seed Default Admin User**:
   - Run the database seeder to create the initial administrator account:
     ```bash
     npm run db:seed
     ```
   - **Default Admin Credentials:**
     - **Email:** `admin@evonix.co`
     - **Password:** `Evonix@287`

---

## 3. Node.js Application Configuration in Plesk

1. Go to **Websites & Domains > Node.js** for the domain `loving-rosalind.217-154-41-210.plesk.page`:
   - **Node.js Version:** Select `20.x` or `22.x` (LTS).
   - **Application Mode:** `production`
   - **Application Root:** `/httpdocs` (or your project's root folder).
   - **Application Startup File:** `server.js`
   - **Custom Environment Variables:** (Optional if `.env` file is already in root).

2. **Install Dependencies:**
   - Click the **NPM Install** button in Plesk or run in SSH terminal:
     ```bash
     npm install
     ```

3. **Build the Next.js Application:**
   - Run the build command in SSH terminal:
     ```bash
     npm run build
     ```

4. **Restart Application:**
   - Click the **Restart** button in the Plesk Node.js management panel.

---

## 4. Local Development Setup

To run and develop the project on your local machine:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Generate Prisma Client:**
   ```bash
   npx prisma generate --schema=./prisma/schema
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The local application will be accessible at: `http://localhost:3000`

---

## 5. Summary of Key Files

| File | Purpose |
|------|---------|
| `server.js` | Main entry point integrating Express.js API and Next.js request handler |
| `.env` | Local development environment configuration |
| `.env.production` | Production environment configuration for Plesk |
| `.env.example` | Template of environment variables |
| `ims_db_dump.sql` | PostgreSQL database structure and initial records |
| `prisma/schema/` | Prisma ORM schema definitions |
| `src/server/` | Express.js API routes, controllers, and middleware |
