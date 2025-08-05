export function iniciarModal() {
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
}