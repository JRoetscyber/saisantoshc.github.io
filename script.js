// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

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

// Contact form (no backend, just UX)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
  alert('Thank you for reaching out! I will get back to you soon.');
});

// Optional: Dark mode toggle (uncomment to enable)
/*
const toggle = document.createElement('button');
toggle.textContent = '🌙';
toggle.style = 'margin-left:1rem;font-size:1.2rem;background:none;border:none;cursor:pointer;';
document.querySelector('nav').appendChild(toggle);
toggle.onclick = () => {
  document.documentElement.classList.toggle('dark');
  if(document.documentElement.classList.contains('dark')) {
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
};
*/

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
