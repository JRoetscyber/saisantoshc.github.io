document.addEventListener('DOMContentLoaded', function() {
  // Navbar hamburger toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('change', function() {
      navLinks.classList.toggle('open', navToggle.checked);
    });
    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.checked = false;
      });
    });
    // Close nav if window resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        navLinks.classList.remove('open');
        navToggle.checked = false;
      }
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Smooth scroll for hero CTA button
  const ctaBtn = document.querySelector('.hero .cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Active nav link on scroll
  const sections = ['about', 'work-experience', 'tools', 'certifications', 'projects', 'contact'];
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 80;
    sections.forEach(id => {
      const sec = document.getElementById(id);
      if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        const navLink = document.querySelector('.nav-links a[href="#'+id+'"]');
        if (navLink) navLink.classList.add('active');
      }
    });
  });

  // Animate contact-info fade-in
  function fadeInContactInfo() {
    const el = document.querySelector('.contact-info');
    if (!el) return;
    const trigger = window.innerHeight * 0.92;
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.animationPlayState = 'running';
      window.removeEventListener('scroll', fadeInContactInfo);
    }
  }
  window.addEventListener('scroll', fadeInContactInfo);
  window.addEventListener('load', fadeInContactInfo);

  // Fade/slide in on scroll
  function revealOnScroll(selector, visibleClass = 'visible') {
    const elements = document.querySelectorAll(selector);
    function reveal() {
      const trigger = window.innerHeight * 0.92;
      elements.forEach((el, i) => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
          setTimeout(() => el.classList.add(visibleClass), i * 120);
        }
      });
    }
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);
    reveal();
  }
  revealOnScroll('.about-block');
  revealOnScroll('.project-card');
  revealOnScroll('.work-card');
  revealOnScroll('.tools-list');
  revealOnScroll('.certifications-list');
});
// Responsive nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    // Close menu if window resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// ---- Experience Section Data & Rendering ----
const experienceData = [
  {
    job: "Data Analyst",
    company: "Insurigo",
    date: "Sept 2024 - June 2025",
    desc: "Tableau dashboards, SQL analytics, Excel automation for insurance metrics and reporting.",
    tech: ["Tableau", "SQL", "Excel", "Automation"]
  },
  {
    job: "Senior Software Engineer",
    company: "Insurigo",
    date: "July 2021 - Aug 2023",
    desc: "REST APIs (Python/Django), MySQL/PostgreSQL, CI/CD, React, MongoDB, Azure DevOps.",
    tech: ["Python", "Django", "React", "Azure", "CI/CD"]
  },
  {
    job: "Full Stack Developer",
    company: "Apollo Telehealth",
    date: "Jan 2021 – Jun 2021",
    desc: "React, TypeScript, Node.js, Express, Angular, MongoDB, large-scale data migration.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Angular", "MongoDB"]
  },
  {
    job: "Machine Learning Engineer",
    company: "Egen AI",
    date: "Jan 2020 - Jan 2021",
    desc: "Machine learning solutions (details on request).",
    tech: ["Machine Learning", "Python", "AI"]
  }
];

