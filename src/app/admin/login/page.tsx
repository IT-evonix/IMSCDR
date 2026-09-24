import React from 'react';
import { LoginForm } from '@/components/admin/LoginForm';
import '@/app/admin.css';

export const metadata = {
  title: 'Admin Login | IMSCDR Portal',
  description: 'IMSCDR Enterprise Admin Login Portal',
};

export default function AdminLoginPage() {
  return (
    <main className="admin-login-page">
      <LoginForm />
    </main>
  );
}

