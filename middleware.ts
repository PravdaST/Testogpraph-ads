import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for ads.testograph.eu
 *
 * Purpose: Redirect root path to shop.testograph.eu
 *
 * Behavior:
 * - https://ads.testograph.eu/ → https://shop.testograph.eu/ (307 redirect)
 * - https://ads.testograph.eu/advertorials/* → works normally
 * - https://ads.testograph.eu/api/* → works normally
 *
 * Redirect Type: 307 Temporary Redirect
 * - Browsers don't cache it
 * - Can be changed in the future
 * - SEO-friendly
 */

export function middleware(request: NextRequest) {
  // Check if accessing root path only
  if (request.nextUrl.pathname === '/') {
    // Redirect to shop.testograph.eu homepage
    return NextResponse.redirect('https://shop.testograph.eu/', 307);
  }

  // Allow all other paths to proceed normally
  // This includes:
  // - /advertorials/*
  // - /api/*
  // - Any other routes
  return NextResponse.next();
}

/**
 * Middleware configuration
 *
 * matcher: Specifies which paths this middleware runs on
 *
 * Current config: Only runs on root path (/)
 * This is efficient as middleware won't execute for advertorial pages
 */
export const config = {
  matcher: '/',
};
