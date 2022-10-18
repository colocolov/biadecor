// modal
const modal = document.querySelector(".modal");
const modalBtn = document.querySelectorAll("[data-toggle=modal]");
const modalCloseBtn = document.querySelector(".modal__close");
// tooltip
const tooltipBtn = document.querySelectorAll(".box-btn");
const tooltipContent = document.querySelectorAll(".box-content");
const tooltipCloseBtn = document.querySelectorAll(".box-content__close");

// modal
function removeActive() {
  modal.classList.remove("_active");
  document.body.classList.remove("_lock");
}

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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.code === "Escape") {
      removeActive();
    }
  });
}

// tooltip
if (tooltipBtn) {
  tooltipBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      let close = el.childNodes[1].childNodes[1];
      let content = el.childNodes[1];
      content.classList.toggle("active");

      close.addEventListener("click", () => {
        if (content.classList.contains("active")) {
          content.classList.remove("_active");
        }
      });
    });
  });
}
