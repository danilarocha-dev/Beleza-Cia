# Beleza & Cia

Bem-vinda ao repositório do **Beleza & Cia**, um site elegante e moderno para um salão de beleza, projetado para oferecer uma experiência de usuário impecável e facilitar o agendamento de serviços.

---

## 🚀 Visão Geral do Projeto

O Beleza & Cia é mais do que um simples site institucional; é uma vitrine digital interativa. O design foi pensado para ser atraente e funcional, guiando o usuário desde a descoberta dos serviços até a conclusão do agendamento, tudo de forma intuitiva e responsiva.

---

## ✨ Funcionalidades Implementadas

*   **Design Totalmente Responsivo:** A interface se adapta perfeitamente a qualquer dispositivo, seja desktop, tablet ou smartphone.
*   **Página Inicial Cativante:** Uma seção "hero" com uma mensagem de boas-vindas e um carrossel dinâmico que destaca os principais serviços.
*   **Carrossel de Serviços Interativo:** Navegação fluida e automática pelos serviços, construída com a biblioteca **Swiper.js**.
*   **Página de Serviços Detalhada:** Layout organizado que apresenta cada serviço com imagem, descrição e um botão de ação para agendamento.
*   **Animações de Scroll:** Efeitos de animação sutis nos cards de serviço, implementados com **ScrollReveal.js**, que surgem conforme o usuário rola a página.
*   **Página de Agendamentos com Kanban:** Uma interface visual no estilo Kanban para que o usuário possa acompanhar o status de seus agendamentos (Agendado, Concluído, Cancelado, etc.).
*   **Modal de Agendamento:** Um formulário de agendamento que abre em um modal (pop-up), permitindo que o usuário agende um serviço sem sair da página atual.
*   **Menu de Navegação com Indicador Dinâmico:** Um efeito visual que destaca o item de menu ativo, melhorando a usabilidade e a estética do site.
*   **Ícones Modernos:** Utilização do **Font Awesome** para ícones de redes sociais e elementos de navegação.

---

## 🛠️ Tecnologias e Ferramentas

*   **HTML5:** Estruturação semântica e moderna.
*   **CSS3:** Estilização avançada, com uso de **Flexbox** para layouts, animações e variáveis CSS para um tema consistente.
*   **JavaScript (ESM - ES6 Modules):** Código modularizado para melhor organização, manutenção e desempenho.
*   **Dependências (via CDN):**
    *   **Swiper.js:** Para o carrossel de serviços.
    *   **ScrollReveal.js:** Para animações de scroll.
    *   **Font Awesome:** Para a biblioteca de ícones.

---

## 📂 Estrutura de Arquivos

O projeto foi refatorado para uma arquitetura de scripts modular, facilitando a manutenção e o carregamento seletivo de funcionalidades.

```
beleza&cia/
├── css/
│   ├── agendamentos.css
│   ├── carousel.css
│   ├── footer.css
│   ├── modal.css
│   ├── services.css
│   ├── style.css
│   └── theme.css
├── html/
│   ├── agendamentos.html
│   └── services.html
├── img/
│   └── ...
├── js/
│   ├── carrossel.js   # Módulo do Swiper (carregado em index.html)
│   ├── menu.js        # Módulo do menu (carregado em todas as páginas)
│   ├── modal.js       # Módulo do modal (carregado em services.html)
│   ├── reveal.js      # Módulo do ScrollReveal (carregado em services.html)
│   └── script.js      # Controlador principal: importa e executa os módulos necessários
├── .gitignore
├── index.html
└── README.md
```

---

## 🚀 Como Executar

Este é um projeto de front-end estático e pode ser executado facilmente.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/beleza-e-cia.git
    ```

2.  **Navegue até o diretório:**
    ```bash
    cd beleza-e-cia
    ```

3.  **Abra no navegador:**
    Abra o arquivo `index.html` no seu navegador de preferência.

    > **Dica:** Para desenvolvimento, use a extensão **Live Server** no Visual Studio Code para ter recarregamento automático ao salvar alterações.

---

## 💡 Destaques do Código

### Arquitetura de Scripts Modular (`js/`)

O JavaScript foi refatorado para usar **Módulos ES6 (ESM)**. O arquivo `js/script.js` atua como um **controlador central** que detecta a página atual e carrega apenas os módulos necessários para ela.

*   `menu.js`: A lógica do menu de navegação, presente em todas as páginas.
*   `carrossel.js`: Inicializa o Swiper.js, carregado apenas na `index.html`.
*   `modal.js` e `reveal.js`: Funcionalidades de modal e animação, carregadas apenas na `services.html`.

Essa abordagem melhora o desempenho, pois cada página carrega apenas o código que realmente utiliza.

### Indicador de Menu Dinâmico (`js/menu.js`)

Uma função `updateIndicator` calcula a posição e o tamanho do item de menu ativo e move um elemento (`.nav-indicator`) para criar um efeito de destaque suave e elegante.

---

## ✍️ Autor

Desenvolvido por **Danila Rocha**.