/**
 * Created by 5 on 2017/10/20.
 */

//模块选择三级菜单
var demolist = [
    {
        name:'app',
        list1:[
            {
                name:"订阅界面",
                list2:[
                    {
                        name:"服务卡",
                        list3:[]
                    },
                    {
                        name:"添加服务按钮",
                        list3:[]
                    },
                    {
                        name:"品牌名",
                        list3:[
                            {name:"品牌展示区"}
                        ]
                    }
                ]
            },
            {
                name:"购买界面",
                list2:[
                    {
                        name:"顶部右上角更多按钮",
                        list3:[]
                    },
                    {
                        name:"选择犬型&体重模块",
                        list3:[]
                    },
                    {
                        name:"选择年龄模块",
                        list3:[]
                    },
                    {
                        name:"产品特点区域",
                        list3:[]
                    },
                    {
                        name:"产品详情区域",
                        list3:[]
                    },
                    {
                        name:"购买下一步",
                        list3:[
                            {name:"产品信息区域"},
                            {name:"搭配增值包模块"},
                            {name:"订购周期模块"},
                            {name:"品牌优惠券模块"},
                            {name:"支付方式模块"},
                            {name:"配送方式模块"},
                            {name:"留言备注模块"},
                            {name:"配送地址模块"},
                            {name:"价格显示区域模块"},
                            {name:"支付按钮模块"}
                        ]
                    }
                ]
            },
            {
                name:"计划中界面",
                list2:[
                    {
                        name:"进行中:用户服务卡查看详细计划",
                        list3:[
                            {name:"已订阅商品区域"},
                            {name:"订阅周期区域"},
                            {name:"订购明细区域"},
                            {name:"配送地址区域"},
                            {name:"留言备注区域"},
                            {name:"小黑管家按钮"}
                        ]
                    },
                    {
                        name:"进行中:用户服务卡显示信息区域",
                        list3:[]
                    },
                    {
                        name:"进行中:用户服务卡“调整”按钮",
                        list3:[
                            {name:"调整日期模块"},
                            {name:"地址栏模块"},
                            {name:"间隔周期模块"},
                            {name:"暂停发货按钮"}
                        ]
                    },
                    {
                        name:"进行中:用户服务卡“续订”按钮",
                        list3:[
                            {name:"微信支付"},
                            {name:"支付宝"}
                        ]
                    },
                    {
                        name:"进行中:底部单次计划列表显示区域",
                        list3:[]
                    },
                    {
                        name:"进行中:底部单次计划列表详细按钮",
                        list3:[
                            {name:"成员区域"},
                            {name:"地址区域"},
                            {name:"地址区域"},
                            {name:"已订阅商品区域"},
                            {name:"发货时间模块"},
                            {name:"服务快递区域"},
                            {name:"小黑管家按钮"}
                        ]
                    },
                    {
                        name:"已暂停:用户服务卡显示信息区域",
                        list3:[]
                    },
                    {
                        name:"已暂停:用户服务卡“恢复”按钮",
                        list3:[]
                    }
                ]
            },
            {
                name:"品牌说界面",
                list2:[]
            },
            {
                name:'"我"界面',
                list2:[
                    {
                        name:"用户信息栏区域",
                        list3:[
                            {name:"头像模块"},
                            {name:"昵称模块"},
                            {name:"简介模块"},
                            {name:"性别模块"},
                            {name:"安全模块"}
                        ]
                    },
                    {
                        name:"家庭成员",
                        list3:[
                            {name:"添加成员按钮"},
                            {name:"成员显示模块"}
                        ]
                    },
                    {
                        name:"优惠卡券",
                        list3:[
                            {name:"可使用"},
                            {name:"已使用"},
                            {name:"已失效"}
                        ]
                    },
                    {
                        name:"关联账号",
                        list3:[
                            {name:"关联QQ"},
                            {name:"关联微信"}
                        ]
                    },
                    {
                        name:"我的地址",
                        list3:[
                            {name:"地址显示"},
                            {name:"按钮区域"},
                            {name:"添加地址模块"}
                        ]
                    },
                    {
                        name:"通用设置",
                        list3:[
                            {name:"清除缓存"}
                        ]
                    },
                    {
                        name:"我的消息",
                        list3:[
                            {name:"活动通知"},
                            {name:"小黑管家"}
                        ]
                    },
                    {
                        name:"联系客服",
                        list3:[]
                    }
                ]
            }
        ]
    },
    {
        name:"微信",
        list1:[
            {
                name:"买粮应用",
                list2:[
                    {
                        name:"选择犬型&体重模块",
                        list3:[]
                    },
                    {
                        name:"选择年龄模块",
                        list3:[]
                    },
                    {
                        name:"鲜粮特点显示区域",
                        list3:[]
                    },
                    {
                        name:"底部详情显示区域",
                        list3:[]
                    },
                    {
                        name:"购买下一步",
                        list3:[
                            {name:"地址栏模块"},
                            {name:"已选择计划区域"},
                            {name:"搭配增值包模块"},
                            {name:"订购信息显示区域"}
                        ]
                    }
                ]
            },
            {
                name:"我的订阅应用",
                list2:[
                    {
                        name:"顶部计划列表栏",
                        list3:[
                            {name:"显示问题"},
                            {name:"切换问题"}
                        ]
                    },
                    {
                        name:"用户订阅服务卡",
                        list3:[
                            {name:"显示问题"},
                            {name:"切换问题"}
                        ]
                    },
                    {
                        name:"发货信息显示区域",
                        list3:[
                            {name:"查看物流"}
                        ]
                    },
                    {
                        name:"没粮显示区域",
                        list3:[]
                    }

                ]
            },
            {
                name:"撒狗粮应用",
                list2:[
                    {
                        name:"撒狗粮页面",
                        list3:[
                            {name:"填写内容模块"},
                            {name:"添加图片模块"},
                            {name:"发布按钮"}
                        ]
                    },
                    {
                        name:"战绩页面",
                        list3:[
                            {name:"兑换规则模块"},
                            {name:"战绩显示区域"},
                            {name:"兑换按钮"}
                        ]
                    },
                    {
                        name:"内容中心页面",
                        list3:[
                            {name:"内容显示区域"},
                            {name:"发布按钮"}
                        ]
                    }
                ]
            },
            {
                name:"鲜粮初体验",
                list2:[
                    {
                        name:"首页显示区域",
                        list3:[]
                    },
                    {
                        name:"立即购买按钮",
                        list3:[]
                    },
                    {
                        name:"发布按钮",
                        list3:[]
                    },
                    {
                        name:"购买下一步",
                        list3:[
                            {name:"上传图片模块"},
                            {name:"选择狗狗体重模块"},
                            {name:"地址栏模块"}
                        ]
                    }
                ]
            }
        ]
    }
];
var main_right = new Vue({
    el:"#main-right",
    data:{
        from:0,
        times:0,
        level:0,
        list1_index:0,
        list2_index:0,
        list3_index:0,
        list:demolist
    },
    computed:{
        list1:function(){
            return this.list[this.from].list1
        },
        list2:function(){
            if(this.list[this.from].list1[this.list1_index].list2.length>0){
                return this.list[this.from].list1[this.list1_index].list2
            }else{
                return [];
            }
        },
        list3:function(){
            if(this.list[this.from].list1[this.list1_index].list2.length>0){
                if(this.list[this.from].list1[this.list1_index].list2[this.list2_index].list3.length>0){
                    return this.list[this.from].list1[this.list1_index].list2[this.list2_index].list3
                }else{
                    return [];
                }
            }
        },
        list1_name:function(){
            return this.list[this.from].list1[this.list1_index].name;
        },
        list2_name:function(){
            if(this.list[this.from].list1[this.list1_index].list2.length>0){
                return this.list[this.from].list1[this.list1_index].list2[this.list2_index].name;
            }else{
                return "";
            }
        },
        list3_name:function(){
            if(this.list[this.from].list1[this.list1_index].list2.length>0){
                if(this.list[this.from].list1[this.list1_index].list2[this.list2_index].list3.length>0){
                    return this.list[this.from].list1[this.list1_index].list2[this.list2_index].list3[this.list3_index].name
                }else{
                    return "";
                }
            }else{
                return "";
            }
        }
    },
    methods:{
        Select:function(){
            var that;
            if($(event.target).is("p")){
                that = $(event.target).parent("div");
            }else{
                that = $(event.target);
            }
            that.addClass("active").siblings().removeClass('active');
            var index = parseInt(that.parent(".menu").parent("div").index());
            var index2 = that.index();
            if(index == 0){
                this.list1_index = index2;
                this.list2_index =0;
                this.list3_index =0;
                $(".main .modular>div").eq(1).removeClass("active show");
                $(".main .modular>div").eq(2).removeClass("active show");

            }else if(index ==1){
                this.list2_index = index2;
                this.list3_index =0;
                $(".main .modular>div").eq(2).removeClass("active show");
            }else{
                this.list3_index = index2;
            }
        }
    }
});


