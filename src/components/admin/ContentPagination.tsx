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
  entityName?: string;
}

export const ContentPagination: React.FC<ContentPaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
  entityName = 'records',
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate compact sliding window of page numbers with ellipsis
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
    return pages;
  };

  return (
    <div className="admin-pagination-container rounded-b-xl">
      {/* Left Side: Items per page & Range Info */}
      <div className="flex items-center gap-2.5 text-[14px] text-[#000000]">
        <div className="flex items-center gap-1.5">
          <span className="font-normal text-[#000000] capitalize">Per Page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="bg-white border border-slate-300 rounded-md px-2 py-0.5 font-normal text-[#000000] hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 outline-none cursor-pointer text-[14px] transition-colors"
          >
            <option value={7}>7</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
        <span className="font-normal text-[#000000] capitalize">
          Showing <span>{totalItems > 0 ? startItem : 0}–{endItem}</span> of <span>{totalItems}</span> <span className="capitalize">{entityName}</span>
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

        {getPageNumbers().map((page, idx) =>
          typeof page === 'number' ? (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`admin-page-number ${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </button>
          ) : (
            <span
              key={`ellipsis-${idx}`}
              className="px-1.5 text-[#000000]/40 font-normal select-none text-[14px]"
            >
              ...
            </span>
          )
        )}

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
