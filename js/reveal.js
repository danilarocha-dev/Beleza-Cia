export function iniciarReveal() {
  if (typeof ScrollReveal !== "undefined") {
    // Animação para cards que entram da esquerda
    ScrollReveal().reveal('.servico-card.left', {
      origin: 'left',
      duration: 1000,
      distance: '60px',
      easing: 'ease-in-out',
      interval: 150 // Delay entre os cards
    });

    // Animação para cards que entram da direita
    ScrollReveal().reveal('.servico-card.right', {
      origin: 'right',
      duration: 1000,
      distance: '60px',
      easing: 'ease-in-out',
      interval: 150
    });
  }
}