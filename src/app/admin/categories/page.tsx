'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { PageTitle } from '@/components/admin/PageTitle';
import { Button } from '@/components/ui/Button';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { LogoLoader } from '@/components/ui/LogoLoader';
import { ContentPagination } from '@/components/admin/ContentPagination';
import {
  FolderKanban,
  Plus,
  Search,
  Edit3,
  Trash2,
  Tag,
  Layers,
  FileText,
  X,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { authenticatedFetch } from '@/lib/auth';

interface CategoryItem {
  id: number;
  name: string;
  slug: string;
  type: string;
  itemCount: number;
  createdAt: string;
}

interface TypeOption {
  value: string;
  label: string;
}

const DEFAULT_TYPE_OPTIONS: TypeOption[] = [
  { value: 'Notice', label: 'Notices Only' },
  { value: 'Circular', label: 'Circulars Only' },
  { value: 'Notice,Circular', label: 'Notices & Circulars' },
  { value: 'News', label: 'News Only' },
  { value: 'Event', label: 'Events Only' },
  { value: 'Blog', label: 'Blogs Only' },
  { value: 'All', label: 'Universal / All Modules' },
];

export default function CategoryManagementPage() {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [typeOptions, setTypeOptions] = useState<TypeOption[]>(DEFAULT_TYPE_OPTIONS);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Add / Edit Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryItem | null>(null);
  const [catNameInput, setCatNameInput] = useState('');
  const [catTypeInput, setCatTypeInput] = useState('NewsEvent');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalError, setModalError] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Delete Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<CategoryItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
      });
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (filterType !== 'All') params.append('type', filterType);

      const res = await fetch(`/api/categories?${params.toString()}`);
      const data = await res.json();
      if (res.ok && data.status === 'success' && Array.isArray(data.data)) {
        setCategories(data.data);
        setTotalItems(data.totalItems || data.data.length);
        setTotalPages(data.totalPages || 1);
      }
    } catch (err) {
      console.warn('Failed to load categories:', err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, filterType, currentPage, itemsPerPage]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Fetch dynamic type options from backend API
  useEffect(() => {
    fetch('/api/categories/types')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && data.data && Array.isArray(data.data.categoryTypes)) {
          setTypeOptions(data.data.categoryTypes);
        }
      })
      .catch((err) => console.warn('Failed to load category types:', err));
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleOpenAddModal = () => {
    setEditingCategory(null);
    setCatNameInput('');
    setCatTypeInput('NewsEvent');
    setModalError('');
    setShowModal(true);
  };

  const handleOpenEditModal = (cat: CategoryItem) => {
    setEditingCategory(cat);
    setCatNameInput(cat.name);
    setCatTypeInput(cat.type || 'NewsEvent');
    setModalError('');
    setShowModal(true);
  };

  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError('');

    if (!catNameInput.trim()) {
      setModalError('Category name is required.');
      return;
    }

    setIsSubmitting(true);
    try {
      const isEdit = !!editingCategory;
      const url = isEdit ? `/api/categories/${editingCategory.id}` : '/api/categories';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await authenticatedFetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: catNameInput.trim(),
          type: catTypeInput,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.status !== 'success') {
        throw new Error(data.message || 'Failed to save category.');
      }

      showToast(isEdit ? 'Category updated successfully!' : 'Category created successfully!');
      setShowModal(false);
      fetchCategories();
    } catch (err: any) {
      setModalError(err.message || 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const promptDelete = (cat: CategoryItem) => {
    setCategoryToDelete(cat);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!categoryToDelete) return;
    try {
      setIsDeleting(true);
      const res = await authenticatedFetch(`/api/categories/${categoryToDelete.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        showToast(`Category "${categoryToDelete.name}" deleted successfully!`);
        fetchCategories();
      }
    } catch (err) {
      console.error('Failed to delete category:', err);
    } finally {
      setIsDeleting(false);
      setDeleteModalOpen(false);
      setCategoryToDelete(null);
    }
  };

  return (
    <div className="space-y-4 max-w-[1200px] w-full mx-auto">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-[#09468e] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-green-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <PageTitle
        subtitle="IMSCDR Management"
        title="Category Management"
        description="Create, edit, and organize content categories for specific types."
      >
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleOpenAddModal}
            className="explore_more_btn !h-7 !px-3 !text-[11px] !font-bold"
          >
            <Plus className="w-3 h-3" />
            <span>Add Category</span>
          </button>
        </div>
      </PageTitle>

      {/* Summary KPI Stats Cards (Compact, Sleek & Modern) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="bg-white px-3 py-2 rounded-lg brand-border shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#09468e]/10 text-[#09468e] flex items-center justify-center shrink-0">
            <FolderKanban className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[9.5px] font-extrabold text-[#000000] uppercase tracking-wider leading-none">Total Categories</div>
            <div className="text-sm font-black text-[#09468e] mt-0.5">{categories.length}</div>
          </div>
        </div>

        <div className="bg-white px-3 py-2 rounded-lg brand-border shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#89004a]/10 text-[#89004a] flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[9.5px] font-extrabold text-[#000000] uppercase tracking-wider leading-none">Active Modules</div>
            <div className="text-sm font-black text-[#89004a] mt-0.5 truncate" title="News, Notices, Events & Circulars">News, Events &amp; Circulars</div>
          </div>
        </div>

        <div className="bg-white px-3 py-2 rounded-lg brand-border shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-green-500/10 text-green-700 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[9.5px] font-extrabold text-[#000000] uppercase tracking-wider leading-none">Total Tagged Items</div>
            <div className="text-sm font-black text-green-700 mt-0.5">
              {categories.reduce((acc, c) => acc + (c.itemCount || 0), 0)}
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar: Search & Type Filter */}
      <div className="bg-white p-3 rounded-xl brand-border shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search categories..."
            className="pl-9 pr-4 h-8 bg-[#f8fafc] border border-slate-200 rounded-lg text-xs text-[#000000] placeholder:text-slate-400 hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 w-full outline-none transition-all search-input"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#000000]">Type Filter:</span>
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-[#f8fafc] border border-slate-200 rounded-lg px-2.5 h-8 text-xs font-semibold text-[#000000] hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 outline-none cursor-pointer transition-all"
          >
            <option value="All">All Types</option>
            {typeOptions
              .filter((opt) => opt.value !== 'All')
              .map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Main Categories Table Container */}
      <div className="admin-table-card min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
        {loading ? (
          <div className="py-16 flex items-center justify-center">
            <LogoLoader size="md" text="Loading Categories..." />
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="admin-table-header">
                <tr>
                  <th className="py-2.5 px-4 w-12 text-center">Sr.</th>
                  <th className="py-2.5 px-4">Category Name</th>
                  <th className="py-2.5 px-4">Slug</th>
                  <th className="py-2.5 px-4">Target Type</th>
                  <th className="py-2.5 px-4 text-center">Tagged Items</th>
                  <th className="py-2.5 px-4 text-center w-28">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-[#000000]">
                {categories.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-[#000000]">
                      No categories found matching your search.
                    </td>
                  </tr>
                ) : (
                  categories.map((cat, idx) => (
                    <tr key={cat.id} className="hover:bg-[#09468e]/[0.02] transition-colors">
                      <td className="py-3 px-4 text-center font-['Roma-Semibold'] text-[#000000] text-xs w-12">
                        {(currentPage - 1) * itemsPerPage + idx + 1}
                      </td>
                      <td className="py-3 px-4 font-bold text-[#000000]">{cat.name}</td>
                      <td className="py-3 px-4 text-[#000000] font-mono text-[11px]">{cat.slug}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#09468e]/10 text-[#09468e] border border-[#09468e]/20 uppercase">
                          {cat.type || 'NewsEvent'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-[#000000]">
                          <Tag className="w-3 h-3 text-[#ad2865]" />
                          {cat.itemCount} posts
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(cat)}
                            className="table-action-btn table-btn-edit"
                            title="Edit Category"
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => promptDelete(cat)}
                            className="table-action-btn table-btn-delete"
                            title="Delete Category"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Categories Pagination Bar */}
        <ContentPagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={(p) => setCurrentPage(p)}
          onItemsPerPageChange={(limit) => {
            setItemsPerPage(limit);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Add / Edit Category Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl max-w-md w-full brand-border shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-3.5 sm:p-4 border-b border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className="w-7 h-7 rounded-md bg-[#09468e]/10 text-[#09468e] shrink-0 flex items-center justify-center">
                  <FolderKanban className="w-4 h-4 text-[#09468e]" />
                </div>
                <h4 className="modal-title text-sm font-bold text-[#003067] truncate whitespace-nowrap leading-tight my-auto">
                  {editingCategory ? 'Edit Category' : 'Create New Category'}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="modal-close-btn"
                title="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="p-4 space-y-3.5">
              {modalError && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{modalError}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                  Category Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={catNameInput}
                  onChange={(e) => setCatNameInput(e.target.value)}
                  placeholder="e.g. Research & Development, Campus News..."
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-3 py-2 text-xs font-normal text-[#1a1c20] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#434751] uppercase tracking-wider">
                  Specific Target Type
                </label>
                <select
                  value={catTypeInput}
                  onChange={(e) => setCatTypeInput(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-3 py-2 text-xs font-normal text-[#1a1c20] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 outline-none cursor-pointer"
                >
                  {typeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Modal Action Footer */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100 mt-4">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowModal(false)}
                  className="h-8.5 rounded-lg border border-slate-200 text-slate-600"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="gradient"
                  size="sm"
                  pill={false}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="h-8.5 rounded-lg cursor-pointer"
                >
                  {editingCategory ? 'Update Category' : 'Create Category'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Category Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => {
          if (!isDeleting) {
            setDeleteModalOpen(false);
            setCategoryToDelete(null);
          }
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Category?"
        message={
          categoryToDelete
            ? `Are you sure you want to delete category "${categoryToDelete.name}"?`
            : 'Are you sure you want to delete this category?'
        }
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
}
