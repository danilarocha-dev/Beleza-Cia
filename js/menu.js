/**
 * Atualiza a posição e o tamanho do indicador do menu.
 * @param {HTMLElement} currentItem - O item de menu ativo ou em hover.
 * @param {HTMLElement} indicatorEl - O elemento indicador.
 * @param {HTMLElement} ulEl - O elemento <ul> do menu.
 */
function updateIndicator(currentItem, indicatorEl, ulEl) {
  if (currentItem && indicatorEl && ulEl) {
    if (
      currentItem.offsetWidth === 0 &&
      currentItem.offsetHeight === 0
    ) {
      setTimeout(
        () => updateIndicator(currentItem, indicatorEl, ulEl),
        50
      );
      return;
    }
    const paddingX = 10;
    const paddingY = 6;
    indicatorEl.style.width = `${
      currentItem.offsetWidth + paddingX
    }px`;
    indicatorEl.style.left = `${
      ulEl.offsetLeft + currentItem.offsetLeft - paddingX / 2
    }px`;
    indicatorEl.style.top = `${
      ulEl.offsetTop + currentItem.offsetTop - paddingY / 2
    }px`;
    indicatorEl.style.height = `${
      currentItem.offsetHeight + paddingY
    }px`;
    indicatorEl.style.opacity = "1";
  } else if (indicatorEl) {
    indicatorEl.style.opacity = "0";
  }
}

export function iniciarMenu() {
  const menuItems = document.querySelectorAll(".menu-navegacao .menu-item");
  const indicator = document.querySelector(".menu-navegacao .nav-indicator");
  const ul = document.querySelector(".menu-navegacao ul");

  if (indicator && ul && menuItems.length > 0) {
    const currentPath = window.location.pathname;
    let activeItem = null;

    menuItems.forEach((item) => {
      item.classList.remove("active");
      const link = item.querySelector("a");
      if (link) {
        const linkHref = link.getAttribute("href");
        let pageNameFromLink = "";
        if (linkHref) {
          const segments = linkHref.split("/");
          pageNameFromLink = segments[segments.length - 1];
        }
        if (pageNameFromLink && currentPath.endsWith(pageNameFromLink)) {
          activeItem = item;
        }
      }
    });

    if (
      !activeItem &&
      (currentPath.endsWith("/") || currentPath.endsWith("index.html"))
    ) {
      const homeLink = Array.from(menuItems).find((item) => {
        const link = item.querySelector("a");
        return (
          link &&
          link.getAttribute("href") &&
          link.getAttribute("href").includes("index.html")
        );
      });
      if (homeLink) activeItem = homeLink;
    }

    if (activeItem) {
      activeItem.classList.add("active");
      updateIndicator(activeItem, indicator, ul);
    } else {
      const fallbackHome = Array.from(menuItems).find((item) =>
        item.querySelector('a[href*="index.html"]')
      );
      if (fallbackHome) {
        fallbackHome.classList.add("active");
        updateIndicator(fallbackHome, indicator, ul);
      } else {
        indicator.style.opacity = "0";
      }
    }

    menuItems.forEach((item) => {
      item.addEventListener("click", function (event) {
        const link = this.querySelector("a");
        if (link && link.getAttribute("href") === "#") {
          event.preventDefault();
          if (activeItem) activeItem.classList.remove("active");
          menuItems.forEach((i) => i.classList.remove("active"));
          this.classList.add("active");
          activeItem = this;
          updateIndicator(this, indicator, ul);
        }
      });
      item.addEventListener("mouseenter", function () {
        updateIndicator(this, indicator, ul);
      });
      item.addEventListener("mouseleave", function () {
        if (activeItem) {
          updateIndicator(activeItem, indicator, ul);
        } else {
          indicator.style.opacity = "0";
        }
      });
    });
  }
}