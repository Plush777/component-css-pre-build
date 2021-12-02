$(document).ready(function(){

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

    $('.btnArea .btnStart').on({
        "mouseenter":function(){
            $(this).parents('#wrap').addClass('blue');
            $('.centerArea .logo a').addClass('change');
        }
    });

    $('.btnArea .btnStart').on({
        "mouseleave":function(){
            $(this).parents('#wrap').removeClass('blue');
            $('.centerArea .logo a').removeClass('change');
        }
    });

    $('.leftArea .leftMenu > li > span').on({
        "click":function(){
            $(this).next('.leftSubMenu').slideToggle();
            $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').find('.leftSubMenu').slideUp();
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

    $('.resultArea').on({
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
});

function copyUrl(btnID) {
    const copyBtn = document.getElementById(btnID);
    const textElement = document.getElementById(btnID.replace('-btn', ''));
    let text;
    if (textElement.tagName === 'TEXTAREA' || textElement.tagName === 'INPUT') {
      text = textElement.value;
    } else {
      text = textElement.textContent;
    }

    if (text) {
      navigator.clipboard.writeText(text)
        // 성공인 경우
        .then(() => {
          if (copyBtn.textContent !== '복사됨!') {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '복사됨!';
            setTimeout(() => {
              copyBtn.textContent = originalText;
            }, 1000);
          }
        })
        // 실패인 경우
        .catch(err => {
          console.log('클립보드에 복사 실패', err);
        })
    }
}
