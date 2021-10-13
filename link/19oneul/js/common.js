// JavaScript Document

$(document).ready(function () {


    // 모바일 메뉴    
    $(".m_menu").click(function () {
        $(".mgnb_wrap").animate({
            left: '0'
        });
    });

    $(".close").click(function () {
        $(".mgnb_wrap").animate({
            left: '100%'
        });
    });



    // 아코디언 슬라이드
    var m = matchMedia("screen and (min-width:1024px)");
    if (m.matches) {
        $("#room .inner ul li:nth-child(1)").addClass("active");
        $("#room .inner ul li").mouseenter(function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
    } else {
        $("#room .inner ul li").removeClass("active");
    }



});
