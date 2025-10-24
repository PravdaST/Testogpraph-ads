# Quick Start: Testosterone Secret Advertorial

**Location:** `D:\Automation\All Testograph Ecosystem\testograph-ads`

---

## What Was Built

A complete advertorial landing page with 5 reusable components, ready for content integration.

### Files Created: 12

#### Core Components (5)
1. `components/advertorial/ArticleHeader.tsx` - Editorial header
2. `components/advertorial/HeroSection.tsx` - Article hero
3. `components/advertorial/ArticleBody.tsx` - Content container
4. `components/advertorial/SoftCTA.tsx` - Conversion CTAs
5. `components/advertorial/Disclaimer.tsx` - Legal footer

#### Main Page
6. `app/advertorials/testosterone-secret/page.tsx` - Complete advertorial page

#### Documentation (6)
7. `components/advertorial/index.ts` - Component exports
8. `components/advertorial/COMPONENTS_GUIDE.md` - Component reference
9. `components/advertorial/DESIGN_SYSTEM.md` - Visual design specs
10. `app/advertorials/testosterone-secret/README.md` - Page documentation
11. `app/advertorials/testosterone-secret/DELIVERY_SUMMARY.md` - Full delivery report
12. `QUICKSTART_ADVERTORIAL.md` - This file

---

## Quick Start (3 Steps)

### Step 1: Install Dependencies (if needed)
```bash
cd "D:\Automation\All Testograph Ecosystem\testograph-ads"
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: View Page
Open browser: `http://localhost:3000/advertorials/testosterone-secret`

---

## For Copywriters: How to Add Content

### File to Edit
```
app/advertorials/testosterone-secret/page.tsx
```

### Quick Edit Locations

#### 1. Change Hero Headline (Lines 68-76)
```tsx
<HeroSection
  category="Мъжко Здраве"
  headline="YOUR NEW HEADLINE HERE"  // ← Change this
  subheadline="YOUR SUBHEADLINE"     // ← Change this
  author="Д-р Емил Георгиев"
  date="2025-01-15"
  readTime="8"
/>
```

#### 2. Update Article Content (Lines 80+)
Replace paragraphs inside `<ArticleBody>`:

```tsx
<ArticleBody>
  <ArticleSection>
    <p>
      Replace this paragraph with your advertorial copy...
    </p>
  </ArticleSection>
</ArticleBody>
```

#### 3. Customize CTAs (Throughout page.tsx)
```tsx
<SoftCTA
  headline="Your CTA Headline"       // ← Change this
  description="Your CTA description" // ← Change this
  ctaText="Your Button Text"         // ← Change this
  link="https://shop.testograph.eu/products/testograph-starter?utm_source=advertorial"
  variant="boxed"
/>
```

---

## Component Usage Examples

### Add a Pull Quote
```tsx
<PullQuote
  quote="Your important quote here"
  attribution="Dr. Name"
/>
```

### Add a Highlight Box
```tsx
<HighlightBox
  title="Key Takeaway"
  variant="success"  // or 'info' or 'warning'
>
  <p>Your highlighted content</p>
</HighlightBox>
```

### Add a Product Mention
```tsx
<ProductMention
  productName="Testograph System"
  link="https://shop.testograph.eu/products/testograph-starter"
  description="Dr. Georgiev recommends"
/>
```

### Add Inline Link
```tsx
<p>
  Learn more about <InlineCTA text="the system" link="https://..." />
</p>
```

---

## File Locations (Full Paths)

### Components
```
D:\Automation\All Testograph Ecosystem\testograph-ads\components\advertorial\ArticleHeader.tsx
D:\Automation\All Testograph Ecosystem\testograph-ads\components\advertorial\HeroSection.tsx
D:\Automation\All Testograph Ecosystem\testograph-ads\components\advertorial\ArticleBody.tsx
D:\Automation\All Testograph Ecosystem\testograph-ads\components\advertorial\SoftCTA.tsx
D:\Automation\All Testograph Ecosystem\testograph-ads\components\advertorial\Disclaimer.tsx
```

### Main Page
```
D:\Automation\All Testograph Ecosystem\testograph-ads\app\advertorials\testosterone-secret\page.tsx
```

### Documentation
```
D:\Automation\All Testograph Ecosystem\testograph-ads\components\advertorial\COMPONENTS_GUIDE.md
D:\Automation\All Testograph Ecosystem\testograph-ads\components\advertorial\DESIGN_SYSTEM.md
D:\Automation\All Testograph Ecosystem\testograph-ads\app\advertorials\testosterone-secret\README.md
D:\Automation\All Testograph Ecosystem\testograph-ads\app\advertorials\testosterone-secret\DELIVERY_SUMMARY.md
```

---

## Key Features

### Design
- Clean, editorial aesthetics (looks like news article, not ad)
- Mobile-first responsive design
- Professional typography (Georgia serif for body)
- Trust-building visual elements

