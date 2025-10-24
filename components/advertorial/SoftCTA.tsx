'use client';

import React from 'react';

/**
 * SoftCTA Component
 *
 * Non-aggressive call-to-action designed for advertorial content.
 * Uses trust-building language and design instead of hard-sell tactics.
 *
 * Features:
 * - Subtle, editorial-style design
 * - "Learn more" messaging (not "BUY NOW")
 * - Trust indicators (guarantee, testimonials)
 * - UTM tracking for analytics
 * - Responsive layout
 * - Smooth hover effects
 *
 * Props:
 * @param ctaText - Button text (default: "Научи повече")
 * @param ctaSubtext - Optional supporting text below button
 * @param link - Full URL with UTM parameters
 * @param headline - Optional headline above CTA
 * @param description - Optional description text
 * @param showTrustBadges - Show trust indicators (default: true)
 * @param variant - Visual style variant ('default' | 'minimal' | 'boxed')
 * @param className - Optional additional classes
 */

interface SoftCTAProps {
  ctaText?: string;
  ctaSubtext?: string;
  link: string;
  headline?: string;
  description?: string;
  showTrustBadges?: boolean;
  variant?: 'default' | 'minimal' | 'boxed';
  className?: string;
}

export default function SoftCTA({
  ctaText = 'Научи повече',
  ctaSubtext,
  link,
  headline,
  description,
  showTrustBadges = true,
  variant = 'default',
  className = ''
}: SoftCTAProps) {
  const handleClick = () => {
    // Placeholder for tracking events
    // TODO: Implement tracking
    // fbq('track', 'ClickCTA', { location: 'soft-cta' })
    // gtag('event', 'cta_click', { cta_location: 'soft-cta' })
  };

  // Variant styles
  const variantClasses = {
    default: 'bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-xl p-8 my-12',
    minimal: 'my-12 text-center',
    boxed: 'bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-8 my-12'
  };

  return (
    <aside className={`${variantClasses[variant]} ${className}`}>
      <div className="max-w-2xl mx-auto text-center">
        {/* Optional Headline */}
        {headline && (
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            {headline}
          </h3>
        )}

        {/* Optional Description */}
        {description && (
          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Button */}
        <div className="mb-6">
          <a
            href={link}
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaText}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Optional Subtext */}
        {ctaSubtext && (
          <p className="text-sm text-neutral-500 mb-6">
            {ctaSubtext}
          </p>
        )}

        {/* Trust Badges */}
        {showTrustBadges && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-neutral-200">
            {/* 30-Day Guarantee */}
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg
                className="w-5 h-5 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">30 дни гаранция</span>
            </div>

            {/* Free Shipping */}
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg
                className="w-5 h-5 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
              <span className="font-medium">Безплатна доставка</span>
            </div>

            {/* Secure Payment */}
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg
                className="w-5 h-5 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="font-medium">Сигурно плащане</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

/**
 * InlineCTA Component
 *
 * Minimal inline CTA for use within article text.
 * Less prominent than SoftCTA, blends with content.
 */

interface InlineCTAProps {
  text: string;
  link: string;
  className?: string;
}

export function InlineCTA({ text, link, className = '' }: InlineCTAProps) {
  return (
    <a
      href={link}
      className={`inline-flex items-center gap-1.5 text-primary font-semibold hover:text-green-700 transition-colors border-b-2 border-primary/30 hover:border-primary ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </a>
  );
}

/**
 * ProductMention Component
 *
 * Natural product mention within article flow.
 * Designed to look like editorial content, not an ad.
 */

interface ProductMentionProps {
  productName: string;
  link: string;
  description?: string;
  className?: string;
}

export function ProductMention({
  productName,
  link,
  description,
  className = ''
}: ProductMentionProps) {
  return (
    <aside className={`my-8 p-6 bg-neutral-50 rounded-lg border-l-4 border-primary ${className}`}>
      <p className="text-base text-neutral-700 leading-relaxed mb-3">
        {description || `Д-р Георгиев препоръчва системата`}{' '}
        <a
          href={link}
          className="font-semibold text-primary hover:text-green-700 underline decoration-2 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {productName}
        </a>
        {description ? '' : ' на своите пациенти.'}
      </p>
      <div className="flex items-center gap-2 text-sm text-neutral-500">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Спонсорирана препоръка</span>
      </div>
    </aside>
  );
}
