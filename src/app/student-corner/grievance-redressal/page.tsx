'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { grievanceSchema, GrievanceFormData } from '@/data/grievanceSchema';

export default function GrievanceRedressalPage() {
  const [success, setSuccess] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GrievanceFormData>({
    resolver: zodResolver(grievanceSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      course: '',
      complaintShort: '',
      complaintDetail: '',
    },
  });

  // Load Google reCAPTCHA v3 script dynamically if configured
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

  const onSubmit = async (data: GrievanceFormData) => {
    setSuccess('');
    setErrorMsg('');

    try {
      let recaptchaToken = '';
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

      // Execute Google reCAPTCHA v3 if available
      if (typeof window !== 'undefined' && (window as any).grecaptcha && siteKey) {
        try {
          await new Promise<void>((resolve) => {
            (window as any).grecaptcha.ready(() => resolve());
          });
          recaptchaToken = await (window as any).grecaptcha.execute(siteKey, {
            action: 'grievance_submit',
          });
        } catch (captchaErr) {
          console.warn('reCAPTCHA execution skipped/failed:', captchaErr);
        }
      }

      const res = await fetch('/api/grievances', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const resData = await res.json();

      if (res.ok && resData.status === 'success') {
        setSuccess(
          resData.message || 'Your grievance has been submitted successfully.'
        );
        reset();
        setTimeout(() => {
          setSuccess('');
        }, 6000);
      } else {
        throw new Error(
          resData.message || 'Failed to submit grievance. Please try again.'
        );
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="innerpagerightside">
      {/* Page Title */}
      <h2 className="heading mb-4">Grievance Redressal</h2>

      {/* Grievance Form Card - Exact Contact Form Layout & UI Classes */}
      <div className="contact-form-wrapper" style={{ borderRadius: '30px' }}>
        <div className="heading text-white mb-4" style={{ fontSize: '28px', fontWeight: 600 }}>
          Submit Your Grievance
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="row">
            {/* 1. Name */}
            <div className="col-lg-6 mb-4">
              <input
                type="text"
                placeholder="Candidate Full Name"
                className={`form-control custom-input ${
                  errors.name ? 'is-invalid' : ''
                }`}
                {...register('name', {
                  onChange: (e) => {
                    e.target.value = e.target.value.replace(/[^a-zA-Z\s.]/g, '');
                  },
                })}
              />
              {errors.name && <p className="error-text">{errors.name.message}</p>}
            </div>

            {/* 2. Mobile Number */}
            <div className="col-lg-6 mb-4">
              <input
                type="tel"
                placeholder="Mobile Number"
                maxLength={10}
                className={`form-control custom-input ${
                  errors.mobile ? 'is-invalid' : ''
                }`}
                {...register('mobile', {
                  onChange: (e) => {
                    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  },
                })}
              />
              {errors.mobile && (
                <p className="error-text">{errors.mobile.message}</p>
              )}
            </div>

            {/* 3. Email Address */}
            <div className="col-lg-6 mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className={`form-control custom-input ${
                  errors.email ? 'is-invalid' : ''
                }`}
                {...register('email')}
              />
              {errors.email && (
                <p className="error-text">{errors.email.message}</p>
              )}
            </div>

            {/* 4. Select Course Name */}
            <div className="col-lg-6 mb-4">
              <select
                className={`form-control custom-input ${
                  errors.course ? 'is-invalid' : ''
                }`}
                defaultValue=""
                style={{
                  cursor: 'pointer',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1.25rem center',
                  backgroundSize: '14px 14px',
                  paddingRight: '2.5rem',
                }}
                {...register('course')}
              >
                <option value="" disabled style={{ color: '#333', background: '#fff' }}>
                  Select Course Name
                </option>
                <option value="MBA" style={{ color: '#333', background: '#fff' }}>
                  MBA
                </option>
                <option value="MCA" style={{ color: '#333', background: '#fff' }}>
                  MCA
                </option>
                <option value="BBA" style={{ color: '#333', background: '#fff' }}>
                  BBA
                </option>
                <option value="BCA" style={{ color: '#333', background: '#fff' }}>
                  BCA
                </option>
                <option value="Ph.D" style={{ color: '#333', background: '#fff' }}>
                  Ph.D
                </option>
                <option value="Other" style={{ color: '#333', background: '#fff' }}>
                  Other
                </option>
              </select>
              {errors.course && (
                <p className="error-text">{errors.course.message}</p>
              )}
            </div>

            {/* 5. Complaint in short */}
            <div className="col-12 mb-4">
              <input
                type="text"
                placeholder="Complaint in short (Subject)"
                className={`form-control custom-input ${
                  errors.complaintShort ? 'is-invalid' : ''
                }`}
                {...register('complaintShort')}
              />
              {errors.complaintShort && (
                <p className="error-text">{errors.complaintShort.message}</p>
              )}
            </div>

            {/* 6. Write your complaint in detail */}
            <div className="col-12 mb-4">
              <textarea
                rows={5}
                placeholder="Write your complaint in detail"
                className={`form-control custom-textarea ${
                  errors.complaintDetail ? 'is-invalid' : ''
                }`}
                {...register('complaintDetail')}
              ></textarea>
              {errors.complaintDetail && (
                <p className="error-text">{errors.complaintDetail.message}</p>
              )}
            </div>

            {/* Feedback Alerts & Submit Button */}
            <div className="col-12">
              {success && <div className="alert alert-success">{success}</div>}
              {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}