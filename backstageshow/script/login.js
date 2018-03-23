
$("#username").on("input",function(){
    if($(this).val().length>0 && $("#password").val().length>0){
        $("#login").addClass("active");
    }else{
        $("#login").removeClass("active");
    }
    $("#notice .default").addClass("active");
    $("#notice .error").removeClass("active");
});

$("#password").on("input",function(){
    if($(this).val().length>0 && $("#username").val().length>0){
        $("#login").addClass("active");
    }else{
        $("#login").removeClass("active");
    }
    $("#notice .default").addClass("active");
    $("#notice .error").removeClass("active");
});

//var url ="http://api.xiaohei.co/bug/";
$("#login").on("click",function(){
    if($(this).hasClass("active")){
        var username = $("#username").val();
        var password = $("#password").val();
        var code = $("#code").val();
        if(username && password){
            $.ajax({
                url:"http://192.168.3.164:5011/validate/orderlogin",
                type:"POST",
                data:{
                    username:username,
                    password:password,
                    code:code
                },
                dataType:"json",
                success:function(e){
                    console.log(JSON.stringify(e))
                    //测试数据↓可删
//                    var e ={
//                        error:0,
//                        type:0,
//                        nickname:"哈哈",
//                        userid:14,
//                        token:""
//                    }
                    //↑
                    if(e.error ==0){
                        localStorage.nickname = e.nickname;
                        localStorage.token = e.token;
                        localStorage.userid = e.userid;
                        localStorage.type = e.type;
                        if(e.type == 0){        //用户
                            location.href="../bug/bug-list.html"
                        }else if(e.type == 'admin' || e.type=='administrators'){    //管理员
                            location.href="index1.html"
                        }
                    }else if(e.error == 1){     //账号密码错误
                        $("#notice .default").removeClass("active");
                        $("#notice .error").addClass("active");
                    }else if(e.error == 2){
                        alert("验证码错误！")
                    }else{
                        alert("网络连接错误！")
                    }
                },
                error:function(e){
                    console.log(JSON.stringify(e));
                }
            })
        }
    }
});

$("body").on("keypress",function(){
    if($("#login").hasClass("active")){
        if(event.keyCode==13){
            $("#login").click();
        }
    }
});
