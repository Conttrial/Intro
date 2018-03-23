/**
 * Created by 5 on 2017/12/18.
 */
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
        status:99,
        statuslist:[
            {name:"未处理",status:1},
            {name:"已处理",status:2},
            {name:"全部状态",status:99}
        ],
        keyword:""
    },
    methods:{
        Search:function(){
            var starttime='',endtime='';
            var m =date.getMonth()+1;
            if(m<10){
                m = "0"+m;
            }
            var d =date.getDate();
            if(d<10){
                d = "0"+d;
            }
            var nowtime = date.getFullYear()+"/"+m+"/"+d;
            if($("#search-starttime").attr("y")){
                starttime = $("#search-starttime").html();
            }
            if($("#search-endtime").attr("m")){
                endtime =$("#search-endtime").html();
            }
            var key;
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
                    alert("时间不能大于今天！");
                    return;
                }
            }
            if(starttime!='开始时间' && endtime!='结束时间'){
                if(endtime<starttime){
                    alert("结束时间不能大于开始时间！");
                    return;
                }
                if(starttime >nowtime){
                    alert("时间不能大于今天！");
                    return;
                }
            }
            if(starttime =="开始时间"){
                starttime ="1998/08/08";
            }
            if(endtime =='结束时间'){
                endtime = nowtime;
            }
            if(key){
                var type;
                if(main.type==[99]){
                    type="1,2,3"
                }else{
                    type=main.type.join(",")
                }
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        keyword:this.keyword,
                        starttime:starttime,
                        endtime:endtime,
                        status:this.status,
                        nowpage:1,
                        type:type,
                        showpages:main.showpages
                    },
                    //dataType:"json",
                    success:function(e){
                        var e= {
                            error:0,
                            list:[
                                {
                                    id:1,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"11",
                                    executivedirectortime:"",
                                    accountingtime:"",
                                    type:1,
                                    status:1,
                                    aftersalenum:1,
                                    aftersaleallnum:3,
                                    goodstype:"all",
                                    price:233.00,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    remarks:[
                                        {name:"主管曹操",time:"2017/08/08 18:08:21",content:"哈哈哈哈"}
                                    ],
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:2,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:1,
                                        paytype:"wx",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"}
                                    ],
                                },
                                {
                                    id:2,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"12",
                                    executivedirectortime:"2017/08/08 12:11:11",
                                    accountingtime:"",
                                    type:1,
                                    status:1,
                                    aftersalenum:1,
                                    aftersaleallnum:3,
                                    goodstype:"addpack",
                                    price:233.00,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    remarks:[
                                        {name:"主管曹操",time:"2017/08/08 18:08:21",content:"哈哈哈哈"}
                                    ],
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:2,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:1,
                                        paytype:"wx",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[

                                    ]
                                },
                                {
                                    id:3,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"21",
                                    executivedirectortime:"2017/08/08 12:11:11",
                                    accountingtime:"",
                                    type:1,
                                    status:2,
                                    aftersalenum:1,
                                    aftersaleallnum:3,
                                    goodstype:"plan",
                                    remarks:[],
                                    price:233.00,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:1,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:0,
                                        paytype:"alipay",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"}
                                    ]
                                },
                                {
                                    id:4,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"22",
                                    executivedirectortime:"2017/08/08 12:11:11",
                                    accountingtime:"",
                                    type:2,
                                    status:2,
                                    aftersalenum:1,
                                    aftersaleallnum:3,
                                    goodstype:"all",
                                    price:0,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    remarks:[
                                        {name:"主管曹操",time:"2017/08/08 18:08:21",content:"哈哈哈哈"}
                                    ],
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:3,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:1,
                                        paytype:"wx",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"蜘蛛",price:"48.00",number:1,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"}
                                    ]
                                },
                                {
                                    id:5,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"31",
                                    executivedirectortime:"2017/08/08 12:11:11",
                                    accountingtime:"2017/08/08 12:11:11",
                                    type:3,
                                    status:2,
                                    aftersalenum:1,
                                    aftersaleallnum:3,
                                    goodstype:"plan",
                                    price:0,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    remarks:[],
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:2,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:1,
                                        paytype:"wx",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"}
                                    ]
                                }
                            ]
                        }
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            main.list = e.list;
                        }
                    }
                })
            }
        },
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
        Select:function(){
            var status = $(event.target).attr("data-status");
            this.status = status;
            main.status = status;
            main.statuslimit=status;
        }
    }
});


