$(document).ready(function(){
    $('#frameBody .wrap.pre.popShowHide .btnShowHide').on({
        "click":function(){
            $('.popup').show();
            $('.exDimmed').show();
        }
    });

    $('.btnClose').on({
        "click":function(){
            $('.popup').hide();
            $('.exDimmed').remove();
        }
    });

    /* 예제에 사용될 코드
        $('#exToast').fadeIn();
        setTimeout(function(){
            $('#exToast').fadeOut();
        },4000);
    */
    $('.btnResult').on({
        "click":function(){
            if($('#frameBody').css('display') == 'block'){
                $('#exToast').fadeIn();
                setTimeout(function(){
                    $('#exToast').fadeOut();
                },4000);
            }
        }
    });

    $('#drag').draggable({
        cancel:'.cont',
        containment: "window"
    });
});