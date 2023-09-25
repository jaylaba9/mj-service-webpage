'use strict';

const header = document.querySelector('header');
const primaryNav = document.querySelector('.primary-navigation');
const toggleNav = document.querySelector('.mobile-nav-toggle');
const toggleNavIcon = document.querySelector('.mobile-nav-toggle i');

const accBtn = document.querySelectorAll('.accordion-btn');

const contactForm = document.getElementById('contact-form');
const privacyModal = document.querySelector('.modal-container');
const policy = document.querySelectorAll('.policy');
const btnClosePrivacy = document.querySelector('.btn-close-modal');
const modalOverlay = document.querySelector('.modal-overlay');

const scrollAbout = document.querySelectorAll('.scroll-into-about');
const scrollOffering = document.querySelector('.scroll-into-offering');
const scrollJobs = document.querySelector('.scroll-into-jobs');
const scrollProjects = document.querySelector('.scroll-into-projects');
const scrollContact = document.querySelectorAll('.scroll-into-contact');

const sectionHero = document.querySelector('.hero');
const sectionAbout = document.querySelector('.about');
const sectionOffering = document.querySelector('.offering');
const sectionJobs = document.querySelector('.jobs');
const sectionProjects = document.querySelector('.projects');
const sectionContact = document.querySelector('.contact');

/* ------- EVENT HANDLERS------- */

// contact form handler
emailjs.init('ljmMqFBC_IAa-DIBt');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const serviceID = 'service_1g46xj3';
  const templateID = 'template_kogorzk';

  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log('SUCCESS', response.status, response.text);
      alert('Twoja wiadomość została wysłana. Dziękujemy za kontakt.');
    },
    (error) => {
      console.log('FAILED', error);
      alert('Nie udało się wysłać wiadomości. Spróbuj ponownie.');
    }
  );

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
});

// modal window handler
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

/* ------- OTHER FUNCTIONS ------- */

// checks if an element is in viewport
const isInViewport = function (element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// hiding header on scrolling down, showing when scrolling up
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos || isInViewport(sectionHero)) {
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
  header.style.top = '-200px';
};

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
