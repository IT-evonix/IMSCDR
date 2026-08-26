'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { BackButton } from './BackButton';

export interface PageTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  showBack?: boolean;
  backHref?: string;
  children?: React.ReactNode;
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  description,
  showBack,
  backHref,
  children,
  className = '',
}) => {
  const pathname = usePathname();
  const topLevelRoutes = ['/admin', '/admin/categories', '/admin/news-events', '/admin/contact-messages'];
  const isTopLevelPage = topLevelRoutes.includes(pathname);
  const shouldShowBack = showBack !== undefined ? showBack : !isTopLevelPage;

  return (
    <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-2 py-2 mb-3 ${className}`}>
      <div>
        <div className="flex items-center gap-2 mb-1">
          {shouldShowBack && <BackButton href={backHref} />}
          {subtitle && (
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#ad2865] block leading-none">
              {subtitle}
            </span>
          )}
        </div>
        <h1
          style={{ fontSize: '18px', fontWeight: 700, color: '#003067', marginBottom: 0 }}
          className="admin-page-heading text-lg font-bold text-[#003067] leading-tight"
        >
          {title}
        </h1>
        {description && (
          <p className="text-xs text-[#737782] mt-1 leading-normal">
            {description}
          </p>
        )}
      </div>
      {children && (
        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          {children}
        </div>
      )}
    </div>
  );
};

export default PageTitle;
