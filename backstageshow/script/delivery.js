/**
 * Created by 5 on 2018/1/3.
 */
$(function(){
    var key1=0;
    $("#main-time-select").on("click",function(){
        var st,et;
        if($(this).find(".st").html()!=0){
            st = $(this).find(".st").html()
        }else{
            st =main.today;
        }
        if($(this).find(".et").html()!=0){
            et = $(this).find(".et").html()
        }else{
            et =main.today;
        }
        var data={
            that:$("#main-time-select"),
            position:"bottom",
            y:$(this).attr("y"),
            m:$(this).attr("m"),
            d:$(this).attr("d"),
            multiselect:true,
            mu1:$(this).find(".st"),
            mu2:$(this).find(".et"),
            st:st,
            et:et
        };
        TimeShow(data);
    });
    $("#main-time-select").find("span").on("DOMNodeInserted",function(){
        key1++;
        if(key1==2){
            var et;
            if($("#main-time-select .et").html()>main.today){
                $("#main-time-select .et").html(main.today);
            }
            Vue.set(main,'endtime',$("#main-time-select .et").html());
            Vue.set(main,'starttime',$("#main-time-select .st").html());
            key1=0;
            main.GetData();
        }
    });


    $("#search .start-time").on("click",function(){
        var data={
            that:$(this),
            position:"bottom",
            y:$(this).attr("y"),
            m:$(this).attr("m"),
            d:$(this).attr("d")
        };
        TimeShow(data);
    });
    $("#search .end-time").on("click",function(){
        var data={
            that:$(this),
            position:"bottom",
            y:$(this).attr("y"),
            m:$(this).attr("m"),
            d:$(this).attr("d")
        };
        TimeShow(data);
    });


})




var search = new Vue({
    el:"#search",
    data:{
        type:"1",
        keyword:"",
        status:"99",
        statuslist:[
            {status:99,name:"全部状态"},
            {status:1,name:"待发货"},
            {status:2,name:"已发货"},
            {status:5,name:"已挂起"},
            {status:6,name:"撤回"}
        ]
    },
    methods:{
        MenuShow:function(){
            var _this;
            if($(event.target).hasClass("menu-wrap")){
                _this = $(event.target)
            }else{
                _this = $(event.target).parents(".menu-wrap");
            }
            if(!_this.children(".menu").hasClass("active")){
                _this.children(".menu").addClass("active");
            }else{
                _this.children(".menu").removeClass("active");
            }
        },
        //下拉菜单选择
        Select:function(status){
            this.status = status;
        },
        Search:function(){
            var date = new Date();
            var m =date.getMonth()+1;
            if(m<10){
                m = "0"+m;
            }
            var d =date.getDate();
            if(d<10){
                d = "0"+d;
            }
            var nowtime = date.getFullYear()+"/"+m+"/"+d;
            var starttime = $("#search .start-time").html();
            var endtime = $("#search .end-time").html();
            if(starttime!="开始时间" && endtime=='结束时间'){

                if(starttime>nowtime){
                    starttime = nowtime;
                    endtime = nowtime;
                    $("#search .start-time").html(nowtime);
                    $("#search .end-time").html(nowtime);
                }
            }
            if(starttime!='开始时间' && endtime!='结束时间'){
                if(endtime<starttime){
                    alert("结束时间不能大于开始时间！");
                    return;
                }
                if(starttime >nowtime){
                    starttime = nowtime;
                    endtime = nowtime;
                    $("#search .start-time").html(nowtime);
                    $("#search .end-time").html(nowtime);
                }
            }
            if(starttime =="开始时间"&&endtime =='结束时间'){
                starttime ='';
                endtime = '';
            }
            main.starttime = starttime;
            main.endtime = endtime;
            main.type=[99];
            main.invoice=99;
            main.status = this.status;
            main.statuslimit=this.status;
            $("#main-time-select .st").html(starttime);
            $("#main-time-select .et").html(endtime);
            main.GetData();
        }
    }
});

