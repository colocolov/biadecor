const scrollBtn = document.querySelector(".roller__top .roller__btn");

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
}