//平台选择
$(".main .from>div").on("click",function(){
    if(!$(this).hasClass("backstage")){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        main_right.from = index;
        main_right.list1_index = 0;
        main_right.list2_index = 0;
        main_right.list3_index = 0;
        $(".main .modular>div").removeClass("active show");
    }
});


//BUG出现次数选择
$(".main .times>div").on("click",function(){
    var index =$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    main_right.times = index;
});



//BUG级别选择
$(".main .level .level-select").on("click",function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(this).addClass("active");
    }
});
$(".main .level .level-select .menu>div").on("click",function(){
    var index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    main_right.level = index;
    $(".main .level .level-select>p").html($(this).html());
});


//模块选择
$("#main .main .modular>div").on("click",function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        var index = $(this).index()+1;
        if(main_right['list'+index].length>0){
            $(this).addClass("active show");
        }
    }
});

//文件上传
$("input[type=file]").change(function(){
        if(this.files.length>0){
            $(this).siblings("div").addClass("active");
            var reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            var that = $(this);
            reader.onload = function(){
                that.siblings("img").attr("src",reader.result)
            }
        }
    }
);

$(".describe .addimg>div").on("click",function(){
    $(this).siblings("input").click();
});
$(".describe .addimg>div>img").on("click",function(){
    event.stopPropagation();
    $(this).parent("div").removeClass("active");
    $(this).parent("div").siblings("input").val('');
    $(this).parent("div").siblings("img").attr("src",'')
});


