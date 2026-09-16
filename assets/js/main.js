const TRANSLATIONS = {
  en: {
    "Home": "Home",
    "Work": "Work",
    "About": "About",
    "Certifications": "Certifications",
    "GitHub": "GitHub",
    "Language selector": "Language selector",
    "Menu": "Menu",
    "Close menu": "Close menu",
    "Navigation": "Navigation",
    "Socials": "Socials",

    "Hero Tagline 1": "Freelance",
    "Hero Tagline 2": "Full-stack & Mobile Developer",
    "Location Line 1": "Located",
    "Location Line 2": "in",
    "Location Line 3": "Cotonou, Bénin",
    "Brand Mark": "Code by Chilavert",

    "Manifesto Text": "Helping teams ship software that actually works. Real projects, real deadlines, always shipped and verified.",

    "Intro Blurb": "The combination of my passion for full-stack development, mobile apps, and open-source positions me in a unique place in the Beninese tech scene.",
    "About Me Button": "About me",

    "Recent Work": "Recent work",
    "More Work": "More work",
    "Open Source Category": "Interaction & Open Source",
    "Mobile Category": "Design & Development",
    "Website Category": "Design & Development",

    "Monster Entry": "MonsterUI",
    "Monster Body": "Extended the open-source MonsterUI library with accessible overlays, keyboard tooling, and snapshot tests for Python micro-frontends. PR #30.",
    "Monster Role": "Open-source maintainer",
    "View PR": "View PR",

    "CI CD Entry": "SKFeatureLLM — CI/CD",
    "CI CD Body": "Built a GitHub Actions pipeline that runs tests, enforces code quality, and publishes Python packages securely to PyPI via Trusted Publishing.",
    "CI CD Role": "Open-source contributor",

    "Pytest Entry": "SKFeatureLLM — Testing",
    "Pytest Body": "Set up a Pytest-based testing stack with unit tests, mocks, and configuration to keep the core feature-selection logic reliable.",
    "Pytest Role": "Open-source contributor",

    "AB Mobile Entry": "A&B Project EE",
    "AB Mobile Body": "Volunteer-built Flutter + Django app coordinating blood donations and connecting donors with people in need.",
    "AB Mobile Role": "Volunteer Flutter & Django developer",
    "View Screens": "View screens",

    "Benin Marketplace Entry": "Bénin Digital",
    "Benin Marketplace Body": "On-site marketplace application enabling buyers and sellers to trade products through a mobile-friendly ecommerce experience.",
    "Benin Marketplace Role": "Marketplace application developer",

    "MC Agence Entry": "MC Agence",
    "MC Agence Body": "Responsive Webflow site for a marketing agency, with cinematic scroll and analytics-ready forms.",
    "MC Agence Role": "Lead designer & Webflow developer",
    "Visit Website": "Visit site",

    "AB Website Entry": "A&B Project EE",
    "AB Website Body": "Public website for a nonprofit focused on social, humanitarian, and solidarity support.",
    "AB Website Role": "Volunteer web developer",

    "Keoni Entry": "Keoni Consulting",
    "Keoni Body": "WordPress consulting site built for Bénin Digital, with clear service pages and lead capture.",
    "Keoni Role": "WordPress & PHP developer",

    "AB Mobile Screens Heading": "A&B Project EE — app screens",
    "AB Mobile Screens Subtitle": "The main screens of the blood-donation mobile app.",
    "Benin Marketplace Screens Heading": "Bénin Digital — marketplace screens",
    "Benin Marketplace Screens Subtitle": "Key ecommerce flows of the Bénin Digital marketplace app.",
    "Close": "Close",

    "Skills Heading": "Toolbox",
    "GitHub Heading": "GitHub activity",

    "Footer Heading": "Let's work together",
    "Get In Touch": "Get in touch",
    "WhatsApp Label": "WhatsApp",
    "Version Label": "Version",
    "Version Value": "2026 Edition",
    "Local Time Label": "Local time",

    "Work Heading": "Work",
    "Work Intro": "Every project below shipped to a real client, employer, or open-source repo — dated, with role and stack on record.",
    "Stat Shipped": "Projects shipped",
    "Stat Sectors": "Sectors covered",
    "Stat Years": "Years active",
    "Status Shipped": "Shipped & verified",

    "Open Source Section": "Open source",
    "Mobile Section": "Mobile applications",
    "Websites Section": "Websites",

    "Process Heading": "How I ship work",
    "Process Intro": "A lean, opinionated delivery process for founders and lean teams.",
    "Discovery Entry": "Discovery & alignment",
    "Discovery Body": "Stakeholder interviews, success metrics, and backlog triage to focus on outcomes, not outputs.",
    "Design Entry": "Experience design",
    "Design Body": "Wireflows, system tokens, and prototyping sessions that capture nuance before code is written.",
    "Build Entry": "Build & QA",
    "Build Body": "Test-driven builds with instrumentation, accessibility sweeps, and environment parity.",
    "Launch Entry": "Launch & care",
    "Launch Body": "Operational runbooks, async hand-offs, and post-launch analytics to keep momentum alive.",

    "Collaboration Heading": "Collaboration formats",
    "Sprint Entry": "Launch sprint",
    "Sprint Body": "2–3 week engagements to ship a marketing site, microsite, or design-system MVP.",
    "Embedded Entry": "Embedded partner",
    "Embedded Body": "Part-time retention where I co-own a backlog, mentor teammates, and keep releases humming.",
    "Advisory Entry": "Advisory sessions",
    "Advisory Body": "One-off or recurring strategy calls focused on developer experience and automation.",

    "About Heading": "About",
    "About Hero Intro": "I design resilient software, facilitate calm releases, and keep teams aligned even when the scope shifts mid-flight.",
    "About Hero Secondary": "Beninese-born engineer, UCAO alumni, and lifelong student of product strategy, systems thinking, and inclusive design.",
    "Open Source Projects": "Open-source projects",
    "Languages Spoken": "Languages spoken",

    "Story Heading": "The story so far",
    "Origin Entry": "Origin",
    "Origin Body": "Learned to debug on family hardware in Porto-Novo, fell in love with community meetups, and kept stacking skills through Google Developer Groups.",
    "Uni Entry": "University years",
    "Uni Body": "Graduated in Computer Science at UCAO with research on resilient web architectures, and started freelancing for NGOs.",
    "Now Entry": "Right now",
    "Now Body": "Split between client launches, open-source contributions, and mentoring juniors on automation best practices.",

    "Principles Heading": "Principles",
    "Principle 1 Entry": "Accessibility is table stakes",
    "Principle 1 Body": "Every UI ships with semantic structure, keyboard coverage, and inclusive copy.",
    "Principle 2 Entry": "Documentation beats memory",
    "Principle 2 Body": "Async hand-offs, walkthroughs, and living runbooks keep teams confident.",
    "Principle 3 Entry": "Measure what matters",
    "Principle 3 Body": "Every build tracks the metric it's meant to move, from demo requests to MTTR.",
    "Principle 4 Entry": "People over process",
    "Principle 4 Body": "Rituals should energize collaboration, not drain it — light meetings, heavy context.",

    "Toolbox 1 Entry": "Frontend & DX",
    "Toolbox 1 Body": "Flutter, React, Webflow, Tailwind, Playwright, Vitest.",
    "Toolbox 2 Entry": "Backend & cloud",
    "Toolbox 2 Body": "Python, Django, FastAPI, Supabase, Firebase.",
    "Toolbox 3 Entry": "Product ops",
    "Toolbox 3 Body": "WordPress, Notion, GitHub Actions, analytics instrumentation.",

    "Certifications Heading": "Certifications",
    "Cert Intro": "Every certificate earned, dated and linked to its issuer's verification page — nothing self-reported.",
    "Verify": "Verify",

    "Python Cert Entry": "Programming in Python",
    "Python Cert Issuer": "Meta, via Coursera",
    "JS Cert Entry": "JavaScript Algorithms and Data Structures",
    "JS Cert Issuer": "freeCodeCamp",
    "AI Cert Entry": "Artificial Intelligence",
    "AI Cert Issuer": "Cheikh Hamidou Kane Digital University",
    "Excel Cert Entry": "Microsoft Excel",
    "Excel Cert Issuer": "Microsoft, via Coursera",
    "Logic Cert Entry": "Think Like a Computer: The Logic of Programming",
    "Logic Cert Issuer": "OpenClassrooms",
    "Cyber Cert Entry": "Foundations of Cybersecurity",
    "Cyber Cert Issuer": "Google, via Coursera",
    "DataSec Cert Entry": "Data Security",
    "DataSec Cert Issuer": "Cisco, via Coursera",
    "UI Cert Entry": "Visual Elements of User Interface Design",
    "UI Cert Issuer": "California Institute of the Arts, via Coursera",
    "SDPM Cert Entry": "Software Design and Project Management",
    "SDPM Cert Issuer": "HKUST, via Coursera",
    "RWD Cert Entry": "Responsive Web Design",
    "RWD Cert Issuer": "freeCodeCamp",
    "Git Cert Entry": "Introduction to Git",
    "Git Cert Issuer": "Microsoft Learn",
    "GitHub Cert Entry": "Introduction to GitHub",
    "GitHub Cert Issuer": "Microsoft Learn"
  },
  fr: {
    "Home": "Accueil",
    "Work": "Travaux",
    "About": "À propos",
    "Certifications": "Certifications",
    "GitHub": "GitHub",
    "Language selector": "Sélection de la langue",
    "Menu": "Menu",
    "Close menu": "Fermer le menu",
    "Navigation": "Navigation",
    "Socials": "Réseaux",

    "Hero Tagline 1": "Freelance",
    "Hero Tagline 2": "Développeur Full-stack & Mobile",
    "Location Line 1": "Basé",
    "Location Line 2": "à",
    "Location Line 3": "Cotonou, Bénin",
    "Brand Mark": "Codé par Chilavert",

    "Manifesto Text": "J'aide les équipes à livrer des logiciels qui fonctionnent vraiment. Des projets réels, des délais réels, toujours livrés et vérifiés.",

    "Intro Blurb": "La combinaison de ma passion pour le développement full-stack, les applications mobiles et l'open source me place dans une position unique dans l'écosystème tech béninois.",
    "About Me Button": "À propos",

    "Recent Work": "Travaux récents",
    "More Work": "Voir plus",
    "Open Source Category": "Interaction & Open Source",
    "Mobile Category": "Design & Développement",
    "Website Category": "Design & Développement",

    "Monster Entry": "MonsterUI",
    "Monster Body": "Extension de la bibliothèque open source MonsterUI avec overlays accessibles, navigation clavier et tests snapshot pour micro-frontends Python. PR #30.",
    "Monster Role": "Mainteneur open source",
    "View PR": "Voir la PR",

    "CI CD Entry": "SKFeatureLLM — CI/CD",
    "CI CD Body": "Pipeline GitHub Actions qui exécute les tests, applique la qualité de code et publie les paquets Python sur PyPI via Trusted Publishing.",
    "CI CD Role": "Contributeur open source",

    "Pytest Entry": "SKFeatureLLM — Tests",
    "Pytest Body": "Suite de tests Pytest avec tests unitaires, mocks et configuration pour fiabiliser la logique de sélection de features.",
    "Pytest Role": "Contributeur open source",

    "AB Mobile Entry": "A&B Project EE",
    "AB Mobile Body": "Application Flutter + Django bâtie bénévolement pour coordonner les dons de sang et mettre en relation donneurs et personnes dans le besoin.",
    "AB Mobile Role": "Développeur bénévole Flutter & Django",
    "View Screens": "Voir les écrans",

    "Benin Marketplace Entry": "Bénin Digital",
    "Benin Marketplace Body": "Application marketplace on-site permettant à acheteurs et vendeurs d'échanger via une expérience e-commerce mobile-friendly.",
    "Benin Marketplace Role": "Développeur de l'application marketplace",

    "MC Agence Entry": "MC Agence",
    "MC Agence Body": "Site Webflow responsive pour une agence marketing, animations cinématiques et formulaires prêts pour l'analyse.",
    "MC Agence Role": "Lead designer & développeur Webflow",
    "Visit Website": "Visiter le site",

    "AB Website Entry": "A&B Project EE",
    "AB Website Body": "Site public d'une association d'aide sociale, humanitaire et solidaire.",
    "AB Website Role": "Développeur web bénévole",

    "Keoni Entry": "Keoni Consulting",
    "Keoni Body": "Site de conseil sous WordPress créé pour Bénin Digital, pages de services claires et génération de leads.",
    "Keoni Role": "Développeur WordPress & PHP",

    "AB Mobile Screens Heading": "A&B Project EE — écrans de l'application",
    "AB Mobile Screens Subtitle": "Les principaux écrans de l'application mobile de don de sang.",
    "Benin Marketplace Screens Heading": "Bénin Digital — écrans de la marketplace",
    "Benin Marketplace Screens Subtitle": "Les principaux parcours e-commerce de la marketplace Bénin Digital.",
    "Close": "Fermer",

    "Skills Heading": "Boîte à outils",
    "GitHub Heading": "Activité GitHub",

    "Footer Heading": "Travaillons ensemble",
    "Get In Touch": "Me contacter",
    "WhatsApp Label": "WhatsApp",
    "Version Label": "Version",
    "Version Value": "Édition 2026",
    "Local Time Label": "Heure locale",

    "Work Heading": "Travaux",
    "Work Intro": "Chaque projet ci-dessous a été livré à un vrai client, employeur ou dépôt open source — daté, avec rôle et stack au dossier.",
    "Stat Shipped": "Projets livrés",
    "Stat Sectors": "Secteurs couverts",
    "Stat Years": "Années d'activité",
    "Status Shipped": "Livré & vérifié",

    "Open Source Section": "Open source",
    "Mobile Section": "Applications mobiles",
    "Websites Section": "Sites web",

    "Process Heading": "Comment je livre",
    "Process Intro": "Un processus de livraison sobre et assumé, pour fondateurs et petites équipes.",
    "Discovery Entry": "Découverte & alignement",
    "Discovery Body": "Entretiens, métriques de succès et tri du backlog pour viser les résultats, pas seulement les livrables.",
    "Design Entry": "Design d'expérience",
    "Design Body": "Wireflows, tokens de design et prototypage pour capturer la nuance avant le code.",
    "Build Entry": "Build & QA",
    "Build Body": "Développement piloté par les tests, instrumentation et revues d'accessibilité.",
    "Launch Entry": "Lancement & suivi",
    "Launch Body": "Runbooks opérationnels, passations async et analytics post-lancement pour garder l'élan.",

    "Collaboration Heading": "Modes de collaboration",
    "Sprint Entry": "Sprint de lancement",
    "Sprint Body": "2 à 3 semaines pour livrer un site marketing, un microsite ou un MVP de design system.",
    "Embedded Entry": "Partenaire embarqué",
    "Embedded Body": "Rétention à temps partiel : je co-gère un backlog, mentore l'équipe et sécurise les releases.",
    "Advisory Entry": "Sessions de conseil",
    "Advisory Body": "Appels stratégiques ponctuels ou récurrents sur la DX et l'automatisation.",

    "About Heading": "À propos",
    "About Hero Intro": "Je conçois des logiciels résilients, j'orchestre des sorties sereines et je garde les équipes alignées même quand le périmètre évolue en cours de route.",
    "About Hero Secondary": "Ingénieur béninois, alumni de l'UCAO, étudiant perpétuel de la stratégie produit, de la pensée systémique et du design inclusif.",
    "Open Source Projects": "Projets open source",
    "Languages Spoken": "Langues parlées",

    "Story Heading": "Le parcours jusqu'ici",
    "Origin Entry": "Les débuts",
    "Origin Body": "Débogage sur le matériel familial à Porto-Novo, coup de cœur pour les meetups communautaires, montée en compétences via les Google Developer Groups.",
    "Uni Entry": "Les années fac",
    "Uni Body": "Diplômé en informatique à l'UCAO avec un mémoire sur les architectures web résilientes, et premiers freelances pour des ONG.",
    "Now Entry": "Aujourd'hui",
    "Now Body": "Partagé entre lancements clients, contributions open source et mentorat sur les bonnes pratiques d'automatisation.",

    "Principles Heading": "Principes",
    "Principle 1 Entry": "L'accessibilité est un prérequis",
    "Principle 1 Body": "Chaque UI arrive avec une structure sémantique, une navigation clavier complète et une copy inclusive.",
    "Principle 2 Entry": "La documentation prime sur la mémoire",
    "Principle 2 Body": "Passations async, walkthroughs et runbooks vivants rassurent les équipes.",
    "Principle 3 Entry": "Mesurer ce qui compte",
    "Principle 3 Body": "Chaque build suit la métrique qu'il doit faire bouger, des demandes de démo au MTTR.",
    "Principle 4 Entry": "Les gens avant le process",
    "Principle 4 Body": "Les rituels doivent dynamiser la collaboration, pas l'épuiser — peu de réunions, beaucoup de contexte.",

    "Toolbox 1 Entry": "Frontend & DX",
    "Toolbox 1 Body": "Flutter, React, Webflow, Tailwind, Playwright, Vitest.",
    "Toolbox 2 Entry": "Backend & cloud",
    "Toolbox 2 Body": "Python, Django, FastAPI, Supabase, Firebase.",
    "Toolbox 3 Entry": "Product ops",
    "Toolbox 3 Body": "WordPress, Notion, GitHub Actions, instrumentation analytics.",

    "Certifications Heading": "Certifications",
    "Cert Intro": "Chaque certificat obtenu, daté et relié à la page de vérification de son émetteur — rien de déclaratif.",
    "Verify": "Vérifier",

    "Python Cert Entry": "Programmation en Python",
    "Python Cert Issuer": "Meta, via Coursera",
    "JS Cert Entry": "Algorithmes et structures de données JavaScript",
    "JS Cert Issuer": "freeCodeCamp",
    "AI Cert Entry": "Intelligence artificielle",
    "AI Cert Issuer": "Université Numérique Cheikh Hamidou Kane",
    "Excel Cert Entry": "Microsoft Excel",
    "Excel Cert Issuer": "Microsoft, via Coursera",
    "Logic Cert Entry": "Penser comme un ordinateur : la logique de la programmation",
    "Logic Cert Issuer": "OpenClassrooms",
    "Cyber Cert Entry": "Fondamentaux de la cybersécurité",
    "Cyber Cert Issuer": "Google, via Coursera",
    "DataSec Cert Entry": "Sécurité des données",
    "DataSec Cert Issuer": "Cisco, via Coursera",
    "UI Cert Entry": "Éléments visuels du design d'interface",
    "UI Cert Issuer": "California Institute of the Arts, via Coursera",
    "SDPM Cert Entry": "Conception logicielle & gestion de projet",
    "SDPM Cert Issuer": "HKUST, via Coursera",
    "RWD Cert Entry": "Design web responsive",
    "RWD Cert Issuer": "freeCodeCamp",
    "Git Cert Entry": "Introduction à Git",
    "Git Cert Issuer": "Microsoft Learn",
    "GitHub Cert Entry": "Introduction à GitHub",
    "GitHub Cert Issuer": "Microsoft Learn"
  }
};

