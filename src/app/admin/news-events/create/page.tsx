'use client';

import React, { useState, useEffect } from 'react';
import { PageTitle } from '@/components/admin/PageTitle';
import { Button } from '@/components/ui/Button';
import { BackButton } from '@/components/admin/BackButton';
import { ImageUpload, ImageFile } from '@/components/ui/ImageUpload';
import { PdfUpload, PdfFile } from '@/components/ui/PdfUpload';
import { RichTextEditor } from '@/components/ui/RichTextEditor';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { Plus, Calendar, X, ExternalLink } from 'lucide-react';
import { authenticatedFetch } from '@/lib/auth';

// Master Centralized Form Configuration Schema Object
const FORM_CONFIG = {
  TITLE: {
    label: 'Heading',
    placeholder: 'e.g. Annual Sports Day 2026 / Exam Schedule Notice...',
    required: true,
  },
  POST_TYPE: {
    label: 'Type of Post',
    required: true,
    options: [
      { value: '', label: 'Select Type' },
      { value: 'News', label: 'News' },
      { value: 'Event', label: 'Event' },
      { value: 'Blog', label: 'Blog' },
      { value: 'Notice', label: 'Notice' },
      { value: 'Circular', label: 'Circular' },
    ],
  },
  CATEGORY: {
    label: 'Category (Optional)',
    required: false,
  },
  START_DATE: {
    label: 'Start Date',
    required: false,
    iconColor: 'text-[#ad2865]',
  },
  END_DATE: {
    label: 'End Date',
    required: false,
    iconColor: 'text-[#09468e]',
  },
  WEB_LINK: {
    label: 'Web Link (Auto-generated)',
    domainPrefix: 'imscdr.ac.in/news-events/',
  },
  SUMMARY: {
    label: 'Short Description',
    placeholder: 'Write a brief 1-2 sentence summary to display in list preview (Optional)...',
    required: false,
  },
  DETAIL_FORMAT: {
    label: 'How do you want to add details?',
    required: true,
    options: [
      { id: 'description', label: 'Type Text / Write Description' },
      { id: 'pdf', label: 'Upload PDF File / Official Circular' },
      { id: 'link', label: 'Link' },
    ],
  },
  EXTERNAL_LINK: {
    label: 'Link',
    placeholder: 'https://example.com/notice or https://university.ac.in/...',
    required: true,
    helperText: 'When users click "Read More" on the website, they will be redirected to this link in a new tab.',
  },
  RICH_TEXT: {
    label: 'Full Details',
    placeholder: 'Type complete details, notice instructions, or event information here...',
  },
  PDF_UPLOAD: {
    label: 'PDF Notice or Circular File',
    helperText: 'Upload official PDF notice, circular, or timetable file (Max 10MB).',
  },
  IMAGE_UPLOAD: {
    label: 'Photos / Images (Cover & Gallery)',
    helperText: 'Add photos or event poster images(PNG, JPG, WEBP up to 5MB each).',
    maxFiles: 6,
  },
  ACTIONS: {
    cancel: 'Cancel & Go Back',
    save: 'Save & Publish Post',
    update: 'Update Post',
  },
};

const normalizeType = (t?: string | null): string => {
  if (!t || !t.trim()) return '';
  const clean = t.trim().toLowerCase();
  if (clean === 'news') return 'News';
  if (clean === 'event') return 'Event';
  if (clean === 'blog') return 'Blog';
  if (clean === 'notice' || clean === 'notices') return 'Notice';
  if (clean === 'circular' || clean === 'circulars') return 'Circular';
  return t.trim().charAt(0).toUpperCase() + t.trim().slice(1);
};

const normalizeFormat = (format?: string | null): 'description' | 'pdf' | 'link' => {
  if (!format) return 'description';
  const clean = format.trim().toLowerCase();
  if (clean === 'pdf') return 'pdf';
  if (clean === 'link') return 'link';
  return 'description';
};

