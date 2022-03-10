$(function () {

    //모바일 체크
    if (/Android|webOS|iPhone|iPad|BlackBerry|Opera Mini/i.test(navigator.userAgent)) {

        //결과버튼 클릭 시 모바일에서만 팝업 실행
        $('.btnResult').on({
            "click": function (e) {
                // 이 클릭 이벤트만 실행하고 다른 btnResult에 걸려있는 이벤트들은 무시함
                e.stopImmediatePropagation();
                const cook = $.cookie('mobileResultPopup');
                if (cook == "ok") {
                    $('.popup.mobileResult').hide();
                    $('#dimmed').hide();
                    $('#frameBody').addClass('show');
                    $('#frameBody').removeClass('hide');
                } else {
                    $('.popup.mobileResult').show();
                    $('#dimmed').show();
                }
            }
        });
    }

    $('.btnConfirm').on({
        "click": function () {
            $('#frameBody').addClass('show');
            $('.popup.mobileResult').hide();
            $('#dimmed').hide();
            if ($('#frameBody').hasClass('hide')) {
                $('#frameBody').removeClass('hide');
            }
        }
    });

    $('.btnCancel').on({
        "click": function () {
            $('.popup.mobileResult').hide();
            $('#dimmed').hide();
        }
    });

    $('.todayChkClose').on({
        "click": function () {
            if ($('#todayChk').is(":checked")) {
                $.cookie('mobileResultPopup', 'ok', { expires: 1, path: '/' });
            }
            $('.popup.mobileResult').hide();
            $('#dimmed').hide();
            $('#frameBody').addClass('show');
        }
    });

    let urlStatehref = window.location.href;
    let urlArrhref = urlStatehref.split('/');
    // console.log(urlArrhref);
    if (urlArrhref[4] == 'sub_first.html') {
        $('.btnBack').css('display', 'none');
    } else {
        $('.btnBack').show();
    }

    if (window.matchMedia("screen and (max-width: 1280px)").matches) {
        console.log("해상도가 1280px 이하입니다");
        $('body').addClass('mobileType');
    } else {
        $('body').removeClass('mobileType');
    }

    if (document.getElementById('subUrl')) {
        document.getElementById('subUrl').value = window.location.href;
    }

    $('.topArea').on({
        "click": function () {
            $('html').animate({ scrollTop: 0 }, 600);
        }
    });

    $('.btnShare').on({
        "click": function () {
            $('#dimmed').fadeIn();
            $('.popup.share').fadeIn();
            popupEscEvent();
        }
    });

    $('#dimmed').on({
        "click": function () {
            $(this).fadeOut();
            $('.popup').fadeOut();
        }
    });

    $('.btnResult').on({
        "click": function () {
            $('#frameBody').addClass('show');
            $('#frameBody').removeClass('hide');
            if ($('#frameBody').css('display') == 'block') {
                $('body').css('overflow', 'hidden');
                $('#toast').fadeIn();
                setTimeout(function () {
                    $('#toast').fadeOut();
                }, 4000);
            }
        }
    });

    $('.frameClose').on({
        "click": function () {
            $('#frameBody').addClass('hide');
            $('#frameBody').removeClass('show');
            if ($('#frameBody').css('display') == 'none') {
                $('body').css('overflow', 'visible');
            }
        }
    });

    /* 더보기 메뉴 토글 및 툴팁 제어 */
    $('.utilArea li .btnMore').on({
        "click": function () {
            const moreSubMenu = $(this).find('.moreSubMenu');
            const moreTooltip = $(this).find('.toolTip.more');

            $(moreSubMenu).toggleClass('active');
            if (moreSubMenu.hasClass('active')) {

                $(moreTooltip).hide();
            } else if (!moreSubMenu.hasClass('active')) {
                $(moreTooltip).show();
            }
        }
    });

    $(document).on({
        "click": function (e) {
            if ($('.utilArea li .btnMore .moreSubMenu').has(e.target).length == 0) {
                $('.utilArea li .btnMore .moreSubMenu').removeClass('active');
            }
        }
    });

    const tabList = $('.tabList li');

    $(tabList).on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
        }
    })

    /* prism js 코드 하이라이트 툴팁에 클래스추가 */
    $(tabList).on({
        "click": function () {
            if ($(this).eq(2).click()) {
                $(this).parents('.tabNav').siblings('.tabCont').eq(1).find('.toolbar').children('.toolbar-item').last().addClass('scssStyle');
            }
            if ($(this).eq(3).click()) {
                $(this).parents('.tabNav').siblings('.tabCont').eq(2).find('.toolbar').children('.toolbar-item').last().addClass('cssStyle');
            }
            if ($(this).eq(4).click()) {
                $(this).parents('.tabNav').siblings('.tabCont').eq(3).find('.toolbar').children('.toolbar-item').last().addClass('jsStyle');
            }
        }
    });

    /* lnb 슬라이드토글 */
    $('.leftArea .leftMenu > li > span').on({
        "click": function () {
            $(this).next('.leftSubMenu').stop().slideToggle();
            $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').find('.leftSubMenu').slideUp();
        }
    });

    /* lnb dep3 메뉴 */
    $('.leftArea .leftMenu > li > .leftSubMenu>.dep3Cont').on({
        "click": function () {
            $(this).find('.dep3').stop().slideToggle();
            $(this).toggleClass('on').siblings('li').removeClass('on').find('.leftSubMenu').slideUp();
        }
    });

    let urlState = window.location.pathname;
    let urlArr = urlState.split('/');
    // console.log(urlArr);

    /* 서브 홈버튼 */
    $('.btnBack').on({
        "click": function () {
            location.href = urlArr[0] + '/' + 'html/sub_first.html';
        }
    })

    /* 히스토리 개수 */
    historyCount = history.length;
    console.log("히스토리 개수는 " + historyCount + "개 입니다.");

    function historyCountCheck() {
        if (historyCount == 1) {
            $('.backArea').css('visibility', 'hidden');
        } else if (historyCount > 1) {
            $('.backArea').css('visibility', 'visible');
        }
    }

    if (!$('body').hasClass('mobileType')) {
        historyCountCheck();
    }

    $('.table.noticeBoard .tgShowHideRow').on({
        "click": function () {
            $(this).next('.tgContRow').toggleClass('active').siblings('.tgContRow').removeClass('active');
        }
    });

    /* update-note.html row */
    $('.boardList .cont.items .li').on({
        "click": function () {
            const liShowHideBox = $(this).next('.listShowHideBox');

            liShowHideBox.toggleClass('on').stop().slideToggle().siblings('.listShowHideBox').slideUp().removeClass('on');
            if (liShowHideBox.hasClass('on')) {
                $(this).closest('.li').find('.boardItem').removeClass('underLine');
            } else if (!liShowHideBox.hasClass('on')) {
                $(this).closest('.li').find('.boardItem').last().addClass('underLine');
            }
        }
    });

    $('.leftMenu li.disabled').on({
        "click": function () {
            alert('준비중인 페이지입니다. 조금만 기다려주세요!');
        }
    })

    $('.moreArea').on({
        "click": function () {
            const moveElement = $(this).parents('.headArea').siblings('.rightArea');
            const prevElement = $(this).parents('.headArea').prev('.leftArea');

            $(this).toggleClass('active');
            prevElement.toggleClass('active').siblings('.leftArea').removeClass('active');
            if (prevElement.hasClass('active')) {
                moveElement.addClass('move');
                $('body').css('overflow', 'hidden');
            } else if (!prevElement.hasClass('active')) {
                moveElement.removeClass('move');
                $('body').css('overflow', 'auto');
            }
        }
    })

    // let hCalcBody = $('#frameBody').height();
    // let hCalcWrap = $('#frameBody .wrap').height();
    // let hCalcContents = $('#frameBody .contents').height();
    // console.log(hCalcBody, hCalcWrap);

    // if (hCalcWrap > hCalcBody) {
    //     $('#frameBody .btnArea').addClass('r20');
    // } else {
    //     $('#frameBody .btnArea').removeClass('r20');
    // }

    /* #wrap 스크롤 존재여부확인 */
    $.fn.hasScrollBar = function () {
        return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
    };

    if (!$('#wrap').hasScrollBar() == true) {
        $('.topArea').css('display', 'none');
    }

    /* 스크롤 위치가 맨아래까지 가면 탑버튼 fadeIn */
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.topArea').fadeIn();
        } else {
            $('.topArea').fadeOut();
        }
    });

    /* frameBody esc */
    $(document).on('keyup', function (e) {
        if (e.keyCode == 27) {
            $('#frameBody').hide();
        }
    });

    function liShowHideBoxClose() {
        $('.boardBox .boardItem:last-child').addClass('underLine');
    }

    if (!document.querySelector('.listShowHideBox')) {
        return;
    } else {
        liShowHideBoxClose();
    }

    function clipBoard() {
        var clipboard = new ClipboardJS('.btnClip');
        clipboard.on('success', function () {
            alert('클립보드에 복사되었습니다. 다른 곳에 이 링크를 붙여넣으세요.');
        });
        clipboard.on('error', function () {
            alert('클립보드 복사에 실패하였습니다. 다시 시도해주세요.');
        });
    }

    if (document.querySelector('.btnClip')) {
        clipBoard();
    }

    /* popup esc */
    function popupEscEvent() {
        $(document).on('keyup', function (e) {
            if (e.keyCode == 27) {
                $('.popup.share,#dimmed').fadeOut();
                console.log('esc가 감지되어 공유하기 팝업을 닫습니다.');
            }
        });
    }
});

function prevent(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
}

const fouc = (F) => {
    F.className = F.className.replace(/\bno-display\b/, 'show-display');
    document.documentElement = F;
};

document.addEventListener('DOMContentLoaded', () => {
    const el = document.documentElement;
    const skeletonRow = document.querySelectorAll('.skelRow');
    
    setTimeout(() => {
        el.classList.remove('skel');
        for (let i = 0; i < skeletonRow.length; i++) {
            skeletonRow[i].classList.remove('skelRow');
        }
    }, 900);
});