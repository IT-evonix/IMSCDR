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
      const token = localStorage.getItem('adminToken');
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);

      const res = await fetch(`/api/contact/export?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error('Export failed');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `contact_enquiries_${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.warn('Failed to export contact messages:', err);
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
        <Button
          type="button"
          variant="gradient"
          size="sm"
          pill={false}
          onClick={handleExportExcel}
          isLoading={isExporting}
          icon={<FileSpreadsheet className="w-3.5 h-3.5" />}
          className="h-8.5 rounded-lg cursor-pointer"
        >
          Export Contacts
        </Button>
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
      <div className="bg-white rounded-xl brand-border overflow-hidden shadow-2xs min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
        {loading ? (
          <div className="flex-1 py-20 flex items-center justify-center text-xs font-semibold text-[#737782]">
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="flex-1 py-20 flex flex-col items-center justify-center text-[#737782] space-y-2">
            <Inbox className="w-8 h-8 mx-auto text-[#737782]/40" />
            <p className="text-xs font-semibold">No contact enquiries found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto w-full flex-1 flex flex-col justify-between">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200 text-[10px] font-extrabold uppercase tracking-wider text-[#434751]">
                  <th className="py-3 px-4">Sender Name</th>
                  <th className="py-3 px-4">Email &amp; Mobile</th>
                  <th className="py-3 px-4">Subject &amp; Message Excerpt</th>
                  <th className="py-3 px-4">Received Date</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {messages.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#f8fafc] transition-colors cursor-pointer"
                    onClick={() => setSelectedMsg(item)}
                  >
                    {/* Sender Name */}
                    <td className="py-3 px-4 align-middle">
                      <div className="font-bold text-[#1a1c20]">
                        {item.firstName} {item.lastName}
                      </div>
                    </td>

                    {/* Contact Details */}
                    <td className="py-3 px-4 align-middle">
                      <div className="text-slate-700 font-medium">{item.email}</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">{item.mobile}</div>
                    </td>

                    {/* Subject & Excerpt */}
                    <td className="py-3 px-4 align-middle max-w-[280px] sm:max-w-[340px]">
                      <div className="font-bold text-[#09468e] truncate">{item.subject}</div>
                      <div className="text-[11px] text-slate-600 line-clamp-1 font-normal mt-0.5">
                        {item.message}
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-4 align-middle text-[11px] text-slate-500 font-medium whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-center align-middle whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => setSelectedMsg(item)}
                          className="p-1.5 text-[#09468e] hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
                          title="Read Full Message"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDownloadSingle(item)}
                          className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors cursor-pointer"
                          title="Download Enquiry File"
                        >
                          <Download className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setMsgToDelete(item)}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl brand-border shadow-xl max-w-[520px] w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header — Perfectly Aligned Single Line */}
            <div className="p-3.5 sm:p-4 border-b border-slate-100 flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className="w-7 h-7 rounded-md bg-[#09468e]/10 text-[#09468e] shrink-0 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#1a1c20] truncate leading-tight my-auto">
                  Enquiry Details
                </h4>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleDownloadSingle(selectedMsg)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors text-xs font-semibold cursor-pointer border border-emerald-200"
                  title="Download this enquiry"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMsg(null)}
                  className="w-7 h-7 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 shrink-0 flex items-center justify-center transition-colors cursor-pointer"
                  title="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 space-y-3.5 max-h-[70vh] overflow-y-auto">
              {/* Received Date Badge */}
              <div className="text-[11px] text-slate-500 font-medium">
                Received on: <span className="font-bold text-slate-700">{new Date(selectedMsg.createdAt).toLocaleString()}</span>
              </div>

              {/* Sender Details Box */}
              <div className="p-3 bg-[#f8fafc] rounded-lg border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-800">
                  <User className="w-3.5 h-3.5 text-[#09468e] shrink-0" />
                  <span className="font-bold">{selectedMsg.firstName} {selectedMsg.lastName}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={`mailto:${selectedMsg.email}`} className="text-[#09468e] hover:underline font-semibold break-all">
                    {selectedMsg.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={`tel:${selectedMsg.mobile}`} className="text-slate-800 font-semibold">
                    {selectedMsg.mobile}
                  </a>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <div className="text-xs font-bold text-[#09468e] p-2.5 bg-blue-50/50 rounded-lg border border-blue-100 break-words [word-break:break-word] overflow-hidden">
                  {selectedMsg.subject}
                </div>
              </div>

              {/* Message Body */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <div className="text-xs font-normal text-slate-700 leading-relaxed p-3 bg-white rounded-lg border border-slate-200 whitespace-pre-wrap break-words [word-break:break-word] max-h-60 overflow-y-auto">
                  {selectedMsg.message}
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
        cancelText="Cancel"
        variant="danger"
        isLoading={isDeleting}
      />
    </div>
  );
}
