
  const navItems = document.querySelectorAll('.menu-item');
  const indicator = document.querySelector('.nav-indicator');
  let currentActive = document.querySelector('.menu-item.active');

  function updateIndicator(element) {
    const rect = element.getBoundingClientRect();
    const nav = document.querySelector('.menu-navegacao');
    const navRect = nav.getBoundingClientRect();

    indicator.style.left = `${rect.left - navRect.left}px`;
    indicator.style.top = `${rect.top - navRect.top}px`;
    indicator.style.width = `${rect.width}px`;
    indicator.style.height = `${rect.height}px`;
  }

  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      updateIndicator(item);
    });

    item.addEventListener('mouseleave', () => {
      updateIndicator(currentActive);
    });

    item.addEventListener('click', () => {
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      item.classList.add('active');
      currentActive = item;
      updateIndicator(item);
    });
  });

  // Inicializa na página carregada
  window.addEventListener('load', () => {
    updateIndicator(currentActive);
  });