### Technical
- Next.js 14 App Router (Server Components)
- TypeScript (fully typed)
- Tailwind CSS (utility-first styling)
- SEO optimized (metadata, Open Graph, Twitter Cards)
- Accessibility compliant (WCAG 2.1 AA)

### Conversion
- 3 soft CTAs (non-aggressive)
- UTM tracking on all links
- Trust badges (30-day guarantee, free shipping, secure payment)
- Legal disclaimers (advertorial, medical, results)

---

## Design Specs

### Colors
- Primary (Green): #10b981
- Text: Neutral-900 (#171717)
- Background: White

### Typography
- Headings: Inter (sans-serif), bold
- Body: Georgia (serif), 19px, line-height 1.75
- Max reading width: 720px

### Responsive
- Mobile: < 640px (stacked layout)
- Tablet: 640px - 1024px
- Desktop: > 1024px (centered, max-width)

---

## UTM Tracking

All CTAs include tracking:
```
utm_source=advertorial
utm_medium=testosterone-secret
utm_campaign=cold-traffic-2025
utm_content=[soft-cta-1, product-mention-1, soft-cta-2, soft-cta-3]
```

---

## Next Steps

### For Development
1. Run `npm run dev` to start local server
2. Edit `page.tsx` to customize content
3. Test on mobile devices
4. Add actual images (replace placeholders)
5. Integrate analytics (Facebook Pixel, Google Analytics)

### For Content
1. Open `page.tsx` in your editor
2. Replace placeholder text with advertorial copy
3. Customize headlines and CTAs
4. Add pull quotes where appropriate
5. Review and proofread

### For Deployment
1. Run `npm run build` to create production build
2. Test production build with `npm start`
3. Deploy to hosting (Vercel, Netlify, etc.)
4. Set up analytics tracking
5. Monitor performance and conversions

---

## Common Tasks

### Change Main Headline
File: `app/advertorials/testosterone-secret/page.tsx`
Line: ~71
```tsx
headline="YOUR NEW HEADLINE"
```

### Add New Section
File: `app/advertorials/testosterone-secret/page.tsx`
Inside `<ArticleBody>`:
```tsx
<ArticleSection>
  <h2>Your Section Title</h2>
  <p>Your content...</p>
</ArticleSection>
```

### Change CTA Button Text
File: `app/advertorials/testosterone-secret/page.tsx`
Find `<SoftCTA>`:
```tsx
ctaText="Your New Button Text"
```

### Update Author Info
File: `app/advertorials/testosterone-secret/page.tsx`
Line: ~73-74
```tsx
author="Your Author Name"
authorTitle="Your Title"
```

---

## Troubleshooting

### Page Not Loading
1. Check if dev server is running (`npm run dev`)
2. Verify URL: `localhost:3000/advertorials/testosterone-secret`
3. Check terminal for errors

### Styling Not Applying
1. Ensure Tailwind CSS is configured
2. Check `tailwind.config.ts` includes component paths
3. Restart dev server

### TypeScript Errors
1. Ensure all required props are provided
2. Check prop types match expected values
3. Run `npm run type-check` for details

### Import Errors
1. Verify file paths are correct
2. Check `@/` alias is configured in `tsconfig.json`
3. Ensure components are exported correctly

---

## Documentation References

**Detailed Guides:**
- Component API: `components/advertorial/COMPONENTS_GUIDE.md`
- Design specs: `components/advertorial/DESIGN_SYSTEM.md`
- Page details: `app/advertorials/testosterone-secret/README.md`
- Full delivery: `app/advertorials/testosterone-secret/DELIVERY_SUMMARY.md`

**External Resources:**
- Next.js 14 Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

## Support

For questions about:
- **Components:** Check JSDoc comments in component files
- **Usage:** Review `COMPONENTS_GUIDE.md`
- **Design:** Consult `DESIGN_SYSTEM.md`
- **Integration:** Read `README.md` in page directory

---

## Quality Checklist

Before going live:
- [ ] Content proofread and finalized
- [ ] All links tested (especially UTM tracking)
- [ ] Mobile responsive checked
- [ ] Accessibility tested (keyboard navigation, screen reader)
- [ ] Images optimized and added
- [ ] Analytics integrated (Facebook Pixel, GA)
- [ ] Legal disclaimers reviewed
- [ ] SEO metadata updated
- [ ] Page speed tested (Lighthouse)
- [ ] Cross-browser tested

---

## Production Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Configure environment variables
- [ ] Set up analytics tracking IDs
- [ ] Configure proper domain/hosting
- [ ] Set up SSL certificate
- [ ] Test all CTAs and tracking
- [ ] Monitor initial performance
- [ ] Set up A/B testing (if planned)
- [ ] Document any custom changes

---

**Quick Start Version:** 1.0.0
**Created:** 2025-01-22
**Status:** Ready for Use

---

**Start here, then dive deeper into the detailed documentation as needed!**
