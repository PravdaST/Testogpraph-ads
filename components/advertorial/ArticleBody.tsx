'use client';

import React, { ReactNode } from 'react';

/**
 * ArticleBody Component
 *
 * Container for article content with optimized typography for readability.
 * Provides consistent styling for editorial content with proper spacing,
 * line height, and font sizing for long-form reading.
 *
 * Features:
 * - Optimal reading width (680-720px)
 * - Serif font for body text (Georgia)
 * - Generous line height (1.75)
 * - Proper heading hierarchy
 * - Styled lists, quotes, and emphasis
 * - Responsive spacing
 *
 * Props:
 * @param children - Article content (can include text, headings, lists, etc.)
 * @param className - Optional additional classes
 */

interface ArticleBodyProps {
  children: ReactNode;
  className?: string;
}

export default function ArticleBody({ children, className = '' }: ArticleBodyProps) {
  return (
    <article
      className={`
        prose prose-lg prose-neutral
        font-sans
        ${className}
      `}
      style={{
        // Custom prose styles for better readability
        fontSize: '19px',
        lineHeight: '1.75'
      }}
    >
      <style jsx>{`
        article :global(h2) {
          font-family: 'Inter', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: #171717;
        }

        article :global(h3) {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #262626;
        }

        article :global(h4) {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.5;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          color: #404040;
        }

        article :global(p) {
          margin-bottom: 1.5rem;
          color: #262626;
        }

        article :global(strong) {
          font-weight: 600;
          color: #171717;
        }

        article :global(em) {
          font-style: italic;
        }

        article :global(a) {
          color: #10b981;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }

        article :global(a:hover) {
          border-bottom-color: #10b981;
        }

        /* Lists */
        article :global(ul),
        article :global(ol) {
          margin-bottom: 1.75rem;
          padding-left: 1.75rem;
        }

        article :global(li) {
          margin-bottom: 0.75rem;
          line-height: 1.75;
        }

        article :global(ul li) {
          list-style-type: disc;
        }

        article :global(ol li) {
          list-style-type: decimal;
        }

        /* Blockquotes / Pull Quotes */
        article :global(blockquote) {
          border-left: 4px solid #10b981;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          font-size: 1.25rem;
          line-height: 1.6;
          color: #404040;
        }

        article :global(blockquote p) {
          margin-bottom: 0.5rem;
        }

        /* Horizontal Rule */
        article :global(hr) {
          border: none;
          border-top: 1px solid #e5e5e5;
          margin: 3rem 0;
        }

        /* Images within article */
        article :global(img) {
          border-radius: 0.5rem;
          margin: 2rem 0;
        }

        /* Figure captions */
        article :global(figcaption) {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #737373;
          text-align: center;
          margin-top: 0.75rem;
          font-style: italic;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          article :global(h2) {
            font-size: 1.625rem;
          }

          article :global(h3) {
            font-size: 1.375rem;
          }

          article :global(blockquote) {
            font-size: 1.125rem;
            padding-left: 1rem;
            margin: 1.5rem 0;
          }
        }
      `}</style>

      {children}
    </article>
  );
}

/**
 * ArticleSection Component
 *
 * Optional wrapper for logical sections within the article.
 * Provides consistent spacing between major content blocks.
 */

interface ArticleSectionProps {
  children: ReactNode;
  className?: string;
}

export function ArticleSection({ children, className = '' }: ArticleSectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      {children}
    </section>
  );
}

/**
 * PullQuote Component
 *
 * Highlighted quote for emphasis within article.
 * Draws reader attention to key points.
 */

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export function PullQuote({ quote, attribution, className = '' }: PullQuoteProps) {
  return (
    <aside className={`my-8 py-6 px-8 bg-neutral-50 rounded-lg border-l-4 border-primary ${className}`}>
      <blockquote className="text-xl sm:text-2xl font-serif italic text-neutral-800 leading-relaxed mb-0">
        "{quote}"
      </blockquote>
      {attribution && (
        <cite className="block mt-4 text-sm font-sans not-italic text-neutral-600">
          — {attribution}
        </cite>
      )}
    </aside>
  );
}

/**
 * HighlightBox Component
 *
 * Boxed content for key takeaways, tips, or important information.
 */

interface HighlightBoxProps {
  title?: string;
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning';
  className?: string;
}

export function HighlightBox({
  title,
  children,
  variant = 'info',
  className = ''
}: HighlightBoxProps) {
  const variantStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900'
  };

  return (
    <aside className={`my-8 p-6 rounded-lg border-2 ${variantStyles[variant]} ${className}`}>
      {title && (
        <h4 className="font-sans font-semibold text-lg mb-3 mt-0">
          {title}
        </h4>
      )}
      <div className="font-sans text-base leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
