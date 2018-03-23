/**
 * Created by 5 on 2017/9/18.
 */


var url="";

var header = new Vue({
    el:"#header-header",
    components:{
        "sr":{
            props:['index'],
            template:'<div id="header">'+
            '<div id="header-home">'+
            '<div>'+
            '<img src="/Intro/backstageshow/image/logo.png" alt=""/>'+
            '<div>' +
            '<h3>超能小黑管理中心</h3>' +
            '<p>VERSION 2.0</p>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div id="header-nav">'+
            '<div class="logo"><img src="/Intro/backstageshow/image/logo.png" alt=""/><h3>超能小黑管理中心</h3></div>'+
            '<div><a href="/Intro/backstageshow/html/index1.html">首页</a></div>'+
            '<div><a href="/Intro/backstageshow/html/order/order.html">订单</a></div>'+
            '<div><a href="/Intro/backstageshow/html/delivery/delivery.html">发货</a></div>'+
            '<div><a href="/Intro/backstageshow/html/service/service.html">售后</a></div>'+
            '<div><a href="/Intro/backstageshow/html/goods/goods.html">商品</a></div>'+
            '<div><a href="/Intro/backstageshow/html/weixin/weixin.html">微信</a></div>'+
            '<div><a href="/Intro/backstageshow/html/bug/bug-list-admin.html">bug</a></div>'+
            '<div><a href="/Intro/backstageshow/html/bug/personal-data.html">我的</a></div>'+
            '</div>'+
            '</div>',
            methods:{
                Render:function(){
                    $("#header-nav>div").eq(this.index).addClass("active");
                },
                LogOut:function(){
                    localStorage.clear();
                    location.href='/Intro/backstageshow/html/login.html'
                }
            },
            created:function(){
                this.Render()
            }
        }
    }
});
header.$refs.ch.Render();

var footer = new Vue({
    el:"#footer-footer",
    components:{
        'footer-common':{
            template:'<div id="footer-common">'+
                    '<div>'+
                    '<div>'+
                    '<a class="bug" href="/Intro/backstageshow/html/bug/bug-submit.html">'+
                    '<img src="/Intro/backstageshow/image/bug.png" alt=""/>'+
                    '<p>Bug快速提交入口</p>'+
                    '</a>'+
                    '<a href="">超能小黑官网</a>'+
                    '<span>/</span>'+
                    '<a href="">我家小黑淘宝店</a>'+
                    '<span>/</span>'+
                    '<a href="">我家小黑App</a>'+
                    '</div>'+
                    '<div class="logo">'+
                    '<img src="/Intro/backstageshow/image/logo2.png" alt=""/>'+
                    '<div>'+
                    '<p>超能小黑管理中心 V2.0</p>'+
                    '<span><i>©</i>2017武汉黑狗科技有限公司</span>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
        }
    }
});

$(function(){

    var img = $("<img id='wait_img' src='/Intro/backstageshow/image/wait.gif'>");
    $("body").append(img);
    if($(window).scrollTop()>80){
        $("#header-nav>div:first-child").addClass("active");
        $("#header-nav>div:nth-child(n+2)").addClass("short");
        $("#header").css("top",-80+"px");
    }
    var top=0,left=0;
    $(window).on("scroll resize",function(){
        if(top !=$(window).scrollTop()){
            if($(window).scrollTop()<80){
                $("#header-nav>div:first-child").removeClass("active");
                $("#header-nav>div:nth-child(n+2)").removeClass("short");
                $("#header").css("top",-$(window).scrollTop()+"px");
            }else{
                if($("#header").css("top") !=-80+"px"){
                    $("#header-nav>div:first-child").addClass("active");
                    $("#header-nav>div:nth-child(n+2)").addClass("short");
                    $("#header").css("top",-80+"px");
                }
            }
        }
        if(left != $(window).scrollLeft()){
            $("#header").css("left",-$(window).scrollLeft()+"px");
        }
        top = $(window).scrollTop();
        left = $(window).scrollLeft();
    })
});

var tokenTT;
function Token(e){
    if(e.error>0){
        if(!tokenTT){
            // alert(e.message);
        }
        if(e.error>=9000){
            localStorage.clear();
            location.href="/Intro/backstageshow/html/login.html";
            tokenTT = true;
        }
        return false;
    }
    return true;
}