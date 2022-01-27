$(document).ready(function () {

    var lastScrollTop = 0;
    $('#frameBody').scroll(function () {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('#header').removeClass('headDown').addClass('headUp');
        } else {
            $('#header').removeClass('headUp').addClass('headDown');
        }
        lastScrollTop = st;
    });

    $('.btnHeadToggle').on({
        "click": function () {
            $(this).toggleClass('active').siblings('.btnHeadToggle').removeClass('active');
            if (!$(this).hasClass('active')) {
                $('#header').removeClass('active');
            } else if ($(this).hasClass('active')) {
                $('#header').addClass('active');
            }
        }
    });
});