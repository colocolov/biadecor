// слайдер на главной
const headerSlider = new Swiper(".main-slider", {
  // speed: 800,
  loop: true,
  navigation: {
    nextEl: ".main-slider__btn-next",
    prevEl: ".main-slider__btn-prev",
    clickable: true,
  },
  preloadImages: false,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
  },
  //эффект перехода слайда (только если показ по 1-му слайду)
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // переключение при клике на слайд
  slideToClickedSlide: true,
});
//----- END
