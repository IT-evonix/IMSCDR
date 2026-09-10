'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Filter, RotateCcw, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

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

const FALLBACK_TYPES = ['All', 'News', 'Event', 'Blog', 'Notice', 'Circular'];
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
            setTypesList(Array.from(new Set(['All', ...data.data.types])));
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

  const hasAdvancedFilters = !!(
    onTypeChange ||
    onCategoryChange ||
    onStatusChange ||
    onStartDateChange ||
    onEndDateChange
  );

  return (
    <div className="w-full">
      {/* Search & Filters Card — Matches globals.css brand-border */}
      <div className="bg-white p-2.5 sm:p-3 rounded-xl brand-border shadow-2xs space-y-2">
        {/* Header Bar inside Filter Card */}
        <div className="flex items-center justify-between gap-2 border-b border-[#09468e]/15 pb-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-extrabold text-[#09468e] uppercase tracking-wider flex items-center gap-1 font-['Roma-Semibold']">
              <Filter className="w-3 h-3 text-[#09468e]" /> Search &amp; Filter Options
            </span>
            {activeFiltersCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-[#09468e]/10 text-[#09468e] text-[9px] font-bold">
                {activeFiltersCount} active
              </span>
            )}
            {activeFiltersCount > 0 && onResetFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="flex items-center gap-1 text-[10px] font-bold text-[#ad2865] hover:underline cursor-pointer px-1 py-0.5 ml-1"
                title="Reset all filters"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Create New Action Button */}
          {createHref && (
            <Link
              href={createHref}
              className="explore_more_btn !h-7 !px-3 !text-[11px] !font-bold"
            >
              <Plus className="w-3 h-3" />
              <span>{createLabel}</span>
            </Link>
          )}
        </div>

        {/* Filter & Search Inputs Grid — 1 Single Row on lg+ screens */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 ${
            hasAdvancedFilters && (onTypeChange || onCategoryChange)
              ? 'lg:grid-cols-6'
              : 'lg:grid-cols-3'
          } gap-2 items-end`}
        >
          {/* 1. Search Bar */}
          <div className="space-y-0.5">
            <label className="text-[9px] font-bold text-[#434751] uppercase tracking-wider flex items-center gap-1 font-['Roma-Semibold']">
              <Search className="w-2.5 h-2.5 text-[#09468e]" /> Search
            </label>
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={placeholder}
                className="filter-input filter-input-search w-full outline-none hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 transition-all"
              />
            </div>
          </div>

          {/* 2. Type Filter */}
          {onTypeChange && (
            <div className="space-y-0.5">
              <label className="text-[9px] font-bold text-[#434751] uppercase tracking-wider font-['Roma-Semibold']">
                Post Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="filter-input w-full cursor-pointer outline-none hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 transition-all"
              >
                {typesList.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All Types' : t}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* 3. Category Filter */}
          {onCategoryChange && (
            <div className="space-y-0.5">
              <label className="text-[9px] font-bold text-[#434751] uppercase tracking-wider font-['Roma-Semibold'] truncate block">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="filter-input w-full cursor-pointer outline-none hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 transition-all"
              >
                {categoriesList.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Categories' : c}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* 4. Status Filter */}
          {onStatusChange && (
            <div className="space-y-0.5">
              <label className="text-[9px] font-bold text-[#434751] uppercase tracking-wider font-['Roma-Semibold']">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => onStatusChange(e.target.value)}
                className="filter-input w-full cursor-pointer outline-none hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 transition-all"
              >
                {statusesList.map((s) => (
                  <option key={s} value={s}>
                    {s === 'All' ? 'All Status' : s}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* 5. Start Date */}
          {onStartDateChange && (
            <div className="space-y-0.5">
              <label className="text-[9px] font-bold text-[#434751] uppercase tracking-wider flex items-center gap-1 font-['Roma-Semibold']">
                <Calendar className="w-2.5 h-2.5 text-[#ad2865]" /> From Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
                className="filter-input w-full cursor-pointer outline-none hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 transition-all"
              />
            </div>
          )}

          {/* 6. End Date */}
          {onEndDateChange && (
            <div className="space-y-0.5">
              <label className="text-[9px] font-bold text-[#434751] uppercase tracking-wider flex items-center gap-1 font-['Roma-Semibold']">
                <Calendar className="w-2.5 h-2.5 text-[#09468e]" /> To Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => onEndDateChange(e.target.value)}
                className="filter-input w-full cursor-pointer outline-none hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 transition-all"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentSearchBar;
