import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  labelRightElement?: React.ReactNode;
  error?: string;
  /** Render as 'textarea' instead of default 'input' */
  as?: 'input' | 'textarea';
}

export const Input: React.FC<InputProps> = ({
  label,
  icon,
  rightElement,
  labelRightElement,
  error,
  className = '',
  as = 'input',
  ...props
}) => {
  return (
    <div className="w-full">
      {(label || labelRightElement) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && (
            <label className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
              {label}
            </label>
          )}
          {labelRightElement}
        </div>
      )}
      <div
        className={`relative flex items-center rounded-md border bg-white px-3 py-2 transition-all shadow-xs ${
          error
            ? 'border-red-400 focus-within:ring-2 focus-within:ring-red-100'
            : 'border-slate-300 focus-within:border-[#09468e] focus-within:ring-1 focus-within:ring-[#09468e]/20'
        }`}
      >
        {icon && <span className="text-slate-400 mr-2.5 shrink-0">{icon}</span>}
        {as === 'textarea' ? (
          <textarea
            className={`w-full bg-transparent text-slate-800 placeholder:text-slate-400 text-sm font-medium outline-none ${className}`}
            {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          />
        ) : (
          <input
            className={`w-full bg-transparent text-slate-800 placeholder:text-slate-400 text-sm font-medium outline-none ${className}`}
            {...props}
          />
        )}
        {rightElement && <div className="ml-2.5 shrink-0 flex items-center">{rightElement}</div>}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};
