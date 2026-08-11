'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { LogoLoader } from '@/components/ui/LogoLoader';
import '@/app/admin.css';

import { isTokenExpired, logoutAdmin } from '@/lib/auth';

export default function RootAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem('adminToken');
    const isLoginPage = pathname === '/admin/login';

    if (!isLoginPage) {
      if (!token || isTokenExpired(token)) {
        // Unauthenticated or expired token trying to access protected /admin routes -> Auto Logout & Redirect to Login
        setIsAuthenticated(false);
        logoutAdmin(token ? 'expired' : undefined);
        return;
      }
      setIsAuthenticated(true);
    } else if (token && !isTokenExpired(token)) {
      // Valid logged-in admin trying to access /admin/login -> Redirect to Dashboard
      setIsAuthenticated(true);
      router.replace('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname, router]);

  // Prevent Next.js SSR hydration mismatch until client component is mounted
  if (!isMounted || isAuthenticated === null) {
    return <LogoLoader size="full" text="Loading..." />;
  }

  // If path is /admin/login, skip the AdminLayout wrapper
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Render Protected Admin Layout
  return <AdminLayout>{children}</AdminLayout>;
}
