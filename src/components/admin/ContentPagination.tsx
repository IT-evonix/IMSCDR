'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentPaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

export const ContentPagination: React.FC<ContentPaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="admin-pagination-container rounded-b-xl">
      {/* Left Side: Items per page & Range Info */}
      <div className="flex items-center gap-2.5 text-[11px] sm:text-xs">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[#434751]">Per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="bg-white border border-slate-300 rounded-md px-2 py-0.5 font-bold text-[#1a1c20] hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 outline-none cursor-pointer text-[11px] sm:text-xs transition-colors"
          >
            <option value={7}>7</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
        <span className="font-semibold text-[#64748b]">
          Showing <strong className="text-[#09468e]">{totalItems > 0 ? startItem : 0}–{endItem}</strong> of <strong className="text-[#09468e]">{totalItems}</strong> posts
        </span>
      </div>

      {/* Right Side: Page Navigation Buttons */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="admin-pagination-arrow"
          title="Previous Page"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`admin-page-number ${currentPage === page ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="admin-pagination-arrow"
          title="Next Page"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ContentPagination;
