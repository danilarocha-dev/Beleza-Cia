import { iniciarMenu } from './menu.js';
import { iniciarModal } from './modal.js';
import { iniciarCarrossel } from './carrossel.js';
import { iniciarReveal } from './reveal.js';
import { iniciarKanbanLoop, iniciarKanbanDragAndDrop } from './kanban.js';

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  // O menu é iniciado em todas as páginas
  iniciarMenu();

  // Carrega módulos específicos da página
  if (path.endsWith("/") || path.endsWith("index.html")) {
    iniciarCarrossel();
  }

  if (path.includes("services.html")) {
    iniciarModal();
    iniciarReveal();
  }

  if (path.includes("agendamentos.html")) {
    iniciarKanbanLoop();
    iniciarKanbanDragAndDrop();
  }
});