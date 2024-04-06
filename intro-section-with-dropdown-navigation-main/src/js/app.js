const btnMenu = document.querySelector("#btnMenu");
const btnCloseMenu = document.querySelector("#btnCloseMenu");

const bgNav = document.querySelector("#bgNav");
const navBar = document.querySelector("#navBar");

btnMenu.addEventListener("click", () => {
  toggleMenu();
});

btnCloseMenu.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  bgNav.classList.toggle("hidden");
  btnCloseMenu.classList.toggle("hidden");
  navBar.classList.toggle("hidden");
  btnMenu.classList.toggle("hidden");
}

/* NAV Desplegable */
const btnFeatures = document.querySelector("#btnFeatures");
const btnCompany = document.querySelector("#btnCompany");

const ulFeatures = document.querySelector("#ulFeatures");
const ulCompany = document.querySelector("#ulCompany");

const imgFeatures = document.querySelector("#imgFeatures");
const imgCompany = document.querySelector("#imgCompany");

btnFeatures.addEventListener("click", () => {
  ulFeatures.classList.toggle("hidden");
  iconFeatures.classList.toggle("rotate-180");
});

btnCompany.addEventListener("click", () => {
  ulCompany.classList.toggle("hidden");
  iconCompany.classList.toggle("rotate-180");
});
