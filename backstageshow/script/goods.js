$(function(){
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
});
var search = new Vue({
    el:"#search",
    data:{
        type:"1",
        keyword:"",
        typelist:[
            {type:1,name:"订阅计划"},
            {type:2,name:"增值包"},
            {type:3,name:"普通商品"}
        ],
        status:"99",
        statuslist:[
            {status:99,name:"全部状态"},
            {status:1,name:"上架中"},
            {status:2,name:"已下架"}
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
        Select:function(){
            if($(event.target).parents(".menu-wrap").hasClass("type")){
                this.type = $(event.target).attr("data-type");
            }else if($(event.target).parents(".menu-wrap").hasClass("status")){
                this.status = $(event.target).attr("data-status")
            }
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
            if(this.type==1){
                main.search =1;
                Vue.set(main,'keyword',this.keyword)
                GetPlan(starttime,endtime,this.keyword,this.status);
                GetAddpack(starttime,endtime,this.keyword,this.status);
                GetGoods(starttime,endtime,this.keyword,this.status);
            }
        }
    }
});
var main = new Vue({
    el:"#main",
    data:{
        nowpage:1,  //当前页数
        status:1,   //当前查看商品状态
        type:1,    //当前查看商品种类
        allselect:0,
        sort:'sales',
        order:1,
        search:0,
        keyword:"鲜粮",
        planlist:[],
        addpacklist:[
        ],
        normallist:[],
        search_result:{
            planlist:[],
            planlist_all:0,
            addpacklist:[],
            addpacklist_all:0,
            normallist:[],
            normallist_all:0
        }
    },
    computed:{
        nownum:function(){
            if(this.type==1){
                return this.planlist.length;
            }else if(this.type==2){
                return this.addpacklist.length;
            }else{
                return this.normallist.length;
            }
        },
        showpages:function(){
            if(this.type==3){
                return 12;
            }else{
                return 6;
            }
        },
        Pages:function(){
            return Math.ceil(this.nownum/this.showpages)
        },
        MiddlePages:function(){
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
        }
    },
    watch:{
        nowpage:function(){
            var k;
            if(this.type==1){
                k = 'planlist';
            }else if(this.type==2){
                k = 'addpacklist';
            }else if(this.type==3){
                k = 'normallist';
            }
            for(let i =(this.nowpage-1)*this.showpages;i<this[k].length && i<this.nowpage*this.showpages;i++){
                if(!this[k][i].select){
                    this.allselect = 0;
                    return;
                }
            }
            this.allselect = 1;
        },
        type:function(){
            var k;
            if(this.type==1){
                k = 'planlist';
            }else if(this.type==2){
                k = 'addpacklist';
            }else if(this.type==3){
                k = 'normallist';
            }
            for(let i =(this.nowpage-1)*this.showpages;i<this[k].length && i<this.nowpage*this.showpages;i++){
                if(!this[k][i].select){
                    this.allselect = 0;
                    return;
                }
            }
            this.allselect = 1;
        }
    },
    methods:{
        AllSelect:function(){
            var _this;
            if($(event.target).hasClass("radio-wrap")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent(".radio-wrap")
            }
            var key;
            if(this.allselect!=1){
                key = true;
                this.allselect =1;
            }else{
                this.allselect =0;
            }
            var k;
            if(this.type==1){
                k = 'planlist'
            }else if(this.type==2){
                k = 'addpacklist'
            }else if(this.type==3){
                k = 'normallist'
            }
            for(var i =0;i<this[k].length;i++){
                if(this[k][i].status==this.status &&i<this.nowpage*this.showpages && i>=(this.nowpage-1)*this.showpages){
                    if(key) {
                        Vue.set(this[k][i], 'select', 1)
                    }else{
                        Vue.set(this[k][i], 'select', 0)
                    }
                }
            }
        },
        Sort:function(key){
            var k;
            if(this.type==1){
                k = 'planlist'
            }else if(this.type==2){
                k = 'addpacklist'
            }else if(this.type==3){
                k = 'normallist'
            }
            this[k].sort(sortNumber)
            function sortNumber(a,b){
                if(key =='sales'){
                    if(main.order ==1){
                        return a.sales-b.sales;
                    }else{
                        return b.sales - a.sales;
                    }
                }else{
                    if(main.order ==1){
                        if(a.time>b.time){
                            return 1;
                        }else{
                            return -1;
                        }
                    }else{
                        if(a.time<b.time){
                            return 1;
                        }else{
                            return -1;
                        }
                    }
                }
            }
        },
        GoodsDetail:function(){
            var k;
            if(this.type==1){
                k = 'planlist'
            }else if(this.type==2){
                k = 'addpacklist'
            }else if(this.type==3){
                k = 'normallist'
            }
            var id = $(event.target).attr("data-id");
            window.open("goods-detail.html?id="+id);
        },
        GoodsEdit:function(){
            var id = $(event.target).attr("data-id");
            var type = $(event.target).attr("data-type");
            window.open("goods-release.html?id="+id+"&type="+type);
        },
        Select:function(){
            var _this= $(event.target).parent("div");
            var index = _this.attr("data-index");
            var k;
            if(this.type==1){
                k = 'planlist'
            }else if(this.type==2){
                k = 'addpacklist'
            }else if(this.type==3){
                k = 'normallist'
            }
            if(this[k][index].select == 1){
                Vue.set(this[k][index],'select',0)
            }else{
                Vue.set(this[k][index],'select',1)
            }
        },
        ChangeStatus:function(){
            var _this;
            if($(event.target).hasClass("radio-circle-wrap")){
                _this = $(event.target)
            }else{
                _this = $(event.target).parents(".radio-circle-wrap");
            }
            this.status = _this.attr("data-status");
        },
        ChangeType:function(){
            var _this;
            if($(event.target).is("div")){
                _this = $(event.target)
            }else{
                _this = $(event.target).parents("div");
            }
            this.type = _this.attr("data-type");
        },
        ChangeSort:function(){
            var _this;
            if($(event.target).hasClass("sales") || $(event.target).hasClass("time")){
                _this = $(event.target)
            }else{
                _this = $(event.target).parents("div");
            }
            if(_this.hasClass("active")){
                if(this.order ==1){
                    this.order =0;
                }else{
                    this.order =1;
                }
            }else{
                this.order =1;
            }
            this.sort = _this.attr("data-sort");
            this.Sort(this.sort)
        },
        NowPage:function(){
            this.nowpage = parseInt($(event.target).html());
        },
        PrePage:function(){
            if(this.nowpage>1){
                this.nowpage--;
            }
        },
        NextPage:function(){
            if(this.nowpage<this.Pages){
                this.nowpage++;
            }
        },
        LastPage:function(){
            if(this.nowpage<this.Pages){
                this.nowpage = this.Pages;
            }
        },
        FirstPage:function(){
            if(this.nowpage>1){
                this.nowpage = 1;
            }
        },
        CheckAll:function(){
            var _this;
            if($(event.target).is("div")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent("div");
            }
            var Scroll =function (){
                var st = $(document).scrollTop();
                var ot =_this[0].offsetTop;
                if(ot-st>60&& $(window).height()+st<$(document).height()){
                    window.scrollTo("auto",st+Math.ceil((ot-(st+60))/10));
                    requestAnimationFrame(Scroll)
                }
            };

            //window.scrollTo("auto",_this[0].offsetTop);
            var k = _this.attr("data-type");
            if(this.search_result[k] ==1){
                this.search_result[k] = 0;
            }else{
                this.search_result[k] = 1;
                Scroll();
            }
        },
        DeleteGoods:function(){
            $("#cover").addClass("active");
            cover.type =1;
        },
        DownGoods:function(){
            $("#cover").addClass("active");
            cover.type =2;
        }
    }
});
var cover = new Vue({
    el:"#cover",
    data:{
        type:1
    },
    methods:{
        Confirm:function(){
            var list=[];
            var k;
            if(main.type==1){
                k = 'planlist'
            }else if(main.type==2){
                k = 'addpacklist'
            }else if(main.type==3){
                k = 'normallist'
            }
            for(let i =0;i<main[k].length;i++){
                if(main[k][i].select == 1){
                    list.push(main[k][i].id)
                }
            }
            if(this.type==1){
                $.ajax({
                    url:"",
                    // type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        list:JSON.stringify(list),
                        type:main.type
                    },
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            for(let i =0;i<main[k].length;i++){
                                if(main[k][i].select == 1){
                                    main[k].splice(i,1);
                                    i--;
                                }
                            }
                        }
                    }
                })
            }else{
                $.ajax({
                    url:"",
                    // type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        list:list,
                        type:main.type
                    },
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            for(let i =0;i<main[k].length;i++){
                                if(main[k][i].select == 1){
                                    Vue.set(main[k][i],'status',2)
                                    Vue.set(main[k][i],'select',0)
                                }
                            }
                        }
                    }
                })
            }
            this.Cancel();
        },
        Cancel:function(){
            $("#cover").removeClass("active")
        }
    }
})