var main = new Vue({
    el:"#main",
    data:{
        type:[99],
        status:99,
        statuslimit:99,
        starttime:0,
        endtime:0,
        invoice:99,
        nowpage:1,
        nownum:7,
        showpages:100,
        list:[
            {
                id:14,
                status:2,
                address:{
                    id:0,
                    username:"李大钊",
                    phone:"13645121217",
                    addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                },
                goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                week:"14,15",
                weeks:16,
                type:5,
                plan_time:'2017/12/17',
                send_time:'',
                limit_time:"2017/12/14-2018/11/20",
                invoice:1,
                expressname:"中通快递",
                expressnum:"533914674395",
                remark:[{
                    name:"用户本人",
                    time:"2017/08/03 02:23:22",
                    content:"啊杀杀杀大撒大青蛙"
                },{
                    name:"用户本人",
                    time:"2017/08/03 02:23:22",
                    content:"草色的大家好还不走之后就的部分"
                }]
            },
            {
                id:11,
                status:1,
                address:{
                    id:0,
                    username:"李大钊",
                    phone:"13645121217",
                    addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                },
                goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"}],
                week:11,
                weeks:12,
                type:1,
                plan_time:'2017/12/08',
                send_time:'',
                limit_time:"2017/12/06-2017/12/10",
                invoice:0,
                expressname:"",
                expressnum:"",
                remark:[]
            },
            {
                id:10,
                status:1,
                address:{
                    id:0,
                    username:"李大钊",
                    phone:"13645121217",
                    addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                },
                goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"},
                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"3"}],
                week:10,
                weeks:16,
                type:1,
                plan_time:'2017/12/08',
                send_time:'',
                limit_time:"2017/12/06-2017/12/10",
                invoice:0,
                expressname:"",
                expressnum:"",
                remark:[]
            },
            {
                id:8,
                status:5,
                address:{
                    id:0,
                    username:"李大钊",
                    phone:"13645121217",
                    addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                },
                goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                week:8,
                weeks:8,
                type:4,
                plan_time:'2017/12/02',
                send_time:'1998/08/21',
                limit_time:"2017/11/30-2017/12/04",
                invoice:0,
                expressname:"",
                expressnum:"",
                remark:[{
                    name:"用户本人",
                    time:"2017/08/03 02:23:22",
                    content:"啊杀杀杀大撒大青蛙"
                }]
            },
            {
                id:7,
                status:2,
                address:{
                    id:0,
                    username:"李大钊",
                    phone:"13645121217",
                    addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                },
                goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                week:7,
                weeks:8,
                type:3,
                plan_time:'2017/11/29',
                send_time:'1998/08/21',
                limit_time:"2017/11/27-2017/12/01",
                invoice:1,
                expressname:"中通快递",
                expressnum:"533914674395",
                remark:[{
                    name:"用户本人",
                    time:"2017/08/03 02:23:22",
                    content:"啊杀杀杀大撒大青蛙"
                }]
            },
            {
                id:5,
                status:6,
                address:{
                    id:0,
                    username:"李大钊",
                    phone:"13645121217",
                    addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                },
                goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                week:5,
                weeks:8,
                type:2,
                plan_time:'2017/11/23',
                send_time:'1998/08/21',
                limit_time:"2017/11/21-2017/11/25",
                invoice:1,
                expressname:"中通快递",
                expressnum:"533914674395",
                remark:[{
                    name:"用户本人",
                    time:"2017/08/03 02:23:22",
                    content:"啊杀杀杀大撒大青蛙"
                }]
            },
            {
                id:1,
                status:1,
                address:{
                    id:0,
                    username:"李大钊",
                    phone:"13645121217",
                    addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                },
                goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"},
                    {name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                week:1,
                weeks:4,
                type:1,
                plan_time:'2017/11/17',
                send_time:'',
                limit_time:"2017/11/15-2017/11/19",
                invoice:0,
                expressname:"",
                expressnum:"",
                remark:[{
                    name:"用户本人",
                    time:"2017/08/03 02:23:22",
                    content:"啊杀杀杀大撒大青蛙"
                },{
                    name:"用户本人",
                    time:"2017/08/03 02:23:22",
                    content:"草色的大家好还不走之后就的部分"
                }]
            }
        ]
    },
    computed:{
        HasType:function(){
            var data={};
            for(let i in this.type){
                data['type'+[this.type[i]]] = true;
            }
            return data;
        },
        timenextpre:function(){
            if(this.starttime ==this.endtime){
                if(this.starttime !=0){
                    return true;
                }
            }
            return false;
        },
        today:function(){
            var date = new Date();
            var y = date.getFullYear();
            var month = date.getMonth()+1;
            if(month<10){
                month = "0"+month;
            }
            var day = date.getDate();
            if(day<10){
                day = "0"+day;
            }
            var today = y+"/"+month+"/"+day;
            return today;
        },
        time:function(){
                if(this.starttime ==0 &&this.endtime ==0){
                    return 'all'
                }else if(this.starttime ==this.today){
                    this.endtime = this.today;
                    return 'today'
                }else if(this.endtime >this.today){
                    this.endtime = this.today;
                    return ''
                }else {
                    return ''
                }
        },
        listCheck:function(){                                     //列表状态检查
            var j=0,data={};
            for(let i =0;i<this.list.length;i++){
                if(this.list[i].select){
                    j++;
                }
            }
            if(j>1){
                data.manual = true;
            }
        },
        allselect:function(){
            for(let i in this.list){
                if(this.list[i].select !=1){
                    return 0;
                }
            }
            return 1;
        },
        MiddlePages:function(){                         //分页控制
            if(this.Pages<6){
                return 0;
            }else{
                if(this.nowpage>3){
                    if(this.Pages-this.nowpage<2){
                        return this.Pages - 5;
                    }else{
                        return this.nowpage-3;
                    }
                }else{
                    return 0;
                }
            }
        },
        Pages:function(){
            return Math.ceil(this.nownum/this.showpages)
        },
        btns:function(){
            var list=[];
            var data={
                    invoice:true,
                    express:true,
                    allsend:true,
                    manual:true,
                    deal:true
                };
            for(let i =0;i<this.list.length;i++){
                if(this.list[i].select){
                    list.push(this.list[i]);
                }
            }
            if(list.length>1){
                data.manual = false;
            }else if(list.length ==1){
                if(list[0].status !=1){
                    data.manual = false;
                }
            }
            if(list.length ==0){
                data.deal = false;
            }
            for(let i =0;i<list.length;i++){
                if(list[i].status !=1){
                    data.allsend = false;
                }
                if(list[i].status !=6){
                    data.deal = false;

                }
            }
            return data;
        },
        manual:function(){
            for(let i =0;i<this.list.length;i++){
                if(this.list[i].select){
                    return '#manual';
                }
            }
            return false;
        }
    },
    methods:{
        ChangeType:function(type){
            var k;
            if(type ==99){
                this.type = [99];
                this.GetData();
                return;
            }
            for(let i in this.type){
                if(this.type[i] == type){
                    if(this.type.length>1){
                        this.type.splice(i,1);
                    }
                    this.GetData();
                    return;
                }
                if(this.type[i] ==99){
                    k = true;
                }
            }
            if(k){
                this.type=[type];
            }else{
                this.type.push(type)
            }
            if(this.type.length==3){
                this.type=[99]
            }
            this.GetData();

        },
        ChangeTime:function(time){
            if(time =='all'){
                this.starttime =0;
                this.endtime =0;
            }else if(time =='today'){
                this.starttime = this.today;
                this.endtime = this.today;
            }
            this.GetData();
        },
        NextPreTime:function(key){
            var time = new Date(this.starttime);
            if(key =='next'){
                time.setDate(time.getDate()+1);
            }else if(key =='pre'){
                time.setDate(time.getDate()-1);
            }
            var year = time.getFullYear();
            var month = time.getMonth()+1;
            var day = time.getDate();
            if(month<10){
                month = "0"+month;
            }
            if(day<10){
                day = "0"+day;
            }
            Vue.set(this,'starttime',year+"/"+month+"/"+day);
            Vue.set(this,'endtime',year+"/"+month+"/"+day);
            $("#main-time-select .st").html(year+"/"+month+"/"+day);
            $("#main-time-select .et").html(year+"/"+month+"/"+day);
            this.GetData();

        },
        ChangeStatus:function(status){
            this.status = status;
            this.GetData();
        },
        ExpressSearch:function(expressnum){
            window.open("https://www.baidu.com/s?wd="+expressnum);
        },
        ChangeInvoice:function(invoice){
            this.invoice = invoice;
            this.GetData();
        },
        SelectList:function(index){                                 //选择计划
            if(this.list[index].select){
                Vue.set(this.list[index],'select',0);
            }else{
                Vue.set(this.list[index],'select',1);
            }
        },
        Remark:function(e,index,id,orderid){
            remarks_pop.lis = this.list[index].remark;
            if($("#remarks-pop").position().top == $(event.target)[0].offsetTop-20 ){
                $("#remarks-pop").removeClass("active");
            }else{
                $("#remarks-pop").addClass("active").css({"left":$(event.target)[0].offsetLeft-600,"top":$(event.target)[0].offsetTop-20});
                remarks_pop.id=id;
                remarks_pop.orderid=orderid;
                remarks_pop.index = index;
                if(e ==1){
                    remarks_pop.show = false;
                }else{
                    remarks_pop.show = true;
                }
            }
            event.stopPropagation();
        },
        PrePage:function(){                             //上一页
            if(this.nowpage>1){
                this.nowpage--;
                this.GetData();
            }
        },
        NextPage:function(){                            //下一页
            if(this.nowpage<this.Pages){
                this.nowpage++;
                this.GetData();
            }
        },
        LastPage:function(){                            //最后一页
            if(this.nowpage<this.Pages){
                this.nowpage = this.Pages;
                this.GetData();
            }
        },
        FirstPage:function(){                           //第一页
            if(this.nowpage>1){
                this.nowpage = 1;
                this.GetData();
            }
        },
        AllSelect:function(){                          //全选按钮
            var key =1;
            if(this.allselect ==1){
                key = 0;
            }
            for(let i in this.list){
                Vue.set(this.list[i],'select',key);
            }
        },
        PageMenu:function(){                            //分页菜单弹出
            $(".control-wrap .menu").addClass("active");
            $(".control-wrap [data-page="+this.showpages+"]").addClass("active");
        },
        ChangeShowPages:function(){                     //改变每页显示计划的数量
            event.stopPropagation();
            if(!$(event.target).hasClass("nowpage")){
                $(".control-wrap .menu").removeClass("active");
                $(event.target).addClass("active").siblings().removeClass("active");
                this.showpages = parseInt($(event.target).attr("data-page"));
                this.nowpage = 1;
                this.GetData();
            }else{
                $(".control-wrap .menu").removeClass("active");
            }
        },
        NowPage:function(){                         //点击翻页
            if(!$(event.target).hasClass("active")){
                this.nowpage = parseInt($(event.target).html());
                this.GetData();
            }
        },
        GetData:function(){
            var type;
            type=this.type.join(",");
            var starttime=this.starttime,endtime=this.endtime;
            if(this.starttime ==0){
                starttime =''
            }
            if(this.endtime ==0){
                endtime=''
            }
            $.ajax({
                url:"",
                // type:"POST",
                beforeSend:function(){
                    $("#wait_img").addClass("active");
                },
                complete:function(){
                    $("#wait_img").removeClass("active");
                },
                timeout:10000,
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    keyword:search.keyword,
                    starttime:starttime,
                    endtime:endtime,
                    status:this.status,
                    type:type,
                    invoice:this.invoice,
                    nowpage:this.nowpage,
                    showpages:this.showpages
                },
                //dataType:'json',
                success:function(e){
                    var e ={
                        error:0,
                        list:[],
                        nownum:7
                    };
                    var list=[
                        {
                        id:14,
                        status:2,
                        address:{
                            id:0,
                            username:"李大钊",
                            phone:"13645121217",
                            addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                        },
                        goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                            {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                        week:"14,15",
                        weeks:16,
                        type:5,
                        plan_time:'2017/12/17',
                        send_time:'',
                        limit_time:"2017/12/14-2018/11/20",
                        invoice:1,
                        expressname:"中通快递",
                        expressnum:"533914674395",
                        remark:[{
                            name:"用户本人",
                            time:"2017/08/03 02:23:22",
                            content:"啊杀杀杀大撒大青蛙"
                        },{
                            name:"用户本人",
                            time:"2017/08/03 02:23:22",
                            content:"草色的大家好还不走之后就的部分"
                        }]
                    },
                        {
                            id:11,
                            status:1,
                            address:{
                                id:0,
                                username:"李大钊",
                                phone:"13645121217",
                                addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                            },
                            goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"}],
                            week:11,
                            weeks:12,
                            type:1,
                            plan_time:'2017/12/08',
                            send_time:'',
                            limit_time:"2017/12/06-2017/12/10",
                            invoice:0,
                            expressname:"",
                            expressnum:"",
                            remark:[]
                        },
                        {
                            id:10,
                            status:1,
                            address:{
                                id:0,
                                username:"李大钊",
                                phone:"13645121217",
                                addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                            },
                            goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"},
                                {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"3"}],
                            week:10,
                            weeks:16,
                            type:1,
                            plan_time:'2017/12/08',
                            send_time:'',
                            limit_time:"2017/12/06-2017/12/10",
                            invoice:0,
                            expressname:"",
                            expressnum:"",
                            remark:[]
                        },
                        {
                            id:8,
                            status:5,
                            address:{
                                id:0,
                                username:"李大钊",
                                phone:"13645121217",
                                addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                            },
                            goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                            week:8,
                            weeks:8,
                            type:4,
                            plan_time:'2017/12/02',
                            send_time:'1998/08/21',
                            limit_time:"2017/11/30-2017/12/04",
                            invoice:0,
                            expressname:"",
                            expressnum:"",
                            remark:[{
                                name:"用户本人",
                                time:"2017/08/03 02:23:22",
                                content:"啊杀杀杀大撒大青蛙"
                            }]
                        },
                        {
                            id:7,
                            status:2,
                            address:{
                                id:0,
                                username:"李大钊",
                                phone:"13645121217",
                                addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                            },
                            goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                            week:7,
                            weeks:8,
                            type:3,
                            plan_time:'2017/11/29',
                            send_time:'1998/08/21',
                            limit_time:"2017/11/27-2017/12/01",
                            invoice:1,
                            expressname:"中通快递",
                            expressnum:"533914674395",
                            remark:[{
                                name:"用户本人",
                                time:"2017/08/03 02:23:22",
                                content:"啊杀杀杀大撒大青蛙"
                            }]
                        },
                        {
                            id:5,
                            status:6,
                            address:{
                                id:0,
                                username:"李大钊",
                                phone:"13645121217",
                                addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                            },
                            goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                            week:5,
                            weeks:8,
                            type:2,
                            plan_time:'2017/11/23',
                            send_time:'1998/08/21',
                            limit_time:"2017/11/21-2017/11/25",
                            invoice:1,
                            expressname:"中通快递",
                            expressnum:"533914674395",
                            remark:[{
                                name:"用户本人",
                                time:"2017/08/03 02:23:22",
                                content:"啊杀杀杀大撒大青蛙"
                            }]
                        },
                        {
                            id:1,
                            status:1,
                            address:{
                                id:0,
                                username:"李大钊",
                                phone:"13645121217",
                                addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                            },
                            goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"},
                                {name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                            week:1,
                            weeks:4,
                            type:1,
                            plan_time:'2017/11/17',
                            send_time:'',
                            limit_time:"2017/11/15-2017/11/19",
                            invoice:0,
                            expressname:"",
                            expressnum:"",
                            remark:[{
                                name:"用户本人",
                                time:"2017/08/03 02:23:22",
                                content:"啊杀杀杀大撒大青蛙"
                            },{
                                name:"用户本人",
                                time:"2017/08/03 02:23:22",
                                content:"草色的大家好还不走之后就的部分"
                            }]
                        }];
                    for(let i =0;i<list.length;i++){
                        if((list[i].plan_time>=main.starttime && list[i].plan_time<=main.endtime) ||(!main.starttime&&!main.endtime) ||(!main.starttime&&list[i].plan_time<=main.endtime)||(!main.endtime &&list[i].plan_time>=main.starttime)){
                            if(list[i].status ==main.status ||main.status ==99){
                                if(list[i].type ==main.type[0] ||list[i].type==main.type[1] ||main.type ==99){
                                    if(list[i].invoice ==main.invoice ||main.invoice ==99){
                                        if(i>=(main.nowpage-1)*main.showpages &&i<main.nowpage*main.showpages){
                                            e.list.push(list[i])
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if(Token(e)){
                        Vue.set(main,'list',e.list)
                        Vue.set(main,'nownum',e.nownum)
                    }
                },
                error:function(e){
                    console.log(e);
                    alert("网络连接超时!")
                }
            })
        },
        HangDeal:function(id,index,type){
            $("#cover").addClass("active");
            $("body").addClass("modal-open");
            cover.id = id;
            cover.index = index;
            cover.type=type;
        },
        Deal:function(){
            var id=[],index=[];
            for(let i =0;i<this.list.length;i++){
                if(this.list[i].select){
                    id.push(this.list[i].id);
                    index.push(i);
                }
            }
            $("#cover").addClass("active");
            $("body").addClass("modal-open");
            cover.id = id;
            cover.index = index;
            cover.type=3;
        },
        Manual:function(){
            if(!this.manual){
                return;
            }
            for(let i=0;i<this.list.length;i++){
                if(this.list[i].select){
                    manual.id = this.list[i];
                    manual.index = i;
                }
            }

        },
        PrintExpress:function(){
            console.log("?")
            LODOP=getLodop();
            if (LODOP.CVERSION) {

                LODOP.On_Return=function(TaskID,Value){
                    if(Value>=0) {
                        alert("选择成功!");
                        var ids =[];
                        for(let i =0;i<main.list.length;i++){
                            if(main.list[i].select){
                                ids.push(main.list[i].id);
                            }
                        }
                        if(ids.length==0){
                            alert("请选择要打印的发货计划!");
                            return;
                        }
                        if(!confirm("下面的会产生大量的打印操作，确定继续吗？")) return;
                        $.ajax({
                            ///api/distribution_plan_print_express
                            url: '',
                            // type:"POST",
                            //dataType: "json",
                            data: {
                                ids: ids.join(",")
                            },
                            success: function(data) {
                                var data={
                                    result:1,
                                    ids:[]
                                }
                                for(let i =0;i<ids.length;i++){
                                    data.ids.push(ids[i]);
                                }
                                if (data.result == 1){
                                    //$("#fahuoModel").modal('hide')
                                    //打印代码
                                    //LODOP=getLodop();
                                    //alert(ids);
                                    var idss=data['ids'];
                                    //alert(idss[0]);
                                    for (var i = 0; i < idss.length; i++) {
                                        //LODOP.PRINT_INITA(0,0,378,680,"快递单");

                                        //alert(idss.length);
                                        //CreateOnePage(idss[i]);
                                        print_templates(idss[i]);
                                        //LODOP.SET_PRINT_MODE("CUSTOM_TASK_NAME","快递单"+i);//为每个打印单独设置任务名
                                        //LODOP.PRINT();
                                        // LODOP.PREVIEW();
                                    }
                                    //alert("操作成功~！");
                                    //windows.open();
                                    console.log("success");
                                }
                                else {
                                    alert(data.message);
                                    console.log(data.message);
                                }

                            },
                            error: function() {
                                console.log("error");
                            }
                        });
                    } else {
                        alert("选择失败！");
                        $("body").removeClass("modal-open")
                    }
                };
                LODOP.SELECT_PRINTER();
                return;
            }
            if (LODOP.SELECT_PRINTER()>=0){
                alert("选择成功!");
            } else {
                alert("选择失败！");
            }


        },
        PrintInvoice:function(){
            LODOP=getLodop();
            if (LODOP.CVERSION) {
                LODOP.On_Return=function(TaskID,Value){
                    if(Value>=0) {
                        alert("选择成功!");
                        var ids =[];
                        for(let i =0;i<main.list.length;i++){
                            if(main.list[i].select){
                                ids.push(main.list[i].id);
                            }
                        }
                        if(ids.length==0){
                            alert("请选择要打印的发货计划!");
                            return;
                        }
                        if(!confirm("下面的会产生大量的打印操作，确定继续吗？")) return;
                        $.ajax({
                            ///api/distribution_plan_print_express
                            url: '',
                            // type:"POST",
                            //dataType: "json",
                            data: {
                                ids: ids.join(",")
                            },
                            success: function(data) {
                                var data={
                                    result:1,
                                    ids:[]
                                }
                                for(let i =0;i<ids.length;i++){
                                    data.ids.push(ids[i]);
                                }
                                if (data.result == 1){
                                    //$("#fahuoModel").modal('hide')
                                    //打印代码
                                    //LODOP=getLodop();
                                    //alert(ids);
                                    var idss=data['ids'];
                                    //alert(idss[0]);
                                    for (var i = 0; i < idss.length; i++) {
                                        //LODOP.PRINT_INITA(0,0,378,680,"快递单");

                                        //alert(idss.length);
                                        //CreateOnePage(idss[i]);
                                        CreateOnePage_fahuo(idss[i]);
                                        //LODOP.SET_PRINT_MODE("CUSTOM_TASK_NAME","快递单"+i);//为每个打印单独设置任务名
                                        //LODOP.PRINT();
                                        // LODOP.PREVIEW();
                                    }
                                    //alert("操作成功~！");
                                    //windows.open();
                                    console.log("success");
                                }
                                else {
                                    alert(data.message);
                                    console.log(data.message);
                                }

                            },
                            error: function() {
                                console.log("error");
                            }
                        });
                    }else {
                        alert("选择失败！")
                    };
                };
                LODOP.SELECT_PRINTER();
                return;
            }
        },
        AllSend:function(){
            var list=[],index=[];
            for(let i=0;i<this.list.length;i++){
                list.push(this.list[i].id);
                index.push(i);
            }
            $("#cover").addClass("active");
            cover.type=4;
            cover.id =list;
            cover.index = index;
        }
    },
    mounted(){
        this.GetData();
    }
})
function CreateOnePage_fahuo(tid) {
    // alert(tid);
    LODOP=getLodop();
    LODOP.SET_LICENSES("","0F21DCE9C411D27A34E5717E869962D5","C94CEE276DB2187AE6B65D56B3FC2848","");
    //LODOP. SET_PRINTER_INDEX (0)

    //LODOP.SET_PRINT_MODE("WINDOW_DEFPRINTER","Star NX-600");
    //LODOP.NewPage();
//LODOP.SET_PRINT_PAGESIZE(1,intPageWidth,intPageHeight,strPageName);
    LODOP.PRINT_INITA(0,0,378,680,"发货单"+tid);
    LODOP.SET_PRINT_PAGESIZE(3,"210mm","","");
    LODOP.ADD_PRINT_HTML(1,0,"210mm","140mm","URL:http://api.miaomei.me/api/print_template_get_fahuo?id="+tid);
    //LODOP.SET_PRINTER_INDEX("Star NX-600");
    //if (LODOP.SET_PRINTER_INDEX("Star NX-600")) {
        LODOP.PRINT();
    //} else{
    //    alert("打印机不存在请检查")
    //}
    //LODOP.PREVIEW();
}
function print_templates(id){
    LODOP = getLodop();
    LODOP.SET_LICENSES("","0F21DCE9C411D27A34E5717E869962D5","C94CEE276DB2187AE6B65D56B3FC2848","");

    $.ajax({
    //api/print_templates_get_kuaidi
        url: '',
        type: 'GET',
        //dataType: "json",
        data: {
            id:id
        },
        success: function(data) {
            var data={
                receiver_name:"陈南康",
                mark_destination:"湖北省武汉市江岸区",
                receiver_phone:"13948389583",
                receiver_province:"湖北省",
                receiver_city:"武汉市",
                receiver_area:"江岸区",
                receiver_address:"杀杀杀",
                logistic_code:"13213124",
                details:[
                    {
                        product_name:"嘿嘿",
                        num:2323
                    }
                ]
            };
            LODOP.PRINT_INITA(0,0,378,680,"快递单"+id);
            LODOP.SET_PRINT_PAGESIZE(0,0,0,"ZTO Standard 100 x 190");
            LODOP.ADD_PRINT_TEXT(138,29,77,17,data['receiver_name']);
            LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
            LODOP.SET_PRINT_STYLEA(0,"Bold",1);
            LODOP.ADD_PRINT_LINE(37,3,36,371,0,1);
            LODOP.ADD_PRINT_LINE(97,3,98,371,0,1);
            LODOP.ADD_PRINT_TEXT(43,3,352,49,data['mark_destination']);
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",22);
            LODOP.SET_PRINT_STYLEA(0,"Bold",1);
            LODOP.ADD_PRINT_TEXT(2,268,85,30,"标准快递");
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑 Light");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
            LODOP.SET_PRINT_STYLEA(0,"Bold",1);
            LODOP.ADD_PRINT_TEXT(100,3,217,31,"武汉金银湖");
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",14);
            LODOP.SET_PRINT_STYLEA(0,"Bold",1);
            LODOP.ADD_PRINT_LINE(136,3,135,371,0,1);
            LODOP.ADD_PRINT_TEXT(139,145,129,18,data["receiver_phone"]);
            LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
            LODOP.SET_PRINT_STYLEA(0,"Bold",1);
            LODOP.ADD_PRINT_TEXT(160,29,249,41,data["receiver_province"]+ data["receiver_city"]+ data["receiver_area"]+ data["receiver_address"]);
            LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
            LODOP.SET_PRINT_STYLEA(0,"Bold",1);
            LODOP.ADD_PRINT_TEXT(143,3,19,58,"收件");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
            LODOP.ADD_PRINT_TEXT(206,3,17,36,"寄件");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
            LODOP.ADD_PRINT_LINE(204,3,203,279,0,1);
            LODOP.ADD_PRINT_LINE(246,25,136,26,0,1);
            LODOP.ADD_PRINT_TEXT(206,29,60,19,"黑狗科技");
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_TEXT(207,136,140,18,"13871187775，027-82900252");
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_TEXT(225,29,248,20,"湖北省武汉市东西湖区万科高尔夫");
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑 Light");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_LINE(246,281,136,282,0,1);
            LODOP.ADD_PRINT_LINE(159,282,158,372,0,1);
            LODOP.ADD_PRINT_LINE(247,3,246,371,0,1);
            LODOP.ADD_PRINT_LINE(343,3,342,371,0,1);
            LODOP.ADD_PRINT_LINE(412,3,413,371,0,1);
            LODOP.ADD_PRINT_TEXT(346,171,100,20,"签收人：");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
            LODOP.ADD_PRINT_TEXT(380,170,100,20,"时间：");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
            LODOP.ADD_PRINT_LINE(413,164,342,165,0,1);
            LODOP.ADD_PRINT_LINE(412,295,341,296,0,1);
            LODOP.ADD_PRINT_TEXT(347,3,157,58,"快件送达收件人地址，经收件人或收件人（寄件人）允许的代收人签字，视为送达。您的签字代表您已验收此包裹，并已确认商品信息无误、包装完好、没有划痕、破损等表面质量问题。");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_BARCODE(422,134,227,44,"128C",data["logistic_code"]);
            LODOP.ADD_PRINT_TEXT(477,3,19,40,"收件");
            LODOP.ADD_PRINT_TEXT(522,3,20,39,"寄件");
            LODOP.ADD_PRINT_LINE(474,3,475,371,0,1);
            LODOP.ADD_PRINT_LINE(521,3,520,296,0,1);
            LODOP.ADD_PRINT_LINE(566,3,567,371,0,1);
            LODOP.ADD_PRINT_LINE(566,23,474,24,0,1);
            LODOP.ADD_PRINT_LINE(566,296,474,297,0,1);
            LODOP.ADD_PRINT_TEXT(645,301,50,20,"已验视");
            LODOP.SET_PRINT_STYLEA(0,"Bold",1);
            var details="";
            for(var i=0;i<data["details"].length;i++)
            {
                details+= data["details"][i]['product_name']+" X "+data["details"][i]['num']+","
            }
            details+="注意：内物新鲜食品，快递大哥，请早点配送哈，辛苦啦";
            LODOP.ADD_PRINT_TEXT(570,5,312,97,details);
            LODOP.SET_PRINT_STYLEA(0,"Bold",1);
            LODOP.ADD_PRINT_TEXT(475,26,90,20,data["receiver_name"]);
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_TEXT(477,128,149,20,data["receiver_phone"]);
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_TEXT(496,26,251,20,data["receiver_province"]+ data["receiver_city"]+ data["receiver_area"]+ data["receiver_address"]);
            LODOP.SET_PRINT_STYLEA(0,"FontSize",5);
            LODOP.ADD_PRINT_TEXT(524,28,90,18,"黑狗科技");
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_TEXT(524,130,152,20,"13871187775，027-82900252");
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_TEXT(542,27,252,20,"湖北省武汉市东西湖区万科高尔夫");
            LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",6);
            LODOP.ADD_PRINT_BARCODE(256,40,314,70,"128C",data["logistic_code"]);
            //if (LODOP.SET_PRINTER_INDEX("Gprinter GP-1125T"))
            //{
            LODOP.PRINT();
            //}
            //else{
            //    alert("打印机不存在请检查")
            //}

        },
        error: function() {
            console.log("error");
        }
    });



}



var remarks_pop =new Vue({
    el:"#remarks-pop",
    data:{
        lis:[],
        id:2,
        orderid:1,
        index:1,
        show:true,
        remark_content:""
    },
    methods:{
        OpenRemark:function(){
            this.show = false;
            event.stopPropagation();
            this.remark_content="";
        },
        OpenRemarks:function(){
            event.stopPropagation();
            if(this.lis.length ==0){
                $("#remarks-pop").removeClass("active");
            }else{
                remarks_pop.show = true;
            }

            this.remark_content="";
        },
        StopEvent:function(){
            event.stopPropagation();
        },
        SubmitRemark:function(){
            if(this.remark_content.length>0){
                $.ajax({
                    url:"",
                    // type:"POST",
                    beforeSend:function(){
                        $("#wait_img").addClass("active");
                    },
                    complete:function(){
                        $("#wait_img").removeClass("active");
                    },
                    timeout:10000,
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        content:this.remark_content,
                        id:this.id,
                        orderid:this.orderid
                    },
                    //dataType:"json",
                    success:function(e){
                        if(!Token(e)){
                            $("#remarks-pop").removeClass("active");
                        }else{
                            alert("备注成功！");
                                var remark = {
                                    name:localStorage.nickname,
                                    time:e.date,
                                    content:remarks_pop.remark_content
                                };
                                main.list[remarks_pop.index].remarks.push(remark);
                            $("#remarks-pop").removeClass("active");
                        }
                    }
                })
            }else{
                alert("请输入备注内容!")
            }
        }
    }
});
var cover = new Vue({
    el:"#cover",
    data:{
        id:[1],
        type:1,
        index:[0]
    },
    methods:{
        Confirm:function(){
            var id;
            if(this.id instanceof Array){
                id = this.id.join(",");
            }
            if(this.type==1||this.type==2)
            {   //挂起 取消挂起
                 $.ajax({
                    url:"",
                    // type:"POST",
                    beforeSend:function(){
                        $("#wait_img").addClass("active");
                    },
                    complete:function(){
                        $("#wait_img").removeClass("active");
                    },
                    timeout:10000,
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        id:this.id,
                        type:this.type
                    },
                    //dataType:"json",
                    success:function(e){
                        if(!(Token(e))){

                        }else{
                            if(cover.type==1){
                                main.list[cover.index].status=5;
                            }else{
                                main.list[cover.index].status=1;
                            }
                            cover.Cancel();
                        }
                    }
                })
            }else if(this.type==3)
            {                                               //处理


                $.ajax({
                    url:"",
                    // type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        id:id
                    },
                    beforeSend:function(){
                        $("#wait_img").addClass("active");
                    },
                    complete:function(){
                        $("#wait_img").removeClass("active");
                    },
                    timeout:10000,
                    //dataType:"json",
                    success:function(e){
                        if(!(Token(e))){

                        }else{
                            if(cover.index instanceof Array){
                                for(let i =0;i<cover.index.length;i++){
                                    main.list[cover.index[i]].status =1;
                                }
                            }else{
                                main.list[cover.index].status=1;
                            }
                            cover.Cancel();
                        }
                    }
                })
            }else if(this.type==4){
                $.ajax({
                    url:"",
                    // type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        id:id
                    },
                    beforeSend:function(){
                        $("#wait_img").addClass("active");
                    },
                    complete:function(){
                        $("#wait_img").removeClass("active");
                    },
                    timeout:10000,
                    //dataType:"json",
                    success:function(e){
                        if(Token(e)){
                            for(let i=0;i<cover.index.length;i++){
                                Vue.set(main.list[cover.index[i]],'status',2);
                            }
                            cover.Cancel();
                        }
                    }
                })
            }
        },
        Cancel:function(){
            $("#cover").removeClass("active");
            $("body").removeClass("modal-open");
            event.stopPropagation();
        }
    }

});


var manual = new Vue({
    el:"#manual",
    data:{
        id:0,
        express:'zto',
        expressnum:'',
        index:1
    },
    methods:{
        ChangeExpress:function(express){
            this.express =express;
        },
        Cancel:function(){
            $("#manual").click();
        },
        Confirm:function(){
            if(!this.expressnum){
                alert("请输入快递单号！");
                return;
            }
            $.ajax({
                url:"",
                // type:"POST",
                beforeSend:function(){
                    $("#wait_img").addClass("active");
                },
                complete:function(){
                    $("#wait_img").removeClass("active");
                },
                timeout:10000,
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    id:this.id,
                    expressnum:this.expressnum,
                    express:this.express
                },
                //dataType:'json',
                success:function(e){
                    if(Token(e)){
                        alert("手动发货成功!")
                        Vue.set(main.list[manual.index],'expressname',manual.express=='zto'?"中通快递":"顺丰速运");
                        Vue.set(main.list[manual.index],'expressnum',manual.expressnum);
                        Vue.set(main.list[manual.index],'status',2);
                        manual.Cancel();
                    }
                }
            })
        }
    }
})

$(window).on("click",function(){
    if($("#remarks-pop").hasClass("active")){
        $("#remarks-pop").removeClass("active");
    }
    if($("#select-date").hasClass("active")){
        $("#select-date").slideUp(0).removeClass("active");
        $("[time=active]").attr("time","");
    }
    if($("#search-status .menu").hasClass("active")){
        $("#search-status .menu").removeClass("active");
    }
});