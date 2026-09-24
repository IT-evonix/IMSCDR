'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Eye, Edit3, Trash2, Inbox, ChevronDown, FileText, ExternalLink } from 'lucide-react';

export interface ContentItem {
  id: string | number;
  title: string;
  slug: string;
  rawSlug?: string;
  type: 'EVENT' | 'NEWS' | 'BLOG' | string;
  category: string;
  status: 'Active' | 'Inactive' | string;
  dateCreated: string;
  thumbnailUrl?: string;
  contentFormat?: string;
  pdfUrl?: string;
  externalUrl?: string;
}

interface ContentTableProps {
  items: ContentItem[];
  startIndex?: number;
  onView?: (item: ContentItem) => void;
  onEdit?: (item: ContentItem) => void;
  onDelete?: (item: ContentItem) => void;
  onStatusChange?: (id: string | number, newStatus: string) => void;
}

const StatusDropdownCell: React.FC<{
  status: string;
  onStatusChange?: (newStatus: string) => void;
}> = ({ status, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; openUp: boolean }>({
    top: 0,
    left: 0,
    openUp: false,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const openUp = spaceBelow < 125;
      setCoords({
        top: openUp ? rect.top - 6 : rect.bottom + 6,
        left: rect.left + rect.width / 2,
        openUp,
      });
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleDismiss = () => setIsOpen(false);
    window.addEventListener('scroll', handleDismiss, true);
    window.addEventListener('resize', handleDismiss);
    return () => {
      window.removeEventListener('scroll', handleDismiss, true);
      window.removeEventListener('resize', handleDismiss);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleDropdown}
        className={`status-trigger-btn inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[12px] font-semibold outline-none cursor-pointer border shadow-2xs font-['Roma-Semibold'] leading-none ${status === 'Active'
            ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
            : 'bg-rose-50 text-rose-700 border-rose-300'
          }`}
      >
        <span className="leading-none">{status}</span>
        <ChevronDown className="w-3 h-3 shrink-0" />
      </button>

      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <>
            <div className="fixed inset-0 z-[9998]" onClick={() => setIsOpen(false)} />
            <div
              className="status-dropdown-menu fixed w-32 bg-white rounded-xl border border-slate-200 shadow-2xl z-[9999] overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100 flex flex-col font-['Avenir-Next-Demi']"
              style={{
                top: `${coords.top}px`,
                left: `${coords.left}px`,
                transform: coords.openUp ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
              }}
            >
              <button
                type="button"
                onClick={() => {
                  onStatusChange && onStatusChange('Active');
                  setIsOpen(false);
                }}
                style={{ width: '100%', height: 'auto', minHeight: 'auto', borderRadius: '0px' }}
                className={`w-full text-left px-3 py-2 text-[14px] font-bold flex items-center justify-between hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-['Avenir-Next-Demi'] ${status === 'Active' ? 'text-emerald-700 bg-emerald-50/60' : 'text-slate-700'
                  }`}
              >
                <span>Active</span>
                {status === 'Active' && <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  onStatusChange && onStatusChange('Inactive');
                  setIsOpen(false);
                }}
                style={{ width: '100%', height: 'auto', minHeight: 'auto', borderRadius: '0px' }}
                className={`w-full text-left px-3 py-2 text-[14px] font-bold flex items-center justify-between hover:bg-rose-50 hover:text-rose-700 transition-colors ${status === 'Inactive' ? 'text-rose-700 bg-rose-50/60' : 'text-slate-700'
                  }`}
              >
                <span>Inactive</span>
                {status === 'Inactive' && <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />}
              </button>
            </div>
          </>,
          document.body
        )}
    </div>
  );
};

