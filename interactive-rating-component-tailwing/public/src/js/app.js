const form = document.getElementById("form");
const formInputs = document.getElementsByClassName("form-input");
const outputForm = document.getElementById("outputForm");
const modal = document.getElementById("modal");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  for (const input of formInputs) {
    if (input.checked) {
      let inputValue = input.value;
      mostrarModal(inputValue);
    }
  }
});

function mostrarModal(valor) {
  outputForm.innerText = valor;
  modal.classList.remove("translate-y-[-100%]");
}