function GetPlan(starttime,endtime,keyword,status){
    //订阅计划
    var k ='',st='',et='',ss='';
    if(keyword){
        k = keyword;
    }
    if(endtime){
        et = endtime;
    }
    if(starttime){
        st = starttime;
    }
    if(status){
        ss = status;
    }

    $.ajax({
        url:"",
        // type:"POST",
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            keyword:k,
            starttime:st,
            endtime:et,
            status:ss
        },
        //dataType:"json",
        success:function(e){
            var e = {
                error:0,
                list:[
                    {
                        status:1,
                        id:1,
                        discount_info:"sdsdsd",
                        backimg:"../../image/Mask_layer.jpg",
                        img:"../../image/tb_800_@210px.jpg",
                        spec:"250g",
                        price:"199.00",
                        sales:"24387",
                        time:"2017-09-08 13:19:44",
                        maingoods:{
                            img:"../../image/goodsimg.png",
                            name:"小黑鲜粮",
                            price:"38.00",
                            oprice:"112.00",
                            spec:"150g*5包"
                        },
                        addpackgoods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                oprice:"418.00",
                                content:"金枪鱼粮250gx1,金枪鱼粮250gx1"
                            }
                        ]
                    },
                    {
                        status:1,
                        id:2,
                        backimg:"../../image/Mask_layer.jpg",
                        img:"../../image/tb_800_@210px.jpg",
                        spec:"250g",
                        price:"199.00",
                        sales:"14587",
                        time:"2017-07-08 13:19:46",
                        maingoods:{
                            img:"../../image/goodsimg.png",
                            name:"小黑鲜粮",
                            price:"38.00",
                            oprice:"112.00",
                            spec:"150g*5包"
                        },
                        addpackgoods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                content:"金枪鱼粮250gx1,金枪鱼粮250gx1"
                            }
                        ]
                    },
                    {
                        status:1,
                        id:3,
                        backimg:"../../image/Mask_layer.jpg",
                        img:"../../image/tb_800_@210px.jpg",
                        spec:"250g",
                        price:"199.00",
                        sales:"24347",
                        time:"2017-08-08 13:19:44",
                        maingoods:{
                            img:"../../image/goodsimg.png",
                            name:"小黑鲜粮",
                            price:"38.00",
                            oprice:"112.00",
                            spec:"150g*5包"
                        },
                        addpackgoods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                content:"金枪鱼粮250gx1,金枪鱼粮250gx1"
                            },
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                content:"金枪鱼粮250gx1,金枪鱼粮250gx1"
                            },{
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                content:"金枪鱼粮250gx1,金枪鱼粮250gx1"
                            },{
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                content:"金枪鱼粮250gx1,金枪鱼粮250gx1"
                            },{
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                content:"金枪鱼粮250gx1,金枪鱼粮250gx1"
                            }
                        ]
                    },
                    {
                        status:1,
                        id:3,
                        backimg:"../../image/Mask_layer.jpg",
                        img:"../../image/tb_800_@210px.jpg",
                        spec:"250g",
                        price:"199.00",
                        sales:"24421",
                        time:"2017-08-02 14:19:44",
                        maingoods:{
                            img:"../../image/goodsimg.png",
                            name:"小黑鲜粮",
                            price:"38.00",
                            oprice:"112.00",
                            spec:"150g*5包"
                        },
                        addpackgoods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                content:"金枪鱼粮250gx1,金枪鱼粮250gx1"
                            }
                        ]
                    }
                ]
            }
            if(e.error>0){
                alert(e.message)
            }else{
                Vue.set(main,'planlist',e.list);
                Vue.set(main.search_result,'planlist',e.list)
                main.Sort('sales');
            }
        }
    })
}
function GetAddpack(starttime,endtime,keyword,status){
    var k ='',st='',et='',ss='';
    if(keyword){
        k = keyword;
    }
    if(endtime){
        et = endtime;
    }
    if(starttime){
        st = starttime;
    }
    if(status){
        ss = status;
    }

    $.ajax({
        url:"",
        // type:"POST",
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            keyword:k,
            starttime:st,
            endtime:et,
            status:ss
        },
        //dataType:"json",
        success:function(e){
            var e = {
                error:0,
                list:[
                    {
                        status:1,
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        backimg:"../../image/Mask_layer2.jpg",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            },
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        backimg:"../../image/Mask_layer2.jpg",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        backimg:"../../image/Mask_layer2.jpg",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        backimg:"../../image/Mask_layer2.jpg",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        backimg:"../../image/Mask_layer2.jpg",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        backimg:"../../image/Mask_layer2.jpg",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        backimg:"../../image/Mask_layer2.jpg",
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        backimg:"../../image/Mask_layer2.jpg",
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        backimg:"../../image/Mask_layer2.jpg",
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    },{
                        status:1,
                        backimg:"../../image/Mask_layer2.jpg",
                        discount_info:"实打实大苏打阿斯顿阿斯顿",
                        img:"../../image/img_addpack.jpg",
                        selling_point:"超值套装聚划算",
                        price:"98.00",
                        sales:"21545",
                        time:"2017-07-08 13:19:44",
                        goods:[
                            {
                                img:"../../image/goodsimg.png",
                                name:"小黑鲜粮",
                                price:"38.00",
                                spec:"250g",
                                number:1
                            }
                        ]
                    }
                ]
            }
            if(e.error>0){
                alert(e.message)
            }else{
                Vue.set(main,'addpacklist',e.list);
                Vue.set(main.search_result,'addpacklist',e.list)
                main.Sort('sales');
            }
        }
    })
}
function GetGoods(starttime,endtime,keyword,status){
    var k ='',st='',et='',ss='';
    if(keyword){
        k = keyword;
    }
    if(endtime){
        et = endtime;
    }
    if(starttime){
        st = starttime;
    }
    if(status){
        ss = status;
    }

    $.ajax({
        url:"",
        // type:"POST",
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            keyword:k,
            starttime:st,
            endtime:et,
            status:ss
        },
        //dataType:"json",
        success:function(e){
            var e = {
                error:0,
                list:[
                    {
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36352,
                        price:"88.00",
                        time:"2017-07-05 13:19:33",
                        status:2
                    },
                    {
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36355,
                        price:"88.00",
                        time:"2017-07-04 13:19:33",
                        status:1
                    },{
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36353,
                        price:"88.00",
                        time:"2017-08-08 13:19:33",
                        status:2
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36357,
                        price:"88.00",
                        time:"2018-07-08 13:19:33",
                        status:1
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36355,
                        price:"88.00",
                        time:"2017-04-08 13:19:33",
                        status:2
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36354,
                        price:"88.00",
                        time:"2017-07-08 13:08:33",
                        status:2
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36351,
                        price:"88.00",
                        time:"2017-11-08 13:19:33",
                        status:2
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36342,
                        price:"88.00",
                        time:"2016-07-08 13:19:33",
                        status:1
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36382,
                        price:"88.00",
                        time:"2017-07-08 14:19:33",
                        status:1
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36362,
                        price:"88.00",
                        time:"2017-07-08 13:19:34",
                        status:1
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36342,
                        price:"88.00",
                        time:"2017-07-18 13:19:33",
                        status:1
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36322,
                        price:"88.00",
                        time:"2017-07-28 13:19:33",
                        status:1
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36335,
                        price:"88.00",
                        time:"2017-07-08 15:19:33",
                        status:1
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36356,
                        price:"88.00",
                        time:"2017-04-08 13:19:33",
                        status:1
                    },{
                        type:3,
                        img:"../../image/normalgoods.jpg",
                        title:"90%牛腱肉鲜粮狗狗瘦弱长的慢就选这个粮小黑狗粮100g",
                        spec:"默认",
                        sales:36349,
                        price:"88.00",
                        time:"2017-05-05 13:19:33",
                        status:1
                    }
                ]
            }
            if(e.error>0){
                alert(e.message)
            }else{
                Vue.set(main,'normallist',e.list);
                Vue.set(main.search_result,'normallist',e.list);
                main.Sort('sales');
            }
        }
    })
}
$(function(){
    GetPlan('','','','99');
    GetAddpack('','','','99');
    GetGoods('','','','99');
});