var main = new Vue({
    el:"#main",
    data:{
        status:99,
        type:[99],
        usertype:localStorage.type,
        statuslimit:99,
        nowpage:1,
        showpages:100,
        list:[

        ]
    },
    computed:{
        Pages:function(){
            return Math.ceil(this.nownum/this.showpages)
        },
        nownum:function(){
           return this.list.length;
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
        HasType:function(){
            var data={};
            for(let i in this.type){
                data['type'+[this.type[i]]] = true;
            }
            return data;
        },
        allselect:function(){
            for(let i in this.list){
                if(this.list[i].select !=1){
                    return 0;
                }
            }
            return 1;
        },
        GoodsPages:function(){
            var list = [];
            for(let i =0;i<this.list.length;i++){
                list.push(Math.ceil(this.list[i].orderdetail.goodslist.length/3))
            }
            return list;
        },
        allapprove:function(){
            var key = true;
            for(let i =0;i<this.list.length;i++){
                if(this.list[i].select){
                    if(localStorage.type =='executivedirector' || localStorage.type == 'administrators' ||localStorage.type=='admin'){
                        if(this.list[i].progress !=11){
                            return false;
                        }
                    }else if(localStorage.type=='accounting' ||localStorage.type=='admin'){
                        if(this.list[i].progress!=12){
                            return false;
                        }
                    }
                }
            }
            return key;
        },
        allrefuse:function(){
            var key = true;
            for(let i =0;i<this.list.length;i++){
                if(this.list[i].select){
                    if(localStorage.type =='executivedirector' || localStorage.type == 'administrators' || localStorage.type=='admin'){
                        if(this.list[i].progress !=11){
                            return false;
                        }
                    }else if(localStorage.type=='accounting' || localStorage.type=='admin'){
                        if(this.list[i].progress!=12){
                            return false;
                        }
                    }
                }
            }
            return key;
        }
    },
    methods:{
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
        Select:function(){
            var _this;
            if($(event.target).hasClass("select")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent();
            }
            var index = _this.attr("data-index");
            var k =1;
            if(this.list[index].select ==1){
                k=0;
            }
            Vue.set(this.list[index],'select',k);
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
        ChangeStatus:function(){
            var _this;
            if($(event.target).attr("data-status")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent();
            }
            this.status = _this.attr("data-status");
            this.GetData();
        },
        ChangeType:function(){
            var _this;
            if($(event.target).hasClass("radio-wrap")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent(".radio-wrap");
            }
            var type = _this.attr("data-type");
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
        Check:function(e){
            var index = $(event.target).attr("data-index");
            if(e==1){
                Vue.set(this.list[index],'check',true)
            }else if(e==2){
                Vue.set(this.list[index],'check',false)
            }
        },
        GoodsNext:function(e){
            if(this.list[e].orderdetail.page<this.GoodsPages[e]){
                this.list[e].orderdetail.page++;
            }
        },
        GoodsPre:function(e){
            if(this.list[e].orderdetail.page>1){
                this.list[e].orderdetail.page--;
            }
        },
        Remark:function(e,index){
            remarks_pop.lis = this.list[index].remarks;
            if($("#remarks-pop").position().top == $(event.target)[0].offsetTop-20 ){
                $("#remarks-pop").removeClass("active");
            }else{
                $("#remarks-pop").addClass("active").css({"left":$(event.target)[0].offsetLeft-600,"top":$(event.target)[0].offsetTop-20});
                console.log($(event.target)[0].offsetLeft)
                remarks_pop.id=this.list[index].id;
                remarks_pop.index = index;
                if(e ==1){
                    remarks_pop.show = false;
                }else{
                    remarks_pop.show = true;
                }
            }
            event.stopPropagation();
        },
        Price:function(e,index){
            var _target = $(event.target).parent(".price");
            if($("#price-pop").position().top == _target[0].offsetTop-14){
                $("#price-pop").removeClass("active");
            }else{
                $("#price-pop").addClass("active").css({"left":_target[0].offsetLeft,"top":_target[0].offsetTop-14});
                price_pop.id = this.list[index].id;
                price_pop.index = index;
                price_pop.price = this.list[index].price;
                if(e ==1){
                    price_pop.type = 1;
                }else{
                    price_pop.type = 2;
                }
            }
            event.stopPropagation();
        },
        Approve:function(id,index){
            if(!$(event.target).hasClass("no")){
                $("#cover").addClass("active");
                cover.type=1;
                cover.id = [id];
                cover.index = [index];
            }

        },
        Refuse:function(id,index){
            if(!$(event.target).hasClass("no")){
                $("#cover").addClass("active");
                cover.type=2;
                cover.id = [id];
                cover.index = [index];
            }
        },
        AllCheck:function(){
            var key;
            for(let i =0;i<this.list.length;i++){
                if(this.list[i].select){
                    if(!this.list[i].check){
                        key = true;
                    }
                }
            }
            for(let i =0;i<this.list.length;i++){
                if(this.list[i].select){
                    if(key){
                        Vue.set(this.list[i],'check',1)
                    }else{
                        Vue.set(this.list[i],'check',0)
                    }
                }
            }
        },
        AllApprove:function(){
            var id = [];
            var index =[];
            for(let i =0; i<this.list.length;i++){
                if(this.list[i].select){
                    id.push(this.list[i].id);
                    index.push(i)
                }
            }
            if(id.length>0){
                $("#cover").addClass("active");
                cover.id = id;
                cover.index = index;
                cover.type=1;
            }
        },
        AllRefuse:function(){
            var id = [];
            var index =[];
            for(let i =0; i<this.list.length;i++){
                if(this.list[i].select){
                    id.push(this.list[i].id);
                    index.push(i)
                }
            }
            if(id.length>0){
                $("#cover").addClass("active");
                cover.id = id;
                cover.index = index;
                cover.type=2;
            }
        },
        CheckGoods:function(index){
            goods.list = this.list[index].giftgoods;
        },
        GetData:function(){
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
                var type;
                if(this.type==[99]){
                    type="1,2,3"
                }else{
                    type=this.type.join(",")
                }
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        keyword:search.keyword,
                        starttime:starttime,
                        endtime:endtime,
                        type:type,
                        nowpage:this.nowpage,
                        showpages:this.showpages,
                        status:this.status
                    },
                    //dataType:"json",
                    success:function(e){
                        var e= {
                            error:0,
                            list:[
                                {
                                    id:1,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"11",
                                    executivedirectortime:"",
                                    accountingtime:"",
                                    type:1,
                                    status:1,
                                    aftersalenum:1,
                                    aftersaleallnum:5,
                                    goodstype:"all",
                                    price:233.00,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    remarks:[
                                        {name:"主管曹操",time:"2017/08/08 18:08:21",content:"哈哈哈哈"}
                                    ],
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:2,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:1,
                                        paytype:"wx",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"}
                                    ],
                                },
                                {
                                    id:2,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"12",
                                    executivedirectortime:"2017/08/08 12:11:11",
                                    accountingtime:"",
                                    type:1,
                                    status:1,
                                    aftersalenum:1,
                                    aftersaleallnum:5,
                                    goodstype:"addpack",
                                    price:233.00,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    remarks:[
                                        {name:"主管曹操",time:"2017/08/08 18:08:21",content:"哈哈哈哈"}
                                    ],
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:2,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:1,
                                        paytype:"wx",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[

                                    ]
                                },
                                {
                                    id:3,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"21",
                                    executivedirectortime:"2017/08/08 12:11:11",
                                    accountingtime:"",
                                    type:1,
                                    status:1,
                                    aftersalenum:1,
                                    aftersaleallnum:5,
                                    goodstype:"plan",
                                    remarks:[],
                                    price:233.00,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:1,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:0,
                                        paytype:"alipay",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"}
                                    ]
                                },
                                {
                                    id:4,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"22",
                                    executivedirectortime:"2017/08/08 12:11:11",
                                    accountingtime:"",
                                    type:2,
                                    status:1,
                                    aftersalenum:1,
                                    aftersaleallnum:5,
                                    goodstype:"all",
                                    price:0,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    remarks:[
                                        {name:"主管曹操",time:"2017/08/08 18:08:21",content:"哈哈哈哈"}
                                    ],
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:3,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:1,
                                        paytype:"wx",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"蜘蛛",price:"48.00",number:1,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"}
                                    ]
                                },
                                {
                                    id:5,
                                    ordernum:201707231445321,
                                    name:"陈南康",
                                    phone:"13254698541",
                                    applicanttype:"executivedirector",
                                    applicantname:"曹操",
                                    applytime:"2017/08/07 12:21:07",
                                    progress:"31",
                                    executivedirectortime:"2017/08/08 12:11:11",
                                    accountingtime:"2017/08/08 12:11:11",
                                    type:3,
                                    status:2,
                                    aftersalenum:1,
                                    aftersaleallnum:5,
                                    goodstype:"plan",
                                    price:0,
                                    weeks:"1,2,3,4",
                                    allweeks:12,
                                    rweek:11,
                                    remarks:[],
                                    orderdetail:{
                                        username:"陈南康",
                                        phone:13232154221,
                                        address:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
                                        platform:2,
                                        time:"2017/07/23 11:44:21",
                                        activity:"",
                                        discount:"",
                                        paid:1,
                                        paytype:"wx",
                                        price:"122.00",
                                        goodslist:[
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"},
                                            {name:"超能小黑中型犬鲜粮",spec:"500g",price:"233.00",number:1,week:3,img:"../../image/goods-img.png"}
                                        ],
                                        page:1
                                    },
                                    giftgoods:[
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"},
                                        {name:"羊鲜肉",price:"18.00",number:4,img:"../../image/goods-img.png",spec:"200g"}
                                    ]
                                }
                            ]
                        }
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            main.list = e.list;
                        }
                    }
                })
            }
        },
        CheckAllAfterSales:function(index){
            search.keyword = this.list[index].name;
            $("#search .start-time").attr({"y":"","m":"","d":""}).html("开始时间");
            $("#search .end-time").attr({"y":"","m":"","d":""}).html("结束时间");
            search.status=99;
            this.status=99;
            this.status_limit=99;
            search.Search();
        }
    },
    mounted(){
        this.GetData();
    }
});




