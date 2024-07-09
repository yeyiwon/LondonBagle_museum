$(document).ready(function() {
    var headerHeight = $('.header').outerHeight(); // header의 높이를 가져옵니다.
    var orderBoxTop = $('.p_user_info').offset().top; // order_box의 시작 위치를 가져옵니다.

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
if (windowWidth <= 768) {
            $('.p_user_info').removeClass('fixed'); // 반응형일 때 고정 클래스 제거
            return;
        }


        // header의 하단 끝 위치 계산
        var headerBottom = headerHeight;

        // order_box가 header에 닿을 때 고정
        if (scrollTop >= orderBoxTop - headerBottom) {
            $('.p_user_info').addClass('fixed');
        } else {
            $('.p_user_info').removeClass('fixed');
        }
    });
});