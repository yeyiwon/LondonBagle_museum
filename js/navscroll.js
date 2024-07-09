$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        // 스크롤 위치가 370px 이상일 때 고정
        if (scrollTop >= 350) {
            $('.order_box').addClass('fixed');
        } else {
            $('.order_box').removeClass('fixed');
        }
    });
});