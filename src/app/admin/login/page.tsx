import React from 'react';
import { LoginForm } from '@/components/admin/LoginForm';

export const metadata = {
  title: 'Admin Login | IMSCDR Portal',
  description: 'IMSCDR Enterprise Admin Login Portal',
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen w-full bg-[#F5F7FA] flex items-center justify-center p-4 sm:p-6">
      <LoginForm />
    </main>
  );
}
