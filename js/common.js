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
    
    
//자기소개에 왼쪽 gnb 제어 (current 클래스 추가)
    $('.AboutME').click(function () { 
        $(this).addClass('current')
        $('.Skills').removeClass('current');
    });
    $('.Skills').click(function () { 
        $(this).addClass('current')
        $('.AboutME').removeClass('current');
    });
    
    
    
//메인 슬라이드
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


//대표작품 슬라이드
    $('.works').slick({ 
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });


//대표 작품 프리뷰 보기 닫기
    $('.work21_preview').click(function(){ 
        $('.work21_view').fadeIn();
    });
    $('.work_close').click(function(){
        $('.work21_view').fadeOut();
    });

    $('.work16_preview').click(function(){ 
        $('.work16_view').fadeIn();
    });
    $('.work_close').click(function(){
        $('.work16_view').fadeOut();
    });


    

});