export default function CreateNewsEventPage() {
  const [editId, setEditId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('your-title-here');
  const [contentHtml, setContentHtml] = useState('');
  const [externalUrl, setExternalUrl] = useState('');

  // Required Field Alert Modal State
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState('Required Field Missing');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState<'warning' | 'danger'>('warning');

  const showAlertModal = (msg: string, titleStr: string = 'Required Field Missing', variant: 'warning' | 'danger' = 'warning') => {
    setAlertTitle(titleStr);
    setAlertMessage(msg);
    setAlertVariant(variant);
    setAlertModalOpen(true);
  };

  // Gallery Images State
  const [galleryImages, setGalleryImages] = useState<ImageFile[]>([]);

  // PDF Document State
  const [attachedPdf, setAttachedPdf] = useState<PdfFile | null>(null);

  // Category state & Modal
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategoryInput, setNewCategoryInput] = useState('');

  const [contentType, setContentType] = useState('');
  const [summary, setSummary] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Content Format Type State: 'description' (Text Editor) vs 'pdf' (PDF Upload) vs 'link' (External Link)
  const [contentTypeOption, setContentTypeOption] = useState<'description' | 'pdf' | 'link'>('description');

  const isNoticeOrCircular = contentType === 'Notice' || contentType === 'Circular';

  const fetchCategories = async (typeToFetch: string, retainCategory?: string) => {
    try {
      const url = (typeToFetch && typeToFetch.trim() && typeToFetch !== 'All')
        ? `/api/categories?type=${encodeURIComponent(typeToFetch.trim())}`
        : '/api/categories';
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok && data.status === 'success' && Array.isArray(data.data)) {
        const names: string[] = data.data.map((c: any) => c.name);
        if (retainCategory && retainCategory.trim() && !names.includes(retainCategory.trim())) {
          names.unshift(retainCategory.trim());
        }
        setCategories(names);
      }
    } catch (err) {
      console.warn('Failed to load categories:', err);
    }
  };

  useEffect(() => {
    fetchCategories(contentType, selectedCategory);
  }, [contentType]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      setEditId(id);
      fetchExistingEntry(id);
    }
  }, []);

  const fetchExistingEntry = async (id: string) => {
    try {
      const res = await fetch(`/api/news-events/${id}`);
      const data = await res.json();
      if (res.ok && data.status === 'success' && data.data) {
        const item = data.data;
        setTitle(item.title || '');
        setSlug(item.slug || '');
        const normType = normalizeType(item.contentType);
        setContentType(normType);
        const existingCat = item.category || '';
        setSelectedCategory(existingCat);
        fetchCategories(normType, existingCat);

        setSummary(item.summary || '');
        if (item.startDate) {
          setStartDate(new Date(item.startDate).toISOString().split('T')[0]);
        }
        if (item.endDate) {
          setEndDate(new Date(item.endDate).toISOString().split('T')[0]);
        }
        setContentTypeOption(normalizeFormat(item.contentFormat));
        setContentHtml(item.contentHtml || '');
        setExternalUrl(item.externalUrl || '');

        if (item.pdfUrl && !item.pdfUrl.startsWith('blob:')) {
          const rawFileName = item.pdfUrl.split('/').pop() || 'Attached PDF Document.pdf';
          const fileName = decodeURIComponent(rawFileName);
          setAttachedPdf({
            id: 'pdf-existing',
            name: fileName,
            size: 'Attached',
            url: item.pdfUrl,
          });
        }

        if (Array.isArray(item.images) && item.images.length > 0) {
          setGalleryImages(
            item.images.map((url: string, index: number) => ({
              id: `img-${index}`,
              url,
              name: `Image-${index + 1}`,
            }))
          );
        }
      }
    } catch (err) {
      console.warn('Failed to load item for edit:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      showAlertModal('Please enter a Title / Heading for this post before publishing.', 'Title Required', 'warning');
      return;
    }

    if (!contentType || !contentType.trim()) {
      showAlertModal('Please select a Type of Post (News, Event, Blog, Notice, Circular) before publishing.', 'Post Type Required', 'warning');
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (!editId && startDate && startDate < todayStr) {
      showAlertModal('Start Date cannot be in the past. Please select today or a future date.', 'Invalid Date', 'warning');
      return;
    }

    if (startDate && endDate && endDate < startDate) {
      showAlertModal('End Date cannot be earlier than Start Date. Please select a valid date range.', 'Invalid Date Range', 'warning');
      return;
    }

    if (contentTypeOption === 'description') {
      const textOnly = contentHtml.replace(/<[^>]*>/g, '').trim();
      if (!textOnly && !contentHtml.includes('<img')) {
        showAlertModal('Please type the full details / description text for this post before publishing.', 'Details Required', 'warning');
        return;
      }
    } else if (contentTypeOption === 'pdf') {
      if (!attachedPdf || !attachedPdf.url) {
        showAlertModal('Please upload an official PDF Notice or Circular file before publishing.', 'PDF File Required', 'warning');
        return;
      }
    } else if (contentTypeOption === 'link') {
      if (!externalUrl || !externalUrl.trim()) {
        showAlertModal('Please enter a valid External Website Link URL before publishing.', 'Link URL Required', 'warning');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const imageUrls = isNoticeOrCircular ? [] : galleryImages.map((img) => img.url);

      const url = editId ? `/api/news-events/${editId}` : '/api/news-events';
      const method = editId ? 'PUT' : 'POST';

      const response = await authenticatedFetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          contentType: normalizeType(contentType),
          category: selectedCategory || 'General',
          startDate: startDate || null,
          endDate: isNoticeOrCircular ? null : (endDate || null),
          summary: isNoticeOrCircular ? null : (summary.trim() ? summary.trim() : null),
          contentFormat: contentTypeOption,
          contentHtml: (!isNoticeOrCircular && contentTypeOption === 'description') ? contentHtml : null,
          pdfUrl: contentTypeOption === 'pdf' ? attachedPdf?.url : null,
          externalUrl: contentTypeOption === 'link' ? externalUrl : null,
          images: imageUrls,
          thumbnailUrl: imageUrls.length > 0 ? imageUrls[0] : null,
          status: 'Published',
        }),
      });

      const data = await response.json();

      if (!response.ok || data.status !== 'success') {
        throw new Error(data.message || 'Failed to save entry.');
      }

      // Success -> Redirect to News & Events Content List
      window.location.href = '/admin/news-events';
    } catch (err: any) {
      showAlertModal(err.message || 'Failed to save entry. Please try again.', 'Error Saving Post', 'danger');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!val.trim()) {
      setSlug('your-title-here');
    } else {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^\w ]+/g, '')
          .replace(/ +/g, '-')
      );
    }
  };

  const handleAddGalleryImages = async (files: FileList | File[]) => {
    const token = localStorage.getItem('adminToken');
    const uploads = await Promise.all(
      Array.from(files).map(async (file) => {
        const form = new FormData();
        form.append('file', file);
        const res = await fetch('/api/upload/image', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: form,
        });
        const data = await res.json();
        if (res.ok && data.status === 'success') {
          return {
            id: Math.random().toString(36).substring(2, 9),
            url: data.url,
            name: file.name,
          };
        }
        return null;
      })
    );
    const successful = uploads.filter(Boolean) as ImageFile[];
    setGalleryImages((prev) => [...prev, ...successful]);
  };

  const handleRemoveGalleryImage = (id: string) => {
    setGalleryImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleSelectPdf = async (file: File) => {
    const token = localStorage.getItem('adminToken');
    const form = new FormData();
    form.append('file', file);

    const res = await fetch('/api/upload/pdf', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });
    const data = await res.json();

    if (res.ok && data.status === 'success') {
      const sizeKb = (file.size / 1024).toFixed(0);
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      const sizeStr = file.size > 1024 * 1024 ? `${sizeMb} MB` : `${sizeKb} KB`;

      setAttachedPdf({
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        size: sizeStr,
        url: data.url,   // ← permanent server URL, NOT blob:
      });
    } else {
      showAlertModal(data.message || 'PDF upload failed. Please try again.', 'PDF Upload Failed', 'danger');
    }
  };

  const handleRemovePdf = () => {
    setAttachedPdf(null);
  };

  const handleAddCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newCategoryInput.trim();
    if (!trimmed) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: trimmed, type: contentType }),
      });
      const data = await res.json();

      if (res.ok && data.status === 'success' && data.data) {
        const createdName = data.data.name;
        if (!categories.includes(createdName)) {
          setCategories((prev) => [...prev, createdName]);
        }
        setSelectedCategory(createdName);
      } else {
        if (!categories.includes(trimmed)) {
          setCategories((prev) => [...prev, trimmed]);
        }
        setSelectedCategory(trimmed);
      }
    } catch (err) {
      if (!categories.includes(trimmed)) {
        setCategories((prev) => [...prev, trimmed]);
      }
      setSelectedCategory(trimmed);
    } finally {
      setNewCategoryInput('');
      setShowCategoryModal(false);
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const minStartDate = editId && startDate && startDate < todayStr ? startDate : todayStr;
  const minEndDate = startDate ? (startDate > todayStr ? startDate : todayStr) : todayStr;

  return (
    <div className="max-w-[1150px] w-full mx-auto space-y-3 pb-4 pt-1">
      {/* Page Header */}
      <PageTitle showBack backHref="/admin/news-events" title={editId ? 'Edit Post' : 'Add News, Event, Blog, Notice, Circulars'} />

      {/* Single Clean Form Card */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl brand-border overflow-hidden shadow-2xs">
        <div className="p-3 sm:p-4 space-y-3.5">

          {/* Article Title */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
              {FORM_CONFIG.TITLE.label} {FORM_CONFIG.TITLE.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              required={FORM_CONFIG.TITLE.required}
              value={title}
              onChange={handleTitleChange}
              placeholder={FORM_CONFIG.TITLE.placeholder}
              className="w-full px-3.5 py-2 rounded-lg brand-border focus:border-[#09468e] focus:ring-2 focus:ring-[#09468e]/10 text-xs font-normal text-[#1a1c20] transition-all outline-none"
            />
          </div>

          {/* Type & Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                {FORM_CONFIG.POST_TYPE.label} {FORM_CONFIG.POST_TYPE.required && <span className="text-red-500">*</span>}
              </label>
              <select
                required={FORM_CONFIG.POST_TYPE.required}
                value={contentType}
                onChange={(e) => {
                  const val = normalizeType(e.target.value);
                  setContentType(val);
                  fetchCategories(val);
                  if (val === 'Notice' || val === 'Circular') {
                    if (contentTypeOption === 'description') {
                      setContentTypeOption('pdf');
                    }
                  }
                }}
                className="w-full px-3.5 py-2 rounded-lg brand-border focus:border-[#09468e] text-xs bg-white cursor-pointer outline-none font-normal text-[#1a1c20]"
              >
                {FORM_CONFIG.POST_TYPE.options.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider block">
                {FORM_CONFIG.CATEGORY.label} {FORM_CONFIG.CATEGORY.required && <span className="text-red-500">*</span>}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg brand-border focus:border-[#09468e] text-xs bg-white outline-none font-normal text-[#1a1c20] cursor-pointer"
              >
                <option value="">Select Category</option>
                {selectedCategory && !categories.includes(selectedCategory) && (
                  <option key={selectedCategory} value={selectedCategory}>
                    {selectedCategory}
                  </option>
                )}
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Start Date & End Date Grid (Single Date for Notice/Circular) */}
          {isNoticeOrCircular ? (
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider !flex !flex-row !items-center gap-1.5">
                <Calendar className={`w-3.5 h-3.5 ${FORM_CONFIG.START_DATE.iconColor} shrink-0`} />
                <span>Notice / Circular Date</span>
              </label>
              <input
                type="date"
                min={minStartDate}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg brand-border text-xs outline-none font-normal text-[#1a1c20]"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider !flex !flex-row !items-center gap-1.5">
                  <Calendar className={`w-3.5 h-3.5 ${FORM_CONFIG.START_DATE.iconColor} shrink-0`} />
                  <span>{FORM_CONFIG.START_DATE.label}</span>
                </label>
                <input
                  type="date"
                  min={minStartDate}
                  value={startDate}
                  onChange={(e) => {
                    const newStart = e.target.value;
                    setStartDate(newStart);
                    if (endDate && newStart && endDate < newStart) {
                      setEndDate(newStart);
                    }
                  }}
                  className="w-full px-3.5 py-2 rounded-lg brand-border text-xs outline-none font-normal text-[#1a1c20]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider !flex !flex-row !items-center gap-1.5">
                  <Calendar className={`w-3.5 h-3.5 ${FORM_CONFIG.END_DATE.iconColor} shrink-0`} />
                  <span>{FORM_CONFIG.END_DATE.label}</span>
                </label>
                <input
                  type="date"
                  min={minEndDate}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg brand-border text-xs outline-none font-normal text-[#1a1c20]"
                />
              </div>
            </div>
          )}

          {/* Short Summary (Hidden for Notice / Circular) */}
          {!isNoticeOrCircular && (
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                {FORM_CONFIG.SUMMARY.label} {FORM_CONFIG.SUMMARY.required && <span className="text-red-500">*</span>}
              </label>
              <textarea
                required={FORM_CONFIG.SUMMARY.required}
                rows={2.5}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder={FORM_CONFIG.SUMMARY.placeholder}
                className="w-full px-3.5 py-2.5 rounded-lg brand-border focus:border-[#09468e] text-xs transition-all outline-none resize-none font-normal text-[#1a1c20] leading-relaxed"
              />
            </div>
          )}

          {/* Radio Button Format Selector (Text vs PDF vs External Link) */}
          <div className="space-y-2 p-3 sm:p-3.5 rounded-xl bg-[#f8fafc] border border-[#09468e]/15">
            <label className="text-[10px] font-bold text-[#003067] uppercase tracking-wider block font-['Roma-Semibold']">
              {FORM_CONFIG.DETAIL_FORMAT.label} {FORM_CONFIG.DETAIL_FORMAT.required && <span className="text-red-500">*</span>}
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-1">
              {(isNoticeOrCircular
                ? FORM_CONFIG.DETAIL_FORMAT.options.filter((opt) => opt.id !== 'description')
                : FORM_CONFIG.DETAIL_FORMAT.options
              ).map((opt) => {
                const isSelected = contentTypeOption === opt.id;
                return (
                  <label
                    key={opt.id}
                    onClick={() => setContentTypeOption(opt.id as any)}
                    className={`!inline-flex !items-center gap-2 px-3.5 py-2 rounded-lg border text-xs font-semibold cursor-pointer transition-all select-none ${isSelected
                      ? 'bg-blue-50/90 border-[#09468e] text-[#09468e] shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                  >
                    <input
                      type="radio"
                      name="contentTypeOption"
                      value={opt.id}
                      checked={isSelected}
                      onChange={() => setContentTypeOption(opt.id as any)}
                      className="w-3.5 h-3.5 text-[#09468e] focus:ring-[#09468e] cursor-pointer shrink-0 accent-[#09468e]"
                    />
                    <span className="font-['Avenir-Next-Demi'] leading-none">{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Conditional Display Based on Radio Button Selection */}
          {contentTypeOption === 'pdf' ? (
            <div className="animate-in fade-in duration-150">
              <PdfUpload
                pdf={attachedPdf}
                onSelectPdf={handleSelectPdf}
                onRemovePdf={handleRemovePdf}
                label={FORM_CONFIG.PDF_UPLOAD.label}
                helperText={FORM_CONFIG.PDF_UPLOAD.helperText}
              />
            </div>
          ) : contentTypeOption === 'link' ? (
            <div className="space-y-1.5 animate-in fade-in duration-150">
              <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider flex items-center gap-1.5">
                <span>{FORM_CONFIG.EXTERNAL_LINK.label} {FORM_CONFIG.EXTERNAL_LINK.required && <span className="text-red-500">*</span>}</span>
              </label>
              <input
                type="url"
                required={contentTypeOption === 'link'}
                value={externalUrl}
                onChange={(e) => setExternalUrl(e.target.value)}
                placeholder={FORM_CONFIG.EXTERNAL_LINK.placeholder}
                className="w-full px-3.5 py-2 rounded-lg brand-border focus:border-[#09468e] focus:ring-2 focus:ring-[#09468e]/10 text-xs font-normal text-[#1a1c20] transition-all outline-none"
              />
              <p className="text-[11px] text-slate-500 font-medium">
                {FORM_CONFIG.EXTERNAL_LINK.helperText}
              </p>
            </div>
          ) : (
            <div className="space-y-1 animate-in fade-in duration-150">
              <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                {FORM_CONFIG.RICH_TEXT.label}
              </label>
              <RichTextEditor
                value={contentHtml}
                onChange={setContentHtml}
                placeholder={FORM_CONFIG.RICH_TEXT.placeholder}
              />
            </div>
          )}

          {/* Media Upload (Hidden for Notice / Circular) */}
          {!isNoticeOrCircular && (
            <ImageUpload
              images={galleryImages}
              onAddImages={handleAddGalleryImages}
              onRemoveImage={handleRemoveGalleryImage}
              maxFiles={FORM_CONFIG.IMAGE_UPLOAD.maxFiles}
              label={FORM_CONFIG.IMAGE_UPLOAD.label}
              helperText={FORM_CONFIG.IMAGE_UPLOAD.helperText}
            />
          )}
        </div>

        {/* Form Action Footer */}
        <div className="px-3 sm:px-4 py-3 bg-[#f3f7fc] border-t border-[#09468e]/15 flex items-center justify-between gap-3">
          <BackButton label={FORM_CONFIG.ACTIONS.cancel} href="/admin/news-events" />

          <Button
            type="submit"
            variant="gradient"
            size="sm"
            pill={false}
            isLoading={isSubmitting}
            disabled={isSubmitting}
            className="h-8.5 rounded-lg cursor-pointer"
          >
            {editId ? FORM_CONFIG.ACTIONS.update : FORM_CONFIG.ACTIONS.save}
          </Button>
        </div>
      </form>

      {/* Add New Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl brand-border shadow-xl max-w-[390px] w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <form onSubmit={handleAddCategorySubmit}>
              {/* Header */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="w-7 h-7 rounded-md border bg-blue-50 text-[#09468e] border-blue-200 shrink-0 flex items-center justify-center">
                      <Plus className="w-3.5 h-3.5 text-[#09468e]" />
                    </div>
                    <h4 className="modal-title text-sm font-bold text-[#003067] truncate leading-tight my-auto">
                      Add New Category
                    </h4>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowCategoryModal(false)}
                    className="modal-close-btn"
                    title="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Target Type Info Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50/60 border border-blue-100 text-[11px] font-semibold text-[#09468e]">
                  <span>Target Type:</span>
                  <span className="font-extrabold uppercase bg-white px-2 py-0.5 rounded border border-blue-200 text-[#09468e]">
                    {contentType}
                  </span>
                </div>

                {/* Category Input Field */}
                <div className="space-y-1 pt-0.5">
                  <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                    Category Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    value={newCategoryInput}
                    onChange={(e) => setNewCategoryInput(e.target.value)}
                    placeholder="e.g. Exam Notices, Sports, Workshops..."
                    className="w-full px-3 py-2 rounded-lg brand-border text-xs outline-none focus:ring-2 focus:ring-[#09468e]/20 font-normal text-[#1a1c20] transition-all"
                  />
                  <p className="text-[11px] text-slate-500 font-normal pt-0.5">
                    This category will be saved under <strong>{contentType}</strong> section.
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-4 py-2.5 bg-[#f9f9ff] border-t border-[#1a1c20]/10 flex items-center justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="xs"
                  onClick={() => setShowCategoryModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="gradient" size="xs">
                  + Add Category
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Validation & Error Alert Popup Modal */}
      <ConfirmModal
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => setAlertModalOpen(false)}
        title={alertTitle}
        message={alertMessage}
        confirmText="OK, Got It"
        cancelText=""
        variant={alertVariant}
      />
    </div>
  );
}
