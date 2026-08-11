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
    <Button
      variant="ghost"
      size="xs"
      pill
      href={href}
      onClick={!href ? handleBack : undefined}
      icon={<ArrowLeft className="w-3.5 h-3.5" />}
      className={className}
    >
      {label}
    </Button>
  );
};

export default BackButton;
