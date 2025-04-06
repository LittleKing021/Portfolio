const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', (e) => {
  // No stopPropagation here, just toggle
  hamburger.classList.toggle('active'); // Toggle active state for hamburger
  navMenu.classList.toggle('active'); // Toggle menu visibility
  document.body.classList.toggle('no-scroll'); // Prevent body scroll when menu is open
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const isClickInsideMenu = navMenu.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});