const GREETINGS = ["Hello", "Bonjour", "Hola", "Ciao", "Hallo"];

const languageState = {
  current: localStorage.getItem('preferredLanguage') || 'en'
};

function applyLanguage(lang) {
  const safeLang = TRANSLATIONS[lang] ? lang : 'en';
  languageState.current = safeLang;
  localStorage.setItem('preferredLanguage', safeLang);
  document.documentElement.setAttribute('lang', safeLang === 'fr' ? 'fr' : 'en');

  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate');
    const translation = TRANSLATIONS[safeLang][key];
    if (translation) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll('[data-translate-aria]').forEach((element) => {
    const key = element.getAttribute('data-translate-aria');
    const translation = TRANSLATIONS[safeLang][key];
    if (translation) {
      element.setAttribute('aria-label', translation);
    }
  });

  document
    .querySelectorAll('#language-selector, #mobile-language-selector')
    .forEach((selector) => {
      if (selector) selector.value = safeLang;
    });
}

function initLanguageSelectors() {
  document
    .querySelectorAll('#language-selector, #mobile-language-selector')
    .forEach((selector) => {
      if (!selector) return;
      selector.addEventListener('change', (event) => {
        applyLanguage(event.target.value);
      });
    });
}

function initNavOverlay() {
  const toggle = document.getElementById('nav-toggle');
  const overlay = document.getElementById('nav-overlay');
  if (!toggle || !overlay) return;

  const closeBtn = overlay.querySelector('.nav-overlay-close');

  const setOpen = (open) => {
    overlay.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    setOpen(!overlay.classList.contains('is-open'));
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => setOpen(false));
  }

  overlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}

