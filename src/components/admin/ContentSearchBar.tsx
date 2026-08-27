'use client';

import React, { useState } from 'react';
import { Search, Plus, Filter, X, RotateCcw, Calendar } from 'lucide-react';
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

const TYPES = ['All', 'News', 'Event', 'Blog'];

const DEFAULT_STATUSES = ['All', 'Active', 'Inactive'];

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
  placeholder = 'Search by title or description...',
  inlineDates = false,
}) => {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [categoriesList, setCategoriesList] = useState<string[]>(['All']);

  const actualStatuses = statusOptions || DEFAULT_STATUSES;

  React.useEffect(() => {
    const url = selectedType !== 'All' ? `/api/categories?type=${encodeURIComponent(selectedType)}` : '/api/categories';
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

  const hasDropdownFilters = !!(onTypeChange || onCategoryChange || onStatusChange);

  // Count active filters
  const activeFiltersCount =
    (selectedType !== 'All' ? 1 : 0) +
    (selectedCategory !== 'All' ? 1 : 0) +
    (selectedStatus !== 'All' ? 1 : 0) +
    (startDate ? 1 : 0) +
    (endDate ? 1 : 0);

  return (
    <div className="space-y-3">
      {/* Top Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 flex-1 min-w-[260px]">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={placeholder}
              className="pl-9 pr-4 h-8.5 bg-white border border-slate-200 rounded-lg text-xs text-[#1a1c20] placeholder:text-slate-400 focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 w-full outline-none transition-all shadow-2xs"
            />
          </div>

          {/* Inline Start & End Date Inputs if inlineDates is true */}
          {inlineDates && onStartDateChange && (
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 h-8.5 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-[#ad2865] shrink-0" />
              <span className="text-[10px] font-bold text-[#434751] uppercase tracking-wider hidden sm:inline">From:</span>
              <input
                type="date"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
                className="bg-transparent text-xs font-medium text-[#1a1c20] outline-none cursor-pointer"
                title="From Date"
              />
            </div>
          )}

          {inlineDates && onEndDateChange && (
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 h-8.5 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
              <span className="text-[10px] font-bold text-[#434751] uppercase tracking-wider hidden sm:inline">To:</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => onEndDateChange(e.target.value)}
                className="bg-transparent text-xs font-medium text-[#1a1c20] outline-none cursor-pointer"
                title="To Date"
              />
            </div>
          )}

          {/* Filter Drawer Toggle Button (only when hasDropdownFilters or not inlineDates) */}
          {hasDropdownFilters && (
            <button
              type="button"
              onClick={() => setShowFilterDrawer((prev) => !prev)}
              className={`h-8.5 flex items-center gap-1.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer border shadow-2xs ${
                showFilterDrawer || activeFiltersCount > 0
                  ? 'bg-[#09468e] text-white border-[#09468e]'
                  : 'bg-white text-[#434751] border-slate-200 hover:border-[#09468e] hover:text-[#09468e]'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filter Options</span>
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#ad2865] text-white text-[10px] font-bold flex items-center justify-center ml-0.5">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          )}

          {/* Reset Filters Quick Button */}
          {activeFiltersCount > 0 && onResetFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="flex items-center gap-1 text-[11px] font-bold text-[#ad2865] hover:underline cursor-pointer px-2 py-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Create New Action Button */}
        {createHref && (
          <Button
            variant="gradient"
            size="sm"
            pill={false}
            href={createHref}
            icon={<Plus className="w-3.5 h-3.5" />}
            className="h-8.5 rounded-lg"
          >
            {createLabel}
          </Button>
        )}
      </div>

      {/* Expandable Filter Drawer Panel — Single 5-Column Row on Desktop */}
      {showFilterDrawer && (
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs animate-in fade-in duration-150 space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-[11px] font-extrabold text-[#09468e] uppercase tracking-wider flex items-center gap-1.5">
              <Filter className="w-3 h-3" /> Search &amp; Filter Options
            </span>
            <button
              type="button"
              onClick={() => setShowFilterDrawer(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-md"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* Type Filter */}
            {onTypeChange && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                  Post Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => onTypeChange(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-2.5 h-8 text-xs font-semibold text-[#1a1c20] focus:ring-1 focus:ring-[#09468e] outline-none cursor-pointer"
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t === 'All' ? 'All Types' : t}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Category Filter */}
            {onCategoryChange && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-2.5 h-8 text-xs font-semibold text-[#1a1c20] focus:ring-1 focus:ring-[#09468e] outline-none cursor-pointer"
                >
                  {categoriesList.map((c) => (
                    <option key={c} value={c}>
                      {c === 'All' ? 'All Categories' : c}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Status Filter */}
            {onStatusChange && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => onStatusChange(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-2.5 h-8 text-xs font-semibold text-[#1a1c20] focus:ring-1 focus:ring-[#09468e] outline-none cursor-pointer"
                >
                  {actualStatuses.map((s) => (
                    <option key={s} value={s}>
                      {s === 'All' ? 'All Status' : s}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Start Date */}
            {onStartDateChange && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5" /> From Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => onStartDateChange(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-2 h-8 text-xs font-semibold text-[#1a1c20] focus:ring-1 focus:ring-[#09468e] outline-none cursor-pointer"
                />
              </div>
            )}

            {/* End Date */}
            {onEndDateChange && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5" /> To Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => onEndDateChange(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-2 h-8 text-xs font-semibold text-[#1a1c20] focus:ring-1 focus:ring-[#09468e] outline-none cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentSearchBar;
