const form = document.querySelector("#form");
const inputEmail = document.querySelector("#inputEmail");
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let emailValido = validateEmail(inputEmail.value);

  if (emailValido) {
    inputEmail.classList.add("border-[#DBCBCC]", "placeholder:text-[#E8D8D8]");
    inputEmail.classList.remove("border-soft-red", "placeholder:text-soft-red");
    messageError.classList.add("hidden");
  } else {
    inputEmail.classList.remove(
      "border-[#DBCBCC]",
      "placeholder:text-[#E8D8D8]"
    );
    inputEmail.classList.add("border-soft-red", "placeholder:text-soft-red");
    messageError.classList.remove("hidden");
  }
});

/* Funcion para validar Email */
function validateEmail(email) {
  /* Expresion regular */
  let validEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (validEmail.test(email)) {
    return true;
  } else {
    return false;
  }
}
