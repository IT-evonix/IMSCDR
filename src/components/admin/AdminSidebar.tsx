'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Newspaper, FolderKanban, X, LogOut, ChevronLeft, ChevronRight, Mail } from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export interface SidebarNavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { id: 'categories', label: 'Categories', href: '/admin/categories', icon: FolderKanban },
  { id: 'news-events', label: 'News & Events', href: '/admin/news-events', icon: Newspaper },
  { id: 'contact-messages', label: 'Contact Messages', href: '/admin/contact-messages', icon: Mail },
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  isOpen,
  onClose,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`h-screen flex flex-col fixed left-0 top-0 bg-white border-r border-[#737782]/20 z-50 transition-all duration-300 ease-in-out shadow-2xs ${isCollapsed ? 'w-16' : 'w-56'
          } ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex flex-col h-full py-3.5 px-3">
          {/* Header / Logo Area */}
          <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#737782]/15 px-0.5">
            <Link
              href="/admin"
              className={`flex items-center gap-2 group overflow-hidden ${isCollapsed ? 'justify-center w-full' : ''
                }`}
            >
              <img
                src="/images/home/black_logo.webp"
                alt="IMSCDR Logo"
                className={`${isCollapsed ? 'h-6' : 'h-7'} w-auto object-contain transition-transform group-hover:scale-105`}
              />
            </Link>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="lg:hidden p-1 text-[#1a1c20] hover:bg-[#f3f3fa] rounded-md transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Desktop Collapse / Expand Toggle Button */}
            {onToggleCollapse && (
              <button
                onClick={onToggleCollapse}
                className="hidden lg:flex items-center justify-center w-6 h-6 text-[#1a1c20] bg-[#f3f3fa] hover:bg-[#1a1c20] hover:text-white rounded-full transition-all duration-200 cursor-pointer shadow-2xs border border-[#737782]/20 shrink-0"
                title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
              >
                {isCollapsed ? (
                  <ChevronRight className="w-3.5 h-3.5" />
                ) : (
                  <ChevronLeft className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>

          {/* Navigation Category Label */}
          {!isCollapsed && (
            <div className="px-2 mb-2 text-[10px] font-extrabold uppercase tracking-wider text-[#737782]">
              Menu
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1">
            {SIDEBAR_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== '/admin' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  title={isCollapsed ? item.label : undefined}
                  style={!isActive ? { color: '#1a1c20' } : undefined}
                  className={`flex items-center ${isCollapsed ? 'justify-center px-0 py-2' : 'gap-2.5 px-3 py-2'
                    } rounded-lg text-xs font-bold transition-all duration-150 ${isActive
                      ? 'brand-gradient text-white shadow-xs'
                      : 'text-[#1a1c20] hover:bg-[#f3f3fa] hover:text-[#1a1c20]'
                    }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#737782]'
                      }`}
                  />
                  {!isCollapsed && <span className="tracking-tight">{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Footer / Logout */}
          <div className="mt-auto border-t border-[#737782]/15 pt-3">
            <button
              onClick={() => {
                localStorage.removeItem('adminToken');
                localStorage.removeItem('adminUser');
                window.location.href = '/admin/login';
              }}
              title={isCollapsed ? 'Logout' : undefined}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0 py-2' : 'gap-2.5 px-3 py-2'
                } rounded-lg text-xs font-bold text-red-600 hover:bg-red-50 transition-all cursor-pointer`}
            >
              <LogOut className="w-3.5 h-3.5 shrink-0" />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
