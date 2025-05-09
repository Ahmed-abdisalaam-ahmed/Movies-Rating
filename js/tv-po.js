const toggleBtn = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");

// Events of Document
toggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });