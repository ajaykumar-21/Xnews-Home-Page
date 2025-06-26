const menu = document.querySelector("nav");
const openBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("menu-close");

openBtn.addEventListener("click", () => {
  menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});

window.addEventListener("load", () => {
  const heroImg = document.getElementById("hero-image");

  if (window.innerWidth < 1000) {
    heroImg.src = "assets/image-web-3-mobile.jpg";
  } else {
    heroImg.src = "assets/image-web-3-desktop.jpg";
  }
});
