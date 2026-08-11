'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { LayoutDashboard, Newspaper, Plus, User, FolderKanban } from 'lucide-react';
import Link from 'next/link';

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const isDashboardActive = pathname === '/admin';
  const isContentActive = pathname.startsWith('/admin/news-events') && pathname !== '/admin/news-events/create';
  const isCreateActive = pathname === '/admin/news-events/create';
  const isProfileActive = pathname.startsWith('/admin/profile');

  return (
    <div className="admin-root min-h-screen bg-[#f9f9ff] text-[#1a1c20]">
      {/* Sidebar Navigation */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
      />

      {/* Main Content Area */}
      <main
        className={`${
          isCollapsed ? 'lg:ml-16' : 'lg:ml-56'
        } flex flex-col min-h-screen relative transition-all duration-300 ease-in-out`}
      >
        <AdminHeader onToggleSidebar={() => setSidebarOpen(true)} />

        {/* Content Stage */}
        <div className="flex-1 bg-[#d9d9e0]/30 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 lg:pt-6 pb-24 sm:pb-28 lg:pb-6 overflow-x-hidden">
          {children}
        </div>

        {/* Mobile Bottom Navigation Bar / Toggle */}
        <footer className="lg:hidden w-full h-16 bg-white/95 backdrop-blur-md border-t border-slate-200/80 flex items-center justify-around px-3 fixed bottom-0 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
          <Link
            href="/admin"
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
              isDashboardActive
                ? 'active-tab text-[#09468e] bg-[#09468e]/10 font-bold'
                : 'text-[#1a1c20] hover:text-[#09468e] font-semibold'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Dashboard</span>
          </Link>

          <Link
            href="/admin/news-events"
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
              isContentActive
                ? 'active-tab text-[#09468e] bg-[#09468e]/10 font-bold'
                : 'text-[#1a1c20] hover:text-[#09468e] font-semibold'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Content</span>
          </Link>

          <div className="-mt-5">
            <Link
              href="/admin/news-events/create"
              aria-label="Create New"
              className={`w-11 h-11 rounded-full brand-gradient text-white flex items-center justify-center shadow-lg border-2 border-white transition-all transform active:scale-95 ${
                isCreateActive ? 'ring-2 ring-[#09468e] ring-offset-2' : ''
              }`}
            >
              <Plus className="w-5 h-5 text-white" />
            </Link>
          </div>

          <Link
            href="/admin/categories"
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
              pathname.startsWith('/admin/categories')
                ? 'active-tab text-[#09468e] bg-[#09468e]/10 font-bold'
                : 'text-[#1a1c20] hover:text-[#09468e] font-semibold'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Categories</span>
          </Link>

          <Link
            href="/admin/profile"
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
              isProfileActive
                ? 'active-tab text-[#09468e] bg-[#09468e]/10 font-bold'
                : 'text-[#1a1c20] hover:text-[#09468e] font-semibold'
            }`}
          >
            <User className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Profile</span>
          </Link>
        </footer>
      </main>
    </div>
  );
};

