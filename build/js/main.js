$(function () {
    $('.btnArea .btnStart').on({
        "mouseenter": function () {
            $(this).parents('#wrap').addClass('blue');
            $('.centerArea .logo a').addClass('change');
        }
    });

    $('.btnArea .btnStart').on({
        "mouseleave": function () {
            $(this).parents('#wrap').removeClass('blue');
            $('.centerArea .logo a').removeClass('change');
        }
    });

    $('.btnStart').on({
        "click": function (e) {
            location.href = 'html/sub_first.html';
        }
    });
});

