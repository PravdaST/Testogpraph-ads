# 🎬 USER EXPERIENCE REVIEW TEMPLATE

> **Advertorial Style:** Product-in-Use Testimonial / UGC-Inspired Review Format

**Best for:** Physical products, wearables, lifestyle items, tech gadgets, fashion accessories

**Conversion rate:** 3.5-5.5%

**Key strength:** Combines personal storytelling with social proof through multiple customer testimonials

---

## 📋 TEMPLATE OVERVIEW

### What Makes This Template Unique?

Unlike data-driven or interview formats, this template creates an **emotional journey** through the lens of actual user experience. It mimics organic user-generated content (UGC) while maintaining advertorial conversion elements.

### Core Structure:
```
┌──────────────────────────────────────────┐
│  [Hero Image: Product In Use]           │
│  Lifestyle shot showing product benefit  │
└──────────────────────────────────────────┘
│  HOOK: Personal Story Headline          │
│  "How I discovered [transformation]"     │
├──────────────────────────────────────────┤
│  STORY SECTION: First-Person Narrative  │
│  • Problem (before)                      │
│  • Discovery moment                      │
│  • Transformation (after)                │
├──────────────────────────────────────────┤
│  PRODUCT INTRODUCTION                    │
│  • Name + tagline                        │
│  • Hero product image                    │
│  • Key benefits (3-4 bullet points)     │
├──────────────────────────────────────────┤
│  ┌────────────┬────────────┬──────────┐ │
│  │ Review #1  │ Review #2  │ Review #3│ │
│  │ ⭐⭐⭐⭐⭐    │ ⭐⭐⭐⭐⭐    │ ⭐⭐⭐⭐⭐  │ │
│  │ [Image]    │ [Image]    │ [Image]  │ │
│  │ "Quote"    │ "Quote"    │ "Quote"  │ │
│  │ - Name     │ - Name     │ - Name   │ │
│  └────────────┴────────────┴──────────┘ │
├──────────────────────────────────────────┤
│  FEATURES SHOWCASE                       │
│  • How to personalize                    │
│  • Step-by-step usage                    │
│  • Lifestyle integration                 │
├──────────────────────────────────────────┤
│  SOCIAL PROOF SECTION                    │
│  • "X people love this"                  │
│  • Social media mentions                 │
│  • Community testimonials                │
├──────────────────────────────────────────┤
│  PRICE POSITIONING                       │
│  • Affordable luxury angle               │
│  • Comparison to expensive alternatives  │
│  • Limited time offer                    │
├──────────────────────────────────────────┤
│  FINAL CTA                               │
│  • Product image                         │
│  • Price + discount                      │
│  • Order button                          │
│  • Trust badges                          │
└──────────────────────────────────────────┘
```

---

## 🎯 WHEN TO USE THIS TEMPLATE

### ✅ Perfect For:

- **Physical products** with visible lifestyle benefits
- **Wearable tech** (smartwatches, fitness trackers, accessories)
- **Fashion items** (shoes, bags, jewelry, clothing)
- **Beauty products** with transformation results
- **Home gadgets** that improve daily life
- **Fitness equipment** with before/after potential

### ✅ Audience Types:

- **Aspirational consumers** (want lifestyle upgrade)
- **Social media savvy** (influenced by UGC)
- **Value seekers** (want quality without premium price)
- **Skeptics** (need social proof from "real people")
- **Late adopters** (need validation from community)

### ❌ Not Ideal For:

- **Abstract services** (no visual product-in-use)
- **Complex software** (needs more technical explanation)
- **B2B products** (professional, not lifestyle-focused)
- **Medical devices** (requires clinical, not emotional approach)
- **High-ticket luxury** (conflicts with "affordable" positioning)

---

## 🏗️ DETAILED SECTION BREAKDOWN

### 1. HERO SECTION (Product In-Use Image)

**Purpose:** Instant visual proof of lifestyle benefit

**Elements:**
- Full-width hero image (1920×800px recommended)
- Shows product being used in aspirational context
- Optional: Text overlay with hook headline