function enhanceLazyImages() {
  document.querySelectorAll('img:not([loading])').forEach((img) => {
    if (img.dataset.priority === 'true') return;
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initScrollReveal() {
  const revealItems = document.querySelectorAll('.row-list-item');
  revealItems.forEach((el) => el.setAttribute('data-reveal', ''));

  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealItems.forEach((el) => observer.observe(el));
}

function initStatCounters() {
  const stats = document.querySelectorAll('.stat-row .stat b');
  if (!stats.length) return;

  const animateCount = (el) => {
    const text = el.textContent.trim();
    const match = text.match(/^(\d+)$/);
    if (!match || prefersReducedMotion.matches) return;

    const target = parseInt(match[1], 10);
    const duration = 700;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = text;
      }
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  stats.forEach((el) => observer.observe(el));
}

function initManifestoReveal() {
  const container = document.querySelector('.manifesto p');
  if (!container) return;

  const text = container.textContent.trim();
  container.textContent = '';
  const words = text.split(/\s+/);
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.className = 'word';
    span.textContent = word + (i < words.length - 1 ? ' ' : '');
    container.appendChild(span);
  });

  const wordEls = container.querySelectorAll('.word');

  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    wordEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Array.from(wordEls).indexOf(entry.target);
          wordEls.forEach((el, i) => {
            if (i <= idx) el.classList.add('is-visible');
          });
        }
      });
    },
    { threshold: 1, rootMargin: '0px 0px -45% 0px' }
  );

  wordEls.forEach((el) => observer.observe(el));
}

