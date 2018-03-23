var algoodsid,algoodstype;
$(function(){
    ue = UE.getEditor('editor');
    ue2 = UE.getEditor('editor-normal');
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
    $(window).on("scroll",function(){
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
    $(window).on("resize",function(){
        main_left.css("left",-$(window).scrollLeft()+$("#main").offset().left+"px");
    });
});
$(function(){
    var key =0;
    $.ajax({                        //获取普通商品
        url:"",
        type:"POST",
        data:{},
        //dataType:"json",
        success:function(e){
            var e  = {
                error:0,
                list:[
                    {
                        id:1,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬1周小黑鲜粮",
                        spec:"150g",
                        price:"1409.3"
                    },
                    {
                        id:2,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬2周小黑鲜粮",
                        spec:"250g",
                        price:"2409.3"
                    },
                    {
                        id:3,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬3周小黑鲜粮",
                        spec:"350g",
                        price:"3409.3"
                    },
                    {
                        id:4,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬4周小黑鲜粮",
                        spec:"450g",
                        price:"4409.3"
                    },
                    {
                        id:5,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬5周小黑鲜粮",
                        spec:"550g",
                        price:"5409.3"
                    },
                    {
                        id:6,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬6周小黑鲜粮",
                        spec:"650g",
                        price:"6409.3"
                    },
                    {
                        id:7,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬7周小黑鲜粮",
                        spec:"750g",
                        price:"7409.3"
                    },
                    {
                        id:8,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬8周小黑鲜粮",
                        spec:"850g",
                        price:"8409.3"
                    },
                    {
                        id:9,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬9周小黑鲜粮",
                        spec:"950g",
                        price:"9409.3"
                    },
                    {
                        id:10,
                        img:"../../image/goodsimg.png",
                        name:"超大型犬10周小黑鲜粮",
                        spec:"1050g",
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
                var temp= $.extend(true,[],list)
                var temp1= $.extend(true,[],list)
                main_right.plan.plangoods.goodslist = temp;
                main_right.addpack.addgoods.goodslist = temp1;
            }
        }
    });

    $.ajax({                            //获取增值包商品
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
                main_right.plan.addgoods.goodslist = list;
            }
        }
    })

});
$(function(){
    function getParamer(paramer){
        var url=window.location.href.split("?")[1];            /*获取url里"?"后面的值*/

        if(url.indexOf("&")>0){                                      /*判断是否是一个参数还是多个参数*/
            var urlParamArry=url.split("&");                            /*分开每个参数，并放到数组里*/
            for(var i=0; i<urlParamArry.length; i++){
                var paramerName=urlParamArry[i].split("=");   /*把每个参数名和值分开，并放到数组里*/
                if(paramer==paramerName[0]){                     /*匹配输入的参数和数组循环出来的参数是否一样*/
                    if(paramerName[1].indexOf("#")>0){
                        return paramerName[1].split("#")[0];                           /*返回想要的参数值*/
                    }else{
                        return paramerName[1]
                    }
                }
            }
        }else{                                                              /*判断只有个参数*/
            var paramerValue=url.split("=")[1];
            return paramerValue;
        }
    }
    if(window.location.href.split("?")[1]){
        var type = getParamer('type');
        var id = getParamer('id');
        algoodsid = id;
        algoodstype = type;
        main_right.type=type;
        //
        var url;
        if(type=='plan'){
            url=''
        }else if (type=='addpack'){
            url=''
        }else if(type=='normal'){
            url=''
        }
        $.ajax({
            url:url,
            type:"POST",
            data:{
                userid:localStorage.userid,
                token:localStorage.token,
                id:id
            },
            //dataType:"json",
            success:function(e){
                var e={
                    error:0,
                    shopid:2,
                    categoryid:2,
                    title:"嘿嘿",
                    selling_point:"哈哈哈",
                    shop_classifyid:2,
                    express:"sf",
                    release:1,
                    detail:"<h2>b哦伯伯</h2>",
                    goodsimg:"https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3618554304,2887917621&fm=77&w_h=121_75&cs=2820658166,1330608299",
                    backimg:"https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=648300297,3284313282&fm=77&w_h=121_75&cs=1136402502,639612303",
                    plangoodsid:4,
                    plangoodsnumber:5,
                    plangoodsprice:"22220",
                    addpackgoods:"1,2",
                    goodslist:"3,4",
                    discount:6,
                    imgs:[{
                        id:0,
                        url:"https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3618554304,2887917621&fm=77&w_h=121_75&cs=2820658166,1330608299"
                    },{
                        id:1,
                        url:"https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=648300297,3284313282&fm=77&w_h=121_75&cs=1136402502,639612303"
                    }
                    ],
                    speclist:[{id:2,number:1,price:12},{id:3,number:2,price:2},{id:4,number:3,price:3}]
                };
                if(Token(e)){
                    main_right[type].shopid = e.shopid;
                    for(let i=0;i<main_right[type].shoplist.length;i++){
                        if(main_right[type].shoplist[i].id ==e.shopid){
                            main_right[type].shop = main_right[type].shoplist[i].name;
                            break;
                        }
                    }
                    main_right[type].categoryid = e.categoryid;
                    for(let i=0;i<main_right[type].categorylist.length;i++){
                        if(main_right[type].categorylist[i].id ==e.categoryid){
                            main_right[type].category = main_right[type].categorylist[i].name;
                            break;
                        }
                    }
                    main_right[type].shop_classifyid = e.shop_classifyid;
                    for(let i=0;i<main_right[type].shop_classifylist.length;i++){
                        if(main_right[type].shop_classifylist[i].id ==e.shop_classifyid){
                            main_right[type].shop_classify = main_right[type].shop_classifylist[i].name;
                            break;
                        }
                    }
                    main_right[type].title = e.title;
                    main_right[type].selling_point = e.selling_point;
                    main_right[type].express = e.express;
                    main_right[type].release = e.release;
                    if(type == 'plan'){
                        $("#file1").siblings("img").attr("src",e.goodsimg).siblings(".cover").addClass("active");
                        $("#file2").siblings("img").attr("src",e.backimg).siblings(".cover").addClass("active");
                        ue.ready(function() {
                            ue.setContent(e.detail)
                        });
                        for(let i =0;i<main_right.plan.plangoods.goodslist.length;i++){
                            if(main_right.plan.plangoods.goodslist[i].id == e.plangoodsid){
                                main_right.plan.plangoods.goodslist[i].select =true;
                                Vue.set(main_right.plan.plangoods.selectgoods,0,main_right.plan.plangoods.goodslist[i])
                            }
                        }
                        main_right.plan.plangoods.number = e.plangoodsnumber;
                        main_right.$nextTick(function(){
                                $("#plan-total>input").val(e.plangoodsprice)
                            }
                        );
                        var addpackids = e.addpackgoods.split(",");
                        for(let i =0;i<main_right.plan.addgoods.goodslist.length;i++){
                            for(let j=0;j<addpackids.length;j++){
                                if(main_right.plan.addgoods.goodslist[i].id ==addpackids[j]){
                                    Vue.set(main_right.plan.addgoods.goodslist[i],'select',true);
                                    Vue.set(main_right.plan.addgoods.goodslist[i],'noedit',true);
                                    Vue.set(main_right.plan.addgoods.selectgoods,j,main_right.plan.addgoods.goodslist[i])
                                }
                            }
                        }
                    }else if (type=='addpack'){
                        $("#file3").siblings("img").attr("src",e.goodsimg).siblings(".cover").addClass("active");
                        $("#file4").siblings("img").attr("src",e.backimg).siblings(".cover").addClass("active");
                        var goodsids = e.goodslist.split(",");
                        for(let i =0;i<main_right.addpack.addgoods.goodslist.length;i++){
                            for(let j=0;j<goodsids.length;j++){
                                if(main_right.addpack.addgoods.goodslist[i].id ==goodsids[j]){
                                    Vue.set(main_right.addpack.addgoods.goodslist[i],'select',true);
                                    Vue.set(main_right.addpack.addgoods.goodslist[i],'noedit',true);
                                    Vue.set(main_right.addpack.addgoods.selectgoods,j,main_right.addpack.addgoods.goodslist[i])
                                }
                            }
                        }
                        main_right.addpack.plangoods.discount = e.discount;
                    }else if(type=='normal'){
                        ue2.ready(function() {
                            ue2.setContent(e.detail)
                        });
                        for(let i=0;i<e.imgs.length;i++){
                            $(".normal .imgs .imgup>img").eq(i).attr("src",e.imgs[i].url).siblings("input").attr("data-id",e.imgs[i].id).siblings(".cover").addClass("active");
                        }
                        for(let i =0;i<e.speclist.length;i++){
                            for(let j =0;j<main_right.normal.speclist.length;j++){
                                if(main_right.normal.speclist[j].id == e.speclist[i].id){
                                    Vue.set(main_right.normal.speclist[j],'select',1)
                                    e.speclist[i].name = main_right.normal.speclist[j].name;
                                    main_right.normal.selectlist.push(e.speclist[i]);
                                }
                            }
                        }
                    }
                }
            }

        })
    }
})


var main_right = new Vue({
    el:"#main-right",
    data:{
        type:'plan',
        plan:{
            shop:'',
            shopid:1,
            shoplist:[],
            category:'',
            categoryid:1,
            title:"",
            selling_point:"",
            categorylist:[],
            shop_classify:'',
            shop_classifyid:1,
            shop_classifylist:[],
            express:'zto',
            release:1,
            type:1,
            plangoods:{
                selectgoods:[],
                changegoods:{},
                changeindex:0,
                number:1,
                goodslist:[],
                nowpage:1,
                multiselect:false
            },
            addgoods:{
                selectgoods:[],
                changegoods:{},
                changeindex:"",
                goodslist:[],
                nowpage:1,
                multiselect:true
            }
        },
        addpack:{
            shop:'',
            shopid:1,
            shoplist:[],
            category:'',
            categoryid:1,
            title:"",
            selling_point:"",
            categorylist:[],
            shop_classify:'',
            shop_classifyid:1,
            shop_classifylist:[],
            express:'zto',
            release:1,
            type:1,
            plangoods:{
                selectgoods:{

                },
                changegoods:{},
                changeindex:0,
                discount:7,
                goodslist:[],
                multiselect:false
            },
            addgoods:{
                selectgoods:[],
                changegoods:{},
                changeindex:"",
                goodslist:[],
                nowpage:1,
                multiselect:true
            }
        },
        normal:{
            shop:'',
            shopid:1,
            shoplist:[],
            category:'',
            categoryid:1,
            title:"",
            edit:0,
            selling_point:"",
            categorylist:[],
            shop_classify:'',
            shop_classifyid:1,
            shop_classifylist:[],
            express:'zto',
            release:1,
            type:1,
            speclist:[

            ],
            editlist:[],
            selectlist:[]
        }
    },
    computed:{
        Pages:function(){
            if(this.plan.type==1){
                return Math.ceil(this.plan.plangoods.goodslist.length/6);
            }else{
                return Math.ceil(this.plan.addgoods.goodslist.length/6);
            }
        },
        specselectlist:function(){
            var list=[];
            for(let i =0;i<this.normal.speclist.length;i++){
                if(this.normal.speclist[i].select==1){
                    this.normal.speclist[i].number = 1;
                    this.normal.speclist[i].price = 0;
                    list.push(this.normal.speclist[i])
                }
            }
            return list;
        },
        addpack_plangoodsprice:function(){
            var price = 0;
            for(let i =0;i<this.addpack.addgoods.selectgoods.length;i++){
                price += parseFloat(this.addpack.addgoods.selectgoods[i].price)
            }
            return price;
        }
    },
    methods:{
        //切换标签
        planprice:function(){
            $("#plan-total >input").val((parseFloat(this.plan.plangoods.number)*parseFloat($(event.target).attr("data-price"))).toFixed(2))
        },
        ChangePage:function(){
            var _this =$(event.target);
            this.type = _this.attr("data-type");
            if(this.type=='plan'){
                this.$nextTick(function(){
                    ue = UE.getEditor('editor');
                })
            }else if(this.plan =='normal'){
                this.$nextTick(function(){

                })
            }
        },
        //下拉菜单显示
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
            if($(event.target).parents("li").hasClass("shop")){
                this[this.type].shop = $(event.target).html();
                this[this.type].shopid = $(event.target).attr("data-id");
                GetClassify(this[this.type].shopid,this.type);
            }else if($(event.target).parents("li").hasClass("type")){
                this[this.type].category = $(event.target).html();
                this[this.type].categoryid = $(event.target).attr("data-id");
            }else if($(event.target).parents("li").hasClass("shop-classify")){
                this[this.type].shop_classify = $(event.target).html();
                this[this.type].shop_classifyid = $(event.target).attr("data-id");
            }
        },
        //添加商品显示
        GoodsShow:function(type){
            if(type=='plan'){
                this[this.type].type = 1;
                this[this.type].plangoods.multiselect = false;
            }else if(type=='add'){
                this[this.type].type = 2;
                this[this.type].addgoods.multiselect = true;
            }
        },
        //更换商品显示
        GoodsShow2:function(key){
            if(key == 'plan'){
                var temp = $.extend(true,{},this.plan.plangoods.selectgoods[0]);
                this[this.type].plangoods.changegoods = temp;
                this[this.type].plangoods.changeindex = 0;
                for(var i=0;i<this.plan.plangoods.goodslist.length;i++){
                    if(this[this.type].plangoods.goodslist[i].id == temp.id){
                        Vue.set(this.plan.plangoods.goodslist[i],'noedit',false)
                        Vue.set(this.plan.plangoods.goodslist[i],'select',true)
                    }
                }
                this[this.type].type = 1;
                this[this.type].plangoods.multiselect = false;
            }else{
                var _this = this[this.type].addgoods.selectgoods[$(event.target).parents(".goods").index()];
                this[this.type].addgoods.changegoods = _this;
                this[this.type].addgoods.changeindex = $(event.target).parents(".goods").index();
                for(var i=0;i<this[this.type].addgoods.goodslist.length;i++){
                    if(this[this.type].addgoods.goodslist[i].id == _this.id){
                        Vue.set(this[this.type].addgoods.goodslist[i],'noedit',false)
                        Vue.set(this[this.type].addgoods.goodslist[i],'select',true)
                    }
                }
                this[this.type].type = 2;
                this[this.type].addgoods.multiselect = false;
            }
        },
        //选择商品
        SelectGoods:function(key){
            if(!$(event.target).hasClass("noedit")){
                var index ;
                if(this[this.type].type ==1){
                    index = $(event.target).parents("li").index()-1+(this[this.type].plangoods.nowpage-1)*6;
                    if(!key){
                        if(this[this.type].plangoods.multiselect){
                            this[this.type].plangoods.goodslist[index].select= false;
                        }
                    }else{
                        if(!this[this.type].plangoods.multiselect){
                            for(var i=0;i<this[this.type].plangoods.goodslist.length;i++){
                                if(!this[this.type].plangoods.goodslist[i].noedit &&this[this.type].plangoods.goodslist[i].select){
                                    this[this.type].plangoods.goodslist[i].select = false;
                                }
                            }
                        }
                        this[this.type].plangoods.goodslist[index].select= true;
                    }
                    console.log(this[this.type].plangoods.goodslist)
                }else{
                    index = $(event.target).parents("li").index()-1+(this[this.type].addgoods.nowpage-1)*6;
                    if(!key){
                        if(this[this.type].addgoods.multiselect){
                            this[this.type].addgoods.goodslist[index].select= false;
                        }
                    }else{
                        if(!this[this.type].addgoods.multiselect){
                            for(var i=0;i<this[this.type].addgoods.goodslist.length;i++){
                                if(!this[this.type].addgoods.goodslist[i].noedit &&this[this.type].addgoods.goodslist[i].select){
                                    this[this.type].addgoods.goodslist[i].select = false;
                                }
                            }
                        }
                        console.log(this.type)
                        console.log(this[this.type])
                        this[this.type].addgoods.goodslist[index].select= true;
                    }
                }
            }
        },
        //上一页
        PrePage:function(){
            if(this[this.type].type==1){
                if(this[this.type].plangoods.nowpage>1){
                    this[this.type].plangoods.nowpage--;
                }
            }else if(this[this.type].type==2){
                if(this[this.type].addgoods.nowpage>1){
                    this[this.type].addgoods.nowpage--;
                }
            }

        },
        //下一页
        NextPage:function(){
            if(this[this.type].type==1){
                if(this[this.type].plangoods.nowpage<this.Pages){
                    this[this.type].plangoods.nowpage++;
                }
            }else if(this[this.type].type==2){
                if(this[this.type].addgoods.nowpage<this.Pages){
                    this[this.type].addgoods.nowpage++;
                }
            }
        },
        //最后一页
        LastPage:function(){
            if(this[this.type].type==1){
                if(this[this.type].plangoods.nowpage<this.Pages){
                    this[this.type].plangoods.nowpage = this.Pages;
                }
            }else if(this[this.type].type==2){
                if(this[this.type].addgoods.nowpage<this.Pages){
                    this[this.type].addgoods.nowpage = this.Pages;
                }
            }
        },
        //第一页
        FirstPage:function(){
            if(this[this.type].type==1){
                if(this[this.type].plangoods.nowpage>1){
                    this[this.type].plangoods.nowpage = 1;
                }
            }else if(this[this.type].type==2){
                if(this[this.type].addgoods.nowpage>1){
                    this[this.type].addgoods.nowpage = 1;
                }
            }
        },
        //特定页
        NowPage:function(){
            if(this[this.type].type==1){
                this[this.type].plangoods.nowpage = parseInt($(event.target).html());
            }else if(this[this.type].type==2){
                this[this.type].addgoods.nowpage = parseInt($(event.target).html());
            }
        },
        //确定添加商品
        Confirm:function(){
            if(this[this.type].type==1){
                if(this[this.type].plangoods.multiselect){
                    let list=[];
                    for(let i =0 ;i<this[this.type].plangoods.goodslist.length;i++){
                        if(this[this.type].plangoods.goodslist[i].select && !this[this.type].plangoods.goodslist[i].noedit){
                            this[this.type].plangoods.goodslist[i].noedit = true;
                            this[this.type].plangoods.goodslist[i].select = true;
                            let temp = $.extend(true,{},this[this.type].plangoods.goodslist[i]);
                            temp.week = 1;
                            list.push(temp);
                        }
                    }
                    this[this.type].plangoods.selectgoods=this[this.type].plangoods.selectgoods.concat(list);
                }else{
                    for(let i =0;i<this[this.type].plangoods.goodslist.length;i++){
                        if(this[this.type].plangoods.goodslist[i].id == this[this.type].plangoods.changegoods.id){
                            Vue.set(this[this.type].plangoods.goodslist[i],'noedit',false);
                            Vue.set(this[this.type].plangoods.goodslist[i],'select',false);
                        }
                        if(this[this.type].plangoods.goodslist[i].select &&!this[this.type].plangoods.goodslist[i].noedit){
                            let temp = $.extend(true,{},this[this.type].plangoods.goodslist[i]);
                            temp.week = 1;
                            Vue.set(this[this.type].plangoods.selectgoods,this[this.type].plangoods.changeindex,temp)
                        }
                    }
                    this[this.type].plangoods.changegoods = {};
                    this[this.type].plangoods.changeindex = "";
                }
            }else if(this[this.type].type==2){
                if(this[this.type].addgoods.multiselect){
                    let list=[];
                    for(let i =0 ;i<this[this.type].addgoods.goodslist.length;i++){
                        if(this[this.type].addgoods.goodslist[i].select && !this[this.type].addgoods.goodslist[i].noedit){
                            this[this.type].addgoods.goodslist[i].noedit = true;
                            let temp = $.extend(true,{},this[this.type].addgoods.goodslist[i]);
                            temp.week = 1;
                            list.push(temp);
                        }
                    }
                    this[this.type].addgoods.selectgoods=this[this.type].addgoods.selectgoods.concat(list);
                }else{
                    for(let i =0;i<this[this.type].addgoods.goodslist.length;i++){
                        if(this[this.type].addgoods.goodslist[i].id == this[this.type].addgoods.changegoods.id){
                            Vue.set(this[this.type].addgoods.goodslist[i],'noedit',false);
                            Vue.set(this[this.type].addgoods.goodslist[i],'select',false);
                        }
                        if(this[this.type].addgoods.goodslist[i].select &&!this[this.type].addgoods.goodslist[i].noedit){
                            console.log(this[this.type].plangoods.goodslist[i])
                            this[this.type].addgoods.goodslist[i].noedit = true;
                            this[this.type].addgoods.goodslist[i].select = true;
                            let temp = $.extend(true,{},this[this.type].addgoods.goodslist[i]);
                            temp.week = 1;
                            Vue.set(this[this.type].addgoods.selectgoods,this[this.type].addgoods.changeindex,temp);
                        }
                    }
                    this[this.type].addgoods.changegoods = {};
                    this[this.type].addgoods.changeindex = "";
                }
            }
            $("#goods").click();
        },
        //取消添加商品
        Cancel:function(){
            if(this[this.type].type==1){
                if(!this[this.type].plangoods.multiselect){
                    for(var i =0;i<this[this.type].plangoods.goodslist.length;i++){
                        if(this[this.type].plangoods.goodslist[i].id == this[this.type].plangoods.changegoods.id){
                            this[this.type].plangoods.goodslist[i].select = true;
                            this[this.type].plangoods.goodslist[i].noedit = true;
                        }
                    }
                }
                for(var i=0;i<this[this.type].plangoods.goodslist.length;i++){
                    if(!this[this.type].plangoods.goodslist[i].noedit && this[this.type].plangoods.goodslist[i].select){
                        this[this.type].plangoods.goodslist[i].select = false;
                    }
                }
            }else if(this[this.type].type==2){
                if(!this[this.type].addgoods.multiselect){
                    for(var i =0;i<this[this.type].addgoods.goodslist.length;i++){
                        if(this[this.type].addgoods.goodslist[i].id == this[this.type].addgoods.changegoods.id){
                            this[this.type].addgoods.goodslist[i].select = true;
                            this[this.type].addgoods.goodslist[i].noedit = true;
                        }
                    }
                }
                for(var i=0;i<this[this.type].addgoods.goodslist.length;i++){
                    if(!this[this.type].addgoods.goodslist[i].noedit && this[this.type].addgoods.goodslist[i].select){
                        this[this.type].addgoods.goodslist[i].select = false;
                    }
                }
            }
            $("#goods").click();

        },
        //删除商品
        Delete:function(){
            var index = $(event.target).parents(".goods").index();
            for(let i =0;i<this[this.type].addgoods.goodslist.length;i++){
                if(this[this.type].addgoods.goodslist[i].id == this[this.type].addgoods.selectgoods[index].id){
                    Vue.set(this[this.type].addgoods.goodslist[i],'select',false)
                    Vue.set(this[this.type].addgoods.goodslist[i],'noedit',false)
                }
            }
            this[this.type].addgoods.selectgoods.splice(index,1);
        },
        //商品上移
        Up:function(){
            if($(event.target).hasClass("active")){
                console.log("??")
                var index = $(event.target).parents(".goods").index();
                var temp = $.extend(true,{},this[this.type].addgoods.selectgoods[index]);
                var temp1 = $.extend(true,{},this[this.type].addgoods.selectgoods[index-1]);
                Vue.set(this[this.type].addgoods.selectgoods,index,temp1);
                Vue.set(this[this.type].addgoods.selectgoods,index-1,temp);
            }
        },
        //商品下移
        Down:function(){
            if($(event.target).hasClass("active")){
                var index = $(event.target).parents(".goods").index();
                var temp = $.extend(true,{},this[this.type].addgoods.selectgoods[index]);
                var temp1 = $.extend(true,{},this[this.type].addgoods.selectgoods[index+1]);
                Vue.set(this[this.type].addgoods.selectgoods,index,temp1);
                Vue.set(this[this.type].addgoods.selectgoods,index+1,temp);
            }
        },
        //其他设置选择
        Select2:function(type){
            var _this;
            if($(event.target).hasClass("radio-wrap")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent(".radio-wrap");
            }
            this[this.type][type] = _this.attr("data-data");
        },
        //输入字数监听
        TextInput:function(){
            $(event.target).siblings(".count").find("span").html($(event.target).val().length);
        },
        //规格选择
        SpectSelect:function(){
            var _this;
            if($(event.target).hasClass("radio-wrap")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent();
            }
            var index = _this.index();
            if(this.normal.edit ==0){
                if(this.normal.speclist[index].select){
                    Vue.set(this.normal.speclist[index],'select',0);
                    for(var i =0 ;i<this.normal.selectlist.length;i++){
                        if(this.normal.speclist[index].id ==this.normal.selectlist[i].id ){
                            this.normal.selectlist.splice(i,1)
                        }
                    }
                }else{
                    Vue.set(this.normal.speclist[index],'select',1);
                    var b = $.extend(true,{},this.normal.speclist[index]);
                    b.number = 1;
                    b.price = 0;
                    this.normal.selectlist.push(b);
                }
            }
        },
        //删除规格
        DeleteSpec:function(){
            if(this.normal.edit ==1){
                var _this = $(event.target).parent();
                var index =_this.index();
                var id = this.normal.speclist[index].id;
                cover.index = index;
                cover.id = id;
                $("#cover").addClass("active");
            }

        },
        //编辑/取消编辑规格
        SpecShow:function(){
            if(this.normal.edit ==1){
                this.normal.edit = 0;
                this.normal.editlist=[];
            }else{
                this.normal.edit = 1;
            }
        },
        //编辑规格内容
        SpecInput:function(){
            var index = $(event.target).parent(".radio-wrap").index();
            for(var i=0;i<this.normal.editlist.length;i++){
                if(this.normal.editlist[i] == index){
                    return;
                }
            }
            this.normal.editlist.push(index);
        },
        AddSpec:function(){
            var input = $(event.target).siblings("input");
            var name = input.val();
            if(name){
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        specid:'',
                        name:name
                    },
                    //dataType:"json",
                    success:function(e){
                        var e={error:0,id:23}
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            var n = {};
                            n.id = e.id;
                            n.name = name;
                            main_right.normal.speclist.push(n);
                            input.val('');
                        }
                    }
                })
            }else{
                alert("请输入规格")
            }

        },
        //提交规格编辑
        SubmitSpec:function(){
            var list=[];
            var inputs = $(".goods-spec .content input");
            for(var i =0;i<this.normal.editlist.length;i++){
                var m = {};
                if(inputs.eq(this.normal.editlist[i]).val() != this.normal.speclist[this.normal.editlist[i]].name){
                    m.id=this.normal.speclist[this.normal.editlist[i]].id;
                    m.name =inputs.eq(this.normal.editlist[i]).val();
                    list.push(m);
                }
            }
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    specid:list.join(","),
                    name:""
                },
                //dataType:"json",
                success:function(e){
                    if(e.error>0){

                    }else{
                        for(var i =0;i<list.length;i++){
                            for(var j=0;j<main_right.normal.speclist.length;j++){
                                if(list[i].id ==main_right.normal.speclist[j].id){
                                    Vue.set(main_right.normal.speclist[j],'name',list[i].name)
                                    break;
                                }
                            }
                        }
                        main_right.normal.edit = 0;
                    }
                }
            })
        }
    },
    mounted(){
        $.ajax({                    //获取规格列表
            url:"",
            type:"POST",
            data:{
                userid:localStorage.userid,
                token:localStorage.token
            },
            //dataType:"json",
            success:function(e){
                var e={
                    error:0,
                    list:[
                        {
                            id:0,
                            name:"鸡肉味 200g"
                        },
                        {
                            id:1,
                            name:"1500g"
                        },
                        {
                            id:2,
                            name:"鸡肉味 1500g"
                        },
                        {
                            id:3,
                            name:"鸡肉+金枪鱼 250g"
                        },
                        {
                            id:4,
                            name:"鸡肉金枪鱼味 250g"
                        },
                        {
                            id:5,
                            name:"鲣鱼+蔬菜 500g"
                        },
                        {
                            id:6,
                            name:"鸡肉味 200g"
                        }
                    ]
                }
                if(e.error>0){
                    alert(e.message)
                }else{
                    Vue.set(main_right.normal,'speclist',e.list)

                }
            }
        })
        $.ajax({
            url:'',
            type:"POST",
            data:{
                userid:localStorage.userid,
                token:localStorage.token
            },
            //dataType:"json",
            success:function(e){
                var e = {
                    error:0,
                    list:[
                        {
                            name:"超能小黑",
                            id:1
                        },
                        {
                            name:"超能中黑",
                            id:2
                        },
                        {
                            name:"超能大黑",
                            id:3
                        }
                    ]
                }
                if(e.error>0){
                    alert(e.message)
                }else{
                    main_right.plan.shoplist = e.list;
                    main_right.addpack.shoplist = e.list;
                    main_right.normal.shoplist = e.list;
                    main_right.plan.shopid = e.list[0].id;
                    main_right.addpack.shopid = e.list[0].id;
                    main_right.normal.shopid = e.list[0].id;
                    main_right.plan.shop = e.list[0].name;
                    main_right.addpack.shop = e.list[0].name;
                    main_right.normal.shop = e.list[0].name;
                    GetClassify(main_right.plan.shopid,'all')
                }
            }
        })
        $.ajax({
            url:"",
            type:'POST',
            data:{
                userid:localStorage.userid,
                token:localStorage.token
            },
            //dataType:"json",
            success:function(e){
                var e = {
                    error:0,
                    list:[
                        {name:"宠物食品/鲜粮",id:1},
                        {name:"宠物食品/食物",id:2}
                    ]
                }
                if(e.error>0){
                    alert(e.message)
                }else{
                    main_right.plan.categorylist = e.list;
                    main_right.addpack.categorylist = e.list;
                    main_right.normal.categorylist = e.list;
                    main_right.plan.categoryid = e.list[0].id;
                    main_right.addpack.categoryid = e.list[0].id;
                    main_right.normal.categoryid = e.list[0].id;
                    main_right.plan.category = e.list[0].name;
                    main_right.addpack.category = e.list[0].name;
                    main_right.normal.category = e.list[0].name;
                }
            }

        })
    }
});


