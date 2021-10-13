$(document).ready(function () {

  //상단 고정
  $(window).scroll(function () {
    if($(this).scrollTop() > 300) {
      $('#header').addClass('fix');
    } else {
      $('#header').removeClass('fix');
    }
  });


  //메인 배너 슬라이드
  $('.banner_list').slick({
      autoplay: true,
      dots: true,
      arrows: false
    });

  $('.slick').slick({
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, //센터는 좀 더 크게
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true //센터는 좀 더 크게
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //depth2
  $('.depth2').hide();
  $('.gnb>li').mouseenter(function () { 
      $(this).children('.depth2').stop().fadeIn();
  });
  $('.gnb>li').mouseleave(function () { 
      $(this).children('.depth2').stop().fadeOut();
  });


  


  //모바일 화면에서 히든메뉴 제어
  $('.ham').click(function () {
    $('#hidden_menu').fadeIn();
  })

  $('.mgnb_close').click(function () {
    $('#hidden_menu').fadeOut();
  })

  //mdepth2
  $('.mdepth2').hide();
  $('.mgnb > li').click(function () { 
    $(this).children('.mdepth2').slideDown();
    $(this).siblings().children('.mdepth2').slideUp(); //다른 메뉴를 클릭시 형제요소 다 닫힘
  });

});