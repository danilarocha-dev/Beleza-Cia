# Beleza & Cia 💇‍♀️✨

**Beleza & Cia** é um site elegante e moderno para um salão de beleza, construído com HTML, CSS e JavaScript puros. O projeto foi desenhado para ser uma vitrine digital atraente, interativa e que proporciona uma ótima experiência ao usuário.

**[Ver Projeto Online](https://danilarocha-dev.github.io/Beleza-Cia/)**

---

## ✨ Funcionalidades Principais


*   **🏠 Página Inicial Cativante:** Uma seção "hero" com mensagem de boas-vindas e um carrossel de serviços dinâmico e automático, construído com **Swiper.js**.
*   **💅 Página de Serviços Detalhada:** Apresenta cada serviço com imagem, descrição e um botão de ação para agendamento.
*   **🌟 Animações de Scroll:** Efeitos de animação sutis nos cards de serviço, que surgem conforme o usuário rola a página, implementados com **ScrollReveal.js**.
*   **🗓️ Página de Agendamentos com Kanban:** Uma interface visual no estilo Kanban para que o usuário possa acompanhar o status de seus agendamentos (Agendado, Concluído, Cancelado). A funcionalidade de arrastar e soltar (`drag-and-drop`) permite uma gestão intuitiva.
*   **📝 Modal de Agendamento:** Um formulário de agendamento em pop-up (modal) permite que o usuário agende um serviço sem sair da página atual, melhorando a fluidez da navegação.
*   **🧭 Menu de Navegação com Indicador Dinâmico:** Um efeito visual que destaca o item de menu ativo, guiando o usuário e melhorando a estética do site.
*   **📱 Ícones Modernos:** Utilização do **Font Awesome** para ícones de redes sociais e outros elementos da interface.

---

## 🛠️ Tecnologias e Ferramentas

*   **HTML5:** Estruturação semântica e acessível.
*   **CSS3:** Estilização avançada, com uso de:
    *   **Flexbox** para layouts flexíveis.
    *   **Variáveis CSS** para um tema de cores consistente e de fácil manutenção.
    *   **Design Modular** com arquivos CSS separados por componente.
*   **JavaScript (ES6+ Modules):** Código moderno e modular para interatividade.
*   **Dependências (via CDN):**
    *   **Swiper.js:** Para o carrossel de serviços.
    *   **ScrollReveal.js:** Para animações de scroll.
    *   **Font Awesome:** Para a biblioteca de ícones.

---

## 📂 Estrutura de Arquivos

O projeto utiliza uma arquitetura de scripts modular para otimizar o carregamento e facilitar a manutenção.

```
beleza&cia/
├── css/                # Estilos modulares
│   ├── agendamentos.css
│   ├── carousel.css
│   ├── footer.css
│   ├── menu.css
│   ├── modal.css
│   ├── services.css
│   ├── style.css       # Arquivo principal que importa os outros
│   └── theme.css       # Variáveis de cores
├── html/               # Páginas HTML
│   ├── agendamentos.html
│   └── services.html
├── img/                # Imagens e assets
├── js/                 # Scripts modulares
│   ├── carrossel.js
│   ├── kanban.js
│   ├── menu.js
│   ├── modal.js
│   ├── reveal.js
│   └── script.js       # Controlador principal que carrega módulos
├── .gitignore
├── index.html          # Página inicial
└── README.md
```

---

## 🚀 Como Executar

Este é um projeto de front-end estático. Para executá-lo localmente, siga os passos:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/danilarocha-dev/Beleza-Cia.git
    ```

2.  **Navegue até o diretório:**
    ```bash
    cd Beleza-Cia
    ```

3.  **Abra no navegador:**
    Abra o arquivo `index.html` no seu navegador de preferência.

    > **Dica:** Para uma melhor experiência de desenvolvimento, utilize a extensão **Live Server** no Visual Studio Code para ter recarregamento automático ao salvar alterações.

---

## 💡 Destaques do Código

### Arquitetura de Scripts Modular (`js/`)

O JavaScript foi refatorado para usar **Módulos ES6 (ESM)**. O arquivo `js/script.js` atua como um **controlador central** que detecta a página atual e carrega apenas os módulos necessários para ela. Essa abordagem melhora o desempenho, pois cada página carrega somente o código que realmente utiliza.

### Kanban Interativo (`js/kanban.js`)

A página de agendamentos conta com um quadro Kanban funcional, onde os agendamentos podem ser movidos entre as colunas com uma interface de arrastar e soltar, implementada com os eventos `dragstart`, `dragend` e `dragover` do HTML5.

---

## ✍️ Autor

Desenvolvido por **Danila Rocha**.
