$(document).ready(function(){
   
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

    $('.backArea .btnBack').on({
        "click":function(){
            if (document.referrer && document.referrer.indexOf("main.html") != -1 ){ 
                history.back();
            }
            else {
                $(this).parent('.backArea').addClass('none');
                location.href = "main.html";
            }
        }
    })
})
