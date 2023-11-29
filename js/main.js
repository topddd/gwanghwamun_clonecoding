$(function () {
    let hover = $(".header .inner ul");
    let hoverenter = $(".container .header .inner > ul > li > ul");
    // let a = ".header .inner ul li ul li a";
    // let after = ".header .inner ul li ul .after";
  
    $(".header .inner .btn").click(function () {
      hoverenter.toggleClass("active");
      $(".header-bg").toggleClass("on");
      $(".btn-box span").toggleClass("active");
    });
    hover.mouseenter(function () {
      hoverenter.addClass("active");
      $(".header-bg").addClass("on");
    });
    $(".header-bg").mouseleave(function () {
      hoverenter.removeClass("active");
      $(".header-bg").removeClass("on");
    });
    // 첫번째 스와이퍼
    var swiper1 = new Swiper(".myswiper", {
      loop: true,
      autoplay:{
        delay : 5000,
      },
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number) {
          return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '">0</span>' +
            '<span class="swiper-pagination-divider">/</span>' +
            '<span class="' +
            totalClass +
            '">0</span>'
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
      },
      swiperscrollbar: {
        backgroundcolor: "#e44453",
        width: "8px",
        right: "10px",
      },
  
      /* 스크롤바 스크롤바가 이동하는 부분 */
      swiperscrollbardrag: {
        backgroundcolor: "#e44453",
      },
    });
  
    //두번째 스와이퍼
    var swiper2 = new Swiper(".mySwiper", {
      // slidesPerView: 1,
      // spaceBetween: 37.5,
      freeMode: true,
      observer: true,
      width: 0,
      observeParents: true,
      loop: false,
      // pagination: {
      //     el: ".swiper-pagination",
      //     type:progress,
      // },
      breakpoints: {
        1920: { slidesPerView: 3 },
        1400: { slidesPerView: 2 },
        1000: { slidesPerView: 1 },
      },
      navigation: {
        nextEl: ".sw-next",
        prevEl: ".sw-prev",
      },
    });
  
    // 세번째 스와이퍼
    var swiper3 = new Swiper(".meswiper", {
      // slidesPerView : 1,
        loop: true,
        autoplay:{
          delay : 5000,
        },
        navigation: {
        nextEl: ".swiper--next",
        prevEl: ".swiper--prev",
      },
      pagination: {
        el: ".swiper-pagination1",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number) {
          return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '">0</span>' +
            '<span class="swiper-pagination-divider">/</span>' +
            '<span class="' +
            totalClass +
            '">0</span>'
          );
        },
      },
    });
    //네번째 스와이퍼
    var swiper4 = new Swiper(".meSwiper", {
      //   loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper5 = new Swiper(".meSwiper2", {
      autoplay: true,
      loop: true,
      //   effect: 'fade',
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper4,
      },
      pagination: {
        el: ".swiper-pagination-1",
        type: "progressbar",
      },
    });
    // 첫번째 스와이퍼 일시정지
    $(".myswiper .swiper-button-stop").click(function () {
      $(this).toggleClass("swiper-button-stop-play");
      let stop1 = $(this).hasClass("swiper-button-stop-play");
      if (stop1) {
        swiper1.autoplay.stop();
      } else {
        swiper1.autoplay.start();
      }
    });
  
      //세번째 스와이퍼 일시정지
      $('.section2 .inner .inner-box .swiper--stop').click(function(){
        $(this).toggleClass('swiper--play')
        let play3 = $(this).hasClass('swiper--play')
        if(play3){
          swiper3.autoplay.stop()
        }else{
          swiper3.autoplay.start()
        }
      })
  
    // 네번째 스와이퍼 일시정지
    $(".section5 .swiper-button-stop, .container .section2 .inner .inner-box .swiper--stop").click(function () {
      $(this).toggleClass("swiper-button-play");
      let stop1 = $(this).hasClass("swiper-button-play");
      if (stop1) {
        swiper4.autoplay.stop();
        swiper5.autoplay.stop();
      } else {
        swiper4.autoplay.start();
        swiper5.autoplay.start();
      }
    });
  });
  