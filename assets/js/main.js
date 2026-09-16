const TRANSLATIONS = {
  en: {
    "Home": "home",
    "Work": "work",
    "About": "about",
    "Certifications": "certifications.md",
    "GitHub": "github",
    "Language selector": "Language selector",

    "Chilavert N'Dah": "Chilavert N'Dah",
    "Software Developer": "Full-stack & mobile developer",
    "Location Line": "Cotonou, Bénin — GMT+1",
    "Ship Command": "./ship --latest",
    "Ship Output 1": "A&B Project EE Mobile · Flutter + Django",
    "Ship Output 2": "coordinating blood donors & people in need",
    "Ship Status": "status: shipped ✓ verified ✓",
    "Photo Caption Name": "chilavert.jpg",
    "Photo Caption Status": "verified",
    "Call": "call",
    "Text": "text",
    "Send Email": "mail",
    "See Ledger": "git log --all",

    "Ledger Heading": "Recent commits",
    "Ledger Intro": "A shortlist from the full log — open-source contributions, mobile apps, and websites shipped for real clients.",
    "See More": "git log --all",

    "About Preview Heading": "cat about.md",
    "About Preview Body": "Computer Science graduate from UCAO in Cotonou. I work as a freelance developer and contribute to open-source projects between client launches. Off the clock: basketball, music, and travel.",
    "Read Bio": "man chilavert",

    "Toolbox Heading": "ls ~/toolbox",
    "Toolbox Intro": "What's actually on the bench — no résumé padding.",

    "Certifications Preview Heading": "ls ~/certifications",
    "Certifications Intro": "Structured programs, labs, and exams — each entry links to its verification page.",

    "GitHub Heading": "gh api stats",
    "GitHub Intro": "Public activity, pulled straight from GitHub.",

    "Contact Heading": "mail --compose",
    "Contact Intro": "I answer within a day, usually faster.",
    "Email Label": "email",
    "Call Label": "call",
    "WhatsApp Label": "whatsapp",
    "WhatsApp Value": "Instant chats & quick briefs",

    "Footer Rights": "© 2026 Chilavert N'Dah — exit 0",
    "Footer GitHub": "github",

    "Work Eyebrow": "git log --all --oneline",
    "Work Heading": "Commit history",
    "Work Intro": "Every project below shipped to a real client, employer, or open-source repo — dated, with role and stack on record.",
    "Back to Home": "cd ~",
    "Resume": "resume.pdf",
    "Stat Shipped": "commits shipped",
    "Stat Sectors": "sectors covered",
    "Stat Years": "years active",

    "Open Source Section": "~/open-source",
    "Mobile Section": "~/mobile",
    "Websites Section": "~/websites",

    "Monster Entry": "MonsterUI — library contribution",
    "Monster Body": "Extended the open-source MonsterUI library with accessible overlays, keyboard tooling, and snapshot tests for Python micro-frontends. PR #30.",
    "Monster Role": "Open-source maintainer",
    "View PR": "view PR",

    "CI CD Entry": "SKFeatureLLM — CI/CD pipeline",
    "CI CD Body": "Built a GitHub Actions pipeline that runs tests, enforces code quality, and publishes Python packages securely to PyPI via Trusted Publishing.",
    "CI CD Role": "Open-source contributor",

    "Pytest Entry": "SKFeatureLLM — Pytest infrastructure",
    "Pytest Body": "Set up a Pytest-based testing stack with unit tests, mocks, and configuration to keep the core feature-selection logic reliable.",
    "Pytest Role": "Open-source contributor",

    "AB Mobile Entry": "A&B Project EE — mobile app",
    "AB Mobile Body": "Volunteer-built Flutter + Django app coordinating blood donations and connecting donors with people in need.",
    "AB Mobile Role": "Volunteer Flutter & Django developer",
    "View Screens": "view screens",

    "Benin Marketplace Entry": "Bénin Digital — marketplace app",
    "Benin Marketplace Body": "On-site marketplace application enabling buyers and sellers to trade products through a mobile-friendly ecommerce experience.",
    "Benin Marketplace Role": "Marketplace application developer",

    "MC Agence Entry": "MC Agence — marketing site",
    "MC Agence Body": "Responsive Webflow site for a marketing agency, with cinematic scroll and analytics-ready forms.",
    "MC Agence Role": "Lead designer & Webflow developer",
    "Visit Website": "visit site",

    "AB Website Entry": "A&B Project EE — website",
    "AB Website Body": "Public website for a nonprofit focused on social, humanitarian, and solidarity support.",
    "AB Website Role": "Volunteer web developer",

    "Keoni Entry": "Keoni Consulting — corporate site",
    "Keoni Body": "WordPress consulting site built for Bénin Digital, with clear service pages and lead capture.",
    "Keoni Role": "WordPress & PHP developer",

    "AB Mobile Screens Heading": "A&B Project EE — app screens",
    "AB Mobile Screens Subtitle": "The main screens of the blood-donation mobile app.",
    "Benin Marketplace Screens Heading": "Bénin Digital — marketplace screens",
    "Benin Marketplace Screens Subtitle": "Key ecommerce flows of the Bénin Digital marketplace app.",
    "Close": "close",

    "Process Heading": "How commits get merged",
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
    "Collaboration Intro": "Engagement models that flex with your roadmap and budget.",
    "Sprint Entry": "Launch sprint",
    "Sprint Body": "2–3 week engagements to ship a marketing site, microsite, or design-system MVP.",
    "Embedded Entry": "Embedded partner",
    "Embedded Body": "Part-time retention where I co-own a backlog, mentor teammates, and keep releases humming.",
    "Advisory Entry": "Advisory sessions",
    "Advisory Body": "One-off or recurring strategy calls focused on developer experience and automation.",

    "About Eyebrow": "man chilavert",
    "About Heading": "Chilavert N'Dah",
    "About Hero Intro": "I design resilient software, facilitate calm releases, and keep teams aligned even when the scope shifts mid-flight.",
    "About Hero Secondary": "Beninese-born engineer, UCAO alumni, and lifelong student of product strategy, systems thinking, and inclusive design.",
    "Open Source Projects": "open-source projects",
    "Languages Spoken": "languages spoken",
    "View Work": "git log --all",

    "Story Heading": "log --follow career.md",
    "Story Intro": "From tinkering with BASIC scripts to shipping distributed systems, here's how I found my groove.",
    "Origin Entry": "Origin",
    "Origin Body": "Learned to debug on family hardware in Porto-Novo, fell in love with community meetups, and kept stacking skills through Google Developer Groups.",
    "Uni Entry": "University years",
    "Uni Body": "Graduated in Computer Science at UCAO with research on resilient web architectures, and started freelancing for NGOs.",
    "Now Entry": "Right now",
    "Now Body": "Split between client launches, open-source contributions, and mentoring juniors on automation best practices.",

    "Principles Heading": "cat PRINCIPLES.md",
    "Principles Intro": "The filters I run before pushing code, presenting work, or joining a team.",
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

    "Cert Intro Heading": "ls -la ~/certifications",
    "Cert Intro Body": "Every certificate earned, dated and linked to its issuer's verification page — nothing self-reported.",
    "Verify": "verify",

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
    "GitHub Cert Issuer": "Microsoft Learn",

    "Status Shipped": "shipped & verified"
  },
  fr: {
    "Home": "accueil",
    "Work": "travaux",
    "About": "a-propos",
    "Certifications": "certifications.md",
    "GitHub": "github",
    "Language selector": "Sélection de la langue",

    "Chilavert N'Dah": "Chilavert N'Dah",
    "Software Developer": "Développeur full-stack & mobile",
    "Location Line": "Cotonou, Bénin — GMT+1",
    "Ship Command": "./ship --latest",
    "Ship Output 1": "A&B Project EE Mobile · Flutter + Django",
    "Ship Output 2": "coordonne donneurs de sang & personnes dans le besoin",
    "Ship Status": "status: livré ✓ vérifié ✓",
    "Photo Caption Name": "chilavert.jpg",
    "Photo Caption Status": "vérifié",
    "Call": "appeler",
    "Text": "écrire",
    "Send Email": "mail",
    "See Ledger": "git log --all",

    "Ledger Heading": "Commits récents",
    "Ledger Intro": "Un extrait du log complet — contributions open source, applications mobiles et sites livrés à de vrais clients.",
    "See More": "git log --all",

    "About Preview Heading": "cat about.md",
    "About Preview Body": "Diplômé en informatique de l'UCAO à Cotonou. Développeur freelance, je contribue à des projets open source entre deux lancements clients. En dehors : basketball, musique et voyages.",
    "Read Bio": "man chilavert",

    "Toolbox Heading": "ls ~/toolbox",
    "Toolbox Intro": "Ce qui est vraiment sur l'établi — sans enjolivement de CV.",

    "Certifications Preview Heading": "ls ~/certifications",
    "Certifications Intro": "Parcours structurés, labs et examens — chaque entrée renvoie vers sa page de vérification.",

    "GitHub Heading": "gh api stats",
    "GitHub Intro": "Activité publique, extraite directement de GitHub.",

    "Contact Heading": "mail --compose",
    "Contact Intro": "Je réponds en moins d'une journée, souvent plus vite.",
    "Email Label": "email",
    "Call Label": "appeler",
    "WhatsApp Label": "whatsapp",
    "WhatsApp Value": "Échanges rapides & briefs",

    "Footer Rights": "© 2026 Chilavert N'Dah — exit 0",
    "Footer GitHub": "github",

    "Work Eyebrow": "git log --all --oneline",
    "Work Heading": "Historique des commits",
    "Work Intro": "Chaque projet ci-dessous a été livré à un vrai client, employeur ou dépôt open source — daté, avec rôle et stack au dossier.",
    "Back to Home": "cd ~",
    "Resume": "resume.pdf",
    "Stat Shipped": "commits livrés",
    "Stat Sectors": "secteurs couverts",
    "Stat Years": "années d'activité",

    "Open Source Section": "~/open-source",
    "Mobile Section": "~/mobile",
    "Websites Section": "~/sites-web",

    "Monster Entry": "MonsterUI — contribution à la bibliothèque",
    "Monster Body": "Extension de la bibliothèque open source MonsterUI avec overlays accessibles, navigation clavier et tests snapshot pour micro-frontends Python. PR #30.",
    "Monster Role": "Mainteneur open source",
    "View PR": "voir la PR",

    "CI CD Entry": "SKFeatureLLM — pipeline CI/CD",
    "CI CD Body": "Pipeline GitHub Actions qui exécute les tests, applique la qualité de code et publie les paquets Python sur PyPI via Trusted Publishing.",
    "CI CD Role": "Contributeur open source",

    "Pytest Entry": "SKFeatureLLM — infrastructure Pytest",
    "Pytest Body": "Suite de tests Pytest avec tests unitaires, mocks et configuration pour fiabiliser la logique de sélection de features.",
    "Pytest Role": "Contributeur open source",

    "AB Mobile Entry": "A&B Project EE — application mobile",
    "AB Mobile Body": "Application Flutter + Django bâtie bénévolement pour coordonner les dons de sang et mettre en relation donneurs et personnes dans le besoin.",
    "AB Mobile Role": "Développeur bénévole Flutter & Django",
    "View Screens": "voir les écrans",

    "Benin Marketplace Entry": "Bénin Digital — application marketplace",
    "Benin Marketplace Body": "Application marketplace on-site permettant à acheteurs et vendeurs d'échanger via une expérience e-commerce mobile-friendly.",
    "Benin Marketplace Role": "Développeur de l'application marketplace",

    "MC Agence Entry": "MC Agence — site marketing",
    "MC Agence Body": "Site Webflow responsive pour une agence marketing, animations cinématiques et formulaires prêts pour l'analyse.",
    "MC Agence Role": "Lead designer & développeur Webflow",
    "Visit Website": "visiter le site",

    "AB Website Entry": "A&B Project EE — site web",
    "AB Website Body": "Site public d'une association d'aide sociale, humanitaire et solidaire.",
    "AB Website Role": "Développeur web bénévole",

    "Keoni Entry": "Keoni Consulting — site corporate",
    "Keoni Body": "Site de conseil sous WordPress créé pour Bénin Digital, pages de services claires et génération de leads.",
    "Keoni Role": "Développeur WordPress & PHP",

    "AB Mobile Screens Heading": "A&B Project EE — écrans de l'application",
    "AB Mobile Screens Subtitle": "Les principaux écrans de l'application mobile de don de sang.",
    "Benin Marketplace Screens Heading": "Bénin Digital — écrans de la marketplace",
    "Benin Marketplace Screens Subtitle": "Les principaux parcours e-commerce de la marketplace Bénin Digital.",
    "Close": "fermer",

    "Process Heading": "Comment les commits sont mergés",
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
    "Collaboration Intro": "Des formats qui s'adaptent à votre feuille de route et votre budget.",
    "Sprint Entry": "Sprint de lancement",
    "Sprint Body": "2 à 3 semaines pour livrer un site marketing, un microsite ou un MVP de design system.",
    "Embedded Entry": "Partenaire embarqué",
    "Embedded Body": "Rétention à temps partiel : je co-gère un backlog, mentore l'équipe et sécurise les releases.",
    "Advisory Entry": "Sessions de conseil",
    "Advisory Body": "Appels stratégiques ponctuels ou récurrents sur la DX et l'automatisation.",

    "About Eyebrow": "man chilavert",
    "About Heading": "Chilavert N'Dah",
    "About Hero Intro": "Je conçois des logiciels résilients, j'orchestre des sorties sereines et je garde les équipes alignées même quand le périmètre évolue en cours de route.",
    "About Hero Secondary": "Ingénieur béninois, alumni de l'UCAO, étudiant perpétuel de la stratégie produit, de la pensée systémique et du design inclusif.",
    "Open Source Projects": "projets open source",
    "Languages Spoken": "langues parlées",
    "View Work": "git log --all",

    "Story Heading": "log --follow career.md",
    "Story Intro": "Des scripts BASIC bricolés aux systèmes distribués livrés en prod : voici comment j'ai trouvé mon rythme.",
    "Origin Entry": "Les débuts",
    "Origin Body": "Débogage sur le matériel familial à Porto-Novo, coup de cœur pour les meetups communautaires, montée en compétences via les Google Developer Groups.",
    "Uni Entry": "Les années fac",
    "Uni Body": "Diplômé en informatique à l'UCAO avec un mémoire sur les architectures web résilientes, et premiers freelances pour des ONG.",
    "Now Entry": "Aujourd'hui",
    "Now Body": "Partagé entre lancements clients, contributions open source et mentorat sur les bonnes pratiques d'automatisation.",

    "Principles Heading": "cat PRINCIPLES.md",
    "Principles Intro": "Les filtres que j'applique avant de pousser du code, présenter un travail, ou rejoindre une équipe.",
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

    "Cert Intro Heading": "ls -la ~/certifications",
    "Cert Intro Body": "Chaque certificat obtenu, daté et relié à la page de vérification de son émetteur — rien de déclaratif.",
    "Verify": "vérifier",

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
    "GitHub Cert Issuer": "Microsoft Learn",

    "Status Shipped": "livré & vérifié"
  }
};

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

function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!menuButton || !mobileMenu) return;

  const toggleMenu = () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuButton.setAttribute('aria-expanded', String(!isHidden));
  };

  menuButton.addEventListener('click', toggleMenu);

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
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
  const revealItems = document.querySelectorAll('.ledger-row, .card-grid .card, .contact-grid a');
  revealItems.forEach((el) => el.setAttribute('data-reveal', ''));

  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const groups = new Map();
  revealItems.forEach((el) => {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  groups.forEach((siblings) => {
    siblings.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 8) * 60}ms`;
    });
  });

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

function initPage() {
  enhanceLazyImages();
  initMobileMenu();
  initLanguageSelectors();
  applyLanguage(languageState.current);
  initScrollReveal();
  initStatCounters();
}

document.addEventListener('DOMContentLoaded', initPage);
