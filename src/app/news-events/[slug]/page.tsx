'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import InnerpageBanner from '@/components/InnerpageBanner';
import { newsData } from '@/data/newsData';
import { LogoLoader } from '@/components/ui/LogoLoader';
import { ExternalLink } from 'lucide-react';

const DEFAULT_IMAGE = '/images/news-and-events/newsandevents.webp';

/* ─── Types ─────────────────────────────────────── */
interface DynamicNewsItem {
  id: number;
  title: string;
  slug: string;
  contentType: string;
  category: string;
  summary?: string;
  contentFormat?: string;
  contentHtml?: string;
  pdfUrl?: string;
  externalUrl?: string;
  thumbnailUrl?: string;
  images?: string[];
  startDate?: string;
  endDate?: string;
  createdAt: string;
  status: string;
  admin?: { name: string; email: string };
}

const BACK_SVG = (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.375 10.5L0.5 5.5L5.375 0.5M0.5 5.5L9.03125 5.5M13.5 5.5L11.4688 5.5"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const formatDate = (dateStr?: string) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

/* ─── Detail Page ────────────────────────────────── */
export default function NewsDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [item, setItem] = useState<DynamicNewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchItem = useCallback(async () => {
    if (!slug) return;

    try {
      // 1️⃣ Try dynamic API first (fetch by slug)
      const res = await fetch(`/api/news-events/${slug}`);
      const data = await res.json();

      if (res.ok && data.status === 'success' && data.data) {
        const itemData = data.data;
        // If content is PDF/Link format but file/link is missing, trigger 404 Not Found page
        if (
          (itemData.contentFormat === 'pdf' && (!itemData.pdfUrl || itemData.pdfUrl.startsWith('blob:'))) ||
          (itemData.contentFormat === 'link' && !itemData.externalUrl)
        ) {
          setNotFound(true);
        } else {
          setItem(itemData);
        }
        setLoading(false);
        return;
      }
    } catch {
      // fall through to static check
    }

    // 2️⃣ Fallback: look in static newsData
    const staticItem = newsData.find((n) => n.slug === slug && n.type === 'detail');
    if (!staticItem) {
      setNotFound(true);
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  /* ── Not Found ── */
  if (!loading && notFound) {
    return (
      <div className="innerpage-wrapper">
        <InnerpageBanner
          title="Not Found"
          breadcrumbs={[{ label: 'News & Events', href: '/news-events' }, { label: 'Not Found' }]}
        />
        <section className="news-detail-section">
          <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
            <h2>Content not found</h2>
            <p>This article may have been removed or doesn&apos;t exist.</p>
            <Link href="/news-events" className="back-btn" style={{ display: 'inline-flex', marginTop: 24 }}>
              {BACK_SVG}
              <span>Back to News &amp; Events</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="innerpage-wrapper">
        <InnerpageBanner
          title="News & Events Detail"
          breadcrumbs={[{ label: 'News & Events', href: '/news-events' }, { label: 'Loading...' }]}
        />
        <section className="news-detail-section">
          <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px 0' }}>
            <LogoLoader size="lg" text="Loading Content..." />
          </div>
        </section>
      </div>
    );
  }

  /* ── Dynamic Item from DB ── */
  if (item) {
    // Hero image: use first uploaded image, custom thumbnailUrl, or fallback DEFAULT_IMAGE
    const heroImgSrc =
      Array.isArray(item.images) && item.images.length > 0
        ? item.images[0]
        : item.thumbnailUrl && !item.thumbnailUrl.includes('black_logo')
          ? item.thumbnailUrl
          : DEFAULT_IMAGE;

    // Date range formatting: Start Date - End Date
    let dateDisplay = '';
    if (item.startDate && item.endDate) {
      dateDisplay = `${formatDate(item.startDate)} - ${formatDate(item.endDate)}`;
    } else if (item.startDate) {
      dateDisplay = formatDate(item.startDate);
    } else if (item.createdAt) {
      dateDisplay = formatDate(item.createdAt);
    }

    return (
      <div className="innerpage-wrapper">
        <InnerpageBanner
          title="News & Events Detail"
          breadcrumbs={[
            { label: 'News & Events', href: '/news-events' },
            { label: item.title },
          ]}
        />

        <section className="news-detail-section">
          <div className="container">
            {/* Hero Image — Always displayed */}
            <div className="news-detail-image">
              <Image
                src={heroImgSrc}
                alt={item.title}
                width={1200}
                height={700}
                priority
              />
            </div>

            <div className="news-detail-content" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal' }}>

              {/* Date Range · Type · Category */}
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                {dateDisplay && (
                  <span className="news-date" style={{ margin: 0 }}>
                    {dateDisplay}
                  </span>
                )}

                {item.contentType && (
                  <span style={{
                    display: 'inline-block',
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '3px 10px',
                    borderRadius: 999,
                    background: item.contentType.toLowerCase() === 'event' ? '#09468e18' : '#89004a18',
                    color: item.contentType.toLowerCase() === 'event' ? '#09468e' : '#89004a',
                    border: `1px solid ${item.contentType.toLowerCase() === 'event' ? '#09468e30' : '#89004a30'}`,
                  }}>
                    {item.contentType}
                  </span>
                )}

                {item.category && item.category.trim() && item.category.toLowerCase() !== 'general' && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '3px 12px',
                    borderRadius: 999,
                    background: '#f1f5f9',
                    color: '#1e293b',
                    border: '1px solid #cbd5e1',
                    letterSpacing: '0.02em',
                  }}>
                    {item.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <div className="heading">{item.title}</div>

              {/* Summary */}
              {item.summary && (
                <div style={{ fontSize: 15, fontWeight: 500, color: '#334155', lineHeight: 1.6, marginBottom: 20, fontStyle: 'italic' }}>
                  {item.summary}
                </div>
              )}

              {/* Content Body: Long Description HTML */}
              {item.contentFormat === 'description' && item.contentHtml && (
                <div
                  className="news-body-content"
                  style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal' }}
                  dangerouslySetInnerHTML={{ __html: item.contentHtml }}
                />
              )}

              {/* Content Body: External Website Link */}
              {item.contentFormat === 'link' && (
                item.externalUrl ? (
                  <div style={{ marginTop: 20, marginBottom: 28, padding: '20px 24px', backgroundColor: '#f8fafc', borderRadius: 12, border: '1px solid #cbd5e1' }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#1e293b', marginBottom: 12 }}>
                      This notice or event is hosted on an external website:
                    </p>
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-btn"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                    >
                      <span>Open Official Link / Website</span>
                      <ExternalLink style={{ width: 15, height: 15 }} />
                    </a>
                  </div>
                ) : (
                  <div style={{ marginTop: 20, marginBottom: 28, padding: '16px 20px', backgroundColor: '#fef2f2', borderRadius: 12, border: '1px solid #fca5a5', color: '#991b1b', fontSize: 13, fontWeight: 500 }}>
                    ⚠️ External link URL has not been attached to this post.
                  </div>
                )
              )}

              {/* Content Body: PDF Attachment with Embedded Viewer */}
              {item.contentFormat === 'pdf' && (
                item.pdfUrl && !item.pdfUrl.startsWith('blob:') ? (
                  <div style={{ marginTop: 20, marginBottom: 28 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="news-btn"
                        style={{ display: 'inline-flex' }}
                      >
                        <span>View / Download Official PDF</span>
                      </a>
                    </div>

                    {/* Embedded PDF Viewer Iframe */}
                    <div style={{ width: '100%', height: 600, borderRadius: 12, overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                      <iframe
                        src={item.pdfUrl}
                        title={`PDF - ${item.title}`}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                      />
                    </div>
                  </div>
                ) : (
                  <div style={{ marginTop: 20, marginBottom: 28, padding: '16px 20px', backgroundColor: '#fef2f2', borderRadius: 12, border: '1px solid #fca5a5', color: '#991b1b', fontSize: 13, fontWeight: 500 }}>
                    ⚠️ Official PDF Circular file has not been uploaded yet or file link is invalid. Please upload the PDF from the admin panel.
                  </div>
                )
              )}

              {/* Gallery Images (if more than 1 image uploaded) */}
              {Array.isArray(item.images) && item.images.length > 1 && (
                <div style={{ margin: '28px 0' }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#09468e', marginBottom: 12 }}>
                    Media Gallery
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
                    {item.images.map((src, i) => (
                      <div key={i} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                        <Image src={src} alt={`${item.title} media ${i + 1}`} width={600} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link href="/news-events" className="back-btn" style={{ marginTop: 24 }}>
                {BACK_SVG}
                <span>Back to News &amp; Events</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* ── Static Fallback (already handled via notFound or early redirect) ── */
  const staticItem = newsData.find((n) => n.slug === slug);
  if (staticItem) {
    return (
      <div className="innerpage-wrapper">
        <InnerpageBanner
          title="News & Events Detail"
          breadcrumbs={[
            { label: 'News & Events', href: '/news-events' },
            { label: staticItem.title },
          ]}
        />
        <section className="news-detail-section">
          <div className="container">
            {staticItem.image && (
              <div className="news-detail-image">
                <Image src={staticItem.image} alt={staticItem.title} width={1200} height={700} priority />
              </div>
            )}
            <div className="news-detail-content">
              {staticItem.date && <span className="news-date">{staticItem.date}</span>}
              <div className="heading">{staticItem.title}</div>
              {staticItem.description?.map((para, i) => <p key={i}>{para}</p>)}
              <Link href="/news-events" className="back-btn">
                {BACK_SVG}
                <span>Back to News &amp; Events</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
}