$(".result .fail>div").on("click",function(){
    $(".result").removeClass("active").children().removeClass("active");
});





$("#submit").on("click",function(){
    var from = main_right.from;
    var module=[];
    for(var i=1;i<4;i++){
        if(main_right['list'+i+'_name']){
            module.push(main_right['list'+i+'_name']);
        }
    }
    var description = $("#description").val();
    var form = new FormData();
    var file1 = $("#file1").get(0).files[0];
    var file2 = $("#file2").get(0).files[0];
    if($("#file1").val() !=""){
        form.append("img1",file1);
    }
    if($("#file2").val() !=""){
        form.append("img2",file2);
    }
    var times = main_right.times;
    var level = main_right.level;
    if(description !=""){
        $.ajax({                                               //=============ajax============提交bug
            url:"",
            // type:"POST",
            data:{
                from:from,             //bug来源
                module:module,         //模块
                description:description, //描述
                img:form,               //图片 表单数据
                times:times,            //bug次数
                level:level,             //bug级别
                userid:"??",               //用户id?
                token:""
            },
            dataType:'json',
            processData:false,
            contentType:false,
            success:function(e){
                if(e.error == 0){
                    $("#main-right .result").addClass("active").children(".success").addClass("active");     //显示成功
                }else{
                    $("#main-right .result").addClass("active").children(".fail").addClass("active");        //显示失败
                }
            },
            error:function(e){
                $("#main-right .result").addClass("active").children(".fail").addClass("active");        //显示失败
            }
        })
    }else{
        alert("请输入Bug描述")
    }


});