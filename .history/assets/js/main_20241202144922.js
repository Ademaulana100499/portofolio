const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// *Add blur to header*//
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
// Email js
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_sdhvkru",
      "template_eizoi7m",
      "#contact-form",
      "x-9QR59Q68dJyMtjv"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        //clear input fields
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent = "Message not sent (services error) ❌ ";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// show scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* SCROLL SECTION ACTIVE LINK */
const section = document.querySelectorAll(".section");
const scrollActive = () => {
  const scrollDown = window.scrollY;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});
sr.reveal(".home__data, .experience, .skills, .contact__container");
sr.reveal(".home__img", { delay: 600 });
sr.reveal(".home__scroll", { delay: 800 });
sr.reveal(".project__card, .services__card", { interval: 100 });
sr.reveal(".about__content", { origin: "right" });
sr.reveal(".about__img", { origin: "left" });

// dark light theme
let lightmode = localStorage.getItem("light-mode");
const themeSwitch = document.getElementById("theme-switch");

const enableLightMode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("light-mode", "active");
};

const disableLightMode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("light-mode", null);
};

if (lightmode === "active") enableLightMode();

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  lightmode !== "active" ? enableLightMode() : enableDarkMode();
});
