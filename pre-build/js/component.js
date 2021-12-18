$(document).ready(function(){

    if($('.tabList li').first().hasClass('active')){
        $('.tabList li').parents('.tabNav').siblings('.tabCont').first().find('.toolbar').children('.toolbar-item').last().addClass('htmlStyle');
    }
    
    /* 공유 버튼 팝업 input에 현재 url 가져오기 */
    document.getElementById('subUrl').value = window.location.href;

    $('.btnShare').on({
        "click":function(){
            $('#dimmed').fadeIn();
            $('.popup').fadeIn();
        }
    });

    $('#dimmed').on({
        "click":function(){
            $(this).fadeOut();
            $('.popup').fadeOut();
        }
    });

    /* prism js 코드 하이라이트 툴팁에 클래스추가 */
    $('.tabList li').on({
        "click":function(){
            if($(this).eq(1).click()){
                $(this).parents('.tabNav').siblings('.tabCont').first().find('.toolbar').children('.toolbar-item').last().addClass('htmlStyle');
            }
            if($(this).eq(2).click()){
                $(this).parents('.tabNav').siblings('.tabCont').eq(1).find('.toolbar').children('.toolbar-item').last().addClass('scssStyle');
            }
            if($(this).eq(3).click()){
                $(this).parents('.tabNav').siblings('.tabCont').eq(2).find('.toolbar').children('.toolbar-item').last().addClass('cssStyle');
            }
            if($(this).eq(4).click()){
                $(this).parents('.tabNav').siblings('.tabCont').eq(3).find('.toolbar').children('.toolbar-item').last().addClass('jsStyle');
            }
        }
    });

    /* lnb 슬라이드토글 */
    $('.leftArea .leftMenu > li > span').on({
        "click":function(){
            $(this).next('.leftSubMenu').slideToggle();
            $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').find('.leftSubMenu').slideUp();
        }
    });

    $('.customSelect').on({
        "click":function(){
            $(this).toggleClass('active').siblings('.customSelect').removeClass('active');
        }
    });

    /* 요소 밖에 클릭 시 셀렉트 닫힘 */
    $(document).on({"click":function(e){
        if($('.customSelect').has(e.target).length == 0){
            $('.customSelect').removeClass('active');
        }
        }
    });

    $('.customSelect > ul > li > .selList > li').on({
        "click":function(){
            $(this).parents('ul').prev('span').text($(this).text());
        }
    });

    /* 뒤로가기 버튼 */
    backReferrer = document.referrer;
    console.log(document.referrer);

    $('.backArea .btnBack').on({
        "click":function(){
            if (backReferrer.indexOf('sub_first.html') != -1) { 
                history.back();
            }
            else { 
                location.href = "main.html";
            }
        }
    })

    /* 히스토리 개수 */
    historyCount = history.length;
    console.log(historyCount);

    if(historyCount <= 1){
        $('.backArea').hide();
    }else{
        $('.backArea').show();
    }

    $('#context').on({
        'contextmenu': function (e){
            if(e.pageX > $(window).width()-$('.mouseMenu').outerWidth() && e.pageY > $(window).height()-$('.mouseMenu').outerHeight()){
                $('.mouseMenu').css({left:e.pageX-$('.mouseMenu').outerWidth(),top:e.pageY-$('.mouseMenu').outerHeight()}).show();
            }else if(e.pageX <= $(window).width()-$('.mouseMenu').outerWidth() && e.pageY > $(window).height()-$('.mouseMenu').outerHeight()){
                $('.mouseMenu').css({left:e.pageX,top:e.pageY-$('.mouseMenu').outerHeight()}).show();
            }else if(e.pageX > $(window).width()-$('.mouseMenu').outerWidth() && e.pageY <= $(window).height()-$('.mouseMenu').outerHeight()){
                $('.mouseMenu').css({left:e.pageX-$('.mouseMenu').outerWidth(),top:e.pageY}).show();
            }else{
                $('.mouseMenu').css({left:e.pageX,top:e.pageY}).show();
            }
        }
    });

    $('.tabList li').on({
		"click":function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
		}
	})

    /* 마우스 커스텀메뉴가 나온 상태에서 밖을 클릭하거나 우클릭 시 hide */
    $(document).on({
        "click":function(){
            $('.mouseMenu').hide();
        },
        /* 1 = left , 2 = center , 3 = right */
        "mousedown":function(e){
            if(e.which === 3){
                $('.mouseMenu').hide();
            }
        }
    })

    $('#context').on({
        "click":function(){
            $('.mouseMenu').show();
        },
        "contextmenu": function (){
            return false;
        }
    })

    // clipboard.js
    var clipboard = new ClipboardJS('.btnClip');
    clipboard.on( 'success', function() {
        alert('클립보드에 복사되었습니다. 다른 곳에 이 링크를 붙여넣으세요.');
    });
    clipboard.on( 'error', function() {
        alert('클립보드 복사에 실패하였습니다. 다시 시도해주세요.');
    });
});
