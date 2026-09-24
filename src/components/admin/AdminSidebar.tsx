'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
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
  Calendar,
  BookOpen,
  Bell,
  FileText,
  Layers,
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
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export interface SidebarNavItem {
  id: string;
  label: string;
  href?: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  children?: SidebarChild[];
}

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  {
    id: 'news-events-blogs',
    label: 'News, Blogs & Circulars-Notices',
    icon: Newspaper,
    children: [
      { id: 'news-events-all', label: 'All Posts', href: '/admin/news-events', icon: Layers },
      { id: 'categories', label: 'Categories', href: '/admin/categories', icon: FolderKanban },
      { id: 'create-news', label: 'News', href: '/admin/news-events/create?type=News', icon: Newspaper },
      // { id: 'create-event', label: 'Event', href: '/admin/news-events/create?type=Event', icon: Calendar },
      { id: 'create-blog', label: 'Blogs', href: '/admin/news-events/create?type=Blog', icon: BookOpen },
      { id: 'create-notice-circular', label: 'Notices-Circulars', href: '/admin/news-events/create?type=Notice', icon: Bell },
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
  const searchParams = useSearchParams();

  const isChildActive = (childHref?: string) => {
    if (!childHref) return false;
    if (childHref.includes('?')) {
      const [basePath, query] = childHref.split('?');
      if (pathname !== basePath) return false;
      const expectedType = new URLSearchParams(query).get('type');
      const currentType = searchParams?.get('type');
      if (expectedType === 'Notice' && (currentType === 'Notice' || currentType === 'Circular')) {
        return true;
      }
      return expectedType === currentType;
    }
    if (childHref === '/admin/news-events') {
      return pathname === '/admin/news-events';
    }
    return pathname === childHref;
  };

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    SIDEBAR_NAV_ITEMS.forEach((item) => {
      if (item.children) {
        initial[item.id] = item.children.some((c) => {
          const basePath = c.href?.split('?')[0] || '';
          return pathname === basePath || (basePath && pathname.startsWith(basePath));
        });
      }
    });
    return initial;
  });

  const isGroupOpen = (item: SidebarNavItem) => {
    if (openGroups[item.id] !== undefined) {
      return openGroups[item.id];
    }
    return item.children?.some((c) => {
      const basePath = c.href?.split('?')[0] || '';
      return pathname === basePath || (basePath && pathname.startsWith(basePath));
    }) ?? false;
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
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container: Follows exact globals.css website sidebar theme */}
      <aside
        className={`leftSidebarmain h-screen flex flex-col fixed left-0 top-0 z-50 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'
          } ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{ backgroundColor: '#09468e', padding: 0 }}
      >
        {/* Header / Logo Area */}
        <div
          className={`flex ${isCollapsed ? 'flex-col gap-2 items-center' : 'items-center justify-between'
            } px-4 py-3.5 border-b border-[#5392db]/40 shrink-0`}
        >
          <Link href="/admin" className="flex items-center group overflow-hidden">
            <Image
              src="/images/home/white_logo.webp"
              alt="IMSCDR Logo"
              width={160}
              height={44}
              priority
              className={`${isCollapsed ? 'h-5' : 'h-7'} w-auto object-contain transition-transform group-hover:scale-105`}
            />
          </Link>

          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="lg:hidden p-1 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>

          {/* Desktop Collapse / Expand Toggle Button */}
          {onToggleCollapse && (
            <button
              type="button"
              onClick={onToggleCollapse}
              className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full text-white/80 hover:text-white bg-[#135fb9] hover:bg-[#1b71da] cursor-pointer shrink-0 transition-colors shadow-xs"
              title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {isCollapsed ? (
                <ChevronRight size={14} />
              ) : (
                <ChevronLeft size={14} />
              )}
            </button>
          )}
        </div>

        {/* Sidebar Title Header (Exact website .sidebar-title from globals.css) */}
        {!isCollapsed && (
          <div className="px-3 pt-3 pb-1 shrink-0">
            <div
              className="sidebar-title"
              style={{
                fontSize: '17px',
                padding: '8px 14px',
                borderRadius: '50px 0 0 50px',
              }}
            >
              <span>Admin Menu</span>
            </div>
          </div>
        )}

        {/* Navigation Menu (Exact website .sidebar-menu from globals.css) */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden admin-sidebar-scroll px-2 py-2">
          <ul
            className="sidebar-menu"
            style={isCollapsed ? { padding: '8px 0' } : { padding: '8px 0 0 10px' }}
          >
            {SIDEBAR_NAV_ITEMS.map((item) => {
              const Icon = item.icon;

              // ── Dropdown Item with Children (e.g. News-Events & Blogs) ────
              if (item.children) {
                const anyChildActive = item.children.some(
                  (c) => pathname === c.href || pathname.startsWith(c.href)
                );
                const groupOpen = isGroupOpen(item);

                if (isCollapsed) {
                  return (
                    <li key={item.id} style={{ borderBottom: '1.5px dotted #5392db' }}>
                      <button
                        type="button"
                        onClick={() => {
                          if (onToggleCollapse) onToggleCollapse();
                          toggleGroup(item);
                        }}
                        title={item.label}
                        className={`w-full flex items-center justify-center py-3 text-white hover:text-[#ffc233] transition-colors ${anyChildActive ? 'text-[#ffc233]' : ''
                          }`}
                      >
                        <Icon size={18} className="shrink-0" />
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <div
                      className={`sidebar-link has-children ${anyChildActive ? 'active' : ''}`}
                      onClick={() => toggleGroup(item)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <Icon size={16} className="shrink-0" />
                        <span className="sidebar-link-text text-[12.5px] leading-tight">
                          {item.label}
                        </span>
                      </div>
                      <ChevronDown
                        size={15}
                        className={`submenu-arrow shrink-0 ${groupOpen ? 'open' : ''}`}
                      />
                    </div>

                    {groupOpen && (
                      <ul className="sidebar-submenu">
                        {item.children.map((child) => {
                          const ChildIcon = child.icon;
                          const childActive = isChildActive(child.href);

                          return (
                            <li key={child.id}>
                              <Link
                                href={child.href}
                                className={`sidebar-sublink ${childActive ? 'active' : ''}`}
                                onClick={() => onClose()}
                              >
                                <div className="flex items-center gap-2">
                                  <ChildIcon size={14} className="shrink-0" />
                                  <span className="text-[14px]">{child.label}</span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              // ── Direct Link Item (Dashboard, Contact, Enquiries, etc.) ────
              const isActive =
                pathname === item.href ||
                (item.href !== '/admin' && pathname.startsWith(item.href!));

              if (isCollapsed) {
                return (
                  <li key={item.id} style={{ borderBottom: '1.5px dotted #5392db' }}>
                    <Link
                      href={item.href!}
                      title={item.label}
                      className={`w-full flex items-center justify-center py-3 text-white hover:text-[#ffc233] transition-colors ${isActive ? 'text-[#ffc233]' : ''
                        }`}
                    >
                      <Icon size={18} className="shrink-0" />
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <Link
                    href={item.href!}
                    className={`sidebar-link ${isActive ? 'active' : ''}`}
                    onClick={() => onClose()}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={16} className="shrink-0" />
                      <span className="sidebar-link-text text-[14px]">{item.label}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer / Logout Button */}
        <div className="p-3 border-t border-[#5392db]/40 shrink-0 mt-auto">
          <button
            onClick={() => {
              localStorage.removeItem('adminToken');
              localStorage.removeItem('adminRefreshToken');
              localStorage.removeItem('adminUser');
              window.location.href = '/admin/login';
            }}
            title={isCollapsed ? 'Logout' : undefined}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center p-2.5' : 'gap-2.5 px-3 py-2'
              } rounded-lg text-white/90 hover:text-[#ffc233] hover:bg-white/10 transition-all font-['Avenir-Next-Demi'] text-[14px] cursor-pointer`}
          >
            <LogOut size={16} className="shrink-0" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
