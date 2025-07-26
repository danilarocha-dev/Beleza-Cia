# Beleza & Cia

Este é o código-fonte de um site moderno e responsivo para um salão de beleza chamado "Beleza & Cia". O projeto foi desenvolvido com foco em uma interface de usuário elegante e interativa para apresentar os serviços oferecidos e incentivar o agendamento online.

---

## ✨ Funcionalidades

*   **Design Responsivo:** Totalmente adaptável a diferentes tamanhos de tela, de desktops a dispositivos móveis.
*   **Página Inicial Atraente:** Com uma seção "hero" de boas-vindas e um carrossel de serviços.
*   **Carrossel de Serviços Interativo:** Utiliza a biblioteca [Swiper.js](https://swiperjs.com/) para uma navegação fluida e automática pelos principais serviços.
*   **Página de Serviços Detalhada:** Apresenta cada serviço com descrição, imagem e um botão para agendamento.
*   **Menu de Navegação Dinâmico:** Um indicador visual elegante destaca o item de menu ativo ou sob o cursor, melhorando a experiência do usuário.
*   **Ícones Modernos:** Uso do [Font Awesome](https://fontawesome.com/) para ícones de redes sociais e navegação do carrossel.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Para a estrutura semântica do site.
*   **CSS3:** Para estilização, layout (Flexbox) e animações.
*   **JavaScript (ES6+):** Para a interatividade do menu de navegação e inicialização de bibliotecas.
*   **[Swiper.js](https://swiperjs.com/):** Biblioteca para a criação do carrossel de serviços.
*   **[Font Awesome](https://fontawesome.com/):** Biblioteca de ícones vetoriais.

---

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:

```
beleza&cia/
├── css/
│   ├── carousel.css     # Estilos específicos do carrossel
│   ├── footer.css       # Estilos do rodapé
│   ├── services.css     # Estilos da página de serviços
│   └── style.css        # Estilos globais e da página inicial
├── html/
│   ├── index.html       # Página inicial
│   └── services.html    # Página de serviços
├── img/
│   └── ...              # Imagens e ícones do projeto
├── js/
│   └── script.js        # Lógica do menu e inicialização do Swiper
└── README.md            # Este arquivo
```

---

## 🚀 Como Executar o Projeto

Como este é um projeto de front-end estático, você não precisa de um ambiente de desenvolvimento complexo. Siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd beleza-e-cia
    ```

3.  **Abra o arquivo principal no navegador:**
    Abra o arquivo `html/index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

    > **Dica:** Para uma melhor experiência de desenvolvimento, recomenda-se usar um servidor local. Se você usa o Visual Studio Code, a extensão Live Server é uma ótima opção para visualizar as alterações em tempo real.

---

## 💡 Destaques do Código

### Menu de Navegação Dinâmico (`js/script.js`)

O arquivo `script.js` contém uma lógica para criar um efeito visual no menu de navegação. Ele detecta a página atual, aplica a classe `.active` ao item de menu correspondente e move um elemento indicador (`.nav-indicator`) para se posicionar sob o item ativo ou quando o mouse passa sobre outro item.

```javascript
function updateIndicator(currentHoverOrActiveItem, indicatorEl, ulEl) {
    if (currentHoverOrActiveItem && indicatorEl && ulEl) {
        // ... Lógica para calcular posição e tamanho ...
        indicatorEl.style.width = `${currentHoverOrActiveItem.offsetWidth + paddingX}px`;
        indicatorEl.style.left = `${ulEl.offsetLeft + currentHoverOrActiveItem.offsetLeft - (paddingX / 2)}px`;
        // ...
        indicatorEl.style.opacity = '1';
    }
}
```

### Carrossel com Swiper.js (`js/script.js` e `css/carousel.css`)

A inicialização do Swiper é feita com configurações que incluem responsividade, autoplay, navegação e paginação, proporcionando uma experiência de usuário rica.

```javascript
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  // ... outras configurações
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
```

---

## ✍️ Autor

Desenvolvido por **Danila Rocha**.