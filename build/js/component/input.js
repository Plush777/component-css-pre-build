$(document).ready(function(){
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
});