**Image Guidelines:**
```tsx
<div className="relative w-full h-[500px] lg:h-[600px]">
  <Image
    src="/product-lifestyle-hero.jpg"
    fill
    className="object-cover"
    alt="[Product] in daily use"
    priority
  />
  {/* Optional overlay */}
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <h1 className="text-4xl lg:text-6xl font-bold text-white text-center px-4">
      Discover How [Product] Transformed My Daily Routine
    </h1>
  </div>
</div>
```

**Best Practices:**
- Use authentic lifestyle photography (not overly polished stock photos)
- Show product in context (on wrist, in bag, in use)
- Include people (relatability factor)
- Natural lighting > studio lighting

---

### 2. HOOK HEADLINE + PERSONAL STORY

**Purpose:** Build emotional connection through relatable narrative

**Formula:**
```
Hook: "[Question that triggers pain point]"
Subhead: "Discover the [transformation] without [barrier]"

Story Structure:
1. BEFORE: "I used to [struggle/want/envy]..."
2. BARRIER: "But I couldn't afford/find/access..."
3. DISCOVERY: "Then I found [product]..."
4. TRANSFORMATION: "Now, my life is [better/easier/more...]"
```

**Example (Smartwatch):**
```tsx
<section className="max-w-4xl mx-auto px-6 py-12">
  <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
    "How much did you invest in smartwatches?"
  </h2>
  <p className="text-xl text-neutral-600 mb-8">
    Uncover the game-changing solution for a premium smartwatch experience without the premium price tag.
  </p>

  <div className="prose prose-lg max-w-none">
    <p>Here's a little secret I'm hesitant to share... I used to admire those high-end smartwatches worn by others, thinking they were out of my reach.</p>

    <p>My partner would say, <strong>"We can't afford those expensive smartwatches."</strong></p>

    <p>But now, I've discovered a game-changing smartwatch that offers premium features without the exorbitant price tag. It's time to upgrade your lifestyle without breaking the bank.</p>
  </div>
</section>
```

**Tone:**
- Conversational, first-person ("I", "my")
- Vulnerable (admits struggle/limitation)
- Relatable (common pain point)
- Aspirational (hints at transformation)

---

### 3. PRODUCT INTRODUCTION SECTION

**Purpose:** Formally introduce the product with visual + key benefits

**Structure:**
```tsx
<section className="max-w-6xl mx-auto px-6 py-16 bg-neutral-50">
  {/* Product Name + Tagline */}
  <div className="text-center mb-12">
    <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
      GEMWAT Smartwatch
    </h2>
    <p className="text-2xl text-neutral-600">
      Unleash a captivating smartwatch that rivals high-end boutiques
    </p>
  </div>

  {/* Hero Product Image */}
  <div className="max-w-2xl mx-auto mb-12">
    <Image
      src="/product-main-image.jpg"
      width={800}
      height={600}
      className="w-full rounded-lg shadow-xl"
      alt="GEMWAT Smartwatch"
    />
  </div>

  {/* Key Benefits Grid */}
  <div className="grid md:grid-cols-3 gap-8">
    <div className="text-center">
      <div className="text-5xl mb-4">⚡</div>
      <h3 className="text-xl font-bold mb-2">Advanced Features</h3>
      <p className="text-neutral-600">
        Premium functionality without the premium price
      </p>
    </div>
    <div className="text-center">
      <div className="text-5xl mb-4">🎨</div>
      <h3 className="text-xl font-bold mb-2">Customizable</h3>
      <p className="text-neutral-600">
        Personalize to match your unique style
      </p>
    </div>
    <div className="text-center">
      <div className="text-5xl mb-4">💎</div>
      <h3 className="text-xl font-bold mb-2">Luxury Feel</h3>
      <p className="text-neutral-600">
        Sleek design that turns heads
      </p>
    </div>
  </div>
</section>
```

---

### 4. CUSTOMER REVIEWS GRID

