$(document).ready(function () {
    

    //depth2
    $('.depth2').hide();
    $('.gnb > li').mouseenter(function () { 
        $(this).children('.depth2').stop().fadeIn();
    });
    $('.gnb > li').mouseleave(function () { 
        $(this).children('.depth2').stop().fadeOut();
    });

    //hidden menu
    $('.mgnb_wrap').hide();
    $('.mmenu').click(function () {
       $('.mgnb_wrap').fadeIn(); 
    });
    $('.close').click(function () {
       $('.mgnb_wrap').fadeOut(); 
    });

    //mdepth2
    $('.mdepth2').hide();
    $('.mgnb > li').click(function () { 
        $(this).children('.mdepth2').stop().slideDown();
        $(this).siblings().children('.mdepth2').stop().slideUp();

    });
    

    //메인 슬라이드
    $('.mv').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true
    });




});