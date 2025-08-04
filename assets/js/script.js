const navbar = document.getElementById("navbar");

// Scroll event listener
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.zIndex = "9999";
        navbar.style.background = "rgba(0, 0, 0, 0.78)"; 
        navbar.style.backdropFilter = "blur(10px)"; 
        navbar.style.transition = "background 0.3s ease-in-out";
    } else {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.zIndex = "9999";
        navbar.style.background = "transparent"; 
        navbar.style.backdropFilter = "none"; 
    }
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1, 
    autoplay: {
        delay: 4000,
        disableOnInteraction: false, 
    },
    speed: 1200,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var customSwiper = new Swiper(".custom-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true, // ✅ Loop mode enabled
    autoplay: {
      delay: 3000, // ✅ Auto-slide every 2 seconds
      disableOnInteraction: false, // ✅ Keep autoplay running even after user interaction
    },
    pagination: {
      el: ".custom-pagination",
      clickable: true,
    },
  });