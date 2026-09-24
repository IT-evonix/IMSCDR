'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, RotateCcw } from 'lucide-react';

interface ContentSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType?: string;
  onTypeChange?: (type: string) => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  selectedStatus?: string;
  onStatusChange?: (status: string) => void;
  statusOptions?: string[];
  startDate?: string;
  onStartDateChange?: (date: string) => void;
  endDate?: string;
  onEndDateChange?: (date: string) => void;
  onResetFilters?: () => void;
  createHref?: string;
  createLabel?: string;
  placeholder?: string;
  inlineDates?: boolean;
}

const FALLBACK_TYPES = ['All', 'News', /* 'Event', */ 'Blog', 'Notice', 'Circular'];
const FALLBACK_STATUSES = ['All', 'Active', 'Inactive'];

export const ContentSearchBar: React.FC<ContentSearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedType = 'All',
  onTypeChange,
  selectedCategory = 'All',
  onCategoryChange,
  selectedStatus = 'All',
  onStatusChange,
  statusOptions,
  startDate = '',
  onStartDateChange,
  endDate = '',
  onEndDateChange,
  onResetFilters,
  createHref = '/admin/news-events/create',
  createLabel = '+ Add New Post',
  placeholder = 'Search by title...',
  inlineDates = false,
}) => {
  const [typesList, setTypesList] = useState<string[]>(FALLBACK_TYPES);
  const [statusesList, setStatusesList] = useState<string[]>(statusOptions || FALLBACK_STATUSES);
  const [categoriesList, setCategoriesList] = useState<string[]>(['All']);

  // Fetch dynamic filter metadata (types and statuses)
  React.useEffect(() => {
    fetch('/api/news-events/filters')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && data.data) {
          if (Array.isArray(data.data.types)) {
            const cleanTypes = data.data.types.filter((t: string) => t !== 'Event');
            setTypesList(Array.from(new Set(['All', ...cleanTypes])));
          }
          if (!statusOptions && Array.isArray(data.data.statuses)) {
            setStatusesList(Array.from(new Set(['All', ...data.data.statuses])));
          }
        }
      })
      .catch(() => {});
  }, [statusOptions]);

  // Fetch cascading categories when selectedType changes
  React.useEffect(() => {
    const url =
      selectedType !== 'All'
        ? `/api/categories?type=${encodeURIComponent(selectedType)}`
        : '/api/categories';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && Array.isArray(data.data)) {
          const names = ['All', ...data.data.map((c: any) => c.name)];
          setCategoriesList(Array.from(new Set(names)));
        }
      })
      .catch(() => {});
  }, [selectedType]);

  // Count active filters
  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    (selectedType !== 'All' ? 1 : 0) +
    (selectedCategory !== 'All' ? 1 : 0) +
    (selectedStatus !== 'All' ? 1 : 0) +
    (startDate ? 1 : 0) +
    (endDate ? 1 : 0);

  return (
    <div className="w-full">
      {/* Search & Filters Bar — Matches globals.css brand-border, low-profile and compact */}
      <div className="bg-white px-3 py-2 rounded-xl brand-border shadow-2xs flex flex-wrap items-center justify-between gap-2.5">
        {/* Search Field */}
        <div className="relative flex-1 min-w-[200px] max-w-sm flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={placeholder}
            className="filter-input filter-input-search w-full"
          />
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Post Type Dropdown */}
          {onTypeChange && (
            <select
              value={selectedType}
              onChange={(e) => onTypeChange(e.target.value)}
              className="filter-input cursor-pointer"
              title="Filter by post type"
            >
              {typesList.map((t) => (
                <option key={t} value={t}>
                  {t === 'All' ? 'All Types' : t}
                </option>
              ))}
            </select>
          )}

          {/* Category Dropdown */}
          {onCategoryChange && (
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="filter-input cursor-pointer max-w-[170px] truncate"
              title="Filter by category"
            >
              {categoriesList.map((c) => (
                <option key={c} value={c}>
                  {c === 'All' ? 'All Categories' : c}
                </option>
              ))}
            </select>
          )}

          {/* Status Dropdown */}
          {onStatusChange && (
            <select
              value={selectedStatus}
              onChange={(e) => onStatusChange(e.target.value)}
              className="filter-input cursor-pointer"
              title="Filter by status"
            >
              {statusesList.map((s) => (
                <option key={s} value={s}>
                  {s === 'All' ? 'All Status' : s}
                </option>
              ))}
            </select>
          )}

          {/* Date Pickers */}
          {(onStartDateChange || onEndDateChange) && (
            <div className="flex items-center gap-1.5">
              {onStartDateChange && (
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    const val = e.target.value;
                    onStartDateChange(val);
                    if (endDate && val && endDate < val && onEndDateChange) {
                      onEndDateChange('');
                    }
                  }}
                  className="filter-input cursor-pointer"
                  title="From date"
                />
              )}
              {onStartDateChange && onEndDateChange && (
                <span className="text-[14px] text-slate-400 font-medium">to</span>
              )}
              {onEndDateChange && (
                <input
                  type="date"
                  min={startDate || undefined}
                  value={endDate}
                  onChange={(e) => onEndDateChange(e.target.value)}
                  className="filter-input cursor-pointer"
                  title="To date"
                />
              )}
            </div>
          )}

          {/* Reset Filters Action */}
          {activeFiltersCount > 0 && onResetFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="flex items-center gap-1 text-[14px] font-bold text-[#ad2865] hover:underline cursor-pointer px-1.5 py-1"
              title="Reset all filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset ({activeFiltersCount})</span>
            </button>
          )}

          {/* Optional Action Button (e.g. Add Post) */}
          {createHref && (
            <Link href={createHref} className="explore_more_btn">
              <Plus className="w-3.5 h-3.5" />
              <span>{createLabel}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentSearchBar;
