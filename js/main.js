$(document).ready(function(){
    var ele = true;
    var ef = true;
    $(".searchB").on("click", function(){
        $("body").toggleClass('black');
        if(ele){
            $("#two").fadeOut()
            $("#sec").fadeIn(1000);
            ele = !ele;
        }
        else{
            $("#sec").fadeOut();
            ele = !ele;
        }
    });

    $('.no_teme').hover(function(){
        $('.abs').fadeToggle();
    });
    $('.menus').click(function(){
        console.log(ef)
        if(ef){
            $(this).html('<li>Close<i class="fa fa-arrow-up"></i></li>');
            $(this).toggleClass('menuClick');
            $("#two").fadeToggle();
            ef = !ef;
        }
        else{
            $(this).html('<li>Menu<i class="fa fa-arrow-down"></i></li>');
            $(this).toggleClass('menuClick');
            $("#two").fadeToggle();
            ef = !ef;
        }
    })
})
