$(function(){




    
    let hover =('.header .inner ul')
    let hoverenter =('.container .header .inner > ul > li > ul')
    let a = (".header .inner ul li ul li a")
    let after = (".header .inner ul li ul .after")

    $('.header .inner .btn').click(function(){
        $(hoverenter).toggleClass('active')
        $('.header-bg').toggleClass('on')
        $('.btn-box span').toggleClass('active')
        
    })
    $(hover).mouseenter(function(){
        $(hoverenter).addClass('active')
        $('.header-bg').addClass('on')
    })
    $('.header-bg').mouseleave(function(){
        $(hoverenter).removeClass('active')
        $('.header-bg').removeClass('on')
    })


    // swiper-button-stop.click(function(){})
    // $(this) stop1 = $(this).hasClass('swiper-button-stop')
    // if(stop1)


            // 첫번째 스와이퍼
            var swiper = new Swiper(".myswiper", {
                loop:true,
                effect : 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    formatFractionCurrent: function (number) {
                        return ('0' + number).slice(-2);
                    },
                    formatFractionTotal: function (number) {
                        return ('0' + number).slice(-2);
                    },
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '">0</span>' +
                            '<span class="swiper-pagination-divider"></span>' +
                            '<span class="' + totalClass + '">0</span>';
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
                backgroundcolor: '#e44453',
                width: '8px',
                right: '10px',
                },
    
                /* 스크롤바 스크롤바가 이동하는 부분 */
                swiperscrollbardrag: {
                backgroundcolor: '#e44453', 
                },
    
            });
    
            //두번째 스와이퍼
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
                // spaceBetween: 37.5,
                freeMode: true,
                observer: true,
                width:720,
                observeParents: true,
                loop:false,
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
            var swiper = new Swiper(".meswiper", {
                navigation: {
                    nextEl: ".swiper--next",
                    prevEl: ".swiper--prev",
                },
                pagination: {
                    el: '.swiper-pagination1',
                    type: 'fraction',
                    formatFractionCurrent: function (number) {
                        return ('0' + number).slice(-2);
                    },
                    formatFractionTotal: function (number) {
                        return ('0' + number).slice(-2);
                    },
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '">0</span>' +
                            '<span class="swiper-pagination-divider"></span>' +
                            '<span class="' + totalClass + '">0</span>';
                    },
                },     
            });
                    //네번째 스와이퍼
                    var swiper = new Swiper(".meSwiper", {
        //   loop: true,
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".meSwiper2", {
          loop: true,
        //   effect: 'fade',
        effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
          pagination: {
            el: ".swiper-pagination-1",
            type: "progressbar",
          },
        });
    

})