$(document).ready(function () {

    //모바일 메뉴
    $('.mgnb_wrap').hide();
    $('.ham').click(function () {
       $('.mgnb_wrap').fadeIn(); 
    });
    $('.close').click(function () {
        $('.mgnb_wrap').fadeOut(); 
     });
     
    //메인비주얼
    $('.mv').slick({
        autoplay: true,
        dots: true
    });


    //
    $('.brand_list').slick({
        autoplay: true,
        fade: true
    });


    //
    $('.magazine_list').slick({
        dots: false,
        infinite: true, //계속 반복
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1400, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });










});