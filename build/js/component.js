$(document).ready(function(){
    if(window.matchMedia("screen and (max-width: 1280px)").matches) {
        console.log("해상도가 1280px 이하입니다");
        $('body').addClass('mobileType');
    }else{
        $('body').removeClass('mobileType');
    }

    if(document.getElementById('subUrl')){
        document.getElementById('subUrl').value = window.location.href;
    }

    $('.btnShare').on({
        "click":function(){
            $('#dimmed').fadeIn();
            $('.popup').fadeIn();
            popupEscEvent();
        }
    });

    $('#dimmed').on({
        "click":function(){
            $(this).fadeOut();
            $('.popup').fadeOut();
        }
    });

    $('.btnResult').on({
        "click":function(){
            $('#frameBody').show();
            if($('#frameBody').css('display') == 'block'){
                $('body').css('overflow','hidden');
                $('#toast').fadeIn();
                setTimeout(function(){
                    $('#toast').fadeOut();
                },4000);
            }
        }
    });

    $('.frameClose').on({
        "click":function(){
            $('#frameBody').hide();
            if($('#frameBody').css('display') == 'none'){
                $('body').css('overflow','visible');
            }
        }
    });

    /* 더보기 메뉴 토글 및 툴팁 제어 */
    $('.utilArea li .btnMore').on({
        "click":function(){
            var moreSubMenu = $(this).find('.moreSubMenu');
            var moreTooltip = $(this).find('.toolTip.more');

            $(moreSubMenu).toggleClass('active');
            if(moreSubMenu.hasClass('active')){
                $(moreTooltip).hide();
            }else if(!moreSubMenu.hasClass('active')){
                $(moreTooltip).show();
            }
        }
    });

    
    // $(document).on({"mouseup":function(e){
    //     if($('.moreSubMenu').has(e.target).length == 0){
    //         $('.moreSubMenu').removeClass('active');
    //     }
    // }
    // });
   

    var tabList = $('.tabList li');

    $(tabList).on({
		"click":function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
		}
	})

    /* prism js 코드 하이라이트 툴팁에 클래스추가 */
    $(tabList).on({
        "click":function(){
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

    var urlState = window.location.pathname;
    var urlArr = urlState.split('/header');

    /* 서브 홈버튼 */
    $('.btnBack').on({
        "click":function(){
            location.href = urlArr[0] + '/' + 'sub_first.html';
        }
    })

    /* 히스토리 개수 */
    historyCount = history.length;
    console.log("히스토리 개수는 " + historyCount + "개 입니다.");

    function historyCountCheck(){
        if(historyCount == 1){
            $('.backArea').hide();
        }else if(historyCount > 1){
            $('.backArea').show();
        }
    }

    if(!$('body').hasClass('mobileType')){
        historyCountCheck();
    }

    $('.table.noticeBoard .tgShowHideRow').on({
        "click":function(){
            $(this).next('.tgContRow').toggleClass('active').siblings('.tgContRow').removeClass('active');
        }
    });

    /* 테이블 아코디언 */
    $('.table.noticeBoard .tgShowHideRow').on({
        'click': function click() {
            $(this).closest('.tgShowHideRow').toggleClass('active').siblings('.tgShowHideRow').removeClass('active');
            
            var tgTableRow = $(this).next('.tgContRow');
            if(tgTableRow.css('display') == 'none'){
                tgTableRow.toggle().find('.showHideBox').stop().slideDown();
                tgTableRow.siblings('.tgContRow').css('display','none').find('.showHideBox').slideUp();
            }else{
                tgTableRow.find('.showHideBox').stop().slideUp(function(){
                    if($(this).css('display') == 'none'){
                        $(this).closest('.tgContRow').hide();
                    }
                });
            }
        }
    });

    /* update-note.html row */
    $('.boardList .cont.items .li').on({
        "click":function(){
            var liShowHideBox = $(this).next('.listShowHideBox');

            liShowHideBox.toggleClass('on').stop().slideToggle().siblings('.listShowHideBox').slideUp().removeClass('on');
            if(liShowHideBox.hasClass('on')){
                $(this).closest('.li').find('.boardItem').removeClass('underLine');
            }else if(!liShowHideBox.hasClass('on')){
                $(this).closest('.li').find('.boardItem').last().addClass('underLine');
            }
        }
    });

    $('.leftMenu li.disabled').on({
		"click":function(){
			alert('준비중인 페이지입니다. 조금만 기다려주세요!');
		}
	})

    $('.moreArea').on({
		"click":function(){
            var moveElement = $(this).siblings('.rightArea,.utilArea');
            var prevElement = $(this).prev('.leftArea');

            $(this).toggleClass('active');
            prevElement.toggleClass('active').siblings('.leftArea').removeClass('active');
            if(prevElement.hasClass('active')){
                moveElement.addClass('move');
                $('body').css('overflow','hidden');
            }else if(!prevElement.hasClass('active')){
                moveElement.removeClass('move');
                $('body').css('overflow','auto');
            }
		}
	})

    function liShowHideBoxClose(){
        $('.boardBox .boardItem:last-child').addClass('underLine');
    }

    if(!document.querySelector('.listShowHideBox')){
        return;
    }else{
        liShowHideBoxClose();
    }


    function clipBoard() {
        var clipboard = new ClipboardJS('.btnClip');
        clipboard.on( 'success', function() {
            alert('클립보드에 복사되었습니다. 다른 곳에 이 링크를 붙여넣으세요.');
        });
        clipboard.on( 'error', function() {
            alert('클립보드 복사에 실패하였습니다. 다시 시도해주세요.');
        });
    }

    if(!document.querySelector('.btnClip')){
        return;
    }else{
        clipBoard();
    }

    function popupEscEvent() {
        $(document).on('keyup',function(e) {
            if (e.keyCode == 27) {
                $('.popup.share,#dimmed').fadeOut();
                console.log('esc가 감지되어 공유하기 팝업을 닫습니다.');
            }
        });
    }
});