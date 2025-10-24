# 📷 IMAGE HANDLING GUIDE

> **Цел:** Smart auto-recognition на картинки (paths, URLs, placeholders) за advertorial pages

---

## OVERVIEW

Agent-ът автоматично разпознава 4 типа image references в Markdown input:

1. **Локални пътища** → `/images/product.jpg`
2. **External URLs** → `https://cdn.example.com/photo.jpg`
3. **Filenames** → `testimonial-ivan.jpg` (търси в `/public/images/`)
4. **Placeholders** → `[Placeholder: описание]`

---

## INPUT FORMATS

### Format 1: Локален път (Absolute/Relative)

```markdown
[Image: /images/product.jpg]
[Image: /public/testimonials/ivan.jpg]
[Image: ./hero-image.png]
```

**Agent Output:**
```tsx
<Image
  src="/images/product.jpg"
  alt="TestoUP testosterone optimization supplement bottle"
  width={800}
  height={600}
  className="rounded-xl"
/>
```

**Rules:**
- Ако path започва с `/` → използва директно
- Ако path започва с `./` → премахва `.` и добавя към `/public/`
- Ако path е relative (`images/foo.jpg`) → добавя `/` в началото

---

### Format 2: External URL

```markdown
[Image: https://cdn.testograph.eu/products/testoup.jpg]
[Image: http://example.com/photo.png]
```

**Agent Output:**
```tsx
<Image
  src="https://cdn.testograph.eu/products/testoup.jpg"
  alt="TestoUP product photo"
  width={800}
  height={600}
  className="rounded-xl"
/>
```

**Rules:**
- Ако path започва с `http://` или `https://` → external URL
- Използва Next.js Image component с external URL support
- Auto-generates alt text based on context

---

### Format 3: Filename Only (Auto-search)

```markdown
[Image: testimonial-ivan.jpg]
[Image: product-bottle.png]
[Image: hero-bg.webp]
```

**Agent behavior:**
1. Търси file в `/public/images/`
2. Ако намери → използва като `/images/testimonial-ivan.jpg`
3. Ако НЕ намери → създава placeholder

**Agent Output (if found):**
```tsx
<Image
  src="/images/testimonial-ivan.jpg"
  alt="Testimonial photo of Ivan D., 38, from Sofia"
  width={400}
  height={400}
  className="rounded-full"
/>
```

**Agent Output (if NOT found):**
```tsx
{/* Creates placeholder - see Format 4 */}
```

---

### Format 4: Placeholder (Descriptive)

```markdown
[Placeholder: male testimonial photo, 38 years old, casual setting, smiling]
[Placeholder: product bottle on white background, 60 capsules visible]
[Placeholder: clinical study results graph, testosterone levels over 90 days]
```

**Agent Output:**
```tsx
<div className="w-full h-64 bg-neutral-100 rounded-xl flex items-center justify-center border-2 border-dashed border-neutral-300">
  <div className="text-center px-4">
    {/* Icon */}
    <svg className="w-12 h-12 text-neutral-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>

    <p className="text-sm text-neutral-600 font-semibold mb-1">
      Placeholder Image
    </p>
    <p className="text-xs text-neutral-500 leading-relaxed">
      Male testimonial photo, 38 years old, casual setting, smiling
    </p>
  </div>
</div>
```

**Placeholder Types:**
- **Hero images:** `h-96` or `h-[600px]`
- **Testimonial photos:** `h-64` or `w-16 h-16` (circular)
- **Product photos:** `h-80`
- **Graphs/Charts:** `h-64` with chart icon

---

## AUTO-RECOGNITION LOGIC

### Detection Algorithm:

```typescript
function detectImageType(input: string): ImageType {
  // 1. Check for external URL
  if (input.startsWith('http://') || input.startsWith('https://')) {
    return 'EXTERNAL_URL';
  }

  // 2. Check for placeholder keyword
  if (input.toLowerCase().includes('placeholder:') || input.startsWith('[Placeholder')) {
    return 'PLACEHOLDER';
  }

  // 3. Check for absolute path
  if (input.startsWith('/')) {
    return 'ABSOLUTE_PATH';
  }

  // 4. Check for relative path
  if (input.startsWith('./') || input.startsWith('../')) {
    return 'RELATIVE_PATH';
  }

  // 5. Filename only (no slashes)
  if (!input.includes('/') && (input.endsWith('.jpg') || input.endsWith('.png') || input.endsWith('.webp'))) {
    return 'FILENAME_SEARCH';
  }

  // 6. Fallback: treat as description for placeholder
  return 'PLACEHOLDER';
}
```

---

## ALT TEXT GENERATION

Agent автоматично генерира SEO-friendly alt texts based on context:

### Example 1: Product Image

