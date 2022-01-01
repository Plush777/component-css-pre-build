$(document).ready(function(){
    
    // var didScroll; 
    var lastScrollTop = 0; // 스크롤이 안되어있을때의 좌표값
    var delta = 1; // 스크롤 기준값
    var navbarHeight = $('#header').outerHeight(); //헤더의 패딩+보더를 포함한 높이값

    // 스크롤 이벤트가 감지되면 변수 didScroll에 true값을 넣음.
    // $(window).scroll(function(){
    //     didScroll = true;
    // });

    //해당 함수를 실행하기까지의 걸리는 시간
    setInterval(function() {
        //didScroll의 값이 true면 해당 함수를 실행하고, didScroll의 값을 false로 바꿈
        // if (didScroll) {
        //     hasScrolled();
        //     didScroll = false;
        // }
        hasScrolled();
    }, 100);

    function hasScrolled() {
        //현재 스크롤 값을 가져옴
        var st = $(this).scrollTop();
       
        //현재 스크롤 값이 이전 스크롤 값보다 delta만큼 커졌을때
        //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
        if(Math.abs(lastScrollTop - st) <= delta)
            return; //함수 종료 
        
        //현재 스크롤 값이 마지막 스크롤 값 혹은 헤더 높이값보다 크면 밑에 코드를 실행
        if (st > lastScrollTop && st > navbarHeight){ 
            $('#header').removeClass('headDown').addClass('headUp'); } 
        else { 
            if(st + $(window).height() < $(document).height()){ 
                $('#header').removeClass('headUp').addClass('headDown'); 
            } 
        }

        lastScrollTop = st;
    };

    

    /* header */
    // $(window).on({
	// 	"scroll":function (){
    //         if($(this).scrollTop() == 0){
    //             $('#header').removeClass('headFixed');
    //         }else if($(this).scrollTop() > 0){
    //             $('#header').addClass('headFixed');
    //         }
	// 	}
	// })


    /* gnb */
	$('.gnbHover #gnb').hover(function(){
        $('#menuBg,.depthTwo').stop().slideDown();
    },function(){
		$('#menuBg,.depthTwo').stop().slideUp();
    });

    $('.gnb-li-hover #gnb>ul>li').on({
		"mouseenter":function (){
			$('#menuBg,.depthTwo').stop().slideDown();
		}
	})

	$('.gnb-li-hover #gnb').on({
		"mouseleave":function (){
			$('#menuBg,.depthTwo').stop().slideUp();
		}
	});

    $('.gnb-li-hover #gnb').on({
		"mouseleave":function (){
			$('#menuBg,.depthTwo').stop().slideUp();
		}
	});

    $('.gnbFind #gnb>ul>li').hover(function(){
        $(this).find('.depthTwo').stop().slideDown();
    },function(){
        $(this).find('.depthTwo').stop().slideUp();
    });

    /* swiper */
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        speed:500,
        delay:1000,
        slidesPerView: 'auto',
        
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

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
});