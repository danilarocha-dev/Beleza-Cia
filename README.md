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
*   **Página de Agendamentos com Kanban:** Uma interface visual no estilo Kanban para que o usuário possa acompanhar o status de seus agendamentos (Agendado, Concluído, Cancelado, etc.).
*   **Modal de Agendamento:** Um formulário de agendamento que abre em um modal (pop-up), permitindo que o usuário agende um serviço sem sair da página atual.
*   **Menu de Navegação com Indicador Dinâmico:** Um efeito visual que destaca o item de menu ativo, melhorando a usabilidade e a estética do site.
*   **Ícones Modernos:** Utilização do **Font Awesome** para ícones de redes sociais e elementos de navegação.

---

## 🛠️ Tecnologias e Ferramentas

*   **HTML5:** Estruturação semântica e moderna.
*   **CSS3:** Estilização avançada, com uso de **Flexbox** para layouts, animações e variáveis CSS para um tema consistente.
*   **JavaScript (ES6+):** Manipulação do DOM e interatividade.
*   **Dependências (via CDN):**
    *   **Swiper.js:** Para o carrossel de serviços.
    *   **Font Awesome:** Para a biblioteca de ícones.

---

## 📂 Estrutura de Arquivos

O projeto é organizado de forma modular para facilitar a manutenção:

```
beleza&cia/
├── css/
│   ├── agendamentos.css # Estilos da página de agendamentos (Kanban)
│   ├── carousel.css     # Estilos do carrossel Swiper
│   ├── footer.css       # Estilos do rodapé
│   ├── modal.css        # Estilos do modal de agendamento
│   ├── services.css     # Estilos da página de serviços
│   ├── style.css        # Estilos globais, header e hero
│   └── theme.css        # Variáveis CSS (paleta de cores, fontes)
├── html/
│   ├── agendamentos.html # Página de visualização de agendamentos
│   └── services.html    # Página de detalhes dos serviços
├── img/
│   └── ...              # Imagens, logos e favicon
├── js/
│   └── script.js        # Lógica do menu, Swiper e modal
├── .gitignore           # Arquivos e pastas ignorados pelo Git
├── index.html           # Página inicial
└── README.md            # Este arquivo
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

### Indicador de Menu Dinâmico (`js/script.js`)

Uma função `updateIndicator` calcula a posição e o tamanho do item de menu ativo ou em foco e move um elemento (`.nav-indicator`) para criar um efeito de destaque suave e elegante.

### Modal de Agendamento (`js/script.js`)

A lógica do modal é gerenciada para abrir um formulário de agendamento quando o botão "Agendar Agora" é clicado e fechar ao clicar no botão de fechar ou fora da área do modal, melhorando a experiência do usuário.

---

## ✍️ Autor

Desenvolvido por **Danila Rocha**.
