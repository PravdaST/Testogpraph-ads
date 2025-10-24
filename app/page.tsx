import { redirect } from 'next/navigation';

/**
 * Root Page - ads.testograph.eu/
 *
 * Purpose: Fallback redirect if middleware doesn't catch the request
 *
 * Behavior:
 * - Server-side redirect to shop.testograph.eu
 * - This should rarely execute (middleware handles most cases)
 * - Provides safety net for edge cases
 *
 * Note: The middleware.ts should catch most requests to /
 * This page serves as a fallback for any requests that slip through
 */

export default function HomePage() {
  // Server-side redirect to shop.testograph.eu
  redirect('https://shop.testograph.eu/');
}

/**
 * Alternative implementation (if redirect() doesn't work):
 *
 * export default function HomePage() {
 *   return (
 *     <div className="min-h-screen flex items-center justify-center bg-neutral-50">
 *       <div className="text-center max-w-md px-6">
 *         <div className="mb-6">
 *           <svg
 *             className="w-16 h-16 text-primary mx-auto mb-4"
 *             fill="none"
 *             stroke="currentColor"
 *             viewBox="0 0 24 24"
 *           >
 *             <path
 *               strokeLinecap="round"
 *               strokeLinejoin="round"
 *               strokeWidth={2}
 *               d="M13 7l5 5m0 0l-5 5m5-5H6"
 *             />
 *           </svg>
 *         </div>
 *
 *         <h1 className="text-2xl font-bold text-neutral-900 mb-4">
 *           Redirecting to Testograph Shop...
 *         </h1>
 *
 *         <p className="text-neutral-600 mb-6">
 *           You will be redirected automatically.
 *         </p>
 *
 *         <a
 *           href="https://shop.testograph.eu/"
 *           className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
 *         >
 *           Go to Shop
 *           <svg
 *             className="w-4 h-4"
 *             fill="none"
 *             stroke="currentColor"
 *             viewBox="0 0 24 24"
 *           >
 *             <path
 *               strokeLinecap="round"
 *               strokeLinejoin="round"
 *               strokeWidth={2}
 *               d="M9 5l7 7-7 7"
 *             />
 *           </svg>
 *         </a>
 *
 *         <div className="mt-8 pt-6 border-t border-neutral-200">
 *           <p className="text-sm text-neutral-500 mb-3">
 *             Looking for advertorials?
 *           </p>
 *           <a
 *             href="/advertorials/testoup-clinical-trial"
 *             className="text-sm text-primary hover:underline"
 *           >
 *             View Advertorials →
 *           </a>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 */
