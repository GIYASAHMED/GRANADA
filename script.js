const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: 3000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".ri-arrow-left-long-line",
  //   prevEl: ".ri-arrow-right-long-line"
  // }

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
