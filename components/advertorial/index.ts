/**
 * Advertorial Components Index
 *
 * Central export point for all advertorial components.
 * Enables clean imports throughout the application.
 *
 * Usage:
 * import { ArticleHeader, HeroSection, SoftCTA } from '@/components/advertorial';
 */

// Core structural components
export { default as ArticleHeader } from './ArticleHeader';
export { default as HeroSection } from './HeroSection';
export { default as ArticleBody, ArticleSection, PullQuote, HighlightBox } from './ArticleBody';
export { default as SoftCTA, InlineCTA, ProductMention } from './SoftCTA';
export { default as Disclaimer, SimpleDisclaimer } from './Disclaimer';
