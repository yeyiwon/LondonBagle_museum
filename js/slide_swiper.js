// var bullet = ['-','-','-']

const swiper = new Swiper('.swiper', {
    // spaceBetween:30, // 슬라이드 사이 여백
    // slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
    // centeredSlides: true, //센터모드        
    // autoplay: { //자동슬라이드 (false-비활성화)          
    // delay: 2500, // 시간 설정          
    // disableOnInteraction: false, // false-스와이프 후 자동 재생        },
    // loop : false, // 슬라이드 반복 여부
    // loopAdditionalSlides : 1,

    loop: true,
        autoplay: {
            delay: 3000, // 3초마다 슬라이드
            disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
        },

    pagination: {
        el: '.swiper-pagination',
        clickable:true, 
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
});