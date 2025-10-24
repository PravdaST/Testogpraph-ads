# Advertorial Components Design System

Visual reference for all component styles and variants.

---

## Color Palette

### Primary Colors
```
Primary (Green):   #10b981  ███████  - CTAs, links, accents
Secondary (Blue):  #3b82f6  ███████  - Secondary actions
```

### Neutral Scale
```
Neutral 900:  #171717  ███████  - Headings, main text
Neutral 600:  #525252  ███████  - Body text
Neutral 500:  #737373  ███████  - Muted text, meta info
Neutral 200:  #e5e5e5  ███████  - Borders, dividers
Neutral 100:  #f5f5f5  ███████  - Subtle backgrounds
Neutral 50:   #fafafa  ███████  - Light backgrounds
```

### Semantic Colors
```
Success:  Green scale   - Positive info, benefits
Warning:  Amber scale   - Disclaimers, caution
Info:     Blue scale    - General information
```

---

## Typography

### Font Families
```
Headings:  Inter (sans-serif)
Body:      Georgia (serif)
UI:        Inter (sans-serif)
Code:      Monospace
```

### Type Scale
```
H1:  60px / 40px (mobile)  font-bold    - Page headline only
H2:  32px / 26px (mobile)  font-bold    - Section headings
H3:  24px / 22px (mobile)  font-semibold - Subsection headings
H4:  20px                  font-semibold - Minor headings
Body: 19px                 font-normal  - Main content
Small: 14px                font-normal  - Meta info, captions
Tiny: 12px                 font-normal  - Legal text, copyright
```

### Line Heights
```
Headings:  1.2 - 1.4  (tight)
Body:      1.75       (relaxed)
Small:     1.5        (normal)
```

---

## Spacing Scale

Based on Tailwind's spacing scale:

```
xs:   0.5rem  (8px)   - Tight internal spacing
sm:   1rem    (16px)  - Small gaps
md:   1.5rem  (24px)  - Medium gaps, paragraph spacing
lg:   2rem    (32px)  - Large gaps, section spacing
xl:   3rem    (48px)  - Extra large, major sections
2xl:  4rem    (64px)  - Huge gaps
```

### Component Spacing
```
Container padding:     1rem (mobile), auto (desktop)
Section margin:        3rem (48px)
Paragraph margin:      1.5rem (24px)
List item margin:      0.75rem (12px)
Component padding:     2rem (32px)
```

---

## Component Styles

### ArticleHeader

```
┌─────────────────────────────────────────────────────────────┐
│ София, България  •  Петък, 22 януари 2025    [Спонсорирано]│ <- Top bar
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Health Insights BG        Начало Здраве Фитнес Изследвания│ <- Header
│                                                             │
└─────────────────────────────────────────────────────────────┘

Colors:
- Background: White
- Top bar text: Neutral-500
- Logo: Neutral-900 + Primary accent
- Nav links: Neutral-600, hover Neutral-900
- Border: Neutral-200
- Disclosure badge: Amber-50 background, Amber-800 text
```

---

### HeroSection

```
┌─────────────────────────────────────────────────────────────┐
│  [Мъжко Здраве]  <- Category badge (green)                 │
│                                                             │
│  Main Headline Goes Here                                    │ <- H1, huge, bold
│  And Can Span Multiple Lines                                │
│                                                             │
│  Supporting subheadline provides context and engagement     │ <- Subheadline, large
│                                                             │
│  ┌─┐                                                        │
│  │E│  Д-р Емил Георгиев                                    │ <- Author
│  └─┘  Ендокринолог                                         │
│                                                             │
│       📅 15 януари 2025  •  ⏱ 8 min четене                  │ <- Meta
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   [Featured Image]                          │ <- 16:9 image
│                                                             │
└─────────────────────────────────────────────────────────────┘

Colors:
- Badge: Primary/10 background, Primary text
- H1: Neutral-900
- Subheadline: Neutral-600
- Author name: Neutral-900
- Author title: Neutral-500
- Meta: Neutral-500
- Avatar: Primary to Secondary gradient
```

---

### ArticleBody

```
┌─────────────────────────────────────────────────────────────┐
│                    [Max-width 720px]                        │
│                                                             │
│  Section Heading                                            │ <- H2
│                                                             │
│  Body paragraph text in Georgia serif font with generous   │ <- Body
│  line height for optimal readability. This is the main     │
│  content area where the article flows.                     │
│                                                             │
│  • Bulleted list item one                                  │ <- List
│  • Bulleted list item two                                  │
│  • Bulleted list item three                                │
│                                                             │
│  ┌────────────────────────────────────────────────────┐    │
│  │ "Pull quote appears here in larger, italic text    │    │ <- PullQuote
│  │  to highlight key statements"                      │    │
│  │                                                     │    │
│  │  — Attribution Name                                │    │
│  └────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌────────────────────────────────────────────────────┐    │
│  │ ℹ  Key Takeaway                                    │    │ <- HighlightBox
│  │                                                     │    │
│  │    Important information highlighted in a box      │    │
│  │    for emphasis and visual break.                  │    │
│  └────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Colors:
- H2: Neutral-900, Inter sans-serif
- Body: Neutral-600, Georgia serif
- Links: Primary, underline on hover
- Blockquote border: Primary
- HighlightBox: Variant-specific (blue/green/amber)
```

