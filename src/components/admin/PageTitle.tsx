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
  const topLevelRoutes = [
    '/admin',
    '/admin/categories',
    '/admin/news-events',
    '/admin/contact-messages',
    '/admin/enquiries',
    '/admin/grievances',
  ];
  const isTopLevelPage = topLevelRoutes.includes(pathname);
  const shouldShowBack = showBack !== undefined ? showBack : !isTopLevelPage;

  return (
    <div className={`admin-page-title-wrap py-1 sm:py-2 mb-2 sm:mb-3.5 ${className}`}>
      <div className="min-w-0 flex-1">
        {subtitle && (
          <div className="mb-0.5">
            <span className="admin-page-subtitle">
              {subtitle}
            </span>
          </div>
        )}
        <h1 className="admin-page-heading">
          {title}
        </h1>
        {description && (
          <p className="admin-page-desc">
            {description}
          </p>
        )}
      </div>
      {children && (
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto shrink-0 mt-2 md:mt-0">
          {children}
        </div>
      )}
    </div>
  );
};

export default PageTitle;