**Input:**
```markdown
[Image: /images/testoup-bottle.jpg]
```

**Context:** Product section
**Generated Alt:**
```
"TestoUP testosterone optimization supplement bottle showing 60 capsules, natural ingredients"
```

---

### Example 2: Testimonial Photo

**Input:**
```markdown
[Placeholder: male testimonial photo]
```

**Context:** Testimonial for "Иван Д., 38 г., София"
**Generated Alt:**
```
"Placeholder: Testimonial photo of Ivan D., 38 years old, from Sofia"
```

---

### Example 3: Study Graph

**Input:**
```markdown
[Image: /charts/testosterone-results.png]
```

**Context:** Finding #1 section
**Generated Alt:**
```
"Clinical study results graph showing testosterone level increase from 318 ng/dL to 451 ng/dL over 90-day period"
```

---

## PLACEHOLDER DESIGN VARIANTS

### Variant 1: Hero Image Placeholder

```tsx
<div className="w-full h-96 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-neutral-300">
  <div className="text-center px-4">
    <svg className="w-16 h-16 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Image icon SVG */}
    </svg>
    <p className="text-lg text-neutral-700 font-semibold mb-2">
      Hero Image Placeholder
    </p>
    <p className="text-sm text-neutral-500 max-w-md">
      Clinical study hero image showing scientist in lab coat analyzing testosterone test results
    </p>
    <p className="text-xs text-neutral-400 mt-2">
      Recommended: 1200x600px
    </p>
  </div>
</div>
```

---

### Variant 2: Testimonial Photo Placeholder (Circular)

```tsx
<div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center border-2 border-dashed border-neutral-300">
  <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
</div>
```

**With initials fallback:**
```tsx
<div className="w-16 h-16 rounded-full bg-teal-200 flex items-center justify-center text-2xl font-bold text-teal-700">
  ИД {/* Initials: Иван Д. */}
</div>
```

---

### Variant 3: Product Image Placeholder

```tsx
<div className="w-full h-80 bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-neutral-200 shadow-sm">
  <div className="text-center px-4">
    <svg className="w-12 h-12 text-neutral-300 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
    </svg>
    <p className="text-sm text-neutral-500 font-semibold">Product Image</p>
    <p className="text-xs text-neutral-400 mt-1">TestoUP bottle (60 capsules)</p>
  </div>
</div>
```

---

### Variant 4: Chart/Graph Placeholder

```tsx
<div className="w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-200">
  <div className="text-center px-4">
    <svg className="w-12 h-12 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    <p className="text-sm text-blue-700 font-semibold">Chart Placeholder</p>
    <p className="text-xs text-blue-600 mt-1">Testosterone levels over 90-day period</p>
  </div>
</div>
```

---

## IMAGE SIZES & DIMENSIONS

### Recommended Sizes:

| Image Type | Dimensions | Aspect Ratio | File Size |
|------------|------------|--------------|-----------|
| Hero Image | 1200x600px | 2:1 | < 200KB |
| Product Photo | 800x800px | 1:1 | < 150KB |
| Testimonial Photo | 400x400px | 1:1 | < 100KB |
| Testimonial Circular | 200x200px | 1:1 | < 50KB |
| Chart/Graph | 800x500px | 16:10 | < 100KB |
| Full-width Banner | 1920x400px | 4.8:1 | < 250KB |

### Format Recommendations:

- **Photos (people, products):** `.jpg` or `.webp`
- **Graphics, logos, icons:** `.png` or `.svg`
- **Charts, graphs:** `.png` or `.svg`
- **Prefer `.webp`** for best compression (Next.js converts automatically)

---

## PLACEHOLDER REPLACEMENT WORKFLOW

### Step 1: Agent Creates Page with Placeholders

Agent creates advertorial page and returns list:

```
📷 Placeholders Created:

1. Hero Image
   Path: /images/testoup-hero.jpg
   Description: Clinical study hero image, scientist in lab
   Dimensions: 1200x600px
   Status: PLACEHOLDER

2. Testimonial Photo - Иван Д.
   Path: /images/testimonials/ivan.jpg
   Description: Male, 38 years old, casual setting, smiling
   Dimensions: 400x400px
   Status: PLACEHOLDER

3. Product Bottle
   Path: /images/testoup-bottle.jpg
   Description: TestoUP bottle, 60 capsules, white background
   Dimensions: 800x800px
   Status: PLACEHOLDER
```

---

### Step 2: User Provides Real Images

User provides images in 3 ways:

#### Option A: Upload files
```
User uploads: ivan-testimonial.jpg → save to /public/images/testimonials/ivan.jpg
```

#### Option B: Provide URLs
```markdown
Update placeholder #2 with: https://cdn.testograph.eu/testimonials/ivan.jpg
```