function renderExperienceSection() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;
  // Sort by most recent (assuming date order in array)
  container.innerHTML = experienceData.map(exp => `
    <div class="timeline-entry">
      <span class="timeline-dot"></span>
      <div class="timeline-content">
        <div class="timeline-header">
          <span>
            <span class="timeline-job">${exp.job}</span>
            <span class="timeline-company">@ ${exp.company}</span>
          </span>
          <span class="timeline-date">${exp.date}</span>
        </div>
        <div class="timeline-desc">${exp.desc}</div>
        <div class="timeline-tags">
          ${exp.tech.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}
renderExperienceSection();

// ---- Experience Section Animation ----
function animateTimelineEntries() {
  const entries = document.querySelectorAll('.timeline-entry');
  function reveal() {
    const trigger = window.innerHeight * 0.92;
    entries.forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        setTimeout(() => el.classList.add('visible'), i * 120);
      }
    });
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
  reveal();
}
animateTimelineEntries();

// ---- Certifications Section Data & Rendering ----
const certificationsData = [
  {
    title: "Microsoft Azure Fundamentals",
    org: "Microsoft",
    date: "2023",
    desc: "Fundamental knowledge of cloud concepts, Azure services, workloads, security, and privacy.",
    tags: ["Azure", "Cloud", "Fundamentals"]
  },
  {
    title: "Graduate Certification – UTD Applied Machine Learning",
    org: "University of Texas at Dallas",
    date: "2022",
    desc: "Graduate-level coursework in applied machine learning and data science.",
    tags: ["Machine Learning", "Data Science", "Python"]
  }
];

function renderCertificationsSection() {
  const container = document.getElementById('certifications-timeline');
  if (!container) return;
  container.innerHTML = certificationsData.map(cert => `
    <div class="certification-entry">
      <span class="certification-dot"></span>
      <div class="certification-content">
        <div class="timeline-header">
          <span>
            <span class="certification-title">${cert.title}</span>
            <span class="certification-org">@ ${cert.org}</span>
          </span>
          <span class="certification-date">${cert.date}</span>
        </div>
        <div class="certification-desc">${cert.desc}</div>
        <div class="certification-tags">
          ${cert.tags.map(tag => `<span class="certification-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}
renderCertificationsSection();

// ---- Certifications Section Animation ----
function animateCertificationEntries() {
  const entries = document.querySelectorAll('.certification-entry');
  function reveal() {
    const trigger = window.innerHeight * 0.92;
    entries.forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        setTimeout(() => el.classList.add('visible'), i * 120);
      }
    });
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
  reveal();
}
animateCertificationEntries();

// ---- Tools Section Data & Rendering ----
const toolsData = [
  {
    title: "Frontend",
    desc: "Modern UI frameworks and libraries for building interactive web apps.",
    tags: ["React", "Angular", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Backend",
    desc: "Robust server-side development and API design.",
    tags: ["Node.js", "Express", "Django", "Flask", "Python"]
  },
  {
    title: "Databases",
    desc: "Relational and NoSQL database management.",
    tags: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud platforms, CI/CD, and automation tools.",
    tags: ["Azure", "Azure DevOps", "Git", "CI/CD"]
  },
  {
    title: "Data & AI",
    desc: "Data analytics, visualization, and machine learning.",
    tags: ["Tableau", "Power BI", "Excel", "Machine Learning", "NLP"]
  }
];

function renderToolsSection() {
  const container = document.getElementById('tools-timeline');
  if (!container) return;
  container.innerHTML = toolsData.map(tool => `
    <div class="tool-entry">
      <span class="tool-dot"></span>
      <div class="tool-content">
        <div class="tool-title">${tool.title}</div>
        <div class="tool-desc">${tool.desc}</div>
        <div class="tool-tags">
          ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}
renderToolsSection();

// ---- Tools Section Animation ----
function animateToolEntries() {
  const entries = document.querySelectorAll('.tool-entry');
  function reveal() {
    const trigger = window.innerHeight * 0.92;
    entries.forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        setTimeout(() => el.classList.add('visible'), i * 120);
      }
    });
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
  reveal();
}
animateToolEntries();

// Theme toggle logic (for data-theme on <html>)
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.onclick = function() {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme');
      html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    };
  }
});

// Experience Section: Add glow effect that follows mouse cursor
document.addEventListener('DOMContentLoaded', function() {
  // Helper to add glow effect to a selector
  function addGlowEffect(selector) {
    document.querySelectorAll(selector).forEach(entry => {
      // Add the glow div if not present
      if (!entry.querySelector('.glow')) {
        const glow = document.createElement('div');
        glow.className = 'glow';
        entry.appendChild(glow);
      }
      entry.addEventListener('mousemove', function(e) {
        const rect = entry.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        entry.querySelector('.glow').style.setProperty('--glow-x', `${x}%`);
        entry.querySelector('.glow').style.setProperty('--glow-y', `${y}%`);
      });
      entry.addEventListener('mouseleave', function() {
        entry.querySelector('.glow').style.setProperty('--glow-x', `50%`);
        entry.querySelector('.glow').style.setProperty('--glow-y', `50%`);
      });
    });
  }

  addGlowEffect('.timeline-entry');
  addGlowEffect('.project-card');
  addGlowEffect('.tool-entry');
  addGlowEffect('.certification-entry');
});
