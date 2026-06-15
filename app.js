// ============================================================
// PICADOO WEB — Main JavaScript
// ============================================================

// ── Scroll Animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));

// ── Sticky Nav ──
const nav = document.getElementById('nav');
if (nav) {
  const alwaysScrolled = nav.classList.contains('scrolled');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', alwaysScrolled || window.scrollY > 40);
  }, { passive: true });
}

// ── Mobile Menu ──
const burger = document.getElementById('navBurger');
if (burger) {
  const navLinksMenu = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');

  const setMenuOpen = (open) => {
    navLinksMenu?.classList.toggle('nav-open', open);
    navCta?.classList.toggle('nav-open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  };

  burger.setAttribute('aria-expanded', 'false');
  burger.addEventListener('click', () => {
    setMenuOpen(burger.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      burger.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (nav && !nav.contains(event.target)) setMenuOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuOpen(false);
  });
}

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      document.querySelector('.nav-links')?.classList.remove('nav-open');
      document.querySelector('.nav-cta')?.classList.remove('nav-open');
      burger?.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
    }
  });
});

// ── Floating badge parallax on hero ──
const floatBadges = document.querySelectorAll('.float-badge');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    floatBadges.forEach((badge, i) => {
      const speed = 0.05 + i * 0.02;
      badge.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

// ── Number counter animation ──
function animateCount(el, target, suffix = '') {
  let start = 0;
  const duration = 1500;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(num => {
        const text = num.textContent;
        if (text.includes('5K')) animateCount(num, 5, 'K+');
        else if (text.includes('50')) animateCount(num, 50, '+');
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ── Active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = '#' + section.id;
    }
  });
  navLinks.forEach(link => {
    link.style.opacity = link.getAttribute('href') === current ? '1' : '0.75';
    link.style.fontWeight = link.getAttribute('href') === current ? '800' : '600';
  });
}, { passive: true });
