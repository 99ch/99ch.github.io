const TRANSLATIONS = {
  en: {
    "Home": "Home",
    "Work": "Work",
    "About": "About",
    "Certifications": "Certifications",
    "GitHub": "GitHub",
    "Think different": "Think different",
    "Chilavert N'Dah": "Chilavert N'Dah",
    "Software Developer": "Software Developer",
    "Call": "Call",
    "Text": "Text",
    "Services": "Services",
    "Web Site": "Web Site",
    "Web Application": "Web Application",
    "Mobile Application": "Mobile Application",
    "Projects": "Projects",
    "Case Studies & Experiments": "Case Studies & Experiments",
    "Work Page Intro": "A closer look at the launches I obsess over—mixing marketing, open-source, and automation to keep teams shipping.",
    "Industries Served": "Industries served",
    "Referral Work": "Work from referrals",
    "Featured Deliveries": "Featured Deliveries",
    "Featured Work Subtitle": "Cross-functional projects where I owned the experience end-to-end—from insight gathering to production-ready code.",
    "Marketing Site": "Marketing Site",
    "Open Source": "Open Source",
    "Automation": "Automation",
    "MC Agence Summary": "Localized a marketing site with human copy, cinematic scroll animations, and analytics-ready forms that drive leads on autopilot.",
    "MC Role": "Lead designer & Webflow developer",
    "MC Impact": "+42% qualified demos in 8 weeks",
    "Monster Summary": "Extended MonsterUI with accessible overlays, keyboard tooling, and snapshot tests powering Python micro-frontends.",
    "Monster Role": "Open-source maintainer",
    "Monster Impact": "Reduced UI regressions by 30% across adopters",
    "Ops Automation Accelerator": "Ops Automation Accelerator",
    "Ops Automation Summary": "Built a Notion + Supabase stack that ingests procurement briefs, routes approvals, and deploys serverless scrapers for pricing intel.",
    "Ops Role": "Product engineer & workflow designer",
    "Ops Impact": "Cut manual ops time by 18 hours/week",
    "Role": "Role",
    "Stack": "Stack",
    "Impact": "Impact",
    "How I Ship Work": "How I Ship Work",
    "Process Subtitle": "A lean, opinionated delivery playbook tuned for founders and lean teams.",
    "Discovery & Alignment": "Discovery & Alignment",
    "Discovery Copy": "Stakeholder interviews, success metrics, and backlog triage to focus on outcomes, not outputs.",
    "Experience Design": "Experience Design",
    "Design Copy": "Wireflows, system tokens, and prototyping sessions that capture nuance before code is written.",
    "Build & QA": "Build & QA",
    "Build Copy": "Test-driven builds with instrumentation, accessibility sweeps, and environment parity.",
    "Launch & Care": "Launch & Care",
    "Launch Copy": "Operational runbooks, async hand-offs, and post-launch analytics to keep momentum alive.",
    "Collaboration Formats": "Collaboration Formats",
    "Collaboration Subtitle": "Engagement models that flex with your roadmap and budget.",
    "Launch Sprint": "Launch Sprint",
    "Launch Sprint Copy": "2-3 week engagements to ship a marketing site, microsite, or design system MVP.",
    "Sprint Deliverable 1": "Roadmap, wireframes, and dev-ready components.",
    "Sprint Deliverable 2": "Weekly demos and Loom summaries.",
    "Embedded Partner": "Embedded Partner",
    "Embedded Copy": "Part-time retention where I co-own a backlog, mentor teammates, and keep releases humming.",
    "Embedded Deliverable 1": "Standups + async updates.",
    "Embedded Deliverable 2": "Design, build, and QA coverage.",
    "Advisory Sessions": "Advisory Sessions",
    "Advisory Copy": "One-off or recurring strategy calls focused on developer experience and automation.",
    "Advisory Deliverable 1": "Recorded sessions & next steps.",
    "Advisory Deliverable 2": "Tooling and hiring recommendations.",
    "About Hero Tagline": "More than a résumé",
    "About Hero Intro": "I design resilient software, facilitate calm releases, and keep teams aligned even when the scope shifts mid-flight.",
    "About Hero Secondary": "Beninese-born engineer, UCAO alumni, and lifelong student of product strategy, systems thinking, and inclusive design.",
    "View Work": "View Work",
    "Languages Spoken": "Languages spoken",
    "Story Heading": "The story so far",
    "Story Intro": "From tinkering with BASIC scripts to shipping distributed systems, here's how I found my groove.",
    "Origin Story": "Origin Story",
    "Origin Copy": "Learned to debug on family hardware in Porto-Novo, fell in love with community meetups, and kept stacking skills through Google Developer Groups.",
    "Uni Chapter": "University Years",
    "Uni Copy": "Graduated in Computer Science at UCAO with research on resilient web architectures and started freelancing for NGOs.",
    "Now Chapter": "Right Now",
    "Now Copy": "Split my time between client launches, MonsterUI contributions, and mentoring juniors on automation best practices.",
    "Principles Heading": "Principles I work by",
    "Principles Intro": "The filters I run before pushing code, presenting work, or joining a team.",
    "Principle 1 Title": "Accessibility is table stakes",
    "Principle 1 Copy": "Every UI ships with semantic structure, keyboard coverage, and inclusive copy.",
    "Principle 2 Title": "Documentation beats memory",
    "Principle 2 Copy": "Async hand-offs, Loom walkthroughs, and living runbooks keep teams confident.",
    "Principle 3 Title": "Measure what matters",
    "Principle 3 Copy": "Every build tracks the metric it's meant to elevate, from demo requests to MTTR.",
    "Principle 4 Title": "People over process",
    "Principle 4 Copy": "Rituals should energize collaboration—not drain it—so I keep meetings light and context heavy.",
    "Toolbox Heading": "Toolbox & focus areas",
    "Toolbox Intro": "I thrive at the intersection of product, design systems, and platform automation.",
    "Toolbox 1 Title": "Frontend & DX",
    "Toolbox 1 Copy": "React, Astro, Webflow, Tailwind, Playwright, Vitest.",
    "Toolbox 2 Title": "Backend & Cloud",
    "Toolbox 2 Copy": "Python, FastAPI, Supabase, AWS, Cloudflare Workers, Docker.",
    "Toolbox 3 Title": "Product Ops",
    "Toolbox 3 Copy": "Notion, Linear, Retool, Zapier, analytics instrumentation, QA ops.",
    "Production Deployments": "Production deployments",
    "Open Source Projects": "Open source projects",
    "Credential Gallery": "Credential Gallery",
    "Certifications Intro": "Proof that I'm always leveling up my craft through structured programs, labs, and exams.",
    "Back to Home": "Back to Home",
    "Download Transcript": "Download Transcript",
    "MC Agence Website": "MC Agence Website",
    "A responsive website design for a marketing agency built with Webflow. Features modern UI/UX design principles, smooth animations, and a client-focused approach.": "A responsive website design for a marketing agency built with Webflow. Features modern UI/UX design principles, smooth animations, and a client-focused approach.",
    "Visit Website": "Visit Website",
    "MonsterUI Library Contribution": "MonsterUI Library Contribution",
    "Contributed to the open-source MonsterUI library, which provides UI components for Python web applications. My pull request #30 added new features and improvements to the library.": "Contributed to the open-source MonsterUI library, which provides UI components for Python web applications. My pull request #30 added new features and improvements to the library.",
    "View PR on GitHub": "View PR on GitHub",
    "About Me": "About Me",
    "I'm a Computer Science graduate from UCAO in Cotonou. Currently, I work as a freelance Software Developer and actively contribute to various open-source projects to enhance my skills in full-stack development and cloud technologies. Outside of coding, I enjoy playing basketball, listening to music, and traveling. Fun fact: I once spent 3 hours debugging only to realize I forgot to save the file. 😅": "I'm a Computer Science graduate from UCAO in Cotonou. Currently, I work as a freelance Software Developer and actively contribute to various open-source projects to enhance my skills in full-stack development and cloud technologies. Outside of coding, I enjoy playing basketball, listening to music, and traveling. Fun fact: I once spent 3 hours debugging only to realize I forgot to save the file. 😅",
    "Resume": "Resume",
    "Things I Can Do Without Googling... Mostly": "Things I Can Do Without Googling... Mostly",
    "Programming in Python": "Programming in Python",
    "Meta through Coursera - Issued: Jul 2024": "Meta through Coursera - Issued: Jul 2024",
    "JavaScript Algorithms and Data Structures": "JavaScript Algorithms and Data Structures",
    "freeCodeCamp - Issued: Sep 2024": "freeCodeCamp - Issued: Sep 2024",
    "Artificial Intelligence": "Artificial Intelligence",
    "Cheikh Hamidou Kane Digital University - Issued: Mar 2024": "Cheikh Hamidou Kane Digital University - Issued: Mar 2024",
    "View Certificate": "View Certificate",
    "See More": "See More",
    "GitHub Stats & Contributions": "GitHub Stats & Contributions",
    "Let's Connect": "Let's Connect",
    "Feel free to reach out to me via email.": "Feel free to reach out to me via email.",
    "Send Email": "Send Email",
    "© 2025 Chilavert N'dah": "© 2025 Chilavert N'dah",
    "Microsoft Excel": "Microsoft Excel",
    "Microsoft through Coursera - Issued: Feb 2024": "Microsoft through Coursera - Issued: Feb 2024",
    "Think Like a Computer: The Logic of Programming": "Think Like a Computer: The Logic of Programming",
    "OpenClassrooms - Issued: Jan 2024": "OpenClassrooms - Issued: Jan 2024",
    "Foundations of Cybersecurity": "Foundations of Cybersecurity",
    "Google through Coursera - Issued: Jan 2024": "Google through Coursera - Issued: Jan 2024",
    "Data Security": "Data Security",
    "Cisco through Coursera - Issued: Jul 2024": "Cisco through Coursera - Issued: Jul 2024",
    "Visual Elements of User Interface Design": "Visual Elements of User Interface Design",
    "California Institute of the Arts through Coursera - Issued: Jul 2024": "California Institute of the Arts through Coursera - Issued: Jul 2024",
    "Software Design and Project Management": "Software Design and Project Management",
    "The Hong Kong University of Science and Technology through Coursera - Issued: Jul 2024": "The Hong Kong University of Science and Technology through Coursera - Issued: Jul 2024",
    "Responsive Web Design": "Responsive Web Design",
    "freeCodeCamp - Issued: Aug 2024": "freeCodeCamp - Issued: Aug 2024",
    "Introduction to Git": "Introduction to Git",
    "Microsoft Learn - Issued: Aug 2024": "Microsoft Learn - Issued: Aug 2024",
    "Introduction to GitHub": "Introduction to GitHub",
    "Verify": "Verify",
    "Back": "Back"
  },
  fr: {
    "Home": "Accueil",
    "Work": "Travaux",
    "About": "À propos",
    "Certifications": "Certifications",
    "GitHub": "GitHub",
    "Think different": "Pensez différemment",
    "Chilavert N'Dah": "Chilavert N'Dah",
    "Software Developer": "Développeur logiciel",
    "Call": "Appeler",
    "Text": "Écrire",
    "Services": "Services",
    "Web Site": "Site web",
    "Web Application": "Application web",
    "Mobile Application": "Application mobile",
    "Projects": "Projets",
    "Case Studies & Experiments": "Études de cas & expérimentations",
    "Work Page Intro": "Zoom sur mes livrables favoris mêlant marketing, open source et automatisation pour garder les équipes en mouvement.",
    "Industries Served": "Secteurs accompagnés",
    "Referral Work": "Mandats par recommandation",
    "Featured Deliveries": "Livrables mis en avant",
    "Featured Work Subtitle": "Des projets menés de bout en bout – de l'insight au code prêt pour la prod.",
    "Marketing Site": "Site marketing",
    "Open Source": "Open source",
    "Automation": "Automatisation",
    "MC Agence Summary": "Site marketing localisé avec copy humaine, animations cinématiques et formulaires prêts pour l'analyse.",
    "MC Role": "Lead designer & développeur Webflow",
    "MC Impact": "+42% de démos qualifiées en 8 semaines",
    "Monster Summary": "Extension de MonsterUI avec overlays accessibles, navigation clavier et tests snapshot.",
    "Monster Role": "Mainteneur open source",
    "Monster Impact": "-30% de régressions UI chez les adopteurs",
    "Ops Automation Accelerator": "Ops Automation Accelerator",
    "Ops Automation Summary": "Pile Notion + Supabase pour ingérer les appels d'offres, router les validations et lancer des scrapers serverless.",
    "Ops Role": "Ingénieur produit & designer de workflows",
    "Ops Impact": "-18h d'opérations manuelles par semaine",
    "Role": "Rôle",
    "Stack": "Stack",
    "Impact": "Impact",
    "How I Ship Work": "Ma façon de livrer",
    "Process Subtitle": "Un playbook affûté pour fondateurs et équipes agiles.",
    "Discovery & Alignment": "Discovery & alignement",
    "Discovery Copy": "Entretiens, métriques de succès et tri du backlog pour viser les résultats.",
    "Experience Design": "Design d'expérience",
    "Design Copy": "Wireflows, tokens et protos pour capturer la nuance avant le code.",
    "Build & QA": "Build & QA",
    "Build Copy": "Dév piloté par les tests avec instrumentation et revues accessibilité.",
    "Launch & Care": "Lancement & suivi",
    "Launch Copy": "Runbooks, hand-offs async et analytics post-lancement pour garder l'élan.",
    "Collaboration Formats": "Modes de collaboration",
    "Collaboration Subtitle": "Des formats qui s'adaptent à votre roadmap et budget.",
    "Launch Sprint": "Sprint de lancement",
    "Launch Sprint Copy": "2-3 semaines pour livrer site marketing, microsite ou design system MVP.",
    "Sprint Deliverable 1": "Roadmap, wireframes et composants prêts dev.",
    "Sprint Deliverable 2": "Démos hebdo et résumés Loom.",
    "Embedded Partner": "Partenaire embarqué",
    "Embedded Copy": "Rétention part-time pour co-gérer le backlog, mentorer et sécuriser les releases.",
    "Embedded Deliverable 1": "Standup + updates async.",
    "Embedded Deliverable 2": "Design, build et QA au long cours.",
    "Advisory Sessions": "Sessions conseil",
    "Advisory Copy": "Coaching ponctuel ou récurrent sur la DX et l'automatisation.",
    "Advisory Deliverable 1": "Sessions enregistrées & next steps.",
    "Advisory Deliverable 2": "Reco tooling et staffing.",
    "About Hero Tagline": "Au-delà du CV",
    "About Hero Intro": "Je conçois des logiciels résilients, orchestre des sorties sereines et garde les équipes alignées quand la portée évolue.",
    "About Hero Secondary": "Ingénieur béninois, alumni UCAO et étudiant perpétuel de la stratégie produit et du design inclusif.",
    "View Work": "Voir les projets",
    "Languages Spoken": "Langues parlées",
    "Story Heading": "Mon parcours",
    "Story Intro": "Des scripts BASIC aux systèmes distribués : voici comment j'ai trouvé mon rythme.",
    "Origin Story": "Les débuts",
    "Origin Copy": "Débogage sur le PC familial à Porto-Novo, communautés locales et Google Developer Groups.",
    "Uni Chapter": "Années fac",
    "Uni Copy": "Diplômé en informatique à l'UCAO avec un mémoire sur les architectures web résilientes.",
    "Now Chapter": "Aujourd'hui",
    "Now Copy": "Entre lancements clients, contributions MonsterUI et mentorat autour de l'automatisation.",
    "Principles Heading": "Principes de travail",
    "Principles Intro": "Mes filtres avant toute livraison ou collaboration.",
    "Principle 1 Title": "L'accessibilité est un prérequis",
    "Principle 1 Copy": "Chaque UI arrive avec sémantique, navigation clavier et copy inclusive.",
    "Principle 2 Title": "La doc prime sur la mémoire",
    "Principle 2 Copy": "Hand-offs async, Loom et runbooks vivants rassurent les équipes.",
    "Principle 3 Title": "Mesurer l'essentiel",
    "Principle 3 Copy": "Chaque build suit la métrique visée, des démos à la MTTR.",
    "Principle 4 Title": "Les gens avant le process",
    "Principle 4 Copy": "Des rituels qui boostent l'énergie, pas l'inverse : peu de réunions, beaucoup de contexte.",
    "Toolbox Heading": "Boîte à outils & focus",
    "Toolbox Intro": "Je performe à l'intersection produit, design systems et automation.",
    "Toolbox 1 Title": "Frontend & DX",
    "Toolbox 1 Copy": "React, Astro, Webflow, Tailwind, Playwright, Vitest.",
    "Toolbox 2 Title": "Backend & Cloud",
    "Toolbox 2 Copy": "Python, FastAPI, Supabase, AWS, Cloudflare Workers, Docker.",
    "Toolbox 3 Title": "Product Ops",
    "Toolbox 3 Copy": "Notion, Linear, Retool, Zapier, instrumentation analytics, QA ops.",
    "Production Deployments": "Déploiements en production",
    "Open Source Projects": "Projets open source",
    "Credential Gallery": "Galerie de certifications",
    "Certifications Intro": "La preuve que je fais évoluer mes compétences via des parcours structurés, des labs et des examens.",
    "Back to Home": "Retour à l'accueil",
    "Download Transcript": "Télécharger le relevé",
    "MC Agence Website": "Site web MC Agence",
    "A responsive website design for a marketing agency built with Webflow. Features modern UI/UX design principles, smooth animations, and a client-focused approach.": "Un site responsive pour une agence marketing construit avec Webflow, mêlant design UI/UX moderne, animations fluides et approche centrée client.",
    "Visit Website": "Visiter le site",
    "MonsterUI Library Contribution": "Contribution à MonsterUI",
    "Contributed to the open-source MonsterUI library, which provides UI components for Python web applications. My pull request #30 added new features and improvements to the library.": "Contribution à la bibliothèque open source MonsterUI pour ajouter de nouveaux composants UI et améliorations (pull request #30).",
    "View PR on GitHub": "Voir la PR sur GitHub",
    "About Me": "À propos de moi",
    "I'm a Computer Science graduate from UCAO in Cotonou. Currently, I work as a freelance Software Developer and actively contribute to various open-source projects to enhance my skills in full-stack development and cloud technologies. Outside of coding, I enjoy playing basketball, listening to music, and traveling. Fun fact: I once spent 3 hours debugging only to realize I forgot to save the file. 😅": "Diplômé en informatique de l'UCAO (Cotonou), je suis développeur logiciel freelance et contributeur open source. Passionné de full-stack et de cloud, j'aime aussi le basket, la musique et les voyages. Anecdote : trois heures de debug avant de réaliser que je n'avais pas enregistré le fichier. 😅",
    "Resume": "CV",
    "Things I Can Do Without Googling... Mostly": "Ce que je maîtrise (presque) sans Google",
    "Programming in Python": "Programmation en Python",
    "Meta through Coursera - Issued: Jul 2024": "Meta via Coursera - Juil 2024",
    "JavaScript Algorithms and Data Structures": "Algorithmes et structures de données JavaScript",
    "freeCodeCamp - Issued: Sep 2024": "freeCodeCamp - Sep 2024",
    "Artificial Intelligence": "Intelligence artificielle",
    "Cheikh Hamidou Kane Digital University - Issued: Mar 2024": "Université Numérique Cheikh Hamidou Kane - Mar 2024",
    "View Certificate": "Voir le certificat",
    "See More": "Voir plus",
    "GitHub Stats & Contributions": "Statistiques & contributions GitHub",
    "Let's Connect": "Restons en contact",
    "Feel free to reach out to me via email.": "Contactez-moi par email.",
    "Send Email": "Envoyer un email",
    "© 2025 Chilavert N'dah": "© 2025 Chilavert N'dah",
    "Microsoft Excel": "Microsoft Excel",
    "Microsoft through Coursera - Issued: Feb 2024": "Microsoft via Coursera - Fév 2024",
    "Think Like a Computer: The Logic of Programming": "Penser comme un ordinateur : la logique de la programmation",
    "OpenClassrooms - Issued: Jan 2024": "OpenClassrooms - Jan 2024",
    "Foundations of Cybersecurity": "Fondamentaux de la cybersécurité",
    "Google through Coursera - Issued: Jan 2024": "Google via Coursera - Jan 2024",
    "Data Security": "Sécurité des données",
    "Cisco through Coursera - Issued: Jul 2024": "Cisco via Coursera - Juil 2024",
    "Visual Elements of User Interface Design": "Éléments visuels du design d'interface",
    "California Institute of the Arts through Coursera - Issued: Jul 2024": "California Institute of the Arts via Coursera - Juil 2024",
    "Software Design and Project Management": "Conception logicielle & gestion de projet",
    "The Hong Kong University of Science and Technology through Coursera - Issued: Jul 2024": "HKUST via Coursera - Juil 2024",
    "Responsive Web Design": "Design web responsive",
    "freeCodeCamp - Issued: Aug 2024": "freeCodeCamp - Août 2024",
    "Introduction to Git": "Introduction à Git",
    "Microsoft Learn - Issued: Aug 2024": "Microsoft Learn - Août 2024",
    "Introduction to GitHub": "Introduction à GitHub",
    "Verify": "Vérifier",
    "Back": "Retour"
  }
};

