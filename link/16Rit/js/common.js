$(document).ready(function () {
   
    //2차메뉴 제어
    $('.dp2').hide();
    $('.gnb > li').mouseenter(function () {
       $(this).children('.dp2').stop().slideDown(); 
    });
    $('.gnb > li').mouseleave(function () {
        $(this).children('.dp2').stop().slideUp(); 
     });

    //메인배너 슬라이드
    $('.mb').slick({
        autoplay: true,
        dots: true
       
    });
    
    //컨텐츠3 슬라이드
    $('.con3Banner').slick({
        autoplay: true,
        dots: true
       
    });
    
});