$(document).ready(function(){
    $('.hambtn').on('click', function(){
        // 이미지를 토글하여 보이기/숨기기
        $('.hambtn .menu_icon').toggleClass('activebtn');
        $('.hambtn .close_icon').toggleClass('activebtn');
        
        $('.menupan_mobile').toggleClass('visible')
        
        // $('.mml ')
    });
});
