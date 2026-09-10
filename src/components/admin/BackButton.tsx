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
  label = 'Back',
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
      className={`admin-back-btn inline-flex items-center gap-1.5 px-2.5 py-1 h-[26px] min-h-[26px] rounded-full text-[10.5px] font-bold text-[#09468e] bg-white border border-[#09468e]/30 hover:bg-gradient-to-r hover:from-[#09468e] hover:to-[#89004a] hover:text-white hover:border-transparent transition-all duration-200 shadow-2xs cursor-pointer active:scale-95 group font-['Roma-Semibold'] ${className}`}
    >
      <ArrowLeft className="w-3 h-3 text-[#09468e] group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
      <span className="leading-none">{label}</span>
    </button>
  );
};

export default BackButton;
