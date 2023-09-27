const navbar = document.querySelector("header");
const menu = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".nav-link");
const footerLinks = document.querySelectorAll(".footer-link");
const menuBtn = document.querySelector(".hamburger");
const faqs = document.querySelectorAll(".faq-container");
const copyright = document.querySelector(".copyright");

///// Sticky Nav /////

window.onscroll = function () {
  stickyHeader();
};

let sticky = navbar.offsetTop;

const stickyHeader = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

///// Hamburger Menu /////

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active");
  menu.classList.toggle("show");
});

///// Hamburger Menu Links & Remove #  /////

const removeHash = () => {
  history.replaceState(
    "",
    document.title,
    window.location.origin + window.location.pathname + window.location.search
  );
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("is-active");
    menu.classList.remove("show");

    setTimeout(() => {
      removeHash();
    }),
      5;
  });
});

footerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      removeHash();
    }),
      1;
  });
});

setTimeout(() => {
  history.replaceState(
    "",
    document.title,
    window.location.origin + window.location.pathname + window.location.search
  );
}, 2);

///// FAQ Section /////

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

///// Footer Section /////

const date = new Date();
let year = date.getFullYear();
copyright.innerHTML = `Copyright © ${year} by The Creative Catalyst PTY(LTD). All rights reserved`;