---

### SoftCTA Variants

#### Default Variant
```
┌─────────────────────────────────────────────────────────────┐
│                  [Gradient background]                      │
│                                                             │
│               Optional Headline Here                        │
│                                                             │
│    Optional description text providing context and         │
│    benefit-focused messaging                               │
│                                                             │
│          ┌──────────────────────────────┐                  │
│          │    Button Text with Arrow →  │                  │ <- CTA Button
│          └──────────────────────────────┘                  │
│                                                             │
│              Small subtext below button                     │
│                                                             │
│  ✓ 30 дни гаранция   ✓ Безплатна доставка   ✓ Сигурно    │ <- Trust badges
│                                                             │
└─────────────────────────────────────────────────────────────┘

Colors:
- Background: Neutral-50 to Neutral-100 gradient
- Border: Neutral-200
- Headline: Neutral-900
- Description: Neutral-600
- Button: Primary (green) with hover darkening
- Button text: White
- Subtext: Neutral-500
- Trust badges: Primary icons, Neutral-600 text
```

#### Minimal Variant
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│               Optional Headline Here                        │
│                                                             │
│          ┌──────────────────────────────┐                  │
│          │    Button Text with Arrow →  │                  │ <- Just button
│          └──────────────────────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Colors:
- No background
- Button: Primary
```

#### Boxed Variant
```
┌─────────────────────────────────────────────────────────────┐
│  [Colored border, subtle green background]                 │
│                                                             │
│               Ready to Start?                               │
│                                                             │
│    Take the first step toward optimal hormonal health      │
│                                                             │
│          ┌──────────────────────────────┐                  │
│          │  View Testograph System →    │                  │
│          └──────────────────────────────┘                  │
│                                                             │
│  ✓ 30 дни гаранция   ✓ Безплатна доставка   ✓ Сигурно    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Colors:
- Background: Primary/5 to Primary/10 gradient
- Border: Primary/20 (2px)
- More prominent than default
```

---

### ProductMention

```
┌─────────────────────────────────────────────────────────────┐
│ │ Dr. Georgiev recommends Testograph System to his         │
│ │ patients seeking natural optimization.                   │
│ │                                                           │
│ │ ℹ  Спонсорирана препоръка                                │
└─────────────────────────────────────────────────────────────┘
  ^
  Green border-left (4px)

Colors:
- Background: Neutral-50
- Border-left: Primary (4px)
- Text: Neutral-700
- Link: Primary, underline
- Badge text: Neutral-500
```

---

### InlineCTA

```
Learn more about the system →
─────────────────────────────
         ^
    Underline on hover

Colors:
- Text: Primary
- Border: Primary/30, full Primary on hover
- Arrow icon: Primary
```

---

### Disclaimer

```
┌─────────────────────────────────────────────────────────────┐
│ │ ⚠  Спонсорирано съдържание                               │ <- Advertorial
│ │                                                           │
│ │    Това е рекламен материал (advertorial). Съдържанието  │
│ │    е платено от рекламодател...                          │
└─────────────────────────────────────────────────────────────┘
  ^
  Amber border-left (4px)

┌─────────────────────────────────────────────────────────────┐
│  Медицински disclaimer                                      │ <- Sections
│                                                             │
│  Информацията в тази статия е с образователна цел...       │
├─────────────────────────────────────────────────────────────┤
│  Очаквани резултати                                         │
│  ...                                                        │
├─────────────────────────────────────────────────────────────┤
│  Privacy Policy  •  Terms  •  Contact                       │ <- Links
├─────────────────────────────────────────────────────────────┤
│  © 2025 Health Insights BG. Всички права запазени.         │ <- Copyright
└─────────────────────────────────────────────────────────────┘

Colors:
- Advertorial box: Amber-50 background, Amber-800 text
- Border-left: Amber-400
- Section headings: Neutral-900
- Section text: Neutral-600
- Links: Neutral-600, Primary on hover
- Copyright: Neutral-500
```

---

## Responsive Breakpoints

```
Mobile:    < 640px   (sm)    Stack everything, full width
Tablet:    640-1024px (md-lg) Moderate containers, some horizontal layouts
Desktop:   > 1024px   (xl)    Max-width containers, full features

Container max-widths:
- HeroSection:  4xl (896px)
- ArticleBody:  720px (optimal reading)
- Disclaimer:   4xl (896px)
```

---

## Button States

### Primary Button (SoftCTA)

```
Default:
┌──────────────────────────┐
│  Button Text with Arrow → │  Background: #10b981, Text: White
└──────────────────────────┘

