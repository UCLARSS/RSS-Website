$(function () {

    animations();
    
});

$(window).load(function () {
    windowWidth = $(window).width();
    $(this).alignElementsSameHeight();

});



/* =========================================
 *  animations
 *  =======================================*/

function animations() {

    if (Modernizr.csstransitions) {

        delayTime = 0;
        $('[data-animate]').css({opacity: '0'});
        $('[data-animate]').waypoint(function (direction) {
            delayTime += 150;
            $(this).delay(delayTime).queue(function (next) {
                $(this).toggleClass('animated');
                $(this).toggleClass($(this).data('animate'));
                delayTime = 0;
                next();
                //$(this).removeClass('animated');
                //$(this).toggleClass($(this).data('animate'));
            });
        },
                {
                    offset: '95%',
                    triggerOnce: true
                });
        $('[data-animate-hover]').hover(function () {
            $(this).css({opacity: 1});
            $(this).addClass('animated');
            $(this).removeClass($(this).data('animate'));
            $(this).addClass($(this).data('animate-hover'));
        }, function () {
            $(this).removeClass('animated');
            $(this).removeClass($(this).data('animate-hover'));
        });
    }

}




