// Garante que o script execute após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
  // --- INÍCIO: Lógica do Menu de Navegação (Original e Mantida) ---
  const menuItems = document.querySelectorAll('.menu-navegacao .menu-item');
  const indicator = document.querySelector('.menu-navegacao .nav-indicator');
  const ul = document.querySelector('.menu-navegacao ul');

  if (!indicator || !ul) {
      console.error("Elemento .nav-indicator ou a lista UL do menu não foram encontrados!");
      return;
  }

  const currentPath = window.location.pathname; 
  let activeItem = null;

  menuItems.forEach(item => {
      item.classList.remove('active'); 
      const link = item.querySelector('a');

      if (link) {
          const linkHref = link.getAttribute('href'); 
          let pageNameFromLink = "";

          if (linkHref) {
              const segments = linkHref.split('/');
              pageNameFromLink = segments[segments.length - 1];
          }
          
          if (pageNameFromLink && currentPath.endsWith(pageNameFromLink)) {
              activeItem = item; 
          }
      }
  });

  if (!activeItem && (currentPath.endsWith('/') || currentPath.endsWith('index.html') || currentPath.endsWith('index'))) {
      const homeLink = Array.from(menuItems).find(item => {
          const link = item.querySelector('a');
          return link && link.getAttribute('href') && link.getAttribute('href').includes('index.html');
      });
      if (homeLink) {
          activeItem = homeLink;
      }
  }
  
  if (activeItem) {
      activeItem.classList.add('active');
      updateIndicator(activeItem, indicator, ul);
  } else {
      const fallbackHome = Array.from(menuItems).find(item => item.querySelector('a[href*="index.html"]'));
      if(fallbackHome){
          fallbackHome.classList.add('active');
          updateIndicator(fallbackHome, indicator, ul);
      } else {
          indicator.style.opacity = '0'; 
      }
  }

 menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        const link = this.querySelector('a');
        if (link && link.getAttribute('href') === '#') {
            event.preventDefault(); 
            
            if (activeItem) { 
                activeItem.classList.remove('active');
            }
            menuItems.forEach(i => i.classList.remove('active')); 

            this.classList.add('active');
            activeItem = this; 
            updateIndicator(this, indicator, ul);
        }
    });

    item.addEventListener('mouseenter', function() {
        updateIndicator(this, indicator, ul);
    });

    item.addEventListener('mouseleave', function() {
        if (activeItem) {
            updateIndicator(activeItem, indicator, ul);
        } else {
            indicator.style.opacity = '0';
        }
    });
});
});

/**
* Atualiza a posição e o tamanho do indicador do menu.
*/
function updateIndicator(currentHoverOrActiveItem, indicatorEl, ulEl) {
if (currentHoverOrActiveItem && indicatorEl && ulEl) {
    if (currentHoverOrActiveItem.offsetWidth === 0 && currentHoverOrActiveItem.offsetHeight === 0) {
        setTimeout(() => updateIndicator(currentHoverOrActiveItem, indicatorEl, ulEl), 50);
        return;
    }

    const paddingX = 10; 
    const paddingY = 6;  
    
    indicatorEl.style.width = `${currentHoverOrActiveItem.offsetWidth + paddingX}px`;
    indicatorEl.style.left = `${ulEl.offsetLeft + currentHoverOrActiveItem.offsetLeft - (paddingX / 2)}px`;
    indicatorEl.style.top = `${ulEl.offsetTop + currentHoverOrActiveItem.offsetTop - (paddingY / 2)}px`;
    indicatorEl.style.height = `${currentHoverOrActiveItem.offsetHeight + paddingY}px`;
    
    indicatorEl.style.opacity = '1'; 
} else if (indicatorEl) {
    indicatorEl.style.opacity = '0'; 
}
}
// --- FIM: Lógica do Menu de Navegação ---

// Aguarda o carregamento completo do DOM antes de executar qualquer código
/*document.addEventListener('DOMContentLoaded', function () {
    // --- Código do menu mantido, como no seu original ---
    // ...

    // --- INÍCIO: Inicialização do Swiper.js ---
    // Garante que a biblioteca Swiper foi carregada antes de inicializar
    if (typeof Swiper !== "undefined") {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,        // Exibe 3 slides ao mesmo tempo
            spaceBetween: 25,        // Espaço entre os slides
            loop: true,              // Permite looping contínuo
            grabCursor: true,        // Altera o cursor ao passar sobre o carrossel

            autoplay: {
                delay: 2500,         // Tempo entre os slides automáticos
                disableOnInteraction: false
            },

            pagination: {
                el: ".swiper-pagination", // Define o container das bolinhas
                clickable: true           // Permite clique direto nas bolinhas
            },

            navigation: {
                nextEl: ".swiper-button-next", // Botão de próximo slide
                prevEl: ".swiper-button-prev"  // Botão de slide anterior
            }
        });
    } else {
        console.error("Swiper.js não foi carregado corretamente.");
    }
    // --- FIM: Swiper.js ---
});*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // Exibe exatamente 3 slides
  spaceBetween: 2, // Reduz o espaço entre os slides para evitar corte
  centeredSlides: false, // Impede que os slides fiquem centralizados de forma errada
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,        // Para telas pequenas (mobile)
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,        // Tablets
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,        // Telas maiores (desktop)
      spaceBetween: 20
    }
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

