const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click event from propagating
  hamburger.classList.toggle('active'); // Toggle active state for hamburger
  navMenu.classList.toggle('active'); // Toggle menu visibility
  document.body.classList.toggle('no-scroll'); // Prevent body scroll when menu is open
});

// Close menu when clicking outside
navMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click event from propagating
});

document.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
  document.body.classList.remove('no-scroll');
});