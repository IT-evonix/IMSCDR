'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({
  href,
  label = 'Go back',
  className = '',
  onClick,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (onClick) {
      onClick();
    } else if (!href) {
      router.back();
    }
  };

  return (
    <button
      type="button"
      onClick={!href ? handleBack : () => router.push(href)}
      className={`admin-back-btn p-1.5 text-[#09468e] hover:text-[#ad2865] hover:bg-[#09468e]/10 rounded-lg transition-all cursor-pointer flex items-center justify-center outline-none ${className}`}
      title={label}
      aria-label={label}
    >
      <ArrowLeft className="w-5 h-5 transition-transform hover:-translate-x-0.5" />
    </button>
  );
};

export default BackButton;
