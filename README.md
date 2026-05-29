# EMT Bakery — WEDE5020POE

**Module:** Web Development (WEDE5020)
**Assignment:** Portfolio of Evidence (POE)
**Student Name:** [Guy David Wa Mutamba ]
**Student Number:** [ST10500444]
**Institution:** The Independent Institute of Education (IIE) — Rosebank College

---

## 🌐 Live GitHub Repository

> **Repository Link:** `https://github.com/[your-username]/emt-bakery`

---

## 📁 Project Structure

```
emt-bakery/
│
├── index.html          # Homepage — Hero, Products Gallery, About Preview
├── about.html          # About Us — Story, Team, Values
├── contact.html        # Order Inquiry / Contact Page
├── products.html       # Full Menu Page (extend from index template)
│
├── css/
│   └── style.css       # External stylesheet — full design system
│
├── images/             # All optimised images
│   ├── hero-bakery.jpg
│   ├── hero-bakery-400.jpg
│   ├── hero-bakery-800.jpg
│   ├── hero-bakery-1200.jpg
│   ├── croissant.jpg
│   ├── croissant-mobile.jpg
│   ├── sourdough.jpg
│   ├── cake.jpg
│   ├── cinnamon-roll.jpg
│   ├── quiche.jpg
│   ├── macaron.jpg
│   ├── bakery-interior.jpg
│   ├── founders.jpg
│   ├── emeka.jpg
│   ├── mpho.jpg
│   └── thandeka.jpg
│
├── README.md           # This document
└── CHANGELOG.md        # Version history (see below / linked file)
```

---

## 📋 Part 2 — Submission Checklist

| Requirement | Status |
|---|---|
| External CSS file (`css/style.css`) created and linked on all pages | ✅ |
| CSS Reset (`box-sizing`, `margin`, `padding`) implemented | ✅ |
| Base styles: typography, colour variables, line-height, letter-spacing | ✅ |
| Flexbox used for: Navigation bar, hero CTA row, form field rows, footer bottom | ✅ |
| CSS Grid used for: Hero section, product gallery, about layout, contact layout, footer | ✅ |
| `grid-template-areas` applied (hero section) | ✅ |
| Visual styles: background colours, borders, `box-shadow` on cards | ✅ |
| Pseudo-classes: `:hover`, `:focus`, `:active` on buttons, nav links, form inputs | ✅ |
| Media queries at 1024px, 768px, 480px breakpoints | ✅ |
| Mobile: multi-column → single-column layout shifts | ✅ |
| Relative units (`rem`, `em`, `%`, `vw`, `clamp()`) used throughout | ✅ |
| Responsive images: `srcset`, `sizes`, `<picture>` implemented with guidance comments | ✅ |
| Developer comments explaining CSS and HTML engineering choices | ✅ |
| Changelog documenting Part 1 feedback corrections | ✅ |
| All pages linked to external stylesheet | ✅ |
| README.md updated for Part 2 | ✅ |

---

## 📸 Screenshots

> Add screenshots of your site at Desktop (1440px), Tablet (768px), and Mobile (375px) widths here.

**Desktop View:**
![Desktop Screenshot](screenshots/desktop.png)

**Tablet View (768px):**
![Tablet Screenshot](screenshots/tablet.png)

**Mobile View (375px):**
![Mobile Screenshot](screenshots/mobile.png)

---

## 🔄 CHANGELOG

All changes are recorded below per the assignment requirement to document edits made following Part 1 feedback, as well as Part 2 additions.

---

### [2.0.0] — Part 2 Release — CSS Styling & Responsive Design

