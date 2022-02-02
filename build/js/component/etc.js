$(function(){
    $('.arrowTop').on({
        "click": function () {
            $('#frameBody').animate({ scrollTop: 0 }, 600);
        }
    });

    $('.tgArea.fadeType01 .btnFadeInout').on({
        "click": function () {
            $(this).toggleClass('active').siblings('.btnFadeInout').removeClass('active');
        }
    });

    $('.tgArea.fadeType02 .btnFadeInout').on({
        "click": function () {
            $(this).siblings('.tgCont').fadeToggle();
        }
    });
});