**Purpose:** Social proof through multiple "real customer" testimonials

**Layout Pattern:**
```
Desktop (3 columns):
┌──────────┬──────────┬──────────┐
│ Review 1 │ Review 2 │ Review 3 │
└──────────┴──────────┴──────────┘

Mobile (stacked):
┌──────────┐
│ Review 1 │
├──────────┤
│ Review 2 │
├──────────┤
│ Review 3 │
└──────────┘
```

**Review Card Structure:**
```tsx
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-12">
    What Our Community Says
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Review Card #1 */}
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-green-500 text-xl">★</span>
          ))}
        </div>
        <span className="text-lg font-semibold">5/5</span>
      </div>

      {/* Product Image (Product In Use) */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <Image
          src="/review-product-image-1.jpg"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
          alt="Product in use"
        />
      </div>

      {/* Review Text */}
      <p className="text-neutral-700 mb-4 leading-relaxed">
        "This smartwatch is a game-changer! It seamlessly integrates with my daily routine, keeping me connected and organized. The sleek design and advanced features make it a must-have accessory for tech enthusiasts."
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
        <Image
          src="/reviewer-avatar-1.jpg"
          width={40}
          height={40}
          className="rounded-full"
          alt="James Smith"
        />
        <div>
          <p className="font-semibold text-neutral-900">James Smith</p>
          <p className="text-sm text-neutral-600">Verified Buyer</p>
        </div>
      </div>
    </div>

    {/* Repeat for Review Card #2, #3 */}
  </div>
</section>
```

**Review Writing Tips:**
- **Specific details** > generic praise ("seamlessly integrates" vs "good")
- **Use cases** mentioned ("daily routine", "fitness tracking")
- **Emotion + logic** balance ("blown away" + "accurate tracking")
- **Varied length** (some short, some detailed)
- **Different personas** (tech enthusiast, fitness buff, busy professional)

**Photo Guidelines:**
- Show product IN USE (on wrist, not just product shot)
- Lifestyle context (gym, office, outdoors)
- Natural, not staged
- Mix of close-ups and environment shots

---

### 5. FEATURES SHOWCASE / HOW TO USE

**Purpose:** Practical guidance + personalization options

**Structure:**
```tsx
<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-12">
    My Smartwatch: The Revolution in Smart Living
  </h2>

  {/* Feature Highlight #1 */}
  <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
    <div>
      <h3 className="text-2xl font-bold mb-4">
        Personalize Your Experience
      </h3>
      <p className="text-lg text-neutral-700 mb-6">
        In just a few effortless interactions, you can unlock the full potential of my smartwatch, making it ready for any aspect of your life.
      </p>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <span>Select desired features and apps that align with your daily preferences</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <span>Customize watch faces to match your style</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <span>Sync with your phone for seamless connectivity</span>
        </li>
      </ul>
    </div>
    <div>
      <Image
        src="/feature-personalization.jpg"
        width={600}
        height={400}
        className="rounded-lg shadow-xl"
        alt="Personalize your smartwatch"
      />
    </div>
  </div>

  {/* Feature Highlight #2 - Image LEFT, text RIGHT */}
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="md:order-2">
      <h3 className="text-2xl font-bold mb-4">
        Advanced Fitness Tracking
      </h3>
      <p className="text-lg text-neutral-700 mb-6">
        Track your workouts, monitor heart rate, and achieve your fitness goals with precision and ease.
      </p>
    </div>
    <div className="md:order-1">
      <Image
        src="/feature-fitness.jpg"
        width={600}
        height={400}
        className="rounded-lg shadow-xl"
        alt="Fitness tracking"
      />
    </div>
  </div>
</section>
```

**Pattern:** Alternate image left/right for visual rhythm

---

### 6. SOCIAL PROOF SECTION

**Purpose:** Amplify credibility through community validation

