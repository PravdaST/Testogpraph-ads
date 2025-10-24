'use client';

import React from 'react';

/**
 * ArticleHeader Component
 *
 * Editorial-style header that mimics a news outlet.
 * Creates trust through professional news site aesthetics.
 *
 * Features:
 * - Fake news outlet branding for authenticity
 * - Navigation items (non-functional, aesthetic only)
 * - Advertorial disclosure badge for legal compliance
 * - Clean, minimal design with proper spacing
 */
export default function ArticleHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container mx-auto px-4">
        {/* Top bar with advertorial disclosure */}
        <div className="flex items-center justify-between py-2 text-xs text-neutral-500">
          <div className="flex items-center gap-4">
            <span>София, България</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">
              {new Date().toLocaleDateString('bg-BG', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-600/20">
              Спонсорирано съдържание
            </span>
          </div>
        </div>

        {/* Main header with logo and navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Health Insights <span className="text-primary">BG</span>
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Начало
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Здраве
            </a>
            <a
              href="#"
              className="text-sm font-medium text-primary hover:text-green-700 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Фитнес
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Изследвания
            </a>
          </nav>

          {/* Mobile menu indicator - just for aesthetics */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900"
            aria-label="Меню"
            onClick={(e) => e.preventDefault()}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
