$(function(){
    GetCodeImg();
});
function GetCodeImg(){
    $.ajax({
        url:"",
        // type:"POST",
        data:{
            userid:localStorage.userid,
            url:""
        },
        //dataType:'json',
        success:function(e){
            var e={
                url:"https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=7bcb659c9745d688a302b5a29cf91a23/2934349b033b5bb571dc8c5133d3d539b600bc12.jpg",
                error:0
            };
            $("#codeimg").attr("src",e.url);
        },
        error:function(){
            $("#code>div").addClass("active");
        }
    })
}
$("#code>div").on("click",function(){
    $(this).removeClass("active");
    GetCodeImg();
});