# 🚀 My Portfolio

Welcome to my portfolio! Here, you'll find an overview of my projects, skills, and journey as a developer.

Live site: [chilavertndah.com](https://chilavertndah.com)

## 🌟 About Me
I am a **freelance developer** passionate about **full-stack development**, **mobile apps**, and **open-source projects**.

## 🛠️ Skills
- **Front-end**: HTML, CSS, JavaScript, Tailwind, Webflow
- **Mobile**: Flutter
- **Back-end**: Python, Django, FastAPI
- **CMS**: WordPress
- **Databases & Cloud**: Supabase, Firebase
- **Tooling**: GitHub Actions, Pytest, PyPI publishing

## 🗂️ Structure

- `index.html`, `work.html`, `about.html`, `certifications.html` — the four pages of the site.
- `assets/css/main.css`, `assets/js/main.js` — shared styles and behavior (theming, i18n, splash screen, navbar/footer partials).
- `partials/` — HTML fragments (`navbar.html`, `footer.html`) injected at runtime via `fetch()`.
- `image/` — site assets, each raster image paired with a `.webp` version.

## 🖥️ Local development

The navbar and footer are loaded at runtime via `fetch('partials/...')`, which requires an HTTP server (opening the files directly with `file://` will fail to load them because of CORS). Serve the folder locally, for example:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000`.

---

Thank you for visiting my portfolio! Feel free to reach out for projects or collaborations. 🚀