#### ➕ Added (Part 2 New Features)
- `css/style.css` — Full external stylesheet created with design system
- CSS Custom Properties (`:root` variables) for colours, typography scale, spacing scale, shadows, and radii
- Google Fonts integration: Cormorant Garamond (serif display), Jost (sans body), Dancing Script (accent)
- Flexbox navigation bar with logo + link row using `justify-content: space-between`
- CSS Grid hero section using `grid-template-areas: "text image"` with proportional 55/45 column split
- CSS Grid 3-column product gallery with explicit `grid-template-columns: repeat(3, 1fr)`
- CSS Grid auto-fit values strip using `minmax(22rem, 1fr)` for natural responsiveness
- CSS Grid 2-column about/story layout with image and text columns
- CSS Grid 2-column contact layout (form + sidebar)
- CSS Grid 4-column footer (collapses to 2-col tablet, 1-col mobile)
- Responsive breakpoints: `@media (max-width: 1024px)`, `@media (max-width: 768px)`, `@media (max-width: 480px)`
- Mobile hamburger menu with `.is-open` toggle via vanilla JS
- `:hover`, `:focus-visible`, `:active` pseudo-classes on all interactive elements
- `box-shadow` cards with hover lift animation (`transform: translateY(-6px)`)
- Image hover zoom effect on product cards via CSS `scale(1.06)` transition
- Fluid typography using `clamp()` — no media query needed for headline scaling
- `srcset` and `sizes` attributes on all `<img>` elements for responsive images
- `<picture>` element with `<source media="">` for art-direction on hero and founders images
- `loading="lazy"` on all below-fold images for performance
- `@media (prefers-reduced-motion: reduce)` accessibility rule
- Print stylesheet stripping navigation and CTAs

#### 🔧 Fixed (Part 1 Feedback Corrections — Changelog)
- **[Structural Fix]** Moved inline `style` attributes from HTML elements to external stylesheet — separates presentation from structure
- **[Semantic Fix]** Replaced generic `<div class="header">` with semantic `<header role="banner">` element
- **[Semantic Fix]** Wrapped navigation links in `<nav role="navigation" aria-label="Main navigation">` for correct landmark semantics
- **[Semantic Fix]** Converted product list from `<div>` wrappers to `<ul role="list">` with `<li>` items
- **[Semantic Fix]** Contact info wrapped in `<address>` element as per HTML5 specification
- **[Accessibility Fix]** Added `aria-current="page"` to active navigation link on each respective page
- **[Accessibility Fix]** Added `aria-label` to icon-only buttons and decorative elements marked `aria-hidden="true"`
- **[Folder Fix]** Created `css/` subdirectory — previously `style.css` was in the root. All `<link>` tags updated to `href="css/style.css"`
- **[Image Fix]** Added missing `width` and `height` attributes to all `<img>` tags to prevent Cumulative Layout Shift (CLS)
- **[Image Fix]** Added descriptive `alt` text to images that previously had empty or missing alt attributes
- **[Meta Fix]** Added `<meta name="description">` to `about.html` and `contact.html` which were missing from Part 1
- **[Link Fix]** Corrected broken relative path on `about.html` that referenced `../index.html` instead of `index.html`

---

### [1.0.0] — Part 1 Release — HTML Structure
**Date:** [Insert Part 1 Submission Date]

#### ➕ Added
- Semantic HTML5 structure for all pages (index, about, contact)
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` elements
- Product gallery structure with headings and image placeholders
- Contact/order inquiry form with appropriate input types
- README.md initial draft

---

## 📚 References

> Update this list with all sources used in Part 2, including tools, libraries, documentation, and tutorials. APA format recommended.

- Mozilla Developer Network. (2025). *CSS Grid Layout*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- Mozilla Developer Network. (2025). *Flexbox*. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
- Mozilla Developer Network. (2025). *Responsive images*. https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- Mozilla Developer Network. (2025). *Using CSS custom properties*. https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Google Fonts. (2025). *Cormorant Garamond, Jost, Dancing Script*. https://fonts.google.com
- CSS-Tricks. (2025). *A complete guide to Grid*. https://css-tricks.com/snippets/css/complete-guide-grid/
- CSS-Tricks. (2025). *A complete guide to Flexbox*. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- W3C. (2025). *Web Content Accessibility Guidelines (WCAG) 2.1*. https://www.w3.org/TR/WCAG21/

---

*Last updated: [28/05/2026] | WEDE5020POE Part 2*
