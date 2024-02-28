const accordionBtns = document.querySelectorAll(".accordion__header");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("show");
    const accordionContent = this.nextElementSibling;
    accordionContent.classList.toggle("show");
  });
});
