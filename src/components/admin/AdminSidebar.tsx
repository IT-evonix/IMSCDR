'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Newspaper,
  FolderKanban,
  X,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Mail,
  GraduationCap,
  ShieldAlert,
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export interface SidebarChild {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SidebarNavItem {
  id: string;
  label: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarChild[];
}

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  {
    id: 'news-events-blogs',
    label: 'News-Events , Blogs & Circulars',
    icon: Newspaper,
    children: [
      { id: 'categories', label: 'Categories', href: '/admin/categories', icon: FolderKanban },
      { id: 'news-events', label: 'All Posts', href: '/admin/news-events', icon: Newspaper },
    ],
  },
  { id: 'contact-messages', label: 'Contact Enquiries', href: '/admin/contact-messages', icon: Mail },
  { id: 'enquiries', label: 'Admission Enquiries', href: '/admin/enquiries', icon: GraduationCap },
  { id: 'grievances', label: 'Grievance Redressal', href: '/admin/grievances', icon: ShieldAlert },
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  isOpen,
  onClose,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const pathname = usePathname();

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    SIDEBAR_NAV_ITEMS.forEach((item) => {
      if (item.children) {
        initial[item.id] = item.children.some(
          (c) => pathname === c.href || pathname.startsWith(c.href)
        );
      }
    });
    return initial;
  });

  const isGroupOpen = (item: SidebarNavItem) => {
    if (openGroups[item.id] !== undefined) {
      return openGroups[item.id];
    }
    return item.children?.some(
      (c) => pathname === c.href || pathname.startsWith(c.href)
    ) ?? false;
  };

  const toggleGroup = (item: SidebarNavItem) => {
    const current = isGroupOpen(item);
    setOpenGroups((prev) => ({ ...prev, [item.id]: !current }));
  };

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
        className={`h-screen flex flex-col fixed left-0 top-0 bg-white border-r border-slate-200 shadow-[1px_0_8px_rgba(9,70,142,0.03)] z-50 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-56'
          } ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex flex-col h-full py-3.5 px-3">
          {/* Header / Logo Area */}
          <div className={`flex ${isCollapsed ? 'flex-col gap-2 items-center' : 'items-center justify-between'} pb-3 mb-3 border-b border-slate-100 px-0.5`}>
            <Link
              href="/admin"
              className="flex items-center justify-center group overflow-hidden"
            >
              <img
                src="/images/home/black_logo.webp"
                alt="IMSCDR Logo"
                className={`${isCollapsed ? 'h-5' : 'h-7'} w-auto object-contain transition-transform group-hover:scale-105`}
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
                type="button"
                onClick={onToggleCollapse}
                className="sidebar-collapse-btn hidden lg:flex items-center justify-center w-6 h-6 rounded-full cursor-pointer shadow-2xs shrink-0"
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
            <div className="px-2 mb-2 text-[10px] font-extrabold uppercase tracking-wider text-[#000000]">
              Menu
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            {SIDEBAR_NAV_ITEMS.map((item) => {
              const Icon = item.icon;

              // ── Group with children (Dedicated Custom Compact CSS) ─────────
              if (item.children) {
                const anyChildActive = item.children.some(
                  (c) => pathname === c.href || pathname.startsWith(c.href)
                );
                const groupOpen = isGroupOpen(item);

                return (
                  <div key={item.id}>
                    {/* Parent toggle button */}
                    <button
                      type="button"
                      onClick={() => {
                        if (isCollapsed && onToggleCollapse) {
                          onToggleCollapse();
                        }
                        toggleGroup(item);
                      }}
                      title={item.label}
                      className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0 py-2' : 'gap-2 px-2.5 py-2'
                        } rounded-lg transition-all duration-150 cursor-pointer ${isCollapsed && anyChildActive
                          ? 'brand-gradient text-white shadow-xs'
                          : anyChildActive
                            ? 'bg-[#f3f3fa] text-[#1a1c20]'
                            : 'text-[#1a1c20] hover:bg-[#f3f3fa] hover:text-[#1a1c20]'
                        }`}
                    >
                      <Icon
                        className={`w-3.5 h-3.5 shrink-0 ${isCollapsed && anyChildActive
                          ? 'text-white'
                          : anyChildActive
                            ? 'text-[#09468e]'
                            : 'text-[#000000]'
                          }`}
                      />
                      {!isCollapsed && (
                        <>
                          <span className="text-[11.5px] font-bold tracking-tight whitespace-nowrap flex-1 text-left leading-none">
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-3 h-3 shrink-0 text-[#000000] transition-transform duration-200 ${groupOpen ? 'rotate-180 text-[#1a1c20]' : ''
                              }`}
                          />
                        </>
                      )}
                    </button>

                    {/* Children sub-links */}
                    {!isCollapsed && groupOpen && (
                      <div className="mt-1.5 ml-3 pl-2.5 border-l border-[#000000]/20 space-y-1.5">
                        {item.children.map((child) => {
                          const ChildIcon = child.icon;
                          const childActive =
                            pathname === child.href || pathname.startsWith(child.href);
                          return (
                            <Link
                              key={child.id}
                              href={child.href}
                              style={!childActive ? { color: '#434751' } : undefined}
                              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11.5px] font-semibold transition-all duration-150 ${childActive
                                ? 'brand-gradient text-white shadow-xs'
                                : 'text-[#434751] hover:bg-[#f3f3fa] hover:text-[#1a1c20]'
                                }`}
                            >
                              <ChildIcon
                                className={`w-3 h-3 shrink-0 ${childActive ? 'text-white' : 'text-[#000000]'
                                  }`}
                              />
                              <span className="tracking-tight whitespace-nowrap leading-none">{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              // ── Regular flat links (Original Default Styling Preserved) ───
              const isActive =
                pathname === item.href ||
                (item.href !== '/admin' && pathname.startsWith(item.href!));

              return (
                <Link
                  key={item.id}
                  href={item.href!}
                  title={isCollapsed ? item.label : undefined}
                  style={!isActive ? { color: '#1a1c20' } : undefined}
                  className={`flex items-center ${isCollapsed ? 'justify-center px-0 py-2' : 'gap-2.5 px-3 py-2'
                    } rounded-lg text-xs font-bold transition-all duration-150 ${isActive
                      ? 'brand-gradient text-white shadow-xs'
                      : 'text-[#1a1c20] hover:bg-[#f3f3fa] hover:text-[#1a1c20]'
                    }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#000000]'
                      }`}
                  />
                  {!isCollapsed && <span className="tracking-tight">{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Footer / Logout (Original Default Styling Preserved) */}
          <div className="mt-auto border-t border-slate-100 pt-3">
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
