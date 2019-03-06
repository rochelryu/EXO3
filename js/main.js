$(document).ready(function(){
    var ele = true;
    $(".searchB").on("click", function(){
        $("body").toggleClass('black');
        if(ele){
            $("section").fadeIn(1000);
            ele = !ele;
        }
        else{
            $("section").fadeOut();
            ele = !ele;
        }
    })
})