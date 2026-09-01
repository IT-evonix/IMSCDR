"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/css/Header.module.css";
import { menuItems, MenuItem } from "@/data/menuData";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight, Plus, Minus } from "lucide-react";
import TopBar from "./TopBar";

interface MobileMenuProps {
  item: MenuItem;
  openMenus: string[];
  toggleMenu: (label: string) => void;
  closeMenu: () => void;
}

const isExternalHref = (
  href?: string,
  isExternal?: boolean,
  target?: string,
) => {
  if (isExternal || target === "_blank") return true;
  if (!href) return false;
  return /^https?:\/\//i.test(href) || href.toLowerCase().endsWith(".pdf");
};

const getLinkAttributes = (
  href?: string,
  isExternal?: boolean,
  target?: string,
) => {
  const shouldOpenNewTab = isExternalHref(href, isExternal, target);

  return {
    href: href || "#",
    target: shouldOpenNewTab ? ("_blank" as const) : undefined,
    rel: shouldOpenNewTab ? "noopener noreferrer" : undefined,
  };
};

function MobileMenuItem({
  item,
  openMenus,
  toggleMenu,
  closeMenu,
}: MobileMenuProps) {
  const isOpen = openMenus.includes(item.label);

  const handleItemClick = () => {
    if (item.children) {
      toggleMenu(item.label);
    } else {
      closeMenu();
    }
  };

  const linkAttrs = getLinkAttributes(item.href, item.isExternal, item.target);

  return (
    <div className={styles.mobileItem}>
      <div className={styles.mobileRow}>
        {item.children ? (
          <button
            type="button"
            className={styles.mobileLink}
            onClick={handleItemClick}
          >
            {item.label}
          </button>
        ) : isExternalHref(item.href, item.isExternal, item.target) ? (
          <a
            href={linkAttrs.href}
            target={linkAttrs.target}
            rel={linkAttrs.rel}
            onClick={handleItemClick}
          >
            {item.label}
          </a>
        ) : (
          <Link href={linkAttrs.href} onClick={handleItemClick}>
            {item.label}
          </Link>
        )}

        {item.children && (
          <button
            type="button"
            className={styles.mobileArrow}
            onClick={() => toggleMenu(item.label)}
          >
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </button>
        )}
      </div>

      {item.children && isOpen && (
        <div className={styles.mobileSubmenu}>
          {item.children.map((child) => (
            <MobileMenuItem
              key={child.label}
              item={child}
              openMenus={openMenus}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  const scrollPosition = useRef(0);

  useEffect(() => {
    if (mobileOpen) {
      scrollPosition.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo({
        top: scrollPosition.current,
        behavior: "instant",
      });
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenMenus([]);
  };
  const DesktopMenuItem = ({ item }: { item: MenuItem }) => {
    const linkAttrs = getLinkAttributes(
      item.href,
      item.isExternal,
      item.target,
    );

    return (
      <li className={styles.menuItem}>
        {isExternalHref(item.href, item.isExternal, item.target) ? (
          <a
            href={linkAttrs.href}
            target={linkAttrs.target}
            rel={linkAttrs.rel}
          >
            {item.label}
            {item.children && <ChevronDown size={14} />}
          </a>
        ) : (
          <Link href={linkAttrs.href}>
            {item.label}
            {item.children && <ChevronDown size={14} />}
          </Link>
        )}

        {item.children && (
          <ul className={styles.dropdown}>
            {item.children.map((child) => {
              const childLinkAttrs = getLinkAttributes(
                child.href,
                child.isExternal,
                child.target,
              );

              return (
                <li key={child.label}>
                  {isExternalHref(
                    child.href,
                    child.isExternal,
                    child.target,
                  ) ? (
                    <a
                      href={childLinkAttrs.href}
                      target={childLinkAttrs.target}
                      rel={childLinkAttrs.rel}
                    >
                      {child.label}
                      {child.children && <ChevronRight size={15} />}
                    </a>
                  ) : (
                    <Link href={childLinkAttrs.href}>
                      {child.label}
                      {child.children && <ChevronRight size={15} />}
                    </Link>
                  )}

                  {child.children && (
                    <ul className={styles.subDropdown}>
                      {child.children.map((sub) => {
                        const subLinkAttrs = getLinkAttributes(
                          sub.href,
                          sub.isExternal,
                          sub.target,
                        );

                        return (
                          <li key={sub.label}>
                            {isExternalHref(
                              sub.href,
                              sub.isExternal,
                              sub.target,
                            ) ? (
                              <a
                                href={subLinkAttrs.href}
                                target={subLinkAttrs.target}
                                rel={subLinkAttrs.rel}
                              >
                                {sub.label}
                              </a>
                            ) : (
                              <Link href={subLinkAttrs.href}>{sub.label}</Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.headerinner}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/home/white_logo.webp"
              className={styles.whitelogo}
              alt="Logo"
              width={240}
              height={95}
              priority
            />
            <Image
              src="/images/home/black_logo.webp"
              className={styles.blacklogo}
              alt="Logo"
              width={200}
              height={80}
              priority
            />
          </Link>
        </div>

        <div className="headerNavigation">
          <TopBar isSticky={isSticky} />

          <nav className={styles.desktopNav}>
            <ul>
              {menuItems.map((item) => (
                <DesktopMenuItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => {
            setMobileOpen((prev) => {
              if (prev) {
                setOpenMenus([]);
              }
              return !prev;
            });
          }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <MobileMenuItem
              key={item.label}
              item={item}
              openMenus={openMenus}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
            />
          ))}
          <div className="onlyformobile">
            <div className={styles.mobileTopBar}>
              <TopBar isSticky={isSticky} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
