'use client';

import React, { useState } from 'react';
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

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: 'auto', minWidth: 'auto', height: '19px', minHeight: '19px', maxHeight: '19px' }}
        className={`status-trigger-btn inline-flex items-center gap-1 px-2 py-0 rounded-full text-[9px] font-extrabold outline-none cursor-pointer transition-all border shadow-2xs font-['Roma-Semibold'] leading-none ${
          status === 'Active'
            ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
            : 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
        }`}
      >
        <span className="leading-none">{status}</span>
        <ChevronDown className="w-2.5 h-2.5 shrink-0" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
          <div className="status-dropdown-menu absolute right-0 sm:left-1/2 sm:-translate-x-1/2 mt-1.5 w-28 bg-white rounded-xl border border-slate-200 shadow-xl z-40 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100 flex flex-col font-['Avenir-Next-Demi']">
            <button
              type="button"
              onClick={() => {
                onStatusChange && onStatusChange('Active');
                setIsOpen(false);
              }}
              style={{ width: '100%', height: 'auto', minHeight: 'auto', borderRadius: '0px' }}
              className={`w-full text-left px-3 py-1.5 text-xs font-bold flex items-center justify-between hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-['Avenir-Next-Demi'] ${
                status === 'Active' ? 'text-emerald-700 bg-emerald-50/60' : 'text-slate-700'
              }`}
            >
              <span>Active</span>
              {status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />}
            </button>

            <button
              type="button"
              onClick={() => {
                onStatusChange && onStatusChange('Inactive');
                setIsOpen(false);
              }}
              style={{ width: '100%', height: 'auto', minHeight: 'auto', borderRadius: '0px' }}
              className={`w-full text-left px-3 py-1.5 text-xs font-bold flex items-center justify-between hover:bg-rose-50 hover:text-rose-700 transition-colors ${
                status === 'Inactive' ? 'text-rose-700 bg-rose-50/60' : 'text-slate-700'
              }`}
            >
              <span>Inactive</span>
              {status === 'Inactive' && <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export const ContentTable: React.FC<ContentTableProps> = ({
  items,
  onView,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(items.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string | number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
    <div className="w-full flex-1 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[720px]">
        {/* ── Table Head (Matches notices-circular.css style) ── */}
        <thead className="admin-table-header">
          <tr>
            <th className="py-2.5 px-3 w-8 text-center">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={items.length > 0 && selectedIds.length === items.length}
                className="rounded border-white/40 text-[#09468e] focus:ring-white cursor-pointer w-3.5 h-3.5 accent-[#09468e]"
              />
            </th>
            <th className="py-2.5 px-3">Title</th>
            <th className="py-2.5 px-3">Type</th>
            <th className="py-2.5 px-3 hidden sm:table-cell">Category</th>
            <th className="py-2.5 px-3 text-center">Status</th>
            <th className="py-2.5 px-3">Date</th>
            <th className="py-2.5 px-3 text-center w-36">Actions</th>
          </tr>
        </thead>

        {/* ── Table Body ── */}
        <tbody className="divide-y divide-[#000000]/10 text-[11px] text-[#000000]">
          {items.length === 0 ? (
            <tr>
              <td colSpan={7} className="py-14 text-center text-[#000000]">
                <Inbox className="w-7 h-7 mx-auto mb-1.5 text-[#000000]/40" />
                <p className="font-semibold text-[11px]">No content items found</p>
              </td>
            </tr>
          ) : (
            items.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              return (
                <tr
                  key={item.id}
                  className={`group transition-colors hover:bg-[#09468e]/[0.03] ${
                    isSelected ? 'bg-[#09468e]/5' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <td className="py-2 px-3 text-center align-middle">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectOne(item.id)}
                      className="rounded border-[#000000]/40 text-[#09468e] focus:ring-[#09468e] cursor-pointer w-3.5 h-3.5"
                    />
                  </td>

                  {/* Thumbnail + Title */}
                  <td className="py-2 px-3 align-middle">
                    <div className="flex items-center gap-2.5">
                      {/* Compact 8×8 thumbnail */}
                      <div className="w-8 h-8 rounded-md overflow-hidden border border-[#000000]/15 bg-[#f0f4f8] shrink-0 flex items-center justify-center p-0.5">
                        <img
                          src={item.thumbnailUrl || '/images/home/black_logo.webp'}
                          alt={item.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/home/black_logo.webp';
                          }}
                        />
                      </div>
                      {/* Text block */}
                      <div className="min-w-0 flex-1">
                        <div
                          className="font-semibold text-[#000000] hover:text-[#09468e] transition-colors cursor-pointer line-clamp-1 leading-tight text-[11px]"
                          onClick={() => onEdit && onEdit(item)}
                        >
                          {item.title}
                        </div>
                        <div className="text-[10px] text-[#9ba3af] truncate max-w-[220px] mt-0.5">
                          {item.slug}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Type Badge */}
                  <td className="py-2 px-3 align-middle">
                    {item.type ? (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest uppercase ${getTypeBadgeClass(
                          item.type
                        )}`}
                      >
                        {item.type.toUpperCase()}
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-[#000000]">—</span>
                    )}
                  </td>

                  {/* Category */}
                  <td className="py-2 px-3 hidden sm:table-cell text-[11px] font-medium text-[#434751] max-w-[130px] truncate align-middle">
                    {item.category}
                  </td>

                  {/* Status Custom Dropdown Badge */}
                  <td className="py-2 px-3 text-center align-middle">
                    <StatusDropdownCell
                      status={item.status}
                      onStatusChange={(newStatus) =>
                        onStatusChange && onStatusChange(item.id, newStatus)
                      }
                    />
                  </td>

                  {/* Date */}
                  <td className="py-2 px-3 text-[10px] font-semibold text-slate-600 whitespace-nowrap align-middle">
                    {item.dateCreated || 'N/A'}
                  </td>

                  {/* Actions Column: Sleek, compact icon buttons only (no text) */}
                  <td className="py-2 px-3 text-center whitespace-nowrap align-middle">
                    <div className="flex justify-center items-center gap-1">
                      {item.contentFormat === 'pdf' ? (
                        <button
                          type="button"
                          onClick={() => onView && onView(item)}
                          className="table-action-btn table-btn-pdf"
                          title="View Official PDF"
                        >
                          <FileText className="w-3 h-3" />
                        </button>
                      ) : item.contentFormat === 'link' ? (
                        <button
                          type="button"
                          onClick={() => onView && onView(item)}
                          className="table-action-btn table-btn-link"
                          title="Open External Link"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onView && onView(item)}
                          className="table-action-btn table-btn-view"
                          title="Preview Content"
                        >
                          <Eye className="w-3 h-3" />
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => onEdit && onEdit(item)}
                        className="table-action-btn table-btn-edit"
                        title="Edit Content"
                      >
                        <Edit3 className="w-3 h-3" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete && onDelete(item)}
                        className="table-action-btn table-btn-delete"
                        title="Delete Content"
                      >
                        <Trash2 className="w-3 h-3" />
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
