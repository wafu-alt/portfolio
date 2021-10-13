$(document).ready(function () {
//2차메뉴
    $('.depth2,.depth2_bg').hide();
    
    $('.gnb>li').mouseenter(function () {
        $('.depth2,.depth2_bg').stop().slideDown(); 
    });
    
    $('.gnb>li').mouseleave(function () {
        $('.depth2,.depth2_bg').stop().slideUp(); 
    });

//뉴스 슬라이드 https://kenwheeler.github.io/slick/
    $('.news_list').slick({
        dots: false, /* 점표시 안보이게 */
        autoplay: true,/* 자동으로 보이기 */
        vertical: true, /* 가로 아닌 세로 */
        arrows:false/* 화살표 안보이게 */
      });

//sns 슬라이드 https://kenwheeler.github.io/slick/
    $('.sns_list').slick({
        dots: false, /* 점표시 안보이게 */
        autoplay: true,/* 자동으로 보이기 */
        slidesToShow: 4,
        slidesToScroll: 1
      });

//member 슬라이드 https://kenwheeler.github.io/slick/
    $('.member_list').slick({
        dots: true, /* 점표시 안보이게 */
        autoplay: false,/* 자동으로 보이기 */
      });
});