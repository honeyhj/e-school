/*=====SMOOTH SCROLL FOR IE/ EDGE/ SAFARI=====*/
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
/*=====SMOOTH SCROLL TOP SECTION=====*/
$(document).ready(function () {
    $('#scroll-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});