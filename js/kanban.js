export function iniciarKanbanLoop() {
  const kanbanColumns = document.querySelectorAll('.kanban-column');
  if (kanbanColumns.length === 0) return;

  let currentIndex = 0;
  const highlightClass = 'highlight';
  const intervalTime = 2000; // Tempo em milissegundos para cada destaque

  function highlightNextColumn() {
    // Remove o destaque da coluna anterior
    kanbanColumns.forEach(column => column.classList.remove(highlightClass));

    // Adiciona o destaque à coluna atual
    const currentColumn = kanbanColumns[currentIndex];
    currentColumn.classList.add(highlightClass);

    // Move o scroll para a coluna destacada, se necessário
    const kanbanContainer = document.querySelector('.kanban');
    if (kanbanContainer) {
      const scrollLeft = currentColumn.offsetLeft - kanbanContainer.offsetLeft;
      kanbanContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }

    // Prepara o próximo índice
    currentIndex = (currentIndex + 1) % kanbanColumns.length;
  }

  // Inicia o loop
  setInterval(highlightNextColumn, intervalTime);
}

export function iniciarKanbanDragAndDrop() {
    const cards = document.querySelectorAll('.kanban-card');
    const columns = document.querySelectorAll('.kanban-column');

    cards.forEach(card => {
        card.addEventListener('dragstart', () => {
            card.classList.add('dragging');
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });
    });

    columns.forEach(column => {
        column.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(column, e.clientY);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                column.querySelector('.kanban-cards').appendChild(draggable);
            } else {
                column.querySelector('.kanban-cards').insertBefore(draggable, afterElement);
            }
        });
    });

    function getDragAfterElement(column, y) {
        const draggableElements = [...column.querySelectorAll('.kanban-card:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}