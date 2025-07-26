# Instruções para o Assistente de Código (Gemini)

Este documento serve como um guia de diretrizes para o assistente de IA (Gemini Code Assist) ao trabalhar no projeto "Beleza & Cia". O objetivo é manter a consistência, a qualidade e a manutenibilidade do código.

---

## 1. Visão Geral do Projeto

O "Beleza & Cia" é o site de um salão de beleza, focado em uma interface moderna, responsiva e interativa para apresentar serviços e facilitar o agendamento.

**Referência Principal:** Antes de qualquer alteração, consulte o [`README.md`](./README.md) para obter uma visão completa das funcionalidades, tecnologias e estrutura do projeto.

---

## 2. Pilha de Tecnologia (Tech Stack)

O projeto é construído com as seguintes tecnologias:

- **HTML5:** Estruturação semântica.
- **CSS3:** Estilização, layout com Flexbox e animações.
- **JavaScript (ES6+):** Interatividade e manipulação do DOM.
- **Dependências (via CDN):**
  - Swiper.js: Para o carrossel de serviços.
  - Font Awesome: Para ícones.

---

## 3. Padrões de Código e Convenções

Siga estritamente os padrões abaixo para garantir um código limpo e coeso.

### 3.1. HTML

- **Semântica:** Utilize tags HTML5 semânticas sempre que apropriado (`<header>`, `<nav>`, `<section>`, `<footer>`, `<main>`).
- **Estrutura:** Mantenha a indentação e a estrutura lógica dos elementos.
- **Nomenclatura:** Use nomes de classes em `kebab-case` (ex: `menu-navegacao`, `servico-card`) para descrever o propósito do elemento.
- **Acessibilidade:** Inclua atributos `alt` descritivos para todas as imagens.

### 3.2. CSS

- **Estrutura de Arquivos:** Mantenha a modularidade.
  - `style.css`: Estilos globais, header e layout principal.
  - `carousel.css`: Estilos exclusivos do carrossel Swiper.
  - `services.css`: Estilos da página de serviços.
  - `footer.css`: Estilos do rodapé.
  - Use `@import` no topo do `style.css` para carregar os outros módulos.
- **Nomenclatura:** Seletores devem usar `kebab-case`.
- **Variáveis CSS:** Para manter a consistência visual, utilize variáveis CSS para a paleta de cores e espaçamentos principais. Adicione-as no seletor `:root` em `style.css`.

  ```css
  /* Exemplo de paleta de cores a ser implementada */
  :root {
    --cor-primaria: #f47878;
    --cor-primaria-clara: #f9a7a7;
    --cor-primaria-fundo: #fce4ec;
    --cor-texto-principal: #333;
    --cor-fundo: #fdfdfd;
    --cor-branco: #fff;
  }
  ```

- **Layout:** Priorize o uso de **Flexbox** para alinhamento e distribuição de elementos.
- **Unidades:** Use `rem` para fontes e `px` para bordas, espaçamentos (padding/margin) e `box-shadow`.
- **Responsividade:** Implemente `media queries` no final de cada arquivo CSS relevante para garantir a adaptação a diferentes tamanhos de tela.

### 3.3. JavaScript (`js/script.js`)

- **Padrão:** Utilize JavaScript moderno (ES6+), com `const` e `let` em vez de `var`.
- **Execução Segura:** Envolva todo o código que manipula o DOM dentro do evento `DOMContentLoaded` para garantir que a página esteja totalmente carregada.
  ```javascript
  document.addEventListener("DOMContentLoaded", function () {
    // Todo o código aqui
  });
  ```
- **Clareza:** Escreva funções pequenas e com propósito único. Adicione comentários JSDoc para funções complexas, explicando o que fazem, seus parâmetros e o que retornam.
  ```javascript
  /**
   * Atualiza a posição e o tamanho do indicador do menu.
   * @param {HTMLElement} currentItem - O item de menu ativo ou em hover.
   * @param {HTMLElement} indicatorEl - O elemento indicador.
   * @param {HTMLElement} ulEl - O elemento <ul> do menu.
   */
  function updateIndicator(currentItem, indicatorEl, ulEl) {
    // ...lógica
  }
  ```
- **Organização:** Separe a lógica em blocos bem definidos (ex: um bloco para a navegação, outro para a inicialização do Swiper).

---

## 4. Formato das Respostas

Ao fornecer código, siga estas regras:

1.  **Formato Diff:** Apresente todas as modificações de código no formato `diff`. Isso torna a revisão e aplicação das mudanças mais fácil e segura.
2.  **Caminhos Absolutos:** Use o caminho absoluto completo para cada arquivo modificado (ex: `/home/danila/beleza&cia/css/style.css`).
3.  **Novos Arquivos:** Para criar um novo arquivo, use `/dev/null` como o arquivo de origem no `diff`.
4.  **Tom de Voz:** Mantenha um tom conversacional, claro e prestativo, explicando o "porquê" das alterações, não apenas o "o quê".

---

## 5. Exemplo de Tarefa

**Requisição do usuário:** "Refatore o CSS para usar variáveis para as cores principais, melhorando a manutenibilidade."

**Resposta esperada:**

> Olá! Com certeza. Refatorar o CSS para usar variáveis é uma ótima prática, pois centraliza a paleta de cores e facilita futuras alterações de design.
>
> Adicionei as variáveis de cor no seletor `:root` do `style.css` e substituí as cores fixas nos arquivos `style.css`, `carousel.css` e outros.
>
> ```diff
> --- a/home/danila/beleza&cia/css/style.css
> +++ b/home/danila/beleza&cia/css/style.css
> @@ -4,6 +4,15 @@
>  * { ... }
>
>  +:root {
>  +  --cor-primaria: #f47878;
>  +  --cor-primaria-clara: #f9a7a7;
>  +}
>  +
>  nav ul li:hover {
> -  color: #f9a7a7;
> +  color: var(--cor-primaria-clara);
>  }
> ```
>
> _(...outras alterações em diff)_
