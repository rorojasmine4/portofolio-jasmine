document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.getElementById("shareButton");
  const pageUrl = window.location.href;
  const pageTitle = document.title;
  const langButtons = document.querySelectorAll("[data-lang]");
  const i18nElements = document.querySelectorAll("[data-i18n]");

  const translations = {
    en: {
      "nav-home": "Home",
      "nav-about": "About",
      "nav-projects": "Projects",
      "nav-education": "Education",
      "nav-skills": "Skills",
      "nav-certificates": "Certificates",
      "nav-tools": "Tools",
      "nav-contact": "Contact",
      "share-button": "Share",
      "hero-tagline": "Professional Portfolio",
      "hero-description": "Information Systems student focused on professional digital solutions, platform development, and database management.",
      "cta-download": "Download CV",
      "cta-live": "Visit Live Site",
      "about-title": "About Me",
      "about-p1": "I am an Information Systems undergraduate at Universitas Bina Sarana Informatika Karawang campus with a focus on technology integration and data management. I have real experience building digital platforms like MYsems.my.id — a school event management system designed to improve collaboration, planning, and reporting.",
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
      "project-name": "MYsems.my.id",
      "project-details": "A School Event Management System designed to simplify planning, coordination, and reporting for educational events. The platform supports event management with an intuitive dashboard, participant data management, and structured validation workflows.",
      "project-button": "Visit Project",
      "contact-badge": "Contact",
      "contact-title": "Get in Touch",
      "contact-description": "I am open for collaboration, new projects, and learning opportunities. Feel free to reach out via email or WhatsApp.",
      "location-label": "Location",
      "wa-label": "WhatsApp",
      "email-label": "Email",
      "github-label": "GitHub",
      "footer-text": "© 2026 Roro Jasmine Setyoningsih. Portfolio built with Bootstrap 5, FontAwesome, and Devicon."
    },
    id: {
      "nav-home": "Beranda",
      "nav-about": "Tentang",
      "nav-projects": "Proyek",
      "nav-education": "Pendidikan",
      "nav-skills": "Keahlian",
      "nav-certificates": "Sertifikat",
      "nav-tools": "Alat",
      "nav-contact": "Kontak",
      "share-button": "Bagikan",
      "hero-tagline": "Portofolio Profesional",
      "hero-description": "Mahasiswi Sistem Informasi yang fokus pada solusi digital profesional, pengembangan platform, dan manajemen basis data.",
      "cta-download": "Unduh CV",
      "cta-live": "Kunjungi Situs",
      "about-title": "Tentang Saya",
      "about-p1": "Saya adalah mahasiswi S1 Sistem Informasi di Universitas Bina Sarana Informatika Kampus Karawang dengan fokus pada integrasi teknologi dan manajemen data. Saya memiliki pengalaman nyata dalam membangun platform digital seperti MYsems.my.id — sebuah sistem manajemen acara sekolah yang dirancang untuk meningkatkan kolaborasi, perencanaan, dan pelaporan.",
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
      "project-name": "MYsems.my.id",
      "project-details": "School Event Management System yang dirancang untuk memudahkan perencanaan, koordinasi, dan pelaporan acara pendidikan. Platform ini mendukung pengelolaan kegiatan sekolah dengan dashboard intuitif, data manajemen peserta, dan proses validasi acara yang terstruktur.",
      "project-button": "Kunjungi Proyek",
      "contact-badge": "Kontak",
      "contact-title": "Hubungi Saya",
      "contact-description": "Saya terbuka untuk kolaborasi, proyek baru, dan kesempatan pembelajaran. Jangan ragu untuk menghubungi saya melalui email atau WhatsApp.",
      "location-label": "Lokasi",
      "wa-label": "WhatsApp",
      "email-label": "Email",
      "github-label": "GitHub",
      "footer-text": "© 2026 Roro Jasmine Setyoningsih. Portofolio dibuat dengan Bootstrap 5, FontAwesome, dan Devicon."
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
          shareButton.innerHTML = '<i class="fas fa-check me-2"></i>' +
            (translations[defaultLang]["share-button"] || "Link copied");
          setTimeout(() => {
            shareButton.innerHTML = '<i class="fas fa-share-alt me-2"></i>' +
              (translations[defaultLang]["share-button"] || "Share");
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