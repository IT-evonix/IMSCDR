'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InnerpageBanner from '@/components/InnerpageBanner';
import { ComingSoonState } from '@/components/ui/ComingSoonState';

/* ─── Types ─────────────────────────────────────── */
interface BlogItem {
  id: number;
  title: string;
  slug: string;
  contentType: string;
  category: string;
  summary?: string;
  thumbnailUrl?: string;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  status: string;
  contentFormat?: string;
  pdfUrl?: string;
  externalUrl?: string;
}

const ARROW_SVG = (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DEFAULT_LOGO = '/images/news-and-events/newsandevents.webp';

/* ─── Skeleton Card ──────────────────────────────── */
const SkeletonCard = () => (
  <div className="col-lg-4 col-sm-6 mb-4">
    <div className="news-card animate-pulse">
      <div className="news-image" style={{ background: '#e5e7eb', minHeight: 200 }} />
      <div className="news-content">
        <div style={{ height: 12, background: '#e5e7eb', borderRadius: 4, width: '40%', marginBottom: 8 }} />
        <div style={{ height: 16, background: '#e5e7eb', borderRadius: 4, marginBottom: 6 }} />
        <div style={{ height: 16, background: '#e5e7eb', borderRadius: 4, width: '70%', marginBottom: 12 }} />
        <div style={{ height: 12, background: '#e5e7eb', borderRadius: 4, width: '60%' }} />
      </div>
    </div>
  </div>
);

/* ─── Blogs Page Component ───────────────────────── */
const BlogsPage = () => {
  const [dynamicItems, setDynamicItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch('/api/news-events?page=1&limit=50&status=Published&contentType=Blog');
      const data = await res.json();
      if (res.ok && data.status === 'success' && Array.isArray(data.data)) {
        // Only display published/active blogs
        const blogsOnly = data.data.filter(
          (item: any) =>
            item.status === 'Published' &&
            item.contentType?.toLowerCase() === 'blog'
        );
        setDynamicItems(blogsOnly);
      }
    } catch {
      // Silently catch fetch errors
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="innerpage-wrapper">
      <InnerpageBanner
        title="Blogs"
        breadcrumbs={[{ label: 'Blogs' }]}
      />

      <section className="news-events-section">
        <div className="container">
          <div className="row">

            {/* ── Dynamic Blog Items from Database ─────────── */}
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={`sk-${i}`} />)
              : dynamicItems.map((item) => (
                <div className="col-lg-4 col-sm-6 mb-4" key={`dyn-blog-${item.id}`}>
                  <div className="news-card">
                    {/* Thumbnail with Type Badge overlay */}
                    <div className="news-image" style={{ position: 'relative' }}>
                      <Image
                        src={
                          item.thumbnailUrl && !item.thumbnailUrl.includes('black_logo')
                            ? item.thumbnailUrl
                            : DEFAULT_LOGO
                        }
                        alt={item.title}
                        width={600}
                        height={380}
                      />
                      {/* Blog Badge Overlay on top-left of image */}
                      <span
                        style={{
                          position: 'absolute',
                          top: 8,
                          left: 8,
                          zIndex: 2,
                          fontSize: 9,
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          padding: '3px 8px',
                          borderRadius: 6,
                          background: '#09468e',
                          color: '#ffffff',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        }}
                      >
                        Blog
                      </span>
                    </div>

                    <div className="news-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        {/* Date / Date Range at top */}
                        <span className="news-date">
                          {formatDate(item.startDate || item.createdAt)}
                        </span>

                        {/* Title */}
                        <div className="subheading" style={{ margin: '2px 0 4px 0' }}>
                          {item.title}
                        </div>

                        {/* Truncated Short Description */}
                        {item.summary && (
                          <p
                            style={{
                              fontSize: 11,
                              color: '#555',
                              margin: '4px 0 8px 0',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              lineHeight: '1.35',
                            }}
                          >
                            {item.summary}
                          </p>
                        )}
                      </div>

                      {/* Read More Button */}
                      <div style={{ marginTop: 'auto', paddingTop: 6 }}>
                        {item.contentFormat === 'pdf' && item.pdfUrl && !item.pdfUrl.startsWith('blob:') ? (
                          <a
                            href={item.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="news-btn"
                          >
                            <span>Read More</span>
                            {ARROW_SVG}
                          </a>
                        ) : item.contentFormat === 'link' && item.externalUrl ? (
                          <a
                            href={item.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="news-btn"
                          >
                            <span>Read More</span>
                            {ARROW_SVG}
                          </a>
                        ) : (
                          <Link href={`/blogs/${item.slug}`} className="news-btn">
                            <span>Read More</span>
                            {ARROW_SVG}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* ── Empty State: Coming Soon ── */}
            {!loading && dynamicItems.length === 0 && (
              <ComingSoonState />
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