#### Option C: Use existing files
```markdown
Use existing file: /public/images/team/ivan-photo.jpg for placeholder #2
```

---

### Step 3: Agent Updates References

Agent updates code:

**Before (Placeholder):**
```tsx
<div className="w-16 h-16 rounded-full bg-neutral-200...">
  {/* Placeholder */}
</div>
```

**After (Real Image):**
```tsx
<Image
  src="/images/testimonials/ivan.jpg"
  alt="Ivan D., 38, from Sofia - Study Participant testimonial"
  width={400}
  height={400}
  className="w-16 h-16 rounded-full object-cover"
/>
```

---

## MIXED INPUT EXAMPLE

**Markdown Input:**
```markdown
### Hero
[Image: /images/hero.jpg]

### Testimonial 1
**Иван Д., 38 г.**
[Placeholder: male testimonial photo, casual, smiling]

### Product
[Image: https://cdn.testograph.eu/products/testoup-bottle.png]

### Chart
[Image: testosterone-graph.png]
```

**Agent Detection:**
1. `/images/hero.jpg` → ABSOLUTE_PATH → use directly
2. `Placeholder: male...` → PLACEHOLDER → create placeholder div
3. `https://cdn...` → EXTERNAL_URL → use external URL
4. `testosterone-graph.png` → FILENAME_SEARCH → search in `/public/images/`
   - If found → use `/images/testosterone-graph.png`
   - If NOT found → create placeholder

---

## OUTPUT DELIVERABLES

After creating page, agent provides:

### 1. Placeholder Report

```markdown
📷 IMAGE STATUS REPORT

✅ Real Images (2):
1. Hero: /images/hero.jpg (FOUND)
2. Product: https://cdn.testograph.eu/products/testoup-bottle.png (EXTERNAL)

📷 Placeholders Created (2):
3. Testimonial (Иван Д.):
   - Current: PLACEHOLDER (initials: ИД)
   - Needed: /images/testimonials/ivan.jpg
   - Specs: 400x400px, male, 38yo, casual, smiling
   - Priority: HIGH (user-facing testimonial)

4. Chart (Testosterone Graph):
   - Current: PLACEHOLDER
   - Needed: /images/charts/testosterone-graph.png
   - Specs: 800x500px, line graph, 90-day timeline
   - Priority: MEDIUM (data visualization)
```

---

### 2. Replacement Instructions

```markdown
🔄 HOW TO REPLACE PLACEHOLDERS

Option 1: Upload Files
1. Save images to: /public/images/testimonials/ and /public/images/charts/
2. Run: npm run update-images (agent will auto-detect and update)

Option 2: Provide URLs
Update the Markdown input with:
[Image: https://your-cdn.com/ivan.jpg] instead of [Placeholder: ...]

Option 3: Manual Update
Edit page.tsx directly and replace placeholder divs with Image components
```

---

## BEST PRACTICES

### ✅ DO:
- Provide descriptive placeholder text ("male, 38, smiling")
- Use consistent naming (`testimonial-name.jpg`)
- Keep images in organized folders (`/testimonials/`, `/products/`)
- Optimize image sizes before upload (< 200KB)
- Use `.webp` format when possible

### ❌ DON'T:
- Use vague descriptions ("image here")
- Mix naming conventions (`Ivan.jpg`, `ivan-photo.JPG`)
- Put all images in root `/images/` (organize!)
- Upload huge files (> 1MB)
- Use `.bmp` or uncompressed formats

---

## TROUBLESHOOTING

### Problem: "Image not showing"

**Check:**
1. Is path correct? (`/images/foo.jpg` not `/public/images/foo.jpg`)
2. Does file exist in `/public/images/`?
3. Is filename case-sensitive? (`Ivan.jpg` ≠ `ivan.jpg` on Linux)

---

### Problem: "External image not loading"

**Check:**
1. Is URL publicly accessible?
2. Does Next.js config allow external domain?

**Fix `next.config.js`:**
```javascript
images: {
  domains: ['cdn.testograph.eu', 'example.com'],
}
```

---

### Problem: "Placeholder not generating"

**Check:**
1. Is syntax correct? `[Placeholder: description]` not `[Image: placeholder]`
2. Does description have minimum content?

---

## ADVANCED: CONDITIONAL PLACEHOLDERS

For advanced users - show different placeholder based on context:

```tsx
{imageExists('/images/testimonial.jpg') ? (
  <Image src="/images/testimonial.jpg" ... />
) : (
  <PlaceholderComponent description="Male testimonial, 38yo" />
)}
```

---

**Version:** 1.0
**Last Updated:** 2025-01-23
**Maintained by:** Testograph Development Team
