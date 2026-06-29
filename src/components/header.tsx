"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/css/Header.module.css";
import { menuItems, MenuItem } from "@/data/menuData";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import TopBar from "./TopBar";

interface MobileMenuProps {
  item: MenuItem;
  openMenus: string[];
  toggleMenu: (label: string) => void;
}

function MobileMenuItem({
  item,
  openMenus,
  toggleMenu,
}: MobileMenuProps) {
  const isOpen = openMenus.includes(item.label);

  return (
    <div className={styles.mobileItem}>
      <div className={styles.mobileRow}>
        <Link href={item.href || "#"}>{item.label}</Link>

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

  // Sticky Header
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

  // Always start from top after refresh
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  // Lock background when mobile menu opens
  useEffect(() => {
    if (!mobileOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const DesktopMenuItem = ({ item }: { item: MenuItem }) => (
    <li className={styles.menuItem}>
      <Link href={item.href || "#"}>
        {item.label}
        {item.children && <ChevronDown size={16} />}
      </Link>

      {item.children && (
        <ul className={styles.dropdown}>
          {item.children.map((child) => (
            <li key={child.label}>
              <Link href={child.href || "#"}>
                {child.label}
                {child.children && <ChevronRight size={15} />}
              </Link>

              {child.children && (
                <ul className={styles.subDropdown}>
                  {child.children.map((sub) => (
                    <li key={sub.label}>
                      <Link href={sub.href || "#"}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.headerinner}>
        <div className={styles.logo}>
          <Link href="/">
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
          <TopBar />

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
            />
          ))}
        </div>
      )}
    </header>
  );
}