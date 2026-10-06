const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

function closeMenu() {
  menuButton.classList.remove('open');
  mobileMenu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

menuButton.addEventListener('click', () => {
  const opening = !mobileMenu.classList.contains('open');
  menuButton.classList.toggle('open', opening);
  mobileMenu.classList.toggle('open', opening);
  menuButton.setAttribute('aria-expanded', String(opening));
  mobileMenu.setAttribute('aria-hidden', String(!opening));
  document.body.style.overflow = opening ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
