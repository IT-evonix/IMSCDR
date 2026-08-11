'use client';

import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';

export interface ImageFile {
  id: string;
  url: string;
  name: string;
}

interface ImageUploadProps {
  images: ImageFile[];
  onAddImages: (files: FileList | File[]) => void;
  onRemoveImage: (id: string) => void;
  maxFiles?: number;
  label?: string;
  helperText?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  images,
  onAddImages,
  onRemoveImage,
  maxFiles = 6,
  label = 'Photos / Images',
  helperText = 'Add photo or image files (PNG, JPG, WEBP up to 5MB each).',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onAddImages(e.target.files);
    }
  };

  return (
    <div className="space-y-1">
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
            {label}
          </label>

          <span className="text-[10px] font-extrabold text-[#09468e]">
            {images.length} / {maxFiles} Uploaded
          </span>
        </div>
      )}

      {/* Flex row of compact mini image cards */}
      <div className="flex flex-wrap gap-2 items-center pt-0.5">
        {/* Uploaded Image Cards */}
        {images.map((img) => (
          <div
            key={img.id}
            className="relative group w-20 h-14 rounded-md border border-[#737782]/25 overflow-hidden bg-white shadow-2xs shrink-0 transition-all hover:border-[#09468e]"
          >
            <img
              src={img.url}
              alt={img.name}
              className="w-full h-full object-cover"
            />

            {/* Red Cross Icon (Top Right) */}
            <button
              type="button"
              onClick={() => onRemoveImage(img.id)}
              className="absolute top-0.5 right-0.5 p-0.5 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all cursor-pointer shadow-xs z-10"
              title="Remove Image"
            >
              <X className="w-2.5 h-2.5" />
            </button>

            {/* Hover Caption */}
            <div className="absolute inset-x-0 bottom-0 bg-black/60 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[8px] font-semibold text-white truncate text-center leading-none">
                {img.name}
              </p>
            </div>
          </div>
        ))}

        {/* Add Image Button Card */}
        {images.length < maxFiles && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-20 h-14 rounded-md border border-dashed border-[#737782]/30 hover:border-[#ad2865] bg-[#f9f9ff] hover:bg-[#ffd9e3]/10 transition-all flex flex-col items-center justify-center p-1 cursor-pointer group shrink-0"
          >
            <Upload className="w-3.5 h-3.5 text-[#737782] group-hover:text-[#ad2865] transition-colors mb-0.5" />
            <span className="text-[9px] font-bold text-[#434751] group-hover:text-[#ad2865] text-center leading-none">
              upload
            </span>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
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

export default ImageUpload;
