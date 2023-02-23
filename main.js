"use strict";

const primaryNav = document.querySelector(".primary-navigation");
const toggleNav = document.querySelector(".mobile-nav-toggle");
const toggleNavIcon = document.querySelector(".mobile-nav-toggle i");

const accBtn = document.querySelectorAll(".accordion-btn");

const scrollAbout = document.querySelectorAll(".scroll-into-about");
const scrollOffering = document.querySelector(".scroll-into-offering");
const scrollJobs = document.querySelector(".scroll-into-jobs");
const scrollProjects = document.querySelector(".scroll-into-projects");
const scrollContact = document.querySelectorAll(".scroll-into-contact");

const sectionAbout = document.querySelector(".about");
const sectionOffering = document.querySelector(".offering");
const sectionJobs = document.querySelector(".jobs");
const sectionProjects = document.querySelector(".projects");
const sectionContact = document.querySelector(".contact");

/* ------- NAVIGATION BAR ------- */
toggleNav.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    toggleNav.setAttribute("aria-expanded", true);

    toggleNavIcon.classList.remove("fa-bars");
    toggleNavIcon.classList.add("fa-xmark");
  } else {
    primaryNav.setAttribute("data-visible", false);
    toggleNav.setAttribute("aria-expanded", false);

    toggleNavIcon.classList.remove("fa-xmark");
    toggleNavIcon.classList.add("fa-bars");
  }
});

/* ------- ACCORDION ------- */
accBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    // toggle between hiding and showing the active panel
    const panel = this.nextElementSibling;
    console.log(panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
);

/* ------- SCROLLING ------- */
scrollAbout.forEach((btn) =>
  btn.addEventListener("click", () => {
    sectionAbout.scrollIntoView();
  })
);

scrollOffering.addEventListener("click", () => {
  sectionOffering.scrollIntoView();
});

scrollJobs.addEventListener("click", () => {
  sectionJobs.scrollIntoView();
});

scrollProjects.addEventListener("click", () => {
  sectionProjects.scrollIntoView();
});

scrollContact.forEach((btn) =>
  btn.addEventListener("click", () => {
    sectionContact.scrollIntoView();
  })
);
