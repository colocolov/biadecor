// мобильное меню

// меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelector(".menu__item");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
// закрытие при клике
menuLink.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  });
});
