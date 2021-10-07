$(document).ready(function () {

    //active 클래스 추가

    // $('.gnb a').on('click', function(event) {
    //     $(this).parents().find('li a').removeClass('active');
    //     $(this).addClass('active');
    // });
    
    // $(window).on('scroll', function() {
    //     $('.target').each(function() {
    //         if($(window).scrollTop() >= $(this).offset().top) {
    //             var id = $(this).attr('id');
    //             $('.gnb li.a').removeClass('active');
    //             $('.gnb li.a[href=#'+ id +']').addClass('active');
    //         }
    //     });
    // });
    
    
    //current 클래스 추가
    $('.AboutME').click(function () { 
        $(this).addClass('current')
        $('.Skills').removeClass('current');
    });
    $('.Skills').click(function () { 
        $(this).addClass('current')
        $('.AboutME').removeClass('current');
    });
    
    
    
    //작품 슬라이드
    $('.mv').slick({ 
        autoplay:true,
        autoplaySpeed: 1000,
        arrows: false,
        dots:true,
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        fade: true
    });


    //작품 슬라이드
    $('.works').slick({ 
        autoplay:false,
        dots:true,
        fade: false
    });


});