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
  // { value: 'Event', label: 'Events Only' },
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
  const [catTypeInput, setCatTypeInput] = useState('All');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalError, setModalError] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Delete Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<CategoryItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Alert Modal State (for categories linked to posts)
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

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

  // Fetch dynamic type options from backend API (filter out Event for frontend UI)
  useEffect(() => {
    fetch('/api/categories/types')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && data.data && Array.isArray(data.data.categoryTypes)) {
          // Hide Event from frontend dropdown
          const filtered = data.data.categoryTypes.filter((t: TypeOption) => t.value !== 'Event');
          setTypeOptions(filtered);
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
    setCatTypeInput('All');
    setModalError('');
    setShowModal(true);
  };

  const handleOpenEditModal = (cat: CategoryItem) => {
    setEditingCategory(cat);
    setCatNameInput(cat.name);
    setCatTypeInput(cat.type || 'All');
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
    if (cat.itemCount > 0) {
      setAlertTitle('Cannot Delete Category');
      setAlertMessage(
        `Category "${cat.name}" cannot be deleted because it is currently linked with ${cat.itemCount} post${cat.itemCount > 1 ? 's' : ''}. Please reassign or delete the associated posts first before deleting this category.`
      );
      setAlertModalOpen(true);
      return;
    }
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
      const data = await res.json();

      if (res.ok && data.status === 'success') {
        showToast(`Category "${categoryToDelete.name}" deleted successfully!`);
        fetchCategories();
        setDeleteModalOpen(false);
        setCategoryToDelete(null);
      } else {
        setDeleteModalOpen(false);
        setCategoryToDelete(null);
        setAlertTitle('Cannot Delete Category');
        setAlertMessage(data.message || 'Cannot delete category because it is linked with posts.');
        setAlertModalOpen(true);
      }
    } catch (err: any) {
      console.error('Failed to delete category:', err);
      setDeleteModalOpen(false);
      setCategoryToDelete(null);
      setAlertTitle('Delete Error');
      setAlertMessage(err.message || 'Failed to delete category.');
      setAlertModalOpen(true);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-[#09468e] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-[14px] font-bold animate-in fade-in slide-in-from-top-2">
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
            className="explore_more_btn"
          >
            <Plus className="w-3 h-3" />
            <span>Add Category</span>
          </button>
        </div>
      </PageTitle>

      {/* Summary KPI Stats Cards (Compact, Sleek & Modern) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="bg-white px-3 py-2.5 rounded-lg brand-border shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#09468e]/10 text-[#09468e] flex items-center justify-center shrink-0">
            <FolderKanban className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-[#000000] uppercase tracking-wider font-['Roma-Semibold'] leading-none">Total Categories</div>
            <div className="text-base font-bold text-[#09468e] font-['Roma-Bold'] mt-1">{categories.length}</div>
          </div>
        </div>

        <div className="bg-white px-3 py-2.5 rounded-lg brand-border shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#89004a]/10 text-[#89004a] flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-[#000000] uppercase tracking-wider font-['Roma-Semibold'] leading-none">Active Modules</div>
            <div className="text-base font-bold text-[#89004a] font-['Roma-Bold'] mt-1 truncate" title="News, Blogs, Circulars & Notices">News, Blogs, Circulars & Notices</div>
          </div>
        </div>

        <div className="bg-white px-3 py-2.5 rounded-lg brand-border shadow-2xs flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-green-500/10 text-green-700 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-[#000000] uppercase tracking-wider font-['Roma-Semibold'] leading-none">Total Tagged Items</div>
            <div className="text-base font-bold text-green-700 font-['Roma-Bold'] mt-1">
              {categories.reduce((acc, c) => acc + (c.itemCount || 0), 0)}
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar: Search & Type Filter */}
      <div className="bg-white px-3 py-2 rounded-xl brand-border shadow-2xs flex flex-wrap items-center justify-between gap-2.5">
        <div className="relative flex-1 min-w-[200px] max-w-sm flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search categories..."
            className="filter-input filter-input-search w-full"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[14px]  text-[#000000]">Type Filter:</span>
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setCurrentPage(1);
            }}
            className="filter-input cursor-pointer"
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
      <div className="table-card admin-table-card  flex flex-col justify-between">
        {loading ? (
          <div className="py-16 flex items-center justify-center">
            <LogoLoader size="md" text="Loading Categories..." />
          </div>
        ) : (
          <div className="overflow-x-auto w-full flex-1 flex flex-col justify-between table-responsive admin-table-responsive">
            <table className="table governing-table w-full text-left min-w-[760px] mb-0">
              <thead className="admin-table-header">
                <tr>
                  <th className="py-2.5 px-4 text-center col-sr">Sr. No.</th>
                  <th className="py-2.5 px-4">Category Name</th>
                  <th className="py-2.5 px-4">Slug</th>
                  <th className="py-2.5 px-4">Target Type</th>
                  <th className="py-2.5 px-4 text-center">Tagged Items</th>
                  <th className="py-2.5 px-4 text-center w-28">Action</th>
                </tr>
              </thead>

              <tbody className="text-[15px] font-normal text-[#000000]">
                {categories.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-[#434751] font-normal text-[15px]">
                      No categories found matching your search.
                    </td>
                  </tr>
                ) : (
                  categories.map((cat, idx) => (
                    <tr key={cat.id}>
                      <td className="py-3 px-4 text-center col-sr">
                        <span className="sr-badge">{(currentPage - 1) * itemsPerPage + idx + 1}</span>
                      </td>
                      <td className="py-3 px-4 text-[#000000] font-normal text-[15px] capitalize">{cat.name}</td>
                      <td className="py-3 px-4 text-[#000000] font-normal text-[15px] lowercase normal-case slug-text">{cat.slug}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[14px] font-medium bg-[#09468e]/10 text-[#09468e] border border-[#09468e]/20 capitalize">
                          {cat.type === 'NewsEvent' ? 'All' : (cat.type ? cat.type.charAt(0).toUpperCase() + cat.type.slice(1).toLowerCase() : 'All')}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1.5 text-[13px] font-normal text-[#000000]">
                          <Tag className="w-3.5 h-3.5 text-[#ad2865]" />
                          <span>{cat.itemCount} Posts</span>
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
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => promptDelete(cat)}
                            className="table-action-btn table-btn-delete"
                            title={cat.itemCount > 0 ? `Cannot delete: Linked with ${cat.itemCount} post(s)` : 'Delete Category'}
                          >
                            <Trash2 className={`w-3.5 h-3.5 ${cat.itemCount > 0 ? 'text-slate-400' : ''}`} />
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
          entityName="categories"
          onPageChange={(p) => setCurrentPage(p)}
          onItemsPerPageChange={(limit) => {
            setItemsPerPage(limit);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Add / Edit Category Modal */}
      {showModal && (
        <div
          className="faculty-modal-overlay fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in duration-150"
          onClick={() => !isSubmitting && setShowModal(false)}
        >
          <div
            className="faculty-modal bg-white rounded-xl max-w-md w-full shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between gap-3 bg-[#f8fafc]/60">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className="w-7 h-7 rounded-md bg-[#09468e]/10 text-[#09468e] shrink-0 flex items-center justify-center">
                  <FolderKanban className="w-4 h-4 text-[#09468e]" />
                </div>
                <h4 className="modal-title text-[15px] font-semibold text-[#003067] truncate whitespace-nowrap leading-tight my-auto">
                  {editingCategory ? 'Edit Category' : 'Create New Category'}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="faculty-close modal-close-btn"
                title="Close modal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <form onSubmit={handleSaveCategory}>
              <div className="px-4 py-4 space-y-5">
                {modalError && (
                  <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[14px] font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{modalError}</span>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[#000000] font-['Avenir-Next-Demi'] block">
                    Category Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={catNameInput}
                    onChange={(e) => setCatNameInput(e.target.value)}
                    placeholder="e.g. Research & Development, Campus News..."
                    className="admin-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[#000000] font-['Avenir-Next-Demi'] block">
                    Specific Target Type
                  </label>
                  <select
                    value={catTypeInput}
                    onChange={(e) => setCatTypeInput(e.target.value)}
                    className="admin-select"
                  >
                    {typeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Modal Action Footer */}
              <div className="px-4 py-3 bg-[#f9f9ff] border-t border-[#1a1c20]/10 flex items-center justify-end">
                <Button
                  type="submit"
                  variant="gradient"
                  size="xs"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
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
      />

      {/* Alert Modal for Linked Categories or Errors */}
      <ConfirmModal
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => setAlertModalOpen(false)}
        title={alertTitle}
        message={alertMessage}
        confirmText="OK, Got It"
        variant="warning"
      />
    </div>
  );
}
