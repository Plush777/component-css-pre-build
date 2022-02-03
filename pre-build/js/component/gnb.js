$(function () {
	$('.gnbHover #gnb').hover(function () {
		$('#menuBg,.depthTwo').stop().slideDown();
	}, function () {
		$('#menuBg,.depthTwo').stop().slideUp();
	});

	$('.gnb-li-hover #gnb>ul>li').on({
		"mouseenter": function () {
			$('#menuBg,.depthTwo').stop().slideDown();
		}
	})

	$('.gnb-li-hover #gnb').on({
		"mouseleave": function () {
			$('#menuBg,.depthTwo').stop().slideUp();
		}
	});

	$('.gnb-li-hover #gnb').on({
		"mouseleave": function () {
			$('#menuBg,.depthTwo').stop().slideUp();
		}
	});

	$('.gnbFind #gnb>ul>li').hover(function () {
		$(this).find('.depthTwo').stop().slideDown();
	}, function () {
		$(this).find('.depthTwo').stop().slideUp();
	});
});