'use client';

import React, { useState, useEffect } from 'react';
import { PageTitle } from '@/components/admin/PageTitle';
import { ContentSearchBar } from '@/components/admin/ContentSearchBar';
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
    <div className="max-w-[1250px] w-full mx-auto space-y-4 pb-6 pt-1">
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
          className="explore_more_btn !h-7 !px-3 !text-[11px] !font-bold"
        >
          <FileSpreadsheet className="w-3 h-3" />
          <span>{isExporting ? 'Exporting...' : 'Export to Excel'}</span>
        </button>
      </PageTitle>

      {/* Standard Reusable Dynamic Search & Filter Bar Component */}
      <ContentSearchBar
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
        startDate={startDate}
        onStartDateChange={(d) => {
          setStartDate(d);
          setCurrentPage(1);
        }}
        endDate={endDate}
        onEndDateChange={(d) => {
          setEndDate(d);
          setCurrentPage(1);
        }}
        onResetFilters={() => {
          setSearchQuery('');
          setStartDate('');
          setEndDate('');
          setCurrentPage(1);
        }}
        createHref=""
        placeholder="Search by sender name, email, phone, subject..."
        inlineDates={true}
      />

      {/* Single Cohesive Display Table Card Container */}
      <div className="admin-table-card min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
        {loading ? (
          <div className="flex-1 py-20 flex items-center justify-center text-xs font-semibold text-[#000000]">
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="flex-1 py-20 flex flex-col items-center justify-center text-[#000000] space-y-2">
            <Inbox className="w-8 h-8 mx-auto text-[#000000]/40" />
            <p className="text-xs font-semibold">No contact enquiries found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto w-full flex-1 flex flex-col justify-between">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="admin-table-header">
                <tr>
                  <th className="py-2.5 px-4 w-12 text-center">Sr.</th>
                  <th className="py-2.5 px-4">Sender Name</th>
                  <th className="py-2.5 px-4">Email &amp; Mobile</th>
                  <th className="py-2.5 px-4">Subject &amp; Message Excerpt</th>
                  <th className="py-2.5 px-4">Received Date</th>
                  <th className="py-2.5 px-4 text-center w-36">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-[#000000]">
                {messages.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#09468e]/[0.02] transition-colors cursor-pointer"
                    onClick={() => setSelectedMsg(item)}
                  >
                    {/* Sr. No */}
                    <td className="py-3 px-4 text-center font-['Roma-Semibold'] text-[#000000] text-xs w-12">
                      {(currentPage - 1) * itemsPerPage + idx + 1}
                    </td>

                    {/* Sender Name */}
                    <td className="py-3 px-4 align-middle">
                      <div className="font-bold text-[#000000]">
                        {item.firstName} {item.lastName}
                      </div>
                    </td>

                    {/* Contact Details */}
                    <td className="py-3 px-4 align-middle">
                      <div className="text-[#000000] font-medium">{item.email}</div>
                      <div className="text-[11px] text-[#000000]/75 font-normal mt-0.5">{item.mobile}</div>
                    </td>

                    {/* Subject & Excerpt */}
                    <td className="py-3 px-4 align-middle max-w-[280px] sm:max-w-[340px]">
                      <div className="font-bold text-[#000000] truncate">{item.subject}</div>
                      <div className="text-[11px] text-[#000000]/80 line-clamp-1 font-normal mt-0.5">
                        {item.message}
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-4 align-middle text-[11px] text-[#000000] font-medium whitespace-nowrap">
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
          onPageChange={(p) => setCurrentPage(p)}
          onItemsPerPageChange={(limit) => {
            setItemsPerPage(limit);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Full Message Reader Modal */}
      {selectedMsg && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl brand-border shadow-2xl max-w-[950px] w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header — Perfectly Aligned Single Line */}
            <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2.5 bg-[#f8fafc]/50">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-6 h-6 rounded-md bg-[#09468e]/10 text-[#09468e] shrink-0 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-[#09468e]" />
                </div>
                <h4 className="modal-title text-xs sm:text-sm font-bold text-[#003067] truncate leading-tight my-auto">
                  Contact Message Details
                </h4>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedMsg(null)}
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
                    {new Date(selectedMsg.createdAt).toLocaleString()}
                  </strong>
                </span>
              </div>

              {/* Sender Details Grid */}
              <div className="p-2.5 sm:p-3 bg-[#f8fafc] rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Sender Name</span>
                  <div className="flex items-center gap-1 mt-0.5 font-bold text-xs sm:text-sm text-[#003067]">
                    <User className="w-3 h-3 text-[#09468e] shrink-0" />
                    <span>{selectedMsg.firstName} {selectedMsg.lastName}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a
                    href={`mailto:${selectedMsg.email}`}
                    className="flex items-center gap-1 mt-0.5 text-[#09468e] hover:underline font-semibold text-xs break-all"
                  >
                    <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{selectedMsg.email}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Mobile Number</span>
                  <a
                    href={`tel:${selectedMsg.mobile}`}
                    className="flex items-center gap-1 mt-0.5 text-[#000000] hover:text-[#09468e] font-semibold text-xs"
                  >
                    <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{selectedMsg.mobile}</span>
                  </a>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-0.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                  Subject
                </label>
                <div className="text-xs font-bold text-[#09468e] p-2 px-2.5 bg-blue-50/60 rounded-lg border border-blue-100 break-words [word-break:break-word]">
                  {selectedMsg.subject}
                </div>
              </div>

              {/* Message Body */}
              <div className="space-y-0.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                  Full Message Content
                </label>
                <div
                  className="text-xs font-normal text-[#1a1c20] leading-relaxed p-3 bg-[#fcfcfd] rounded-lg border border-slate-200 whitespace-pre-wrap break-words [word-break:break-word] max-h-[160px] overflow-y-auto shadow-inner"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#94a3b8 #f1f5f9',
                  }}
                >
                  {selectedMsg.message ? (
                    selectedMsg.message
                  ) : (
                    <span className="text-slate-400 italic">No message content provided.</span>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2 bg-[#f8fafc] border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedMsg(null)}
                className="px-3.5 py-1 rounded-md border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
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
        cancelText="Cancel"
        variant="danger"
        isLoading={isDeleting}
      />
    </div>
  );
}
