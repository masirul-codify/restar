var swiper = new Swiper(".mySwiper", {     
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // When window width is <= 576px
        576: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // When window width is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // When window width is <= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // When window width is <= 1200px
        1200: {
            slidesPerView: 6,
            spaceBetween: 40
        },
        // Add more breakpoints as needed

    }
  });