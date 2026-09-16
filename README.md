# Terminal Coast — Portfolio

Portfolio of Chilavert N'dah, styled as a terminal session at dusk on the Cotonou lagoon: dark teal, gold accents, and every section framed as a shell command.

Live site: [chilavertndah.dev](https://chilavertndah.dev)

## About

Freelance full-stack & mobile developer based in Cotonou, Bénin. Full-stack, mobile (Flutter), WordPress/Webflow, and open-source contributions.

## Structure

- `index.html`, `work.html`, `about.html`, `certifications.html` — the four pages, each self-contained (navbar and footer are written directly into every page, not fetched, so there's no flash-of-empty-header on load).
- `assets/css/main.css` — the Terminal Coast design system (teal/gold palette, terminal-window hero, commit-log style project rows).
- `assets/js/main.js` — bilingual EN/FR strings (`TRANSLATIONS`), mobile menu, scroll reveal, stat counters, lazy-image enhancement.
- `image/` — site assets, each raster image paired with a `.webp` version.

## Local development

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000`.

---

Feel free to reach out for projects or collaborations.
