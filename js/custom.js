$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    })
})

$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // console.log(sct);
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })
})

$(function () {
    const MMS = new Swiper('.main_menu_slide', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints: {
            768: {
                slidesPerView: 6,
                spaceBetween: 40,
            },
        },
    })
});

$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/tqU0fCzJhJA',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.main_movie .control .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
    $('.main_movie .control .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('.main_movie .control .fullscreen').on('click', function () {
        $('#bgndVideo').YTPFullscreen();
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
})

// 반응형

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on')
        $('.header .gnb').toggleClass('on')
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb'), hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }
    })
})