'use client';

import React, { useState, useEffect } from 'react';
import { FileText, ExternalLink, Calendar, ArrowDownToLine, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockNoticesCirculars } from '@/data/notices-circulars';
import '@/app/notices-circular.css';

interface NoticeItem {
  id: number;
  title: string;
  slug: string;
  contentType: string;
  category: string;
  startDate?: string | null;
  createdAt: string;
  contentFormat: string;
  pdfUrl?: string | null;
  externalUrl?: string | null;
  contentHtml?: string | null;
}

export default function NoticesCircularsPage() {
  const [items, setItems] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNotices();
  }, [currentPage, itemsPerPage]);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/news-events?type=Notice,Circular&status=Published&limit=100`
      );
      const data = await res.json();

      const dbItems: NoticeItem[] = (res.ok && data.status === 'success' && Array.isArray(data.data))
        ? data.data
        : [];

      // Combine real DB items with mockNoticesCirculars for testing pagination (> 20 records)
      const combinedList: NoticeItem[] = [...dbItems, ...mockNoticesCirculars];

      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      setItems(combinedList.slice(start, end));
      setTotalItems(combinedList.length);
      setTotalPages(Math.ceil(combinedList.length / itemsPerPage) || 1);
    } catch (err) {
      console.warn('API error, using mock notices:', err);
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setItems(mockNoticesCirculars.slice(start, end));
      setTotalItems(mockNoticesCirculars.length);
      setTotalPages(Math.ceil(mockNoticesCirculars.length / itemsPerPage) || 1);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }); // e.g. 08 Sep 2026
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="innerpagerightside">
      {/* Page Title */}
      <h2 className="heading">Notices & Circulars</h2>

      <div className="notices-wrapper">
        {loading ? (
          <div className="notices-loading-state">
            <div className="notices-spinner"></div>
            <p className="notices-loading-text">Loading notices & circulars...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="notices-empty-box">
            <div className="notices-empty-icon-wrap">
              <Bell />
            </div>
            <h4 className="notices-empty-title">No Notices or Circulars Found</h4>
            <p className="notices-empty-desc">
              There are currently no active notices or circulars published.
            </p>
          </div>
        ) : (
          <div className="notices-table-card">
            <div className="notices-table-responsive">
              <table className="notices-table">
                <thead>
                  <tr>
                    <th className="text-center notices-th-sr">Sr.</th>
                    <th className="notices-th-title">Title </th>
                    <th className="text-center notices-th-action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => {
                    const noticeDate = item.startDate ? formatDate(item.startDate) : null;
                    const hasPdf = Boolean(item.pdfUrl);
                    const hasLink = Boolean(item.externalUrl);
                    const srNumber = (currentPage - 1) * itemsPerPage + idx + 1;

                    return (
                      <tr key={`${item.id}-${idx}`}>
                        {/* Sr. No */}
                        <td className="notices-sr-cell">
                          {srNumber}
                        </td>

                        {/* Title / Subject with manual date below heading */}
                        <td>
                          <div className="notices-title-content">
                            <span className="notices-item-title">{item.title}</span>

                            {/* Bottom of heading: Display manual date (if added) & category */}
                            {(noticeDate || (item.category && item.category !== 'General')) && (
                              <div className="notices-meta-row">
                                {noticeDate && (
                                  <span className="notices-date-badge">
                                    <Calendar className="notices-date-icon" />
                                    <span>{noticeDate}</span>
                                  </span>
                                )}

                                {item.category && item.category !== 'General' && (
                                  <span className="notices-category-tag">
                                    {item.category}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </td>

                        {/* Action Button */}
                        <td className="notices-action-cell">
                          {hasPdf ? (
                            <div className="explore_more_btn">
                              <a
                                href={item.pdfUrl!}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Download or View Official PDF"
                              >
                                <FileText size={11} />
                                <span>View PDF</span>
                                <svg
                                  width="11"
                                  height="9"
                                  viewBox="0 0 14 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                          ) : hasLink ? (
                            <a
                              href={item.externalUrl!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="admission-btn"
                              title="Open External Link"
                            >
                              <span>Open Link</span>
                              <ExternalLink size={11} />
                            </a>
                          ) : (
                            <span className="notices-no-attachment">No attachment</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination: Display ONLY when more than 20 records exist */}
            {totalItems > 20 && totalPages > 1 && (
              <div className="notices-pagination-container">
                <div className="notices-pagination-info">
                  Showing <strong>{(currentPage - 1) * itemsPerPage + 1}</strong>–<strong>{Math.min(currentPage * itemsPerPage, totalItems)}</strong> of <strong>{totalItems}</strong> notices
                </div>

                <div className="notices-pagination-controls">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="notices-page-arrow"
                    title="Previous Page"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div className="notices-page-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setCurrentPage(p)}
                        className={`notices-page-btn ${currentPage === p ? 'active' : ''}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="notices-page-arrow"
                    title="Next Page"
                    aria-label="Next Page"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