var remarks_pop =new Vue({
    el:"#remarks-pop",
    data:{
        lis:[],
        id:2,
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
            remarks_pop.show = true;
            event.stopPropagation();
            this.remark_content="";
        },
        RemarkCancel:function(){
            this.remark_content="";
        },
        StopEvent:function(){
            event.stopPropagation();
        },
        SubmitRemark:function(){
            if(this.remark_content.length>0){
                $.ajax({
                    url:"",
                    type:"post",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        content:this.remark_content,
                        aftersaleid:this.id
                    },
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message);
                            $("#remarks-pop").removeClass("active");
                            if(e.error>=9000){
                                localStorage.clear();
                                location.href="/backstage/html/login.html"
                            }
                        }else{
                            alert("备注成功！");
                            if(weeks ==''){
                                var remark = {
                                    name:localStorage.nickname,
                                    time:e.date,
                                    content:remarks_pop.remark_content
                                };
                                main.list[remarks_pop.index].remarks.push(remark);
                            }
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

var price_pop = new Vue({
    el:"#price-pop",
    data:{
        type:1,
        id:1,
        index:1,
        price:0
    },
    methods:{
        Cancel:function(){
            $("#price-pop").removeClass("active");
        },
        Submit:function(){
            if(this.type==1){
                if(this.price>0){
                    $.ajax({
                        url:"",
                        type:"POST",
                        data:{
                            userid:localStorage.userid,
                            token:localStorage.token,
                            price:this.price,
                            aftersaleid:this.id
                        },
                        //dataType:'json',
                        success:function(e){
                            if(e.error>0){
                                alert(e.message)
                            }else{
                                main.list[price_pop.index].price = price_pop.price;
                                $("#price-pop").removeClass("active");
                            }
                        }
                    })
                }
            }else if(this.type==2){
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        aftersaleid:this.id
                    },
                    //dataType:'json',
                    success:function(e){
                        var e={
                            error:0,
                            price:1232
                        }
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            main.list[price_pop.index].price = e.price;
                            $("#price-pop").removeClass("active");
                        }
                    }
                })
            }
        }
    }
})
var cover = new Vue({
    el:"#cover",
    data:{
        id:[1],
        type:1,
        index:[0]
    },
    methods:{
        Confirm:function(){
            if(this.type==1){
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        aftersaleid:JSON.stringify(this.id),
                        type:localStorage.type
                    },
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            for(let i =0;i<cover.index.length;i++){
                                if(localStorage.type =='executivedirector' || localStorage.type == 'administrators' ||localStorage.type=='admin'){
                                    Vue.set(main.list[cover.index[i]],'progress',12)
                                }else if(localStorage.type=='accounting' ||localStorage.type=='admin'){
                                    Vue.set(main.list[cover.index[i]],'progress',31)
                                }
                            }
                            $("#cover").removeClass("active");
                        }
                    }
                })
            }else{
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        aftersaleid:JSON.stringify(this.id),
                        type:localStorage.type
                    },
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            for(let i =0;i<cover.index.length;i++){
                                if(localStorage.type =='executivedirector' || localStorage.type == 'administrators'){
                                    Vue.set(main.list[cover.index[i]],'progress',21)
                                }else if(localStorage.type=='accounting'){
                                    Vue.set(main.list[cover.index[i]],'progress',22)
                                }
                            }
                            $("#cover").removeClass("active");
                        }
                    }
                })
            }
        },
        Cancel:function(){
            $("#cover").removeClass("active");
            event.stopPropagation();
        }
    }

})

var goods = new Vue({
    el:"#goods",
    data:{
        list:[],
        nowpage:1
    },
    computed:{
        Pages:function(){
            return Math.ceil(this.list.length/6);
        }
    },
    methods:{
        Cancel:function(){
            $("#goods").click();
        },
        PrePage:function(){
            if(this.nowpage>1) {
                this.nowpage--;
            }
        },
        NextPage:function(){
            if(this.nowpage<this.Pages) {
                this.nowpage++;
            }
        },
        LastPage:function(){
            if(this.nowpage<this.Pages){
                this.nowpage = this.Pages;
            }
        },
        FirstPage:function(){
            if(this.nowpage>0){
                this.nowpage = 0;
            }
        },
        NowPage:function(){
            this.nowpage = parseInt($(event.target).html());
        },
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