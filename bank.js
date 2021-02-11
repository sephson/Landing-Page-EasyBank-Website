//
let hamburger = document.querySelector("#btnHamburger"); // selects the menu hamburger
let header = document.querySelector(".header"); // selects the header
let overlay = document.querySelector(".overlay");
let fadeElements = document.querySelector(".has-fade");
let body = document.querySelector("body");
let hero = document.querySelector(".hero__image");

hamburger.addEventListener("click", () => {
  console.log("clicked");

  if (header.classList.contains("open")) {
    // if the header contains open class remove
    header.classList.remove("open");
    body.classList.remove("noscroll");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    fadeElements.classList.add("has-fade");
    hero.classList.add("hero__image");
  } else {
    header.classList.add("open");
    // if it does add open to the header
    body.classList.add("noscroll");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    fadeElements.classList.remove("has-fade");
    hero.classList.remove("hero__image");
  }
});
