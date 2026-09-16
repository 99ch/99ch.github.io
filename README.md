# Monumental — Portfolio

Portfolio of Chilavert N'dah: oversized type, hairline rules, no cards. Grey / white / near-black with one blue accent, a looping name marquee, scroll-revealed manifesto, and a full-screen overlay menu.

Live site: [chilavertndah.dev](https://chilavertndah.dev)

## About

Freelance full-stack & mobile developer based in Cotonou, Bénin. Full-stack, mobile (Flutter), WordPress/Webflow, and open-source contributions.

## Structure

- `index.html`, `work.html`, `about.html`, `certifications.html` — the four pages, each self-contained (nav and footer are written directly into every page, not fetched, so there's no flash-of-empty-header on load).
- `assets/css/main.css` — the Monumental design system (grey/white/dark palette, marquee, row-list, circular buttons, wave section dividers).
- `assets/js/main.js` — bilingual EN/FR strings (`TRANSLATIONS`), overlay menu, scroll-revealed manifesto, greeting cycler, live local clock, scroll reveal, stat counters.
- `image/` — site assets, each raster image paired with a `.webp` version.

## Local development

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000`.

---

Feel free to reach out for projects or collaborations.
