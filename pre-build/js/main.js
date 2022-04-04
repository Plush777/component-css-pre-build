$(function () {
    $('.btnStarted').on({
        "click": function () {
            location.href = 'sub_first.html';
        }
    });

    $('.btnMobileMenu').on({
        "click": function () {
            const $sideBar = $(this).parents('#header').siblings('#sideBar');
            $sideBar.toggleClass('active');
            $sideBar.after('<div id="dimmed"></div>');
            if ($sideBar.hasClass('active')) {
                $('body').css('overflow', 'hidden');
            }
        }
    });

    $('.sideBarClose').on({
        "click": function () {
            $(this).parents('#sideBar').removeClass('active');
            $('#dimmed').remove();
            $('body').css('overflow', 'auto');
        }
    });

    $(document).on('click','#dimmed',function(){
		$(this).remove();
		$('#sideBar').removeClass('active');
        $('body').css('overflow', 'auto');
	});
});