```tsx
<section className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
  <h2 className="text-3xl font-bold text-center mb-6">
    My Smartwatch Takes the Digital Realm by Storm
  </h2>

  <p className="text-lg text-neutral-700 text-center max-w-3xl mx-auto mb-12">
    Social media is abuzz with transformative stories about my smartwatch. With countless posts and communities dedicated to its revolutionary features, it's evident why traditional devices are facing the heat.
  </p>

  {/* Stats Grid */}
  <div className="grid md:grid-cols-3 gap-8 mb-12">
    <div className="text-center">
      <p className="text-5xl font-bold text-blue-600 mb-2">50K+</p>
      <p className="text-neutral-600">Happy Customers</p>
    </div>
    <div className="text-center">
      <p className="text-5xl font-bold text-purple-600 mb-2">4.9/5</p>
      <p className="text-neutral-600">Average Rating</p>
    </div>
    <div className="text-center">
      <p className="text-5xl font-bold text-green-600 mb-2">95%</p>
      <p className="text-neutral-600">Would Recommend</p>
    </div>
  </div>

  {/* Social Media Mentions */}
  <div className="flex flex-wrap justify-center gap-4">
    <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">
      #SmartWatchRevolution
    </span>
    <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">
      #AffordableLuxury
    </span>
    <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">
      #TechForEveryone
    </span>
  </div>
</section>
```

---

### 7. PRICE POSITIONING SECTION

**Purpose:** Frame product as "affordable luxury" alternative

**Key Messaging:**
- Premium features WITHOUT premium price
- "Less than a night out"
- Compare to expensive alternatives
- Limited time offer urgency

```tsx
<section className="max-w-5xl mx-auto px-6 py-16">
  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 border-2 border-orange-200">
    <h2 className="text-3xl font-bold text-center mb-6">
      Affordable Style. Elevate Your Digital Experience.
    </h2>

    <p className="text-lg text-neutral-700 text-center max-w-3xl mx-auto mb-8">
      While the value of this game-changing smartwatch is unmatched, we offer an exclusive deal that makes it even more irresistible. For a limited time, get this revolutionary device for a fraction of the cost - <strong>less than a night out</strong>.
    </p>

    {/* Price Comparison */}
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-xl p-6 border-2 border-neutral-200">
        <p className="text-sm uppercase text-neutral-500 mb-2">Traditional High-End</p>
        <p className="text-4xl font-bold text-neutral-400 line-through mb-2">$599</p>
        <p className="text-sm text-neutral-600">Premium brand smartwatches</p>
      </div>
      <div className="bg-white rounded-xl p-6 border-2 border-green-500 relative">
        <span className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          LIMITED OFFER
        </span>
        <p className="text-sm uppercase text-green-600 mb-2">GEMWAT Smartwatch</p>
        <p className="text-5xl font-bold text-green-600 mb-2">$89</p>
        <p className="text-sm text-neutral-600">Same features, better value</p>
      </div>
    </div>

    <p className="text-center text-neutral-600 mb-6">
      Enjoy the savings and elevate your digital lifestyle, experiencing the convenience and sophistication of a high-end smartwatch without the extravagant price.
    </p>
  </div>
</section>
```

---

### 8. FINAL CTA SECTION

**Purpose:** Convert with clear, friction-free order path

