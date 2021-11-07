var $swiperSelector = $(".swiper-container");

$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  var loop = $this.data("loop") !== undefined ? $this.data("loop") : false;
  var freeMode =
    $this.data("free-mode") !== undefined ? $this.data("free-mode") : false;
  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;

  var swiper = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: true,
    freeMode: freeMode,
    breakpoints: {
      // 1920: {
      //   slidesPerView: 4,
      //   spaceBetween: 20,
      // },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});
