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
    <div className="px-3 sm:px-5 py-2.5 sm:py-3 bg-[#f9f9ff] flex flex-wrap items-center justify-between gap-2 border-t border-[#737782]/15 rounded-b-xl">
      {/* Left Side: Items per page & Range Info */}
      <div className="flex items-center gap-2.5 text-[11px] sm:text-xs">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[#434751]">Per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="bg-white border border-[#ad2865]/30 rounded-md px-2 py-0.5 font-bold text-[#1a1c20] focus:ring-1 focus:ring-[#ad2865]/30 outline-none cursor-pointer text-[11px] sm:text-xs"
          >
            <option value={7}>7</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
        <span className="font-semibold text-[#737782]">
          <strong className="text-[#ad2865]">{totalItems > 0 ? startItem : 0}-{endItem}</strong> of <strong className="text-[#ad2865]">{totalItems}</strong>
        </span>
      </div>

      {/* Right Side: Page Navigation Buttons */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 text-[#ad2865] hover:bg-[#ffd9e3]/50 disabled:opacity-30 rounded-md transition-colors cursor-pointer"
          title="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md font-bold text-[11px] sm:text-xs transition-all cursor-pointer ${
              currentPage === page
                ? 'bg-[#ad2865] text-white shadow-xs scale-105'
                : 'hover:bg-[#ffd9e3]/50 text-[#434751] hover:text-[#ad2865]'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="p-1 text-[#ad2865] hover:bg-[#ffd9e3]/50 disabled:opacity-30 rounded-md transition-colors cursor-pointer"
          title="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ContentPagination;
