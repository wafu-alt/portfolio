$(document).ready(function () {
// dp2 
    $('.dp2').hide(); 

    $('.gnb > li').mouseenter(function () {
       $(this).children('.dp2').stop().slideDown();
    });
    $('.gnb > li').mouseleave(function () {
       $(this).children('.dp2').stop().slideUp();
    });


});

