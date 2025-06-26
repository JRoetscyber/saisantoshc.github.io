
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
const sections = ['about', 'projects', 'contact'];
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 80;
  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      document.querySelector('.nav-links a[href="#'+id+'"]').classList.add('active');
    }
  });
});

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
}
revealOnScroll('.about-block');
revealOnScroll('.project-card');

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
