'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Search, User, ChevronDown, LogOut, Settings } from 'lucide-react';
import { BackButton } from './BackButton';

import { GlobalSearchModal } from './GlobalSearchModal';

interface AdminHeaderProps {
  onToggleSidebar: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ onToggleSidebar }) => {
  const pathname = usePathname();
  const showGlobalBack = pathname !== '/admin';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const [adminUser, setAdminUser] = useState<{ name?: string; email?: string } | null>(null);

  useEffect(() => {
    const storedUserStr = localStorage.getItem('adminUser');
    if (storedUserStr) {
      try {
        setAdminUser(JSON.parse(storedUserStr));
      } catch (err) {
        console.warn('Failed to parse adminUser');
      }
    }
  }, []);

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('adminRefreshToken');
    if (refreshToken) {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refreshToken }),
        });
      } catch (err) {
        console.warn('Logout API error:', err);
      }
    }
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRefreshToken');
    localStorage.removeItem('adminUser');
    window.location.href = '/admin/login';
  };

  return (
    <header className="w-full h-14 flex items-center bg-white border-b border-[#737782]/15 sticky top-0 z-40 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      <div className="relative flex items-center px-4 lg:px-6 w-full max-w-[1200px] mx-auto">

        {/* Left: Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-1.5 text-[#434751] hover:bg-[#f3f3fa] rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Global Search Bar Trigger (absolutely centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block w-72">
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            className="w-full bg-[#f8fafc] hover:bg-slate-100 border border-[#09468e]/25 rounded-full pl-9 pr-3 py-1.5 text-xs text-[#737782] flex items-center justify-between transition-all outline-none cursor-pointer group shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-[#09468e] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-[11px]">Search Global Admin...</span>
            </div>
          </button>
        </div>

        {/* Right: Profile Dropdown & Mobile Search Button */}
        <div className="flex items-center gap-2 ml-auto relative" ref={dropdownRef}>
          {/* Mobile Search Button */}
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            className="sm:hidden p-1.5 text-[#434751] hover:bg-[#f3f3fa] rounded-md transition-colors"
            title="Global Search"
          >
            <Search className="w-4 h-4 text-[#09468e]" />
          </button>

          {/* Profile Button */}
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#f3f3fa] transition-colors group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full brand-gradient flex items-center justify-center text-white shadow-xs shrink-0">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#1a1c20] hidden md:block">
              {adminUser?.name || 'Administrator'}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#737782] hidden md:block transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#737782]/15 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="px-3.5 py-2 border-b border-[#737782]/10 mb-1">
                <p className="text-xs font-bold text-[#1a1c20]">{adminUser?.name || 'Administrator'}</p>
                <p className="text-[11px] text-[#737782]">{adminUser?.email || ''}</p>
              </div>
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  window.location.href = '/admin/profile';
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-[#1a1c20] hover:bg-[#f3f3fa] transition-colors cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5 text-[#09468e]" />
                <span>Profile </span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Global Search Modal / Command Palette */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </header>
  );
};

export default AdminHeader;
