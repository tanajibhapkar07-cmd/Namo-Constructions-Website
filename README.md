# Namo Constructions — Construction & Cluetech Technology

A complete, production-ready business website for **Namo Constructions** and its technology
division **ClueTech Tecnnology**.

Built with **HTML5, CSS3 and vanilla JavaScript only**. No frameworks, no build step, no external
libraries, no external font requests, no trackers.

---

## Table of contents

1. [What is included](#1-what-is-included)
2. [Folder structure](#2-folder-structure)
3. [The 5-minute setup checklist](#3-the-5-minute-setup-checklist)
4. [How to replace business information](#4-how-to-replace-business-information)
5. [Match your Google Payments / D-U-N-S records](#5-match-your-google-payments--d-u-n-s-records)
6. [How to add real construction photographs](#6-how-to-add-real-construction-photographs)
7. [How to add real project cards](#7-how-to-add-real-project-cards)
8. [How to replace app icons and product details](#8-how-to-replace-app-icons-and-product-details)
9. [Publishing an app on Google Play](#9-publishing-an-app-on-google-play)
10. [Connecting the contact form to a real backend](#10-connecting-the-contact-form-to-a-real-backend)
11. [Configuring the domain](#11-configuring-the-domain)
12. [Uploading to hosting](#12-uploading-to-hosting)
13. [Enabling HTTPS](#13-enabling-https)
14. [SEO checklist after going live](#14-seo-checklist-after-going-live)
15. [Google Play Console organisation verification](#15-google-play-console-organisation-verification)
16. [Performance, accessibility and security notes](#16-performance-accessibility-and-security-notes)
17. [Customising the design](#17-customising-the-design)
18. [Maintenance reference](#18-maintenance-reference)
19. [Before/after content rule](#19-beforeafter-content-rule)

---

## 1. What is included

| Requirement | Where it lives |
| --- | --- |
| Homepage with all sections | `index.html` |
| Privacy Policy page | `privacy.html` |
| Terms & Conditions page | `terms.html` |
| Search engine instructions | `robots.txt` |
| Sitemap | `sitemap.xml` |
| PWA metadata | `site.webmanifest` |
| Favicon / app icons / share image | `assets/img/` |
| All styling | `assets/css/styles.css` |
| All behaviour | `assets/js/main.js` |
| **All business details** | **`assets/js/site.config.js`** |

**Sections on the homepage:** hero, About, Construction Services, ClueTech AI Apps, Android,
Flutter, Projects (construction + software), Contact (details + enquiry form), plus footer.

**Features:** mobile-first responsive layout, hamburger navigation drawer, smooth scrolling,
scroll-spy navigation, scroll-reveal animations, natively lazy-loaded images, project category filter,
validated enquiry form, Schema.org JSON-LD, Open Graph and social metadata, accessible focus
states, reduced-motion support, print styles.

---

## 2. Folder structure

```
/
├── index.html                  Homepage (all sections)
├── privacy.html                Privacy Policy
├── terms.html                  Terms & Conditions
├── robots.txt                  Search engine instructions
├── sitemap.xml                 XML sitemap
├── site.webmanifest            PWA / install metadata
├── README.md                   This file
│
└── assets/
    ├── css/
    │   └── styles.css          Design tokens + all components (numbered sections)
    ├── js/
    │   ├── site.config.js      ⭐ ALL BUSINESS INFORMATION — edit this
    │   └── main.js             Navigation, animations, form validation
    └── img/
        ├── logo.svg            Replace with your logo
        ├── favicon.svg
        ├── favicon-32.png
        ├── apple-touch-icon.png
        ├── icon-192.png
        ├── icon-512.png
        ├── og-image.png        1200×630 social share image
        ├── hero-visual.svg     Hero artwork
        ├── device-mockup.svg   Android / Flutter artwork
        ├── projects/
        │   ├── placeholder-house.svg
        │   ├── placeholder-bungalow.svg
        │   ├── placeholder-rcc.svg
        │   ├── placeholder-ongoing.svg
        │   ├── placeholder-completed.svg
        │   └── placeholder-software.svg
        └── apps/
            ├── clue-photo-resizer.svg
            ├── clue-background-remover.svg
            └── clue-triangle-puzzle.svg
```

Everything you are likely to change is **clearly named**. No build tools are required to deploy —
upload the folder as-is.

---

## 3. The 5-minute setup checklist

1. Open `assets/js/site.config.js` and replace the phone, email and address.
2. Replace `site.domain` with your real domain.
3. Replace `assets/img/logo.svg` with your logo (keep the filename, or update the `src` in the
   HTML).
4. Add your real project photographs to `assets/img/projects/`.
5. Upload the folder to your hosting and turn on HTTPS.

Full detail for each step is below.

---

## 4. How to replace business information

**Everything in this table lives in `assets/js/site.config.js`.**

| What to change | Config key |
| --- | --- |
| Registered organisation name | `brand.legalName` |
| Header brand name | `brand.shortName` |
| Header subtitle | `brand.tagline` |
| Technology division name | `brand.techDivision` |
| Phone number (click-to-call) | `contact.phone` → digits with country code, e.g. `919876543210` |
| Phone number (displayed) | `contact.phoneDisplay` → e.g. `+91 98765 43210` |
| Business email | `contact.email` |
| Extra email | `contact.emailAlt` |
| Street address | `address.street` |
| City / locality | `address.locality` |
| State | `address.region` |
| PIN code | `address.postalCode` |
| Service area text | `address.serviceArea` |
| Domain | `site.domain` |
| Facebook / Instagram / LinkedIn / YouTube / X / GitHub | `social.*` |
| SEO title & description | `seo.title`, `seo.description` |

### Rules when editing `site.config.js`

- Keep values inside straight double quotes: `"value"`.
- Do **not** use a typographic apostrophe (`’`) inside a value — a straight quote only.
- Keep the trailing comma after each line.
- Do not use the characters `//` inside a value (it starts a comment).

### How the empty values behave

- A blank social network (`"facebook": ""`) removes that icon from the footer automatically.
- A blank email or phone removes the corresponding link.
- Nothing is displayed as an empty box or a broken link.

### Hard-coded address in the HTML

The address appears as normal text in four places for accessibility and SEO. After editing the
config, search each HTML file for `Ghorpadigaon` and update those text blocks:

```
index.html    - top bar, service-area block, contact info list, footer
privacy.html  - contact section, footer
terms.html    - contact section, footer
```

---

## 5. Match your Google Payments / D-U-N-S records

For Google Play organisation verification, the details on this site must match your Google
Payments profile and your D-U-N-S record **exactly**.

1. Write down the exact values from your D-U-N-S record.
2. Put them into `assets/js/site.config.js`.
3. Update the matching text in the HTML files (step above).
4. Update the JSON-LD block in `index.html` (see below).

**Then check consistency:** open the site in your browser, press `F12`, go to the Console tab and
run:

```js
NAMO_CONFIG_DOCTOR()
```

It reports any mismatch between `site.config.js` and the JSON-LD block.

### The two places the details are stored

1. **`assets/js/site.config.js`** — everything visible on the page.
2. **`index.html` → the `application/ld+json` block in `<head>`** — the structured data that
   search engines and Play Console read.

Update both whenever you change a detail.

### Contact email

Google Play requires a contact email **on your own domain** for verification. Do not use a
personal Gmail or Hotmail address here.

---

## 6. How to add real construction photographs

1. **Optimise the image first.** Resize to about **1200 px wide** and compress to under 200 KB.
   Free tools: Squoosh (squoosh.app), TinyPNG, or your phone's built-in editor.
2. Save it into `assets/img/projects/` with a clear name, for example:
   `house-ghorpadigaon-01.jpg`
3. Open `index.html`, find the matching project card, and update the image:

```html
<!-- Before (placeholder) -->
<img src="assets/img/projects/placeholder-house.svg"
     width="800" height="500" loading="lazy" decoding="async"
     alt="Placeholder image for a completed residential house project">

<!-- After (your real photograph) -->
<img src="assets/img/projects/house-ghorpadigaon-01.jpg"
     width="1200" height="750" loading="lazy" decoding="async"
     alt="Completed residential house project built by Namo Constructions in Pune">
```

4. Update the card title, description, status badge and metadata to match the real project.
5. Remove the `badge badge--soon` "Awaiting photograph" chip once a real photo is in place, or
   change it to `<span class="project-card__status badge badge--green">Completed</span>`.

**Always write descriptive alt text.** Alt text is read aloud by screen readers and used by
search engines. Describe what the photo shows — never leave the `alt` attribute empty for a
content image.

Keep the `width` and `height` attributes. They let the browser reserve space before the image
loads, which prevents the page from jumping while scrolling.

Lazy loading uses the browser's native `loading="lazy"` attribute, so a plain `src` is all you
need and images still display even if JavaScript is disabled. Only drop `loading="lazy"` for the
image(s) visible in the first screenful.

### Available status badges

```html
<span class="project-card__status badge badge--green">Completed</span>
<span class="project-card__status badge badge--blue">Ongoing</span>
<span class="project-card__status badge badge--soon">In development</span>
```

### Other ready-made components in `styles.css`

These classes are already styled but are not used on the current pages. They are there so you
can add content without writing new CSS:

| Class | Purpose |
| --- | --- |
| `.btn--gold`, `.btn--outline-light` | Gold filled / light outlined buttons for dark sections |
| `.badge--gold`, `.badge--green`, `.badge--live` | Additional badge colours and a live-status chip |
| `.accent-gold` | Gold gradient text, for words you want to highlight inside a heading |
| `.card-head`, `.card-head--stack` | Icon + title + action header inside a card |
| `.callout--gold` | Gold-tinted highlighted note box |
| `.photo-slot` | Dashed placeholder box for a photo you have not uploaded yet |
| `.steps` | Numbered vertical step list (alternative to `.process-step`) |
| `.divider` | Centred "or / and" separator between blocks |
| `.grid-2`, `.grid-4` | Two- and four-column responsive auto-fit grids |
| `.gap-lg` | Larger gap between grid/flex children |
| `.text-blue`, `.text-gold`, `.text-center` | Text colour and alignment helpers |
| `.form-status--ok`, `.form-status--warn` | Green / amber form result banners (set automatically by `main.js`) |

---

## 7. How to add real project cards

Copy an existing card and edit it. Then update the filter button if you introduce a new category.

```html
<article class="card card--flush project-card reveal" data-category="construction completed">
  <div class="card-media">
    <span class="project-card__status badge badge--green">Completed</span>
    <img src="assets/img/projects/your-photo.jpg"
         width="1200" height="750" loading="lazy" decoding="async"
         alt="Description of what the photo shows">
  </div>
  <div class="card-body">
    <h3>Project name</h3>
    <p>Short factual description: what was built, and which services were involved.</p>
    <div class="project-meta">
      <span>Type: House construction</span>
      <span>Status: Completed</span>
    </div>
  </div>
</article>
```

### Filter categories

`data-category` accepts several space-separated words; a card appears under **every** word you
list. A new filter button needs one matching button:

```html
<button class="filter-btn" type="button" data-filter="renovation" aria-pressed="false">Renovation</button>
```

---

## 8. How to replace app icons and product details

### Replace the icon file

Drop your real 512×512 PNG at `assets/img/apps/your-app-icon.png` (keep it in that folder), then
update the `<span class="app-icon">` block in `index.html`:

```html
<span class="app-icon">
  <img src="assets/img/apps/your-app-icon.png" width="62" height="62"
       alt="Clue AI Photo Resizer app icon" loading="lazy" decoding="async">
</span>
```

### Replace product text

Each product card is a `<article class="card card--dark app-card">` block in `index.html`
containing:

- the icon,
- the product name,
- the platform badges,
- a short description paragraph,
- a `<ul class="dot-list">` of features.

### Change a product's status badge

```html
<!-- Still in development (current state) -->
<span class="badge badge--soon product-status">Coming Soon</span>

<!-- Genuinely published on Google Play - only after you publish -->
<span class="badge badge--live product-status">Available on Google Play</span>
```

Also update `assets/js/site.config.js`:

```js
products: {
  photoResizer: {
    status: "coming-soon",   // change to "live" only after publishing
    playUrl: ""              // paste the real Google Play URL here
  },
  // ...
}
```

> **Do not** change a badge to "Available on Google Play" before the app is actually listed on
> Google Play, and never invent a store URL. An unverified or broken link is worse than an honest
> "Coming Soon".

---

## 9. Publishing an app on Google Play

After an app is genuinely published, complete these steps:

1. **Config** — in `assets/js/site.config.js`, set the product `status` to `"live"` and paste the
   real Play Store URL into `playUrl`.

2. **Badge on the website** — change that product's badge in `index.html` to
   `badge badge--live product-status` with the text *Available on Google Play*.

3. **Link the app** — add a link in the product card:

   ```html
   <a class="btn btn--ghost btn--sm" href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
      target="_blank" rel="noopener noreferrer">View on Google Play</a>
   ```

4. **Schema.org** — add a `SoftwareApplication` block. A ready-to-paste template is already in
   `index.html` directly below the existing JSON-LD block, commented out. Paste it into the
   `"@graph"` array, remove the comment markers, and fill in real values.

5. **In-app privacy policy** — Google Play requires a privacy policy URL for every app. Either
   host a dedicated page per app (for example `privacy-photo-resizer.html`) or add a clearly
   separated section to `privacy.html` that covers that app specifically. Update the
   Data Safety form to match what the app actually does.

---

## 10. Connecting the contact form to a real backend

**Right now the form validates in the browser and then opens the visitor's own email app. Nothing
is stored on the website.** This is deliberate — the site says so on screen, so it never makes a
false claim.

### Option A — email the visitor's mail app (current, zero setup)

Set in `assets/js/site.config.js`:

```js
form: { endpoint: "", method: "MAILTO", recipient: "contact@namoconstructions.in" }
```

The enquiry is written into the visitor's email client for them to send. Works immediately, no
server needed, nothing stored.

### Option B — Formspree, Getform or Web3Forms (easiest real backend)

1. Create a form on the provider and copy the endpoint URL.
2. In `site.config.js`:

```js
form: { endpoint: "https://formspree.io/f/YOUR_ID", method: "POST", recipient: "..." }
```

The JavaScript posts the fields as `FormData` and shows a success message.

### Option C — your own server endpoint

```js
form: { endpoint: "https://yourdomain.com/api/enquiry", method: "POST_JSON" }
```

The JavaScript sends a JSON body: `{ name, email, phone, subject, message, consent }`. Your
backend must also handle spam — rate limiting, a honeypot check and a CAPTCHA.

### About spam protection

`site.config.js` has an optional `recaptchaSiteKey` field. Google reCAPTCHA v3 gives you a **site
key** (safe in front-end code) and a **secret key** (server only).

> **Never put a reCAPTCHA secret key, an API key, a Firebase config, a password or any database
> credential in an HTML or JavaScript file on this website.** Anything in front-end code is public.
> Keep all secrets on your server.

---

## 11. Configuring the domain

The domain appears in exactly **four** files. Search for `namoconstructions.in` in each and
replace with your own domain:

| File | What to replace |
| --- | --- |
| `assets/js/site.config.js` | `site.domain` |
| `index.html` | `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`, and the JSON-LD `@id` / `url` values |
| `robots.txt` | `Host:` and `Sitemap:` |
| `sitemap.xml` | every `<loc>` |

Also update `site.webmanifest` if you use a subdirectory instead of the domain root.

**Choose one form of the address and use it everywhere.** For example, either
`https://namoconstructions.in` or `https://www.namoconstructions.in` — not both. If you use the
`www` form, set up a permanent redirect from the other form in your hosting panel or `.htaccess`.

---

## 12. Uploading to hosting

### Shared hosting (cPanel, Hostinger, GoDaddy, Bluehost)

1. Log in to your hosting control panel and open **File Manager**.
2. Open the folder that should hold the site — usually `public_html` or `www`.
3. Upload the **contents** of this project folder (the files and folders, not the outer folder).
   Structure inside `public_html`:

   ```
   public_html/
   ├── index.html
   ├── privacy.html
   ├── terms.html
   ├── robots.txt
   ├── sitemap.xml
   ├── site.webmanifest
   └── assets/
   ```

4. Delete any default `index.html` or `default.php` that the host created.
5. Visit your domain to confirm the site loads.

### Netlify, Vercel, Cloudflare Pages, GitHub Pages

1. Push this folder to a repository, or drag the folder into the provider's dashboard.
2. Set the build command to **none / empty** and the publish directory to the project root.
3. Add your custom domain in the provider's domain settings.
4. HTTPS is issued automatically and renewed for you.

### Apache / nginx

Point the document root at the folder containing `index.html`. No rewrite rules are required —
every URL on this site is a real file. Optional: gzip and cache headers in `.htaccess`.

```apache
# Optional performance headers for Apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png    "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/jpeg   "access plus 6 months"
  ExpiresByType text/css     "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html    "access plus 1 hour"
</IfModule>
```

---

## 13. Enabling HTTPS

**Required.** Do not launch without it.

### Free and automatic (recommended)

| Option | Steps |
| --- | --- |
| **Netlify / Vercel / Cloudflare Pages** | HTTPS is issued and renewed automatically. Nothing to do. |
| **GitHub Pages** | HTTPS is automatic for `*.github.io` and enabled for custom domains in the Pages settings. |
| **Shared hosting (cPanel)** | cPanel → **SSL/TLS Status** → **Run AutoSSL** → then **Force HTTPS Redirect**. |
| **Cloudflare** | Set SSL/TLS mode to **Full (strict)** on the free plan. |

### After enabling

1. Confirm by visiting `https://yourdomain.com` — the padlock appears.
2. Update the canonical URL, `og:url` and `sitemap.xml` to the `https://` version.
3. Submit the sitemap in **Google Search Console**.
4. Update your Google Play Console store listing to use the `https://` URL.

---

## 14. SEO checklist after going live

1. **Google Search Console** — add the property, verify with DNS or a file, then
   **Sitemaps → `sitemap.xml`**.
2. **Google Business Profile** — create a profile using the exact same name, address and phone.
3. **Google Analytics 4** — optional. Only add it if you want it, and update
   `privacy.html` section 5 (Analytics) to describe it honestly *before* you add it.
4. **Check structured data** — paste your URL into
   <https://search.google.com/test/rich-results> and fix anything reported.
5. **Check performance** — paste your URL into PageSpeed Insights and aim for 90+ on mobile.
6. **Update `<lastmod>`** in `sitemap.xml` whenever you make a real content change.
7. **Update the meta description** if you rewrite the About text — keep it under about 160
   characters and make it describe what you actually offer.

---

## 15. Google Play Console organisation verification

What a reviewer looks for is present in this build:

- Real organisation name and a real, verifiable business address.
- Working phone number and email on your own domain.
- An **About** page describing both divisions and the services offered.
- Service descriptions for construction, plus the software product list.
- A reachable **Privacy Policy** page linked in the footer and the contact section.
- A reachable **Terms & Conditions** page.
- Clear, honest product status — no fake download links, no invented ratings, awards or
  certifications.

**Checklist before you apply:**

- [ ] Organisation name matches your Google Payments and D-U-N-S records exactly.
- [ ] Address matches your records exactly, including PIN code.
- [ ] Phone number on the website is the same number in your records, and answers.
- [ ] Email is on your own domain and monitored.
- [ ] Privacy Policy and Terms pages are published on the live HTTPS domain.
- [ ] Every published app has its own privacy policy URL and a completed Data Safety form.
- [ ] No fake badges, fake reviews, fake awards or misleading certification marks anywhere.
- [ ] `NAMO_CONFIG_DOCTOR()` in the browser console reports no mismatches.

To replace the logo with the one Google Play shows, update the `logo` URL inside the JSON-LD
`Organization` block in `index.html`.

---

## 16. Performance, accessibility and security notes

**Performance**

- No frameworks, no libraries, no external fonts, no trackers — only the HTML, CSS and JS on your
  own server.
- One CSS file, one JS config file, one JS file.
- The hero image is preloaded with `fetchpriority="high"`.
- Below-the-fold images use the native `loading="lazy"` attribute, so no JavaScript is
  required for images to load.
- Every image has explicit `width` and `height`, so the layout does not shift while loading.
- SVG artwork scales to any screen at a few kilobytes.

**Accessibility**

- Semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- One `h1` per page, with a logical heading order after it.
- A "Skip to main content" link on every page.
- The hamburger button carries `aria-expanded`, `aria-controls` and an accessible label.
- The drawer traps keyboard focus, closes on `Escape` and returns focus to the button.
- Visible `:focus-visible` outlines on every interactive element.
- Colour contrast meets WCAG AA for body text and controls.
- `prefers-reduced-motion` disables all animation.
- Decorative images use empty `alt`; meaningful images describe their content.

**Security**

- The site is static: there is no database and no server-side code to attack.
- All form validation is client-side only and must **not** be treated as a security control. Any
  real backend must validate input again, server-side.
- A honeypot field (`company_website`) silently rejects basic bots.
- No secrets of any kind are stored in this project. Keep it that way: API keys, Firebase config
  and reCAPTCHA secrets belong on a server.
- HTTPS is required before launch.
- Add these headers in your hosting `.htaccess`:

```apache
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

> These headers can only be set by your **host**, not by HTML. Add them at the server.

---

## 17. Customising the design

All design decisions live at the top of `assets/css/styles.css` as CSS custom properties.

```css
:root {
  --navy-900: #08152c;   /* header, footer, dark sections     */
  --blue-600: #1663cf;   /* primary buttons, links, accents   */
  --gold-500: #c9a227;   /* gold accent line and highlights   */
  --ink-600:  #43566f;   /* body text colour                  */
  --surface:  #ffffff;   /* page background                    */
  --radius:   20px;      /* card corner rounding (--r-lg)      */
}
```

Change those values and the whole site updates.

Other quick customisations:

- **Corner rounding** — `--r-sm`, `--r-md`, `--r-lg`, `--r-xl`
- **Shadows** — `--sh-sm`, `--sh-md`, `--sh-lg`
- **Section width** — `--maxw` (currently 1200px)
- **Animation speed** — `--dur`, `--dur-slow`
- **Dark sections** — the `.section--navy` class
- **Fonts** — `--font-sans` and `--font-display`. The current system stack loads instantly with
  zero network cost. If you prefer a webfont, add the `<link>` in each HTML file and list the font
  first in `--font-sans`. Keep `display=swap`, and add a matching `preconnect`.

The CSS file is numbered into 18 documented sections, so you can find and change any component
quickly.

---

## 18. Maintenance reference

### Change the copyright year

Automatic. `main.js` writes the current year into every `[data-year]` element. Nothing to do.

### Update an app's status

1. `assets/js/site.config.js` → `play.products.<product>.status` and `playUrl`
2. `index.html` → the product badge in `#ai-apps` and the software project card in `#projects`
3. `index.html` → JSON-LD (only once the app is actually published)

### Add a new section

1. Copy an existing `<section>` block in `index.html`.
2. Give it a unique `id` and add the `id` to the three navigation menus (desktop, mobile drawer,
   footer).
3. Add the `id` to the `data-spy` link so the scroll spy highlights it.

### Change the scroll-spy behaviour

`initScrollSpy()` in `assets/js/main.js`. The `rootMargin` value controls which part of the
viewport counts as "current".

### Regenerate the favicon and share image

The PNG icons and `og-image.png` were generated programmatically. If you change the brand colours
or logo, regenerate them, or simply replace the files with your own PNGs — the filenames are all
that matters:

```
favicon-32.png (32×32)   icon-192.png (192×192)   icon-512.png (512×512)
apple-touch-icon.png (180×180)   og-image.png (1200×630)
```

### Browser testing checklist

Open DevTools → toggle device toolbar and check at **320, 375, 390, 414, 768, 1024, 1366, 1440
and 1920 px**. Then test the hamburger, the form validation, the project filter and the footer
links.

---

## 19. Before/after content rule

This site is built on one rule: **never present anything that has not been verified.**

Currently marked as placeholders and waiting for real content:

| Placeholder | Replace it with |
| --- | --- |
| Construction project cards | Real project photographs and documented details |
| `assets/img/projects/*.svg` | Optimised real photographs |
| Software project screenshots | Real app screenshots after release |
| "Coming Soon" product badges | "Available on Google Play" only after publishing |
| Contact email and phone | Your verified business contact details |
| "Last updated: 1 January 2026" | The real review date whenever you revise a legal page |

**Never add:** invented customer names, fake reviews or testimonials, fabricated project locations,
made-up statistics, invented ratings, awards, certifications, registration numbers, GST numbers,
D-U-N-S numbers, government approvals, or Google verification badges that were not actually issued.

Google Play reviews these pages manually. Accurate information protects the account; invented
information risks suspension.

---

## Support

This project needs no server, no database, no Node.js and no build step. Open `index.html` in a
browser and it runs. Every file is plain text and can be edited in Notepad, VS Code or any text
editor.

**Website:** Namo Constructions — Construction & Cluetech Technology
**Address:** Survey No. 50, Nanaibaug, B. T. Kawade Road, Ghorpadigaon, Pune City, Pune 411036,
Maharashtra, India

---

© 2026 Namo Constructions / ClueTech Software. All Rights Reserved.