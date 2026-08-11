'use client';

import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'brand' | 'gradient' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  pill?: boolean;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  variant = 'brand',
  size = 'sm',
  pill = false,
  href,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    xs: 'px-2.5 py-1 text-[11px] font-medium gap-1 h-7.5 rounded-lg',
    sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5 h-8.5 rounded-lg',
    md: 'px-4 py-2 text-xs font-semibold gap-2 h-9 rounded-lg',
    lg: 'px-5 py-2.5 text-sm font-semibold gap-2.5 h-10 rounded-xl',
  };

  const roundedClass = pill ? '!rounded-full' : 'rounded-lg';

  const baseStyles = `inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100 ${roundedClass} ${sizeClasses[size]}`;

  const variants = {
    brand:
      'brand-gradient text-white hover:brightness-110 border border-transparent',
    gradient:
      'bg-gradient-to-r from-[#89004a] to-[#ad2865] text-white hover:brightness-110 border border-transparent',
    primary:
      'bg-[#09468e] hover:bg-[#073873] text-white border border-transparent',
    secondary:
      'bg-[#89004a] hover:bg-[#6d003a] text-white border border-transparent',
    outline:
      'bg-white border border-[#09468e]/30 text-[#09468e] hover:bg-[#f3f7fc]',
    ghost:
      'bg-[#f3f7fc] hover:bg-[#e2edfc] text-[#09468e] border border-[#09468e]/15',
    danger:
      'bg-red-600 hover:bg-red-700 text-white border border-transparent',
  };

  const content = (
    <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
      {isLoading ? (
        <span className="inline-flex items-center gap-1.5">
          <svg className="animate-spin h-3.5 w-3.5 text-current" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          {children && <span>{children}</span>}
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </span>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