export const ContentTable: React.FC<ContentTableProps> = ({
  items,
  startIndex = 0,
  onView,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const getTypeBadgeClass = (type: string) => {
    switch (type.toUpperCase()) {
      case 'EVENT':
        return 'bg-[#09468e]/10 text-[#09468e] border border-[#09468e]/20';
      case 'NEWS':
        return 'bg-[#89004a]/10 text-[#89004a] border border-[#89004a]/20';
      case 'BLOG':
        return 'bg-[#d19547]/15 text-[#b0782e] border border-[#d19547]/30';
      case 'NOTICE':
        return 'bg-[#09468e]/15 text-[#09468e] border border-[#09468e]/25';
      case 'CIRCULAR':
        return 'bg-[#89004a]/15 text-[#89004a] border border-[#89004a]/25';
      default:
        return 'bg-[#000000]/10 text-[#000000] border border-[#000000]/20';
    }
  };

  return (
    <div className="w-full flex-1 overflow-x-auto table-responsive admin-table-responsive">
      <table className="table governing-table w-full text-left min-w-[720px] mb-0">
        {/* ── Table Head (Matches website governing-table style) ── */}
        <thead className="admin-table-header">
          <tr>
            <th className="py-2.5 px-3 w-14 text-center col-sr">Sr. No.</th>
            <th className="py-2.5 px-3 min-w-[200px] max-w-[280px]">Title</th>
            <th className="py-2.5 px-3 whitespace-nowrap">Type</th>
            <th className="py-2.5 px-3 hidden sm:table-cell whitespace-nowrap">Category</th>
            <th className="py-2.5 px-3 text-center whitespace-nowrap">Status</th>
            <th className="py-2.5 px-3 whitespace-nowrap min-w-[120px]">Date</th>
            <th className="py-2.5 px-3 text-center w-32 whitespace-nowrap">Action</th>
          </tr>
        </thead>

        {/* ── Table Body (Matches website governing-table tbody: 15px, #000, 400) ── */}
        <tbody className="text-[15px] text-[#000000]">
          {items.length === 0 ? (
            <tr>
              <td colSpan={7} className="py-14 text-center text-[#000000]">
                <Inbox className="w-7 h-7 mx-auto mb-1.5 text-[#000000]/40" />
                <p className="font-semibold text-[15px]">No content items found</p>
              </td>
            </tr>
          ) : (
            items.map((item, index) => {
              return (
                <tr key={item.id}>
                  {/* Sr. No. Column */}
                  <td className="py-2 px-3 text-center align-middle col-sr">
                    <span className="sr-badge">{startIndex + index + 1}</span>
                  </td>

                  {/* Thumbnail + Truncated Title & Slug */}
                  <td className="py-2.5 px-3 align-middle min-w-[200px] max-w-[280px]">
                    <div className="flex items-center gap-2.5">
                      {/* Compact thumbnail */}
                      <div className="w-9 h-9 rounded-md overflow-hidden border border-[#000000]/15 bg-[#f0f4f8] shrink-0 flex items-center justify-center p-0.5">
                        <img
                          src={item.thumbnailUrl || '/images/home/black_logo.webp'}
                          alt={item.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/home/black_logo.webp';
                          }}
                        />
                      </div>
                      {/* Text block with truncation */}
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div
                          className="font-normal text-[#000000] cursor-pointer truncate leading-tight text-[15px] capitalize"
                          onClick={() => onEdit && onEdit(item)}
                          title={item.title}
                        >
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Type Badge */}
                  <td className="py-2.5 px-3 align-middle whitespace-nowrap">
                    {item.type ? (
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[14px] font-medium tracking-wide capitalize ${getTypeBadgeClass(
                          item.type
                        )}`}
                      >
                        {item.type}
                      </span>
                    ) : (
                      <span className="text-[15px] font-normal text-[#000000]">None</span>
                    )}
                  </td>

                  {/* Category */}
                  <td
                    className="py-2.5 px-3 hidden sm:table-cell text-[15px] font-normal text-[#000000] max-w-[130px] truncate align-middle whitespace-nowrap capitalize"
                    title={item.category}
                  >
                    {item.category && item.category !== '—' ? item.category : 'None'}
                  </td>

                  {/* Status Custom Dropdown Badge */}
                  <td className="py-2.5 px-3 text-center align-middle whitespace-nowrap">
                    <StatusDropdownCell
                      status={item.status}
                      onStatusChange={(newStatus) =>
                        onStatusChange && onStatusChange(item.id, newStatus)
                      }
                    />
                  </td>

                  {/* Complete Single-Row Date */}
                  <td className="py-2.5 px-3 text-[15px] font-normal text-[#000000] whitespace-nowrap align-middle min-w-[120px]">
                    {item.dateCreated && item.dateCreated !== '—' ? item.dateCreated : 'None'}
                  </td>

                  {/* Actions Column */}
                  <td className="py-2 px-3 text-center whitespace-nowrap align-middle w-32">
                    <div className="flex justify-center items-center gap-1.5">
                      {item.contentFormat === 'pdf' ? (
                        <button
                          type="button"
                          onClick={() => onView && onView(item)}
                          className="table-action-btn table-btn-pdf"
                          title="View Official PDF"
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </button>
                      ) : item.contentFormat === 'link' ? (
                        <button
                          type="button"
                          onClick={() => onView && onView(item)}
                          className="table-action-btn table-btn-link"
                          title="Open External Link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onView && onView(item)}
                          className="table-action-btn table-btn-view"
                          title="Preview Content"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => onEdit && onEdit(item)}
                        className="table-action-btn table-btn-edit"
                        title="Edit Content"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete && onDelete(item)}
                        className="table-action-btn table-btn-delete"
                        title="Delete Content"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
