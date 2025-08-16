// Exporta a função para manter sua modularização
export function iniciarCarrossel() {
  // Garante que o Swiper foi carregado e o container existe
  if (typeof Swiper !== "undefined" && document.querySelector(".mySwiper")) {
    // Instancia o carrossel
    new Swiper(".mySwiper", {
      effect: "coverflow",
      // Mostra a quantidade de slides conforme o tamanho da tela (ver breakpoints abaixo)
      slidesPerView: 2,          // valor base (será sobrescrito pelos breakpoints)
      // Mantemos um espaço padrão; será refinado nos breakpoints
      spaceBetween: 16,          // espaçamento consistente (harmoniza com as bordas)

      centeredSlides: false,     // não centraliza o slide (mantém grade limpa)
      loop: true,                // looping contínuo
      grabCursor: true,          // cursor de "mão" melhora a UX
      speed: 900,                // velocidade de transição (suave)

      autoplay: {
        delay: 2800,             // intervalo entre auto-slides
        disableOnInteraction: false, // continua mesmo após interação
      },

      navigation: {
        nextEl: ".swiper-button-next", // seta "próximo"
        prevEl: ".swiper-button-prev", // seta "anterior"
      },

      keyboard: {
        enabled: true,            // permite navegação com teclado (acessibilidade)
      },

      watchOverflow: true,        // se houver poucos slides, Swiper se adapta

      // BREAKPOINTS (alinhados aos ajustes de CSS e evitando quebras)
      breakpoints: {
        // Mobile (até 767px)
        0:   { slidesPerView: 1, spaceBetween: 16 }, // 1 card por vez, com respiro

        // Tablet (768px até 991px)
        768: { slidesPerView: 2, spaceBetween: 20 }, // 2 cards, espaçamento um pouco maior

        // Desktop (992px+)
        992: { slidesPerView: 3, spaceBetween: 24 }, // 3 cards, confortável no max-width:1100px
      },
    });
  }
}
