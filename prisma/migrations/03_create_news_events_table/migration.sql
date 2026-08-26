-- Migration 03: Create News & Events Table (Safe Idempotent DDL)
CREATE TABLE IF NOT EXISTS "public"."news_events" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "contentType" TEXT NOT NULL DEFAULT 'News',
    "category" TEXT NOT NULL DEFAULT 'Academic News',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "summary" TEXT,
    "contentFormat" TEXT NOT NULL DEFAULT 'description',
    "contentHtml" TEXT,
    "pdfUrl" TEXT,
    "thumbnailUrl" TEXT NOT NULL DEFAULT '/images/home/black_logo.webp',
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" TEXT NOT NULL DEFAULT 'Published',
    "adminId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "news_events_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "news_events_slug_key" ON "public"."news_events"("slug");
CREATE INDEX IF NOT EXISTS "news_events_createdAt_idx" ON "public"."news_events"("createdAt" DESC);
CREATE INDEX IF NOT EXISTS "news_events_category_idx" ON "public"."news_events"("category");
CREATE INDEX IF NOT EXISTS "news_events_contentType_idx" ON "public"."news_events"("contentType");
CREATE INDEX IF NOT EXISTS "news_events_deletedAt_idx" ON "public"."news_events"("deletedAt");

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'news_events_adminId_fkey'
    ) THEN
        ALTER TABLE "public"."news_events" 
        ADD CONSTRAINT "news_events_adminId_fkey" 
        FOREIGN KEY ("adminId") REFERENCES "public"."admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;
END $$;
