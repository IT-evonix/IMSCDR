'use client';

import React, { useState, useEffect } from 'react';
import { PageTitle } from '@/components/admin/PageTitle';
import { ContentPagination } from '@/components/admin/ContentPagination';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import {
  GraduationCap,
  Eye,
  Trash2,
  Phone,
  User,
  Mail,
  MapPin,
  X,
  Inbox,
  Clock,
  FileSpreadsheet,
  Search,
  RotateCcw,
} from 'lucide-react';
import { authenticatedFetch } from '@/lib/auth';

interface EnquiryItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  course: string;
  address?: string | null;
  message: string;
  createdAt: string;
}

const COURSE_FILTER_OPTIONS = [
  { value: 'All', label: 'All Programs' },
  { value: 'MBA', label: 'MBA' },
  { value: 'MCA', label: 'MCA' },
  { value: 'BBA', label: 'BBA' },
  { value: 'BCA', label: 'BCA' },
  { value: 'Ph.D', label: 'Ph.D' },
];

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Selected Enquiry Modal
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(null);

  // Delete Modal State
  const [enquiryToDelete, setEnquiryToDelete] = useState<EnquiryItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Export state
  const [isExporting, setIsExporting] = useState(false);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
      });

      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (selectedCourse && selectedCourse !== 'All') params.append('course', selectedCourse);
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);

      const res = await authenticatedFetch(`/api/enquiries?${params.toString()}`);
      const data = await res.json();

      if (res.ok && data.status === 'success' && Array.isArray(data.data)) {
        setEnquiries(data.data);
        setTotalItems(data.totalItems || data.data.length);
        setTotalPages(data.totalPages || 1);
      }
    } catch (err) {
      console.warn('Failed to fetch admission enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [currentPage, itemsPerPage, searchQuery, selectedCourse, startDate, endDate]);

  const confirmDelete = async () => {
    if (!enquiryToDelete) return;
    setIsDeleting(true);
    try {
      const res = await authenticatedFetch(`/api/enquiries/${enquiryToDelete.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setEnquiryToDelete(null);
        if (selectedEnquiry?.id === enquiryToDelete.id) {
          setSelectedEnquiry(null);
        }
        await fetchEnquiries();
      }
    } catch (err) {
      console.error('Delete enquiry error:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleExportExcel = async () => {
    setIsExporting(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (selectedCourse && selectedCourse !== 'All') params.append('course', selectedCourse);

      const res = await authenticatedFetch(`/api/enquiries/export?${params.toString()}`);

      if (!res.ok) throw new Error('Failed to download Excel file');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const today = new Date().toISOString().split('T')[0];
      a.download = `IMSCDR_Admission_Enquiries_${today}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Export Excel error:', err);
      alert('Could not export enquiries Excel file. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Header & Export Action */}
      <PageTitle
        showBack={false}
        subtitle="IMSCDR Management"
        title="Admission Enquiries"
        description="Review and manage student admission and course enquiry submissions."
      >
        <button
          type="button"
          onClick={handleExportExcel}
          disabled={isExporting}
          className="admission-btn"
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>{isExporting ? 'Exporting...' : 'Export to Excel'}</span>
        </button>
      </PageTitle>

      {/* Search & Filter Bar */}
      <div className="bg-white px-3 py-2 rounded-xl brand-border shadow-2xs flex flex-wrap items-center justify-between gap-2.5">
        {/* Search Field */}
        <div className="relative flex-1 min-w-[200px] max-w-sm flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by name, email, phone, address..."
            className="filter-input filter-input-search w-full"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Course Filter Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[14px]  text-[#000000]">Course:</span>
            <select
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                setCurrentPage(1);
              }}
              className="filter-input cursor-pointer"
            >
              {COURSE_FILTER_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range */}
          <div className="flex items-center gap-1.5">
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setCurrentPage(1);
              }}
              className="filter-input cursor-pointer"
              title="From date"
            />
            <span className="text-[14px] text-slate-400 font-medium">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setCurrentPage(1);
              }}
              className="filter-input cursor-pointer"
              title="To date"
            />
          </div>

          {/* Reset Filters */}
          {(searchQuery || selectedCourse !== 'All' || startDate || endDate) && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCourse('All');
                setStartDate('');
                setEndDate('');
                setCurrentPage(1);
              }}
              className="flex items-center gap-1 text-[14px] font-bold text-[#ad2865] hover:underline cursor-pointer px-1.5 py-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Enquiries Table Card Container */}
      <div className="table-card admin-table-card flex flex-col justify-between">
        {loading ? (
          <div className="flex-1 py-20 flex items-center justify-center text-[14px] font-semibold text-[#000000]">
            Loading admission enquiries...
          </div>
        ) : enquiries.length === 0 ? (
          <div className="flex-1 py-20 flex flex-col items-center justify-center text-[#000000] space-y-2">
            <Inbox className="w-8 h-8 mx-auto text-[#000000]/40" />
            <p className="text-[14px] font-semibold">No admission enquiries found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto w-full flex-1 flex flex-col justify-between table-responsive admin-table-responsive">
            <table className="table governing-table w-full text-left min-w-[760px] mb-0">
              <thead className="admin-table-header">
                <tr>
                  <th className="py-2.5 px-4 text-center col-sr">Sr. No.</th>
                  <th className="py-2.5 px-4">Candidate Name</th>
                  <th className="py-2.5 px-4">Email &amp; Mobile</th>
                  <th className="py-2.5 px-4 text-center">Course</th>
                  <th className="py-2.5 px-4">Address / City</th>
                  <th className="py-2.5 px-4">Enquiry Message</th>
                  <th className="py-2.5 px-4">Date</th>
                  <th className="py-2.5 px-4 text-center w-28">Action</th>
                </tr>
              </thead>

              <tbody className="text-[15px] font-normal text-[#000000]">
                {enquiries.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedEnquiry(item)}
                  >
                    {/* Sr. No */}
                    <td className="py-3 px-4 text-center col-sr">
                      <span className="sr-badge">{(currentPage - 1) * itemsPerPage + idx + 1}</span>
                    </td>

                    {/* Candidate Name */}
                    <td className="py-3 px-4 align-middle">
                      <div className="font-normal text-[#000000] flex items-center gap-1.5 text-[14px] capitalize">
                        <User className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
                        <span>{item.name}</span>
                      </div>
                    </td>

                    {/* Contact Details */}
                    <td className="py-3 px-4 align-middle">
                      <div className="text-[#000000] font-normal flex items-center gap-1 text-[14px] lowercase normal-case email-text">
                        <Mail className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
                        <span>{item.email}</span>
                      </div>
                      <div className="text-[14px] text-[#000000]/80 font-normal mt-0.5 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{item.phone}</span>
                      </div>
                    </td>

                    {/* Course Badge */}
                    <td className="py-3 px-4 text-center align-middle">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[12px] font-medium bg-[#09468e]/10 text-[#09468e] border border-[#09468e]/20 uppercase">
                        {item.course}
                      </span>
                    </td>

                    {/* Address / City */}
                    <td className="py-3 px-4 align-middle text-[#000000] max-w-[160px] truncate font-normal text-[14px] capitalize">
                      {item.address ? (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{item.address}</span>
                        </span>
                      ) : (
                        <span className="text-slate-400 font-normal italic">N/A</span>
                      )}
                    </td>

                    {/* Enquiry Message */}
                    <td className="py-3 px-4 align-middle max-w-[240px]">
                      <div className="text-[13px] text-[#000000]/85 line-clamp-2 font-normal capitalize">
                        {item.message}
                      </div>
                    </td>

                    {/* Received Date */}
                    <td className="py-3 px-4 align-middle text-[14px] text-[#000000] font-medium whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-center align-middle whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => setSelectedEnquiry(item)}
                          className="table-action-btn table-btn-view"
                          title="View Full Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        {/* <button
                          type="button"
                          onClick={() => setEnquiryToDelete(item)}
                          className="table-action-btn table-btn-delete"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Bar */}
        <ContentPagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          entityName="enquiries"
          onPageChange={(p) => setCurrentPage(p)}
          onItemsPerPageChange={(limit) => {
            setItemsPerPage(limit);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Full Message Reader Modal */}
      {selectedEnquiry && (
        <div
          className="faculty-modal-overlay fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setSelectedEnquiry(null)}
        >
          <div
            className="faculty-modal bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-[950px] w-full overflow-hidden relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between gap-3 bg-[#f8fafc]/60">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className="w-7 h-7 rounded-md bg-[#09468e]/10 text-[#09468e] shrink-0 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-[#09468e]" />
                </div>
                <h4 className="modal-title text-[15px] font-semibold text-[#000000] truncate leading-tight my-auto">
                  Admission Enquiry Details
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="faculty-close modal-close-btn"
                title="Close modal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 pb-5 sm:pb-6 space-y-3.5 max-h-[75vh] overflow-y-auto">
              {/* Received Date Bar */}
              <div className="flex items-center gap-1.5 text-[13px] text-[#64748b] font-normal px-0.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>
                  Received on:{' '}
                  <span className="text-[#000000] font-normal">
                    {new Date(selectedEnquiry.createdAt).toLocaleString()}
                  </span>
                </span>
              </div>

              {/* Candidate Info Grid */}
              <div className="p-3.5 bg-[#f8fafc] rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[14px]">
                <div>
                  <span className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">Candidate Name</span>
                  <div className="flex items-center gap-1.5 mt-1 font-normal text-[15px] text-[#000000] capitalize">
                    <User className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
                    <span>{selectedEnquiry.name}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">Applied Course</span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="font-normal text-[#09468e] bg-[#09468e]/10 px-2.5 py-0.5 rounded text-[13px] border border-[#09468e]/20 uppercase">
                      {selectedEnquiry.course}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">Phone Number</span>
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="flex items-center gap-1.5 mt-1 text-[#000000] hover:text-[#09468e] font-normal text-[14px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{selectedEnquiry.phone}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">Email Address</span>
                  <a
                    href={`mailto:${selectedEnquiry.email}`}
                    className="flex items-center gap-1.5 mt-1 text-[#09468e] hover:underline font-normal text-[14px] break-all lowercase normal-case"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
                    <span>{selectedEnquiry.email}</span>
                  </a>
                </div>

                {selectedEnquiry.address && (
                  <div className="sm:col-span-2 lg:col-span-4 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[14px] text-[#000000]">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-slate-500 font-normal">City / Address:</span>
                    <span className="font-normal text-[#000000] capitalize">{selectedEnquiry.address}</span>
                  </div>
                )}
              </div>

              {/* Message Box */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">
                  Enquiry Message &amp; Requirements
                </label>
                <div
                  className="text-[14px] font-normal text-[#000000] leading-relaxed p-3.5 bg-[#ffffff] rounded-lg border border-slate-200 whitespace-pre-wrap break-words [word-break:break-word] max-h-[220px] overflow-y-auto capitalize"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#94a3b8 #f1f5f9',
                  }}
                >
                  {selectedEnquiry.message ? (
                    selectedEnquiry.message
                  ) : (
                    <span className="text-slate-400 italic font-normal">No additional message provided.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={Boolean(enquiryToDelete)}
        onClose={() => setEnquiryToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete Admission Enquiry?"
        message={
          enquiryToDelete
            ? `Are you sure you want to delete the enquiry from "${enquiryToDelete.name}" (${enquiryToDelete.course})?`
            : 'Are you sure you want to delete this enquiry?'
        }
        confirmText="Delete"
        variant="danger"
        isLoading={isDeleting}
      />
    </div>
  );
}
