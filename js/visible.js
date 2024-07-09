$(window).on('scroll', function() {
    let scrollTop = $(window).scrollTop();
    let windowWidth = $(window).width();

    console.log(scrollTop);

    // 반응형일 때 스크롤 이벤트 효과 끄기 (화면 너비가 768px 이하일 때)
    if (windowWidth <= 768) {
        return;
    }

    if (scrollTop > 1500) {
        $('.insta_grid div img').each(function(index) {
            // 인스타 그리드 안에 있는 이미지를 반복한다 
            var $img = $(this);
            // 현재 반복중인 요소를 $img안에 넣고
            setTimeout(function() {
                $img.addClass('visible');
                // visible 추가
            }, index * 150); 
            // 순차적 딜레이
        });
    }

    if (scrollTop > 300) {
        $('.intro_w_l').addClass('active');

        setTimeout(function(){
            $('.intro_w_r').addClass('active');
        }, 300);
    }
});
