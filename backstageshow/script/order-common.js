/**
 * Created by 5 on 2017/11/18.
 */
Vue.component('search-nav',{
    template:'<div id="search">'+
                '<input id="search-content" type="text" placeholder="用户名/手机号码/订单号"/>'+
                '<h3>成交时间：</h3>'+
                '<div id="search-starttime">'+
                '开始时间'+
                '</div>'+
                '<div class="line"></div>'+
                '<div id="search-endtime">'+
                '结束时间'+
                '</div>'+
                '<div id="search-status" data-status="100">'+
                '<p>全部状态</p>'+
                '<img src="/backstage/image/pull-down.png" alt=""/>'+
                '<div class="menu">'+
                '<li data-status="1"><div><p>已付款</p></div></li>'+
                '<li data-status="2"><div><p>未付款</p></div></li>'+
                '<li data-status="3"><div><p>暂停中</p></div></li>'+
                '<li data-status="4"><div><p>已完成</p></div></li>'+
                '<li data-status="5"><div><p>退款中</p></div></li>'+
                '<li data-status="6"><div><p>已退款</p></div></li>'+
                '<li data-status="7"><div><p>挂起</p></div></li>'+
                '<li data-status="8"><div><p>追回</p></div></li>'+
                '<li data-status="100" class="active"><div><p>全部状态</p></div></li>'+
                '</div>'+
                '</div>'+
                '<div id="search-btn" @click="Search">'+
                    '<h3>搜索订单</h3>'+
                    '</div>'+
                    '</div>'
    ,
    methods:{
        Search:function(){
            var keyword = $("#search-content").val();
            var status = $("#search-status").attr("data-status");
            var starttime='',endtime='';
            if($("#search-starttime").attr("y")){
                starttime = $("#search-starttime").html();
            }
            if($("#search-endtime").attr("m")){
                endtime =$("#search-endtime").html();
            }
            var key;
            if(starttime && endtime){
                if(endtime>=starttime){
                    key = true;
                }else{
                    alert("结束时间必须大于等于开始时间!");
                    return;
                }
            }else if(starttime &&!endtime){
                var date = new Date();
                endtime = date.getFullYear()+"/"+parseInt(date.getMonth()+1)+"/"+parseInt(date.getDate());
                if(endtime>=starttime){
                    key =true;
                }else{
                    alert("开始时间必须小于当前时间！");
                }
            }else if(!starttime && endtime){
                starttime = "2015/01/01";
                key =true;
            }else{
                key = true;
            }
            if(key){
                location.href="/backstage/html/order/order.html?wd="+encodeURI(keyword)+"&st="+starttime+"&et="+endtime+"&status="+status
            }
        },

    }
});
var search_wrap = new Vue({
    el:"#search-wrap"
});
//====================搜索栏
search_wrap.$nextTick(function(){
    //搜索栏状态菜单弹出
    $("#search-status").on("click",function(){
        event.stopPropagation();
        $(this).children(".menu").addClass("active");
    });
    $("#search-starttime").on("click",function(){
        var data={
            that:$("#search-starttime"),
            position:"bottom",
            y:$(this).attr("y"),
            m:$(this).attr("m"),
            d:$(this).attr("d")
        };
        TimeShow(data);
    });
    $("#search-endtime").on("click",function(){
        var data={
            that:$("#search-endtime"),
            position:"bottom",
            y:$(this).attr("y"),
            m:$(this).attr("m"),
            d:$(this).attr("d")
        };
        TimeShow(data);
    });

//搜索栏状态选择
    $("#search-status>.menu>li").on("click",function(){
        event.stopPropagation();
        var status = $(this).attr("data-status");
        $(this).addClass("active").siblings().removeClass("active");
        $("#search-status>p").html($(this).find("p").html());
        $("#search-status").attr("data-status",status);
        $("#search-status>.menu").removeClass("active");
    });
});
