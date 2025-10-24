# Advertorial Components Quick Reference

**Location:** `D:\Automation\All Testograph Ecosystem\testograph-ads\components\advertorial\`

## Quick Start

```tsx
import {
  ArticleHeader,
  HeroSection,
  ArticleBody,
  ArticleSection,
  PullQuote,
  HighlightBox,
  SoftCTA,
  InlineCTA,
  ProductMention,
  Disclaimer
} from '@/components/advertorial';
```

## Component Cheat Sheet

### ArticleHeader
```tsx
<ArticleHeader />
// No props - fully self-contained
```

### HeroSection
```tsx
<HeroSection
  category="Мъжко Здраве"
  headline="Main headline here"
  subheadline="Supporting text"
  author="Д-р Емил Георгиев"
  authorTitle="Ендокринолог"
  date="2025-01-15"
  readTime="8"
  imageUrl="/path/to/image.jpg"  // optional
  imageAlt="Image description"   // optional
/>
```

### ArticleBody + Sub-components
```tsx
<ArticleBody>
  <ArticleSection>
    <h2>Section Title</h2>
    <p>Content here...</p>

    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </ArticleSection>

  <PullQuote
    quote="Important statement"
    attribution="Source name"
  />

  <HighlightBox
    title="Key Point"
    variant="success"  // 'info' | 'success' | 'warning'
  >
    <p>Highlighted content</p>
  </HighlightBox>
</ArticleBody>
```

### SoftCTA (Main CTA)
```tsx
<SoftCTA
  headline="Optional headline"
  description="Optional description"
  ctaText="Button text"
  ctaSubtext="Below button text"
  link="https://shop.testograph.eu/products/testograph-starter?utm_source=advertorial"
  showTrustBadges={true}
  variant="boxed"  // 'default' | 'minimal' | 'boxed'
/>
```

### InlineCTA (Text link)
```tsx
<InlineCTA
  text="Learn more"
  link="https://example.com"
/>
```

### ProductMention (Subtle product reference)
```tsx
<ProductMention
  productName="Testograph System"
  link="https://shop.testograph.eu/products/testograph-starter"
  description="Dr. Georgiev recommends"
/>
```

### Disclaimer
```tsx
<Disclaimer
  showMedicalDisclaimer={true}
  showResultsDisclaimer={true}
  privacyPolicyUrl="https://shop.testograph.eu/pages/privacy-policy"
  termsUrl="https://shop.testograph.eu/pages/terms-of-service"
/>
```

## Common Patterns

### Full Article Layout
```tsx
<div className="min-h-screen bg-white">
  <ArticleHeader />

  <main className="container mx-auto px-4 py-12">
    <HeroSection {...heroProps} />

    <ArticleBody>
      {/* Content sections */}
    </ArticleBody>

    <SoftCTA {...ctaProps} />
    <Disclaimer />
  </main>
</div>
```

### Multiple CTAs in Article
```tsx
<ArticleBody>
  <ArticleSection>
    <p>First section content...</p>
  </ArticleSection>

  {/* First CTA - early engagement */}
  <SoftCTA
    variant="boxed"
    link="...?utm_content=soft-cta-1"
  />

  <ArticleSection>
    <p>More content...</p>

    {/* Inline mention */}
    <ProductMention
      productName="Testograph"
      link="...?utm_content=product-mention-1"
    />
  </ArticleSection>

  {/* Final conversion CTA */}
  <SoftCTA
    variant="default"
    link="...?utm_content=soft-cta-2"
  />
</ArticleBody>
```

### Content Variety
```tsx
<ArticleBody>
  {/* Regular text */}
  <p>Paragraph text...</p>

  {/* Styled lists */}
  <ul>
    <li>Automatic bullet styling</li>
    <li>Proper spacing</li>
  </ul>

  {/* Pull quote */}
  <PullQuote quote="..." attribution="..." />

  {/* Highlight box */}
  <HighlightBox title="Important" variant="warning">
    <p>Alert content</p>
  </HighlightBox>

  {/* Inline CTA */}
  <p>
    Learn more about <InlineCTA text="the system" link="..." />
  </p>
</ArticleBody>
```

## Styling Guidelines

### Typography Scale
- **H1:** 2.5rem (40px) mobile, 3.75rem (60px) desktop
- **H2:** 1.625rem (26px) mobile, 2rem (32px) desktop
- **H3:** 1.375rem (22px) mobile, 1.5rem (24px) desktop
- **Body:** 1.1875rem (19px)
- **Small:** 0.875rem (14px)

### Color Palette
```tsx
// Primary (CTA, links, accents)
className="text-primary"        // #10b981
className="bg-primary"

// Text colors
className="text-neutral-900"    // Main text
className="text-neutral-600"    // Supporting text
className="text-neutral-500"    // Muted text

// Backgrounds
className="bg-white"
className="bg-neutral-50"       // Subtle background
className="bg-neutral-100"      // Boxed content
```

### Spacing
```tsx
// Sections
className="mb-12"     // Between sections (48px)
className="my-8"      // Around special elements (32px)

// Paragraphs
className="mb-6"      // Standard paragraph spacing (24px)

// Components
className="py-8"      // Vertical padding (32px)
className="px-4"      // Horizontal padding (16px)
```

## Best Practices

### SEO
1. Use HeroSection headline as H1 (only one per page)
2. Use H2 for main sections
3. Use H3 for subsections
4. Include alt text on all images
5. Keep URL structure clean

### Accessibility
1. Maintain heading hierarchy
2. Use semantic HTML
3. Provide meaningful link text (not "click here")
4. Ensure color contrast meets WCAG AA
5. Test keyboard navigation

### Performance
1. Use Next.js Image component for images
2. Minimize client components ('use client')
3. Keep bundle size low
4. Lazy load below-fold content if needed

### Conversion Optimization
1. Place first CTA after problem/solution setup
2. Use 2-3 CTAs maximum per page
3. Make CTAs contextually relevant
4. Use trust badges (guarantee, shipping, etc.)
5. Keep CTA copy benefit-focused

## Component Variants

### SoftCTA Variants
```tsx
// Default - gradient background, subtle
<SoftCTA variant="default" />

// Minimal - text-focused, no background
<SoftCTA variant="minimal" />

// Boxed - prominent, colored border
<SoftCTA variant="boxed" />
```

### HighlightBox Variants
```tsx
// Info - blue (default)
<HighlightBox variant="info" />

// Success - green
<HighlightBox variant="success" />

// Warning - amber/yellow
<HighlightBox variant="warning" />
```

## TypeScript Types

All components are fully typed. Import types if needed:

```tsx
import type { HeroSectionProps } from '@/components/advertorial/HeroSection';
import type { SoftCTAProps } from '@/components/advertorial/SoftCTA';
```

## Troubleshooting

### Image not showing
- Check imageUrl path
- Verify image exists in public folder
- Add to next.config.js if external domain

### Styling not applying
- Check Tailwind config includes component paths
- Verify no conflicting global styles
- Use browser DevTools to inspect

### TypeScript errors
- Ensure all required props are provided
- Check prop types match expected values
- Run `npm run type-check`

## Need Help?

- Check component source files for detailed JSDoc comments
- Review main page.tsx for usage examples
- Consult Next.js 14 documentation for App Router patterns
- Test components in isolation before integration
