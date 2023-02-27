'use strict';

const header = document.querySelector('header');
const primaryNav = document.querySelector('.primary-navigation');
const toggleNav = document.querySelector('.mobile-nav-toggle');
const toggleNavIcon = document.querySelector('.mobile-nav-toggle i');

const accBtn = document.querySelectorAll('.accordion-btn');

const privacyModal = document.querySelector('.modal-container');
const policy = document.querySelectorAll('.policy');
const btnClosePrivacy = document.querySelector('.btn-close-modal');
const modalOverlay = document.querySelector('.modal-overlay');

const scrollAbout = document.querySelectorAll('.scroll-into-about');
const scrollOffering = document.querySelector('.scroll-into-offering');
const scrollJobs = document.querySelector('.scroll-into-jobs');
const scrollProjects = document.querySelector('.scroll-into-projects');
const scrollContact = document.querySelectorAll('.scroll-into-contact');

const sectionAbout = document.querySelector('.about');
const sectionOffering = document.querySelector('.offering');
const sectionJobs = document.querySelector('.jobs');
const sectionProjects = document.querySelector('.projects');
const sectionContact = document.querySelector('.contact');

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (window.scrollY <= 0) {
    header.style.top = 0;
  }

  if (prevScrollPos > currentScrollPos) {
    header.style.top = 0;
  } else {
    header.style.top = '-200px';
  }
  prevScrollPos = currentScrollPos;
};

const hideSidebar = function () {
  primaryNav.setAttribute('data-visible', false);
  toggleNav.setAttribute('aria-expanded', false);

  toggleNavIcon.classList.remove('fa-xmark');
  toggleNavIcon.classList.add('fa-bars');
};

const hideHeader = function () {
  header.style.top = '-999px';
};

policy.forEach((el) =>
  el.addEventListener('click', () => {
    privacyModal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
  })
);

btnClosePrivacy.addEventListener('click', () => {
  privacyModal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
});

/* ------- NAVIGATION BAR ------- */
toggleNav.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    toggleNav.setAttribute('aria-expanded', true);

    toggleNavIcon.classList.remove('fa-bars');
    toggleNavIcon.classList.add('fa-xmark');
  } else {
    hideSidebar();
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

/* ------- SCROLLING ------- */
scrollAbout.forEach((btn) =>
  btn.addEventListener('click', () => {
    sectionAbout.scrollIntoView();
    hideSidebar();
    hideHeader();
  })
);

scrollOffering.addEventListener('click', () => {
  sectionOffering.scrollIntoView();
  hideSidebar();
});

scrollJobs.addEventListener('click', () => {
  sectionJobs.scrollIntoView();
  hideSidebar();
});

scrollProjects.addEventListener('click', () => {
  sectionProjects.scrollIntoView();
  hideSidebar();
});

scrollContact.forEach((btn) =>
  btn.addEventListener('click', () => {
    sectionContact.scrollIntoView();
    hideSidebar();
  })
);