```tsx
<section className="max-w-5xl mx-auto px-6 py-16">
  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border-2 border-green-300 shadow-2xl">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Product Image */}
      <div>
        <Image
          src="/product-final-cta.jpg"
          width={500}
          height={500}
          className="w-full rounded-lg shadow-xl"
          alt="GEMWAT Smartwatch"
        />
      </div>

      {/* CTA Content */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
          GEMWAT Smartwatch
        </h2>
        <p className="text-lg text-neutral-700 mb-6">
          Luxurious daily style, courtesy of my smartwatch.
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-5xl font-bold text-green-600">$89</span>
            <span className="text-2xl text-neutral-500 line-through">$599</span>
          </div>
          <p className="text-sm text-red-600 font-semibold">
            Save $510 - Limited Time Only!
          </p>
        </div>

        {/* Order Button */}
        <SoftCTA
          href={PRODUCT_LINK}
          text="Get My Smartwatch Now →"
          variant="primary"
          className="w-full text-center text-xl py-4"
        />

        {/* Trust Badges */}
        <div className="mt-6 pt-6 border-t border-green-200 space-y-2">
          <p className="text-sm text-neutral-600 flex items-center gap-2">
            <span className="text-green-600">✓</span> Free Shipping Worldwide
          </p>
          <p className="text-sm text-neutral-600 flex items-center gap-2">
            <span className="text-green-600">✓</span> 30-Day Money Back Guarantee
          </p>
          <p className="text-sm text-neutral-600 flex items-center gap-2">
            <span className="text-green-600">✓</span> Secure Checkout
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🎨 DESIGN GUIDELINES

### Color Palette

**Primary Colors:**
- **Green/Emerald** (#10B981): Trust, growth, "go" action
- **Blue/Sky** (#3B82F6): Reliability, technology
- **Amber/Orange** (#F59E0B): Urgency, savings

**Neutral Base:**
- Background: #FFFFFF (white)
- Text: #171717 (neutral-900)
- Secondary text: #737373 (neutral-500)
- Borders: #E5E5E5 (neutral-200)

**Accent Colors:**
- Success: #10B981 (green-500)
- Warning: #F59E0B (amber-500)
- Error/Urgency: #EF4444 (red-500)

### Typography

**Headings:**
```css
H1: 48-56px, font-weight: 700 (bold), line-height: 1.2
H2: 36-42px, font-weight: 700 (bold), line-height: 1.3
H3: 28-32px, font-weight: 600 (semibold), line-height: 1.4
```

**Body Text:**
```css
Body: 18-19px, font-weight: 400 (regular), line-height: 1.75
Large: 20-22px, font-weight: 400, line-height: 1.6
Small: 14-16px, font-weight: 400, line-height: 1.5
```

**Font Stack:**
- Headings: Inter (sans-serif)
- Body: Inter (consistent throughout)

### Spacing

**Section Padding:**
```css
Desktop: py-16 (64px top/bottom)
Mobile: py-12 (48px top/bottom)
```

**Content Max-Width:**
```css
Standard content: 1200px (max-w-6xl)
Narrow content (text): 800px (max-w-4xl)
Wide layouts: 1400px (max-w-7xl)
```

### Images

**Hero Image:**
- Dimensions: 1920×800px (desktop), 800×600px (mobile)
- Format: WebP with JPG fallback
- Aspect ratio: 16:9 or 21:9 (cinematic)

**Product Images:**
- Dimensions: 800×800px (square) or 800×600px (4:3)
- Format: WebP with PNG fallback
- Background: White or lifestyle context
- Loading: Lazy load (except hero)

**Review Card Images:**
- Dimensions: 400×300px (4:3 ratio)
- Shows product in use
- Natural lighting, authentic feel

---

## 📝 CONTENT WRITING GUIDELINES

### Voice & Tone

**Overall Tone:**
- Personal and conversational (first-person "I", "my")
- Enthusiastic but authentic (not over-the-top)
- Relatable and humble (admits struggles)
- Aspirational (paints vision of better life)

### Writing Formulas

**Personal Story Hook:**
```
1. Admission: "I used to [struggle/want/believe]..."
2. Barrier: "But [obstacle] held me back..."
3. Discovery: "Then I found [product]..."
4. Transformation: "Now, [positive outcome]..."
```

**Review Text:**
```
Pattern: Emotion + Specifics + Use Case
"[Emotional reaction]! [Specific features/benefits]. [How it fits my life/routine]."

Example:
"I'm blown away by the performance! The accurate fitness tracking and intuitive interface make my active lifestyle so much easier."
```

**Feature Description:**
```
Benefit-First Formula:
"[Outcome you get] + [How it works] + [Why it matters]"

