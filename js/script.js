// Garante que o script execute após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  // --- Lógica do Menu de Navegação ---
  const menuItems = document.querySelectorAll(".menu-navegacao .menu-item");
  const indicator = document.querySelector(".menu-navegacao .nav-indicator");
  const ul = document.querySelector(".menu-navegacao ul");

  if (indicator && ul) {
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

  // --- Lógica do Modal de Agendamento ---
  const modal = document.getElementById("agendamento-modal");
  const closeButton = document.querySelector(".close-button");
  const agendarButtons = document.querySelectorAll(".botao-agendar");
  const modalForm = document.getElementById("modal-form");

  if (agendarButtons.length > 0 && modal) {
    agendarButtons.forEach((button) => {
      button.addEventListener("click", () => {
        modal.style.display = "block";
      });
    });
  }

  if (closeButton && modal) {
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  if (modal) {
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  if (modalForm && modal) {
    modalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Agendamento realizado com sucesso!");
      modal.style.display = "none";
      modalForm.reset();
    });
  }

  // --- Lógica do Swiper.js ---
  if (typeof Swiper !== "undefined") {
    var swiper = new Swiper(".mySwiper", {
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
        0: { slidesPerView: 1, spaceBetween: 15 },
        // Tablet
        768: { slidesPerView: 2, spaceBetween: 20 },
        // Desktop
        992: { slidesPerView: 3, spaceBetween: 20 },
      },
    });
  }
});

function updateIndicator(currentHoverOrActiveItem, indicatorEl, ulEl) {
  if (currentHoverOrActiveItem && indicatorEl && ulEl) {
    if (
      currentHoverOrActiveItem.offsetWidth === 0 &&
      currentHoverOrActiveItem.offsetHeight === 0
    ) {
      setTimeout(
        () => updateIndicator(currentHoverOrActiveItem, indicatorEl, ulEl),
        50
      );
      return;
    }
    const paddingX = 10;
    const paddingY = 6;
    indicatorEl.style.width = `${
      currentHoverOrActiveItem.offsetWidth + paddingX
    }px`;
    indicatorEl.style.left = `${
      ulEl.offsetLeft + currentHoverOrActiveItem.offsetLeft - paddingX / 2
    }px`;
    indicatorEl.style.top = `${
      ulEl.offsetTop + currentHoverOrActiveItem.offsetTop - paddingY / 2
    }px`;
    indicatorEl.style.height = `${
      currentHoverOrActiveItem.offsetHeight + paddingY
    }px`;
    indicatorEl.style.opacity = "1";
  } else if (indicatorEl) {
    indicatorEl.style.opacity = "0";
  }
}
