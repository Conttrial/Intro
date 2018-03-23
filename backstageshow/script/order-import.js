/**
 * Created by 5 on 2017/10/13.
 */


//滚动条
$(function(){
    var main_left = $("#main-left");
    var main_right =$("#main-right");

    if($(window).scrollTop()>80){
        if(!main_left.hasClass("active")){
            main_left.addClass("active");
            main_right.addClass("active");
        }
    }

    main_left.css("left",-$(window).scrollLeft()+$("#main").offset().left+"px");
    var left =0,top=0;
    $(window).unbind("scroll resize").on("scroll resize",function(){
        if(top !=$(window).scrollTop()){
            if($(window).scrollTop()>80){
                if(!main_left.hasClass("active")){
                    main_left.addClass("active");
                    main_right.addClass("active");
                }
            }else{
                if(main_left.hasClass("active")){
                    main_left.removeClass("active");
                    main_right.removeClass("active");
                }
            }
        }
        if(left != $(window).scrollLeft()){
            main_left.css("left",-$(window).scrollLeft()+$("#main").offset().left+"px");
        }
        top = $(window).scrollTop();
        left = $(window).scrollLeft();
    });
});



$(function(){
    $("#main .main .from>div").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).index()==2||$(this).index()==4){
            $("#main .main .paytype").css("display","flex");
        }else{
            $("#main .main .paytype").css("display","none");
        }
    });

    $("#main .main .paytype>div").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".price input").blur(function(){
            $(this).val(parseFloat($(this).val()).toFixed(2))
        }
    );
    var reg =/(^1[3|4|5|7|8]\d{9}$)/;

    $("#phone").on("input",function(){
        if($(this).val().length ==11){
            if(!reg.test($(this).val())){
                $(this).addClass("active");
            }
        }else{
            $(this).removeClass("active");
        }
    });

    $("#buy-time").on("click",function(){
        var data={
            that:$(this),
            position:"bottom",
            y:$(this).attr("y"),
            m:$(this).attr("m"),
            d:$(this).attr("d")
        };
        TimeShow(data);
    });

    $("#start-time").on("click",function(){
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


var main_right = new Vue({
    el:"#main-right",
    data:{
        order_num:"",
        customerid:"",
        username:"",
        phone:"",
        price:"",
        buy_time:"",
        start_time:"",
        spacing:1,
        address:"",
        remark:"",
        type:1,
        plangoods_list:{
            changegoods:{},
            changeindex:0,
            nowpage:1,
            multiselect:true,
            noeditlist:[],
            goodslist:[],
            selectgoods:[]
        },
        addgoods_list:{
            changegoods:{},
            changeindex:0,
            nowpage:1,
            noeditlist:[],
            multiselect:true,
            goodslist:[],
            selectgoods:[]
        }
    },
    computed:{
        Pages:function(){
            if(this.type==1){
                return Math.ceil(this.plangoods_list.goodslist.length/6);
            }else{
                return Math.ceil(this.addgoods_list.goodslist.length/6);
            }
        }
    },
    methods:{
        AddSpacing:function(){
            this.spacing++;
        },
        ReduceSpacing:function(){
            if(this.spacing>1){
                this.spacing--;
            }
        },
        GoodsShow:function(type){
            if(type=='plan'){
                this.type = 1;
                this.plangoods_list.multiselect = true;
            }else if(type=='add'){
                this.type = 2;
                this.addgoods_list.multiselect = true;
            }
        },
        Select:function(key){
            if(!$(event.target).hasClass("noedit")){
                var index ;
                if(this.type ==1){
                    index = $(event.target).parents("li").index()-1+(this.plangoods_list.nowpage-1)*6;
                    if(!key){
                        if(this.plangoods_list.multiselect){
                            this.plangoods_list.goodslist[index].select= false;
                        }
                    }else{
                        if(!this.plangoods_list.multiselect){
                            for(var i=0;i<this.plangoods_list.goodslist.length;i++){
                                if(!this.plangoods_list.goodslist[i].noedit &&this.plangoods_list.goodslist[i].select){
                                    this.plangoods_list.goodslist[i].select = false;
                                }
                            }
                        }
                        this.plangoods_list.goodslist[index].select= true;
                    }
                }else{
                    index = $(event.target).parents("li").index()-1+(this.addgoods_list.nowpage-1)*6;
                    if(!key){
                        if(this.addgoods_list.multiselect){
                            this.addgoods_list.goodslist[index].select= false;
                        }
                    }else{
                        if(!this.addgoods_list.multiselect){
                            for(var i=0;i<this.addgoods_list.goodslist.length;i++){
                                if(!this.addgoods_list.goodslist[i].noedit &&this.addgoods_list.goodslist[i].select){
                                    this.addgoods_list.goodslist[i].select = false;
                                }
                            }
                        }
                        this.addgoods_list.goodslist[index].select= true;
                    }
                }
            }
        },
        PrePage:function(){
            if(this.type==1){
                if(this.plangoods_list.nowpage>1){
                    this.plangoods_list.nowpage--;
                }
            }else if(this.type==2){
                if(this.addgoods_list.nowpage>1){
                    this.addgoods_list.nowpage--;
                }
            }

        },
        NextPage:function(){
            if(this.type==1){
                if(this.plangoods_list.nowpage<this.Pages){
                    this.plangoods_list.nowpage++;
                }
            }else if(this.type==2){
                if(this.addgoods_list.nowpage<this.Pages){
                    this.addgoods_list.nowpage++;
                }
            }
        },
        LastPage:function(){
            if(this.type==1){
                if(this.plangoods_list.nowpage<this.Pages){
                    this.plangoods_list.nowpage = this.Pages;
                }
            }else if(this.type==2){
                if(this.addgoods_list.nowpage<this.Pages){
                    this.addgoods_list.nowpage = this.Pages;
                }
            }
        },
        FirstPage:function(){
            if(this.type==1){
                if(this.plangoods_list.nowpage>1){
                    this.plangoods_list.nowpage = 1;
                }
            }else if(this.type==2){
                if(this.addgoods_list.nowpage>1){
                    this.addgoods_list.nowpage = 1;
                }
            }
        },
        NowPage:function(){
            if(this.type==1){
                this.plangoods_list.nowpage = parseInt($(event.target).html());
            }else if(this.type==2){
                this.addgoods_list.nowpage = parseInt($(event.target).html());
            }
        },
        Confirm:function(){
            if(this.type==1){
                if(this.plangoods_list.multiselect){
                    let list=[];
                    for(let i =0 ;i<this.plangoods_list.goodslist.length;i++){
                        if(this.plangoods_list.goodslist[i].select && !this.plangoods_list.goodslist[i].noedit){
                            this.plangoods_list.goodslist[i].noedit = true;
                            let temp = $.extend(true,{},this.plangoods_list.goodslist[i]);
                            temp.week = 1;
                            list.push(temp);
                        }
                    }
                    this.plangoods_list.selectgoods=this.plangoods_list.selectgoods.concat(list);
                }else{
                    for(let i =0;i<this.plangoods_list.goodslist.length;i++){
                        if(this.plangoods_list.goodslist[i].id == this.plangoods_list.changegoods.id){
                            Vue.set(this.plangoods_list.goodslist[i],'noedit',false);
                            Vue.set(this.plangoods_list.goodslist[i],'select',false);
                        }
                        if(this.plangoods_list.goodslist[i].select &&!this.plangoods_list.goodslist[i].noedit){
                            this.plangoods_list.goodslist[i].noedit = true;
                            this.plangoods_list.goodslist[i].select = true;
                            let temp = $.extend(true,{},this.plangoods_list.goodslist[i]);
                            temp.week = 1;
                            Vue.set(this.plangoods_list.selectgoods,this.plangoods_list.changeindex,temp)
                        }
                    }
                    this.plangoods_list.changegoods = {};
                    this.plangoods_list.changeindex = "";
                }
            }else if(this.type==2){
                if(this.addgoods_list.multiselect){
                    let list=[];
                    for(let i =0 ;i<this.addgoods_list.goodslist.length;i++){
                        if(this.addgoods_list.goodslist[i].select && !this.addgoods_list.goodslist[i].noedit){
                            this.addgoods_list.goodslist[i].noedit = true;
                            let temp = $.extend(true,{},this.addgoods_list.goodslist[i]);
                            temp.week = 1;
                            list.push(temp);
                        }
                    }
                    this.addgoods_list.selectgoods=this.addgoods_list.selectgoods.concat(list);
                }else{
                    for(let i =0;i<this.addgoods_list.goodslist.length;i++){
                        if(this.addgoods_list.goodslist[i].id == this.addgoods_list.changegoods.id){
                            Vue.set(this.addgoods_list.goodslist[i],'noedit',false);
                            Vue.set(this.addgoods_list.goodslist[i],'select',false);
                        }
                        if(this.addgoods_list.goodslist[i].select &&!this.addgoods_list.goodslist[i].noedit){
                            this.addgoods_list.goodslist[i].noedit = true;
                            this.addgoods_list.goodslist[i].select = true;
                            let temp = $.extend(true,{},this.addgoods_list.goodslist[i]);
                            temp.week = 1;
                            Vue.set(this.addgoods_list.selectgoods,this.addgoods_list.changeindex,temp)
                        }
                    }
                    this.addgoods_list.changegoods = {};
                    this.addgoods_list.changeindex = "";
                }
            }
            $("#goods").click();
        },
        Cancel:function(){
            if(this.type==1){
                if(!this.plangoods_list.multiselect){
                    for(var i =0;i<this.plangoods_list.goodslist.length;i++){
                        if(this.plangoods_list.goodslist[i].id == this.plangoods_list.changegoods.id){
                            main_right.plangoods_list.goodslist[i].select = true;
                            main_right.plangoods_list.goodslist[i].noedit = true;
                        }
                    }
                }
                for(var i=0;i<this.plangoods_list.goodslist.length;i++){
                    if(!this.plangoods_list.goodslist[i].noedit && this.plangoods_list.goodslist[i].select){
                        this.plangoods_list.goodslist[i].select = false;
                    }
                }
            }else if(this.type==2){
                if(!this.addgoods_list.multiselect){
                    for(var i =0;i<this.addgoods_list.goodslist.length;i++){
                        if(this.addgoods_list.goodslist[i].id == this.addgoods_list.changegoods.id){
                            main_right.addgoods_list.goodslist[i].select = true;
                            main_right.addgoods_list.goodslist[i].noedit = true;
                        }
                    }
                }
                for(var i=0;i<this.addgoods_list.goodslist.length;i++){
                    if(!this.addgoods_list.goodslist[i].noedit && this.addgoods_list.goodslist[i].select){
                        this.addgoods_list.goodslist[i].select = false;
                    }
                }
            }
            $("#goods").click();
        }
    },
    components:{
        "li-goods":{
            props:['data','index','type'],
            template:'<div class="li-goods">' +
                        '<div>'+
                            '<img :src="data.img" alt=""/>'+
                            '<div>'+
                                '<p>{{data.name}}</p>'+
                                '<p>{{data.spec}}</p>'+
                            '</div>'+
                        '</div>'+
                        '<div>'+
                            '￥{{(parseFloat(data.price)*data.week).toFixed(2)}}'+
                        '</div>'+
                        '<div class="weeks">'+
                            '<div>'+
                                '<div @click="Reduce">-</div>'+
                                '<input type="number" v-model="data.week" oninput="if(value.length>2)value=value.slice(0,2)" />'+
                                '<div @click="Add">+</div>'+
                            '</div>'+
                        '</div>'+
                        '<div>'+
                        '<div @click="GoodsShow" data-toggle="modal" data-target="#goods">更换</div>'+
                        '<div @click="Delete">删除</div>'+
                        '</div>'+
                    '</div>',
            methods:{
                Add:function(){
                    this.data.week++;
                },
                Reduce:function(){
                    if(this.data.week>1){
                        this.data.week--;
                    }
                },
                Delete:function(){
                    if(this.type =='plan'){
                        main_right.plangoods_list.selectgoods.splice(this.index,1);
                        for(let i =0;i<main_right.plangoods_list.goodslist.length;i++){
                            if(main_right.plangoods_list.goodslist[i].id == this.data.id){
                                Vue.set(main_right.plangoods_list.goodslist[i],'select',false)
                                Vue.set(main_right.plangoods_list.goodslist[i],'noedit',false)
                            }
                        }
                    }else if(this.type=='add'){
                        main_right.plangoods_list.selectgoods.splice(this.index,1);
                        for(let i =0;i<main_right.plangoods_list.goodslist.length;i++){
                            if(main_right.plangoods_list.goodslist[i].id == this.data.id){
                                Vue.set(main_right.plangoods_list.goodslist[i],'select',false)
                                Vue.set(main_right.plangoods_list.goodslist[i],'noedit',false)
                            }
                        }
                    }
                },
                GoodsShow:function(){
                    if(this.type=='plan'){
                        console.log(this.index)
                        main_right.plangoods_list.changegoods = this.data;
                        main_right.plangoods_list.changeindex = this.index;
                        for(var i=0;i<main_right.plangoods_list.goodslist.length;i++){
                            if(main_right.plangoods_list.goodslist[i].id == this.data.id){
                                Vue.set(main_right.plangoods_list.goodslist[i],'noedit',false)
                            }
                        }
                        main_right.type = 1;
                        main_right.plangoods_list.multiselect = false;
                    }else{
                        main_right.addgoods_list.changegoods = this.data;
                        main_right.addgoods_list.changeindex = this.index;
                        for(var i=0;i<main_right.addgoods_list.goodslist.length;i++){
                            if(main_right.addgoods_list.goodslist[i].id == this.data.id){
                                Vue.set(main_right.addgoods_list.goodslist[i],'noedit',false)
                            }
                        }
                        main_right.type = 2;
                        main_right.addgoods_list.multiselect = false;
                    }
                }
            }
        }
    }
});


//获取商品
$(function(){
        $.ajax({                        //获取计划商品
            url:"",
            // type:"POST",
            data:{},
            //dataType:"json",
            success:function(){
                var e  = {
                    error:0,
                    list:[
                        {
                            id:1,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬1周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"1409.3"
                        },
                        {
                            id:2,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬2周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"2409.3"
                        },
                        {
                            id:3,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬3周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"3409.3"
                        },
                        {
                            id:4,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬4周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"4409.3"
                        },
                        {
                            id:5,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬5周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"5409.3"
                        },
                        {
                            id:6,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬6周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"6409.3"
                        },
                        {
                            id:7,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬7周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"7409.3"
                        },
                        {
                            id:8,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬8周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"8409.3"
                        },
                        {
                            id:9,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬9周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"9409.3"
                        },
                        {
                            id:10,
                            img:"../../image/goodsimg.png",
                            name:"超大型犬10周小黑鲜粮",
                            spec:"规格：250g/7包/4周",
                            price:"10409.3"
                        }
                    ]
                }
                if(e.error>0){
                    alert(e.message)
                }else{
                    var list= [];
                    for(var i =0;i<e.list.length;i++){
                        var b= $.extend(true,{},e.list[i]);
                        b.select=false;
                        b.noedit=false;
                        list.push(b);
                    }
                    main_right.plangoods_list.goodslist = list;

                }
            }
        });

        $.ajax({                            //获取非计划商品
            url:"",
            type:'POST',
            data:{},
            //dataType:"json",
            success:function(e){
                var e  = {
                    error:0,
                    list:[
                        {
                            id:1,
                            img:"../../image/goodsimg.png",
                            name:"鸡胸肉",
                            spec:"规格：140g",
                            price:"11.32"
                        },
                        {
                            id:2,
                            img:"../../image/goodsimg.png",
                            name:"小牛肝",
                            spec:"规格：120g",
                            price:"24.17"
                        },
                        {
                            id:3,
                            img:"../../image/goodsimg.png",
                            name:"羊奶酪",
                            spec:"规格：180g",
                            price:"3409.3"
                        },
                        {
                            id:4,
                            img:"../../image/goodsimg.png",
                            name:"羊趾甲",
                            spec:"规格：2袋",
                            price:"4409.3"
                        },
                        {
                            id:5,
                            img:"../../image/goodsimg.png",
                            name:"鱼骨头",
                            spec:"规格：110g",
                            price:"5409.3"
                        },
                        {
                            id:6,
                            img:"../../image/goodsimg.png",
                            name:"足垫润滑油",
                            spec:"规格：80g",
                            price:"6409.3"
                        },
                        {
                            id:7,
                            img:"../../image/goodsimg.png",
                            name:"羊奶粉",
                            spec:"规格：60g",
                            price:"7409.3"
                        },
                        {
                            id:8,
                            img:"../../image/goodsimg.png",
                            name:"牛肉干",
                            spec:"规格：80g",
                            price:"8409.3"
                        },
                        {
                            id:9,
                            img:"../../image/goodsimg.png",
                            name:"鸡爪",
                            spec:"规格：60g",
                            price:"9409.3"
                        },
                        {
                            id:10,
                            img:"../../image/goodsimg.png",
                            name:"瓜子",
                            spec:"规格：660g",
                            price:"10409.3"
                        }
                    ]
                };
                if(e.error>0){
                    alert(e.message)
                }else{
                    var list= [];
                    for(var i =0;i<e.list.length;i++){
                        var b= $.extend(true,{},e.list[i]);
                        b.select=false;
                        b.noedit=false;
                        list.push(b);
                    }
                    main_right.addgoods_list.goodslist = list;

                }
            }
        })
    });


$("#submit").on("click",function(){
    var platform = $(".from .active").index();
    var paytype;
    if(platform ==2||platform ==4){
        if($(".paytype .active").index()==1){
            paytype='wx';
        }else{
            paytype='alipay';
        }
    }else if(platform ==1){
        paytype='wx'
    }else if(platform ==3){
        paytype='alipay'
    }

    var ordernum = main_right.order_num;
    var customerid = main_right.customerid;
    var customername = main_right.username;
    var phone = main_right.phone;
    var price = main_right.price;
    var buy_time = main_right.buy_time;
    var start_time = main_right.start_time;
    var spacing = main_right.spacing;
    var addressdetail = main_right.address;
    addressdetail = addressdetail.replace(/省/,"省 ");
    addressdetail = addressdetail.replace(/市/,"市 ");
    addressdetail = addressdetail.replace(/县/,"县 ");
    addressdetail = addressdetail.replace(/区/,"区 ");
    addressdetail = addressdetail.replace(/\s+/g," ");
    var remark = main_right.remark;
    var plangoods=[];
    var normalgoods=[];
    for(let i =0;i<main_right.plangoods_list.selectgoods.length;i++){
        let temp = {};
        temp.id = main_right.plangoods_list.selectgoods[i].id;
        temp.week = main_right.plangoods_list.selectgoods[i].week;
        plangoods.push(temp)
    }
    for(let i =0;i<main_right.addgoods_list.selectgoods.length;i++){
        let temp = {};
        temp.id = main_right.addgoods_list.selectgoods[i].id;
        temp.number = main_right.addgoods_list.selectgoods[i].week;
        normalgoods.push(temp)
    }
    //order_num:"",
    //    customerid:"",
    //    username:"",
    //    phone:"",
    //    price:"",
    //    buy_time:"",
    //    start_time:"",
    //    spacing:1,
    //    address:"",
    //    remark:"",
    if(platform>=0 && ordernum && customerid &&customername &&phone &&price &&buy_time &&start_time &&spacing &&addressdetail){
        $.ajax({
            url:"",
            // type:"POST",
            data:{
                platform:platform,
                ordernum:ordernum,
                customerid:customerid,
                customername:customername,
                phone:phone,
                price:price,
                paytype:paytype,
                buy_time:buy_time,
                start_time:start_time,
                spaing:spacing,
                addressdetail:addressdetail,
                remark:remark,
                plangoods:plangoods,
                normalgoods:normalgoods
            },
            //dataType:"json",
            success:function(e){
                if(Token(e)){
                    var key = '';
                    if(normalgoods.length>0){
                        key = "请手动分配普通商品发货情况";
                    }
                    alert("订单导入成功！"+key)
                    if(normalgoods.length>0){
                        localStorage.goods_deliver = 1;
                    }
                    window.open("/Intro/backstageshow/order/order-detail.html?id="+e.id);
                }
            }
        })
    }else{
        alert("请完善信息!")
    }
});



$("#start-time").on("focus",function(){
    main_right.start_time = $(this).val();
});
$("#buy-time").on("focus",function(){
    main_right.buy_time = $(this).val();
});
