'use client';

import React from 'react';
import { PageTitle } from '@/components/admin/PageTitle';

export default function AdminDashboardPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      <PageTitle
        subtitle="IMSCDR Overview"
        title="Dashboard"
        description="Welcome to your institution's central administration panel."
      />
    </div>
  );
}
