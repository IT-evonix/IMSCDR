'use client';

import React from 'react';
import Image from 'next/image';

interface LogoLoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'full';
  text?: string;
  variant?: 'light' | 'dark' | 'overlay';
  className?: string;
}

export const LogoLoader: React.FC<LogoLoaderProps> = ({
  size = 'md',
  text,
  variant = 'light',
  className = '',
}) => {
  // Dimensions
  const logoDimensions = {
    sm: { box: 'w-16 h-16', img: 40 },
    md: { box: 'w-24 h-24', img: 60 },
    lg: { box: 'w-32 h-32', img: 80 },
    full: { box: 'w-28 h-28', img: 70 },
  }[size];

  const logoSrc =
    variant === 'dark'
      ? '/images/home/white_logo.webp'
      : '/images/home/black_logo.webp';

  const loaderContent = (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {/* Animated Spinner Box with Logo Center */}
      <div className={`relative flex items-center justify-center ${logoDimensions.box}`}>
        {/* Outer Animated Spinning Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#09468e] border-r-[#89004a] animate-spin shadow-xs" />
        
        {/* Inner Subtle Pulsing Glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#09468e]/10 to-[#89004a]/10 animate-pulse" />

        {/* Center Website Logo */}
        <div className="relative z-10 p-2 transform transition-all duration-300">
          <Image
            src={logoSrc}
            alt="IMSCDR Logo Loader"
            width={logoDimensions.img}
            height={logoDimensions.img}
            className="object-contain drop-shadow-xs animate-pulse"
            priority
          />
        </div>
      </div>

      {/* Optional Animated Text */}
      {text && (
        <p className="text-xs font-bold text-[#09468e] tracking-wide animate-pulse text-center">
          {text}
        </p>
      )}
    </div>
  );

  // Full Screen Overlay Mode
  if (size === 'full') {
    return (
      <div className="fixed inset-0 z-50 bg-[#f9f9ff]/90 backdrop-blur-sm flex items-center justify-center p-4">
        {loaderContent}
      </div>
    );
  }

  return loaderContent;
};

export default LogoLoader;