const GREETINGS = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Olá",
  "Привет",
  "こんにちは",
  "你好",
  "안녕하세요",
  "مرحبا",
  "नमस्ते",
  "Hallo",
  "Γειά σου",
  "Salve"
];

const languageState = {
  current: localStorage.getItem('preferredLanguage') || 'en'
};

const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function applyTheme() {
  const htmlElement = document.documentElement;
  const storedMode = localStorage.getItem('mode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const shouldUseDark = storedMode === 'dark' || (!storedMode && prefersDark.matches);

  htmlElement.classList.toggle('dark', shouldUseDark);
  htmlElement.classList.add(localStorage.getItem('theme') || 'uk-theme-blue');
}

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
      if (selector) {
        selector.value = safeLang;
      }
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

function initSplashScreen() {
  const splashScreen = document.getElementById('splash-screen');
  const loadingBar = document.getElementById('loading-progress');
  const splashGreeting = document.getElementById('splash-greeting');
  const mainContent = document.getElementById('main-content');

  if (!splashScreen || !loadingBar || !splashGreeting || !mainContent) {
    return;
  }

  const skipAnimations = prefersReducedMotionQuery.matches;

  if (skipAnimations) {
    splashScreen.style.display = 'none';
    mainContent.style.opacity = '1';
    mainContent.removeAttribute('aria-hidden');
    return;
  }

  splashScreen.style.opacity = '1';
  mainContent.style.opacity = '0';
  mainContent.setAttribute('aria-hidden', 'true');

  let currentGreetingIndex = 0;
  splashGreeting.textContent = GREETINGS[currentGreetingIndex];

  const greetingInterval = setInterval(() => {
    currentGreetingIndex = (currentGreetingIndex + 1) % GREETINGS.length;
    splashGreeting.textContent = GREETINGS[currentGreetingIndex];
  }, 600);

  setTimeout(() => {
    loadingBar.style.width = '100%';
  }, 100);

  setTimeout(() => {
    splashScreen.style.opacity = '0';
    mainContent.style.opacity = '1';
    mainContent.removeAttribute('aria-hidden');
    clearInterval(greetingInterval);
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 500);
  }, 3000);
}

