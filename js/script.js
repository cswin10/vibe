function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  const body = document.body;
  
  // Create overlay if it doesn't exist
  let overlay = document.querySelector('.nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.addEventListener('click', toggleMenu);
    body.appendChild(overlay);
  }
  
  // Toggle classes
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (navMenu.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

// Close menu when clicking on nav links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});

// Dropdown functionality for services
function toggleDropdown(header) {
  const dropdownItem = header.parentElement;
  const isActive = dropdownItem.classList.contains('active');
  
  // Close all dropdowns first
  const allDropdowns = document.querySelectorAll('.dropdown-item');
  allDropdowns.forEach(item => {
    item.classList.remove('active');
  });
  
  // If the clicked dropdown wasn't active, open it
  if (!isActive) {
    dropdownItem.classList.add('active');
  }
}
