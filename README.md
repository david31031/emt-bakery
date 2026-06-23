# EMT Bakery – Official Website

**Module:** WEDE5020 – Web Development  
**Institution:** IIE Rosebank College  
**Student:** Guy Wa Mutamba | ST10500444
**GitHub:** https://github.com/david31031/emt-bakery
**Live URL:**https://david31031.github.io/emt-bakery/

---

## Project Summary

Professional, fully responsive website for **EMT Bakery** – an artisan bakery in Johannesburg serving fresh breads, custom cakes, wedding cakes, and corporate catering.

| Part | Focus | Status |
|------|-------|--------|
| Part 1 | HTML5 Skeleton, Planning & SEO Foundation | ✅ Complete |
| Part 2 | CSS Styling, Flexbox/Grid, Responsive Design | ✅ Complete |
| Part 3 | Dynamic JS, Forms, Validation, SEO Files, Deployment | ✅ Complete |

---

## File Structure

```
emt-bakery/
├── index.html               ← Home page
├── about.html               ← About Us
├── contact.html             ← Contact (with live email preview)
├── products.html            ← Dynamic product catalogue
├── gallery.html             ← Photo gallery
├── order.html               ← Online order system
├── order-confirmation.html  ← Post-order confirmation
├── enquiry.html             ← Service enquiry & quote form ★ NEW Part 3
├── robots.txt               ← SEO crawl rules ★ NEW Part 3
├── sitemap.xml              ← Site map for search engines ★ NEW Part 3
├── DEPLOYMENT.md            ← Netlify/GitHub Pages guide ★ NEW Part 3
├── css/
│   ├── style.css            ← Full design system (Part 2)
│   ├── responsive.css       ← Mobile-first media queries (Part 2)
│   └── part3.css            ← Dynamic component styles (Part 3)
├── js/
│   ├── main.js              ← Nav toggle, scroll, copyright year
│   ├── products-data.js     ← Product data array (10 products)
│   ├── products.js          ← ProductCatalogue class: search/filter/sort
│   ├── form-validation.js   ← Shared validation utilities
│   ├── enquiry.js           ← EnquiryForm: conditional fields, cost estimate
│   ├── contact.js           ← ContactForm: live email preview, AJAX
│   ├── order.js             ← Order page logic
│   └── gallery.js           ← Gallery lightbox
└── images/
    ├── [product images]
    └── gallery/
```

---

## Changelog

### [3.0.0] – 2026-06-17 (Part 3)
#### Added
- `enquiry.html` – full service enquiry form with conditional fields, JS validation, AJAX submit, and real-time cost estimate + availability response card
- `js/products-data.js` – centralised product data store (10 products, 4 categories)
- `js/products.js` – `ProductCatalogue` class: live debounced search, category filters, sort (price/name/rating/featured), dynamic DOM render
- `js/form-validation.js` – shared `EMTValidation` object: sanitise, regex validators, DOM error helpers, loading state
- `js/enquiry.js` – `EnquiryForm` class: service-type-driven conditional fieldsets, cost estimation, availability simulation
- `js/contact.js` – `ContactForm` class: live email preview panel, blur validation, AJAX submission
- `css/part3.css` – search controls, filter buttons, validation states (shake animation, error/success colours), response card, email preview, loading spinner
- `robots.txt` – crawl rules, sitemap reference
- `sitemap.xml` – all 7 pages with image extensions
- `DEPLOYMENT.md` – Netlify and GitHub Pages step-by-step guide

#### Changed
- `products.html` – static HTML grid replaced with dynamic JS-rendered grid + live search/filter UI
- `contact.html` – enhanced with JS validation, live email preview, AJAX
- All pages – `enquiry.html` added to nav and footer
- All pages – meta descriptions updated for keyword optimisation

#### Fixed (from Part 2 feedback)
- `order-confirmation.html` – missing `og:title` and `canonical` tags added
- `responsive.css` – footer grid tablet layout spacing corrected
- All pages – `aria-current="page"` verified on all nav links

---

### [2.0.0] – 2026-05-29 (Part 2)
- Complete CSS design system (style.css + responsive.css)
- Google Fonts: Playfair Display + Lato
- Mobile-first responsive design, 4 breakpoints (480px, 768px, 1024px, 1200px)
- Hamburger nav toggle (main.js)
- Flexbox navigation, CSS Grid product cards and footer
- `grid-template-areas` on contact layout and footer
- Hover, focus, active pseudo-class states throughout

---

### [1.0.0] – 2026-04-06 (Part 1)
- 7 semantic HTML5 pages with full ARIA landmarks
- Project proposal Word document (300–500 words)
- Content research document (SEO, brand voice, image sourcing)
- Sitemap and wireframe descriptions
- All SEO meta tags, Open Graph, canonical links

---

## SEO Strategy

**Target Keywords:** `fresh bread Johannesburg` | `custom cakes Johannesburg` | `wedding cakes Johannesburg` | `artisan bakery near me` | `order cake online South Africa`

**Technical SEO:** `robots.txt` + `sitemap.xml` submitted to Google Search Console, Open Graph on all pages, `loading="lazy"` on all below-fold images, Google Fonts with `display=swap`.

**Local SEO:** Google Business Profile to be claimed post-deployment for local search visibility.

---

## References

1. MDN Web Docs – HTML, CSS, JavaScript (2024). https://developer.mozilla.org
2. W3C – WCAG 2.1 Guidelines (2023). https://www.w3.org/TR/WCAG21/
3. Google Developers – SEO Starter Guide (2024). https://developers.google.com/search
4. Google Developers – Sitemaps Overview (2024). https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
5. Robots.txt Specification (2024). https://www.robotstxt.org/
6. Open Graph Protocol (2024). https://ogp.me/
7. Netlify Docs (2024). https://docs.netlify.com/
8. GitHub Pages Docs (2024). https://docs.github.com/en/pages
9. OWASP – XSS Prevention Cheat Sheet (2024). https://cheatsheetseries.owasp.org
10. POPIA – Protection of Personal Information Act No. 4 of 2013. https://www.justice.gov.za/inforeg/

---
*© 2026 [Guy Wa Mutamba] | IIE Rosebank College | WEDE5020*
