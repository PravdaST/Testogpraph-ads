import React from 'react';
import Image from 'next/image';

/**
 * HeroSection Component
 *
 * Editorial-style article hero with professional journalistic layout.
 * Designed to build trust through authoritative presentation.
 *
 * Props:
 * @param category - Article category badge (e.g., "Мъжко Здраве")
 * @param headline - Main article headline (H1)
 * @param subheadline - Supporting headline text
 * @param author - Author name with credentials
 * @param authorTitle - Author's professional title
 * @param date - Publication date (ISO format or formatted string)
 * @param readTime - Estimated reading time (e.g., "8 min")
 * @param imageUrl - Featured image URL (optional, shows placeholder if not provided)
 * @param imageAlt - Image alt text for accessibility
 */

interface HeroSectionProps {
  category: string;
  headline: string;
  subheadline?: string;
  author: string;
  authorTitle?: string;
  date: string;
  readTime?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function HeroSection({
  category,
  headline,
  subheadline,
  author,
  authorTitle = 'Ендокринолог',
  date,
  readTime,
  imageUrl,
  imageAlt = 'Article featured image'
}: HeroSectionProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const dateObj = new Date(dateString);
      return dateObj.toLocaleDateString('bg-BG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-8">
      {/* Category Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20">
          {category}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl font-bold text-neutral-900 leading-tight mb-4 sm:text-5xl lg:text-6xl">
        {headline}
      </h1>

      {/* Subheadline */}
      {subheadline && (
        <p className="text-xl text-neutral-600 leading-relaxed mb-8 sm:text-2xl">
          {subheadline}
        </p>
      )}

      {/* Author and Meta Information */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 mb-8 border-b border-neutral-200">
        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Author Avatar Placeholder */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {author.charAt(0)}
            </span>
          </div>

          {/* Author Details */}
          <div>
            <div className="text-sm font-semibold text-neutral-900">
              {author}
            </div>
            <div className="text-sm text-neutral-500">
              {authorTitle}
            </div>
          </div>
        </div>

        {/* Publication Meta */}
        <div className="flex items-center gap-4 text-sm text-neutral-500">
          <time dateTime={date} className="flex items-center gap-1.5">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatDate(date)}
          </time>

          {readTime && (
            <>
              <span className="text-neutral-300">•</span>
              <span className="flex items-center gap-1.5">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {readTime} четене
              </span>
            </>
          )}
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden bg-neutral-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        ) : (
          // Placeholder for when image is not provided
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
            <div className="text-center text-neutral-400 p-8">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">Featured Image</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
