
$(function(){
    var x =$("#nav ul").eq(0).children();
    x.on("click",function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
});
