# EMT Bakery – Images Folder

## Overview
This folder contains all image assets for the EMT Bakery website.
Images are organised by type and purpose.

---

## Required Images (to be sourced for Phase 2)

### Root Images (site-wide)
| Filename               | Description                                     | Recommended Size |
|------------------------|-------------------------------------------------|------------------|
| logo.png               | EMT Bakery logo (colour version)                | 300×120px        |
| logo-white.png         | EMT Bakery logo (white version for dark footer) | 300×120px        |
| apple-touch-icon.png   | iOS home screen icon                            | 180×180px        |
| og-hero.jpg            | Open Graph / social sharing image               | 1200×630px       |
| hero-banner.jpg        | Home page hero background                       | 1920×700px       |
| founders.jpg           | Three founders in their kitchen (About page)    | 700×450px        |
| baker-esi.jpg          | Head baker Esi portrait (About page)            | 300×300px        |
| baker-mpho.jpg         | Cake designer Mpho portrait (About page)        | 300×300px        |
| baker-tumi.jpg         | Operations director Tumi portrait               | 300×300px        |

### Product Images
| Filename               | Description                                     | Recommended Size |
|------------------------|-------------------------------------------------|------------------|
| sourdough.jpg          | Classic sourdough loaf                          | 400×300px        |
| ciabatta.jpg           | Ciabatta loaf and rolls                         | 400×300px        |
| rye-bread.jpg          | Dark rye bread sliced                           | 400×300px        |
| croissants.jpg         | Butter croissants                               | 400×300px        |
| muffins.jpg            | Assorted muffins                                | 400×300px        |
| custom-cake.jpg        | Custom birthday cake                            | 400×300px        |
| birthday-cake.jpg      | Birthday cake example                           | 400×300px        |
| corporate-cake.jpg     | Corporate branded cake                          | 400×300px        |
| corporate-catering.jpg | Corporate catering platter                      | 400×300px        |
| wedding-cake.jpg       | Wedding cake hero image                         | 400×300px        |

### Gallery Images (subfolder: gallery/)
| Filename               | Description                                     | Recommended Size |
|------------------------|-------------------------------------------------|------------------|
| gallery/bread-01.jpg   | Sourdough display on shelf                      | 600×450px        |
| gallery/bread-02.jpg   | Croissants cooling                              | 600×450px        |
| gallery/bread-03.jpg   | Dark rye sliced                                 | 600×450px        |
| gallery/cake-01.jpg    | Watercolour floral birthday cake                | 600×450px        |
| gallery/cake-02.jpg    | Corporate branded cake                          | 600×450px        |
| gallery/cake-03.jpg    | Gender reveal cake                              | 600×450px        |
| gallery/wedding-01.jpg | Five-tier ivory fondant wedding cake            | 600×450px        |
| gallery/wedding-02.jpg | Boho minimalist wedding cake                    | 600×450px        |
| gallery/wedding-03.jpg | Dramatic black-and-gold wedding cake            | 600×450px        |
| gallery/event-01.jpg   | Corporate event catering spread                 | 600×450px        |
| gallery/event-02.jpg   | Branded corporate gift boxes                    | 600×450px        |

---

## Image Requirements & Best Practices

### File Formats
- **JPG/JPEG** : Photographs (products, people, hero images)
- **PNG**      : Logos, icons (requires transparency support)
- **WebP**     : Phase 2 – convert all JPGs to WebP for 30–50% size reduction
- **ICO**      : favicon.ico (root level, not in /images folder)

### Optimisation (Phase 2)
- Compress all images before upload using tools such as Squoosh or TinyPNG
- Target: Under 200KB per product image, under 500KB for hero images
- Provide srcset with 2x retina versions for product and gallery images

### Alt Text Guidelines
- All alt text is written into the HTML directly (see each .html file)
- Alt text describes the image content specifically and meaningfully
- Decorative images use alt="" (empty string) – there are none in this project
- Logo alt text: "EMT Bakery logo" (concise and descriptive)

### Licensing
- All images used on the live website must be either:
  a) Original photography owned by EMT Bakery
  b) Licensed stock photography (Unsplash, Pexels – check licence terms)
  c) Purchased commercial licences
- Do NOT use Google Image Search results without verifying copyright

---

## Placeholder Note
During development (Phase 1–2), placeholder images from
https://picsum.photos or https://placehold.co may be used
in the format: https://placehold.co/400x300?text=Product+Name
These MUST be replaced with real brand photography before launch.
