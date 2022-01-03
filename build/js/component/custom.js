$(document).ready(function(){
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
});