Example:
"Track your workouts with precision (outcome) using advanced sensors and real-time monitoring (how) so you can achieve your fitness goals faster (why it matters)."
```

### Headline Formulas

**Hook Headlines:**
- Question format: "How much did you invest in [category]?"
- Discovery format: "I discovered the secret to [benefit] without [barrier]"
- Transformation format: "From [before state] to [after state] in [timeframe]"

**Section Headlines:**
- Benefit-driven: "Experience luxury and functionality with [product]"
- Social proof: "[Product] takes [market/social media] by storm"
- Affordability: "Affordable [category]. Elevate your [outcome]."

---

## ✅ IMPLEMENTATION CHECKLIST

### Pre-Launch:
- [ ] Collect 3-6 authentic customer testimonials (or write realistic ones)
- [ ] Gather product-in-use photography (lifestyle shots)
- [ ] Create product images (hero shot, detail shots, packaging)
- [ ] Get customer/reviewer photos (or use stock with authentic feel)
- [ ] Write personal story hook (relatable pain point → transformation)
- [ ] Define key product benefits (3-5 main points)
- [ ] Set pricing strategy (comparison to alternatives)
- [ ] Prepare CTA copy and trust badges

### During Build:
- [ ] Hero image optimized (WebP, lazy load)
- [ ] Personal story flows naturally (not salesy)
- [ ] Product intro clear and visually appealing
- [ ] Review cards have consistent design
- [ ] Review images show product IN USE (not just product shots)
- [ ] Features section alternates image left/right
- [ ] Social proof stats are believable (not inflated)
- [ ] Price positioning emphasizes value, not just discount
- [ ] Final CTA removes friction (clear button, trust badges visible)
- [ ] Mobile responsive (review cards stack properly)

### Post-Launch Testing:
- [ ] Hero image loads fast (< 2s)
- [ ] All CTAs trackable with UTM params
- [ ] Review section has visual rhythm (not monotonous)
- [ ] Scroll depth tracking implemented
- [ ] A/B test price framing ($89 vs "less than a night out")
- [ ] A/B test number of reviews (3 vs 6)
- [ ] Monitor drop-off points (where users leave)

---

## 🚀 QUICK START: COPY & PASTE STRUCTURE

```tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import ArticleBody from '@/components/advertorial/ArticleBody';
import SoftCTA from '@/components/advertorial/SoftCTA';

// ============================================
// METADATA
// ============================================
export const metadata: Metadata = {
  title: '[Product Name] Review - Real User Experience | [Brand]',
  description: 'Discover how [Product] transformed my daily [routine/lifestyle]. Read authentic reviews and see why thousands are making the switch.',
  keywords: '[product category], user review, real experience, [product name]',
};

// ============================================
// UTM TRACKING
// ============================================
const UTM_PARAMS = '?utm_source=advertorial&utm_medium=user-experience-review&utm_campaign=cold-traffic-2025';
const PRODUCT_LINK = `https://yourdomain.com/product${UTM_PARAMS}`;

