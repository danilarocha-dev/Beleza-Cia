// Garante que o script execute após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona os itens do menu, o indicador e a lista UL
  const menuItems = document.querySelectorAll('.menu-navegacao .menu-item');
  const indicator = document.querySelector('.menu-navegacao .nav-indicator');
  const ul = document.querySelector('.menu-navegacao ul');

  // Verifica se os elementos essenciais (indicador e ul) existem
  if (!indicator || !ul) {
      console.error("Elemento .nav-indicator ou a lista UL do menu não foram encontrados!");
      return; // Interrompe a execução se não encontrar os elementos
  }

  const currentPath = window.location.pathname; // Pega o caminho da URL atual
  let activeItem = null; // Variável para armazenar o item de menu ativo

  // Itera sobre cada item do menu para encontrar o que corresponde à página atual
  menuItems.forEach(item => {
      item.classList.remove('active'); // Remove a classe 'active' de todos os itens inicialmente
      const link = item.querySelector('a'); // Pega o link dentro do item de menu

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

  // Adiciona um ouvinte de evento de clique para cada item do menu
  menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
          const link = this.querySelector('a');
          // Se for um link do tipo "#" (ex: "Agende Online")
          if (link && link.getAttribute('href') === '#') {
              event.preventDefault(); // Previne o comportamento padrão do link (não rolar a página)
              
              // Remove a classe 'active' de todos os outros itens
              menuItems.forEach(i => i.classList.remove('active'));
              // Adiciona 'active' ao item clicado
              this.classList.add('active');
              // Atualiza a posição do indicador para o item clicado
              updateIndicator(this, indicator, ul);
          }
          // Para links normais, a página irá recarregar, e o 'DOMContentLoaded'
          // no início do script cuidará de definir o estado ativo na nova página.
          // Um update visual imediato pode ser feito aqui, mas é opcional:
          // else {
          //    menuItems.forEach(i => i.classList.remove('active'));
          //    this.classList.add('active');
          //    updateIndicator(this, indicator, ul);
          // }
      });
  });
});

/**
* Atualiza a posição e o tamanho do indicador do menu.
* @param {HTMLElement} activeItem - O item de menu atualmente ativo.
* @param {HTMLElement} indicator - O elemento DOM do indicador.
* @param {HTMLElement} ul - O elemento UL que contém os itens do menu.
*/
function updateIndicator(activeItem, indicator, ul) {
  if (activeItem && indicator && ul) {
      // Verifica se o item ativo tem dimensões (pode não ter se estiver oculto)
      if (activeItem.offsetWidth === 0 && activeItem.offsetHeight === 0) {
          // Se o item não tiver dimensões, aguarda um instante e tenta novamente.
          // Isso pode acontecer se o CSS ainda não foi totalmente aplicado.
          setTimeout(() => updateIndicator(activeItem, indicator, ul), 50);
          return;
      }

      const paddingX = 10; // Espaçamento horizontal extra para o indicador
      const paddingY = 6;  // Espaçamento vertical extra para o indicador
      
      // Define a largura do indicador um pouco maior que o item ativo
      indicator.style.width = `${activeItem.offsetWidth + paddingX}px`;
      // Define a posição esquerda do indicador, considerando o offset do UL e do item, e o padding
      indicator.style.left = `${ul.offsetLeft + activeItem.offsetLeft - (paddingX / 2)}px`;
      // Define a posição superior do indicador
      indicator.style.top = `${ul.offsetTop + activeItem.offsetTop - (paddingY / 2)}px`;
      // Define a altura do indicador
      indicator.style.height = `${activeItem.offsetHeight + paddingY}px`;
      
      indicator.style.opacity = '1'; // Torna o indicador visível
  } else if (indicator) {
      indicator.style.opacity = '0'; // Esconde o indicador se não houver item ativo
  }
}
