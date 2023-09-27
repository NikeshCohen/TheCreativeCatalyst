const slideUp = {
  distance: "80%",
  origin: "bottom",
  easing: "ease",
  delay: 450,
  mobile: false,
};

const slideDown = {
  distance: "20%",
  origin: "top",
  easing: "ease",
  delay: 450,
  mobile: false,
};

const slideRight = {
  distance: "150%",
  origin: "left",
  easing: "ease",
  delay: 450,
  mobile: false,
};

const slideLeft = {
  distance: "150%",
  origin: "right",
  easing: "ease",
  delay: 450,
  mobile: false,
};

const scale = {
  easing: "ease",
  scale: 0.85,
  delay: 450,
  mobile: false,
};

const rotate = {
  easing: "ease",
  rotate: {
    x: 20,
    z: -40,
  },
  delay: 450,
  mobile: false,
};

//////////// Hero ////////////

ScrollReveal().reveal(".hero-img-box", slideRight);
ScrollReveal().reveal(".hero-text", slideLeft);

//////////// Services ////////////

ScrollReveal().reveal(".services-heading", slideUp);
ScrollReveal().reveal(".service-icon", scale);
ScrollReveal().reveal(".service-item-heading", slideUp);
ScrollReveal().reveal(".service-item-heading", slideUp);
ScrollReveal().reveal(".attr-list", slideUp);

//////////// Our-mission ////////////

ScrollReveal().reveal(".our-mission-heading", slideUp);
ScrollReveal().reveal(".attr-row", scale);

//////////// Portfolio ////////////

ScrollReveal().reveal(".portfolio-heading", slideUp);
ScrollReveal().reveal(".portfolio-subheading", slideUp);
ScrollReveal().reveal(".portfolio-subheading", { delay: 600,  mobile: false, });
ScrollReveal().reveal(".video", rotate);
ScrollReveal().reveal(".btn-container", slideLeft);

//////////// FAQ ////////////

ScrollReveal().reveal(".faq-heading", slideDown);
ScrollReveal().reveal(".faq-container-main", slideDown);
