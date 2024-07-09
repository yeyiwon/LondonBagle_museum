
    $('.silder_best_menu').slick({
        slide: 'div',
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        // appendDots: $('#dots'),
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
