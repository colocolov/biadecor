import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5.4.2/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'https://unpkg.com/photoswipe@5.4.2/dist/photoswipe.esm.js';

const sliderContainers = document.querySelectorAll('.main-slider');

sliderContainers.forEach((container, index) => {

  // слайдер 
  const swiper = new Swiper(container, {    
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-50%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    keyboard: {
      enabled: true,
    },    
    loop: true,  
    navigation: {
      nextEl: ".main-slider__btn-next",
      prevEl: ".main-slider__btn-prev",
      clickable: true,
    },
    preloadImages: true,
      lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true,
    },
  });
  //----- END


  const photo_swipe_options = {
    gallery: container,
    pswpModule: PhotoSwipe,
    // set background opacity
    bgOpacity: 1,
    showHideOpacity: true,
    children: 'a',
    loop: true,
    showHideAnimationType: 'fade', /* options: fade, zoom, none */

    /* Click on image moves to the next slide */
    imageClickAction: 'next',
    tapAction: 'next',

    /* ## Hiding a specific UI element ## */
    zoom: false,
    close: true,
    counter: true,
    arrowKeys: true,
    /* ## Options ## */
    bgOpacity: "0.9",/* deafult: 0.8 */
    wheelToZoom: false, /* deafult: undefined */
  };

  const lightbox = new PhotoSwipeLightbox(photo_swipe_options);
  // lightbox.init();

  lightbox.on('change', () => {
    const { pswp } = lightbox;
    swiper.slideTo(pswp.currIndex, 0, false);
    // console.log('Slide index', pswp.currIndex);
    //console.log('Slide object', pswp.currSlide);
    //console.log('Slide object data', pswp.currSlide.data);
  });

/* ### PhotoSwipe events ### */

  lightbox.on('afterInit', () => {
    const { pswp } = lightbox;
    if(swiper.params.autoplay.enabled){
      swiper.autoplay.stop();
    };
  });

  lightbox.on('closingAnimationStart', () => {
    //console.log('closingAnimationStart');
    const { pswp } = lightbox;
    swiper.slideTo(pswp.currIndex, 0, false);
    /* if autoplay enabled == true -> autoplay.start() when close lightbox */
    if(swiper.params.autoplay.enabled){
      swiper.autoplay.start();
    }
  });
  lightbox.init();
});