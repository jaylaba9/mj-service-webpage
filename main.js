'use strict';

const primaryNav = document.querySelector('.primary-navigation');
const toggleNav = document.querySelector('.mobile-nav-toggle');
const toggleNavIcon = document.querySelector('.mobile-nav-toggle i');

toggleNav.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    toggleNav.setAttribute('aria-expanded', true);

    toggleNavIcon.classList.remove('fa-bars');
    toggleNavIcon.classList.add('fa-xmark');
  } else {
    primaryNav.setAttribute('data-visible', false);
    toggleNav.setAttribute('aria-expanded', false);

    toggleNavIcon.classList.remove('fa-xmark');
    toggleNavIcon.classList.add('fa-bars');
  }
});
