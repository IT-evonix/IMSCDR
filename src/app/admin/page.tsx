'use client';

import React from 'react';
import { PageTitle } from '@/components/admin/PageTitle';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <PageTitle
        subtitle="IMSCDR Overview"
        title="Dashboard"
        description="Welcome to your institution's central administration panel."
      />
    </div>
  );
}
