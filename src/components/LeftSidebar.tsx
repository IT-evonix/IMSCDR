"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  children?: SidebarItem[];
  target?: string;
  isExternal?: boolean;
}

interface LeftSidebarProps {
  heading: string;
  menuItems: SidebarItem[];
}

const isExternalHref = (
  href?: string,
  isExternal?: boolean,
  target?: string
) => {
  if (isExternal || target === "_blank") return true;
  if (!href) return false;
  return /^https?:\/\//i.test(href) || href.toLowerCase().endsWith(".pdf");
};

const getLinkAttributes = (
  href?: string,
  isExternal?: boolean,
  target?: string
) => {
  const shouldOpenNewTab = isExternalHref(href, isExternal, target);

  return {
    href: href || "#",
    target: shouldOpenNewTab ? ("_blank" as const) : undefined,
    rel: shouldOpenNewTab ? "noopener noreferrer" : undefined,
  };
};

export default function LeftSidebar({
  heading,
  menuItems,
}: LeftSidebarProps) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="leftSidebarmain">
      {/* Mobile Toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(true)}
      >
        <Menu size={22} />
        <span>{heading}</span>
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`left-sidebar ${open ? "show" : ""}`}>
        <div className="sidebar-title">
          {heading}

          <button
            className="sidebar-close"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <ul className="sidebar-menu">
          {menuItems.map((item) => {
            const isParentActive =
              pathname === item.href ||
              item.children?.some((child) => pathname === child.href);
            const linkAttrs = getLinkAttributes(item.href, item.isExternal, item.target);

            return (
              <li key={item.title}>
                {item.children ? (
                  <>
                    <div
                      className={`sidebar-link has-children ${
                        isParentActive ? "active" : ""
                      }`}
                      onClick={() => toggleMenu(item.title)}
                    >
                      <span className="sidebar-link-text">
                        {item.title}
                      </span>

                      <Image
                        src="/images/about/white-arrow.webp"
                        alt="Arrow"
                        width={18}
                        height={10}
                        className={`submenu-arrow ${
                          openMenus[item.title] ? "open" : ""
                        }`}
                      />
                    </div>

                    {openMenus[item.title] && (
                      <ul className="sidebar-submenu">
                        {item.children.map((child) => {
                          const childLinkAttrs = getLinkAttributes(
                            child.href,
                            child.isExternal,
                            child.target
                          );

                          return (
                            <li key={child.title}>
                              {isExternalHref(child.href, child.isExternal, child.target) ? (
                                <a
                                  href={childLinkAttrs.href}
                                  target={childLinkAttrs.target}
                                  rel={childLinkAttrs.rel}
                                  className={`sidebar-sublink ${
                                    pathname === child.href ? "active" : ""
                                  }`}
                                  onClick={() => setOpen(false)}
                                >
                                  {child.title}
                                </a>
                              ) : (
                                <Link
                                  href={childLinkAttrs.href}
                                  className={`sidebar-sublink ${
                                    pathname === child.href
                                      ? "active"
                                      : ""
                                  }`}
                                  onClick={() => setOpen(false)}
                                >
                                  {child.title}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : isExternalHref(item.href, item.isExternal, item.target) ? (
                  <a
                    href={linkAttrs.href}
                    target={linkAttrs.target}
                    rel={linkAttrs.rel}
                    className={`sidebar-link ${
                      pathname === item.href ? "active" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={linkAttrs.href}
                    className={`sidebar-link ${
                      pathname === item.href ? "active" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}