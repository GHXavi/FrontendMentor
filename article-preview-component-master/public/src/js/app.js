const btnShare = document.getElementById("btn-share");
const btnShareIconn = document.getElementById("btn-share-icon");

const modalShare = document.getElementById("share-modal");

btnShare.addEventListener("click", function () {
  modalShare.classList.toggle("hidden");
  modalShare.classList.toggle("flex");

  /* Eliminar si existen las clases */
  btnShare.classList.toggle("bg-light-grayish-blue");
  btnShareIconn.classList.toggle("fill-[#6E8098]");

  /* Agregar si no existen las clases */
  btnShare.classList.toggle("bg-desaturated-dark-blue");
  btnShareIconn.classList.toggle("fill-light-grayish-blue");
});