function initNavbarScrollBehavior() {
  const navbar = document.querySelector('.fixed-navbar');
  if (!navbar) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
      navbar.classList.toggle('nav-scrolled', currentScrollY > 50);
    }
    lastScrollY = currentScrollY;
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

function initScrollAnimations() {
  if (prefersReducedMotionQuery.matches) {
    document.body.classList.add('prefers-reduced-motion');
    return;
  }

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animation = entry.target.getAttribute('data-animation');
          entry.target.classList.add('animate__animated', `animate__${animation}`);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => observer.observe(element));
}

function enhanceLazyImages() {
  document.querySelectorAll('img:not([loading])').forEach((img) => {
    if (img.dataset.priority === 'true') return;
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });
}

async function loadPartial(name, onLoad) {
  const container = document.querySelector(`[data-partial="${name}"]`);
  if (!container) return;

  const swapOuter = container.dataset.swap === 'outer';

  try {
    const response = await fetch(`partials/${name}.html`, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markup = await response.text();

    if (swapOuter) {
      container.outerHTML = markup;
    } else {
      container.innerHTML = markup;
    }

    if (typeof onLoad === 'function') {
      onLoad();
    }
  } catch (error) {
    console.error(`Failed to load partial "${name}"`, error);
  }
}

function initContactBackgroundFallback() {
  const contactSection = document.querySelector('.contact-section');
  if (!contactSection) return;
  contactSection.classList.add('has-background');
}

function initPrefersReducedListener() {
  const applyState = (matches) => {
    document.body.classList.toggle('prefers-reduced-motion', matches);
  };

  applyState(prefersReducedMotionQuery.matches);
  prefersReducedMotionQuery.addEventListener('change', (event) => {
    applyState(event.matches);
  });
}

function initPage() {
  applyTheme();
  initPrefersReducedListener();
  initSplashScreen();
  initScrollAnimations();
  enhanceLazyImages();
  initContactBackgroundFallback();
  applyLanguage(languageState.current);

  Promise.all([loadPartial('navbar', () => {
    initNavbarScrollBehavior();
    initMobileMenu();
    initLanguageSelectors();
  }), loadPartial('footer')]).then(() => {
    applyLanguage(languageState.current);
  });
}

document.addEventListener('DOMContentLoaded', initPage);
