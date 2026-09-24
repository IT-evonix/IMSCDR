'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lock, ArrowRight, Eye, EyeOff, User, AlertTriangle } from 'lucide-react';

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [sessionExpiredMsg, setSessionExpiredMsg] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('reason') === 'expired') setSessionExpiredMsg(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || data.status !== 'success') {
        throw new Error(data.message || 'Invalid email or password');
      }

      localStorage.setItem('adminToken',        data.accessToken);
      localStorage.setItem('adminRefreshToken', data.refreshToken);
      localStorage.setItem('adminUser',         JSON.stringify(data.user));

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
    <div className="admin-login-wrapper">

      {/* Logo Container - centered on all screens */}
      <div className="admin-login-logo-wrap">
        <Link href="/" className="admin-login-logo-link">
          <img
            src="/images/home/black_logo.webp"
            alt="IMSCDR Logo"
            className="admin-login-logo"
          />
        </Link>
      </div>

      {/* Title & Subtitle — uses globals.css .heading and .subheading */}
      <h4 className="heading admin-login-title">IMSCDR Admin Portal</h4>
      <p className="subheading admin-login-subtitle">Enter admin credentials to sign in</p>

      {/* Session Expired Alert */}
      {sessionExpiredMsg && (
        <div className="admin-alert admin-alert--warning">
          <AlertTriangle size={15} style={{ flexShrink: 0 }} />
          <span>Your session has expired. Please sign in again.</span>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <div className="admin-alert admin-alert--error">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="admin-login-form">

        {/* Email */}
        <div className="admin-form-field">
          <label className="admin-form-label" htmlFor="login-email">
            Email Address
          </label>
          <div className="admin-input-group">
            <span className="admin-input-icon">
              <User size={15} />
            </span>
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="admin-input"
              autoComplete="email"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="admin-form-field admin-form-field--password">
          <label className="admin-form-label" htmlFor="login-password">
            Password
          </label>
          <div className="admin-input-group">
            <span className="admin-input-icon">
              <Lock size={15} />
            </span>
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="admin-password-toggle"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Submit — uses .explore_more_btn styled in admin.css */}
        <button
          type="submit"
          disabled={loading}
          className="explore_more_btn"
        >
          {loading ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" style={{ width: 15, height: 15, animation: 'spin 1s linear infinite', flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }} />
                <path fill="currentColor" style={{ opacity: 0.75 }}
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing in...
            </>
          ) : (
            <>
              Sign In to Dashboard
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="admin-login-footer">
        <p>IMS-CDR Enterprise Portal &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default LoginForm;
