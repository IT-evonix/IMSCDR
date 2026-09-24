'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, User, ChevronDown, LogOut, Settings, ArrowLeft } from 'lucide-react';
import { GlobalSearchModal } from './GlobalSearchModal';

interface AdminHeaderProps {
  onToggleSidebar: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ onToggleSidebar }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const topLevelRoutes = [
    '/admin',
    '/admin/categories',
    '/admin/news-events',
    '/admin/contact-messages',
    '/admin/enquiries',
    '/admin/grievances',
  ];
  const isSubPage = !topLevelRoutes.includes(pathname);

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
    <header className="w-full h-14 flex items-center bg-[#f0f5fc] border-b border-[#dbe8f6] sticky top-0 z-40 shadow-[0_1px_3px_rgba(9,70,142,0.05)] transition-colors">
      <div className="flex items-center justify-between px-4 lg:px-6 w-full">
        {/* Left: Mobile Toggle, Subpage Back Arrow & Mobile Brand Logo */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-1.5 text-[#09468e] hover:bg-[#09468e]/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {isSubPage && (
            <button
              type="button"
              onClick={() => router.back()}
              className="p-1.5 text-[#09468e] hover:text-[#ad2865] hover:bg-[#09468e]/10 rounded-lg transition-all cursor-pointer flex items-center justify-center outline-none"
              title="Go back"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 transition-transform hover:-translate-x-0.5" />
            </button>
          )}

          {/* Mobile & Tablet Brand Logo */}
          <Link href="/admin" className="flex items-center lg:hidden ml-1 transition-transform hover:scale-102">
            <Image
              src="/images/home/black_logo.webp"
              alt="IMSCDR Logo"
              width={140}
              height={36}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right: Profile Dropdown (Soft brand-tinted styling) */}
        <div className="flex items-center gap-3 relative ml-auto" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg hover:bg-white/70 text-[#0f172a] hover:text-[#09468e] transition-all cursor-pointer group outline-none"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div className="w-7 h-7 rounded-full bg-white border border-[#dbe8f6] text-[#09468e] flex items-center justify-center font-bold shadow-2xs shrink-0">
              <User className="w-3.5 h-3.5 text-[#09468e]" />
            </div>
            <span className="text-[14px] font-bold text-[#0f172a] group-hover:text-[#09468e] transition-colors font-['Roma-Semibold'] hidden sm:block">
              {adminUser?.name || 'System Administrator'}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#64748b] group-hover:text-[#09468e] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''
                }`}
            />
          </button>

          {/* Profile Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="px-4 py-2.5 border-b border-slate-100 mb-1">
                <p className="text-[14px] font-bold text-[#0f172a] font-['Roma-Semibold']">
                  {adminUser?.name || 'Administrator'}
                </p>
                <p className="text-[13px] text-slate-500 truncate">
                  {adminUser?.email || ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setDropdownOpen(false);
                  window.location.href = '/admin/profile';
                }}
                className="w-full flex items-center gap-2.5 px-4 py-2 text-[14px] font-medium text-slate-700 hover:bg-[#eff6ff] hover:text-[#09468e] transition-colors cursor-pointer text-left"
              >
                <Settings className="w-4 h-4 text-[#09468e]" />
                <span>Profile Settings</span>
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-4 py-2 text-[14px] font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer text-left"
              >
                <LogOut className="w-4 h-4 text-red-600" />
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
