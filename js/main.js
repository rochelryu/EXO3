$(document).ready(function(){
    var ele = true;
    $(".searchB").on("click", function(){
        $("body").toggleClass('black');
        if(ele){
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

        $(this).toggleClass('menuClick');
        $("#two").fadeToggle();
    })
})
