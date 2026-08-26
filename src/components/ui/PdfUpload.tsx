'use client';

import React, { useRef } from 'react';
import { FileText, Upload, X, ExternalLink } from 'lucide-react';

export interface PdfFile {
  id: string;
  name: string;
  size: string;
  url: string;
}

interface PdfUploadProps {
  pdf: PdfFile | null;
  onSelectPdf: (file: File) => void;
  onRemovePdf: () => void;
  label?: string;
  helperText?: string;
}

export const PdfUpload: React.FC<PdfUploadProps> = ({
  pdf,
  onSelectPdf,
  onRemovePdf,
  label = 'PDF File / Official Notice',
  helperText = 'Attach official PDF document or notice file (Max 10MB).',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        onSelectPdf(file);
      }
    }
  };

  return (
    <div className="space-y-1">
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
            {label}
          </label>
          <span className="text-[10px] font-bold text-[#09468e]">
            {pdf ? '1 / 1 Attached' : '0 / 1 Attached'}
          </span>
        </div>
      )}

      {/* Compact Mini Card matching ImageUpload layout */}
      <div className="flex flex-wrap gap-2 items-center pt-0.5">
        {pdf ? (
          <div className="relative group w-32 h-14 rounded-md border border-[#737782]/25 overflow-hidden bg-white shadow-2xs shrink-0 flex flex-col justify-between p-1.5 transition-all hover:border-[#09468e]">
            {/* Top Row: Icon + Red Cross Remove Button */}
            <div className="flex justify-between items-start">
              <div className="p-1 bg-red-100 text-red-600 rounded shrink-0">
                <FileText className="w-3.5 h-3.5" />
              </div>

              {/* Red Cross Delete Button */}
              <button
                type="button"
                onClick={onRemovePdf}
                className="p-0.5 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all cursor-pointer shadow-xs z-10"
                title="Remove PDF"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </div>

            {/* Bottom Row: Filename & Click to Preview */}
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center justify-between gap-1 text-[#09468e] hover:underline"
              title={`Click to preview ${pdf.name}`}
            >
              <span className="text-[9px] font-bold text-[#1a1c20] truncate leading-none">
                {pdf.name}
              </span>
              <ExternalLink className="w-2.5 h-2.5 text-[#09468e] shrink-0" />
            </a>
          </div>
        ) : (
          /* Add Single PDF Card Button */
          <div
            onClick={() => inputRef.current?.click()}
            className="w-32 h-14 rounded-md border border-dashed border-[#737782]/30 hover:border-[#09468e] bg-[#f9f9ff] hover:bg-[#e1efff]/20 transition-all flex flex-col items-center justify-center p-1 cursor-pointer group shrink-0"
          >
            <Upload className="w-3.5 h-3.5 text-[#737782] group-hover:text-[#09468e] transition-colors mb-0.5" />
            <span className="text-[9px] font-bold text-[#434751] group-hover:text-[#09468e] text-center leading-none">
              Upload PDF
            </span>

            <input
              ref={inputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        )}
      </div>

      {helperText && (
        <p className="text-[10px] text-[#737782] italic mt-0.5">{helperText}</p>
      )}
    </div>
  );
};

export default PdfUpload;
