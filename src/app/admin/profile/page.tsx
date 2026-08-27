'use client';

import React, { useState, useEffect } from 'react';
import { PageTitle } from '@/components/admin/PageTitle';
import { Button } from '@/components/ui/Button';
import {
  Mail,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  KeyRound,
  Check,
  AlertCircle,
} from 'lucide-react';

import { authenticatedFetch } from '@/lib/auth';

export default function AdminProfilePage() {
  // Current Account Email (Loaded dynamically)
  const [currentEmail, setCurrentEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Password Change State
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Show/Hide Toggles
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Status Banners
  const [passwordSuccessMsg, setPasswordSuccessMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

  useEffect(() => {
    // Load logged in admin user email from localStorage
    const storedUserStr = localStorage.getItem('adminUser');
    if (storedUserStr) {
      try {
        const storedUser = JSON.parse(storedUserStr);
        if (storedUser?.email) {
          setCurrentEmail(storedUser.email);
        }
      } catch (err) {
        console.warn('Failed to parse adminUser from localStorage');
      }
    }
  }, []);

  // Real-time Live Password Validation Rules
  const rules = {
    minLength: newPassword.length >= 8,
    hasUpper: /[A-Z]/.test(newPassword),
    hasLower: /[a-z]/.test(newPassword),
    hasNumber: /[0-9]/.test(newPassword),
    hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword),
    noSpaces: newPassword.length > 0 && !/\s/.test(newPassword),
    isDifferentFromOld: newPassword.length > 0 && oldPassword.length > 0 && newPassword !== oldPassword,
  };

  const isPasswordValid =
    rules.minLength &&
    rules.hasUpper &&
    rules.hasLower &&
    rules.hasNumber &&
    rules.hasSpecial &&
    rules.noSpaces &&
    rules.isDifferentFromOld;

  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordErrorMsg('');
    setPasswordSuccessMsg('');

    if (!oldPassword) {
      setPasswordErrorMsg('Please enter your current old password.');
      return;
    }

    if (oldPassword === newPassword) {
      setPasswordErrorMsg('New password cannot be the same as your current old password.');
      return;
    }

    if (!isPasswordValid) {
      setPasswordErrorMsg('New password does not satisfy all security requirements.');
      return;
    }

    if (!passwordsMatch) {
      setPasswordErrorMsg('New password and Confirm password do not match.');
      return;
    }

    setLoading(true);

    try {
      const response = await authenticatedFetch('/api/auth/update-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.status !== 'success') {
        throw new Error(data.message || 'Failed to update password.');
      }

      // Success
      setPasswordSuccessMsg('Your password has been updated successfully!');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPasswordSuccessMsg(''), 5000);
    } catch (err: any) {
      setPasswordErrorMsg(err.message || 'Password update failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1150px] w-full mx-auto space-y-4 pb-6 pt-1">
      {/* Page Title */}
      <PageTitle showBack backHref="/admin" subtitle="Account Management" title="Profile & Security Settings" />

      {/* Centered Change Password Form */}
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-xl brand-border overflow-hidden shadow-2xs">
          <div className="px-4 py-2.5 bg-[#f3f7fc] border-b border-[#09468e]/15 flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-[#ad2865]" />
            <h4 className="text-xs font-bold text-[#003067]">Change Account Password</h4>
          </div>

          <form onSubmit={handleUpdatePassword} className="p-4 space-y-3.5">
            {passwordSuccessMsg && (
              <div className="p-2.5 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>{passwordSuccessMsg}</span>
              </div>
            )}

            {passwordErrorMsg && (
              <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{passwordErrorMsg}</span>
              </div>
            )}

            {/* Account Email (Read-Only) */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#1a1c20] uppercase tracking-wider">
                Account Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  readOnly
                  disabled
                  value={currentEmail}
                  className="w-full px-3.5 py-2 rounded-lg brand-border bg-[#f8fafc] text-xs font-semibold text-[#1a1c20] outline-none cursor-not-allowed pl-9 border border-[#737782]/30"
                />
                <Mail className="w-3.5 h-3.5 text-[#1a1c20] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Old Password */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                Current Old Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showOldPassword ? 'text' : 'password'}
                  required
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full px-3.5 py-2 rounded-lg brand-border focus:border-[#09468e] text-xs font-normal text-[#1a1c20] outline-none pr-9"
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737782] cursor-pointer"
                >
                  {showOldPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* New Password & Confirm Password Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                  New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full px-3.5 py-2 rounded-lg brand-border focus:border-[#09468e] text-xs font-normal text-[#1a1c20] outline-none pr-9"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737782] cursor-pointer"
                  >
                    {showNewPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                  Confirm New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    className="w-full px-3.5 py-2 rounded-lg brand-border focus:border-[#09468e] text-xs font-normal text-[#1a1c20] outline-none pr-9"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737782] cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {confirmPassword.length > 0 && (
                  <p
                    className={`text-[10px] font-semibold mt-0.5 ${passwordsMatch ? 'text-green-600' : 'text-red-500'
                      }`}
                  >
                    {passwordsMatch ? '✓ Passwords match' : '✕ Passwords do not match'}
                  </p>
                )}
              </div>
            </div>

            {/* Real-time Password Rules Checklist Card */}
            <div className="p-3 rounded-lg bg-[#f9f9ff] border border-[#737782]/15 space-y-2">
              <p className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                Password Security Requirements (Live Check):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                <div className={`flex items-center gap-1.5 ${rules.minLength ? 'text-green-600 font-semibold' : 'text-[#737782]'}`}>
                  {rules.minLength ? <Check className="w-3.5 h-3.5 text-green-600 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
                  <span>At least 8 characters long</span>
                </div>

                <div className={`flex items-center gap-1.5 ${rules.hasUpper ? 'text-green-600 font-semibold' : 'text-[#737782]'}`}>
                  {rules.hasUpper ? <Check className="w-3.5 h-3.5 text-green-600 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
                  <span>One uppercase letter (A-Z)</span>
                </div>

                <div className={`flex items-center gap-1.5 ${rules.hasLower ? 'text-green-600 font-semibold' : 'text-[#737782]'}`}>
                  {rules.hasLower ? <Check className="w-3.5 h-3.5 text-green-600 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
                  <span>One lowercase letter (a-z)</span>
                </div>

                <div className={`flex items-center gap-1.5 ${rules.hasNumber ? 'text-green-600 font-semibold' : 'text-[#737782]'}`}>
                  {rules.hasNumber ? <Check className="w-3.5 h-3.5 text-green-600 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
                  <span>One numeric digit (0-9)</span>
                </div>

                <div className={`flex items-center gap-1.5 ${rules.hasSpecial ? 'text-green-600 font-semibold' : 'text-[#737782]'}`}>
                  {rules.hasSpecial ? <Check className="w-3.5 h-3.5 text-green-600 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
                  <span>One special character (!@#$...)</span>
                </div>

                <div className={`flex items-center gap-1.5 ${rules.noSpaces ? 'text-green-600 font-semibold' : 'text-[#737782]'}`}>
                  {rules.noSpaces ? <Check className="w-3.5 h-3.5 text-green-600 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
                  <span>No spaces / whitespace</span>
                </div>

                <div className={`flex items-center gap-1.5 ${rules.isDifferentFromOld ? 'text-green-600 font-semibold' : 'text-[#737782]'}`}>
                  {rules.isDifferentFromOld ? <Check className="w-3.5 h-3.5 text-green-600 shrink-0" /> : <XCircle className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
                  <span>Different from current old password</span>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end pt-1">
              <Button
                type="submit"
                variant="gradient"
                size="sm"
                pill
                isLoading={loading}
                disabled={!isPasswordValid || !passwordsMatch || !oldPassword || loading}
              >
                Update Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

