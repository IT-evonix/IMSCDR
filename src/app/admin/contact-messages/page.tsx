'use client';

import React, { useState, useEffect } from 'react';
import { PageTitle } from '@/components/admin/PageTitle';
import { ContentPagination } from '@/components/admin/ContentPagination';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { Button } from '@/components/ui/Button';
import {
  Mail,
  Eye,
  Trash2,
  Phone,
  User,
  Send,
  X,
  Inbox,
  Clock,
  CheckCircle2,
  FileSpreadsheet,
  Download,
  Search,
  RotateCcw,
} from 'lucide-react';
import { authenticatedFetch } from '@/lib/auth';

interface ContactMessageItem {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminContactMessagesPage() {
  const [messages, setMessages] = useState<ContactMessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Selected Message Modal
  const [selectedMsg, setSelectedMsg] = useState<ContactMessageItem | null>(null);

  // Delete Modal State
  const [msgToDelete, setMsgToDelete] = useState<ContactMessageItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
      });

      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);

      const res = await authenticatedFetch(`/api/contact?${params.toString()}`);

      const data = await res.json();

      if (res.ok && data.status === 'success' && Array.isArray(data.data)) {
        setMessages(data.data);
        setTotalItems(data.totalItems || data.data.length);
        setTotalPages(data.totalPages || 1);
      }
    } catch (err) {
      console.warn('Failed to fetch contact messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [currentPage, itemsPerPage, searchQuery, startDate, endDate]);

  const confirmDelete = async () => {
    if (!msgToDelete) return;
    setIsDeleting(true);
    try {
      const res = await authenticatedFetch(`/api/contact/${msgToDelete.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setMsgToDelete(null);
        if (selectedMsg?.id === msgToDelete.id) {
          setSelectedMsg(null);
        }
        fetchMessages();
      }
    } catch (err) {
      console.warn('Failed to delete message:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  const [isExporting, setIsExporting] = useState(false);

  const handleExportExcel = async () => {
    try {
      setIsExporting(true);
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);

      const res = await authenticatedFetch(`/api/contact/export?${params.toString()}`);

      if (!res.ok) throw new Error('Export failed');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      const today = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `IMSCDR_Contact_Enquiries_${today}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export contact messages:', err);
      alert('Could not export contact messages Excel file. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownloadSingle = (item: ContactMessageItem) => {
    const formattedText = `==================================================
IMSCDR CONTACT ENQUIRY DETAILS
==================================================
Enquiry ID    : #${item.id}
Received Date : ${new Date(item.createdAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' })}
--------------------------------------------------
SENDER DETAILS:
Full Name     : ${item.firstName} ${item.lastName}
Email Address : ${item.email}
Mobile Number : ${item.mobile}
--------------------------------------------------
SUBJECT:
${item.subject}

MESSAGE / ENQUIRY:
${item.message}
==================================================
`;

    const blob = new Blob([formattedText], { type: 'text/plain;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const sanitizedName = `${item.firstName}_${item.lastName}`.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    a.download = `enquiry_${sanitizedName}_${item.id}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Standard Page Title Header matching News-Events and Categories */}
      <PageTitle
        subtitle="IMSCDR Management"
        title="Contact Enquiries & Messages"
        description="Review and manage incoming user contact form enquiries."
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

      {/* Search & Filter Bar (Matching Admission Enquiries) */}
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
            placeholder="Search by sender name, email, phone, subject..."
            className="filter-input filter-input-search w-full"
          />
        </div>

        {/* Filter Controls: Date Range + Reset */}
        <div className="flex flex-wrap items-center gap-2">
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
          {(searchQuery || startDate || endDate) && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
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

      {/* Main Messages Table Card Container */}
      <div className="table-card admin-table-card flex flex-col justify-between">
        {loading ? (
          <div className="flex-1 py-20 flex items-center justify-center text-[14px] font-semibold text-[#000000]">
            Loading contact enquiries...
          </div>
        ) : messages.length === 0 ? (
          <div className="flex-1 py-20 flex flex-col items-center justify-center text-[#000000] space-y-2">
            <Inbox className="w-8 h-8 mx-auto text-[#000000]/40" />
            <p className="text-[14px] font-semibold">No contact messages found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto w-full flex-1 flex flex-col justify-between table-responsive admin-table-responsive">
            <table className="table governing-table w-full text-left min-w-[760px] mb-0">
              <thead className="admin-table-header">
                <tr>
                  <th className="py-2.5 px-4 text-center col-sr">Sr. No.</th>
                  <th className="py-2.5 px-4">Sender Name</th>
                  <th className="py-2.5 px-4">Contact Info</th>
                  <th className="py-2.5 px-4">Subject & Message</th>
                  <th className="py-2.5 px-4">Date</th>
                  <th className="py-2.5 px-4 text-center w-28">Action</th>
                </tr>
              </thead>

              <tbody className="text-[15px] font-normal text-[#000000]">
                {messages.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedMsg(item)}
                  >
                    {/* Sr. No */}
                    <td className="py-3 px-4 text-center col-sr">
                      <span className="sr-badge">{(currentPage - 1) * itemsPerPage + idx + 1}</span>
                    </td>

                    {/* Sender Name */}
                    <td className="py-3 px-4 align-middle">
                      <div className="font-normal text-[#000000] text-[14px] capitalize">
                        {item.firstName} {item.lastName}
                      </div>
                    </td>

                    {/* Contact Details */}
                    <td className="py-3 px-4 align-middle">
                      <div className="text-[#000000] font-normal text-[14px] lowercase normal-case email-text">{item.email}</div>
                      <div className="text-[14px] text-[#000000]/80 font-normal mt-0.5">{item.mobile}</div>
                    </td>

                    {/* Subject & Excerpt */}
                    <td className="py-3 px-4 align-middle max-w-[280px] sm:max-w-[340px]">
                      <div className="font-normal text-[#000000] truncate text-[14px] capitalize">{item.subject}</div>
                      <div className="text-[14px] text-[#000000]/80 line-clamp-1 font-normal mt-0.5 capitalize">
                        {item.message}
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-4 align-middle text-[14px] text-[#000000] font-normal whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>

                    {/* Actions: Icon-only buttons */}
                    <td className="py-3 px-4 text-center align-middle whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => setSelectedMsg(item)}
                          className="table-action-btn table-btn-view"
                          title="Read Full Message"
                        >
                          <Eye className="w-3 h-3" />
                        </button>

                        {/* <button
                          type="button"
                          onClick={() => setMsgToDelete(item)}
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

        {/* Standard Reusable ContentPagination Component */}
        <ContentPagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          entityName="messages"
          onPageChange={(p) => setCurrentPage(p)}
          onItemsPerPageChange={(limit) => {
            setItemsPerPage(limit);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Full Message Reader Modal */}
      {selectedMsg && (
        <div
          className="faculty-modal-overlay fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setSelectedMsg(null)}
        >
          <div
            className="faculty-modal bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-[950px] w-full overflow-hidden relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header — Perfectly Aligned Single Line */}
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between gap-3 bg-[#f8fafc]/60">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className="w-7 h-7 rounded-md bg-[#09468e]/10 text-[#09468e] shrink-0 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#09468e]" />
                </div>
                <h4 className="modal-title text-[15px] font-semibold text-[#000000] truncate leading-tight my-auto">
                  Contact Message Details
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMsg(null)}
                className="faculty-close modal-close-btn"
                title="Close modal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 pb-5 sm:pb-6 space-y-3.5 max-h-[75vh] overflow-y-auto">
              {/* Received Date Badge */}
              <div className="flex items-center gap-1.5 text-[13px] text-[#64748b] font-normal px-0.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>
                  Received on:{' '}
                  <span className="text-[#000000] font-normal">
                    {new Date(selectedMsg.createdAt).toLocaleString()}
                  </span>
                </span>
              </div>

              {/* Sender Details Grid */}
              <div className="p-3.5 bg-[#f8fafc] rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[14px]">
                <div>
                  <span className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">Sender Name</span>
                  <div className="flex items-center gap-1.5 mt-1 font-normal text-[15px] text-[#000000] capitalize">
                    <User className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
                    <span>{selectedMsg.firstName} {selectedMsg.lastName}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">Email Address</span>
                  <a
                    href={`mailto:${selectedMsg.email}`}
                    className="flex items-center gap-1.5 mt-1 text-[#09468e] hover:underline font-normal text-[14px] break-all lowercase normal-case"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
                    <span>{selectedMsg.email}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">Mobile Number</span>
                  <a
                    href={`tel:${selectedMsg.mobile}`}
                    className="flex items-center gap-1.5 mt-1 text-[#000000] hover:text-[#09468e] font-normal text-[14px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{selectedMsg.mobile}</span>
                  </a>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">
                  Subject
                </label>
                <div className="text-[14px] font-normal text-[#000000] p-2.5 px-3 bg-[#f8fafc] rounded-lg border border-slate-200 break-words [word-break:break-word] capitalize">
                  {selectedMsg.subject}
                </div>
              </div>

              {/* Message Body */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-normal text-slate-500 uppercase tracking-wider block">
                  Full Message Content
                </label>
                <div
                  className="text-[14px] font-normal text-[#000000] leading-relaxed p-3.5 bg-[#ffffff] rounded-lg border border-slate-200 whitespace-pre-wrap break-words [word-break:break-word] max-h-[220px] overflow-y-auto"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#94a3b8 #f1f5f9',
                  }}
                >
                  {selectedMsg.message ? (
                    selectedMsg.message
                  ) : (
                    <span className="text-slate-400 italic font-normal">No message content provided.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Standard Reusable ConfirmModal for Delete Action */}
      <ConfirmModal
        isOpen={!!msgToDelete}
        onClose={() => setMsgToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete Contact Enquiry"
        message={`Are you sure you want to delete the enquiry from ${msgToDelete?.firstName} ${msgToDelete?.lastName}?`}
        confirmText="Delete Enquiry"
        variant="danger"
        isLoading={isDeleting}
      />
    </div>
  );
}