function initGreetingCycler() {
  const section = document.querySelector('.greeting-section');
  if (!section) return;
  const wordEl = section.querySelector('.greeting-word .word');
  if (!wordEl) return;

  if (prefersReducedMotion.matches) {
    wordEl.classList.add('is-active');
    return;
  }

  let i = 0;
  wordEl.textContent = GREETINGS[0];
  wordEl.classList.add('is-active');

  setInterval(() => {
    wordEl.classList.remove('is-active');
    setTimeout(() => {
      i = (i + 1) % GREETINGS.length;
      wordEl.textContent = GREETINGS[i];
      wordEl.classList.add('is-active');
    }, 500);
  }, 1800);
}

function initLocalClock() {
  const el = document.getElementById('local-time');
  if (!el) return;

  const update = () => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Porto-Novo',
      hour: '2-digit',
      minute: '2-digit'
    });
    el.textContent = `${formatter.format(new Date())} GMT+1`;
  };

  update();
  setInterval(update, 30000);
}

function initPage() {
  enhanceLazyImages();
  initNavOverlay();
  initLanguageSelectors();
  applyLanguage(languageState.current);
  initScrollReveal();
  initStatCounters();
  initManifestoReveal();
  initGreetingCycler();
  initLocalClock();
}

document.addEventListener('DOMContentLoaded', initPage);
