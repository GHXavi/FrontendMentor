/* Seleccionar formulario */
const form = document.getElementById("form");

/* Seleccionar inputs del formuladrio */
const inputFirstName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");

/* Seleccionar mensajes de error */
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  /* Validar FirstName */
  validateEmpty(inputFirstName.value, inputFirstName, errorFirstName);
  inputFirstName.addEventListener("change", function () {
    validateEmpty(inputFirstName.value, inputFirstName, errorFirstName);
  });

  /* Validar LastName */
  validateEmpty(inputLastName.value, inputLastName, errorLastName);
  inputLastName.addEventListener("change", function () {
    validateEmpty(inputLastName.value, inputLastName, errorLastName);
  });

  /* Validar email */
  validateEmpty(inputEmail.value, inputEmail, errorEmail);
  inputEmail.addEventListener("change", function () {
    validateEmpty(inputEmail.value, inputEmail, errorEmail);
  });

  /* Validar Password */
  validateEmpty(inputPassword.value, inputPassword, errorPassword);
  inputPassword.addEventListener("change", function () {
    validateEmpty(inputPassword.value, inputPassword, errorPassword);
  });
});

/* Validar campos */
function validateEmpty(inputValue, inputField, errorField) {
  if (inputValue == 0) {
    showError(inputField, errorField);
  } else {
    hideError(inputField, errorField);
  }
}

/* Funcion mostrar error */
function showError(inputField, errorField) {
  inputField.classList.remove(
    "border-[#DEDEDE]",
    "placeholder:text-[#747378]",
    "outline-[#605B79]"
  );
  inputField.classList.add(
    "border-[#FF7979]",
    "placeholder:text-[#FF7979]",
    "outline-[#FF7979]"
  );

  errorField.classList.remove("hidden");
}

/* Funcion ocultar error */
function hideError(inputField, errorField) {
  inputField.classList.remove(
    "border-[#FF7979]",
    "placeholder:text-[#FF7979]",
    "outline-[#FF7979]"
  );
  inputField.classList.add(
    "border-[#DEDEDE]",
    "placeholder:text-[#747378]",
    "outline-[#605B79]"
  );

  errorField.classList.add("hidden");
}
