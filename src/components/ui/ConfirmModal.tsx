'use client';

import React from 'react';
import { AlertTriangle, Trash2, HelpCircle, CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success';
  isLoading?: boolean;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
  isLoading = false,
}) => {
  if (!isOpen) return null;

  const variantConfig = {
    danger: {
      iconBg: 'bg-red-50 text-red-600 border-red-200',
      btnVariant: 'gradient' as const,
      Icon: Trash2,
    },
    warning: {
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
      btnVariant: 'gradient' as const,
      Icon: AlertTriangle,
    },
    info: {
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
      btnVariant: 'gradient' as const,
      Icon: HelpCircle,
    },
    success: {
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      btnVariant: 'gradient' as const,
      Icon: CheckCircle2,
    },
  };

  const currentVariant = variantConfig[variant] || variantConfig.danger;
  const VariantIcon = currentVariant.Icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xl brand-border shadow-xl max-w-[400px] w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header & Body */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className={`w-7 h-7 rounded-md border ${currentVariant.iconBg} shrink-0 flex items-center justify-center`}>
                <VariantIcon className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#1a1c20] truncate leading-tight my-auto">{title}</h4>
            </div>

            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="w-7 h-7 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer disabled:opacity-50 shrink-0 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs sm:text-[13px] font-medium text-slate-700 leading-relaxed pt-0.5">
            {message}
          </p>
        </div>

        {/* Compact Action Footer */}
        <div className="px-4 py-2.5 bg-[#f9f9ff] border-t border-[#737782]/10 flex items-center justify-end gap-2">
          {cancelText && (
            <Button
              type="button"
              variant="outline"
              size="xs"
              onClick={onClose}
              disabled={isLoading}
            >
              {cancelText}
            </Button>
          )}

          <Button
            type="button"
            variant={currentVariant.btnVariant}
            size="xs"
            onClick={onConfirm}
            isLoading={isLoading}
            disabled={isLoading}
          >
            {confirmText}
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ConfirmModal;
