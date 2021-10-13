$(document).ready(function () {
   
    //아침식사, 점심식사 화살표 클릭했을때 아래 내용이 나타나고 안나타고 함
    $('.con1_tb1 tr td:nth-child(3)').click(function () {
       $(this).toggleClass('active');
       $('.con1_tb1_li').stop().toggle();
    });

    $('.con1_tb2 tr td:nth-child(3)').click(function () {
        $(this).toggleClass('active');
        $('.con1_tb2_li').stop().toggle();
     });



    //아침식사 아래 내용 숨김
    
    // $('.con1_tb1_li').hide(function () {
    //     // $('.con1_tb1 tr td:nth-child(3)').css(
    //     //     "background" , "url('../images/sub2/sub2-btn_down.png') no-repeat 0 0");
       
    // });

    //아침식사 down버튼 클릭했을 때 아래 내용이 보이고 안보이고 하기
    // $('.con1_tb1 tr td:nth-child(3)').click(function () {
    //     // $('.con1_tb1 tr td:nth-child(3)').css(
    //     // "background" , "url('../images/sub2/sub2-btn_up.png') no-repeat 0 0");
    //    $('.con1_tb1_li').stop().toggle();
    // });
    
    //조건부 display로 제어
    // if ($('.con1_tb1_li').css("display") == "table") {
    //     $('.con1_tb1 tr td:nth-child(3)').css(
    //         "background" , "url('../images/sub2/sub2-btn_up.png') no-repeat 0 0");
    // } else {
        
    // }
    
    // var con1_tb1_li = document.querySelector('.con1_tb1_li');
    // if ( con1_tb1_li.style.display === 'table') {
    //     con1_tb1_li.style.background = "url('../images/sub2/sub2-btn_up.png')no-repeat 0 0"
    // } else {

    // }




});