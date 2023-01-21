// Menambahkan class active dinamis di navbar
// 1. ambil semua elemen a dari navbar
var navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

// 2. ambil URL saat ini
var currentUrl = window.location.href;

// 3. looping setiap elemen a
navLinks.forEach(function (link) {
  // 4. jika href sesuai dengan URL saat ini
  if (link.href === currentUrl) {
    // 5. tambahkan class active
    link.classList.add("active");
  }
});
// End of Menambahkan class active dinamis di navbar
