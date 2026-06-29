"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  title: string;
  href: string;
}

interface LeftSidebarProps {
  heading: string;
  menuItems: SidebarItem[];
}

export default function LeftSidebar({
  heading,
  menuItems,
}: LeftSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="left-sidebar">

      <div className="sidebar-title">
        {heading}
      </div>

      <ul className="sidebar-menu">

        {menuItems.map((item) => (
          <li key={item.href}>

            <Link
              href={item.href}
              className={`sidebar-link ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.title}
            </Link>

          </li>
        ))}

      </ul>

    </aside>
  );
}