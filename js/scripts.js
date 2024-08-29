const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("navList");

function toggleButton() {
    navList.classList.toggle("show")
}

hamburgerButton.addEventListener("click", toggleButton);