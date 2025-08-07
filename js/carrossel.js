export function iniciarCarrossel() {
  if (typeof Swiper !== "undefined" && document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 0, // Reduzido para aproximar os cards
      centeredSlides: false,
      loop: true,
      grabCursor: true,
      speed: 900,
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // Mobile
        0: { slidesPerView: 1, spaceBetween: 10 },
        // Tablet
        768: { slidesPerView: 2, spaceBetween: 15 },
        // Desktop
        992: { slidesPerView: 3, spaceBetween: 20 },
      },
    });
  }
}