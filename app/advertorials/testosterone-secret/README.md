# Testosterone Secret Advertorial Page

**Location:** `D:\Automation\All Testograph Ecosystem\testograph-ads\app\advertorials\testosterone-secret\page.tsx`

## Overview

Production-ready advertorial landing page designed with editorial aesthetics to build trust and convert cold traffic. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Page Structure

### Main Page
- **File:** `/app/advertorials/testosterone-secret/page.tsx`
- **Type:** Next.js 14 Server Component
- **Features:**
  - SEO-optimized metadata (Open Graph, Twitter Cards)
  - Server-side rendering for fast initial load
  - Mobile-first responsive design
  - WCAG 2.1 AA accessibility compliance
  - UTM tracking on all CTAs

## Components

All components are located in `/components/advertorial/`:

### 1. ArticleHeader.tsx
Editorial-style header that mimics a professional news outlet.

**Features:**
- Fake news outlet branding ("Health Insights BG")
- Navigation items (aesthetic only, non-functional)
- Advertorial disclosure badge (legal compliance)
- Responsive design with mobile menu indicator

**Usage:**
```tsx
import ArticleHeader from '@/components/advertorial/ArticleHeader';

<ArticleHeader />
```

### 2. HeroSection.tsx
Professional article hero with journalistic layout.

**Props:**
- `category` - Article category (e.g., "Мъжко Здраве")
- `headline` - Main H1 headline
- `subheadline` - Optional supporting text
- `author` - Author name
- `authorTitle` - Author's credentials (default: "Ендокринолог")
- `date` - Publication date (ISO or formatted)
- `readTime` - Reading time estimate (e.g., "8")
- `imageUrl` - Featured image URL (optional)
- `imageAlt` - Image alt text (optional)

**Usage:**
```tsx
<HeroSection
  category="Мъжко Здраве"
  headline="Български ендокринолог разкрива..."
  subheadline="Хиляди мъже губят години..."
  author="Д-р Емил Георгиев"
  authorTitle="Ендокринолог"
  date="2025-01-15"
  readTime="8"
/>
```

### 3. ArticleBody.tsx
Container for article content with optimized typography.

**Features:**
- Optimal reading width (720px max)
- Serif font for body text (Georgia)
- Generous line height (1.75)
- Styled headings, lists, quotes, links
- Responsive spacing

**Additional Exports:**
- `ArticleSection` - Section wrapper with consistent spacing
- `PullQuote` - Highlighted quote component
- `HighlightBox` - Boxed content for key information

**Usage:**
```tsx
<ArticleBody>
  <ArticleSection>
    <h2>Your heading</h2>
    <p>Your content...</p>
  </ArticleSection>

  <PullQuote
    quote="Important quote here"
    attribution="Dr. Name"
  />

  <HighlightBox
    title="Key Takeaway"
    variant="success"
  >
    <p>Important information...</p>
  </HighlightBox>
</ArticleBody>
```

### 4. SoftCTA.tsx
Non-aggressive call-to-action with trust-building design.

**Props:**
- `ctaText` - Button text (default: "Научи повече")
- `ctaSubtext` - Optional subtext below button
- `link` - Full URL with UTM parameters
- `headline` - Optional headline above CTA
- `description` - Optional description text
- `showTrustBadges` - Show trust indicators (default: true)
- `variant` - Style variant ('default' | 'minimal' | 'boxed')

**Additional Exports:**
- `InlineCTA` - Minimal inline link
- `ProductMention` - Natural product mention in article flow

**Usage:**
```tsx
<SoftCTA
  headline="Ready to start?"
  description="Take the first step..."
  ctaText="View Testograph System"
  link="https://shop.testograph.eu/products/testograph-starter?utm_source=advertorial"
  variant="boxed"
/>

<ProductMention
  productName="Testograph System"
  link="https://..."
  description="Dr. Georgiev recommends"
/>

<InlineCTA
  text="Learn more here"
  link="https://..."
/>
```

### 5. Disclaimer.tsx
Legal footer with required disclosures.

