$(document).ready(function() {
    const header_h = $('.header');
    const gnb_ul = $('.gnb_ul');
    const submenu = $('.submenu');
    const util_bar = $('.util>ul>li>a');
    const logo_img = $('.logo img');
    const hambtn = $('.hambtn img')

    function header700(background, color, invert, brightness, hoverable) {
        header_h.css({ background, color });
        logo_img.css({ filter: `invert(${invert}) brightness(${brightness})` });
        hambtn.css({ filter: `invert(${invert}) brightness(${brightness})` });
        
        if (hoverable) {
            header_h.addClass('hoverable');
        } else {
            header_h.removeClass('hoverable');
        }
    }

    // 스크롤 이벤트 리스너 추가
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 700) {
            header700('rgba(255,255,255,0.9)', '#333', 0, 0, false);
            util_bar.addClass('hover-effect');
        } else {
            header700('transparent', '#fff', 1, 2, true);
            util_bar.removeClass('hover-effect');
        }
    });

    // 메뉴 호버 이벤트
    gnb_ul.hover(
        function() {
            header_h.stop().animate({ height: '250px' }, 300);
            submenu.css({ display: 'block' });
            if ($(window).scrollTop() <= 700) {
                header700('rgba(0,0,0,0.8)', '#fff', 1, 2, true);
            }
        },
        function() {
            header_h.stop().animate({ height: '80px' }, 300);
            submenu.css({ display: 'none' });
            if ($(window).scrollTop() <= 700) {
                header700('transparent', '#fff', 1, 2, true);
            }
        }
    );
});
