/**
 * Reusable Google reCAPTCHA Verification Helper
 * Used across Admission Enquiry, Grievance Redressal, and other forms.
 *
 * @param {string} token - reCAPTCHA response token from client
 * @returns {Promise<boolean>} - Resolves to true if valid, false otherwise
 */
async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  // If secret key is not configured in development, bypass verification
  if (!secret) return true;
  if (!token) return false;

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secret,
        response: token,
      }),
    });
    const data = await response.json();
    return data.success === true;
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    // Graceful fallback for local development or transient network failure
    return process.env.NODE_ENV !== 'production';
  }
}

module.exports = {
  verifyRecaptcha,
};