function GetClassify(id,type){
    $.ajax({
        url:"",
        type:'POST',
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            shopid:id
        },
        //dataType:"json",
        success:function(e){
            var e = {
                error:0,
                list:[
                    {name:"宠物食品/鲜粮",id:1},
                    {name:"宠物食品/食物",id:2}
                ]
            }
            if(e.error>0){
                alert(e.message)
            }else{
                if(type=='plan' ||type=='all'){
                    main_right.plan.shop_classifylist = e.list;
                    main_right.plan.shop_classifyid = e.list[0].id;
                    main_right.plan.shop_classify = e.list[0].name;
                }
                if(type =='addpack' ||type=='all'){
                    main_right.addpack.shop_classifylist = e.list;
                    main_right.addpack.shop_classifyid = e.list[0].id;
                    main_right.addpack.shop_classify = e.list[0].name;
                }
                if(type=='shop_classify' || type=='all'){
                    main_right.normal.shop_classifylist = e.list;
                    main_right.normal.shop_classifyid = e.list[0].id;
                    main_right.normal.shop_classify = e.list[0].name;
                }
            }
        }

    })
}

    //订阅计划相关
$(function(){
    $("input[type=file]").unbind("change").change(function(){
            if(this.files.length>0){
                $(this).siblings("div").addClass("active");
                var reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                var that = $(this);
                reader.onload = function(){
                    that.siblings("img").attr("src",reader.result).css("background","#fff");
                }
            }
        }
    );
    $(".imgs .cover .close").unbind("click").on("click",function(){
        $(this).parent(".cover").removeClass("active").siblings("input").val('').siblings("img").attr("src","").css("background","transparent");
    });

    //$("#number").unbind("input").on("input",function(){
    //    var val = $(this).val();
    //    if(val>10){
    //        $(this).val(10);
    //    }else if(val<0){
    //        $(this).val(0);
    //    }else{
    //        if(val.length>3){
    //            $(this).val(val.substring(0,val.lastIndexOf('.')+2))
    //        }
    //    }
    //});
});
var cover = new Vue({
    el:"#cover",
    data:{
        id:"",
        index:""
    },
    methods:{
        Cancel:function(){
            $("#cover").removeClass("active");
        },
        Confirm:function(){
            $.ajax({
                url:"",
                type:"POST",
                data: {
                    userid: localStorage.userid,
                    token: localStorage.token,
                    id:this.id
                },
                //dataType:"json",
                success:function(){
                    cover.Cancel();
                    main_right.normal.speclist.splice(cover.index,1);
                }
            })
        }
    }
})







