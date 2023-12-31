// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", (e) => {
  navMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target)) {
    navMenu.classList.add(
      "hidden"
    ); /*class yang dituju tidak menggunakan TITIK*/
  }
});
