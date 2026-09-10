'use client';

import React, { useState, useEffect } from 'react';
import { X, GraduationCap, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface EnquiryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultCourse?: string;
}

export const COURSE_OPTIONS = [
  { value: 'MBA', label: 'MBA' },
  { value: 'MCA', label: 'MCA' },
  { value: 'BBA', label: 'BBA' },
  { value: 'BCA', label: 'BCA' },
  { value: 'Ph.D', label: 'Ph.D' },
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  defaultCourse = '',
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: defaultCourse || '',
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Listen for global custom event and window function to trigger modal from any button
  useEffect(() => {
    const handleOpen = (e: any) => {
      if (e?.detail?.course) {
        setFormData((prev) => ({ ...prev, course: e.detail.course }));
      }
      setInternalIsOpen(true);
    };

    (window as any).openEnquiryModal = (course?: string) => {
      if (course) {
        setFormData((prev) => ({ ...prev, course }));
      }
      setInternalIsOpen(true);
    };

    window.addEventListener('open-enquiry-modal', handleOpen);
    return () => {
      window.removeEventListener('open-enquiry-modal', handleOpen);
      delete (window as any).openEnquiryModal;
    };
  }, []);

  // Load Google reCAPTCHA v3 script dynamically
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return;

    if (!document.getElementById('recaptcha-v3-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-v3-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const closeModal = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
    setSuccessMsg('');
    setErrorMsg('');
    setErrors({});
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.course) errs.course = 'Please select a course';
    if (!formData.message.trim()) errs.message = 'Please enter your enquiry message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      let recaptchaToken = '';
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

      // Execute Google reCAPTCHA in background if available
      if (typeof window !== 'undefined' && (window as any).grecaptcha && siteKey) {
        try {
          await new Promise<void>((resolve) => {
            (window as any).grecaptcha.ready(() => resolve());
          });
          recaptchaToken = await (window as any).grecaptcha.execute(siteKey, {
            action: 'enquiry_form_submit',
          });
        } catch (captchaErr) {
          console.warn('reCAPTCHA background execution skipped/failed:', captchaErr);
        }
      }

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        setSuccessMsg(data.message || 'Enquiry submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: defaultCourse || '',
          address: '',
          message: '',
        });
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      {/* Modal Backdrop & Container (Pure CSS - No Tailwind) */}
      {isModalOpen && (
        <div className="enquiry-modal-overlay" onClick={closeModal}>
          <div
            className="enquiry-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Matching Faculty Modal style) */}
            <button
              type="button"
              onClick={closeModal}
              className="enquiry-modal-close"
              aria-label="Close modal"
              title="Close modal"
            >
              ✕
            </button>

            {/* Modal Header (Clean Title & Subtitle - Logo Removed as requested) */}
            <div className="enquiry-modal-header">
              <h3 className="enquiry-modal-title">Admission Enquiry</h3>
              <p className="enquiry-modal-subtitle">
                Get in touch with us for program details, admissions, and eligibility
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Candidate Name */}
                <div className="col-12 col-md-6 mb-2">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                      setFormData({ ...formData, name: val });
                    }}
                    className={`enquiry-input ${errors.name ? 'is-invalid' : ''}`}
                  />
                  {errors.name && <p className="enquiry-error">{errors.name}</p>}
                </div>

                {/* Mobile Number */}
                <div className="col-12 col-md-6 mb-2">
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({ ...formData, phone: val });
                    }}
                    className={`enquiry-input ${errors.phone ? 'is-invalid' : ''}`}
                  />
                  {errors.phone && <p className="enquiry-error">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div className="col-12 col-md-6 mb-2">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`enquiry-input ${errors.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && <p className="enquiry-error">{errors.email}</p>}
                </div>

                {/* Course Dropdown */}
                <div className="col-12 col-md-6 mb-2">
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className={`enquiry-select ${errors.course ? 'is-invalid' : ''
                      } ${!formData.course ? 'is-placeholder' : ''}`}
                  >
                    <option value="" disabled>
                      Select Program / Course *
                    </option>
                    {COURSE_OPTIONS.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  {errors.course && <p className="enquiry-error">{errors.course}</p>}
                </div>

                {/* Address / City */}
                <div className="col-12 mb-2">
                  <input
                    type="text"
                    placeholder="Address / City (Optional)"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="enquiry-input"
                  />
                </div>

                {/* Message Box */}
                <div className="col-12 mb-2">
                  <textarea
                    rows={2}
                    placeholder="Your Enquiry / Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`enquiry-textarea ${errors.message ? 'is-invalid' : ''}`}
                  />
                  {errors.message && <p className="enquiry-error">{errors.message}</p>}
                </div>
              </div>

              {/* Feedback Alerts */}
              {successMsg && (
                <div
                  className="mb-2 p-2 rounded d-flex align-items-center gap-2"
                  style={{
                    background: '#ecfdf5',
                    border: '1px solid #10b981',
                    color: '#065f46',
                    fontSize: '12.5px',
                  }}
                >
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>{successMsg}</span>
                </div>
              )}
              {errorMsg && (
                <div
                  className="mb-2 p-2 rounded d-flex align-items-center gap-2"
                  style={{
                    background: '#fef2f2',
                    border: '1px solid #ef4444',
                    color: '#991b1b',
                    fontSize: '12.5px',
                  }}
                >
                  <AlertCircle size={16} color="#ef4444" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit Button & reCAPTCHA Footer */}
              <div className="enquiry-modal-footer">
                <span className="enquiry-recaptcha-text">
                  Protected by Google reCAPTCHA
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="enquiry-submit-btn"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
