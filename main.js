'use strict';

const primaryNav = document.querySelector('.primary-navigation');
const toggleNav = document.querySelector('.mobile-nav-toggle');
const toggleNavIcon = document.querySelector('.mobile-nav-toggle i');

const accBtn = document.querySelectorAll('.accordion-btn');

/* ------- NAVIGATION ------- */
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

/* ------- ACCORDION ------- */
accBtn.forEach((btn) =>
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    // toggle between hiding and showing the active panel
    const panel = this.nextElementSibling;
    console.log(panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  })
);
