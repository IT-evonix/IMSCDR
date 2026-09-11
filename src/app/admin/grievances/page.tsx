'use client';

import React, { useState, useEffect } from 'react';
import { PageTitle } from '@/components/admin/PageTitle';
import { ContentPagination } from '@/components/admin/ContentPagination';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import {
  ShieldAlert,
  Eye,
  Trash2,
  Phone,
  User,
  Mail,
  GraduationCap,
  X,
  Clock,
  FileSpreadsheet,
  Search,
  RotateCcw,
  Inbox,
} from 'lucide-react';
import { authenticatedFetch } from '@/lib/auth';

interface GrievanceItem {
  id: number;
  name: string;
  mobile: string;
  email: string;
  course: string;
  complaintShort: string;
  complaintDetail: string;
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

export default function AdminGrievancesPage() {
  const [grievances, setGrievances] = useState<GrievanceItem[]>([]);
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

  // Selected Grievance Modal
  const [selectedGrievance, setSelectedGrievance] = useState<GrievanceItem | null>(null);

  // Delete Modal State
  const [grievanceToDelete, setGrievanceToDelete] = useState<GrievanceItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Export state
  const [isExporting, setIsExporting] = useState(false);

  const fetchGrievances = async () => {
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

      const res = await authenticatedFetch(`/api/grievances?${params.toString()}`);
      const data = await res.json();

      if (res.ok && data.status === 'success' && Array.isArray(data.data)) {
        setGrievances(data.data);
        setTotalItems(data.totalItems || data.data.length);
        setTotalPages(data.totalPages || 1);
      }
    } catch (err) {
      console.warn('Failed to fetch grievances:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGrievances();
  }, [currentPage, itemsPerPage, searchQuery, selectedCourse, startDate, endDate]);

  // Open Detail Modal
  const handleOpenDetail = (item: GrievanceItem) => {
    setSelectedGrievance(item);
  };

  // Delete Grievance
  const confirmDelete = async () => {
    if (!grievanceToDelete) return;
    setIsDeleting(true);
    try {
      const res = await authenticatedFetch(`/api/grievances/${grievanceToDelete.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setGrievanceToDelete(null);
        if (selectedGrievance?.id === grievanceToDelete.id) {
          setSelectedGrievance(null);
        }
        await fetchGrievances();
      }
    } catch (err) {
      console.error('Delete grievance error:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  // Export Excel (.xlsx)
  const handleExportExcel = async () => {
    setIsExporting(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (selectedCourse && selectedCourse !== 'All') params.append('course', selectedCourse);

      const res = await authenticatedFetch(`/api/grievances/export?${params.toString()}`);

      if (!res.ok) throw new Error('Failed to download Excel file');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const today = new Date().toISOString().split('T')[0];
      a.download = `IMSCDR_Grievance_Complaints_${today}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Export Excel error:', err);
      alert('Could not export grievances Excel file. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Header & Export Action */}
      <PageTitle
        title="Grievance Redressal"
        description="Review and manage student complaints and grievance redressal submissions."
      >
        <button
          type="button"
          onClick={handleExportExcel}
          disabled={isExporting}
          className="explore_more_btn !h-7 !px-3 !text-[11px] !font-bold"
        >
          <FileSpreadsheet className="w-3 h-3" />
          <span>{isExporting ? 'Exporting...' : 'Export to Excel'}</span>
        </button>
      </PageTitle>

      {/* Search & Filter Bar */}
      <div className="bg-white p-3 rounded-xl brand-border shadow-2xs flex flex-wrap items-center justify-between gap-3">
        {/* Search Field */}
        <div className="relative flex-1 min-w-[220px] max-w-sm flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by name, mobile, email, complaint..."
            className="pl-9 pr-4 h-8 bg-[#f8fafc] border border-slate-200 rounded-lg text-xs text-[#000000] placeholder:text-slate-400 hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 w-full outline-none transition-all search-input"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Course Filter Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-[#000000]">Course:</span>
            <select
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-[#f8fafc] border border-slate-200 rounded-lg px-2.5 h-8 text-xs font-semibold text-[#000000] hover:border-[#09468e] focus:border-[#09468e] focus:ring-1 focus:ring-[#09468e]/20 outline-none cursor-pointer transition-all"
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
              className="bg-[#f8fafc] border border-slate-200 rounded-lg px-2 h-8 text-xs text-[#000000] outline-none"
              title="From date"
            />
            <span className="text-xs text-slate-400">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-[#f8fafc] border border-slate-200 rounded-lg px-2 h-8 text-xs text-[#000000] outline-none"
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
              className="inline-flex items-center gap-1 px-2.5 h-8 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grievances Table Card Container */}
      <div className="admin-table-card min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
        {loading ? (
          <div className="flex-1 py-20 flex items-center justify-center text-xs font-semibold text-[#000000]">
            Loading grievances...
          </div>
        ) : grievances.length === 0 ? (
          <div className="flex-1 py-20 flex flex-col items-center justify-center text-[#000000] space-y-2">
            <Inbox className="w-8 h-8 mx-auto text-[#000000]/40" />
            <p className="text-xs font-semibold">No grievances found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto w-full flex-1 flex flex-col justify-between">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead className="admin-table-header">
                <tr>
                  <th className="py-2.5 px-4 w-12 text-center">Sr.</th>
                  <th className="py-2.5 px-4">Candidate Name</th>
                  <th className="py-2.5 px-4">Email &amp; Mobile</th>
                  <th className="py-2.5 px-4 text-center">Course</th>
                  <th className="py-2.5 px-4">Complaint in Short</th>
                  <th className="py-2.5 px-4">Submitted Date</th>
                  <th className="py-2.5 px-4 text-center w-28">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-[#000000]">
                {grievances.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#09468e]/[0.02] transition-colors cursor-pointer"
                    onClick={() => handleOpenDetail(item)}
                  >
                    {/* Sr. No */}
                    <td className="py-3 px-4 text-center font-['Roma-Semibold'] text-[#000000] text-xs w-12">
                      {(currentPage - 1) * itemsPerPage + idx + 1}
                    </td>

                    {/* Candidate Name */}
                    <td className="py-3 px-4 align-middle">
                      <div className="font-bold text-[#000000] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
                        <span>{item.name}</span>
                      </div>
                    </td>

                    {/* Email & Mobile */}
                    <td className="py-3 px-4 align-middle">
                      <div className="text-xs text-[#000000] font-semibold">{item.email}</div>
                      <div className="text-[11px] text-slate-500">{item.mobile}</div>
                    </td>

                    {/* Course */}
                    <td className="py-3 px-4 text-center align-middle">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#09468e]/10 text-[#09468e]">
                        {item.course}
                      </span>
                    </td>

                    {/* Complaint in Short */}
                    <td className="py-3 px-4 align-middle max-w-[260px]">
                      <div className="font-bold text-[#000000] truncate" title={item.complaintShort}>
                        {item.complaintShort}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate" title={item.complaintDetail}>
                        {item.complaintDetail}
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-4 align-middle text-xs text-[#000000] whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>

                    {/* Actions */}
                    <td
                      className="py-3 px-4 text-center align-middle whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleOpenDetail(item)}
                          className="table-action-btn table-btn-view"
                          title="View Full Details"
                        >
                          <Eye className="w-3 h-3" />
                        </button>
                        {/* <button
                          type="button"
                          onClick={() => setGrievanceToDelete(item)}
                          className="table-action-btn table-btn-delete"
                          title="Delete Grievance"
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

        <ContentPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={(limit) => {
            setItemsPerPage(limit);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Full Grievance Reader Modal */}
      {selectedGrievance && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setSelectedGrievance(null)}
        >
          <div
            className="bg-white rounded-xl brand-border shadow-2xl max-w-[950px] w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header — Perfectly Aligned Single Line */}
            <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2.5 bg-[#f8fafc]/50">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-6 h-6 rounded-md bg-[#09468e]/10 text-[#09468e] shrink-0 flex items-center justify-center">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#09468e]" />
                </div>
                <h4 className="modal-title text-xs sm:text-sm font-bold text-[#003067] truncate leading-tight my-auto">
                  Grievance Redressal Details
                </h4>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedGrievance(null)}
                  className="modal-close-btn"
                  title="Close modal"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-3.5 sm:p-4 space-y-2.5 max-h-[68vh] overflow-y-auto">
              {/* Received Date Badge */}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium px-0.5">
                <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                <span>
                  Received on:{' '}
                  <strong className="text-slate-800">
                    {new Date(selectedGrievance.createdAt).toLocaleString()}
                  </strong>
                </span>
              </div>

              {/* Sender Details Grid */}
              <div className="p-2.5 sm:p-3 bg-[#f8fafc] rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Candidate Name</span>
                  <div className="flex items-center gap-1 mt-0.5 font-bold text-xs sm:text-sm text-[#003067]">
                    <User className="w-3 h-3 text-[#09468e] shrink-0" />
                    <span>{selectedGrievance.name}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Applied Course</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <GraduationCap className="w-3 h-3 text-[#89004a] shrink-0" />
                    <span className="font-bold text-[#09468e] bg-blue-50 px-2 py-0.5 rounded text-[11px] border border-blue-100">
                      {selectedGrievance.course}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Mobile Number</span>
                  <a
                    href={`tel:${selectedGrievance.mobile}`}
                    className="flex items-center gap-1 mt-0.5 text-[#000000] hover:text-[#09468e] font-semibold text-xs"
                  >
                    <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{selectedGrievance.mobile}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a
                    href={`mailto:${selectedGrievance.email}`}
                    className="flex items-center gap-1 mt-0.5 text-[#09468e] hover:underline font-semibold text-xs break-all"
                  >
                    <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{selectedGrievance.email}</span>
                  </a>
                </div>
              </div>

              {/* Complaint in Short */}
              <div className="space-y-0.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                  Complaint in Short
                </label>
                <div className="text-xs font-bold text-[#09468e] p-2 px-2.5 bg-blue-50/60 rounded-lg border border-blue-100 break-words [word-break:break-word]">
                  {selectedGrievance.complaintShort}
                </div>
              </div>

              {/* Complaint in Detail */}
              <div className="space-y-0.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                  Full Complaint Details
                </label>
                <div
                  className="text-xs font-normal text-[#1a1c20] leading-relaxed p-3 bg-[#fcfcfd] rounded-lg border border-slate-200 whitespace-pre-wrap break-words [word-break:break-word] max-h-[160px] overflow-y-auto shadow-inner"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#94a3b8 #f1f5f9',
                  }}
                >
                  {selectedGrievance.complaintDetail ? (
                    selectedGrievance.complaintDetail
                  ) : (
                    <span className="text-slate-400 italic">No complaint details provided.</span>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2 bg-[#f8fafc] border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedGrievance(null)}
                className="px-3.5 py-1 rounded-md border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={Boolean(grievanceToDelete)}
        onClose={() => setGrievanceToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete Grievance Record"
        message={
          grievanceToDelete
            ? `Are you sure you want to delete the grievance submitted by "${grievanceToDelete.name}" regarding "${grievanceToDelete.complaintShort}"?`
            : 'Are you sure you want to delete this grievance record?'
        }
        confirmText="Delete Record"
        cancelText="Cancel"
        variant="danger"
        isLoading={isDeleting}
      />
    </div>
  );
}
