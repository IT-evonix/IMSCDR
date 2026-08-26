'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  Newspaper,
  FolderKanban,
  LayoutDashboard,
  Plus,
  User,
  ArrowRight,
  FileText,
  Calendar,
} from 'lucide-react';
import { authenticatedFetch } from '@/lib/auth';

interface SearchResultItem {
  id: string | number;
  title: string;
  subtitle?: string;
  type: 'content' | 'category' | 'nav';
  badge?: string;
  url: string;
  date?: string;
}

const DEFAULT_NAV_ITEMS: SearchResultItem[] = [
  {
    id: 'nav-dashboard',
    title: 'Dashboard Overview',
    subtitle: 'Admin stats & quick management',
    type: 'nav',
    badge: 'Page',
    url: '/admin',
  },
  {
    id: 'nav-content',
    title: 'News & Events Library',
    subtitle: 'Manage all published news, events & blogs',
    type: 'nav',
    badge: 'Page',
    url: '/admin/news-events',
  },
  {
    id: 'nav-create',
    title: 'Create New Content',
    subtitle: 'Publish new article, event, or upload PDF',
    type: 'nav',
    badge: 'Action',
    url: '/admin/news-events/create',
  },
  {
    id: 'nav-categories',
    title: 'Category Taxonomy',
    subtitle: 'Manage categories & target types',
    type: 'nav',
    badge: 'Page',
    url: '/admin/categories',
  },
  {
    id: 'nav-profile',
    title: 'Admin Profile & Security',
    subtitle: 'Update account password & settings',
    type: 'nav',
    badge: 'Settings',
    url: '/admin/profile',
  },
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [contentResults, setContentResults] = useState<SearchResultItem[]>([]);
  const [categoryResults, setCategoryResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setContentResults([]);
      setCategoryResults([]);
    }
  }, [isOpen]);

  // Handle ESC key & Ctrl+K shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Dynamic API Search Fetching
  useEffect(() => {
    if (!query.trim()) {
      setContentResults([]);
      setCategoryResults([]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const searchTrimmed = query.trim();

        // Fetch Content & Categories in parallel
        const [newsRes, catRes] = await Promise.all([
          authenticatedFetch(`/api/news-events?search=${encodeURIComponent(searchTrimmed)}&limit=6`),
          authenticatedFetch(`/api/categories?search=${encodeURIComponent(searchTrimmed)}`),
        ]);

        const newsData = await newsRes.json();
        const catData = await catRes.json();

        if (newsRes.ok && newsData.status === 'success' && Array.isArray(newsData.data)) {
          const mappedContent: SearchResultItem[] = newsData.data.map((item: any) => ({
            id: `content-${item.id}`,
            title: item.title,
            subtitle: item.summary || item.category || 'Content Item',
            type: 'content',
            badge: item.contentType?.toUpperCase() || 'NEWS',
            url: `/admin/news-events`,
            date: item.startDate
              ? new Date(item.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
              : new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          }));
          setContentResults(mappedContent);
        }

        if (catRes.ok && catData.status === 'success' && Array.isArray(catData.data)) {
          const mappedCat: SearchResultItem[] = catData.data.map((cat: any) => ({
            id: `cat-${cat.id}`,
            title: cat.name,
            subtitle: `Target Type: ${cat.type || 'NewsEvent'} (${cat.itemCount || 0} posts)`,
            type: 'category',
            badge: cat.type || 'CATEGORY',
            url: `/admin/categories`,
          }));
          setCategoryResults(mappedCat);
        }
      } catch (err) {
        console.warn('Global search error:', err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Navigation Items matching query
  const filteredNavItems = DEFAULT_NAV_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelectResult = (item: SearchResultItem) => {
    onClose();
    router.push(item.url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-150">
      {/* Search Modal Box */}
      <div className="bg-white w-full max-w-xl rounded-2xl brand-border shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-3.5 border-b border-slate-100 flex items-center gap-3 bg-[#f8fafc]">
          <Search className="w-4 h-4 text-[#09468e] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news, events, categories, pages..."
            className="w-full bg-transparent text-xs font-semibold text-[#1a1c20] placeholder:text-slate-400 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-md text-xs font-bold mr-1"
              title="Clear text"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-[#09468e] hover:bg-slate-200/60 rounded-md transition-colors cursor-pointer shrink-0"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List Area */}
        <div className="p-2 overflow-y-auto flex-1 divide-y divide-slate-100">
          {loading ? (
            <div className="py-8 text-center text-xs font-semibold text-slate-500 flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-[#09468e] border-t-transparent rounded-full animate-spin" />
              <span>Searching database...</span>
            </div>
          ) : (
            <>
              {/* Content Items Match */}
              {contentResults.length > 0 && (
                <div className="py-2 space-y-1">
                  <div className="px-3 text-[10px] font-extrabold text-[#09468e] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Newspaper className="w-3 h-3" /> Content Items ({contentResults.length})
                  </div>
                  {contentResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectResult(item)}
                      className="px-3 py-2 rounded-xl hover:bg-[#09468e]/5 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div className="space-y-0.5 min-w-0 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#1a1c20] group-hover:text-[#09468e] truncate">
                            {item.title}
                          </span>
                          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#09468e]/10 text-[#09468e] uppercase shrink-0">
                            {item.badge}
                          </span>
                        </div>
                        {item.subtitle && (
                          <p className="text-[11px] text-slate-500 truncate">{item.subtitle}</p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {item.date && (
                          <span className="text-[10px] text-slate-400 font-semibold hidden xs:flex items-center gap-1">
                            <Calendar className="w-2.5 h-2.5" />
                            {item.date}
                          </span>
                        )}
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#09468e] transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Categories Match */}
              {categoryResults.length > 0 && (
                <div className="py-2 space-y-1">
                  <div className="px-3 text-[10px] font-extrabold text-[#89004a] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <FolderKanban className="w-3 h-3" /> Categories ({categoryResults.length})
                  </div>
                  {categoryResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectResult(item)}
                      className="px-3 py-2 rounded-xl hover:bg-[#89004a]/5 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-[#1a1c20] group-hover:text-[#89004a]">
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <p className="text-[11px] text-slate-500">{item.subtitle}</p>
                        )}
                      </div>
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#89004a]/10 text-[#89004a] uppercase shrink-0">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Pages Navigation */}
              {filteredNavItems.length > 0 && (
                <div className="py-2 space-y-1">
                  <div className="px-3 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <LayoutDashboard className="w-3 h-3" /> Admin Navigation Pages
                  </div>
                  {filteredNavItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectResult(item)}
                      className="px-3 py-2 rounded-xl hover:bg-slate-100 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#1a1c20] group-hover:text-[#09468e]">
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <p className="text-[11px] text-slate-500">{item.subtitle}</p>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#09468e]">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Empty Results State */}
              {query.trim() &&
                contentResults.length === 0 &&
                categoryResults.length === 0 &&
                filteredNavItems.length === 0 && (
                  <div className="py-10 text-center text-slate-400 space-y-1">
                    <FileText className="w-8 h-8 mx-auto opacity-30" />
                    <p className="text-xs font-bold text-slate-600">No matching database items found</p>
                    <p className="text-[11px]">Try searching with a different keyword or category name.</p>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalSearchModal;
