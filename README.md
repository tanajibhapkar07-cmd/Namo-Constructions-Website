# NAMO CONSTRUCTIONS — CONSTRUCTION & CLUETECH TECHNOLOGY

Production-ready, static business website built with **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step, no external libraries (optional Google Fonts only).

It covers both divisions of the organisation:

| Division | What it does |
|---|---|
| **Namo Constructions** | Residential construction, RCC work, design & build, structural supervision in Pune |
| **ClueTech Technology** | Practical AI applications for Android, moving towards Flutter cross-platform software |

---

## 1. Folder structure

```
├── index.html            Main website (all sections)
├── privacy.html          Privacy Policy
├── terms.html            Terms & Conditions
├── robots.txt            Crawler instructions + sitemap location
├── sitemap.xml           Sitemap for Google Search Console
├── favicon.svg           Modern vector favicon
├── favicon.ico           Classic browser favicon
├── README.md             This file
└── assets/
    ├── css/style.css     All styling (mobile-first, sectioned)
    ├── js/main.js        Navigation, scroll-spy, tabs, form validation
    └── images/
        ├── *.jpg          All photographs / placeholders (replace these)
        ├── apple-touch-icon.png
        └── og-image.jpg   Social share image (1200 × 630)
```

**To preview locally:** double-click `index.html`, or run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

---

## 2. Replacing the business information

All business details are plain text in the HTML — search and replace the tokens below in **every** file (`index.html`, `privacy.html`, `terms.html`, `robots.txt`, `sitemap.xml`, `assets/js/main.js`):

| What | Current value | Where it appears |
|---|---|---|
| Domain | `https://www.namoconstructions.in/` | canonical, Open Graph, JSON-LD, robots.txt, sitemap.xml |
| Email | `contact@namoconstructions.in` | top bar, contact section, footer, legal pages, **`assets/js/main.js` → `CONTACT_EMAIL`** |
| Phone | `7776006122` — plain text only, **no `tel:` links** (JSON-LD uses `+91-7776006122`) | top bar, contact section, footer, legal pages |
| Address | `Survey No. 50, Nanaibaug, B. T. Kawade Road, Ghorpadigaon, Pune City, Pune 411036, Maharashtra, India` | contact section, area band, footer, legal pages, JSON-LD |
| Organisation name | `Namo Constructions` / `NAMO CONSTRUCTIONS` | header, footer, JSON-LD, titles |
| Copyright line | `© 2026 Namo Constructions / ClueTech Software. All Rights Reserved.` | footer of every page |

> **Google Play / D-U-N-S tip:** the organisation name, address, email and phone must match your Google Payments and D-U-N-S records **exactly** (same spelling, same order, same punctuation). The values live in three places: the visible HTML, the contact/JSON-LD block in `index.html`, and `assets/js/main.js`.

Search for these markers while editing:

- `EDIT:` — HTML/CSS comments that mark every editable business value.
- `namoconstructions.in` — every URL that must change when the domain changes.

---

## 3. Replacing images

Every image is a **`.jpg` file with the same filename**, so you can drop a real photo in place of a placeholder without touching any code. Keep the same file name and roughly the same shape (aspect ratio).