Hover:
┌──────────────────────────┐
│  Button Text with Arrow → │  Background: #059669 (darker), Scale: 1.02, Shadow: lg
└──────────────────────────┘

Focus:
┌──────────────────────────┐
│  Button Text with Arrow → │  Ring: 2px Primary, Offset: 2px
└──────────────────────────┘

Active:
┌──────────────────────────┐
│  Button Text with Arrow → │  Scale: 0.98
└──────────────────────────┘
```

---

## Icons

### Used Icons (Heroicons outline)

```
Calendar:     📅  - Publication date
Clock:        ⏱   - Reading time
Arrow Right:  →   - CTAs, links
Check Circle: ✓   - Trust badges
Info:         ℹ   - Information boxes
Warning:      ⚠   - Disclaimers
Menu:         ☰   - Mobile menu
Image:        🖼   - Image placeholder
Lock:         🔒  - Secure payment badge
Package:      📦  - Free shipping badge
```

---

## Animation & Transitions

### Button Hover
```
Duration:     200ms
Easing:       ease-in-out
Properties:   background-color, transform, box-shadow

transform: scale(1.02)
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

### Link Hover
```
Duration:     200ms
Easing:       ease
Properties:   color, border-color

border-bottom: 1px solid currentColor
```

### Fade In (on scroll - if implemented)
```
Duration:     400ms
Easing:       ease-out
Properties:   opacity, transform

opacity: 0 → 1
transform: translateY(20px) → translateY(0)
```

---

## Shadow Scale

```
sm:  0 1px 2px rgba(0, 0, 0, 0.05)          - Subtle depth
md:  0 4px 6px -1px rgba(0, 0, 0, 0.1)      - Normal elevation
lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1)    - Hover states
xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1)    - Prominent elements
```

---

## Border Radius

```
none:  0px       - Sharp corners
sm:    0.125rem  (2px)
md:    0.375rem  (6px)   - Default for most components
lg:    0.5rem    (8px)   - Larger components
xl:    0.75rem   (12px)  - CTAs, boxes
full:  9999px    - Pills, avatars
```

---

## Accessibility Standards

### Color Contrast (WCAG AA)
```
Text on white:
- Neutral-900:  16.8:1  ✓ AAA
- Neutral-600:   7.0:1  ✓ AA
- Neutral-500:   4.9:1  ✓ AA (large text only)
- Primary:       3.4:1  ✓ AA (large text only)

Links:
- Primary on white:  Underline on hover for clarity
```

### Focus Indicators
```
All interactive elements:
- 2px solid ring
- Primary color
- 2px offset
- Visible on keyboard focus
```

### Touch Targets (Mobile)
```
Minimum:  44x44px  (WCAG 2.1 Level AAA)
Applied to:
- Buttons
- Links
- Menu items
- Form inputs
```

---

## Print Styles (Future)

```css
@media print {
  /* Hide non-essential elements */
  header, footer, .cta { display: none; }

  /* Optimize for reading */
  body { font-size: 12pt; }
  h1 { font-size: 24pt; }

  /* Ensure links are visible */
  a { color: black; text-decoration: underline; }
}
```

---

## Dark Mode (Future Consideration)

If dark mode is implemented:

```
Background:    Neutral-900
Text:          Neutral-100
Primary:       Lighter green (#34d399)
Borders:       Neutral-700
Cards:         Neutral-800
```

---

## Component Hierarchy

```
Page
├── ArticleHeader          (global)
└── Main
    ├── HeroSection        (intro)
    ├── ArticleBody
    │   ├── ArticleSection
    │   │   ├── Heading
    │   │   ├── Paragraph(s)
    │   │   └── List(s)
    │   ├── PullQuote
    │   ├── HighlightBox
    │   └── ProductMention
    ├── SoftCTA (multiple)
    └── Disclaimer         (footer)
```

---

## Best Practices Summary

### DO:
- Use semantic HTML
- Maintain heading hierarchy
- Keep line length optimal (50-75 characters)
- Use generous white space
- Provide alt text for images
- Test on real devices
- Use system font stack as fallback
- Implement keyboard navigation
- Follow color contrast guidelines

### DON'T:
- Skip heading levels (h1 → h3)
- Use color alone to convey information
- Create walls of text without breaks
- Use generic link text ("click here")
- Ignore mobile experience
- Overuse animations
- Make text too small (< 16px)
- Use low contrast colors
- Rely solely on hover states

---

## File Reference

All component files:
```
components/advertorial/
├── ArticleHeader.tsx
├── HeroSection.tsx
├── ArticleBody.tsx
├── SoftCTA.tsx
├── Disclaimer.tsx
├── index.ts
├── COMPONENTS_GUIDE.md
└── DESIGN_SYSTEM.md (this file)
```

---

**Design System Version:** 1.0.0
**Last Updated:** 2025-01-22
**Status:** Complete
