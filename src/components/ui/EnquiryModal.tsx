'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { enquirySchema, EnquiryFormData } from '@/data/enquirySchema';

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

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      course: defaultCourse || '',
      address: '',
      message: '',
    },
  });

  const selectedCourse = watch('course');

  // Listen for global custom event and window function to trigger modal from any button
  useEffect(() => {
    const handleOpen = (e: any) => {
      if (e?.detail?.course) {
        setValue('course', e.detail.course, { shouldValidate: true });
      }
      setInternalIsOpen(true);
    };

    (window as any).openEnquiryModal = (course?: string) => {
      if (course) {
        setValue('course', course, { shouldValidate: true });
      }
      setInternalIsOpen(true);
    };

    window.addEventListener('open-enquiry-modal', handleOpen);
    return () => {
      window.removeEventListener('open-enquiry-modal', handleOpen);
      delete (window as any).openEnquiryModal;
    };
  }, [setValue]);

  useEffect(() => {
    if (defaultCourse) {
      setValue('course', defaultCourse, { shouldValidate: true });
    }
  }, [defaultCourse, setValue]);

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
    clearErrors();
  };

  const onSubmit = async (data: EnquiryFormData) => {
    setSuccessMsg('');
    setErrorMsg('');

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
          ...data,
          recaptchaToken,
        }),
      });

      const resData = await res.json();

      if (res.ok && resData.status === 'success') {
        setSuccessMsg(resData.message || 'Thank you! Your admission enquiry has been submitted successfully.');
        reset({
          name: '',
          phone: '',
          email: '',
          course: defaultCourse || '',
          address: '',
          message: '',
        });
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        throw new Error(resData.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
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
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="enquiry-modal-close"
              aria-label="Close modal"
              title="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="enquiry-modal-header">
              <h3 className="enquiry-modal-title">Admission Enquiry</h3>
              <p className="enquiry-modal-subtitle">
                Get in touch with us for program details, admissions, and eligibility
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="row">
                {/* 1. Candidate Name */}
                <div className="col-12 col-md-6 mb-2">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className={`enquiry-input ${errors.name ? 'is-invalid' : ''}`}
                    {...register('name', {
                      onChange: (e) => {
                        e.target.value = e.target.value.replace(/[^a-zA-Z\s.]/g, '');
                      },
                    })}
                  />
                  {errors.name && <p className="enquiry-error">{errors.name.message}</p>}
                </div>

                {/* 2. Mobile Number */}
                <div className="col-12 col-md-6 mb-2">
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    maxLength={10}
                    className={`enquiry-input ${errors.phone ? 'is-invalid' : ''}`}
                    {...register('phone', {
                      onChange: (e) => {
                        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
                      },
                    })}
                  />
                  {errors.phone && <p className="enquiry-error">{errors.phone.message}</p>}
                </div>

                {/* 3. Email Address */}
                <div className="col-12 col-md-6 mb-2">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className={`enquiry-input ${errors.email ? 'is-invalid' : ''}`}
                    {...register('email')}
                  />
                  {errors.email && <p className="enquiry-error">{errors.email.message}</p>}
                </div>

                {/* 4. Course Dropdown */}
                <div className="col-12 col-md-6 mb-2">
                  <select
                    className={`enquiry-select ${errors.course ? 'is-invalid' : ''
                      } ${!selectedCourse ? 'is-placeholder' : ''}`}
                    value={selectedCourse || ''}
                    {...register('course')}
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
                  {errors.course && <p className="enquiry-error">{errors.course.message}</p>}
                </div>

                {/* 5. Address / City */}
                <div className="col-12 mb-2">
                  <input
                    type="text"
                    placeholder="Address / City (Optional)"
                    className={`enquiry-input ${errors.address ? 'is-invalid' : ''}`}
                    {...register('address')}
                  />
                  {errors.address && <p className="enquiry-error">{errors.address.message}</p>}
                </div>

                {/* 6. Message Box */}
                <div className="col-12 mb-2">
                  <textarea
                    rows={2}
                    placeholder="Your Enquiry / Message *"
                    className={`enquiry-textarea ${errors.message ? 'is-invalid' : ''}`}
                    {...register('message')}
                  ></textarea>
                  {errors.message && <p className="enquiry-error">{errors.message.message}</p>}
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
