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
