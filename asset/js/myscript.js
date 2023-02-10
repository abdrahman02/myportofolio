// Showing sidebar
// 1. Ambil kelas navbar-nav nya
const navbarNav = document.querySelector(".navbar-nav");

// 2. Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// End of Showing Sidebar

// Function for unshowing sidebar when user on click outside of sidebar
// 1. Ambil id hamburger-menu
const hamburger = document.querySelector("#hamburger-menu");

// 2. Hapus kelas active ketika user click diluar contain dari hamburger menu
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// End of Function for unshowing sidebar when user on click outside of sidebar
