-- Migration 02: Create Refresh Tokens Table (Safe Idempotent DDL)
CREATE TABLE IF NOT EXISTS "public"."refresh_tokens" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "refresh_tokens_token_key" ON "public"."refresh_tokens"("token");

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'refresh_tokens_adminId_fkey'
    ) THEN
        ALTER TABLE "public"."refresh_tokens" 
        ADD CONSTRAINT "refresh_tokens_adminId_fkey" 
        FOREIGN KEY ("adminId") REFERENCES "public"."admins"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;