//提交
$("#submit").on("click",function(){
    //提交订阅计划
    if(main_right.type=='plan'){
        var form = new FormData();
        var shop = main_right.plan.shop;
        var category = main_right.plan.category;
        if(main_right.plan.title){
            var title = main_right.plan.title;
        }else{
            alert("请输入商品标题！");
            return;
        }
        if(main_right.plan.selling_point){
            var selling_point = main_right.plan.selling_point;
        }else{
            alert("请输入商品卖点！");
            return;
        }
        var shop_classify = main_right.plan.shop_classify;
        var express = main_right.plan.express;
        if($("#file1").get(0).files[0]){
            var goodsimg = $("#file1").get(0).files[0];
        }else{
            if(algoodsid && algoodstype=='plan'){
                goodsimg = "";
            }else{
                alert("请上传产品头图！");
                return;
            }
        }
        if($("#file2").get(0).files[0]){
            var backimg = $("#file2").get(0).files[0];
        }else{
            if(algoodsid && algoodstype=='plan'){
                backimg = "";
            }else{
                alert("请上传背景图片！");
                return;
            }
        }
        if(main_right.plan.plangoods.selectgoods.length>0){
            var plangoodsid = main_right.plan.plangoods.selectgoods[0].id;
        }else{
            alert("请选择主商品！");
            return;
        }

        var plangoodsnumber = main_right.plan.plangoods.number;
        var plangoodsprice = $("#plan-total>input").val();
        var list =[];
        for(var i =0;i<main_right.plan.addgoods.selectgoods.length;i++){
            list.push(main_right.plan.addgoods.selectgoods[i].id)
        }
        var addpackgoods = list.join(",");
        var detail = ue.getContent();
        var release = main_right.plan.release;
        var goodsid = -1;
        if(algoodsid && algoodstype=='plan'){
            goodsid = algoodsid;
        }
        form.append("goodsid",goodsid);
        form.append("shop",shop);
        form.append("category",category);
        form.append("title",title);
        form.append("selling_point",selling_point);
        form.append("shop_classify",shop_classify);
        form.append("express",express);
        form.append("goodsimg",goodsimg);
        form.append("backimg",backimg);
        form.append("plangoodsid",plangoodsid);
        form.append("plangoodsnumber",plangoodsnumber);
        form.append("plangoodsprice",plangoodsprice);
        form.append("addpackgoods",addpackgoods);
        form.append("detail",detail);
        form.append("release",release);
        $.ajax({
            url:"",
            type:"POST",
            data:form,
            //dataType:"json",
            processData:false,
            contentType:false,
            success:function(e){
                if(e.error>0){
                    alert(e.message)
                }else{

                }
            },
            error:function(){

            }
        })
    }else if(main_right.type=='addpack'){
        var form = new FormData();
        var goodsid = -1;
        if(algoodsid &&algoodstype=='addpack'){
            goodsid = algoodsid;
        }
        var shop = main_right.addpack.shop;
        var category = main_right.addpack.category;
        if(main_right.addpack.title){
            var title = main_right.addpack.title;
        }else{
            alert("请输入增值包标题！")
            return;
        }
        if(main_right.addpack.selling_point){
            var selling_point = main_right.addpack.selling_point;
        }else{
            alert("请输入增值包卖点！")
            return;
        }
        var shop_classify = main_right.addpack.shop_classify;
        var express = main_right.addpack.express;
        if($("#file3").get(0).files[0]){
            var goodsimg = $("#file3").get(0).files[0];
        }else{
            if(algoodsid && algoodstype=='addpack'){
                goodsimg = "";
            }else{
                alert("请上传产品头图！");
                return;
            }
        }
        if($("#file4").get(0).files[0]){
            var backimg = $("#file4").get(0).files[0];
        }else{
            if(algoodsid && algoodstype=='addpack'){
                backimg = "";
            }else{
                alert("请上传背景图片！");
                return;
            }
        }
        var list =[];
        if(main_right.addpack.addgoods.selectgoods.length>0){
            for(var i =0;i<main_right.addpack.addgoods.selectgoods.length;i++){
                list.push(main_right.addpack.addgoods.selectgoods[i].id)
            }
        }else{
            alert("请选择商品!")
            return;
        }

        var totalprice = main_right.addpack_plangoodsprice;
        var discount = main_right.addpack.plangoods.discount;
        var price = (totalprice*price).toFixed(2);
        var release = main_right.addpack.release;
        var goodslist = list.join(",");
        form.append("goodsid",goodsid);
        form.append("shop",shop);
        form.append("category",category);
        form.append("title",title);
        form.append("selling_point",selling_point);
        form.append("shop_classify",shop_classify);
        form.append("express",express);
        form.append("goodsimg",goodsimg);
        form.append("backimg",backimg);
        form.append("totalprice",totalprice);
        form.append("discount",discount);
        form.append("price",price);
        form.append("goodslist",goodslist);
        form.append("release",release);

        $.ajax({
            url:"",
            type:"POST",
            data:form,
            dataType:"json",
            processData:false,
            contentType:false,
            success:function(e){
                if(e.error>0){
                    alert(e.message)
                }else{

                }
            },
            error:function(){

            }
        })
    }else if(main_right.type=='normal'){
        var form = new FormData();
        var shop = main_right.normal.shop;
        var category = main_right.normal.category;
        var shop_classify = main_right.normal.shop_classify;
        var express = main_right.normal.express;
        var release = main_right.normal.release;
        var imglist = $("#main-right .normal .imgs input");
        var length=0;
        for(let i =0;i<imglist.length;i++){
            if(imglist.eq(i).get(0).files[0]){
                if(imglist.eq(i).attr("data-id")){
                    form.append("img",imglist[i].get(0).files[0]);
                    form.append("imgids",imglist.eq(i).attr("data-id"))
                }else{
                    form.append("imgadd",imglist[i].get(0).files[0]);
                }
                length++;
            }else{
                if(imglist.eq(i).attr("data-id")){
                    form.append("img","");
                    form.append("imgids",imglist.eq(i).attr("data-id"))
                }
            }
        }

        if(length==0){
            alert("请上传至少一张图片！");
            return;
        }
        if(main_right.normal.title){
            var title = main_right.normal.title;
        }else{
            alert("请输入商品标题！");
            return;
        }
        if(main_right.normal.selling_point){
            var selling_point = main_right.normal.selling_point;
        }else{
            alert("请输入商品卖点！");
            return;
        }
        var detail = ue2.getContent();
        var speclist=[];
        for(let i =0;i<main_right.normal.selectlist.length;i++){
            let data={};
            data.name = main_right.normal.selectlist[i].name;
            data.id = main_right.normal.selectlist[i].id;
            data.price = main_right.normal.selectlist[i].price;
            data.number = main_right.normal.selectlist[i].number;
            speclist.push(data)
        }
        if(speclist.length==0){
            alert("请选择商品规格！");
            return;
        }
        var goodsid = -1;
        if(algoodsid && algoodstype=='normal'){
            goodsid = algoodsid;
        }
        form.append("goodsid",goodsid);
        form.append("shop",shop);
        form.append("category",category);
        form.append("title",title);
        form.append("selling_point",selling_point);
        form.append("shop_classify",shop_classify);
        form.append("express",express);
        form.append("detail",detail);
        form.append("imglength",length);
        form.append("speclist",JSON.stringify(speclist));
        form.append("release",release);
        $.ajax({
            url:"",
            type:"POST",
            data:form,
            dataType:"json",
            processData:false,
            contentType:false,
            success:function(e){
                if(e.error>0){
                    alert(e.message)
                }else{

                }
            },
            error:function(){

            }
        })
    }

});