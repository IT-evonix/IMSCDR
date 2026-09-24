'use client';

import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="admin-root min-h-screen bg-[#f9f9ff] text-[#1a1c20]">
      {/* Sidebar Navigation */}
      <React.Suspense fallback={null}>
        <AdminSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
        />
      </React.Suspense>

      {/* Main Content Area */}
      <main
        className={`${
          isCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        } flex flex-col min-h-screen relative transition-all duration-300 ease-in-out`}
      >
        <AdminHeader onToggleSidebar={() => setSidebarOpen(true)} />

        {/* Content Stage */}
        <div className="flex-1 bg-[#d9d9e0]/30 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 lg:pt-6 pb-6 sm:pb-8 overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
