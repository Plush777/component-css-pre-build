$(document).ready(function(){
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#header').outerHeight();

    $('#frameBody').scroll(function(){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $('#frameBody').scrollTop();
        console.log(st);

        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        if (st > lastScrollTop && st > navbarHeight){
            $('#header').removeClass('headDown').addClass('headUp');
        } else {
            if(st + $('#frameBody').height() < $(document).height()) {
                $('#header').removeClass('headUp').addClass('headDown');
            }
        }
        
        lastScrollTop = st;
    }

    $('.btnHeadToggle').on({
		"click":function (){
            $(this).toggleClass('active').siblings('.btnHeadToggle').removeClass('active');
            if(!$(this).hasClass('active')){
                $('#header').removeClass('active');
            }else if($(this).hasClass('active')){
                $('#header').addClass('active');
            }
		}
	});

    // $(window).on({
	// 	"scroll":function (){
    //         if($(this).scrollTop() == 0){
    //             $('#header').removeClass('headFixed');
    //         }else if($(this).scrollTop() > 0){
    //             $('#header').addClass('headFixed');
    //         }
	// 	}
	// })
});