// ============================================
// PAGE COMPONENT
// ============================================
export default function UserExperienceReviewPage() {
  return (
    <ArticleBody>
      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] lg:h-[600px] mb-12">
        <Image
          src="/hero-product-in-use.jpg"
          fill
          className="object-cover"
          alt="[Product] in daily use"
          priority
        />
      </section>

      {/* HOOK + PERSONAL STORY */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
          "How I Discovered [Transformation]"
        </h1>
        <p className="text-xl text-neutral-600 mb-8">
          [Subheadline teasing the story]
        </p>

        <div className="prose prose-lg max-w-none">
          <p>Here's a little secret I'm hesitant to share... [BEFORE STATE]</p>
          <p><strong>"[BARRIER QUOTE]"</strong></p>
          <p>But now, [TRANSFORMATION]. It's time to [BENEFIT].</p>
        </div>
      </section>

      {/* PRODUCT INTRODUCTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-neutral-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            [PRODUCT NAME]
          </h2>
          <p className="text-2xl text-neutral-600">
            [Product tagline/promise]
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Image
            src="/product-main-image.jpg"
            width={800}
            height={600}
            className="w-full rounded-lg shadow-xl"
            alt="[Product Name]"
          />
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit #1 */}
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">[Benefit 1]</h3>
            <p className="text-neutral-600">[Brief description]</p>
          </div>
          {/* Repeat for benefits #2, #3 */}
        </div>
      </section>

      {/* CUSTOMER REVIEWS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Community Says
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Review Card #1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500 text-xl">★</span>
                ))}
              </div>
              <span className="text-lg font-semibold">5/5</span>
            </div>

            {/* Product In-Use Image */}
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image
                src="/review-image-1.jpg"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                alt="Customer using product"
              />
            </div>

            {/* Review Text */}
            <p className="text-neutral-700 mb-4 leading-relaxed">
              "[Review quote with specific details and use case]"
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
              <Image
                src="/reviewer-avatar-1.jpg"
                width={40}
                height={40}
                className="rounded-full"
                alt="[Reviewer Name]"
              />
              <div>
                <p className="font-semibold text-neutral-900">[Name]</p>
                <p className="text-sm text-neutral-600">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Repeat for Review Cards #2, #3 */}
        </div>
      </section>

      {/* FEATURES SHOWCASE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          [Product]: The Revolution in [Category]
        </h2>

        {/* Feature #1 - Image RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">[Feature Title]</h3>
            <p className="text-lg text-neutral-700 mb-6">
              [Feature description highlighting benefit]
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>[Feature detail 1]</span>
              </li>
              {/* More bullet points */}
            </ul>
          </div>
          <div>
            <Image
              src="/feature-1.jpg"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              alt="[Feature description]"
            />
          </div>
        </div>

        {/* Feature #2 - Image LEFT (alternate pattern) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h3 className="text-2xl font-bold mb-4">[Feature Title]</h3>
            <p className="text-lg text-neutral-700 mb-6">
              [Feature description]
            </p>
          </div>
          <div className="md:order-1">
            <Image
              src="/feature-2.jpg"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              alt="[Feature description]"
            />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            [Product] Takes [Platform/Market] by Storm
          </h2>

          <p className="text-lg text-neutral-700 text-center max-w-3xl mx-auto mb-12">
            [Social proof narrative about community adoption]
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">[Number]+</p>
              <p className="text-neutral-600">[Stat description]</p>
            </div>
            {/* Repeat for 2 more stats */}
          </div>
        </div>
      </section>

      {/* PRICE POSITIONING */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 border-2 border-orange-200">
          <h2 className="text-3xl font-bold text-center mb-6">
            Affordable [Category]. Elevate Your [Benefit].
          </h2>

          <p className="text-lg text-neutral-700 text-center max-w-3xl mx-auto mb-8">
            [Value proposition + price framing]
          </p>

          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 border-2 border-neutral-200">
              <p className="text-sm uppercase text-neutral-500 mb-2">Traditional [Category]</p>
              <p className="text-4xl font-bold text-neutral-400 line-through mb-2">$[High Price]</p>
              <p className="text-sm text-neutral-600">[Competitor description]</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-green-500 relative">
              <span className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                LIMITED OFFER
              </span>
              <p className="text-sm uppercase text-green-600 mb-2">[Your Product]</p>
              <p className="text-5xl font-bold text-green-600 mb-2">$[Your Price]</p>
              <p className="text-sm text-neutral-600">Same features, better value</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border-2 border-green-300 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/product-final-cta.jpg"
                width={500}
                height={500}
                className="w-full rounded-lg shadow-xl"
                alt="[Product Name]"
              />
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                [Product Name]
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                [Final value proposition]
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-bold text-green-600">$[Price]</span>
                  <span className="text-2xl text-neutral-500 line-through">$[Compare Price]</span>
                </div>
                <p className="text-sm text-red-600 font-semibold">
                  Save $[Amount] - Limited Time Only!
                </p>
              </div>

              <SoftCTA
                href={PRODUCT_LINK}
                text="Get [Product] Now →"
                variant="primary"
                className="w-full text-center text-xl py-4"
              />

              <div className="mt-6 pt-6 border-t border-green-200 space-y-2">
                <p className="text-sm text-neutral-600 flex items-center gap-2">
                  <span className="text-green-600">✓</span> Free Shipping
                </p>
                <p className="text-sm text-neutral-600 flex items-center gap-2">
                  <span className="text-green-600">✓</span> 30-Day Guarantee
                </p>
                <p className="text-sm text-neutral-600 flex items-center gap-2">
                  <span className="text-green-600">✓</span> Secure Checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ArticleBody>
  );
}
```

---

## 🎯 OPTIMIZATION TIPS

### A/B Testing Ideas:

1. **Number of Reviews:**
   - Variant A: 3 reviews (focused)
   - Variant B: 6 reviews (more social proof)

2. **Price Framing:**
   - Variant A: "$89" (absolute)
   - Variant B: "Less than a night out" (relative)

3. **CTA Text:**
   - Variant A: "Order Now"
   - Variant B: "Get My [Product] Now"

4. **Personal Story Length:**
   - Variant A: Short (2 paragraphs)
   - Variant B: Detailed (4-5 paragraphs)

5. **Review Card Images:**
   - Variant A: Product close-ups
   - Variant B: Lifestyle in-use shots

### Performance Targets:

| Metric | Poor | Average | Good | Excellent |
|--------|------|---------|------|-----------|
| **Conversion Rate** | <2% | 2-3.5% | 3.5-5% | >5% |
| **Time on Page** | <3 min | 3-5 min | 5-7 min | >7 min |
| **Scroll Depth** | <60% | 60-75% | 75-90% | >90% |
| **Add to Cart Rate** | <5% | 5-10% | 10-15% | >15% |

### Common Pitfalls to Avoid:

❌ **Stock Photo Overload**
- Problem: Overly polished product shots break authenticity
- Fix: Mix professional shots with authentic lifestyle imagery

❌ **Generic Review Text**
- Problem: "Great product!" sounds fake
- Fix: Include specific details and use cases

❌ **Too Many CTAs**
- Problem: Overwhelms user, reduces focus
- Fix: Limit to 2-3 strategic CTAs (mid-page + final)

❌ **Unrealistic Pricing**
- Problem: "$999 → $29" seems too good to be true
- Fix: Keep discount believable (30-70% range)

❌ **Weak Personal Story**
- Problem: Generic "I love this" narrative
- Fix: Include specific struggle, vulnerability, transformation

---

## 📚 EXAMPLES & REFERENCES

### Good Examples (Structure):
- Product review blogs (Wirecutter style)
- UGC campaigns on Instagram/TikTok
- Lifestyle brand advertorials (Glossier, Allbirds)
- Kickstarter campaign pages

### Psychology Principles Used:
1. **Social Proof** (reviews, stats)
2. **Authority** (testimonials, community validation)
3. **Scarcity** (limited time offer)
4. **Reciprocity** (providing value through story/education)
5. **Likability** (relatable first-person narrative)
6. **Contrast** (expensive vs affordable)

---

## ✅ FINAL CHECKLIST

Before publishing:

- [ ] Personal story is authentic and relatable
- [ ] 3-6 customer reviews with varied perspectives
- [ ] All images show product IN USE (lifestyle context)
- [ ] Price comparison emphasizes value, not just discount
- [ ] Final CTA removes all friction (clear button, trust badges)
- [ ] Mobile responsive (review cards stack properly)
- [ ] UTM parameters on all product links
- [ ] Page loads in < 3 seconds
- [ ] All images optimized (WebP format)
- [ ] No broken links or missing images

---

**Created:** януари 2025
**Last Updated:** януари 2025
**Version:** 1.0
**Framework:** Next.js 16 + Tailwind CSS
**Compatibility:** testograph-ads architecture

---

**Need Help?** Reference these files:
- `/templates/README.md` - Template overview
- `/templates/TEMPLATE-QUICK-SELECTOR.md` - Which template to choose
- `/components/advertorial/` - Shared components
