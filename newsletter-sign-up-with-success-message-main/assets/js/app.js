const form = document.querySelector("form");
let email = document.querySelector("#email");
const dismissBtn = document.getElementById("dismissBtn");
const headerForm = document.querySelector(".header__form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let returnValidateEmail = validateEmail();

  if (returnValidateEmail == "empty") {
    form.classList.add("error");
    headerForm.innerHTML = `
        <label for="email">Email address</label>
        <span>The field is empty</span>`;
    setTimeout(() => {
      form.classList.remove("error");
      headerForm.innerHTML = `
        <label for="email">Email address</label>`;
    }, "5000");
  } else if (returnValidateEmail == "invalid") {
    form.classList.add("error");
    headerForm.innerHTML = `
        <label for="email">Email address</label>
        <span>Valid email required</span>`;
    setTimeout(() => {
      form.classList.remove("error");
      headerForm.innerHTML = `
        <label for="email">Email address</label>`;
    }, "5000");
  } else {
    document.body.classList.add("show__modal");

    const emailOutput = document.getElementById("emailOutput");
    emailOutput.textContent = email.value;
    setTimeout(() => {
      document.body.classList.remove("show__modal");
    }, "30000");
  }
});

dismissBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.remove("show__modal");
});

function validateEmail() {
  let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (email.value == "") {
    return "empty";
  } else if (validEmail.test(email.value)) {
    return "valid";
  } else {
    return "invalid";
  }
}
