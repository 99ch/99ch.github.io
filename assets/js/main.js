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
    "Industries Served": "Sectors covered",
    "Referral Work": "Years active",
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
    "Open Source Contributions": "Open Source Contributions",
    "Pytest Infrastructure Contribution": "Pytest Testing Infrastructure for SKFeatureLLM",
    "Pytest Infrastructure Summary": "Set up a Pytest-based testing stack for SKFeatureLLM with unit tests, mocks, and configuration to keep the core feature selection logic reliable.",
    "Pytest Role": "Open-source contributor",
    "Pytest Impact": "Improved reliability and maintainability by adding tests, mocks, and linting to the project.",
    "CI CD Pipeline PyPI": "CI/CD Pipeline for Testing & PyPI",
    "CI CD Pipeline Summary": "Built a GitHub Actions pipeline that runs tests, enforces code quality, and publishes Python packages securely to PyPI using Trusted Publishing.",
    "CI CD Role": "Open-source contributor",
    "CI CD Impact": "Unified linting, testing, and deployment into one pipeline and enabled secure, credential-free publishing to PyPI.",
    "Mobile Applications": "Mobile Applications",
    "Mobile App": "Mobile App",
    "AB Project EE Mobile": "A&B Project EE Mobile",
    "AB Project EE Mobile Summary": "Volunteer-built mobile application helping A&B Project EE coordinate blood donations and connect donors with people in need.",
    "AB Mobile Role": "Volunteer Flutter & Django developer",
    "AB Mobile Impact": "Streamlined matching between donors and beneficiaries through a dedicated mobile experience.",
    "View App Screens": "View App Screens",
    "Ecommerce": "Ecommerce",
    "Benin Digital Marketplace": "Bénin Digital Marketplace",
    "Benin Digital Marketplace Summary": "On-site marketplace application built for Bénin Digital, enabling buyers and sellers to trade products through a mobile-friendly ecommerce experience.",
    "Benin Role": "On-site marketplace application developer",
    "Benin Impact": "Delivered a modern marketplace interface to showcase products and streamline orders.",
    "View Marketplace Screens": "View Marketplace Screens",
    "Websites": "Websites",
    "Nonprofit": "Nonprofit",
    "AB Project EE Website": "A&B Project EE Website",
    "AB Project EE Summary": "Designed and built the public website for A&B Project EE, a nonprofit focused on social, humanitarian, and solidarity support.",
    "AB Role": "Volunteer web developer",
    "AB Impact": "Gave the organization a modern online presence to share initiatives and rally support.",
    "Corporate Site": "Corporate Site",
    "Keoni Consulting Website": "Keoni Consulting Website",
    "Keoni Consulting Summary": "WordPress-powered consulting website created for Benin Digital to showcase services and capture leads for Keoni Consulting.",
    "Keoni Role": "WordPress & PHP developer",
    "Keoni Impact": "Delivered a modern corporate presence with clear service pages and contact flows.",
    "AB Mobile Screens Heading": "A&B Project EE – App Screens",
    "AB Mobile Screens Subtitle": "Browse through the main screens of the blood donation mobile app.",
    "Benin Marketplace Screens Heading": "Bénin Digital – Marketplace Screens",
    "Benin Marketplace Screens Subtitle": "Browse through the key ecommerce flows of the Bénin Digital marketplace app.",
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
    "Production Deployments": "Projects shipped",
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
    "View live stats on GitHub": "View live stats on GitHub",
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
    "Back": "Back",
    "Volunteer Category": "Non-Profit / NGO",
    "TugOnn Title": "TugOnn Student Web App",
    "TugOnn Role": "Volunteer full-stack developer",
    "TugOnn Impact": "Web platform for a Swiss-Beninese non-profit, built and maintained by a student developer team.",
    "Frontend Repo": "Frontend Repo",
    "Backend Repo": "Backend Repo",
    "Freelance Category": "Freelance",
    "Vinos Title": "Vinos Makeup Website",
    "Vinos Role": "Freelance developer",
    "Vinos Impact": "Showcase website for a cosmetics brand.",
    "Visit Repo": "View Repository",
    "Experience": "Experience",
    "Experience Intro": "Where I've worked, and what I did there.",
    "Technical Lead Title": "Technical Lead",
    "Benin Digital Org": "Bénin Digital · Cotonou, Benin",
    "Technical Lead Copy": "Leading the technical direction across Bénin Digital's application portfolio, from infrastructure decisions to code review.",
    "AI Integration Title": "AI Integration & Automation",
    "AI Integration Copy": "Integrated AI solutions into business processes, built AI-powered assistants and chatbots, and automated workflows with n8n, APIs, and webhooks across CRM, ERP, and messaging platforms. Deployed and maintained containerized services with Docker.",
    "Mobile Web Dev Title": "Mobile and Web Application Developer",
    "Mobile Web Dev Copy": "Built web and mobile applications, UI/UX design, and backend features for the Koutonou marketplace and Keoni Consulting, while maintaining databases and optimizing performance.",
    "AB Project Title": "Full-stack Developer",
    "AB Project Org": "AB Project-EE · Freelance, Paris (Remote)",
    "AB Project Copy": "Volunteer full-stack developer supporting a humanitarian NGO by building and maintaining web applications, APIs, and databases for social impact projects.",
    "Madi Studio Title": "Full-stack Developer",
    "Madi Studio Org": "Madi Studio · Freelance, Cotonou, Benin",
    "Madi Studio Copy": "Freelance full-stack development for independent clients, spanning websites, applications, and ongoing maintenance.",
    "DevMaster Category": "master.dev — July 2026",
    "Practical Problem Solving with Algorithms": "Practical Problem Solving with Algorithms",
    "No Cert Image": "no certificate image on file",
    "Status Issued": "$ status: issued",
    "Backend System Design": "Backend System Design",
    "C# and .NET Basics": "C# and .NET Basics",
    "Enterprise Design Systems Management": "Enterprise Design Systems Management",
    "Mastering Chrome Developer Tools, v4": "Mastering Chrome Developer Tools, v4",
    "Building APIs with C# and ASP.NET Core": "Building APIs with C# and ASP.NET Core",
    "Enterprise DevOps & Cloud Infrastructure": "Enterprise DevOps & Cloud Infrastructure",
    "Enterprise TypeScript": "Enterprise TypeScript",
    "Full Stack Fundamentals, v3": "Full Stack Fundamentals, v3",
    "Engineering Management Fundamentals 101": "Engineering Management Fundamentals 101",
    "Java Fundamentals": "Java Fundamentals",
    "Introduction to Node.js, v3": "Introduction to Node.js, v3",
    "Building Your Own Programming Language": "Building Your Own Programming Language",
    "iOS App Development with Swift": "iOS App Development with Swift",
    "Testing Fundamentals": "Testing Fundamentals",
    "Heritage Tagline": "Where I'm from",
    "Heritage Heading": "Otammari Roots",
    "Heritage Copy": "I come from the Otammari people (Batammariba). Our ancestral homeland, the Koutammakou, is inscribed on the UNESCO World Heritage List as a living cultural landscape. Our traditional earthen tower-houses, the Tata Somba (takienta), reflect generations of inherited architectural knowledge.",
    "Album Label": "Personal photos",
    "View Photo Album": "View Photo Album",
    "Photo Album Heading": "Photo Album",
    /* wk-translations:start */
    "View Repo": "View Repository",
    "wk.stat1": "Apps in production",
    "wk.stat2": "Commits on rhconsole",
    "wk.stat3": "Pull requests merged upstream",
    "wk.stat4": "Years of experience",
    "wk.f.all": "All",
    "wk.f.web": "Web",
    "wk.f.mobile": "Mobile",
    "wk.f.ngo": "NGO",
    "wk.f.freelance": "Freelance",
    "cs.cat.rh": "AI & Backend · Production",
    "cs.rh.f1": "Git commits",
    "cs.rh.f2": "REST endpoints",
    "cs.rh.f3": "real CVs used to audit extraction",
    "wk.openapp": "Open the app",
    "wk.read": "Read the case study",
    "wk.prod": "In production",
    "cs.rh.summary": "AI CV/job matching for Bénin Digital: FastAPI, PostgreSQL + pgvector, Redis Streams and an explainable hybrid score, with no LLM.",
    "cs.cat.kt": "E-commerce · Web & Mobile",
    "cs.kt.f1": "modules & theme",
    "cs.kt.f2": "test orders paid end to end",
    "cs.kt.f3": "mobile apps",
    "wk.openmarket": "Visit the marketplace",
    "cs.kt.summary": "The Koutonou marketplace: FedaPay Mobile Money payments, Google sign-in, PrestaShop modules and theme for multiple vendors, plus iOS and Android apps.",
    "cs.cat.ke": "WordPress · AI matching",
    "cs.ke.f1": "CVs indexed",
    "cs.ke.f2": "active job offers",
    "cs.ke.f3": "automated tests passing",
    "wk.openweb": "Visit the website",
    "cs.ke.summary": "Keoni Consulting website in WordPress, and Keoni AI: a FastAPI + pgvector engine that scores 32,000+ CVs against each job offer.",
    "wk.c.mobile": "Mobile app",
    "wk.g1.t": "A&B Project EE — Mobile app",
    "wk.g1.d": "Mobile app that streamlines matching between blood donors and beneficiaries.",
    "wk.g1.r": "Volunteer Flutter & Django developer",
    "wk.c.ngosite": "Nonprofit site",
    "wk.g2.t": "A&B Project EE — Website",
    "wk.g2.d": "Institutional website for a humanitarian NGO, built solo from the brief to launch.",
    "wk.g2.r": "Volunteer web developer",
    "wk.c.platform": "Web platform",
    "wk.g3.t": "TugOnn Student Web App",
    "wk.g3.d": "Team project for a Swiss-Beninese NGO: a Next.js front end and an Express + MongoDB back end, built with Git branches, reviews and merges.",
    "wk.g3.r": "Volunteer full-stack developer",
    "wk.c.marketing": "Marketing site",
    "wk.g4.t": "MC Agence Website",
    "wk.g4.d": "Marketing website for a client agency, designed and built in Webflow.",
    "wk.g4.r": "Lead designer & Webflow developer",
    "wk.c.showcase": "Showcase site",
    "wk.g5.t": "Vino's Makeup Website",
    "wk.g5.d": "Showcase website for a cosmetics brand.",
    "wk.g5.r": "Freelance developer",
    "wk.o.cat": "Open source",
    "wk.o1.d": "Integrated Highlight.js into the headers with theme synchronization, in a FastHTML UI library.",
    "wk.merged": "Merged",
    "wk.o2.d": "GitHub Actions workflows that lint and test the package and publish it to PyPI.",
    "wk.o3.d": "A pytest setup with tests for the feature engineer and the LLM interface.",
    "wk.tag": "Selected work",
    "wk.intro": "Production apps, open-source contributions and client projects, starting with the strongest work.",
    "wk.featured": "In production",
    "wk.featured.sub": "Three projects I designed, built or shipped end to end, each with a full write-up.",
    "wk.others": "More work",
    "wk.others.sub": "Websites and mobile apps for NGOs and freelance clients.",
    "wk.os": "Open source",
    "wk.os.sub": "Pull requests reviewed and merged by third-party maintainers.",
    "cs.rh.role": "Solo end-to-end developer",
    "cs.rh.period": "Sep 2025 – Jul 2026",
    "cs.status.prod": "In production",
    "wk.role": "Role",
    "wk.period": "Period",
    "wk.client": "Client",
    "wk.status": "Status",
    "cs.rh.b1": "A FastAPI REST API with 40+ endpoints, JWT authentication with three roles, rate limiting and Prometheus metrics, on PostgreSQL 16 with 25 Alembic migrations.",
    "cs.rh.b2": "An event pipeline: a folder watcher and a standalone sync agent feed a Redis Streams queue, and a worker retries with exponential backoff before extraction, profiling, embeddings and scoring.",
    "cs.rh.b3": "Text extraction that reads two-column CV layouts column by column, with a per-page Tesseract OCR fallback for scanned PDFs, tuned through audits on 13,000+ real CVs.",
    "cs.rh.b4": "A four-layer skills taxonomy (2,162 hand-reviewed aliases, ROME 4.0, ESCO, O*NET and e-CF) with n-gram matching and a typo-tolerant fallback.",
    "cs.rh.b5": "A hybrid 0–100 score: skills, experience, education, languages and contract, plus a multilingual e5 embedding signal and a French cross-encoder. Coverage caps and a penalty for missing key tools stop a generic semantic match from hiding a skills gap.",
    "cs.rh.b6": "Every match comes with an explanation (why it matches, points of vigilance, evidence from the CV), three score levels and recruiter feedback stats, in a vanilla JavaScript dashboard.",
    "cs.rh.b7": "Docker Compose for local and cloud, a hardened API container (read-only filesystem, no Linux capabilities), and GitHub Actions CI that blocks a merge when a model changes without its migration.",
    "cs.back": "All work",
    "cs.rh.headline": "AI CV/job matching console",
    "cs.rh.lead": "A recruiting console that scores how well a CV fits a job offer, in real time and with an explanation: extraction, profiling, embeddings and a hybrid score behind a REST API, with no LLM in the loop.",
    "cs.context": "Context",
    "cs.rh.context": "Recruiting means reading many CVs against many job offers. rhconsole automates the first pass: CVs and offers are dropped in watched folders or uploaded in the dashboard, and each pair gets a 0–100 score with the reasons behind it, so a recruiter knows what to check before calling a candidate.",
    "cs.built": "What I built",
    "cs.arch": "How it fits together",
    "cs.rh.dcap": "Simplified view of the matching pipeline.",
    "cs.rh.sec.h": "Security",
    "cs.rh.sec.p": "I audited the production app against OWASP practices and fixed real issues myself: a JWT secret left as an example value, a default administrator account exposed, and credentials present in the Git history.",
    "cs.rh.d1.t": "One weight set, not one per domain",
    "cs.rh.d1.d": "The score used to switch its weights by detected domain. One ambiguous word, such as \"patient\" in a tech CV, could flip the whole profile with no visible sign. I removed it: the domain is still shown as a label, and recruiters can pick an explicit weighting profile per offer.",
    "cs.rh.d2.t": "Delete dead code that looks alive",
    "cs.rh.d2.d": "A learned-weights feature had been built but never connected to the real scoring. I dropped its table in a migration instead of leaving settings that suggested it was active.",
    "cs.rh.d3.t": "A missing signal is left out, not guessed",
    "cs.rh.d3.d": "When a component has nothing to compare (an offer with no years of experience, for example), it is left out of the average and its weight goes to the others, instead of defaulting to a neutral value that would drag the score.",
    "cs.decisions": "Decisions & trade-offs",
    "cs.l.app": "Open the app",
    "cs.l.engine": "Source repository",
    "cs.links": "Links",
    "cs.next": "Next case study",
    "cs.kt.role": "Web & mobile developer",
    "cs.kt.period": "2025 – 2026",
    "cs.kt.status": "Live · payments validated in test mode",
    "cs.kt.b1": "koutonoufedapay, a PrestaShop 8 payment module for FedaPay (Mobile Money and card, in CFA francs). The order is created only after the payment is read back from FedaPay, with amount checks, duplicate protection, separate test and live keys, and a signed webhook. It works on the website and in the Android app.",
    "cs.kt.b2": "ps_koutonouauth, an authentication module: Google sign-in (OAuth 2.0 and OpenID Connect with PKCE) and mandatory email verification. It plugs into PrestaShop through hooks, needs PHP 8.1 and has no external dependency.",
    "cs.kt.b3": "Audits and fixes of existing open-source modules, each written up as a report: click-and-collect (security fixes and vendor support), Ever Blog (44 commits) and Cloudflare Turnstile (a patched fork).",
    "cs.kt.b4": "Amazona, a marketplace theme (Smarty, SCSS). I fixed an override conflict when installing its theme-configuration module by moving the logic to a hook.",
    "cs.kt.b5": "The marketplace mobile apps for iOS and Android: store-readiness work (navigation security, signing, Google Play and App Store requirements, tests and CI) and publication guides. They are currently being deployed.",
    "cs.kt.b6": "REST APIs designed and consumed by the apps, database maintenance and performance tuning, plus testing, debugging and code review with the rest of the team.",
    "cs.kt.headline": "Multi-vendor marketplace: payments, sign-in, modules and mobile apps",
    "cs.kt.lead": "A multi-vendor marketplace on PrestaShop: a Mobile Money payment module built in-house, Google sign-in, audited and adapted modules, a marketplace theme, and iOS and Android apps.",
    "cs.kt.context": "Koutonou is a multi-vendor e-commerce marketplace run by Bénin Digital. It had no online payment suited to Benin, no social sign-in, and several modules that needed hardening and vendor support. I worked on the store itself (PHP, PrestaShop) and on its mobile apps for iOS and Android.",
    "cs.kt.pay.h": "Payments with FedaPay: where it stands",
    "cs.kt.pay.p": "FedaPay's official PrestaShop module is paid, looked outdated, and the provider did not answer my questions on compatibility, licence and support for six weeks. FedaPay publishes an open API and an MIT-licensed PHP library, so I built the module in-house. On 14 October 2026 it passed end-to-end tests on the production site in FedaPay's test environment: a 28,000 F CFA order from the browser and a 3,500 F CFA order from the Android app, both ending as \"payment accepted\", with confirmation emails to the customer and the vendor. Not done yet: a first real payment (it needs the production key) and splitting payouts between vendors, since every payment currently lands on one FedaPay account.",
    "cs.kt.m0": "In-house PrestaShop 8 module for Mobile Money and card payments in CFA francs. Validated in FedaPay's test environment; live payments pending.",
    "cs.kt.m5": "OAuth 2.0 / OpenID Connect with PKCE, mandatory email verification, built on hooks. The Google provider is shipped, five more are planned, and automated tests are the next step.",
    "cs.kt.m1": "Based on the open-source Ever PS Click & Collect module. 14 commits: security fixes, then a vendor per store, per-vendor email notifications and hooks for the marketplace.",
    "cs.kt.m2": "Based on the open-source Ever PS Blog module. 44 commits: Bootstrap 4 compatibility, SQL fixes (reserved words, escaping), 235+ French strings and a redesigned listing.",
    "cs.kt.m3": "Marketplace theme, with a fix for an override conflict in its theme-configuration module.",
    "cs.kt.m4": "Patched fork of the open-source Pixel Open module (v1.1.7 to v1.2.0): auto-injected widget, server-side checks, safe redirect and multi-shop configuration.",
    "cs.modules": "Modules & theme",
    "cs.kt.d1.t": "Build the payment module, do not buy it",
    "cs.kt.d1.d": "The paid module cost 4,900 F CFA, but with no answer on maintenance or licence it was a dependency I could not trust. A thin module on top of FedaPay's open API keeps the code under our control and opens the way to vendor payouts. The trade-off is that maintenance is now ours and nobody outside has audited it.",
    "cs.kt.d2.t": "Fork and patch instead of rewriting",
    "cs.kt.d2.d": "For Cloudflare Turnstile I forked the maintained upstream module (Apache 2.0) and added only what a marketplace needs: auto-injection on login, contact and reset forms, server-side hostname and action checks, a safe redirect after failure, and per-shop configuration. Two review findings were left alone on purpose, with the reasons written down.",
    "cs.kt.d3.t": "Secure first, then adapt",
    "cs.kt.d3.d": "The click-and-collect audit started with fixes before any marketplace feature: an XSS in the store notification email, an unvalidated CSV upload and an unchecked date. Only then did I add vendor support: a vendor per store, per-vendor order emails and hooks for the marketplace.",
    "cs.screens": "App screens",
    "cs.l.market": "Visit the marketplace",
    "cs.ke.role": "WordPress developer & matching engineer",
    "cs.ke.period": "2025 – 2026",
    "cs.status.live": "Live",
    "cs.ke.b1": "The institutional website in WordPress and Elementor, with clear service pages and contact flows.",
    "cs.ke.b2": "A matching engine in FastAPI: it reads offers and CVs from WordPress, indexes CV text and vectors in PostgreSQL with pgvector, scores every CV, and writes the results back into WordPress itself.",
    "cs.ke.b3": "A score that shares its formula, weights and skills taxonomy with rhconsole, so one CV gets comparable scores on both platforms. The cross-encoder re-reads only the 100 best CVs, and the 300 best results are written back.",
    "cs.ke.b4": "keoni-bridge, a custom WordPress plugin in PHP: REST endpoints, result tables, an admin screen, a keoni_matching shortcode, and the recruiter screens with a \"Lancer IA\" button, live progress that survives a page reload, and a detailed score view.",
    "cs.ke.b5": "Text extraction with a per-page OCR fallback for scanned or badly encoded PDFs, and an incremental indexing that skips unchanged CVs.",
    "cs.ke.b6": "A self-hosted stack on Docker Compose (three containers on a shared VPS) with images in GHCR. GitHub Actions runs the tests, builds the image and deploys over SSH in 7 to 10 minutes. Backup, rollback and monitoring scripts complete it.",
    "cs.ke.headline": "Corporate website and AI CV matching (Keoni AI)",
    "cs.ke.lead": "A corporate website, plus a matching engine that ranks the CVs of a WordPress job board for each job offer, with an explanation for every candidate.",
    "cs.ke.context": "Kéoni Consulting needed a clear online presence and a faster way to shortlist candidates in a pool of more than 32,000 CVs. The goals: cut pre-selection time, improve the relevance of the profiles proposed, and keep control of the data by self-hosting the stack.",
    "cs.ke.dcap": "Simplified view of the matching flow and the deployment pipeline.",
    "cs.ke.evo.h": "How it evolved",
    "cs.ke.evo.p": "The first version (February to March 2026) chained a WordPress hook, an n8n workflow, an in-memory FAISS index and a write back to WordPress. In September 2026 I rewrote the engine around pgvector and text windows, with direct writes into WordPress. Since October the \"Lancer IA\" button calls the engine directly, and n8n is only used for extraction previews.",
    "cs.ke.d1.t": "Rewrite instead of patching",
    "cs.ke.d1.d": "The first chain truncated text silently and kept results in memory. The new engine indexes CVs in overlapping text windows (no silent truncation), ranks a candidate on the best window rather than an average, and writes results itself.",
    "cs.ke.d2.t": "Score everyone, re-read only the best",
    "cs.ke.d2.d": "Running the cross-encoder on all 33,000 CVs meant an offer never finished. It now re-reads the top 100 only, and every other CV keeps a real score from cosine similarity. Sending one result per CV in a single request was also replaced by writing the 300 best.",
    "cs.ke.d3.t": "Measure before fixing the OCR",
    "cs.ke.d3.d": "OCR was timing out on every page. Measurements showed one OCR took 1.1 s, but eight in parallel pushed the server load to 32. Tesseract is multi-threaded, so a wrapper limits it to one thread: the same eight now finish in 2.4 s, and PyTorch keeps its threads.",
    "cs.ke.d4.t": "No evidence is not a good score",
    "cs.ke.d4.d": "An audit showed empty or unreadable CVs ranking near the top, because semantic similarity saturates around 73%. A CV with no detected skill is now capped at 30%, generic skills weigh less, and one person gets one line even with several applications.",
    "cs.l.site": "Visit the website",
    "cs.l.keorepo": "Source repository"
    /* wk-translations:end */
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
    "Referral Work": "Années d'activité",
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
    "Open Source Contributions": "Contributions open source",
    "Pytest Infrastructure Contribution": "Infrastructure de tests Pytest pour SKFeatureLLM",
    "Pytest Infrastructure Summary": "Mise en place d'une suite de tests Pytest pour SKFeatureLLM avec tests unitaires, mocks et configuration pour fiabiliser la logique de sélection de features.",
    "Pytest Role": "Contributeur open source",
    "Pytest Impact": "Amélioration de la fiabilité et de la maintenabilité grâce aux tests, mocks et au linting ajoutés au projet.",
    "CI CD Pipeline PyPI": "Pipeline CI/CD pour les tests & PyPI",
    "CI CD Pipeline Summary": "Mise en place d'un pipeline GitHub Actions qui exécute les tests, applique la qualité de code et publie les paquets Python sur PyPI via Trusted Publishing.",
    "CI CD Role": "Contributeur open source",
    "CI CD Impact": "Unification du linting, des tests et du déploiement dans un seul pipeline, avec publication sécurisée et sans identifiants sur PyPI.",
    "Mobile Applications": "Applications mobiles",
    "Mobile App": "Application mobile",
    "AB Project EE Mobile": "Application mobile A&B Project EE",
    "AB Project EE Mobile Summary": "Application mobile bénévole aidant A&B Project EE à coordonner les dons de sang et à connecter donneurs et bénéficiaires.",
    "AB Mobile Role": "Développeur bénévole Flutter & Django",
    "AB Mobile Impact": "Fluidification de la mise en relation entre donneurs et bénéficiaires grâce à une expérience mobile dédiée.",
    "View App Screens": "Voir les écrans de l'app",
    "Ecommerce": "E-commerce",
    "Benin Digital Marketplace": "Marketplace Bénin Digital",
    "Benin Digital Marketplace Summary": "Application marketplace on-site développée pour Bénin Digital, permettant à acheteurs et vendeurs d'échanger via une expérience e-commerce mobile-friendly.",
    "Benin Role": "Développeur de l'application marketplace on-site",
    "Benin Impact": "Livraison d'une interface marketplace moderne pour présenter les produits et fluidifier les commandes.",
    "View Marketplace Screens": "Voir les écrans de la marketplace",
    "Websites": "Sites web",
    "Nonprofit": "Association",
    "AB Project EE Website": "Site web A&B Project EE",
    "AB Project EE Summary": "Conception et développement du site public d'A&B Project EE, une association d'aide sociale, humanitaire et solidaire.",
    "AB Role": "Développeur web bénévole",
    "AB Impact": "Offre à l'association une présence en ligne moderne pour partager ses initiatives et mobiliser du soutien.",
    "Corporate Site": "Site corporate",
    "Keoni Consulting Website": "Site web Keoni Consulting",
    "Keoni Consulting Summary": "Site de conseil sous WordPress créé pour Benin Digital afin de présenter les services et générer des leads pour Keoni Consulting.",
    "Keoni Role": "Développeur WordPress & PHP",
    "Keoni Impact": "Livraison d'une présence corporate moderne avec des pages de services claires et des parcours de contact.",
    "AB Mobile Screens Heading": "A&B Project EE – Écrans de l'application",
    "AB Mobile Screens Subtitle": "Parcourez les principaux écrans de l'application mobile de don de sang.",
    "Benin Marketplace Screens Heading": "Bénin Digital – Écrans de la marketplace",
    "Benin Marketplace Screens Subtitle": "Parcourez les principaux parcours e-commerce de la marketplace Bénin Digital.",
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
    "Production Deployments": "Projets livrés",
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
    "View live stats on GitHub": "Voir les statistiques sur GitHub",
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
    "Back": "Retour",
    "Volunteer Category": "Bénévolat / ONG",
    "TugOnn Title": "TugOnn Student Web App",
    "TugOnn Role": "Développeur full-stack bénévole",
    "TugOnn Impact": "Plateforme web pour une organisation suisse-béninoise à but non lucratif, développée et maintenue par une équipe d'étudiants développeurs.",
    "Frontend Repo": "Dépôt Frontend",
    "Backend Repo": "Dépôt Backend",
    "Freelance Category": "Freelance",
    "Vinos Title": "Site Vinos Makeup",
    "Vinos Role": "Développeur freelance",
    "Vinos Impact": "Site vitrine pour une marque de cosmétiques.",
    "Visit Repo": "Voir le dépôt",
    "Experience": "Expérience",
    "Experience Intro": "Où j'ai travaillé, et ce que j'y ai fait.",
    "Technical Lead Title": "Technical Lead",
    "Benin Digital Org": "Bénin Digital · Cotonou, Bénin",
    "Technical Lead Copy": "Direction technique de l'ensemble du portefeuille applicatif de Bénin Digital, des décisions d'infrastructure à la revue de code.",
    "AI Integration Title": "Intégration IA & Automatisation",
    "AI Integration Copy": "Intégration de solutions IA dans les processus métier, développement d'assistants et chatbots IA, et automatisation de workflows avec n8n, des API et des webhooks sur des CRM, ERP et plateformes de messagerie. Déploiement et maintenance de services conteneurisés avec Docker.",
    "Mobile Web Dev Title": "Développeur d'applications mobiles et web",
    "Mobile Web Dev Copy": "Développement d'applications web et mobiles, UI/UX et fonctionnalités backend pour la marketplace Koutonou et Keoni Consulting, avec maintenance de bases de données et optimisation des performances.",
    "AB Project Title": "Développeur full-stack",
    "AB Project Org": "AB Project-EE · Freelance, Paris (à distance)",
    "AB Project Copy": "Développeur full-stack bénévole pour une ONG humanitaire : conception et maintenance d'applications web, d'API et de bases de données pour des projets à impact social.",
    "Madi Studio Title": "Développeur full-stack",
    "Madi Studio Org": "Madi Studio · Freelance, Cotonou, Bénin",
    "Madi Studio Copy": "Développement full-stack en freelance pour des clients indépendants : sites web, applications et maintenance continue.",
    "DevMaster Category": "master.dev — Juillet 2026",
    "Practical Problem Solving with Algorithms": "Résolution pratique de problèmes avec des algorithmes",
    "No Cert Image": "aucune image de certificat disponible",
    "Status Issued": "$ statut : délivré",
    "Backend System Design": "Conception de systèmes backend",
    "C# and .NET Basics": "Bases de C# et .NET",
    "Enterprise Design Systems Management": "Gestion de design systems en entreprise",
    "Mastering Chrome Developer Tools, v4": "Maîtriser les outils de développement Chrome, v4",
    "Building APIs with C# and ASP.NET Core": "Créer des API avec C# et ASP.NET Core",
    "Enterprise DevOps & Cloud Infrastructure": "DevOps et infrastructure cloud en entreprise",
    "Enterprise TypeScript": "TypeScript en entreprise",
    "Full Stack Fundamentals, v3": "Fondamentaux du full-stack, v3",
    "Engineering Management Fundamentals 101": "Fondamentaux du management technique 101",
    "Java Fundamentals": "Fondamentaux de Java",
    "Introduction to Node.js, v3": "Introduction à Node.js, v3",
    "Building Your Own Programming Language": "Créer son propre langage de programmation",
    "iOS App Development with Swift": "Développement d'applications iOS avec Swift",
    "Testing Fundamentals": "Fondamentaux des tests",
    "Heritage Tagline": "D'où je viens",
    "Heritage Heading": "Racines Otammari",
    "Heritage Copy": "Je suis originaire du peuple Otammari (Batammariba). Notre territoire ancestral, le Koutammakou, est inscrit au patrimoine mondial de l'UNESCO comme paysage culturel vivant. Nos tours de terre traditionnelles, les Tata Somba (takienta), témoignent d'un savoir-faire architectural transmis de génération en génération.",
    "Album Label": "Photos personnelles",
    "View Photo Album": "Voir l'album photo",
    "Photo Album Heading": "Album photo",
    /* wk-translations:start */
    "View Repo": "Voir le dépôt",
    "wk.stat1": "Applications en production",
    "wk.stat2": "Commits sur rhconsole",
    "wk.stat3": "Pull requests fusionnées en amont",
    "wk.stat4": "Années d'expérience",
    "wk.f.all": "Tous",
    "wk.f.web": "Web",
    "wk.f.mobile": "Mobile",
    "wk.f.ngo": "ONG",
    "wk.f.freelance": "Freelance",
    "cs.cat.rh": "IA & Backend · Production",
    "cs.rh.f1": "Commits Git",
    "cs.rh.f2": "endpoints REST",
    "cs.rh.f3": "CV réels pour auditer l’extraction",
    "wk.openapp": "Ouvrir l'application",
    "wk.read": "Lire l’étude de cas",
    "wk.prod": "En production",
    "cs.rh.summary": "Matching CV/emploi par IA pour Bénin Digital : FastAPI, PostgreSQL + pgvector, Redis Streams et un score hybride explicable, sans LLM.",
    "cs.cat.kt": "E-commerce · Web & Mobile",
    "cs.kt.f1": "modules et thème",
    "cs.kt.f2": "commandes de test payées de bout en bout",
    "cs.kt.f3": "applications mobiles",
    "wk.openmarket": "Visiter la marketplace",
    "cs.kt.summary": "La marketplace Koutonou : paiement Mobile Money FedaPay, connexion Google, modules et thème PrestaShop pour plusieurs vendeurs, plus des applications iOS et Android.",
    "cs.cat.ke": "WordPress · Matching IA",
    "cs.ke.f1": "CV indexés",
    "cs.ke.f2": "offres actives",
    "cs.ke.f3": "tests automatisés réussis",
    "wk.openweb": "Visiter le site",
    "cs.ke.summary": "Le site Keoni Consulting sous WordPress, et Keoni AI : un moteur FastAPI + pgvector qui note plus de 32 000 CV pour chaque offre.",
    "wk.c.mobile": "Application mobile",
    "wk.g1.t": "A&B Project EE — Application mobile",
    "wk.g1.d": "Application mobile qui facilite la mise en relation entre donneurs de sang et bénéficiaires.",
    "wk.g1.r": "Développeur Flutter & Django bénévole",
    "wk.c.ngosite": "Site associatif",
    "wk.g2.t": "A&B Project EE — Site web",
    "wk.g2.d": "Site institutionnel d'une ONG humanitaire, réalisé en autonomie du besoin à la mise en ligne.",
    "wk.g2.r": "Développeur web bénévole",
    "wk.c.platform": "Plateforme web",
    "wk.g3.t": "TugOnn Student Web App",
    "wk.g3.d": "Projet d'équipe pour une ONG suisso-béninoise : un front Next.js et un back Express + MongoDB, développés avec branches, revues et fusions Git.",
    "wk.g3.r": "Développeur full-stack bénévole",
    "wk.c.marketing": "Site vitrine",
    "wk.g4.t": "Site MC Agence",
    "wk.g4.d": "Site vitrine pour une agence cliente, conçu et réalisé sous Webflow.",
    "wk.g4.r": "Lead designer & développeur Webflow",
    "wk.c.showcase": "Site vitrine",
    "wk.g5.t": "Site Vino's Makeup",
    "wk.g5.d": "Site vitrine pour une marque de cosmétiques.",
    "wk.g5.r": "Développeur freelance",
    "wk.o.cat": "Open source",
    "wk.o1.d": "Intégration de Highlight.js dans les en-têtes avec synchronisation du thème, dans une librairie UI pour FastHTML.",
    "wk.merged": "Fusionnée",
    "wk.o2.d": "Des workflows GitHub Actions qui lint et testent le paquet, puis le publient sur PyPI.",
    "wk.o3.d": "Une base pytest avec des tests pour le feature engineer et l'interface LLM.",
    "wk.tag": "Réalisations choisies",
    "wk.intro": "Applications en production, contributions open source et projets clients, en commençant par le travail le plus solide.",
    "wk.featured": "En production",
    "wk.featured.sub": "Trois projets que j'ai conçus, construits ou livrés de bout en bout, chacun avec une étude de cas complète.",
    "wk.others": "Autres réalisations",
    "wk.others.sub": "Sites web et applications mobiles pour des ONG et des clients freelance.",
    "wk.os": "Open source",
    "wk.os.sub": "Pull requests relues et fusionnées par des mainteneurs tiers.",
    "cs.rh.role": "Développeur solo, de bout en bout",
    "cs.rh.period": "Sept. 2025 – juil. 2026",
    "cs.status.prod": "En production",
    "wk.role": "Rôle",
    "wk.period": "Période",
    "wk.client": "Client",
    "wk.status": "Statut",
    "cs.rh.b1": "Une API REST FastAPI de plus de 40 endpoints, avec authentification JWT à trois rôles, limitation de débit et métriques Prometheus, sur PostgreSQL 16 avec 25 migrations Alembic.",
    "cs.rh.b2": "Un pipeline événementiel : un watcher de dossiers et un agent de synchronisation autonome alimentent une file Redis Streams, et un worker réessaie avec un backoff exponentiel avant l'extraction, le profilage, les embeddings et le scoring.",
    "cs.rh.b3": "Une extraction de texte qui lit les CV à deux colonnes colonne par colonne, avec un repli OCR Tesseract page par page pour les PDF scannés, mise au point par des audits sur plus de 13 000 CV réels.",
    "cs.rh.b4": "Une taxonomie de compétences en quatre couches (2 162 alias revus à la main, ROME 4.0, ESCO, O*NET et e-CF) avec détection par n-grammes et repli tolérant aux fautes de frappe.",
    "cs.rh.b5": "Un score hybride de 0 à 100 : compétences, expérience, formation, langues et contrat, plus un signal d'embeddings e5 multilingue et un cross-encoder français. Des plafonds de couverture et une pénalité pour les outils clés manquants empêchent une proximité sémantique générale de masquer un manque de compétences.",
    "cs.rh.b6": "Chaque correspondance vient avec une explication (pourquoi elle correspond, points de vigilance, extraits du CV), trois niveaux de score et des statistiques de retours recruteurs, dans un tableau de bord en JavaScript natif.",
    "cs.rh.b7": "Docker Compose en local et dans le cloud, un conteneur d'API durci (système de fichiers en lecture seule, aucune capability Linux), et une CI GitHub Actions qui bloque la fusion quand un modèle change sans sa migration.",
    "cs.back": "Tous les travaux",
    "cs.rh.headline": "Console RH de matching CV/emploi par IA",
    "cs.rh.lead": "Une console de recrutement qui note l'adéquation d'un CV à une offre, en temps réel et avec une explication : extraction, profilage, embeddings et score hybride derrière une API REST, sans LLM.",
    "cs.context": "Contexte",
    "cs.rh.context": "Recruter, c'est lire beaucoup de CV face à beaucoup d'offres. rhconsole automatise le premier tri : les CV et les offres arrivent dans des dossiers surveillés ou via le tableau de bord, et chaque paire reçoit un score de 0 à 100 avec ses raisons, pour que le recruteur sache quoi vérifier avant d'appeler un candidat.",
    "cs.built": "Ce que j'ai réalisé",
    "cs.arch": "Comment ça s'assemble",
    "cs.rh.dcap": "Vue simplifiée du pipeline de matching.",
    "cs.rh.sec.h": "Sécurité",
    "cs.rh.sec.p": "J'ai audité l'application en production selon les pratiques OWASP et corrigé moi-même de vraies failles : un secret JWT laissé en valeur d'exemple, un compte administrateur exposé par défaut, et des identifiants présents dans l'historique Git.",
    "cs.rh.d1.t": "Un seul jeu de poids, pas un par domaine",
    "cs.rh.d1.d": "Le score changeait ses poids selon le domaine détecté. Un seul mot ambigu, comme « patient » dans un CV tech, pouvait faire basculer tout le profil sans signal visible. Je l’ai retiré : le domaine reste affiché comme étiquette, et le recruteur peut choisir un profil de pondération explicite par offre.",
    "cs.rh.d2.t": "Supprimer le code mort qui a l’air actif",
    "cs.rh.d2.d": "Une fonctionnalité de poids appris avait été construite mais jamais branchée sur le vrai scoring. J’ai supprimé sa table dans une migration plutôt que de laisser des réglages laissant croire qu’elle était active.",
    "cs.rh.d3.t": "Un signal absent est écarté, pas deviné",
    "cs.rh.d3.d": "Quand une composante n’a rien à comparer (une offre sans années d’expérience, par exemple), elle est écartée de la moyenne et son poids passe aux autres, au lieu d’une valeur neutre par défaut qui fausserait le score.",
    "cs.decisions": "Décisions & compromis",
    "cs.l.app": "Ouvrir l'application",
    "cs.l.engine": "Dépôt du code",
    "cs.links": "Liens",
    "cs.next": "Étude de cas suivante",
    "cs.kt.role": "Développeur web & mobile",
    "cs.kt.period": "2025 – 2026",
    "cs.kt.status": "En ligne · paiement validé en mode test",
    "cs.kt.b1": "koutonoufedapay, un module de paiement PrestaShop 8 pour FedaPay (Mobile Money et carte, en francs CFA). La commande n'est créée qu'après relecture du paiement auprès de FedaPay, avec contrôle du montant, protection contre les doublons, clés de test et de production séparées, et webhook signé. Il fonctionne sur le site et dans l'application Android.",
    "cs.kt.b2": "ps_koutonouauth, un module d'authentification : connexion Google (OAuth 2.0 et OpenID Connect avec PKCE) et vérification obligatoire de l'e-mail. Il s'intègre à PrestaShop par des hooks, requiert PHP 8.1 et n'a aucune dépendance externe.",
    "cs.kt.b3": "Des audits et correctifs de modules open source existants, chacun documenté par un rapport : click-and-collect (correctifs de sécurité et gestion des vendeurs), Ever Blog (44 commits) et Cloudflare Turnstile (un fork corrigé).",
    "cs.kt.b4": "Amazona, un thème de marketplace (Smarty, SCSS). J'ai corrigé un conflit d'override à l'installation de son module de configuration en déplaçant la logique vers un hook.",
    "cs.kt.b5": "Les applications mobiles iOS et Android de la marketplace : mise en conformité pour les stores (sécurité de la navigation, signature, exigences Google Play et App Store, tests et CI) et guides de publication. Elles sont en cours de déploiement.",
    "cs.kt.b6": "Des API REST conçues et consommées par les applications, de la maintenance de bases de données et de l'optimisation des performances, plus des tests, du débogage et de la revue de code avec l'équipe.",
    "cs.kt.headline": "Marketplace multi-vendeurs : paiement, connexion, modules et applications mobiles",
    "cs.kt.lead": "Une marketplace multi-vendeurs sur PrestaShop : un module de paiement Mobile Money développé en interne, la connexion Google, des modules audités et adaptés, un thème de marketplace, et des applications iOS et Android.",
    "cs.kt.context": "Koutonou est une marketplace e-commerce multi-vendeurs de Bénin Digital. Elle n'avait aucun paiement en ligne adapté au Bénin, pas de connexion sociale, et plusieurs modules à renforcer et à adapter aux vendeurs. J'ai travaillé sur la boutique elle-même (PHP, PrestaShop) et sur ses applications mobiles iOS et Android.",
    "cs.kt.pay.h": "Paiement FedaPay : où en est-on",
    "cs.kt.pay.p": "Le module PrestaShop officiel de FedaPay est payant, semblait ancien, et le fournisseur n'a pas répondu pendant six semaines à mes questions sur la compatibilité, la licence et le support. FedaPay publie une API ouverte et une bibliothèque PHP sous licence MIT, donc j'ai développé le module en interne. Le 14 octobre 2026, il a passé des essais de bout en bout sur le site de production, dans l'environnement de test de FedaPay : une commande de 28 000 F CFA depuis le navigateur et une de 3 500 F CFA depuis l'application Android, toutes deux en « paiement accepté », avec e-mails de confirmation au client et au vendeur. Reste à faire : un premier paiement réel (il faut la clé de production) et la répartition des paiements entre vendeurs, puisque tout arrive aujourd'hui sur un seul compte FedaPay.",
    "cs.kt.m0": "Module PrestaShop 8 développé en interne pour les paiements Mobile Money et carte en francs CFA. Validé dans l'environnement de test de FedaPay ; paiements réels à venir.",
    "cs.kt.m5": "OAuth 2.0 / OpenID Connect avec PKCE, vérification obligatoire de l'e-mail, construit sur des hooks. Le fournisseur Google est livré, cinq autres sont prévus, et les tests automatisés sont la prochaine étape.",
    "cs.kt.m1": "Basé sur le module open source Ever PS Click & Collect. 14 commits : correctifs de sécurité, puis un vendeur par magasin, des notifications e-mail par vendeur et des hooks pour la marketplace.",
    "cs.kt.m2": "Basé sur le module open source Ever PS Blog. 44 commits : compatibilité Bootstrap 4, correctifs SQL (mots réservés, échappement), plus de 235 chaînes traduites en français et un listing redessiné.",
    "cs.kt.m3": "Thème de marketplace, avec un correctif pour un conflit d'override dans son module de configuration.",
    "cs.kt.m4": "Fork corrigé du module open source de Pixel Open (v1.1.7 vers v1.2.0) : widget injecté automatiquement, contrôles côté serveur, redirection sûre et configuration multi-boutique.",
    "cs.modules": "Modules & thème",
    "cs.kt.d1.t": "Développer le module de paiement plutôt que l’acheter",
    "cs.kt.d1.d": "Le module payant coûtait 4 900 F CFA, mais sans réponse sur la maintenance ou la licence, c’était une dépendance peu fiable. Un module léger au-dessus de l’API ouverte de FedaPay garde le code sous notre contrôle et ouvre la voie au reversement aux vendeurs. En contrepartie, la maintenance est désormais à notre charge et personne d’extérieur ne l’a audité.",
    "cs.kt.d2.t": "Forker et corriger plutôt que réécrire",
    "cs.kt.d2.d": "Pour Cloudflare Turnstile, j’ai forké le module amont maintenu (Apache 2.0) et ajouté seulement ce dont une marketplace a besoin : injection automatique sur les formulaires de connexion, contact et réinitialisation, contrôles serveur du hostname et de l’action, redirection sûre après échec, et configuration par boutique. Deux remarques de revue ont été laissées de côté volontairement, avec les raisons documentées.",
    "cs.kt.d3.t": "Sécuriser d’abord, adapter ensuite",
    "cs.kt.d3.d": "L’audit de click-and-collect a commencé par des correctifs avant toute fonction marketplace : une XSS dans l’e-mail de notification du magasin, un import CSV non validé et une date non contrôlée. Ensuite seulement j’ai ajouté la gestion des vendeurs : un vendeur par magasin, des e-mails de commande par vendeur et des hooks pour la marketplace.",
    "cs.screens": "Écrans de l'application",
    "cs.l.market": "Visiter la marketplace",
    "cs.ke.role": "Développeur WordPress & ingénieur matching",
    "cs.ke.period": "2025 – 2026",
    "cs.status.live": "En ligne",
    "cs.ke.b1": "Le site institutionnel en WordPress et Elementor, avec des pages de services claires et des parcours de contact.",
    "cs.ke.b2": "Un moteur de matching en FastAPI : il lit les offres et les CV dans WordPress, indexe le texte et les vecteurs des CV dans PostgreSQL avec pgvector, note chaque CV, et écrit lui-même les résultats dans WordPress.",
    "cs.ke.b3": "Un score qui partage sa formule, ses poids et sa taxonomie de compétences avec rhconsole, pour qu'un même CV obtienne des scores comparables sur les deux plateformes. Le cross-encoder ne relit que les 100 meilleurs CV, et les 300 meilleurs résultats sont renvoyés.",
    "cs.ke.b4": "keoni-bridge, un plugin WordPress sur mesure en PHP : endpoints REST, tables de résultats, écran d'administration, shortcode keoni_matching, et les écrans recruteur avec un bouton « Lancer IA », un suivi en direct qui survit au rechargement de la page, et un détail du score.",
    "cs.ke.b5": "Une extraction de texte avec repli OCR page par page pour les PDF scannés ou mal encodés, et une indexation incrémentale qui ignore les CV inchangés.",
    "cs.ke.b6": "Une stack auto-hébergée sous Docker Compose (trois conteneurs sur un VPS partagé) avec des images dans GHCR. GitHub Actions exécute les tests, construit l'image et déploie via SSH en 7 à 10 minutes. Des scripts de sauvegarde, de rollback et de supervision complètent le tout.",
    "cs.ke.headline": "Site vitrine et matching IA des CV (Keoni AI)",
    "cs.ke.lead": "Un site vitrine, plus un moteur de matching qui classe les CV d'un site d'emploi WordPress pour chaque offre, avec une explication pour chaque candidat.",
    "cs.ke.context": "Kéoni Consulting avait besoin d'une présence en ligne claire et d'un moyen plus rapide de présélectionner des candidats dans un vivier de plus de 32 000 CV. Les objectifs : réduire le temps de présélection, améliorer la pertinence des profils proposés, et garder le contrôle des données grâce à une stack auto-hébergée.",
    "cs.ke.dcap": "Vue simplifiée du flux de matching et du pipeline de déploiement.",
    "cs.ke.evo.h": "Comment ça a évolué",
    "cs.ke.evo.p": "La première version (février à mars 2026) enchaînait un hook WordPress, un workflow n8n, un index FAISS en mémoire et une écriture dans WordPress. En septembre 2026, j'ai réécrit le moteur autour de pgvector et de fenêtres de texte, avec écriture directe dans WordPress. Depuis octobre, le bouton « Lancer IA » appelle directement le moteur, et n8n ne sert plus qu'aux aperçus d'extraction.",
    "cs.ke.d1.t": "Réécrire plutôt que rafistoler",
    "cs.ke.d1.d": "La première chaîne tronquait le texte sans le dire et gardait les résultats en mémoire. Le nouveau moteur indexe les CV en fenêtres de texte (aucune troncature silencieuse), classe un candidat sur sa meilleure fenêtre plutôt que sur une moyenne, et écrit lui-même les résultats.",
    "cs.ke.d2.t": "Noter tout le monde, ne relire que les meilleurs",
    "cs.ke.d2.d": "Lancer le cross-encoder sur les 33 000 CV empêchait une offre de se terminer. Il ne relit plus que les 100 meilleurs, et tous les autres CV gardent un vrai score issu de la similarité cosinus. L’envoi d’un résultat par CV dans une seule requête a aussi été remplacé par l’écriture des 300 meilleurs.",
    "cs.ke.d3.t": "Mesurer avant de corriger l’OCR",
    "cs.ke.d3.d": "L’OCR expirait sur chaque page. Les mesures ont montré qu’un OCR prenait 1,1 s, mais que huit en parallèle poussaient la charge du serveur à 32. Tesseract est multi-thread, donc un script la limite à un thread : les huit mêmes se terminent en 2,4 s, et PyTorch garde ses threads.",
    "cs.ke.d4.t": "Aucune preuve ne vaut pas un bon score",
    "cs.ke.d4.d": "Un audit a montré des CV vides ou illisibles en tête de classement, car la similarité sémantique sature vers 73 %. Un CV sans compétence détectée est maintenant plafonné à 30 %, les compétences génériques pèsent moins, et une personne n’occupe qu’une ligne même avec plusieurs candidatures.",
    "cs.l.site": "Visiter le site",
    "cs.l.keorepo": "Dépôt du code"
    /* wk-translations:end */
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

  let alreadySeen = false;
  try {
    alreadySeen = sessionStorage.getItem('splashSeen') === '1';
    sessionStorage.setItem('splashSeen', '1');
  } catch (error) {
    alreadySeen = false;
  }

  const skipAnimations = prefersReducedMotionQuery.matches || alreadySeen;

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
  let ticking = false;

  const update = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.classList.add('nav-hidden');
    } else {
      navbar.classList.remove('nav-hidden');
      navbar.classList.toggle('nav-scrolled', currentScrollY > 50);
    }
    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true }
  );
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
      let staggerIndex = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // elements revealed together cascade by 40ms (capped), decorative only
          entry.target.style.animationDelay = `${Math.min(staggerIndex, 6) * 40}ms`;
          staggerIndex += 1;
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

function initGithubStatsFallback() {
  const images = document.querySelectorAll('#github img[data-retry-src]');
  images.forEach((img) => {
    let attempted = false;
    img.addEventListener('error', () => {
      if (!attempted) {
        attempted = true;
        const retryUrl = new URL(img.dataset.retrySrc, window.location.href);
        retryUrl.searchParams.set('cb', Date.now().toString());
        window.setTimeout(() => {
          img.src = retryUrl.toString();
        }, 2500);
        return;
      }

      const fallback = document.createElement('a');
      fallback.href = 'https://github.com/99ch';
      fallback.target = '_blank';
      fallback.rel = 'noreferrer';
      fallback.dataset.translate = 'View live stats on GitHub';
      fallback.textContent = 'View live stats on GitHub';
      fallback.className = 'github-stats-fallback';
      img.replaceWith(fallback);
      applyLanguage(languageState.current);
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

async function loadPartial(name, onLoad) {
  const container = document.querySelector(`[data-partial="${name}"]`);
  if (!container) return;

  const swapOuter = container.dataset.swap === 'outer';

  try {
    const response = await fetch(`/partials/${name}.html`, { cache: 'no-cache' });
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

function initProjectFilters() {
  const buttons = document.querySelectorAll('.wk-filter');
  const cards = document.querySelectorAll('#wk-grid .wk-card');
  if (!buttons.length || !cards.length) return;

  const grid = document.getElementById('wk-grid');
  const fadeMs = 150;
  let pending = 0;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((other) => other.setAttribute('aria-pressed', String(other === button)));

      window.clearTimeout(pending);
      const leaving = [];
      const entering = [];
      cards.forEach((card) => {
        const cats = (card.dataset.cats || '').split(' ');
        const show = filter === 'all' || cats.includes(filter);
        if (show) {
          if (card.hidden) entering.push(card);
          else card.classList.remove('is-fading');
        } else if (!card.hidden) {
          leaving.push(card);
        }
      });

      leaving.forEach((card) => card.classList.add('is-fading'));
      pending = window.setTimeout(() => {
        leaving.forEach((card) => {
          card.hidden = true;
          card.classList.remove('is-fading');
        });
        entering.forEach((card) => {
          card.classList.add('is-fading');
          card.hidden = false;
        });
        void grid.offsetWidth;
        entering.forEach((card) => card.classList.remove('is-fading'));
      }, leaving.length ? fadeMs : 0);
    });
  });
}

function initStatCounters() {
  const counters = document.querySelectorAll('.wk-count[data-count]');
  if (!counters.length || prefersReducedMotionQuery.matches) return;

  const run = () => {
    counters.forEach((el, index) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      const duration = 1500;
      const delay = index * 150;
      el.textContent = '0';
      window.setTimeout(() => {
        let start = null;
        const tick = (now) => {
          if (start === null) start = now;
          const progress = Math.min(Math.max((now - start) / duration, 0), 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = String(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        // guarantee the final value even if animation frames are throttled
        window.setTimeout(() => {
          el.textContent = String(target);
        }, duration + 300);
      }, delay);
    });
  };

  const main = document.getElementById('main-content');
  const started = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    started.disconnect();
    // wait for the splash screen to reveal the page
    if (main && main.hasAttribute('aria-hidden')) {
      const reveal = new MutationObserver(() => {
        if (!main.hasAttribute('aria-hidden')) {
          reveal.disconnect();
          run();
        }
      });
      reveal.observe(main, { attributes: true, attributeFilter: ['aria-hidden'] });
    } else {
      run();
    }
  }, { threshold: 0.4 });
  started.observe(counters[0]);
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

function initNavbar() {
  initNavbarScrollBehavior();
  initMobileMenu();
  initLanguageSelectors();
}

function initPage() {
  applyTheme();
  initPrefersReducedListener();
  initSplashScreen();
  initScrollAnimations();
  enhanceLazyImages();
  initContactBackgroundFallback();
  initGithubStatsFallback();
  initProjectFilters();
  initStatCounters();
  applyLanguage(languageState.current);

  const navbarPromise = document.querySelector('[data-partial="navbar"]')
    ? loadPartial('navbar', initNavbar)
    : Promise.resolve(initNavbar());

  Promise.all([navbarPromise, loadPartial('footer')]).then(() => {
    applyLanguage(languageState.current);
  });
}

document.addEventListener('DOMContentLoaded', initPage);
