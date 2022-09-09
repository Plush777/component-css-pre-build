$(function () {
    $('.btnStarted').on({
        "click": function () {
            location.href = 'html/sub_first.html';
        }
    });

    $('.btnMobileMenu').on({
        "click": function () {
            const $sideBar = $(this).parents('#header').siblings('#sideBar');
            $sideBar.toggleClass('active');
            $sideBar.after('<div class="dimmed"></div>');
            if ($sideBar.hasClass('active')) {
                $('body').css('overflow', 'hidden');
            }
        }
    });

    $('.sideBarClose').on({
        "click": function () {
            $(this).parents('#sideBar').removeClass('active');
            $('.dimmed').remove();
            $('body').css('overflow', 'auto');
        }
    });

    $(document).on('click', '.dimmed', function () {
        $(this).remove();
        $('#sideBar').removeClass('active');
        $('body').css('overflow', 'auto');
    });

    $('#sideBar ul li:last-child a').on({
        "click": function () {
            $(this).toggleClass('active');
        }
    });

    let decidedScrollTop = 120;
    $(window).scroll(function () {
        let st = $(this).scrollTop();
        if (st > decidedScrollTop) {
            $('#header').addClass('fixed');
        } else if (st < decidedScrollTop) {
            $('#header').removeClass('fixed');
        }
        lastScrollTop = st;
    });
});

