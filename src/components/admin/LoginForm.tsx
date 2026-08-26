'use client';

import React, { useState, useEffect } from 'react';
import { Lock, ArrowRight, Eye, EyeOff, User, AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [sessionExpiredMsg, setSessionExpiredMsg] = useState(false);

  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('reason') === 'expired') {
        setSessionExpiredMsg(true);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || data.status !== 'success') {
        throw new Error(data.message || 'Invalid email or password');
      }

      // Store tokens and user in localStorage
      localStorage.setItem('adminToken', data.accessToken);
      localStorage.setItem('adminRefreshToken', data.refreshToken);
      localStorage.setItem('adminUser', JSON.stringify(data.user));

      if (onSuccess) {
        onSuccess();
      } else {
        window.location.href = '/admin';
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden brand-border">
      {/* Top Accent Line */}
      <div className="h-1.5 w-full brand-gradient" />

      <div className="p-6 sm:p-7 space-y-4">
        {/* Logo Header */}
        <div className="flex flex-col items-center mb-4 text-center">
          <a href='/'><img src="/images/home/black_logo.webp" alt="IMSCDR Logo" className="h-10 w-auto object-contain mb-2" /></a>
          <h4 className="text-base font-bold text-[#003067] tracking-tight">IMSCDR Admin Portal</h4>
          <p className="text-[10px] text-[#737782] mt-0.5">Enter admin credentials to sign in</p>
        </div>

        {sessionExpiredMsg && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3.5 py-2.5 rounded-lg flex items-center gap-2 font-medium animate-in fade-in duration-200">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Your session has expired. Please sign in again.</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-3.5 py-2.5 rounded-lg text-center font-medium animate-in fade-in duration-200">
            {error}
          </div>
        )}

        {/* Direct Bypass Login Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <Input
            label="EMAIL ADDRESS"
            type="email"
            placeholder="admin@evonix.co"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<User className="w-3.5 h-3.5 text-[#737782]" />}
            autoComplete="email"
          />

          <Input
            label="PASSWORD"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="w-3.5 h-3.5 text-[#737782]" />}
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-slate-400 focus:outline-none cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
              </button>
            }
            autoComplete="current-password"
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="brand"
              size="sm"
              isLoading={loading}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="w-full py-2.5 text-xs font-semibold !rounded-[10px] transition-all"
            >
              Sign In to Dashboard
            </Button>
          </div>
        </form>

        {/* Bottom subtle divider line */}
        <div className="pt-3 border-t border-[#737782]/10 text-center">
          <p className="text-[10px] text-[#737782] font-medium">
            IMSCDR Enterprise Portal &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