| File | Used in | Recommended size |
|---|---|---|
| `hero-house.jpg` | Hero — main image | 1200 × 900 (4:3) |
| `hero-blueprint.jpg` | Spare — no longer used (hero card removed) | 900 × 700 |
| `hero-phone.jpg` | Spare — no longer used (hero card removed) | 640 × 1000 (portrait) |
| `hero-laptop.jpg` | Spare — no longer used (hero card removed) | 1000 × 640 |
| `about-construction.jpg` | About — construction division | 1000 × 760 |
| `about-technology.jpg` | About — technology division | 1000 × 760 |
| `service-house.jpg` | Service card — House Construction | 900 × 660 |
| `service-rcc.jpg` | Service card — RCC Work | 900 × 660 |
| `service-design.jpg` | Service card — Design & Build | 900 × 660 |
| `service-supervision.jpg` | Service card — Structural Supervision | 900 × 660 |
| `service-quality.jpg` | Service card — Quality & Safety | 900 × 660 |
| `service-commitment.jpg` | Service card — Project Commitment | 900 × 660 |
| `project-residential.jpg` | Projects — Residential Houses | 900 × 660 |
| `project-bungalow.jpg` | Projects — Bungalows | 900 × 660 |
| `project-rcc.jpg` | Projects — RCC Structures | 900 × 660 |
| `project-ongoing.jpg` | Projects — Ongoing Projects | 900 × 660 |
| `project-completed.jpg` | Projects — Completed Projects | 900 × 660 |
| `product-photo-resizer.jpg` | Product icon — Clue AI Photo Resizer | 700 × 700 (square) |
| `product-background-remover.jpg` | Product icon — Clue AI Background Remover | 700 × 700 |
| `product-triangle-puzzle.jpg` | Product icon — Clue Triangle Puzzle | 700 × 700 |
| `android-app.jpg` | Android section phone mockup | 780 × 1100 |
| `flutter-app.jpg` | Flutter section mockup | 1100 × 800 |
| `og-image.jpg` | Social share card | 1200 × 630 |
| `apple-touch-icon.png` | iOS home icon | 180 × 180 |
| `logo.png` | Header & footer brand mark (all 3 pages) | 180 × 180 (square) |

**Steps:**
1. Export your photo as `.jpg` (quality ~80–85).
2. Rename it to the placeholder's file name.
3. Replace the file inside `assets/images/`.
4. Update the `alt="..."` text in `index.html` so it describes the new photo (important for accessibility and SEO).

**Adding a real project:** each project card in the *Projects → Construction Projects* tab already has an `<!-- EDIT -->` comment above it. Replace the image, update the `<h3>` and `<p>`, and change the category badge text (`project-card__cat`). Duplicate an entire `<article class="project-card">…</article>` block to add more projects.

### Replacing the logo
The header and footer logo is `assets/images/logo.png` (white-background square icon, displayed in a 52×52 rounded tile via `object-fit:cover`):

```html
<img class="brand__mark" src="assets/images/logo.png" alt="" width="52" height="52" decoding="async">
```

Swap the file at `assets/images/logo.png` with any square image to change the logo in the header **and** footer of all three pages at once. `alt=""` is intentional — the adjacent visible text already names the brand (the `<a>` also carries an `aria-label`).

---

## 4. Products, "Coming Soon" and Google Play links

All three ClueTech products are currently marked **Coming Soon** — deliberately, so nothing is claimed as released before it actually is.

When an app is published on Google Play:

1. In `index.html`, find the product card and replace:
   ```html
   <span class="btn btn--soon" aria-disabled="true">Coming Soon</span>
   ```
   with:
   ```html
   <a class="btn btn--primary btn--sm" href="https://play.google.com/store/apps/details?id=com.yourpackage.app" target="_blank" rel="noopener">Get it on Google Play</a>
   ```
2. Change the badge `<span class="status-badge status-badge--soon">Coming Soon</span>` to a released badge, e.g. `<span class="status-badge" style="background:rgba(230,247,236,.96);color:#14623A;border:1px solid #B7E3C6;">Available</span>`.
3. Do the same in the *Android* section (`app-row`) and the *Projects → Software Projects* tab.
4. Update the matching `SoftwareApplication` JSON-LD block in the `<head>` of `index.html` (add the final `url` and remove the phrase "Not yet published").

---

## 5. The contact form

The form **does not store anything** — it validates the fields in the browser and then opens the visitor's own email app with the message pre-filled. This is stated openly under the form so nobody is misled.

If you want submissions to reach you without the visitor having an email app, connect a form endpoint:

**Option A — Formspree (2 minutes):**
```html
<form class="contact-form" id="contactForm" novalidate
      action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Then in `assets/js/main.js` remove the `window.location.href = 'mailto:...'` line and call `form.submit()` (or let Formspree handle it). Update `privacy.html` section 3 to describe the new behaviour.

**Option B — your own backend:** point `action` at your PHP/Node endpoint. Keep all keys and secrets **server-side only**.

---

## 6. Configuring the domain

Search & replace `https://www.namoconstructions.in/` with your final domain in:

1. `index.html` — `<link rel="canonical">`, Open Graph `og:url`, `og:image`, and all **four JSON-LD** blocks (`Organization`, `WebSite`, three `SoftwareApplication`).
2. `privacy.html` / `terms.html` — canonical + `og:url`.
3. `robots.txt` — `Sitemap:` line.
4. `sitemap.xml` — all three `<loc>` URLs.

---

## 7. Uploading to hosting

The site is plain static files — it runs on any shared host, cPanel, Plesk, Netlify, Vercel, GitHub Pages or AWS S3.

**cPanel / shared hosting:**
1. Zip the contents of this folder (the files, not the parent folder).
2. cPanel → **File Manager** → `public_html` → **Upload** → upload the zip → **Extract**.
3. Confirm `index.html` sits directly inside `public_html` (not `public_html/website/index.html`).
4. Delete the zip.

**FTP:** connect with an FTP client and drag every file and folder into `public_html`.

**After upload:** open `https://yourdomain.com` and check the header, hamburger menu, tabs and contact form.

---

## 8. Publishing over HTTPS

1. In your hosting control panel, open **SSL/TLS** (cPanel → SSL/TLS Status) and run **AutoSSL**, or install a free **Let's Encrypt** certificate.
2. Force HTTPS by adding an `.htaccess` in `public_html`:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
3. Update every URL in the files from `http://` to `https://` (they are already written as `https://` in this template).
4. Submit `https://yourdomain.com/sitemap.xml` in **Google Search Console**.

> Never place API keys, Firebase private keys, database passwords or payment secrets in `index.html`, `style.css` or `main.js` — frontend code is public. Use environment variables on a backend or the hosting dashboard.

---

## 9. Google Play Organisation verification checklist

- [ ] Organisation name on the website matches your Google Payments / D-U-N-S record exactly.
- [ ] Business address matches exactly (same line order and formatting).
- [ ] Email address and phone number match and are actively monitored.
- [ ] The website clearly shows what the organisation does (About + Services sections).
- [ ] Software products are described honestly (Coming Soon until released).
- [ ] `privacy.html` is reachable from every page footer.
- [ ] `terms.html` is reachable from every page footer.
- [ ] Site is live over HTTPS with the same domain used in your verification form.
- [ ] **No** fake verification badges, D-U-N-S logos, government logos or partner logos are shown (the template intentionally includes none).

---

## 10. SEO checklist

- [ ] Final domain replaced everywhere (Section 6).
- [ ] Title, meta description and keywords reviewed for your actual services.
- [ ] `alt` text updated for every replaced photo.
- [ ] `sitemap.xml` submitted in Google Search Console.
- [ ] Page tested in Google Rich Results Test (Organization + SoftwareApplication structured data).
- [ ] PageSpeed Insights run on mobile (the template ships with lazy loading, semantic HTML and ~1 CSS + ~1 JS file).

---

## 11. Editing tips

- **Text** is always in the HTML files — search for a few words of the sentence you want to change.
- **Colours and spacing** are the CSS variables at the top of `assets/css/style.css` (`--navy-900`, `--blue-600`, `--gold-500`, `--radius`, …).
- **Sections** are marked with banner comments in `index.html` (`<!-- ==== HERO ==== -->`).
- **Adding a section:** copy an existing `<section class="section">…</section>` block, give it a new `id`, and add a matching nav link in the header/footer lists.
- **No frameworks** are used on purpose — everything works offline, loads fast and is easy to maintain.

---

© 2026 Namo Constructions / ClueTech Software. All Rights Reserved.