**Props:**
- `showMedicalDisclaimer` - Show medical advice disclaimer (default: true)
- `showResultsDisclaimer` - Show results disclaimer (default: true)
- `privacyPolicyUrl` - Privacy policy link
- `termsUrl` - Terms of service link

**Additional Exports:**
- `SimpleDisclaimer` - Minimal disclaimer for less formal contexts

**Usage:**
```tsx
<Disclaimer
  privacyPolicyUrl="https://shop.testograph.eu/pages/privacy-policy"
  termsUrl="https://shop.testograph.eu/pages/terms-of-service"
/>
```

## Design Principles

### Typography
- **Headings:** Inter (sans-serif), bold, tight line-height
- **Body:** Georgia (serif), 19px, line-height 1.75
- **UI Elements:** Inter (sans-serif)

### Colors
- **Background:** White/Neutral-50
- **Text:** Neutral-900
- **Accent:** Primary (Green-600: #10b981)
- **Muted:** Neutral-500

### Responsive Breakpoints
- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md-lg)
- **Desktop:** > 1024px (xl)

### Spacing
- **Article max-width:** 720px
- **Container padding:** 16px mobile, auto desktop
- **Section spacing:** 3rem (48px)

## UTM Tracking

All CTAs include UTM parameters for analytics:

```
utm_source=advertorial
utm_medium=testosterone-secret
utm_campaign=cold-traffic-2025
utm_content=[cta-identifier]
```

**CTA Identifiers:**
- `soft-cta-1` - First CTA (early in article)
- `product-mention-1` - Natural product mention
- `soft-cta-2` - Mid-article conversion CTA
- `soft-cta-3` - Final CTA

## SEO Optimization

### Metadata Included
- Title tag (optimized for CTR)
- Meta description
- Keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Structured data ready (TODO: implement JSON-LD)

### Performance
- Server-side rendering (SSR)
- Optimized images with Next.js Image component
- Minimal client-side JavaScript
- Font optimization (Tailwind)

## Accessibility (a11y)

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on images
- Focus states on interactive elements
- ARIA labels where needed
- Sufficient color contrast
- Keyboard navigation support

## Future Enhancements

### Analytics Integration (TODO)
```tsx
// Add to page.tsx:
import Script from 'next/script';

// Facebook Pixel
<Script id="fb-pixel" strategy="afterInteractive">
  {`fbq('init', 'YOUR_PIXEL_ID'); fbq('track', 'PageView');`}
</Script>

// Google Analytics
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

### A/B Testing
- Implement headline variants
- Test CTA copy and placement
- Test hero image variations

### Content Variables
Consider creating a content configuration file:

```tsx
// content/testosterone-secret.ts
export const content = {
  hero: {
    category: "Мъжко Здраве",
    headline: "...",
    // etc.
  },
  // ...
};
```

## Development

### Local Testing
```bash
cd D:\Automation\All Testograph Ecosystem\testograph-ads
npm run dev
```

Visit: `http://localhost:3000/advertorials/testosterone-secret`

### Build for Production
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run type-check
```

## File Structure
```
testograph-ads/
├── app/
│   └── advertorials/
│       └── testosterone-secret/
│           ├── page.tsx          # Main advertorial page
│           └── README.md         # This file
├── components/
│   └── advertorial/
│       ├── ArticleHeader.tsx     # Editorial header
│       ├── HeroSection.tsx       # Article hero
│       ├── ArticleBody.tsx       # Content container
│       ├── SoftCTA.tsx           # Soft CTAs
│       ├── Disclaimer.tsx        # Legal footer
│       └── index.ts              # Component exports
└── tailwind.config.ts            # Tailwind configuration
```

## Notes for Copywriting Agent

The page is ready to receive content. Simply replace the placeholder text in:

**File:** `/app/advertorials/testosterone-secret/page.tsx`

**Sections to update:**
1. Hero headline and subheadline (lines 70-72)
2. Article body paragraphs (within `<ArticleBody>`)
3. Pull quotes
4. Highlight boxes
5. CTA headlines and descriptions

All components are reusable and accept content as props or children.

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

## License

Proprietary - Testograph Ecosystem
