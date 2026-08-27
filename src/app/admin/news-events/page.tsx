'use client';

import React, { useState, useEffect } from 'react';
import { PageTitle } from '@/components/admin/PageTitle';
import { ContentSearchBar } from '@/components/admin/ContentSearchBar';
import { ContentTable, ContentItem } from '@/components/admin/ContentTable';
import { ContentPagination } from '@/components/admin/ContentPagination';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { LogoLoader } from '@/components/ui/LogoLoader';
import { authenticatedFetch } from '@/lib/auth';


export default function ContentLibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Dynamic Delete Confirmation Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<ContentItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setSelectedCategory('All');
    setSelectedStatus('All');
    setStartDate('');
    setEndDate('');
    setCurrentPage(1);
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
      });
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (selectedType !== 'All') params.append('contentType', selectedType);
      if (selectedCategory !== 'All') params.append('category', selectedCategory);
      if (selectedStatus !== 'All') params.append('status', selectedStatus);
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);

      const response = await fetch(`/api/news-events?${params.toString()}`);
      const data = await response.json();

      if (response.ok && data.status === 'success' && Array.isArray(data.data)) {
        const mappedItems: ContentItem[] = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          slug: `/news-events/${item.slug}`,
          rawSlug: item.slug,
          type: item.contentType?.toUpperCase() || 'NEWS',
          category: (item.category && item.category !== 'General') ? item.category : '—',
          status: item.status === 'Published' ? 'Active' : 'Inactive',
          thumbnailUrl: item.thumbnailUrl || '/images/news-and-events/newsandevents.webp',
          contentFormat: item.contentFormat,
          pdfUrl: item.pdfUrl,
          externalUrl: item.externalUrl,
          dateCreated: item.startDate
            ? new Date(item.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            : new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        }));
        setItems(mappedItems);
        setTotalItems(data.totalItems || mappedItems.length);
        setTotalPages(data.totalPages || 1);
      }
    } catch (err) {
      console.warn('Failed to fetch news events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [currentPage, itemsPerPage, searchQuery, selectedType, selectedCategory, selectedStatus, startDate, endDate]);

  const filteredItems = items;

  const handleView = (item: ContentItem) => {
    if (item.contentFormat === 'pdf' && item.pdfUrl && !item.pdfUrl.startsWith('blob:')) {
      window.open(item.pdfUrl, '_blank');
    } else if (item.contentFormat === 'link' && item.externalUrl) {
      window.open(item.externalUrl, '_blank');
    } else {
      const targetSlug = item.rawSlug || item.slug.replace('/post/', '').replace('/news-events/', '').replace('/blogs/', '');
      const pathPrefix = (item.type || '').toUpperCase() === 'BLOG' ? '/blogs/' : '/news-events/';
      window.open(`${pathPrefix}${targetSlug}`, '_blank');
    }
  };

  const handleEdit = (item: ContentItem) => {
    window.location.href = `/admin/news-events/create?id=${item.id}`;
  };

  const promptDelete = (item: ContentItem) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      setIsDeleting(true);
      const res = await authenticatedFetch(`/api/news-events/${itemToDelete.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setItems((prev) => prev.filter((i) => i.id !== itemToDelete.id));
        setTotalItems((prev) => Math.max(0, prev - 1));
      }
    } catch (err) {
      console.error('Delete failed:', err);
    } finally {
      setIsDeleting(false);
      setDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };

  const handleStatusChange = async (id: string | number, newStatus: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );

    try {
      const dbStatus = newStatus === 'Active' ? 'Published' : 'Draft';
      await authenticatedFetch(`/api/news-events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: dbStatus }),
      });
    } catch (err) {
      console.error('Status update failed:', err);
    }
  };



  return (
    <div className="space-y-4 w-full mx-auto">
      {/* Page Header */}
      <PageTitle
        subtitle="IMSCDR Management"
        title="News-Events & Blogs"
        description="Manage and publish your institution's digital assets."
      />
        <ContentSearchBar
          searchQuery={searchQuery}
          onSearchChange={(q) => { setSearchQuery(q); setCurrentPage(1); }}
          selectedType={selectedType}
          onTypeChange={(t) => { setSelectedType(t); setCurrentPage(1); }}
          selectedCategory={selectedCategory}
          onCategoryChange={(c) => { setSelectedCategory(c); setCurrentPage(1); }}
          selectedStatus={selectedStatus}
          onStatusChange={(s) => { setSelectedStatus(s); setCurrentPage(1); }}
          startDate={startDate}
          onStartDateChange={(d) => { setStartDate(d); setCurrentPage(1); }}
          endDate={endDate}
          onEndDateChange={(d) => { setEndDate(d); setCurrentPage(1); }}
          onResetFilters={handleResetFilters}
          createHref="/admin/news-events/create"
          createLabel="Create New"
        />

      {/* Single Cohesive Full Display Table & Pagination Card Container */}
      <div className="rounded-xl brand-border overflow-hidden bg-white shadow-2xs min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
        {loading ? (
          <div className="flex-1 py-20 flex items-center justify-center">
            <LogoLoader size="md" text="Loading Content Library..." />
          </div>
        ) : (
          <div className="overflow-x-auto w-full flex-1 flex flex-col justify-between">
            <ContentTable
              items={filteredItems}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={promptDelete}
              onStatusChange={handleStatusChange}
            />
          </div>
        )}
        <ContentPagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={(page) => setCurrentPage(page)}
          onItemsPerPageChange={(limit) => {
            setItemsPerPage(limit);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Reusable Dynamic Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => {
          if (!isDeleting) {
            setDeleteModalOpen(false);
            setItemToDelete(null);
          }
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Content?"
        message={
          itemToDelete
            ? `Are you sure you want to delete "${itemToDelete.title}"?`
            : 'Are you sure you want to delete this item?'
        }
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
        isLoading={isDeleting}
      />
    </div>
  );
}
