# Fifth Chukker — Polo & Country Club

Official website for **Fifth Chukker Polo & Country Club** — Africa's premier polo,
equestrian and luxury lifestyle destination, within Kangimi Resort, Kaduna, Nigeria.

> _Where The World Meets Africa._

## About

A cinematic, fully responsive multi-page luxury site built as static HTML/CSS/JS
(no build step). Brand colour **#C31218** (from the club's twin-horse-heads logo).

### Pages
Home · Story · Stay · Polo · Equestrian · Dining · Events & Weddings ·
Social Impact · Magazine · Gallery · Contact

### Features
- Full 1080p, fast-start video hero (with instant-loading poster)
- Shared header/footer + interactions via `partials.js`
- Animated counters, scroll-reveal, filterable gallery + lightbox, heritage timeline,
  testimonial rotator, scroll-progress bar, mobile menu
- Mobile-first, accessible, `prefers-reduced-motion` aware

## Run locally

It's plain static files — just open `index.html`, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy

Zero-config static deploy. On **Vercel**, import this repository — framework preset
**Other**, no build command, output = repository root.

## Structure

```
index.html, about.html, stay.html, polo.html, equestrian.html, dining.html,
events.html, impact.html, magazine.html, gallery.html, contact.html
styles.css        global stylesheet
partials.js       shared header/footer + all interactions
assets/           images, logo, hero video
```

---
© Fifth Chukker Polo & Country Club · Kangimi Resort, Kaduna, Nigeria
