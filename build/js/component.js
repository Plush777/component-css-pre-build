$(document).ready(function(){

    document.getElementById('url1').value = window.location.href;
    // document.getElementById('url2').value = location.href;
    // document.getElementById('url3').value = document.URL;

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

    historyCount = history.length;
    console.log(historyCount);

    if(historyCount <= 1){
        $('.backArea').hide();
    }else{
        $('.backArea').show();
    }
})
