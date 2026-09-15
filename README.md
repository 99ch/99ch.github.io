# Manifest — Portfolio

Portfolio of Chilavert N'dah, designed as a ledger of shipped work: paper, ink, and a stamp for every verified entry.

Live site: [chilavertndah.dev](https://chilavertndah.dev)

## About

Freelance full-stack & mobile developer based in Cotonou, Bénin. Full-stack, mobile (Flutter), WordPress/Webflow, and open-source contributions.

## Structure

- `index.html`, `work.html`, `about.html`, `certifications.html` — the four pages, each self-contained (navbar and footer are written directly into every page, not fetched, so there's no flash-of-empty-header on load).
- `assets/css/main.css` — the Manifest design system (paper/ink palette, ledger rows, stamp badge, type scale).
- `assets/js/main.js` — bilingual EN/FR strings (`TRANSLATIONS`), mobile menu, lazy-image enhancement.
- `image/` — site assets, each raster image paired with a `.webp` version.

## Local development

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000`.

---

Feel free to reach out for projects or collaborations.
