$(function() {
    // let section = $('.section:first');

    // $(document).keydown($.throttle(function (e) {
    //     switch (e.which) {
    //         case 38: // up arrow
    //             prevSection();
    //             break;
    //         case 40: // down arrow
    //             nextSection();
    //             break;
    //     }
    // }, 500));

    // $('body').on('mousewheel', $.throttle(function (e) {
    //     if (e.originalEvent.wheelDelta > 0) {
    //         prevSection();
    //     }
    //     if (e.originalEvent.wheelDelta < 0) {
    //         nextSection();
    //     }
    // }, 500));

    const section2 = $('.section:first').next('.section').offset().top;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= section2 - $('nav.navbar').height()) {
            $('nav.navbar').stop().fadeIn('fast');
        } else if ($(this).scrollTop() < section2) {
            $('nav.navbar').stop().fadeOut('fast');
        }
    });

    function prevSection() {
        if (section.prev('.section').length) {
            section = section.prev('.section');
            $('html, body').animate({
                scrollTop: section.offset().top
            }, 1000);
        }
    }

    function nextSection() {
        if (section.next('.section').length) {
            section = section.next('.section');
            $('html, body').animate({
                scrollTop: section.offset().top
            }, 1000);
        }
    }
});