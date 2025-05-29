// Garante que o script execute após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona os itens do menu, o indicador e a lista UL
  const menuItems = document.querySelectorAll('.menu-navegacao .menu-item');
  const indicator = document.querySelector('.menu-navegacao .nav-indicator');
  const ul = document.querySelector('.menu-navegacao ul');

  // Verifica se os elementos essenciais (indicador e ul) existem
  if (!indicator || !ul) {
      console.error("Elemento .nav-indicator ou a lista UL do menu não foram encontrados!");
      return;
  }

  const currentPath = window.location.pathname; // Pega o caminho da URL atual
  let activeItem = null;

  // Itera sobre cada item do menu para encontrar o que corresponde à página atual
  menuItems.forEach(item => {
      item.classList.remove('active'); // Remove a classe 'active' de todos os itens inicialmente
      const link = item.querySelector('a');

      if (link) {
          const linkHref = link.getAttribute('href'); // Pega o atributo href do link
          let pageNameFromLink = "";

          // Extrai o nome do arquivo do href (ex: "index.html", "services.html")
          if (linkHref) {
              const segments = linkHref.split('/');
              pageNameFromLink = segments[segments.length - 1];
          }
          
          // Compara o nome do arquivo do link com o final do caminho da URL atual
          if (pageNameFromLink && currentPath.endsWith(pageNameFromLink)) {
              activeItem = item; // Define como item ativo se houver correspondência
          }
      }
  });

  // Se nenhum item corresponder diretamente (ex: na raiz "/" que serve "index.html"),
  // tenta encontrar o link para "index.html"
  if (!activeItem && (currentPath.endsWith('/') || currentPath.endsWith('index.html') || currentPath.endsWith('index'))) {
      const homeLink = Array.from(menuItems).find(item => {
          const link = item.querySelector('a');
          return link && link.getAttribute('href') && link.getAttribute('href').includes('index.html');
      });
      if (homeLink) {
          activeItem = homeLink;
      }
  }
  
  // Se um item ativo foi determinado pela URL, adiciona a classe 'active' e atualiza o indicador
  if (activeItem) {
      activeItem.classList.add('active');
      updateIndicator(activeItem, indicator, ul);
  } else {
       // Se nenhum item ativo for encontrado (ex: página não listada no menu),
       // pode-se optar por esconder o indicador ou destacar um item padrão (como "Início").
       // Aqui, vamos tentar destacar "Início" como fallback se existir.
      const fallbackHome = Array.from(menuItems).find(item => item.querySelector('a[href*="index.html"]'));
      if(fallbackHome){
          fallbackHome.classList.add('active');
          updateIndicator(fallbackHome, indicator, ul);
      } else {
          indicator.style.opacity = '0'; // Esconde o indicador se nenhum item estiver ativo
      }
  }

 // Adiciona os eventos para cada item do menu
 menuItems.forEach(item => {
    // Evento de CLIQUE (lógica existente)
    item.addEventListener('click', function(event) {
        const link = this.querySelector('a');
        if (link && link.getAttribute('href') === '#') {
            event.preventDefault(); 
            
            if (activeItem) { // Remove 'active' do item anteriormente ativo
                activeItem.classList.remove('active');
            }
            menuItems.forEach(i => i.classList.remove('active')); // Garante que só um esteja ativo

            this.classList.add('active');
            activeItem = this; // ATUALIZA QUAL ITEM É O ATIVO PERMANENTE
            updateIndicator(this, indicator, ul);
        }
        // Para links normais, a página irá recarregar e o 'DOMContentLoaded'
        // cuidará de definir o estado ativo. Se quiser um update visual imediato antes do recarregamento:
        // else if (link) { // Se não for link "#" mas for um link válido
        //    if (activeItem) {
        //        activeItem.classList.remove('active');
        //    }
        //    menuItems.forEach(i => i.classList.remove('active'));
        //    this.classList.add('active');
        //    activeItem = this;
        //    updateIndicator(this, indicator, ul);
        // }
    });

    // ---- ADIÇÃO: Evento para quando o MOUSE ENTRA no item ----
    item.addEventListener('mouseenter', function() {
        // Move o indicador para o item onde o mouse está
        updateIndicator(this, indicator, ul);
    });

    // ---- ADIÇÃO: Evento para quando o MOUSE SAI do item ----
    item.addEventListener('mouseleave', function() {
        // Move o indicador de volta para o 'activeItem'
        // (que é o item da página atual ou o último item "#" clicado)
        // Se nenhum item estiver realmente ativo (ex: página não está no menu e não há fallback),
        // o updateIndicator vai esconder o indicador.
        if (activeItem) {
            updateIndicator(activeItem, indicator, ul);
        } else {
            indicator.style.opacity = '0'; // Esconde se não houver item ativo para retornar
        }
    });
});
});

/**
* Atualiza a posição e o tamanho do indicador do menu.
* @param {HTMLElement} currentHoverOrActiveItem - O item de menu para onde o indicador deve ir.
* @param {HTMLElement} indicatorEl - O elemento DOM do indicador.
* @param {HTMLElement} ulEl - O elemento UL que contém os itens do menu.
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