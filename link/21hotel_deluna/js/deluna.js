$(document).ready(function () {
    //.mgnb_menu mobile hidden menu control
    $('.mgnb_menu').click(function () { 
      $('.mgnb_wrap').fadeIn();
      $('.mgnb_wrap').addClass('ani_slide');
      
    });

    $('.mgnb_close').click(function () { 
      $('.mgnb_wrap').fadeOut();
      $('.mgnb_wrap').removeClass('ani_slide');
      
    });


    // hidden menu depth2 control
    $('.mgnb > li').click(function (e) { 
      $(this).children('.mdepth2').slideDown();
      $(this).siblings().children('.mdepth2').slideUp();
    });

    //slick con1 main visual slide
    $('.mv').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1
      });


    // youtube on off control
    $('.hover_img').click(function () {
      $('.active_img').fadeIn();
    });
    $('.active_img .close').click(function () {
      $('.active_img').fadeOut();
    });

    //slick con4 Char Intro
    $('.char').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1420,
          settings: {
            arrows: false,
            infinite: true,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
            slidesToScroll: 1
            
          }
        }
      ]
     
    });
    $('.slick-track > li').removeAttr("style");



    //https://dimsemenov.com/plugins/magnific-popup/
    //플러그인 con6_Gallery 사진 클릭 확대 
    $('.gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
      
    });

});