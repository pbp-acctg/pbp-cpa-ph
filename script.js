// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header shadow once the page has scrolled
const siteHeader = document.querySelector('.site-header');
const onScroll = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navCta = document.querySelector('.nav-cta');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navCta.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('#mainNav a, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navCta.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Ledger rows: click / keyboard to expand
document.querySelectorAll('.ledger-row').forEach(row => {
  const toggle = () => row.classList.toggle('is-open');
  row.addEventListener('click', toggle);
  row.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.ledger-row, .timeline-item, .about-row, .contact-row, .trust-item'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => io.observe(el));

// Contact form — static demo behavior
const form = document.getElementById('quoteForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Demo only — no message was sent. Connect this form to Formspree or your backend (see README) to receive real submissions.';
  formNote.style.color = '#AD8A3F';
});
