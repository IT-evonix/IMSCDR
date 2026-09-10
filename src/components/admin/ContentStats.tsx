'use client';

import React from 'react';
import { Newspaper, Eye, Clock, Mail, FolderKanban, Layers, FileText, CheckCircle2 } from 'lucide-react';

export interface StatItem {
  label: string;
  value: string | number;
  icon?: string | React.ReactNode;
  variant?: 'blue' | 'rose' | 'emerald' | 'purple' | string;
  textColor?: string;
  iconBgColor?: string;
}

interface ContentStatsProps {
  stats?: StatItem[];
  className?: string;
}

export const ContentStats: React.FC<ContentStatsProps> = ({ stats = [], className = '' }) => {
  if (!stats || stats.length === 0) return null;

  const renderIcon = (icon?: string | React.ReactNode) => {
    if (React.isValidElement(icon)) {
      return icon;
    }

    const iconClass = "w-4 h-4";
    switch (icon) {
      case 'mail':
      case 'email':
        return <Mail className={iconClass} />;
      case 'category':
      case 'folder':
        return <FolderKanban className={iconClass} />;
      case 'layer':
      case 'module':
        return <Layers className={iconClass} />;
      case 'file':
      case 'article':
        return <Newspaper className={iconClass} />;
      case 'check':
      case 'done':
        return <CheckCircle2 className={iconClass} />;
      case 'visibility':
      case 'eye':
        return <Eye className={iconClass} />;
      case 'pending':
      case 'clock':
        return <Clock className={iconClass} />;
      default:
        return <FileText className={iconClass} />;
    }
  };

  const getVariantStyles = (variant?: string, idx: number = 0) => {
    const actualVariant = variant || (idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'rose' : 'emerald');

    switch (actualVariant) {
      case 'rose':
      case 'pink':
        return {
          iconBg: 'bg-[#89004a]/10 text-[#89004a]',
          textVal: 'text-[#89004a]',
        };
      case 'emerald':
      case 'green':
        return {
          iconBg: 'bg-emerald-500/10 text-emerald-700',
          textVal: 'text-emerald-700',
        };
      case 'purple':
        return {
          iconBg: 'bg-purple-500/10 text-purple-700',
          textVal: 'text-purple-700',
        };
      case 'blue':
      default:
        return {
          iconBg: 'bg-[#09468e]/10 text-[#09468e]',
          textVal: 'text-[#09468e]',
        };
    }
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-2.5 ${className}`}>
      {stats.map((stat, idx) => {
        const styles = getVariantStyles(stat.variant, idx);
        return (
          <div
            key={idx}
            className="bg-[#ffffff] px-3 py-2 rounded-lg brand-border shadow-2xs flex items-center gap-2.5"
          >
            <div
              className={`w-8 h-8 rounded-md ${
                stat.iconBgColor || styles.iconBg
              } flex items-center justify-center shrink-0`}
            >
              {renderIcon(stat.icon)}
            </div>
            <div className="min-w-0">
              <div className="stat-label text-[9.5px] font-extrabold text-[#000000] uppercase tracking-wider font-['Roma-Semibold'] leading-none">
                {stat.label}
              </div>
              <div className={`stat-value text-sm font-black ${stat.textColor || styles.textVal} font-['Roma-Bold'] mt-0.5`}>
                {stat.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentStats;
