/**
 * Utility functions for Admin authentication & JWT token validation
 */

interface JWTPayload {
  id?: string;
  role?: string;
  exp?: number;
  iat?: number;
  [key: string]: any;
}

/**
 * Safely parse a JWT token payload without external libraries
 */
export const decodeJWTPayload = (token: string): JWTPayload | null => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    // Decode base64url string
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to decode JWT token payload:', error);
    return null;
  }
};

/**
 * Checks whether a given JWT token is expired
 */
export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;

  const payload = decodeJWTPayload(token);
  if (!payload || !payload.exp) return true;

  // exp is in seconds, Date.now() is in milliseconds
  const currentTime = Math.floor(Date.now() / 1000);
  
  // Add a 5-second buffer for network latency
  return payload.exp <= currentTime + 5;
};

/**
 * Clears admin authentication storage and redirects to admin login
 */
export const logoutAdmin = (reason?: string): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRefreshToken');
    localStorage.removeItem('adminUser');
  } catch (e) {
    console.error('Failed to clear localStorage on logout:', e);
  }

  const loginUrl = reason ? `/admin/login?reason=${encodeURIComponent(reason)}` : '/admin/login';

  if (window.location.pathname !== '/admin/login') {
    window.location.href = loginUrl;
  }
};

/**
 * Wrapper around standard fetch for authenticated admin requests.
 * Automatically injects Bearer token and triggers auto-logout on 401 Unauthorized or expired token.
 */
export const authenticatedFetch = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;

  if (isTokenExpired(token)) {
    logoutAdmin('expired');
    throw new Error('Your session has expired. Redirecting to login...');
  }

  const headers = new Headers(options.headers || {});
  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const updatedOptions: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(url, updatedOptions);

  if (response.status === 401) {
    logoutAdmin('expired');
    throw new Error('Your session has expired. Redirecting to login...');
  }

  return response;
};
