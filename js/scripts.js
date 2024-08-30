const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("navList");

function toggleMenu() {
    navList.classList.toggle("show")
}

function toggleButton(x) {
    x.classList.toggle("change");
  }

hamburgerButton.addEventListener("click", toggleMenu);