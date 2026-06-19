document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.getElementById("shareButton");
  const pageUrl = window.location.href;
  const pageTitle = document.title;
  const langButtons = document.querySelectorAll("[data-lang]");
  const i18nElements = document.querySelectorAll("[data-i18n]");

  const translations = {
    en: {
      "nav-brand": "PORTFOLIO",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-projects": "Projects",
      "nav-education": "Education",
      "nav-skills": "Skills",
      "nav-certificates": "Certificates",
      "nav-tools": "Tools",
      "nav-contact": "Contact",
      "lang-en": "EN",
      "lang-id": "ID",
      "share-button": "Share",
      "theme-light": "Light",
      "theme-dark": "Dark",
      "hero-tagline": "Professional Portfolio",
      "hero-name": "RORO JASMINE SETYONINGSIH",
      "hero-description": "Information Systems student focused on professional digital solutions, platform development, and database management.",
      "cta-download": "Download CV",
      "about-badge": "About Me",
      "about-title": "Who Am I?",
      "about-p1": "I am an Information Systems undergraduate at Universitas Bina Sarana Informatika Karawang campus with a focus on technology integration and data management. I have real experience building digital platforms like MySems.my.id a school event management system designed to improve collaboration, planning, and reporting.",
      "about-p2": "As a young professional, I am skilled in designing system diagrams such as UML (Use Case, Activity Diagram, etc.), ERD, and LRD. I also have strong understanding as a Database Administrator with experience in DDL and DML, and competencies in Laravel, HTML, CSS, Bootstrap, JavaScript, Python, MySQL, and related web technologies.",
      "about-p3": "I always strive to deliver structured, aesthetic, and reliable digital solutions to meet business and educational needs.",
      "focus-title": "Professional focus",
      "focus-text": "Digital platforms, data management, and accurate system modeling.",
      "expertise-title": "Technical expertise",
      "expertise-text": "Laravel, Bootstrap, JavaScript, Python, MySQL, and UX/UI design.",
      "database-title": "Database administration",
      "database-text": "Planning and validating data structures using ERD and LRD.",
      "collaboration-title": "Creative collaboration",
      "collaboration-text": "A responsive, professional, and measured design approach.",
      "projects-badge": "Featured Project",
      "projects-title": "My Projects",
      "projects-description": "A standout project that demonstrates my ability to design systems, manage databases, and create intuitive user experiences.",
      "project-name": "MySems.my.id",
      "project-details": "A School Event Management System designed to simplify planning, coordination, and reporting for educational events. The platform supports event management with an intuitive dashboard, participant data management, and structured validation workflows.",
      "tech-laravel": "Laravel",
      "tech-bootstrap": "Bootstrap",
      "tech-mysql": "MySQL",
      "tech-js": "JavaScript",
      "project-button": "Visit Project",
      "education-badge": "Education",
      "education-title": "Academic Journey",
      "education-description": "Educational journey that underlies my technical competence in information systems and digital development.",
      "edu-1-school": "SMK Negeri 1 Karawang",
      "edu-1-date": "2021 - 2024",
      "edu-1-desc": "Vocational high school education that strengthened technical foundations in programming, data management, and information technology services.",
      "edu-2-school": "S1 Universitas Bina Sarana Informatika",
      "edu-2-date": "2024 - Present",
      "edu-2-desc": "Information Systems study program focusing on digital technology, systems analysis, and quality information management.",
      "organization-title": "Organizational Experience",
      "organization-description": "Key leadership roles and student organization experience that support my teamwork and communication skills.",
      "org-1-role": "Participating in the OSIS Organization at SMKN 1 Karawang as the head of the Noble Character & Moral Development Section",
      "org-1-date": "2022 - 2023",
      "org-1-desc": "Led programs aimed at strengthening student character, ethics, and moral values through extracurricular activities.",
      "org-2-role": "Secretary of Internal Affairs Department at UBSI Karawang Student Executive Board",
      "org-2-date": "2024 - Present",
      "org-2-desc": "Managed internal communications and coordinated departmental operations for the student government organization.",
      "skills-badge": "Skills",
      "skills-title": "Core Competencies",
      "skills-description": "A collection of technical and interpersonal skills that I use to complete projects with professional quality.",
      "skills-hard": "Hard Skills",
      "skill-h1": "Web Design",
      "skill-h2": "Web Development",
      "skill-h3": "Office Administrative",
      "skills-soft": "Soft Skills",
      "skill-s1": "Communication",
      "skill-s2": "Teamwork",
      "skill-s3": "Leadership",
      "skill-s4": "Time Management",
      "skill-s5": "Problem Solving",
      "skill-s6": "Adaptability",
      "cert-badge": "Certificates",
      "cert-title": "Certifications & Achievements",
      "cert-description": "A collection of certificates that support my credibility and experience in digital development and leadership.",
      "cert-1-title": "Graphic Design Fundamental",
      "cert-1-date": "17–27 Feb 2025",
      "cert-2-title": "Dialog Perempuan Inovasi",
      "cert-2-date": "8 Nov 2024",
      "cert-3-title": "Product Development Bootcamp",
      "cert-3-date": "2022",
      "cert-4-title": "Database Administrator",
      "cert-4-date": "6 Mar 2026",
      "cert-5-title": "Workshop Laravel",
      "cert-5-date": "31 Oct 2024",
      "cert-6-title": "Webinar Media Kreatif",
      "cert-6-date": "26 Oct 2024",
      "cert-7-title": "Data Competency",
      "cert-7-date": "1 Jul 2025",
      "cert-8-title": "Workshop ERD, LRS, UML",
      "cert-8-date": "25 Jun 2025",
      "cert-9-title": "UI/UX Arunika",
      "cert-9-date": "6 Jun 2026",
      "tools-badge": "Favorite Tools",
      "tools-title": "Tools & Technologies",
      "tools-description": "Tools and platforms I use to develop digital solutions, design, and data management.",
      "tool-figma": "Figma",
      "tool-vscode": "Visual Studio Code",
      "tool-laragon": "Laragon",
      "tool-github": "GitHub",
      "tool-vercel": "Vercel",
      "tool-gcp": "Google Cloud",
      "tool-drawio": "Draw.io",
      "tool-word": "MS Word",
      "tool-excel": "MS Excel",
      "tool-ppt": "MS PowerPoint",
      "tool-powerbi": "Power BI",
      "tool-html": "HTML",
      "tool-css": "CSS",
      "tool-bs": "Bootstrap",
      "tool-js": "JavaScript",
      "tool-php": "PHP",
      "tool-laravel": "Laravel",
      "tool-python": "Python",
      "tool-mysql": "MySQL",
      "tool-phpmyadmin": "PhpMyAdmin",
      "tool-chatgpt": "ChatGPT AI",
      "tool-gemini": "Gemini AI",
      "contact-badge": "Contact",
      "contact-title": "Get in Touch",
      "contact-description": "I am open for collaboration, new projects, and learning opportunities. Feel free to reach out via email or WhatsApp.",
      "location-label": "Location",
      "contact-loc-val": "Karawang, West Java, Indonesia",
      "wa-label": "WhatsApp",
      "contact-wa-val": "0895-3592-55382",
      "email-label": "Email",
      "contact-email-val": "rorojasminesetyoningsih@gmail.com",
      "github-label": "GitHub",
      "contact-github-val": "@rorojasmine4",
      "footer-text": "© 2026 Roro Jasmine Setyoningsih. All rights reserved."
    },
    id: {
      "nav-brand": "PORTOFOLIO",
      "nav-home": "Beranda",
      "nav-about": "Tentang",
      "nav-projects": "Proyek",
      "nav-education": "Pendidikan",
      "nav-skills": "Keahlian",
      "nav-certificates": "Sertifikat",
      "nav-tools": "Alat",
      "nav-contact": "Kontak",
      "lang-en": "EN",
      "lang-id": "ID",
      "share-button": "Bagikan",
      "theme-light": "Terang",
      "theme-dark": "Gelap",
      "hero-tagline": "Portofolio Profesional",
      "hero-name": "RORO JASMINE SETYONINGSIH",
      "hero-description": "Mahasiswi Sistem Informasi yang fokus pada solusi digital profesional, pengembangan platform, dan manajemen basis data.",
      "cta-download": "Unduh CV",
      "about-badge": "Tentang Saya",
      "about-title": "Siapa Saya?",
      "about-p1": "Saya adalah mahasiswi S1 Sistem Informasi di Universitas Bina Sarana Informatika Kampus Karawang dengan fokus pada integrasi teknologi dan manajemen data. Saya memiliki pengalaman nyata dalam membangun platform digital seperti MySems.my.id sebuah sistem manajemen acara sekolah yang dirancang untuk meningkatkan kolaborasi, perencanaan, dan pelaporan.",
      "about-p2": "Sebagai profesional muda, saya mahir dalam perancangan diagram sistem seperti UML (Use Case, Activity Diagram, dll.), ERD, dan LRD. Saya juga memiliki pemahaman yang kuat sebagai Database Administrator dengan pengalaman di DDL dan DML, serta kompetensi dalam teknologi Laravel, HTML, CSS, Bootstrap, JavaScript, Python, MySQL, dan ekosistem web terkait.",
      "about-p3": "Saya selalu berusaha menghadirkan solusi digital yang terstruktur, estetis, dan dapat diandalkan untuk memenuhi kebutuhan bisnis dan pendidikan.",
      "focus-title": "Fokus profesional",
      "focus-text": "Platform digital, manajemen data, dan pemodelan sistem yang akurat.",
      "expertise-title": "Keahlian teknis",
      "expertise-text": "Laravel, Bootstrap, JavaScript, Python, MySQL, dan desain UX/UI.",
      "database-title": "Administrasi basis data",
      "database-text": "Perencanaan dan validasi struktur data menggunakan ERD dan LRD.",
      "collaboration-title": "Kolaborasi kreatif",
      "collaboration-text": "Pendekatan desain yang responsif, profesional, dan terukur.",
      "projects-badge": "Proyek Unggulan",
      "projects-title": "Proyek Saya",
      "projects-description": "Proyek unggulan yang menunjukkan kemampuan saya dalam merancang sistem, mengelola database, dan menciptakan pengalaman pengguna yang intuitif.",
      "project-name": "MySems.my.id",
      "project-details": "School Event Management System yang dirancang untuk memudahkan perencanaan, koordinasi, dan pelaporan acara pendidikan. Platform ini mendukung pengelolaan kegiatan sekolah dengan dashboard intuitif, data manajemen peserta, dan proses validasi acara yang terstruktur.",
      "tech-laravel": "Laravel",
      "tech-bootstrap": "Bootstrap",
      "tech-mysql": "MySQL",
      "tech-js": "JavaScript",
      "project-button": "Kunjungi Proyek",
      "education-badge": "Pendidikan",
      "education-title": "Perjalanan Akademik",
      "education-description": "Perjalanan pendidikan yang mendasari kompetensi teknis saya dalam sistem informasi dan pengembangan digital.",
      "edu-1-school": "SMK Negeri 1 Karawang",
      "edu-1-date": "2021 - 2024",
      "edu-1-desc": "Pendidikan menengah kejuruan yang memperkuat dasar teknis dalam pemrograman, manajemen data, dan layanan teknologi informasi.",
      "edu-2-school": "S1 Universitas Bina Sarana Informatika",
      "edu-2-date": "2024 - Sekarang",
      "edu-2-desc": "Program studi Sistem Informasi yang berfokus pada teknologi digital, analisis sistem, dan manajemen informasi berkualitas.",
      "organization-title": "Pengalaman Organisasi",
      "organization-description": "Peran kepemimpinan dan pengalaman organisasi mahasiswa yang mendukung kemampuan kerja tim dan komunikasi saya.",
      "org-1-role": "Mengikuti Organisasi OSIS di SMKN 1 Karawang sebagai ketua dari Seksi Pembinaan Budi Pekerti Luhur & Akhlak Mulia.",
      "org-1-date": "2022 - 2023",
      "org-1-desc": "Memimpin program yang memperkuat karakter, etika, dan nilai moral melalui kegiatan ekstrakurikuler.",
      "org-2-role": "Sekretaris Departemen Dalam Negeri BEM UBSI Karawang",
      "org-2-date": "2024 - Sekarang",
      "org-2-desc": "Mengelola komunikasi internal dan koordinasi operasional departemen untuk organisasi mahasiswa.",
      "skills-badge": "Keahlian",
      "skills-title": "Kompetensi Inti",
      "skills-description": "Kumpulan kemampuan teknis dan interpersonal yang saya gunakan untuk menyelesaikan proyek dengan kualitas profesional.",
      "skills-hard": "Hard Skills",
      "skill-h1": "Web Design",
      "skill-h2": "Web Development",
      "skill-h3": "Office Administrative",
      "skills-soft": "Soft Skills",
      "skill-s1": "Communication",
      "skill-s2": "Teamwork",
      "skill-s3": "Leadership",
      "skill-s4": "Time Management",
      "skill-s5": "Problem Solving",
      "skill-s6": "Adaptability",
      "cert-badge": "Sertifikat",
      "cert-title": "Sertifikasi & Pencapaian",
      "cert-description": "Kumpulan sertifikat yang mendukung kredibilitas dan pengalaman saya dalam pengembangan digital dan kepemimpinan.",
      "cert-1-title": "Graphic Design Fundamental",
      "cert-1-date": "17–27 Feb 2025",
      "cert-2-title": "Dialog Perempuan Inovasi",
      "cert-2-date": "8 Nov 2024",
      "cert-3-title": "Product Development Bootcamp",
      "cert-3-date": "2022",
      "cert-4-title": "Database Administrator",
      "cert-4-date": "6 Mar 2026",
      "cert-5-title": "Workshop Laravel",
      "cert-5-date": "31 Okt 2024",
      "cert-6-title": "Webinar Media Kreatif",
      "cert-6-date": "26 Okt 2024",
      "cert-7-title": "Data Competency",
      "cert-7-date": "1 Jul 2025",
      "cert-8-title": "Workshop ERD, LRS, UML",
      "cert-8-date": "25 Juni 2025",
      "cert-9-title": "UI/UX Arunika",
      "cert-9-date": "6 Juni 2026",
      "tools-badge": "Alat Favorit",
      "tools-title": "Alat & Teknologi",
      "tools-description": "Alat dan platform yang saya gunakan untuk mengembangkan solusi digital, desain, dan manajemen data.",
      "tool-figma": "Figma",
      "tool-vscode": "Visual Studio Code",
      "tool-laragon": "Laragon",
      "tool-github": "GitHub",
      "tool-vercel": "Vercel",
      "tool-gcp": "Google Cloud",
      "tool-drawio": "Draw.io",
      "tool-word": "MS Word",
      "tool-excel": "MS Excel",
      "tool-ppt": "MS PowerPoint",
      "tool-powerbi": "Power BI",
      "tool-html": "HTML",
      "tool-css": "CSS",
      "tool-bs": "Bootstrap",
      "tool-js": "JavaScript",
      "tool-php": "PHP",
      "tool-laravel": "Laravel",
      "tool-python": "Python",
      "tool-mysql": "MySQL",
      "tool-phpmyadmin": "PhpMyAdmin",
      "tool-chatgpt": "ChatGPT AI",
      "tool-gemini": "Gemini AI",
      "contact-badge": "Kontak",
      "contact-title": "Hubungi Saya",
      "contact-description": "Saya terbuka untuk kolaborasi, proyek baru, dan kesempatan pembelajaran. Jangan ragu untuk menghubungi saya melalui email atau WhatsApp.",
      "location-label": "Lokasi",
      "contact-loc-val": "Karawang, Jawa Barat, Indonesia",
      "wa-label": "WhatsApp",
      "contact-wa-val": "0895-3592-55382",
      "email-label": "Email",
      "contact-email-val": "rorojasminesetyoningsih@gmail.com",
      "github-label": "GitHub",
      "contact-github-val": "@rorojasmine4",
      "footer-text": "© 2026 Roro Jasmine Setyoningsih. Semua hak dilindungi."
    }
  };

  function applyLanguage(lang) {
    i18nElements.forEach((element) => {
      const key = element.dataset.i18n;
      const translation = translations[lang] && translations[lang][key];
      if (translation) {
        element.textContent = translation;
      }
    });
    document.documentElement.lang = lang;
    localStorage.setItem("portfolioLang", lang);
    langButtons.forEach((button) => {
      button.classList.toggle("active-lang", button.dataset.lang === lang);
    });
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
    });
  });

  const savedLang = localStorage.getItem("portfolioLang");
  const defaultLang = savedLang || (navigator.language.startsWith("id") ? "id" : "en");
  applyLanguage(defaultLang);

  // Theme (dark / light) handling
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  function setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      if (metaTheme) metaTheme.setAttribute('content', '#0f0f12');
    } else {
      document.body.classList.remove('dark-mode');
      if (metaTheme) metaTheme.setAttribute('content', '#d8a5c4');
    }
    localStorage.setItem('portfolioTheme', theme);
    updateThemeUI(theme);
  }

  function updateThemeUI(theme) {
    const lang = document.documentElement.lang || defaultLang;
    const t = translations[lang] || translations['en'];
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-moon';
      themeLabel.textContent = t['theme-dark'] || 'Dark';
      themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      themeIcon.className = 'fas fa-sun';
      themeLabel.textContent = t['theme-light'] || 'Light';
      themeToggle.setAttribute('aria-pressed', 'false');
    }
  }

  themeToggle && themeToggle.addEventListener('click', function () {
    const current = localStorage.getItem('portfolioTheme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  // Initialize theme from localStorage or prefers-color-scheme
  const savedTheme = localStorage.getItem('portfolioTheme');
  const initialTheme = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(initialTheme);

  if (navigator.share) {
    shareButton.addEventListener("click", function () {
      navigator.share({
        title: pageTitle,
        url: pageUrl,
      }).catch((error) => {
        console.warn("Share failed", error);
      });
    });
  } else {
    shareButton.addEventListener("click", function () {
      navigator.clipboard.writeText(pageUrl)
        .then(() => {
          shareButton.innerHTML = '<i class="fas fa-check me-2"></i><span data-i18n="share-button">Link copied</span>';
          setTimeout(() => {
            shareButton.innerHTML = '<i class="fas fa-share-alt me-2"></i><span data-i18n="share-button">Share</span>';
            applyLanguage(document.documentElement.lang); // Re-apply text
          }, 1800);
        })
        .catch(() => {
          window.prompt("Copy this link to share:", pageUrl);
        });
    });
  }

  const observerOptions = {
    threshold: 0.15,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  const revealItems = document.querySelectorAll("section, .card, .cert-card, .tool-card, .contact-item");
  revealItems.forEach((item) => {
    item.classList.add("fade-up");
    revealObserver.observe(item);
  });

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = Array.from(navLinks).map((link) => document.querySelector(link.getAttribute("href")));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target ? entry.target.id : null;
      if (!id) return;
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, { threshold: 0.25 });

  sections.forEach((section) => {
    if (section) sectionObserver.observe(section);
  });
});