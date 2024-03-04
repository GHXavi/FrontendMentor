const btnShowMenu = document.querySelector("#btnShowMenu");
const btnCloseMenu = document.querySelector("#btnCloseMenu");
const navbar = document.querySelector("#navbar");

btnShowMenu.addEventListener("click", () => {
  btnShowMenu.classList.add("hidden");
  btnCloseMenu.classList.remove("hidden");
  navbar.classList.toggle("-translate-x-full");
});

btnCloseMenu.addEventListener("click", () => {
  btnShowMenu.classList.remove("hidden");
  btnCloseMenu.classList.add("hidden");
  navbar.classList.toggle("-translate-x-full");
});
