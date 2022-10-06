const modal = document.querySelector(".modal");
const modalBtn = document.querySelectorAll("[data-toggle=modal]");
const modalCloseBtn = document.querySelector(".modal__close");

if (modal) {
  modal.addEventListener("click", (e) => {
    const isModal = e.target.closest(".modal__inner");
    if (!isModal) {
      removeActive();
    }
  });

  modalBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      modal.classList.add("_active");
      document.body.classList.add("_lock");
    });
  });

  modalCloseBtn.addEventListener("click", removeActive);

  function removeActive() {
    modal.classList.remove("_active");
    document.body.classList.remove("_lock");
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.code === "Escape") {
      removeActive();
    }
  });
}
