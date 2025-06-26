const menu = document.querySelector("nav");
const openBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("menu-close");

openBtn.addEventListener("click", () => {
  menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});
