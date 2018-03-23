

//备注记录 操作记录
$("#order-record-top>div").on("click",function(){
    if($(this).attr("id")!='order-record-top-slider'){
        event.stopPropagation();
        $(this).addClass("active").siblings().removeClass("active");
        $("#order-record-top-slider").css("left",$(this).position().left-1);
        if($(this).index() == 0){
            order_record_content.show = true;
        }else{
            order_record_content.show = false;
        }
    }
});
var useraddresslist=[];
//获取订单详细计划 备注记录 操作记录 计划列表 非计划商品 非计划商品分布情况 后台商品
function GetOrderDetail(id){
    $.ajax({
        url:"",
        type:"POST",
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            orderid:id
        },
        // dataType:'json',
        success:function(e){
            // if(e.error>0){
            //     alert(e.message)
            // }else{
            //     order_detail.ordernum=e.ordernum;
            //     order_detail.userid = e.userid;
            //     order_detail.username = e.username;
            //     order_detail.phone = e.phone;
            //     order_detail.addressdetail = e.addressdetail;
            //     order_detail.platform = e.platform;
            //     order_detail.time = e.time;
            //     order_detail.activity = e.activity;
            //     order_detail.discount = e.discount;
            //     order_detail.paytype=e.paytype;
            //     order_detail.price = e.price;
            //     order_detail.status = e.status;
            //     order_detail.goods_list = e.goodslist;
            //     order_list_wrap.weeks = e.weeks;
            //     order_list_wrap.stauts=e.status;
            // }
        },
        error:function(e){
            console.log(JSON.stringify(e))
            //alert("网络链接错误!")
        }
    })
}
function GetRemark(id){
    $.ajax({
        url:"",
        type:"POST",
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            id:id
        },
        dataType:'json',
        success:function(e){
            if(e.error>0){
                alert(e.message);
            }else{
                order_record_content.remark_list = e.list;
            }
        }
    })
}
function GetOpe(id){
    $.ajax({
    url:"",
    type:"POST",
    data:{
        userid:localStorage.userid,
        token:localStorage.token,
        id:id
    },
    dataType:'json',
    success:function(e){
        if(e.error>0){
            alert(e.message)
        }else{
            order_record_content.ope_list = e.list;
        }
    }
})
}
function GetGoodsWeek(id){
    $.ajax({
        url:"",
        type:"POST",
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            orderid:id
        },
        //dataType:'json',
        success:function(e){
            var e={
                error:0,
                list:[ {
                    week:1,
                    type:1,
                    status:1,
                    goodsdetail:[
                        {
                            name:"羊奶酪",
                            number:2
                        },
                        {
                            name:"小牛肝",
                            number:1
                        },
                        {
                            name:"鸡胸肉",
                            number:0
                        },
                        {
                            name:"羊指甲",
                            number:0
                        }
                    ]
                },
                    {
                        week:"2,3,4",
                        type:5,
                        status:1,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:0
                            },
                            {
                                name:"小牛肝",
                                number:0
                            },
                            {
                                name:"鸡胸肉",
                                number:0
                            },
                            {
                                name:"羊指甲",
                                number:0
                            }
                        ],
                        reversible:true
                    },
                    {
                        week:"5,6",
                        type:5,
                        status:1,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:0
                            },
                            {
                                name:"小牛肝",
                                number:0
                            },
                            {
                                name:"鸡胸肉",
                                number:0
                            },
                            {
                                name:"羊指甲",
                                number:0
                            }
                        ],
                        reversible:false
                    },
                    {
                        week:7,
                        type:1,
                        status:1,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:3
                            },
                            {
                                name:"小牛肝",
                                number:1
                            },
                            {
                                name:"鸡胸肉",
                                number:0
                            },
                            {
                                name:"羊指甲",
                                number:0
                            }
                        ]
                    },
                    {
                        week:8,
                        type:1,
                        status:5,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:1
                            },
                            {
                                name:"小牛肝",
                                number:1
                            },
                            {
                                name:"鸡胸肉",
                                number:0
                            },
                            {
                                name:"羊指甲",
                                number:0
                            }
                        ]
                    },
                    {
                        week:9,
                        type:1,
                        status:6,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:0
                            },
                            {
                                name:"小牛肝",
                                number:0
                            },
                            {
                                name:"鸡胸肉",
                                number:1
                            },
                            {
                                name:"羊指甲",
                                number:0
                            }
                        ]
                    },
                    {
                        week:10,
                        type:1,
                        status:1,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:0
                            },
                            {
                                name:"小牛肝",
                                number:0
                            },
                            {
                                name:"鸡胸肉",
                                number:0
                            },
                            {
                                name:"羊指甲",
                                number:2
                            }
                        ]
                    },
                    {
                        week:11,
                        type:1,
                        status:4,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:0
                            },
                            {
                                name:"小牛肝",
                                number:0
                            },
                            {
                                name:"鸡胸肉",
                                number:0
                            },
                            {
                                name:"羊指甲",
                                number:2
                            }
                        ]
                    },
                    {
                        week:12,
                        type:1,
                        status:1,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:0
                            },
                            {
                                name:"小牛肝",
                                number:0
                            },
                            {
                                name:"鸡胸肉",
                                number:2
                            },
                            {
                                name:"羊指甲",
                                number:2
                            }
                        ]
                    },
                    {
                        week:13,
                        type:1,
                        status:2,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:0
                            },
                            {
                                name:"小牛肝",
                                number:0
                            },
                            {
                                name:"鸡胸肉",
                                number:1
                            },
                            {
                                name:"羊指甲",
                                number:2
                            }
                        ]
                    },
                    {
                        week:14,
                        type:1,
                        status:1,
                        goodsdetail:[
                            {
                                name:"羊奶酪",
                                number:0
                            },
                            {
                                name:"小牛肝",
                                number:0
                            },
                            {
                                name:"鸡胸肉",
                                number:1
                            },
                            {
                                name:"羊指甲",
                                number:2
                            }
                        ]
                    }
                ]
            }
            if(e.error>0){
                alert(e.message)
            }else{
                edit.weeksdetail = e.list;
                var list1=[];
                for(let i=0;i<e.list[0].goodsdetail.length;i++){
                    var data = {};
                    data.name = e.list[0].goodsdetail[i].name;
                    data.number =0;
                    for(let j=0;j<e.list.length;j++){
                        for(let n =0;n<e.list[j].goodsdetail.length;n++){
                            if(e.list[j].goodsdetail[n].name == data.name){
                                data.number += parseInt(e.list[j].goodsdetail[n].number)
                            }
                        }
                    }
                    list1.push(data)
                }
                edit.goodslist = list1;
            }
        }

    })
}
function GetPlanList(id,callback){
    $.ajax({
        //url:"http://192.168.3.100:5011/order/orderplanlist",
        url:"",
        type:"POST",
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            orderid:id
        },
        //dataType:'json',
        success:function(e){
            //console.log(JSON.stringify(e));
            var e ={
                error:0,
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
                        week:[14,15],
                        type:5,
                        plan_time:'2017/12/17',
                        send_time:'',
                        limit_time:"2017/12/14-2018/11/20",
                        invoice:0,
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
                        id:13,
                        status:3,
                        address:{
                            id:0,
                            username:"李大钊",
                            phone:"13645121217",
                            addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                        },
                        goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                            {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                        week:13,
                        type:2,
                        plan_time:'2017/12/14',
                        send_time:'',
                        limit_time:"2017/12/12-2017/12/16",
                        invoice:0,
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
                        id:12,
                        status:4,
                        address:{
                            id:0,
                            username:"李大钊",
                            phone:"13645121217",
                            addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                        },
                        goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                            {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                        week:12,
                        type:2,
                        plan_time:'2017/12/11',
                        send_time:'1998/08/21',
                        limit_time:"2017/12/09-2017/12/13",
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
                        type:1,
                        plan_time:'2017/12/08',
                        send_time:'',
                        limit_time:"2017/12/06-2017/12/10",
                        invoice:1,
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
                        type:1,
                        plan_time:'2017/12/08',
                        send_time:'',
                        limit_time:"2017/12/06-2017/12/10",
                        invoice:1,
                        expressname:"",
                        expressnum:"",
                        remark:[]
                    },
                    {
                        id:9,
                        status:4,
                        address:{
                            id:0,
                            username:"李大钊",
                            phone:"13645121217",
                            addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                        },
                        goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                            {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                        week:9,
                        type:2,
                        plan_time:'2017/12/05',
                        send_time:'1998/08/21',
                        limit_time:"2017/12/03-2017/12/07",
                        invoice:1,
                        expressname:"",
                        expressnum:"",
                        remark:[{
                            name:"用户本人",
                            time:"2017/08/03 02:23:22",
                            content:"啊杀杀杀大撒大青蛙"
                        }]
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
                        type:3,
                        plan_time:'2017/11/29',
                        send_time:'1998/08/21',
                        limit_time:"2017/11/27-2017/12/01",
                        invoice:0,
                        expressname:"中通快递",
                        expressnum:"533914674395",
                        remark:[{
                            name:"用户本人",
                            time:"2017/08/03 02:23:22",
                            content:"啊杀杀杀大撒大青蛙"
                        }]
                    },
                    {
                        id:6,
                        status:3,
                        address:{
                            id:0,
                            username:"李大钊",
                            phone:"13645121217",
                            addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                        },
                        goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                            {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                        week:6,
                        type:2,
                        plan_time:'2017/11/26',
                        send_time:'1998/08/21',
                        limit_time:"2017/11/24-2017/11/28",
                        invoice:0,
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
                        type:2,
                        plan_time:'2017/11/23',
                        send_time:'1998/08/21',
                        limit_time:"2017/11/21-2017/11/25",
                        invoice:0,
                        expressname:"中通快递",
                        expressnum:"533914674395",
                        remark:[{
                            name:"用户本人",
                            time:"2017/08/03 02:23:22",
                            content:"啊杀杀杀大撒大青蛙"
                        }]
                    },
                    {
                        id:[2,3,4],
                        status:1,
                        address:{
                            id:0,
                            username:"李大钊",
                            phone:"13645121217",
                            addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                        },
                        goodslist:[
                            [{name:"超能小黑中型犬鲜粮250gx14包",number:"1"}, {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"},{name:"自制低盐原味宠物羊奶酪狗零食100g",number:"3"}],
                            [{name:"超能小黑中型犬鲜粮250gx14包",number:"1"}, {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                            [{name:"超能小黑中型犬鲜粮250gx14包",number:"1"}, {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}]
                        ],
                        week:[2,3,4],
                        type:[1,2,3],
                        plan_time:'2017/11/20',
                        send_time:'',
                        limit_time:"2017/11/18-2017/11/22",
                        invoice:0,
                        expressname:"中通快递",
                        expressnum:"533914674395",
                        remark:[]
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
                        type:1,
                        plan_time:'2017/11/17',
                        send_time:'',
                        limit_time:"2017/11/15-2017/11/19",
                        invoice:1,
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
                    },
                ]
            }
            if(e.error>0){
                alert(e.message)
            }else{
                for(let i=0;i<e.list.length;i++){
                    if(Array.isArray(e.list[i].id)){
                        e.list[i].merger =true;
                    }
                }
                order_list_wrap.list = e.list;
                order_list_wrap.GetData();
                if(localStorage.goods_deliver){
                    order_list_wrap.$nextTick(function(){
                        $("#incomplete .edit:first-child").click();
                    })
                    localStorage.goods_deliver = undefined;
                }


            }
            if(callback){
                callback();
            }
        },
        error:function(e){
            console.log(JSON.stringify(e))
        }
    })
}
function GetUserAddressList(callback){
    $.ajax({            //获取用户地址
        url:"",
        type:"post",
        data:{
            userid:localStorage.userid,
            token:localStorage.token,
            customerid:order_detail.userid
        },
        //dataType:"json",
        success:function(e){
            var e = {
                list:[
                    {
                        id:111,
                        username:"李大钊",
                        phone:"13645121217",
                        addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱",
                        province:"山东",
                        city:"济南",
                        area:"历下区",
                        provinceid:"370000",
                        cityid:"370100",
                        areaid:"370102"
                    },
                    {
                        id:222,
                        username:"萨格拉斯",
                        phone:"15634026055",
                        addressdetail:"湖北省武汉市江岸区十大家工业园",
                        province:"湖北",
                        city:"武汉",
                        area:"江岸区",
                        provinceid:"420000",
                        cityid:"420100",
                        areaid:"420102"
                    }
                ]
            };  //模拟数据
            useraddresslist = e.list;
            callback();

        }
    })
}
function GetGoods(){
    $.ajax({
        url:"",
        type:"POST",
        data:{
            userid:localStorage.userid,
            token:localStorage.token
        },
        //dataType:"json",
        success:function(e){
            var e = {
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
            ],
            error:0
        };
            if(e.error>0){
                alert(e.message)
            }else{
                service.addgoods.goodslist = [];
                service.addgoodsgift.goodslist = [];
                for(var i=0;i<e.list.length;i++){
                    var b= $.extend(true,{},e.list[i]);
                    b.select = false;
                    service.addgoods.goodslist.push(b);
                    service.addgoodsgift.goodslist.push(b);
                }
            }
        }
    })
}
$(function(){
    var id = location.href.split("?")[1].split("=")[1];
    localStorage.orderid = id;
    GetOrderDetail(id);
    GetRemark(id);
    GetOpe(id);
    GetPlanList(id);
    GetGoodsWeek(id)
});
//修改添加地址
function AddressEditAdd(_this){
    var data=_this.addressedit.address;
    data.province = _this.addressedit.list1_name;
    data.city = _this.addressedit.list2_name;
    data.area = _this.addressedit.list3_name;
    data.provinceid = _this.addressedit.list1_id;
    data.cityid = _this.addressedit.list2_id;
    data.areaid = _this.addressedit.list3_id;
    if(data.id){
        data.addressid = data.id;
        delete data.id;
    }else{
        data.id=order_detail.userid;
        delete data.addressid;
    }

    if(data.username && data.phone && data.addressdetail && data.province!="请选择" &&data.city!="请选择"){
        if(_this.list3.length !=0 && data.area=="请选择"){
            alert("请填写完整信息！")
        }else{
            if(data.area == "请选择"){
                data.area = "";
            }
            $.ajax({
                url:"",
                type:"POST",
                data:data,
                //dataType:"json",
                success:function(e){

                    var e={
                        error:0,
                        id:9898
                    };
                    if(e.error>0){
                        alert(e.message)
                    }else{
                        if(data.addressid){
                            alert("修改成功！")
                            for(var i = 0;i<useraddresslist.length;i++){
                                if(useraddresslist[i].id == data.addressid){
                                    data.id = data.addressid;
                                    delete data.addressid;
                                    var b= $.extend(true,{},data)
                                    useraddresslist[i] = b;
                                }
                            }
                        }else{
                            alert("添加成功！");
                            data.id = e.id;
                            var b= $.extend(true,{},data)
                            useraddresslist.push(b);
                            SplitEditAddressListBind($(_this.$el).attr("id"))
                        }
                        $(".address-edit").removeClass("active");
                    }

                }

            })
        }
    }else{
        alert("请填写完整信息！")
    }
}
// 备注记录 操作记录
var order_record_content = new Vue({
    el:"#order-record-content",
    data:{
        show:true,
        ope_list:[
            {
                type:"accounting",
                name:"黄琳",
                time:"2017/07/23 12:22:43",
                content:"通过退款申请"
            },
            {
                type:"customerservice",
                name:"王蓉",
                time:"2017/07/23 12:22:43",
                content:"调整整体发货时间"
            },
            {
                type:"executivedirector",
                name:"张鑫",
                time:"2017/07/23 12:22:43",
                content:"修改计划商品"
            },
            {
                type:"administrators",
                name:"田良",
                time:"2017/07/23 12:22:43",
                content:"补发一周"
            },
            {
                type:"user",
                name:"陈南康",
                time:"2017/07/23 12:22:43",
                content:"修改发货地址"
            },
            {
                type:"accounting",
                name:"王梦蝶",
                time:"2017/07/23 12:22:43",
                content:"哈哈哈哈哈哈"
            },
            {
                type:"user",
                name:"陈南康",
                time:"2017/07/23 12:22:43",
                content:"呵呵呵"
            }
        ],
        ope_page:1,
        remark_page:1,
        remark_list:[
            {
                type:"accounting",
                name:"黄琳",
                time:"2017/07/23 12:22:43",
                content:"红红火火恍恍惚惚"
            },
            {
                type:"customerservice",
                name:"王蓉",
                time:"2017/07/23 12:22:43",
                content:"该订单中的第二周奶酪出现了变质问题，已和用户协商好随这周补发第二周奶酪出现了变质问题一袋。"
            },
            {
                type:"executivedirector",
                name:"张鑫",
                time:"2017/07/23 12:22:43",
                content:"该订单中的第二周奶酪出现了变质问题，已和用户协商好随这周补发第二周奶酪出现了变质问题一袋。"
            },
            {
                type:"administrators",
                name:"田良",
                time:"2017/07/23 12:22:43",
                content:"该订单中的第二周奶酪出现了变质问题，已和用户协商好随这周补发第二周奶酪出现了变质问题一袋。"
            },
            {
                type:"user",
                name:"陈南康",
                time:"2017/07/23 12:22:43",
                content:"该订单中的第二周奶酪出现了变质问题，已和用户协商好随这周补发第二周奶酪出现了变质问题一袋。"
            },
            {
                type:"accounting",
                name:"王梦蝶",
                time:"2017/07/23 12:22:43",
                content:"该订单中的第二周奶酪出现了变质问题，已和用户协商好随这周补发第二周奶酪出现了变质问题一袋。"
            },
            {
                type:"user",
                name:"陈南康",
                time:"2017/07/23 12:22:43",
                content:"该订单中的第二周奶酪出现了变质问题，已和用户协商好随这周补发第二周奶酪出现了变质问题一袋。"
            }
        ]
    },
    computed:{
        RemarkPages:function(){
            return Math.ceil(this.remark_list.length/4);
        },
        OpePages:function(){
            return Math.ceil(this.remark_list.length/5);
        }
    },
    methods:{
        NextPage:function(){
            if(this.show){
                if(this.remark_page<this.RemarkPages){
                    this.remark_page++;
                }
            }else{
                if(this.ope_page<this.OpePages){
                    this.ope_page++;
                }
            }
        },
        PrePage:function(){
            if(this.show){
                if(this.remark_page>1){
                    this.remark_page--;
                }
            }else{
                if(this.ope_page>1){
                    this.ope_page--;
                }
            }
        }
    },
    components:{
        "li-operation":{
            props:['to'],
            template:'<li>'+
                        '<div class="circle"></div>'+
                            '<div>'+
                                '<div>'+
                                    '<h3>' +
                                    '<b v-if="to.type ==\'accounting\'">' + '财务：</b>' +
                                    '<b v-else-if="to.type ==\'customerservice\'">' + '客服：</b>' +
                                    '<b v-else-if="to.type ==\'executivedirector\'">' + '主管：</b>' +
                                    '<b v-else-if="to.type ==\'administrators\'">' + '管理员：</b>' +
                                    '<b v-else-if="to.type ==\'user\'">' + '用户：</b>' +
                                    '{{to.name}} <span>{{to.time}}</span></h3>'+
                                    '<p v-if="to.type ==\'customerservice\'">客服操作</p>'+
                                    '<p v-else-if="to.type ==\'executivedirector\'">主管操作</p>'+
                                    '<p v-else-if="to.type ==\'accounting\'">财务操作</p>'+
                                    '<p v-else-if="to.type ==\'administrators\'">管理员操作</p>'+
                                    '<p v-else-if="to.type ==\'user\'">用户操作</p>'+
                                '</div>'+
                            '<div>'+
                                '<p>{{to.content}}</p>'+
                            '</div>'+
                        '</div>'+
                    '</li>'
        },
        "li-remark":{
            props:['to','ot'],
            template:'<li>'+
            '<div class="circle"></div>'+
            '<div>'+
            '<div>'+
            '<h3>' +
            '<b v-if="to.type ==\'accounting\'">' + '财务：</b>' +
            '<b v-else-if="to.type ==\'customerservice\'">' + '客服：</b>' +
            '<b v-else-if="to.type ==\'executivedirector\'">' + '主管：</b>' +
            '<b v-else-if="to.type ==\'administrators\'">' + '管理员：</b>' +
            '<b v-else-if="to.type ==\'admin\'">' + 'admin：</b>' +
            '<b v-else-if="to.type ==\'user\'">' + '用户：</b>' +
            '{{to.name}} <span>{{to.time}}</span></h3>'+
            '<p v-if="to.type ==\'customerservice\'">客服备注</p>'+
            '<p v-else-if="to.type ==\'executivedirector\'">主管备注</p>'+
            '<p v-else-if="to.type ==\'accounting\'">财务备注</p>'+
            '<p v-else-if="to.type ==\'administrators\'">管理员备注</p>'+
            '<p v-else-if="to.type ==\'admin\'">admin备注</p>'+
            '<p v-else-if="to.type ==\'user\'">用户备注</p>'+
            '</div>'+
            '<div>'+
            '<p>{{to.content}}</p>'+
            '</div>'+
            '</div>'+
            '</li>'
        }
    }

});
//订单详情
var order_detail = new Vue({
    el:"#order-detail",
    data:{
        page:1,
        ordernum:"0102165625",
        userid:"23",
        username:"陈南康",
        phone:"15112121314",
        addressdetail:"山东省济南市历下区甸柳街道燕甸柳街道丰巢快递箱",
        platform:"1",
        time:"2017/07/23 11:44:21",
        activity:"",
        discount:"",
        paytype:"wx",
        price:"652.00",
        status:2,
        goods_list:[
            {
                name:"超能小黑中型犬鲜粮",
                spec:"250gx14包",
                price:"199.00",
                number:"1",
                week:"4",
                img:"../../image/goodsimg.png"
            },
            {
                name:"超能小黑小型犬鲜粮",
                spec:"250gx10包",
                price:"139.00",
                number:"1",
                week:"4",
                img:"../../image/goodsimg.png"
            },
            {
                name:"超能小黑超小型犬鲜粮",
                spec:"250gx7包",
                price:"99.00",
                number:"2",
                week:"8",
                img:"../../image/goodsimg.png"
            },
            {
                name:"超能小黑超大型犬鲜粮",
                spec:"250gx40包",
                price:"599.00",
                number:"1",
                week:"4",
                img:"../../image/goodsimg.png"
            },
            {
                name:"超能小黑大型犬鲜粮",
                spec:"250gx24包",
                price:"399.00",
                number:"1",
                week:"4",
                img:"../../image/goodsimg.png"
            }
        ]
    },
    computed:{
        Pages:function(){
            return Math.ceil(this.goods_list.length/3);
        }
    },
    methods:{
        PrePage:function(){
            if(this.page>1){
                this.page--;
            }
        },
        NextPage:function(){
            if(this.page<this.Pages){
                this.page++;
            }
        }
    },
    components:{
        "goods":{
            props:["to"],
            template:'<li>'
                        +'<div>'
                            +'<img :src="to.img" alt=""/>'
                            +'<p>{{to.name}}</p>'
                        +'</div>'
                        +'<div>'
                            +'<p>{{to.spec}}</p>'
                        +'</div>'
                        +'<div>'
                            +'<p>￥{{to.price}}</p>'
                        +'</div>'
                        +'<div>'
                            +'<p>x{{to.number}}</p>'
                        +'</div>'
                        +'<div>'
                            +'<p>{{to.week}}周</p>'
                        +'</div>'
                    +'</li>'
        }
    }

});
//列表渲染

var order_list_wrap = new Vue({
    el:"#order-list-wrap",
    data:{
        list:[],
        status:2,
        weeks:15,                       //总周数
        type_limit:[],                  //来源限制
        status_limit:100,             //状态限制
        lis:[],                     //需要展现的订单
        lis_all:[],                 //现有来源限制下的所有订单
        lis_status_all:[],          //现有来源、状态限制下的所有订单
        lis_done:[],                //已完成的订单
        nowpage:1,                  //现在显示的第几页
        showpages:100,              //一页显示多少条
        nownum:0,                    //现有来源、状态限制下的所有订单个数
        list_select:[],              //当前选中的列表
        select_status:0              //当前选中的列表合集的状态  1 都为待发出 2 都为已发货
    },
    computed:{
        Pages:function(){                               //总共有多少页
            return Math.ceil(this.nownum/this.showpages)
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
        Hangs:function(){                           //挂起数量！
            var num = 0;
            for(let i=0;i<this.lis_all.length;i++){
                if(this.lis_all[i].status == 5){
                    num++;
                }
            }
            return num;
        },
        Recovers:function(){                        //追回数量！
            var num = 0;
            for(let i=0;i<this.lis_all.length;i++){
                if(this.lis_all[i].status == 6){
                    num++;
                }
            }
            return num;
        },
        Approval:function(){                        //审批数量！
            var num = 0;
            for(let i=0;i<this.lis_all.length;i++){
                if(this.lis_all[i].status == 4){
                    num++;
                }
            }
            return num;
        },
        Nosend:function(){                          //未发货数量
            var num = 0;
            for(let i=0;i<this.lis_all.length;i++){
                if(this.lis_all[i].status == 1){
                    num++;
                }
            }
            return num;
        },
        Sended:function(){                          //已发货数量
            var num = 0;
            for(let i=0;i<this.lis_all.length;i++){
                if(this.lis_all[i].status == 2){
                    num++;
                }
            }
            return num;
        },
        Done:function(){                           //已完成数量
            var num = 0;
            for(let i=0;i<this.lis_all.length;i++){
                if(this.lis_all[i].status == 3){
                    num++;
                }
            }
            return num;
        }

    },
    methods:{
        GetData:function(){                          //获取计划列表
            var demodata = this.list;
            this.lis=[];
            this.lis_all=[];
            this.lis_status_all=[];
            this.lis_done=[];
            this.list_select = [];
            $("#paging .select").removeClass("active");
            var m = 0;
            for(let i =0,j=0,k=0;i<demodata.length;i++){
                if(this.type_limit.length>0){
                    for(var n =0;n<this.type_limit.length;n++){
                        if(jQuery.isArray(demodata[i].type)){
                            for(let h=0;h<demodata[i].type.length;h++){
                                if(demodata[i].type[h] == this.type_limit[n]){
                                    Vue.set(this.lis_all, j, demodata[i]);
                                    j++;
                                    if(this.status_limit == 100){
                                        m++;
                                        Vue.set(this.lis_status_all, k, demodata[i]);
                                        k++;

                                    }else if(demodata[i].status == this.status_limit){
                                        m++;
                                        Vue.set(this.lis_status_all, k, demodata[i]);
                                        k++;
                                    }
                                    break;
                                }
                            }
                            break;
                        }else{
                            if(demodata[i].type == this.type_limit[n]){
                                Vue.set(this.lis_all, j, demodata[i]);
                                j++;
                                if(this.status_limit == 100){
                                    m++;
                                    Vue.set(this.lis_status_all, k, demodata[i]);
                                    k++;
                                }else if(demodata[i].status == this.status_limit){
                                    m++;
                                    Vue.set(this.lis_status_all, k, demodata[i]);
                                    k++;
                                }
                            }
                        }
                    }
                }else{
                    Vue.set(this.lis_all, j, demodata[i]);
                    j++;
                    if(this.status_limit == 100){
                        m++;
                        Vue.set(this.lis_status_all, k, demodata[i]);
                        k++;
                    }else if(demodata[i].status == this.status_limit){
                        m++;
                        Vue.set(this.lis_status_all, k, demodata[i]);
                        k++;
                    }
                }

            }
            this.nownum = m;
            for(let i = (this.nowpage-1)*this.showpages,j=0,k=0;i<this.nowpage*this.showpages && i<this.lis_status_all.length;i++){
                if(this.type_limit.length>0){
                    for(var n =0;n<this.type_limit.length;n++){
                        if(jQuery.isArray(this.lis_status_all[i].type)){
                            for(let h =0;h<this.lis_status_all[i].type.length;h++){
                                if(this.lis_status_all[i].type[h] == this.type_limit[n]){
                                    if(this.status_limit == 100){
                                        if(this.lis_status_all[i].status == 3){
                                            Vue.set(this.lis_done,k,this.lis_status_all[i]);
                                            k++;
                                        }else{
                                            Vue.set(this.lis, j, this.lis_status_all[i]);
                                            j++;
                                        }

                                    }else if(this.lis_status_all[i].status == this.status_limit){
                                        Vue.set(this.lis, j, this.lis_status_all[i]);
                                        j++;
                                    }
                                    break;
                                }
                            }
                            break;
                        }else{
                            if(this.lis_status_all[i].type == this.type_limit[n]){
                                if(this.status_limit == 100){
                                    if(this.lis_status_all[i].status == 3){
                                        Vue.set(this.lis_done,k,this.lis_status_all[i]);
                                        k++;
                                    }else{
                                        Vue.set(this.lis, j, this.lis_status_all[i]);
                                        j++;
                                    }

                                }else if(this.lis_status_all[i].status == this.status_limit){
                                    Vue.set(this.lis, j, this.lis_status_all[i]);
                                    j++;
                                }
                            }
                        }
                    }
                }else{
                    if(this.status_limit == 100){
                        if(this.lis_status_all[i].status == 3){
                            Vue.set(this.lis_done,k,this.lis_status_all[i]);
                            k++;
                        }else{
                            Vue.set(this.lis, j, this.lis_status_all[i]);
                            j++;
                        }

                    }else if(this.lis_status_all[i].status == this.status_limit){
                        Vue.set(this.lis, j, this.lis_status_all[i]);
                        j++;
                    }
                }

            }

            if(this.nowpage>this.Pages){
                this.nowpage=1;
            }
        },
        PageMenu:function(){                            //分页菜单弹出
            $("#paging .menu").addClass("active");
            $("#paging .menu [data-page="+this.showpages+"]").addClass("active");
        },
        ChangeShowPages:function(){                     //改变每页显示计划的数量
            event.stopPropagation();
            if(!$(event.target).hasClass("nowpage")){
                $("#paging .menu").removeClass("active");
                $(event.target).addClass("active").siblings().removeClass("active");
                this.showpages = parseInt($(event.target).attr("data-page"));
                this.nowpage = 1;
                this.GetData();
            }else{
                $("#paging .menu").removeClass("active");
            }
        },
        NowPage:function(){                         //点击翻页
            if(!$(event.target).hasClass("active")){
                this.nowpage = parseInt($(event.target).html());
                this.GetData();
            }
        },
        ChangeFrom:function(e){                     //改变来源限制
            var that = $(event.target).parent("div");
            if(that.hasClass("btn-all")){
                this.type_limit = [];
                that.addClass("active").siblings().removeClass("active");
            }else{
                if(!that.hasClass("active")){
                    if(that.siblings(".btn-all").hasClass("active")){
                        this.type_limit = [that.attr("data-type")];
                        that.siblings(".btn-all").removeClass("active");
                    }else{
                        this.type_limit.push(that.attr("data-type"))
                    }
                    that.addClass("active");
                }else{
                    that.removeClass("active");
                    for(var i =0;i<this.type_limit.length;i++){
                        if(this.type_limit[i] == that.attr("data-type")){
                            this.type_limit.splice(i,1);
                        }
                    }
                }
            }
            this.GetData();
        },
        ChangeStatus:function(){                        //改变状态
            var that = $(event.target).parents(".status-btn");
            if(!that.hasClass("active")){
                that.addClass("active").siblings().removeClass("active");
                this.status_limit = that.attr("data-status");
                this.GetData();
            }

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
        AllSelect:function(e){                          //全选按钮
            var _this;
            if($(e.target).hasClass("all")){
                _this = $(e.target).children(".select")
            }else if($(e.target).is("p")){
                _this = $(e.target).siblings(".select")
            }else{
                _this = $(e.target)
            }
            //
            //var list = document.getElementById("incomplete").getElementsByTagName("li");
            //for(var i =0; i<list.length;i++){
            //    if(list[i].getElementsByClassName("select-wrap")[0]){
            //        list[i].getElementsByClassName("select-wrap")[0].click();
            //    }
            //}
            var list = this.$children;

            if(!_this.hasClass("active")){      //数组清空
                order_list_wrap.list_select =[];
            }

            for(var i =0;i<list.length;i++){     //全选
                if(_this.hasClass("active")){
                    list[i].$children[0].SelectList();
                }else{
                    list[i].$children[0].SelectList("select")
                }
            }
            if(_this.hasClass("active")){
                _this.removeClass("active");
            }else{
                _this.addClass("active");
            }
        },
        MerGerList:function(e){                         //合并计划弹出
            var _this = $(e.target);
            if(_this.attr("data-target") == "#merge"){
                if(useraddresslist.length==0){  //没有获取过用户地址
                    GetUserAddressList(MerGerData);
                }else{
                    MerGerData();
                }

                function MerGerData(){
                    merge.useraddresslist=useraddresslist;
                    var list=[];
                    for(let i=0;i<order_list_wrap.list_select.length;i++){
                        var b= $.extend(true,{},order_list_wrap.list_select[i])
                        list.push(b)
                    }
                    merge.list_select = list;
                    SplitEditAddressListBind("merge")
                }
            }
        },
        EditList:function(e){                           //编辑计划弹出
            var _this = $(e.target);
            if(_this.attr("data-target") == "#edit"){
                if(useraddresslist.length==0){  //没有获取过用户地址
                    GetUserAddressList(EditedData);
                }else{
                    EditedData();
                }
                function EditedData(){
                    var list = [];
                    for(var i=0;i<order_list_wrap.list_select.length;i++){
                        var b= $.extend(true,{},order_list_wrap.list_select[i]);
                        list.push(b);
                        edit.list_select = [].concat(list);
                    }
                    edit.useraddresslist = useraddresslist;
                    SplitEditAddressListBind('edit');
                }
            }
        },
        RecoverPlan:function(){
            if(this.list_select.length>0){
                $("#cover").addClass("active");
                cover.status = this.list_select[0].status;
                var id=[];
                for(let i =0 ; i<this.list_select.length;i++){
                    id.push(this.list_select[i].id);
                }
                cover.id=id;
            }
        },
        ReissueGift:function(){
            service.type =3
            GetGoods();
            var date = new Date();
            var time = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            service.$nextTick(function(){
                $("#service .reissuegift-wrap .send-time-btn>p").html(time);
            });
        },
        PauseOrder:function(){
            $("#cover").addClass("active");
            cover.status="pause"
        },
        ContinueOrder:function(){
            $("#cover").addClass("active");
            cover.status ="continue"
        }


    },
    components:{
        "li-plan":{
            props:["to","weeks"],
            template:'<li :data-status=to.status :class="{merger:to.merger}" :data-id="to.id">' +
                '<plan-select :status=to.status></plan-select>'+
                '<plan-user :address=to.address></plan-user>'+
                '<plan-goods :list=to.goodslist :merger =to.merger></plan-goods>'+
                '<plan-cycle :weeks=weeks :list=to.goodslist :cycle=to.week :type="to.type" :merger=to.merger></plan-cycle>'+
                '<plan-time :send_time=to.send_time :plan_time="to.plan_time"></plan-time>'+
                '<plan-send-info :status=to.status :expressnum=to.expressnum :expressname=to.expressname></plan-send-info>'+
                '<plan-invoice :invoice=to.invoice></plan-invoice>'+
                '<plan-remark :remark=to.remark :status=to.status :id=to.id></plan-remark>'+
                '<plan-ope :status=to.status :merger=to.merger :address=to.address :week="to.week" :id="to.id"></plan-ope>'+
            '</li>',
            components:{
                "plan-status":{
                    props:["status"],
                    template:'<div class="status gray" v-if="status == 4 ||status == 9"></div>'+
                            '<div class="status no" v-else-if="status == 5 || status == 6"></div>'+
                            '<div class="status red" v-else-if="status == 7 || status == 8"></div>'+
                            '<div class="status" v-else></div>'
                },
                "plan-select":{
                    props:["status"],
                    template:'<div class="select-wrap" @click="SelectList">'+
                            '<div class="select" v-if="status == 1 || status == 2"></div>'+
                            '</div>',
                    methods:{
                        SelectList:function(e){                                 //选择计划
                            if(this.status == 1 ||this.status == 2){
                                var li = $(this.$el).parent("li");
                                var index = li.index();
                                if(e == "select"){
                                    li.addClass("active");
                                    order_list_wrap.list_select.push(order_list_wrap.lis[index]);
                                }else if(e == "cancel"){
                                    li.removeClass("active");
                                    for(let i =0;i<order_list_wrap.list_select.length;i++){
                                        if(order_list_wrap.list_select[i].id == order_list_wrap.lis[index].id){
                                            order_list_wrap.list_select.splice(i, 1);
                                        }
                                    }
                                }else{
                                    if(li.hasClass("active")){
                                        li.removeClass("active");
                                        for(let i =0;i<order_list_wrap.list_select.length;i++){
                                            if(order_list_wrap.list_select[i].id == order_list_wrap.lis[index].id){
                                                order_list_wrap.list_select.splice(i, 1);
                                            }
                                        }
                                    }else{
                                        li.addClass("active");
                                        order_list_wrap.list_select.push(order_list_wrap.lis[index]);
                                    }
                                }
                            }
                            this.ListCheck(order_list_wrap.list_select);
                        },
                        ListCheck:function(){                                     //列表状态检查
                            var list = order_list_wrap.list_select;
                            var key = true;
                            if(list.length>1){
                                for(var i =0;i<list.length;i++){
                                    if(!list[i].merger){
                                        if(i<list.length-1){
                                            if(list[i].status != list[i+1].status){
                                                key = false;
                                                break;
                                            }
                                        }
                                    }else{
                                        key = false;
                                        break;
                                    }
                                }
                                if(!key){
                                    order_list_wrap.select_status = 999;
                                }else{
                                    if(list[0].status == 1){
                                        order_list_wrap.select_status = 1;
                                    }else{
                                        order_list_wrap.select_status = 2;
                                    }
                                }
                            }else{
                                if(list.length>0){
                                    if(list[0].status == 1){
                                        order_list_wrap.select_status = 1;
                                    }else{
                                        order_list_wrap.select_status = 2;
                                    }
                                }else{
                                    order_list_wrap.select_status = 0;
                                }
                            }
                        }
                    }
                },
                "plan-user":{
                    props:['address'],
                    template:'<div class="user">'+
                              '<div>'+
                              '<p class="name">{{address.username}}</p>'+
                              '<p class="phone">{{address.phone}}</p>'+
                              '<p class="from">默认</p>'+
                              '</div>'+
                              '<div>'+
                              '<p class="address">{{address.addressdetail}}</p>'+
                              '</div>'+
                              '</div>'
                },
                "plan-goods":{
                    props:['list','merger'],
                    template:'<div class="goods" v-if="!merger">'+
                                '<div v-for="(data,index) in list">'+
                                '<p class="goodsname">{{data.name}}</p>'+
                                '<p class="goodsnum">X{{data.number}}</p>'+
                                '</div>'+
                                '</div>'+
                                '<div class="goods merger" v-else >'+
                                '<div v-for="(data1,index) in list">'+
                                    '<div v-for="(data,index) in data1">'+
                                    '<p class="goodsname">{{data.name}}</p>'+
                                    '<p class="goodsnum">X{{data.number}}</p>'+
                                    '</div>'+
                                    '</div>'+
                                '</div>'+
                                '</div>'
                },
                "plan-cycle":{
                    props:["weeks","cycle","type","merger",'list'],
                    computed:{
                        week:function(){
                            if(Array.isArray(this.cycle) &&!this.merger){
                                return this.cycle.join(",");
                            }else{
                                return this.cycle;
                            }
                        }
                    },
                    template:'<div class="cycle" v-if="!merger">'+
                                 '<p>{{week}}/{{weeks}}</p>'+
                                 '<p v-if="type== 1">购买</p>'+
                                 '<p v-else-if="type== 2">赠送</p>'+
                                 '<p v-else-if="type== 3">补发</p>'+
                                 '<p v-else-if="type== 4">补赠</p>'+
                                 '<p v-else-if="type== 5">合并</p>'+
                             '</div>'+
                             '<div class="cycle merger" v-else>'+
                                 '<div v-for="(data,index) in week" :style="{height:list[index].length*28+10+\'px\'}">'+
                                     '<p>{{data}}/{{weeks}}</p>'+
                                     '<p v-if="type[index]== 1">购买</p>'+
                                     '<p v-else-if="type[index]== 2">赠送</p>'+
                                     '<p v-else-if="type[index]== 3">补发</p>'+
                                     '<p v-else-if="type[index]== 4">补赠</p>'+
                                 '</div>'+
                             '</div>'
                },
                "plan-type":{
                    props:["type"],
                    template:'<div class="type">'+
                             '<p v-if="type==1">购买</p>'+
                             '<p v-else-if="type==2">赠送</p>'+
                             '<p v-else-if="type==3">补发</p>'+
                             '<p v-else-if="type==4">补赠</p>'+
                             '</div>'
                },
                "plan-time":{
                    props:["plan_time","send_time"],
                    template:'<div class="time">'+
                             '<p>计划：{{plan_time}}</p>'+
                             '<p v-if="send_time">实发：{{send_time}}</p>'+
                             '</div>'
                },
                "plan-send-info":{
                    props:["status","expressnum","expressname"],
                    template:'<div class="info">'+
                             '<div>'+
                             '<img v-if="status==3" src="../../image/Done@20px.png" alt=""/>'+
                             '<img v-else-if="status==4" src="../../image/time_icon@20px.png" alt=""/>'+
                             '<img v-else-if="status==5" src="../../image/warning_icon@20px.png" alt=""/>'+
                             '<img v-else-if="status==6" src="../../image/recover_icon@20px.png" alt=""/>'+
                             '<p v-if="status==1">待发出</p>'+
                             '<p v-else-if="status==2">已发货</p>'+
                             '<p v-else-if="status==3">已完成</p>'+
                             '<p v-else-if="status==4" style="color:#f76260">审批中</p>'+
                             '<p v-else-if="status==5" style="color:#f76260">挂起中</p>'+
                             '<p v-else-if="status==6" style="color:#f76260">追回中</p>'+
                             '</div>'+
                             '<div v-if="expressnum&&expressname">' +
                             '<p>{{expressname}}:</p>'+
                             '<a>{{expressnum}}</a>'+
                             '</div>'+
                             '</div>'
                },
                "plan-invoice":{
                    props:["invoice"],
                    template:'<div class="invoice">'+
                                '<p v-if="invoice == 1">已打印</p>'+
                                '<p v-else>未打印</p>'+
                                '</div>'
                },
                "plan-express":{
                    props:["expressname","expressnum"],
                    template:'<div v-if="!expressnum" class="express">'+
                            '<p>--</p>'+
                            '</div>'+
                            '<div  v-else class="express">'+
                            '<p>{{expressname}}</p>'+
                            '<a class="express-number">{{expressnum}}</a>'+
                            '</div>'
                },
                "plan-remark":{
                    methods:{
                        Remark:function(e){                         //备注
                            remarks_pop.lis = this.remark;
                            if($("#remarks-pop").position().top == this.$el.offsetTop+$(this.$el).height()/2-25){
                                $("#remarks-pop").removeClass("active");
                            }else{
                                $("#remarks-pop").addClass("active").css({"left":this.$el.offsetLeft-580,"top":this.$el.offsetTop+$(this.$el).height()/2-25});
                                remarks_pop.id=this.id;
                                remarks_pop.week = this.week;
                                if(e ==1){
                                    remarks_pop.show = false;
                                }else{
                                    remarks_pop.show = true;
                                }
                            }
                            event.stopPropagation();
                        }
                    },
                    props:["remark","status","id"],
                    template:'<div class="remark-wrap">'+
                            '<div v-if="status ==3">--</div>'+
                            '<img v-else-if="remark.length>0" @click ="Remark(0)" @mouseover="Remark(0)" src="../../image/news.png" alt=""/>'+
                            '<div v-else class="remark" @click="Remark(1)">备注</div>'+
                            '</div>'
                },
                "plan-ope":{
                    props:["status","merger","address","week"],
                    template:'<div class="operation">'+
                              '<div v-if="merger" class="split" data-toggle="modal" data-target="#split" @click="SplitList" :data-id="address.id">拆分</div>'+
                              '<div v-else-if="status==1" class="edit" data-toggle="modal" data-target="#edit" @click=EditList :data-id="address.id">修改</div>'+
                              '<div v-else-if="status==2" class="reissue" data-toggle="modal" data-target="#service" @click="Refund">补发</div>'+
                              '<div v-else-if="status==4" class="cancel" @click="Cancel">撤销</div>'+
                              '<div v-else-if="status==5" class="deal" @click="Deal" :data-id="address.id">处理</div>'+
                              '<div v-else-if="status==6" class="cancel" @click="Cancel">撤销</div>'+
                              '</div>',
                    methods:{
                        SplitList:function(event){              //计划拆分
                            var planid = $(event.target).parents("li").attr("data-id").split(",");
                            if(useraddresslist.length==0){
                                GetUserAddressList(GetDetailPlan)
                            }else{
                                GetDetailPlan()
                            }
                            function GetDetailPlan(){
                                $.ajax({
                                    url:"",
                                    type:"POST",
                                    data:{
                                        userid:localStorage.userid,
                                        token:localStorage.token,
                                        planid:planid
                                    },
                                    //dataType:"json",
                                    success:function(e){
                                        var e={
                                            error:0,
                                            list:[{
                                                id:2,
                                                status:2,
                                                address:{
                                                    id:0,
                                                    username:"李大钊",
                                                    phone:"13645121217",
                                                    addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                                                },
                                                goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                                    {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                                                week:2,
                                                type:3,
                                                plan_time:'2017/11/29',
                                                send_time:'1998/08/21',
                                                limit_time:"2017/11/27-2017/12/01",
                                                invoice:0,
                                                expressname:"中通快递",
                                                expressnum:"533914674395",
                                                remark:[{
                                                    name:"用户本人",
                                                    time:"2017/08/03 02:23:22",
                                                    content:"啊杀杀杀大撒大青蛙"
                                                }]
                                            },
                                                {
                                                    id:3,
                                                    status:3,
                                                    address:{
                                                        id:0,
                                                        username:"李大钊",
                                                        phone:"13645121217",
                                                        addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                                                    },
                                                    goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                                        {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                                                    week:3,
                                                    type:2,
                                                    plan_time:'2017/11/26',
                                                    send_time:'1998/08/21',
                                                    limit_time:"2017/11/24-2017/11/28",
                                                    invoice:0,
                                                    expressname:"中通快递",
                                                    expressnum:"533914674395",
                                                    remark:[{
                                                        name:"用户本人",
                                                        time:"2017/08/03 02:23:22",
                                                        content:"啊杀杀杀大撒大青蛙"
                                                    }]
                                                },
                                                {
                                                    id:4,
                                                    status:6,
                                                    address:{
                                                        id:0,
                                                        username:"李大钊",
                                                        phone:"13645121217",
                                                        addressdetail:"山东省济南市历下区甸柳街道燕柳园门内丰巢快递箱"
                                                    },
                                                    goodslist:[{name:"超能小黑中型犬鲜粮250gx14包",number:"1"},
                                                        {name:"自制低盐原味宠物羊奶酪狗零食100g",number:"2"}],
                                                    week:4,
                                                    type:2,
                                                    plan_time:'2017/11/23',
                                                    send_time:'1998/08/21',
                                                    limit_time:"2017/11/21-2017/11/25",
                                                    invoice:0,
                                                    expressname:"中通快递",
                                                    expressnum:"533914674395",
                                                    remark:[{
                                                        name:"用户本人",
                                                        time:"2017/08/03 02:23:22",
                                                        content:"啊杀杀杀大撒大青蛙"
                                                    }]
                                                },]
                                        }
                                        if(e.error>0){
                                            alert(e.message);
                                        }else{
                                            split.list_select=e.list;
                                        }
                                        split.useraddresslist=useraddresslist;
                                        SplitEditAddressListBind('split');
                                    }
                                })
                            }
                        },
                        EditList:function(){            //计划编辑
                            var listid = $(event.target).parents("li").attr("data-id");
                            if(useraddresslist.length==0){
                                GetUserAddressList(EditedData);
                            }else{
                                EditedData();
                            }

                            function EditedData(){
                                for(var i=0;i<order_list_wrap.lis.length;i++){
                                    if(order_list_wrap.lis[i].id == listid){
                                        var b= $.extend(true,{},order_list_wrap.lis[i]);
                                        edit.list_select=[b]
                                    }
                                }
                                edit.useraddresslist = useraddresslist;
                                SplitEditAddressListBind('edit');
                            }

                        },
                        Deal:function(){
                            $("body").css("overflow","hidden");
                            //window.scrollTo(0,$(event.target).parents("li")[0].offsetTop);
                            $("#deal").height($("body").height()).css("display","block");
                            $("#deal .deal").css('marginTop',$(event.target).parents("li")[0].offsetTop-$("#header").height());
                            var index = $(event.target).parents("li").index();
                            var addressid = this.address.id;
                            if(useraddresslist.length == 0){
                                GetUserAddressList(DealedData)
                            }else{
                                DealedData();
                            }
                            function DealedData(){
                                var list = [];
                                deal.useraddresslist = useraddresslist;
                                var b= $.extend(true,{},order_list_wrap.lis[index]);
                                deal.list_select=b;
                                SplitEditAddressListBind('deal');
                            }
                        },
                        Refund:function(){
                            GetGoods();
                            if(service.reissue.id != $(event.target).parents("li").attr("data-id")){
                                service.reissue.goods =[];
                                service.addgoods.selectgoods =[];
                                for(let i =0;i<service.addgoods.goodslist.length;i++){
                                    service.addgoods.goodslist[i].select= false;
                                    service.addgoods.goodslist[i].noedit= false;
                                }
                            }
                            service.reissue.id=$(event.target).parents("li").attr("data-id");
                            service.reissue.week=this.week;
                            service.type=2;
                            var date = new Date();
                            var time = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
                            service.$nextTick(function(){
                                $("#service .reissue-wrap .send-time-btn>p").html(time);
                            });
                        },
                        Cancel:function(){
                            $("#cover").addClass("active");
                            cover.status=this.status;
                            cover.id = $(event.target).parents("li").attr("data-id");
                        }
                    }
                }
            }
        }
    }
});
$(function(){
    order_list_wrap.GetData();
    $("#deal").on("click",function(){
        $(this).css("display","none");
        $("body").css("overflow","");
    })
});


//点击外部关闭弹出窗口
$(window).on("click",function(){
    if($("#remarks-pop").hasClass("active")){
        $("#remarks-pop").removeClass("active");
    }
    if($("#select-date").hasClass("active")){
        $("#select-date").slideUp(0).removeClass("active");
        $("[time=active]").attr("time","");
    }
});


var service = new Vue({
    el:"#service",
    data:{
        type:1,
        refund:{
            weeks:order_list_wrap.weeks,
            select_weeks:[],
            type:'part',
            goodstype:'',
            price:"",
            description:""
        },
        reissue:{
            id:"",
            week:"",
            time:"",
            type:"",
            gift:0,
            goods:[],
            description:""
        },
        reissuegift:{
            id:"",
            week:"",
            time:"",
            type:"",
            gift:0,
            goods:[],
            description:""
        },
        addgoods:{
            changegoods:{},
            changeindex:0,
            nowpage:1,
            multiselect:true,
            goodslist:[],
            selectgoods:[]
        },
        addgoodsgift:{
            changegoods:{},
            changeindex:0,
            nowpage:1,
            multiselect:true,
            goodslist:[],
            selectgoods:[]
        }
    },
    computed:{
        Pages:function(){
            if(this.type==1){
                return Math.ceil(this.addgoods.goodslist.length/6);
            }else{
                return Math.ceil(this.addgoodsgift.goodslist.length/6);
            }
        }
    },
    methods:{
        RefundWeekSelect:function(){                        //单周点击
            var _this;
            if($(event.target).hasClass("cycle-week")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent(".cycle-week");
            }
            if(_this.hasClass("active")){
                _this.removeClass("active");
                for(let i =0;i<this.refund.select_weeks.length;i++){
                    if(this.refund.select_weeks[i] == parseInt(_this.children("p").html())){
                        this.refund.select_weeks.splice(i,1);
                    }
                }
                this.refund.type="part";
            }else{
                _this.addClass("active");
                this.refund.select_weeks.push(parseInt(_this.children("p").html()));

                this.refund.select_weeks.sort(sortNumber);
            }
            function sortNumber(a,b)
            {
                return a - b
            }
            this.RefundTypeChange()
        },
        RefundLevel:function(key){                  //部分退款全额退款
            var _this;
            if(key =="all"){
                if($(event.target).hasClass("all")){
                    _this = $(event.target)
                }else{
                    _this = $(event.target).parent(".all");
                }
                if(!_this.hasClass("active")){
                    this.refund.type='all';
                    this.refund.goodstype='all';
                    $("#service .cycle-wrap>div>div").addClass("active");
                    $("#service .refund-goods>div").addClass("active");
                    this.refund.select_weeks=[]
                    for(let i =0;i<this.refund.weeks;i++){
                        this.refund.select_weeks.push(i+1);
                    }
                    console.log(this.refund.select_weeks)
                }
            }else if(key =="part"){
                if($(event.target).hasClass("part")){
                    _this = $(event.target)
                }else{
                    _this = $(event.target).parent(".part");
                }
                if(!_this.hasClass("active")){
                    this.refund.type='part';
                    $("#service .cycle-wrap>div>div").removeClass("active");
                    $("#service .refund-goods>div").removeClass("active");
                    this.refund.select_weeks=[]
                    console.log(this.refund.select_weeks)
                }
            }
            this.RefundTypeChange();
        },
        RefundGoods:function(key){
            var _this;
            if(key =="all"){
                if($(event.target).hasClass("all")){
                    _this = $(event.target)
                }else{
                    _this = $(event.target).parent(".all");
                }
                if(this.refund.goodstype != "all"){
                    this.refund.goodstype = "all"
                }else{
                    this.refund.goodstype ="";
                }
            }else if(key =="plan"){
                if($(event.target).hasClass("plan")){
                    _this = $(event.target)
                }else{
                    _this = $(event.target).parent(".plan");
                }
                if(this.refund.goodstype == "plan" || this.refund.goodstype=="all"){
                    if(this.refund.goodstype=="all"){
                        this.refund.goodstype ="addpack"
                    }else{
                        this.refund.goodstype="";
                    }
                }else{
                    if(this.refund.goodstype =="addpack") {
                        this.refund.goodstype = "all"
                    }else{
                        this.refund.goodstype="plan"
                    }
                }
            }else if(key =="addpack"){
                if($(event.target).hasClass("addpack")){
                    _this = $(event.target)
                }else{
                    _this = $(event.target).parent(".addpack");
                }
                if(this.refund.goodstype == "addpack" || this.refund.goodstype=="all"){
                    if(this.refund.goodstype=="all"){
                        this.refund.goodstype ="plan"
                    }else{
                        this.refund.goodstype="";
                    }
                }else{
                    if(this.refund.goodstype =="plan") {
                        this.refund.goodstype = "all"
                    }else{
                        this.refund.goodstype="addpack"
                    }
                }

            }
            this.RefundTypeChange();
        },
        RefundTypeChange:function(){

            if(this.refund.select_weeks.length == this.refund.weeks && this.refund.goodstype =="all"){
                this.refund.type="all";
            }else{
                this.refund.type="part";
            }
        },
        ReissueType:function(key){
            if(this.type==2){
                var _this;
                if(key =="all"){
                    if($(event.target).hasClass("all")){
                        _this = $(event.target)
                    }else{
                        _this = $(event.target).parent(".all");
                    }
                    if(this.reissue.type != "all"){
                        this.reissue.type = "all"
                    }else{
                        this.reissue.type ="";
                    }
                }else if(key =="plan"){
                    if($(event.target).hasClass("plan")){
                        _this = $(event.target)
                    }else{
                        _this = $(event.target).parent(".plan");
                    }
                    if(this.reissue.type == "plan" || this.reissue.type=="all"){
                        if(this.reissue.type=="all"){
                            this.reissue.type ="addpack"
                        }else{
                            this.reissue.type="";
                        }
                    }else{
                        if(this.reissue.type =="addpack") {
                            this.reissue.type = "all"
                        }else{
                            this.reissue.type="plan"
                        }
                    }
                }else if(key =="addpack"){
                    if($(event.target).hasClass("addpack")){
                        _this = $(event.target)
                    }else{
                        _this = $(event.target).parent(".addpack");
                    }
                    if(this.reissue.type == "addpack" || this.reissue.type=="all"){
                        if(this.reissue.type=="all"){
                            this.reissue.type ="plan"
                        }else{
                            this.reissue.type="";
                        }
                    }else{
                        if(this.reissue.type =="plan") {
                            this.reissue.type = "all"
                        }else{
                            this.reissue.type="addpack"
                        }
                    }

                }
            }else{
                var _this;
                if(key =="all"){
                    if($(event.target).hasClass("all")){
                        _this = $(event.target)
                    }else{
                        _this = $(event.target).parent(".all");
                    }
                    if(this.reissuegift.type != "all"){
                        this.reissuegift.type = "all"
                    }else{
                        this.reissuegift.type ="";
                    }
                }else if(key =="plan"){
                    if($(event.target).hasClass("plan")){
                        _this = $(event.target)
                    }else{
                        _this = $(event.target).parent(".plan");
                    }
                    if(this.reissuegift.type == "plan" || this.reissuegift.type=="all"){
                        if(this.reissuegift.type=="all"){
                            this.reissuegift.type ="addpack"
                        }else{
                            this.reissuegift.type="";
                        }
                    }else{
                        if(this.reissuegift.type =="addpack") {
                            this.reissuegift.type = "all"
                        }else{
                            this.reissuegift.type="plan"
                        }
                    }
                }else if(key =="addpack"){
                    if($(event.target).hasClass("addpack")){
                        _this = $(event.target)
                    }else{
                        _this = $(event.target).parent(".addpack");
                    }
                    if(this.reissuegift.type == "addpack" || this.reissuegift.type=="all"){
                        if(this.reissuegift.type=="all"){
                            this.reissuegift.type ="plan"
                        }else{
                            this.reissuegift.type="";
                        }
                    }else{
                        if(this.reissuegift.type =="plan") {
                            this.reissuegift.type = "all"
                        }else{
                            this.reissuegift.type="addpack"
                        }
                    }

                }
            }

        },
        ReissueGift:function(key){
            if(this.type==2){
                if(key=="has"){
                    this.reissue.gift=1;
                }else{
                    this.reissue.gift=0;
                }
            }else{
                if(key=="has"){
                    this.reissuegift.gift=1;
                }else{
                    this.reissuegift.gift=0;
                }
            }

        },
        ReissueTimeBind:function(){
            var _this;
            if($(event.target).hasClass("send-time-btn")){
                _this = $(event.target)
            }else{
                _this = $(event.target).parent(".send-time-btn")
            }
            var data={
                that:_this.children("p"),
                position:"right",
                y:_this.children("p").attr("y"),
                m:_this.children("p").attr("m"),
                d:_this.children("p").attr("d")
            };
            TimeShow(data);
        },
        ReissueGoodsNumberChange:function(key){
            if(this.type ==2){
                var index = $(event.target).parents("li").index();
                if(key =="add"){
                    this.reissue.goods[index].number++;
                }else{
                    if(this.reissue.goods[index].number>1){
                        this.reissue.goods[index].number--;
                    }
                }
            }else{
                var index = $(event.target).parents("li").index();
                if(key =="add"){
                    this.reissuegift.goods[index].number++;
                }else{
                    if(this.reissuegift.goods[index].number>1){
                        this.reissuegift.goods[index].number--;
                    }
                }
            }

        },
        PrePage:function(){
            if(this.type==2){
                if(this.addgoods.nowpage>1){
                    this.addgoods.nowpage--;
                }
            }else{
                if(this.addgoodsgift.nowpage>1){
                    this.addgoodsgift.nowpage--;
                }
            }

        },
        NextPage:function(){
            if(this.type ==2){
                if(this.addgoods.nowpage<this.Pages){
                    this.addgoods.nowpage++;
                }
            }else{
                if(this.addgoodsgift.nowpage<this.Pages){
                    this.addgoodsgift.nowpage++;
                }
            }

        },
        LastPage:function(){
            if(this.type==2){
                if(this.addgoods.nowpage<this.Pages){
                    this.addgoods.nowpage = this.Pages;
                }
            }else{
                if(this.addgoodsgift.nowpage<this.Pages){
                    this.addgoodsgift.nowpage = this.Pages;
                }
            }
        },
        FirstPage:function(){
            if(this.type ==2){
                if(this.addgoods.nowpage>1){
                    this.addgoods.nowpage = 1;
                }
            }else{
                if(this.addgoodsgift.nowpage>1){
                    this.addgoodsgift.nowpage = 1;
                }
            }

        },
        NowPage:function(){
            if(this.type==2){
                this.addgoods.nowpage = parseInt($(event.target).html());
            }else{
                this.addgoodsgift.nowpage = parseInt($(event.target).html());
            }
        },
        GoodsSelect:function(){
            if(this.type ==2){
                if(!$(event.target).hasClass("noedit")){
                    var index =$(event.target).parents("li").attr("data-index");
                    if(this.addgoods.multiselect){
                        this.addgoods.goodslist[index].select =!this.addgoods.goodslist[index].select;
                    }else{
                        for(let i =0;i<this.addgoods.goodslist.length;i++){
                            if(!this.addgoods.goodslist[i].noedit){
                                this.addgoods.goodslist[i].select = false;
                            }
                        }
                        this.addgoods.goodslist[index].select = true;
                    }
                    if(this.addgoods.goodslist[index].select){
                        let list = {};
                        list.id= this.addgoods.goodslist[index].id;
                        list.name=this.addgoods.goodslist[index].name;
                        list.img=this.addgoods.goodslist[index].img;
                        list.spec=this.addgoods.goodslist[index].spec;
                        list.price=parseFloat(this.addgoods.goodslist[index].price);
                        list.number = 1;
                        if(!this.addgoods.multiselect){
                            this.addgoods.selectgoods = [];
                        }
                        this.addgoods.selectgoods.push(list);
                    }else{
                        for(let i =0;i<this.addgoods.selectgoods.length;i++){
                            if(this.addgoods.selectgoods[i].name == this.addgoods.goodslist[index].name){
                                this.addgoods.selectgoods.splice(i,1);
                            }
                        }
                    }
                }
            }else{
                if(!$(event.target).hasClass("noedit")){
                    var index =$(event.target).parents("li").attr("data-index");
                    if(this.addgoodsgift.multiselect){
                        this.addgoodsgift.goodslist[index].select =!this.addgoodsgift.goodslist[index].select;
                    }else{
                        for(let i =0;i<this.addgoodsgift.goodslist.length;i++){
                            if(!this.addgoodsgift.goodslist[i].noedit){
                                this.addgoodsgift.goodslist[i].select = false;
                            }
                        }
                        this.addgoodsgift.goodslist[index].select = true;
                    }
                    if(this.addgoodsgift.goodslist[index].select){
                        let list = {};
                        list.id= this.addgoods.goodslist[index].id;
                        list.name=this.addgoodsgift.goodslist[index].name;
                        list.img=this.addgoodsgift.goodslist[index].img;
                        list.spec=this.addgoodsgift.goodslist[index].spec;
                        list.price=parseFloat(this.addgoodsgift.goodslist[index].price);
                        list.number = 1;
                        if(!this.addgoodsgift.multiselect){
                            this.addgoodsgift.selectgoods = [];
                        }
                        this.addgoodsgift.selectgoods.push(list);
                    }else{
                        for(let i =0;i<this.addgoodsgift.selectgoods.length;i++){
                            if(this.addgoodsgift.selectgoods[i].name == this.addgoodsgift.goodslist[index].name){
                                this.addgoodsgift.selectgoods.splice(i,1);
                            }
                        }
                    }
                }
            }

        },
        GoodsShow:function(key){
            if(this.type ==2){
                this.addgoods.selectgoods = [];
                if(key =="all"){
                    this.addgoods.multiselect = true;
                }else if(key == 'single'){
                    var index = $(event.target).parents("li").attr("data-index");
                    this.addgoods.changegoods = this.reissue.goods[index];
                    this.addgoods.changeindex = index;
                    this.addgoods.multiselect = false;
                }
            }else{
                this.addgoodsgift.selectgoods = [];
                if(key =="all"){
                    this.addgoodsgift.multiselect = true;
                }else if(key == 'single'){
                    var index = $(event.target).parents("li").attr("data-index");
                    this.addgoodsgift.changegoods = this.reissuegift.goods[index];
                    this.addgoodsgift.changeindex = index;
                    this.addgoodsgift.multiselect = false;
                }
            }

        },
        GoodsCancel:function(){
            if(this.type==2){
                if(!this.addgoods.multiselect){
                }
                for(var i=0;i<this.addgoods.goodslist.length;i++){
                    if(!this.addgoods.goodslist[i].noedit && this.addgoods.goodslist[i].select){
                        this.addgoods.goodslist[i].select = false;
                    }
                }
            }else{
                if(!this.addgoodsgift.multiselect){
                }
                for(var i=0;i<this.addgoodsgift.goodslist.length;i++){
                    if(!this.addgoodsgift.goodslist[i].noedit && this.addgoodsgift.goodslist[i].select){
                        this.addgoodsgift.goodslist[i].select = false;
                    }
                }
            }
            $("#goods").click();
            $("body").addClass("modal-open");
        },
        Confirm:function(){
            if(this.type==2){
                if(this.addgoods.multiselect){
                    for(let i =0 ;i<this.addgoods.selectgoods.length;i++){
                        this.reissue.goods.push(this.addgoods.selectgoods[i]);
                    }
                    for(let i =0;i<this.addgoods.goodslist.length;i++){
                        if(this.addgoods.goodslist[i].select){
                            this.addgoods.goodslist[i].noedit=true;
                        }
                    }
                }else{
                    Vue.set(this.reissue.goods,this.addgoods.changeindex,this.addgoods.selectgoods[0]);
                    for(let i=0;i<this.addgoods.goodslist.length;i++){
                        if(this.addgoods.goodslist[i].name == this.addgoods.changegoods.name){
                            Vue.set(this.addgoods.goodslist[i],'select',false)
                            Vue.set(this.addgoods.goodslist[i],'noedit',false)
                        }
                        if(this.addgoods.goodslist[i].name == this.addgoods.selectgoods[0].name){
                            Vue.set(this.addgoods.goodslist[i],'select',true)
                            Vue.set(this.addgoods.goodslist[i],'noedit',true)
                        }
                    }
                }
                this.GoodsCancel();

            }else{
                if(this.addgoodsgift.multiselect){
                    for(let i =0 ;i<this.addgoodsgift.selectgoods.length;i++){
                        this.reissuegift.goods.push(this.addgoodsgift.selectgoods[i]);
                    }
                    for(let i =0;i<this.addgoodsgift.goodslist.length;i++){
                        if(this.addgoodsgift.goodslist[i].select){
                            this.addgoodsgift.goodslist[i].noedit=true;
                        }
                    }
                }else{
                    Vue.set(this.reissuegift.goods,this.addgoodsgift.changeindex,this.addgoodsgift.selectgoods[0]);
                    for(let i=0;i<this.addgoodsgift.goodslist.length;i++){
                        if(this.addgoodsgift.goodslist[i].name == this.addgoodsgift.changegoods.name){
                            Vue.set(this.addgoodsgift.goodslist[i],'select',false)
                            Vue.set(this.addgoodsgift.goodslist[i],'noedit',false)
                        }
                        if(this.addgoodsgift.goodslist[i].name == this.addgoodsgift.selectgoods[0].name){
                            Vue.set(this.addgoodsgift.goodslist[i],'select',true)
                            Vue.set(this.addgoodsgift.goodslist[i],'noedit',true)
                        }
                    }
                }
                this.GoodsCancel();
            }

        },
        Delete:function(){
            if(this.type ==2){
                var index = $(event.target).parents("li").attr("data-index");
                for(let i=0;i<this.addgoods.goodslist.length;i++){
                    if(this.addgoods.goodslist[i].name == this.reissue.goods[index].name){
                        this.addgoods.goodslist[i].select = false;
                        this.addgoods.goodslist[i].noedit = false;
                    }
                }
                this.reissue.goods.splice(index,1);
            }else{
                var index = $(event.target).parents("li").attr("data-index");
                for(let i=0;i<this.addgoodsgift.goodslist.length;i++){
                    if(this.addgoodsgift.goodslist[i].name == this.reissuegift.goods[index].name){
                        this.addgoodsgift.goodslist[i].select = false;
                        this.addgoodsgift.goodslist[i].noedit = false;
                    }
                }
                this.reissuegift.goods.splice(index,1);
            }

        },
        SubmitRefund:function(){
            var b= $.extend(true,{},this.refund)
            var data = b;
            data.userid = localStorage.userid;
            data.token = localStorage.token;
            data.orderid=localStorage.orderid;
            data.price=parseFloat(this.refund.price).toFixed(2);
            delete data.weeks;
            if(!data.goodstype||data.select_weeks.length==0||!data.price||!data.description){
                alert("请输入完整的退款信息！")
            }else{
                $.ajax({
                    url:"",
                    type:"POST",
                    data:data,
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("申请退款成功");
                            location.reload();
                        }
                    }
                })
            }
        },
        SubmitReissue:function(){
            var data ={};
            data.userid=localStorage.userid;
            data.token=localStorage.token;
            data.planid=this.reissue.id;
            data.orderid=localStorage.orderid;
            data.time = $(this.$el).find(".send-time-btn>p").html();
            data.goodstype = this.reissue.type;
            var goods=[];
            for(let i=0;i<this.reissue.goods.length;i++){
                let good = {};
                good.id = this.reissue.goods[i].id;
                good.number = this.reissue.goods[i].number;
                goods.push(good)
            }
            data.goodslist = goods;
            data.description = this.reissue.description;
            if(!data.time||!data.goodstype||!data.description){
                alert("请完善补发信息！")
            }else{
                $.ajax({
                    url:"",
                    type:"POST",
                    data:data,
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("申请补发成功")
                            $("#service").click();
                        }
                    }
                })
            }

        },
        SubmitReissueGift:function(){
            var data ={};
            data.userid=localStorage.userid;
            data.token=localStorage.token;
            data.orderid=localStorage.orderid;
            data.time = $(this.$el).find(".send-time-btn>p").html();
            data.goodstype = this.reissuegift.type;
            var goods=[];
            for(let i=0;i<this.reissuegift.goods.length;i++){
                let good = {};
                good.id = this.reissuegift.goods[i].id;
                good.number = this.reissuegift.goods[i].number;
                goods.push(good)
            }
            data.goodslist = goods;
            data.description = this.reissuegift.description;
            console.log(data)
            if(!data.time||!data.goodstype||!data.description){
                alert("请完善补赠信息！")
            }else{
                $.ajax({
                    url:"",
                    type:"POST",
                    data:data,
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("申请补赠成功")
                            $("#service").click();
                        }
                    }
                })
            }
        }
    }
});
//申请售后
(function(){


    //申请售后导航切换
    $("#service .nav>div").on("click",function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active").siblings().removeClass("active");
        }
        $("#service .service-wrap>div").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });

    //数量减一
    $("#service .reissue-wrap .number-wrap .reduce").on("click",function(){
        if($(this).hasClass("active")){
            $(this).siblings(".number").val(parseInt($(this).siblings(".number").val())-1);
        }
        GiftNumber(1);
    });

    $("#service .reissuegift-wrap .number-wrap .reduce").on("click",function(){
        if($(this).hasClass("active")){
            $(this).siblings(".number").val(parseInt($(this).siblings(".number").val())-1);
        }
        GiftNumber(2);
    });
    //数量加一
    $("#service .reissue-wrap .number-wrap .add").on("click",function(){
        if($(this).hasClass("active")){
            $(this).siblings(".number").val(parseInt($(this).siblings(".number").val())+1);
        }
        GiftNumber(1);
    });

    $("#service .reissuegift-wrap .number-wrap .add").on("click",function(){
        if($(this).hasClass("active")){
            $(this).siblings(".number").val(parseInt($(this).siblings(".number").val())+1);
        }
        GiftNumber(2);
    });
    //输入监听
    $("#service .reissue-wrap .number-wrap .number").on("input",function(){
        GiftNumber(1);
        if(parseInt($(this).val())<1){
            $(this).val(1);
        }
    }).on("blur",function(){
        if(!$(this).val()){
            $(this).val(1);
        }
    });

    $("#service .reissuegift-wrap .number-wrap .number").on("input",function(){
        GiftNumber(1);
        if(parseInt($(this).val())<1){
            $(this).val(1);
        }
    }).on("blur",function(){
        if(!$(this).val()){
            $(this).val(1);
        }
    });

    //数字改变监听
    function GiftNumber(e){
        if(e ==1){
            if(parseInt($("#service .reissue-wrap .number-wrap .number").val())>1){
                $("#service .reissue-wrap .number-wrap .reduce").addClass("active");
            }else{
                $("#service .reissue-wrap .number-wrap .reduce").removeClass("active");
            }
        }else{
            if(parseInt($("#service .reissuegift-wrap .number-wrap .number").val())>1){
                $("#service .reissuegift-wrap .number-wrap .reduce").addClass("active");
            }else{
                $("#service .reissuegift-wrap .number-wrap .reduce").removeClass("active");
            }
        }

    }

    //绑定时间选择弹出组件
    $("#service  .reissue-wrap .send-time-btn p").on("click",function(){

    });
    $("#service  .reissuegift-wrap .send-time-btn p").on("click",function(){
        var data ={
            that:$(this),
            position:"right"
        };
        TimeShow(data);
    });
})();

//==合并计划


var merge = new Vue({
    el:"#merge",
    data:{
        weeks:order_list_wrap.weeks,        //订单周期
        useraddresslist:useraddresslist,    //用户地址列表
        list_select:[],              //当前选中的列表
        addressedit:{
            list1_index:0,
            list2_index:0,
            list3_index:0,
            list1_id:'',
            list2_id:'',
            list3_id:'',
            list1_name:"请选择",
            list2_name:"请选择",
            list3_name:"请选择",
            list:citylist,
            address:{
                id:"",
                username:"",
                phone:"",
                addressdetail:""
            }
        }
    },
    computed:{
        limit_time:function(){
            if(this.list_select.length>0){
                var min=this.list_select[0].limit_time.split("-")[0],
                    max=this.list_select[0].limit_time.split("-")[1];
                for(var i =1 ;i<this.list_select.length;i++){
                    if(this.list_select[i].limit_time.split("-")[0]<min){
                        min = this.list_select[i].limit_time.split("-")[0]
                    }
                    if(this.list_select[i].limit_time.split("-")[1]>max){
                        max = this.list_select[i].limit_time.split("-")[1]
                    }
                }
                var time = min+"-"+max;
                return time;
            }
        },
        address_list:function(){
            var list =[];
            for(let i =0;i<this.useraddresslist.length;i++){
                if(this.useraddresslist[i].id == this.list_select[0].address.id){
                    list.unshift(this.useraddresslist[i]);
                }else{
                    list.push(this.useraddresslist[i]);
                }
            }
            return list;
        },
        sendtime:function(){
            if(this.list_select.length>0){
                return this.list_select[0].plan_time
            }else{
                return "";
            }
        },
        list1:function(){
            return this.addressedit.list
        },
        list2:function(){
            if(this.addressedit.list[this.addressedit.list1_index].sub.length>0){
                return this.addressedit.list[this.addressedit.list1_index].sub
            }else{
                return []
            }
        },
        list3:function(){
            if(this.addressedit.list[this.addressedit.list1_index].sub){
                if(this.addressedit.list[this.addressedit.list1_index].sub.length>0){
                    if(this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub){
                        if(this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub.length>0){
                            return this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub;
                        }else{
                            return [];
                        }
                    }else{
                        return [];
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }

        }
    },
    methods:{
        EditShow:function(index){                           //地址编辑框弹出
            event.stopPropagation();
            if(index>=0){
                $("#merge .address-edit").addClass("active");
            }else{
                $(event.target).parent("").siblings(".address-edit").addClass("active");
                this.addressedit.address.id="";
            }
            $(event.target).parents(".address-wrap").addClass("active");
        },
        AddressEditHide:function(){                         //地址编辑框隐藏
            $(event.target).parents(".address-edit").removeClass("active");
        },
        SubmitAddressChange:function(){
            AddressEditAdd(this);
        },
        MenuShow:function(event){           //地址选择下拉列表
            var that;
            if($(event.target).is("div")){
                that = $(event.target)
            }else{
                that = $(event.target).parent("div");
            }
            if(this["list"+(that.index()+1)].length>0){
                if(that.find(".menu").hasClass("active")){
                    that.find(".menu").removeClass("active");
                }else{
                    that.find(".menu").addClass("active");
                }
                var index = that.find(".menu .active").index();
                that.find(".menu").scrollTop(index*50);
            }
        },
        SelectCity:function(event){             //选择城市
            event.stopPropagation();
            var that = $(event.target);
            var aid = that.attr("data-id");
            var index =that.index();
            var content = that.html();
            var parent = that.parent(".menu").parent("div");
            var p_index = parent.index()+1;
            this.addressedit["list"+p_index+"_index"] = index;
            this.addressedit["list"+p_index+"_name"] = content;
            this.addressedit["list"+p_index+"_id"] = aid;
            that.parent(".menu").removeClass("active").parent("div").addClass("active");
            if(p_index == 1){
                this.addressedit["list2_index"]= 0;
                this.addressedit["list3_index"]= 0;
                this.addressedit["list2_name"]= "请选择";
                this.addressedit["list3_name"]= "请选择";
            }else if(p_index == 2){
                this.addressedit["list3_index"]= 0;
                this.addressedit["list3_name"]= "请选择";
            }
        },
        AddressEdit:function(e){                //地址编辑
            e.stopPropagation();
            var index = $(e.target).parents("li").index();
            this.EditShow(1);
            var address_wrap = $(this.$el).find(".address-wrap");
            address_wrap.addClass("active");

            var userlist = this.address_list[index];
            $("#merge .edit_username").val(userlist.username);
            $("#merge .edit_phone").val(userlist.phone);
            $("#merge .addressdetail").val(userlist.addressdetail);
            this.addressedit.list1_name = userlist.province;
            this.addressedit.list2_name = userlist.city;
            this.addressedit.list3_name = userlist.area;
            this.addressedit.list1_id = userlist.provinceid;
            this.addressedit.list2_id = userlist.cityid;
            this.addressedit.list3_id = userlist.areaid;
            this.$nextTick(function(){
                this.addressedit.list1_index = $("#merge .address-edit .address-select-wrap .menu").eq(0).children(".active").index();
                this.$nextTick(function(){
                    this.addressedit.list2_index = $("#merge .address-edit .address-select-wrap .menu").eq(1).children(".active").index();
                    this.$nextTick(function(){
                        this.addressedit.list3_index = $("#merge .address-edit .address-select-wrap .menu").eq(2).children(".active").index();
                    })
                });
            });
            var b= $.extend(true,{},userlist);
            this.addressedit.address=b;
            for(let i =0;i<this.list1.length;i++){
                if(this.list1[i].name == userlist.province){
                    this.addressedit.list1_index = i;
                    $(this.$el).find(".menu").eq(0).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
            for(let i =0;i<this.list2.length;i++){
                if(this.list2[i].name == userlist.city){
                    this.addressedit.list2_index = i;
                    $(this.$el).find(".menu").eq(1).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
            for(let i =0;i<this.list3.length;i++){
                if(this.list3[i].name == userlist.area){
                    this.addressedit.list3_index = i;
                    $(this.$el).find(".menu").eq(2).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
        },
        MergeConfirm:function(){
            var id =[];
            var addressid =this.list_select[0].address.id;
            var plantime = $(this.$el).find(".select-time>p").html();
            for(var i=0;i<this.list_select.length;i++){
                id.push(this.list_select[i].id);
            }
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    orderid:localStorage.orderid,
                    id:id,
                    addressid:addressid,
                    plantime:plantime
                },
                //dataType:"json",
                success:function(e){
                    if(e.error>0){
                        alert(e.message)
                    }else{
                        alert("合并成功!");
                        $("#merge").click();
                        GetPlanList();
                    }
                }
            })
        }
    }
});



var split = new Vue({
    el:"#split",
    data:{
        weeks:order_list_wrap.weeks,
        spacing:1,                  //发货间隔
        spacing_show:false,         //间隔显示
        useraddresslist:useraddresslist,    //用户地址列表
        list_select:[],               //选中的计划
        addressedit:{
            list1_index:0,
            list2_index:0,
            list3_index:0,
            list1_id:'',
            list2_id:'',
            list3_id:'',
            list1_name:"请选择",
            list2_name:"请选择",
            list3_name:"请选择",
            list:citylist,
            address:{
                id:"",
                username:"",
                phone:"",
                addressdetail:""
            }
        }
    },
    computed:{
        limit_time:function(){
            if(this.list_select.length>0){
                return this.list_select[0].limit_time;
            }
        },
        y:function(){
            if(this.list_select.length>0){
                return this.list_select[0].plan_time.split("/")[0];
            }
        },
        m:function(){
            if(this.list_select.length>0){
                return this.list_select[0].plan_time.split("/")[1];
            }
        },
        d:function(){
            if(this.list_select.length>0){
                return this.list_select[0].plan_time.split("/")[2];
            }
        },
        address_list:function(){
            var list = [];
            for(let i=0;i<this.list_select.length;i++){
                var list1= [];
                for(let j =0;j<this.useraddresslist.length;j++){
                    if(this.useraddresslist[j].id == this.list_select[i].address.id){
                        list1.unshift(this.useraddresslist[j])
                    }else{
                        list1.push(this.useraddresslist[j])
                    }
                }
                list.push(list1)
            }
            return list;
        },
        sendtime:function(){
            if(this.list_select.length>0){
                return this.list_select[0].plan_time
            }else{
                return "";
            }
        },
        list1:function(){
            return this.addressedit.list
        },
        list2:function(){
            if(this.addressedit.list[this.addressedit.list1_index].sub.length>0){
                return this.addressedit.list[this.addressedit.list1_index].sub
            }else{
                return []
            }
        },
        list3:function(){
            if(this.addressedit.list[this.addressedit.list1_index].sub){
                if(this.addressedit.list[this.addressedit.list1_index].sub.length>0){
                    if(this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub){
                        if(this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub.length>0){
                            return this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub;
                        }else{
                            return [];
                        }
                    }else{
                        return [];
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }

        }
    },
    methods:{
        EditShow:function(index){                           //地址编辑框弹出
            event.stopPropagation();
            if(index>=0){
                $("#split .address-edit").eq(index).addClass("active");
            }else{
                $(event.target).parent("").siblings(".address-edit").addClass("active");
                this.addressedit.address.id="";
            }
            $(event.target).parents(".address-wrap").addClass("active");
        },
        AddressEditHide:function(){                         //地址编辑框隐藏
            $(event.target).parents(".address-edit").removeClass("active");
        },
        SubmitAddressChange:function(){
            AddressEditAdd(this);
        },
        MenuShow:function(event){
            var that;
            if($(event.target).is("div")){
                that = $(event.target)
            }else{
                that = $(event.target).parent("div");
            }
            if(this["list"+(that.index()+1)].length>0){
                if(that.find(".menu").hasClass("active")){
                    that.find(".menu").removeClass("active");
                }else{
                    that.find(".menu").addClass("active");
                }
                var index = that.find(".menu .active").index();
                that.find(".menu").scrollTop(index*50);
            }
        },
        SelectCity:function(event){
            event.stopPropagation();
            var that = $(event.target);
            var index =that.index();
            var content = that.html();
            var aid = that.attr("data-id");
            var parent = that.parent(".menu").parent("div");
            var p_index = parent.index()+1;
            this.addressedit["list"+p_index+"_index"] = index;
            this.addressedit["list"+p_index+"_name"] = content;
            this.addressedit["list"+p_index+"_id"] = aid;
            that.parent(".menu").removeClass("active").parent("div").addClass("active");
            if(p_index == 1){
                this.addressedit["list2_index"]= 0;
                this.addressedit["list3_index"]= 0;
                this.addressedit["list2_name"]= "请选择";
                this.addressedit["list3_name"]= "请选择";
            }else if(p_index == 2){
                this.addressedit["list3_index"]= 0;
                this.addressedit["list3_name"]= "请选择";
            }
        },
        AddressEdit:function(e){
            e.stopPropagation();
            var index = $(e.target).parents("li").index();
            var index1 = $(e.target).parents("li").parent(".address-wrap").index();
            this.EditShow(index1);
            var address_wrap = $(this.$el).find(".address-wrap").eq(index1);
            address_wrap.addClass("active");

            var userlist = this.address_list[index1][index];
            $("#split .edit_username").eq(index1).val(userlist.username);
            $("#split .edit_phone").eq(index1).val(userlist.phone);
            $("#split .addressdetail").eq(index1).val(userlist.addressdetail);
            this.addressedit.list1_name = userlist.province;
            this.addressedit.list2_name = userlist.city;
            this.addressedit.list3_name = userlist.area;
            this.addressedit.list1_id = userlist.provinceid;
            this.addressedit.list2_id = userlist.cityid;
            this.addressedit.list3_id = userlist.areaid;
            this.$nextTick(function(){
                this.addressedit.list1_index = $("#split .address-edit .address-select-wrap .menu").eq(0).children(".active").index();
                this.$nextTick(function(){
                    this.addressedit.list2_index = $("#split .address-edit .address-select-wrap .menu").eq(1).children(".active").index();
                    this.$nextTick(function(){
                        this.addressedit.list3_index = $("#split .address-edit .address-select-wrap .menu").eq(2).children(".active").index();
                    })
                });
            })
            for(let i in this.addressedit.address){
                this.addressedit.address[i] = userlist[i];
            }
            for(let i =0;i<this.list1.length;i++){
                if(this.list1[i].name == userlist.province){
                    this.addressedit.list1_index = i;
                    $(this.$el).find(".menu").eq(0).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
            for(let i =0;i<this.list2.length;i++){
                if(this.list2[i].name == userlist.city){
                    this.addressedit.list2_index = i;
                    $(this.$el).find(".menu").eq(1).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
            for(let i =0;i<this.list3.length;i++){
                if(this.list3[i].name == userlist.area){
                    this.addressedit.list3_index = i;
                    $(this.$el).find(".menu").eq(2).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
        },
        AddSpacing:function(){
            if(this.spacing<30){
                this.spacing ++;
            }
        },
        ReduceSpacing:function(){
            if(this.spacing>1){
                this.spacing --;
            }
        },
        SpacingShow:function(){
            $(".select-spacing .menu").addClass("active");
            event.stopPropagation();
        },
        SpacingConfirm:function(){
            $(".select-spacing .menu").removeClass("active");
            event.stopPropagation();
        },
        SplitConfirm:function(){
            var id =[];
            var addressid = [];
            var plantime = $(this.$el).find(".select-time>p").html();
            var spacing = this.spacing;
            for(var i=0;i<this.list_select.length;i++){
                id.push(this.list_select[i].id);
                addressid.push(this.list_select[i].address.id);
            }
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    id:id,
                    orderid:localStorage.orderid,
                    addressid:addressid,
                    plantime:plantime,
                    spacing:spacing
                },
                //dataType:"json",
                success:function(e){
                    if(e.error>0){
                        alert(e.message)
                    }else{
                        alert("拆分成功!");
                        $("#split").click();
                        GetPlanList();
                    }
                }
            })
        }
    }
});
function SplitEditAddressListBind(type){            //拆分与编辑与处理地址事件绑定
    if(type=='split'){
        split.$nextTick(function(){
            $("#split .address-wrap>li").unbind("click").on("click",function(){
                var wrap = $(this).parent();
                var index1 = wrap.index();
                var index = $(this).index();
                if(index == 0){
                    if(wrap.hasClass("active")){
                        wrap.removeClass("active");
                    }else{
                        wrap.addClass("active");
                    }
                }else{
                    wrap.removeClass("active");
                }
                var id = $(this).attr("data-id");
                for(let i = 0;i<useraddresslist.length;i++){
                    if(useraddresslist[i].id == id){
                        split.list_select[index1].address =useraddresslist[i];
                    }
                }
                event.stopPropagation();
            });
            $("#split .select-time").unbind("click").on("click",function(){
                var data={
                    that:$(this).children("p"),
                    position:"bottom",
                    y:$(this).find("p").attr("y"),
                    m:$(this).find("p").attr("m"),
                    d:$(this).find("p").attr("d"),
                    limit:{
                        starttime:$(this).attr("limit_time").split("-")[0],
                        endtime:$(this).attr("limit_time").split("-")[1]
                    }
                };
                TimeShow(data);
            })
            $(function(){
                var phone = $(".edit_phone");
                var reg =/(^1[3|4|5|7|8]\d{9}$)/;
                phone.unbind("input").on("input",function(){
                    if($(this).val().length ==11){
                        if(!reg.test($(this).val())){
                            phone.parent().addClass("active");
                        }
                    }else{
                        phone.parent().removeClass("active");
                    }
                });
                phone.unbind("blur").on("blur",function(){
                    if(!reg.test($(this).val())){
                        phone.parent().addClass("active");
                    }
                })
            })
        });
    }else if(type=='edit'){
        edit.$nextTick(function(){
            $("#edit .address-wrap>li").unbind("click").on("click",function(){
                var wrap = $(this).parent();
                var index1 = wrap.index();
                var index = $(this).index();
                if(index == 0){
                    if(wrap.hasClass("active")){
                        wrap.removeClass("active");
                    }else{
                        wrap.addClass("active");
                    }
                }else{
                    wrap.removeClass("active");
                }
                var id = $(this).attr("data-id");
                for(let i = 0;i<useraddresslist.length;i++){
                    if(useraddresslist[i].id == id){
                        edit.list_select[index1].address =useraddresslist[i];
                    }
                }
                event.stopPropagation();
            });
            $("#edit .select-time").unbind("click").on("click",function(){
                var data={
                    that:$(this).children("p"),
                    position:"bottom",
                    y:$(this).find("p").attr("y"),
                    m:$(this).find("p").attr("m"),
                    d:$(this).find("p").attr("d"),
                    limit:{
                        starttime:$(this).attr("limit_time").split("-")[0],
                        endtime:$(this).attr("limit_time").split("-")[1]
                    }
                };
                TimeShow(data);
            })
            $(function(){
                var phone = $(".edit_phone");
                var reg =/(^1[3|4|5|7|8]\d{9}$)/;
                phone.unbind("input").on("input",function(){
                    if($(this).val().length ==11){
                        if(!reg.test($(this).val())){
                            phone.parent().addClass("active");
                        }
                    }else{
                        phone.parent().removeClass("active");
                    }
                });
                phone.unbind("blur").on("blur",function(){
                    if(!reg.test($(this).val())){
                        phone.parent().addClass("active");
                    }
                })
            })
        });
    }else if(type=="deal"){
        deal.$nextTick(function(){
            $("#deal .address-wrap>li").unbind("click").on("click",function(){
                var wrap = $(this).parent();
                var index = $(this).index();
                if(index == 0){
                    if(wrap.hasClass("active")){
                        wrap.removeClass("active");
                    }else{
                        wrap.addClass("active");
                    }
                }else{
                    wrap.removeClass("active");
                }
                var id = $(this).attr("data-id");
                for(let i = 0;i<useraddresslist.length;i++){
                    if(useraddresslist[i].id == id){
                        deal.list_select.address =useraddresslist[i];
                    }
                }
                event.stopPropagation();
            });
            $("#deal .select-time").unbind("click").on("click",function(){
                var data={
                    that:$(this).children("p"),
                    position:"right",
                    y:$(this).find("p").attr("y"),
                    m:$(this).find("p").attr("m"),
                    d:$(this).find("p").attr("d"),
                    limit:{
                        starttime:$(this).attr("limit_time").split("-")[0],
                        endtime:$(this).attr("limit_time").split("-")[1]
                    }
                };
                TimeShow(data);
            })
            $(function(){
                var phone = $(".edit_phone");
                var reg =/(^1[3|4|5|7|8]\d{9}$)/;
                phone.unbind("input").on("input",function(){
                    if($(this).val().length ==11){
                        if(!reg.test($(this).val())){
                            phone.parent().addClass("active");
                        }
                    }else{
                        phone.parent().removeClass("active");
                    }
                });
                phone.unbind("blur").on("blur",function(){
                    if(!reg.test($(this).val())){
                        phone.parent().addClass("active");
                    }
                })
            })
        })
    }else if (type=='merge'){
        //合并计划地址点击
        merge.$nextTick(function(){
            $("#merge .address-wrap>li").unbind("click").on("click",function(){
                var wrap = $(this).parent();
                var index = $(this).index();
                if(index == 0){
                    if(wrap.hasClass("active")){
                        wrap.removeClass("active");
                    }else{
                        wrap.addClass("active");
                    }
                }else{
                    wrap.removeClass("active");
                }
                var id = $(this).attr("data-id");
                for(let i = 0;i<useraddresslist.length;i++){
                    if(useraddresslist[i].id == id){
                        merge.list_select[0].address =useraddresslist[i];
                    }
                }
                event.stopPropagation();
            });
            $("#merge .select-time").unbind("click").on("click",function(){
                var data={
                    that:$(this).children("p"),
                    position:"right",
                    y:$(this).find("p").attr("y"),
                    m:$(this).find("p").attr("m"),
                    d:$(this).find("p").attr("d"),
                    limit:{
                        starttime:$(this).attr("limit_time").split("-")[0],
                        endtime:$(this).attr("limit_time").split("-")[1]
                    }
                };
                TimeShow(data);
            })
            $(function(){
                var phone = $(".edit_phone");
                var reg =/(^1[3|4|5|7|8]\d{9}$)/;
                phone.unbind("input").on("input",function(){
                    if($(this).val().length ==11){
                        if(!reg.test($(this).val())){
                            phone.parent().addClass("active");
                        }
                    }else{
                        phone.parent().removeClass("active");
                    }
                });
                phone.unbind("blur").on("blur",function(){
                    if(!reg.test($(this).val())){
                        phone.parent().addClass("active");
                    }
                })
            })
        });
    }

}

var edit = new Vue({
    el:"#edit",
    data:{
        weeks:order_list_wrap.weeks,
        useraddresslist:useraddresslist,
        confirm_target:"",
        nowpage:1,
        nowweek:1,                //当前编辑商品选中的周
        list_select:[],              //当前选中的列表
        addressedit:{
            list1_index:0,
            list2_index:0,
            list3_index:0,
            list1_name:"请选择",
            list2_name:"请选择",
            list3_name:"请选择",
            list1_id:"",
            list2_id:"",
            list3_id:"",
            list:citylist,
            address:{
                id:"",
                username:"",
                phone:"",
                addressdetail:""
            }
        },
        goodslist:[], //商品列表
        weeksdetail:[],   //每周的商品详情
        mergertemp:[],
        weeksdetailtemp:[]
    },
    computed:{
        address_list:function(){
            var list = [];
            for(let i=0;i<this.list_select.length;i++){
                var list1= [];
                for(let j =0;j<this.useraddresslist.length;j++){
                    if(this.useraddresslist[j].id == this.list_select[i].address.id){
                        list1.unshift(this.useraddresslist[j])
                    }else{
                        list1.push(this.useraddresslist[j])
                    }
                }
                list.push(list1)
            }
            return list;
        },
        numbercontrol:function(){
            var data = [];
            for(let i =0;i<this.goodslist.length;i++){
                var temp = {};
                temp.all = this.goodslist[i].number;
                temp.detail = [];
                for(let j=0;j<this.weeksdetail.length;j++){
                    temp.detail.push(this.weeksdetail[j].goodsdetail[i].number)
                }
                data.push(temp);
            }
            return data;
        },
        list1:function(){
            return this.addressedit.list
        },
        list2:function(){
            if(this.addressedit.list[this.addressedit.list1_index].sub.length>0){
                return this.addressedit.list[this.addressedit.list1_index].sub
            }else{
                return []
            }
        },
        list3:function(){
            if(this.addressedit.list[this.addressedit.list1_index].sub){
                if(this.addressedit.list[this.addressedit.list1_index].sub.length>0){
                    if(this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub){
                        if(this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub.length>0){
                            return this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub;
                        }else{
                            return [];
                        }
                    }else{
                        return [];
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        Pages:function(){
            return Math.ceil(this.weeksdetail.length/8)
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
    methods:{
        EditShow:function(index){                           //地址编辑框弹出
            event.stopPropagation();
            if(index>=0){
                $("#edit .address-edit").eq(index).addClass("active");
            }else{
                $(event.target).parent("").siblings(".address-edit").addClass("active");
                this.addressedit.address.id="";
            }
            $(event.target).parents(".address-wrap").addClass("active");
        },
        AddressEditHide:function(){                         //地址编辑框隐藏
            $(event.target).parents(".address-edit").removeClass("active");
        },
        SubmitAddressChange:function(){
            AddressEditAdd(this);
        },
        MenuShow:function(event){
            var that;
            if($(event.target).is("div")){
                that = $(event.target)
            }else{
                that = $(event.target).parent("div");
            }
            if(this["list"+(that.index()+1)].length>0){
                if(that.find(".menu").hasClass("active")){
                    that.find(".menu").removeClass("active");
                }else{
                    that.find(".menu").addClass("active");
                }
                var index = that.find(".menu .active").index();
                that.find(".menu").scrollTop(index*50);
            }
        },
        SelectCity:function(event){
            event.stopPropagation();
            var that = $(event.target);
            var index =that.index();
            var content = that.html();
            var aid = that.attr("data-id");
            var parent = that.parent(".menu").parent("div");
            var p_index = parent.index()+1;
            this.addressedit["list"+p_index+"_index"] = index;
            this.addressedit["list"+p_index+"_name"] = content;
            this.addressedit["list"+p_index+"_id"] = aid;
            that.parent(".menu").removeClass("active").parent("div").addClass("active");
            if(p_index == 1){
                this.addressedit["list2_index"]= 0;
                this.addressedit["list3_index"]= 0;
                this.addressedit["list2_name"]= "请选择";
                this.addressedit["list3_name"]= "请选择";
            }else if(p_index == 2){
                this.addressedit["list3_index"]= 0;
                this.addressedit["list3_name"]= "请选择";
            }
        },
        AddressEdit:function(e){
            e.stopPropagation();
            var index = $(e.target).parents("li").index();
            var index1 = $(e.target).parents("li").parent(".address-wrap").index();
            this.EditShow(index1);
            var address_wrap = $(this.$el).find(".address-wrap").eq(index1);
            var userlist = this.address_list[index1][index];
            $("#edit .edit_username").eq(index1).val(userlist.username);
            $("#edit .edit_phone").eq(index1).val(userlist.phone);
            $("#edit .addressdetail").eq(index1).val(userlist.addressdetail);
            this.addressedit.list1_name = userlist.province;
            this.addressedit.list2_name = userlist.city;
            this.addressedit.list3_name = userlist.area;
            this.addressedit.list1_id = userlist.provinceid;
            this.addressedit.list2_id = userlist.cityid;
            this.addressedit.list3_id = userlist.areaid;
            this.$nextTick(function(){
                this.addressedit.list1_index = $("#edit .address-edit .address-select-wrap .menu").eq(0).children(".active").index();
                this.$nextTick(function(){
                    this.addressedit.list2_index = $("#edit .address-edit .address-select-wrap .menu").eq(1).children(".active").index();
                    this.$nextTick(function(){
                        this.addressedit.list3_index = $("#edit .address-edit .address-select-wrap .menu").eq(2).children(".active").index();
                    })
                });
            })
            for(let i in this.addressedit.address){
                this.addressedit.address[i] = userlist[i];
            }
            for(let i =0;i<this.list1.length;i++){
                if(this.list1[i].name == userlist.province){
                    this.addressedit.list1_index = i;
                    $(this.$el).find(".menu").eq(0).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
            for(let i =0;i<this.list2.length;i++){
                if(this.list2[i].name == userlist.city){
                    this.addressedit.list2_index = i;
                    $(this.$el).find(".menu").eq(1).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
            for(let i =0;i<this.list3.length;i++){
                if(this.list3[i].name == userlist.area){
                    this.addressedit.list3_index = i;
                    $(this.$el).find(".menu").eq(2).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
        },
        AddSpacing:function(){
            if(this.spacing<30){
                this.spacing ++;
            }
        },
        ReduceSpacing:function(){
            if(this.spacing>1){
                this.spacing --;
            }
        },
        SpacingShow:function(){
            $(".select-spacing .menu").addClass("active");
            event.stopPropagation();
        },
        SpacingConfirm:function(){
            $(".select-spacing .menu").removeClass("active");
            event.stopPropagation();
        },
        GoodsEditShow:function(){            //商品编辑弹出
            event.stopPropagation();
            $(event.target).parents(".goods-target").children("#goodsedit").addClass("active");
            var index =$(event.target).parents(".goods").index();
            this.nowweek = this.list_select[index].week;
            var tempp = [];
            for(let i =0;i<this.weeksdetail.length;i++){
                if(this.nowweek == this.weeksdetail[i].week){
                    this.nowpage = Math.ceil((i+1)/8);
                }
                var temp = [];
                for(let j =0;j<this.weeksdetail[i].goodsdetail.length;j++){
                    var temp1 = {
                        id:this.weeksdetail[i].goodsdetail[j].id,
                        number:this.weeksdetail[i].goodsdetail[j].number
                    };
                    temp.push(temp1)
                }
                tempp.push(temp)
            }
            this.weeksdetailtemp = tempp;

        },
        EditHide:function(){             //商品编辑取消
            event.stopPropagation();
            $(event.target).parents("#goodsedit").removeClass("active");
        },
        GoodsAdd:function(){
            var index1 = $(event.target).siblings("input").attr("data-goodsindex");
            var index2 = $(event.target).siblings("input").attr("data-weekindex");
            if(this.NumberVerify(index1,index2,'add')){
                this.weeksdetail[index2].goodsdetail[index1].number++;
            }
        },
        GoodsReduce:function(){
            var index1 = $(event.target).siblings("input").attr("data-goodsindex");
            var index2 = $(event.target).siblings("input").attr("data-weekindex");
            if(this.weeksdetail[index2].goodsdetail[index1].number>0){
                this.weeksdetail[index2].goodsdetail[index1].number--;
            }
        },
        NumberVerify:function(index1,index2,type){                  //商品数量总数验证
            var count=0;
            if(type=="add"){
                for(let i =0;i<this.numbercontrol[index1].detail.length;i++){
                    count = count + this.numbercontrol[index1].detail[i];
                    if(count>=this.numbercontrol[index1].all){
                        return false;
                    }
                }
            }else{
                if(type =="submit"){
                    for(let i =0;i<this.numbercontrol.length;i++){
                        let temp = 0;
                        let all = this.numbercontrol[i].all;
                        for(let j =0;j<this.numbercontrol[i].detail.length;j++){
                            temp += this.numbercontrol[i].detail[j];
                        }
                        if(temp!=all){

                            return false;
                        }
                    }
                }
            }
            return true;
        },
        ConfirmShow:function(){                       //确认框弹出
            var _this = $(event.target);
            var pop = $(this.$el).find(".pop");
            if(pop.hasClass("active")){
                pop.removeClass("active");
            }else{
                pop.addClass("active");
            }
            this.confirm_target = _this;
        },
        Confirm:function(){                                     //确认修改合并周的商品
            var weekindex = this.confirm_target.parents("li").index();       //周序号
            var goodsindex = this.confirm_target.parents(".goods-wrap").index()-2; //商品序号
            this.weeksdetail[weekindex].reversible = false;
            var pop = $(this.$el).find(".pop");
            pop.removeClass("active");
            for(let i =0;i<this.weeksdetail[weekindex].goodsdetail.length;i++){
                var temp ={
                    weekindex:weekindex,
                    goodsindex:i,
                    number:this.weeksdetail[weekindex].goodsdetail[i].number
                };
                this.mergertemp.push(temp);
            }
        },
        Submit:function(){                                  //提交商品修改
            if(this.NumberVerify(0,0,'submit')){
                for(let i =0;i<this.mergertemp.length;i++){
                    if(this.weeksdetail[this.mergertemp[i].weekindex].goodsdetail[this.mergertemp[i].goodsindex].number !=this.mergertemp[i].number){
                        this.weeksdetail[this.mergertemp[i].weekindex].reversible=false;
                        this.weeksdetail[this.mergertemp[i].weekindex].reversible_change=1;
                        break;
                    }else{
                        this.weeksdetail[this.mergertemp[i].weekindex].reversible=true;
                    }
                }
                var list = [];

                for(let i =0;i<this.weeksdetail.length;i++){
                    var list1 = {
                        id :this.weeksdetail[i].id,
                        goodsdetail:[],
                        reversible_change:0
                    };
                    if(this.weeksdetail[i].reversible_change ==1){
                        list1.reversible_change =1;
                    }
                    for(let j =0 ;j<this.weeksdetail[i].goodsdetail.length;j++){
                        if(this.weeksdetail[i].goodsdetail[j].number != this.weeksdetailtemp[i][j].number){
                            var b = $.extend(true,{},this.weeksdetail[i].goodsdetail[j]);
                            list1.goodsdetail.push(b);
                        }
                    }
                    if(list1.goodsdetail.length>0){
                        list.push(list1)
                    }
                }
                console.log(list);
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        orderid:localStorage.orderid,
                        list:list
                    },
                    //dataType:'json',
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("保存成功！");
                            $("#goodsedit").removeClass("active");
                            GetPlanList(localStorage.orderid,Refresh);
                            function Refresh(){
                                for(let i =0;i<edit.list_select.length;i++){
                                    for(let j =0 ;j<order_list_wrap.list.length;j++){
                                        if(order_list_wrap.list[j].id==edit.list_select[i].id){
                                            var b= $.extend(true,{},order_list_wrap.list[j]);
                                            edit.list_select[i] = b;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }else{
                alert("还有未分配的商品!");
            }
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
        NowPage:function(){
            this.nowpage = parseInt($(event.target).html());
        },
        CancelWeekEdit:function(){
            event.stopPropagation();
            var index = $(event.target).parent("div").index();
            edit.list_select.splice(index,1)
            edit.address_list.splice(index,1)
            if(edit.list_select.length==0){
                $("#edit").click();
            }
        },
        ConfirmPlanEdit:function(){
            var times= $(this.$el).find(".select-time");
            var list =[];
            for(let i=0;i<this.list_select.length;i++){
                var data ={};
                data.id= this.list_select[i].id;
                data.addressid = this.list_select[i].address.id;
                data.plan_time = times.eq(i).children("p").html();
                list.push(data);
            }
            console.log(list);
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    orderid:localStorage.orderid,
                    list:list
                },
                //dataType:'json',
                success:function(e){
                    if(e.error>0){
                        alert(e.message)
                    }else{
                        GetPlanList(localStorage.orderid);
                    }
                }
            })
        }
    }
});

$(".content-wrap").on("click",function(){
    var address_wrap = $(this).find(".address-wrap");
    if(!$(this).find(".address-edit").hasClass("active")){
        if(address_wrap.hasClass("active")){
            address_wrap.removeClass("active");
        }
    }
    $(".menu").removeClass("active");
    event.stopPropagation();
});


var deal = new Vue({
    el:"#deal",
    data:{
        weeks:order_list_wrap.weeks,        //订单周期
        useraddresslist:useraddresslist,
        list_select:{},              //当前选中的列表
        addressedit:{
            list1_index:0,
            list2_index:0,
            list3_index:0,
            list1_id:"",
            list2_id:"",
            list3_id:"",
            list1_name:"请选择",
            list2_name:"请选择",
            list3_name:"请选择",
            list:citylist,
            address:{
                id:"",
                username:"",
                phone:"",
                addressdetail:""
            }
        }
    },
    computed:{
        address_list:function(){
            var list1= [];
            for(let j =0;j<this.useraddresslist.length;j++){
                if(this.useraddresslist[j].id == this.list_select.address.id){
                    list1.unshift(this.useraddresslist[j])
                }else{
                    list1.push(this.useraddresslist[j])
                }
            }
            return list1;
        },
        sendtime:function(){
            if(this.list_select.plan_time){
                return this.list_select.plan_time;
            }else{
                return "";
            }
        },
        list1:function(){
            return this.addressedit.list
        },
        list2:function(){
            if(this.addressedit.list[this.addressedit.list1_index].sub.length>0){
                return this.addressedit.list[this.addressedit.list1_index].sub
            }else{
                return []
            }
        },
        list3:function(){
            if(this.addressedit.list[this.addressedit.list1_index].sub){
                if(this.addressedit.list[this.addressedit.list1_index].sub.length>0){
                    if(this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub){
                        if(this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub.length>0){
                            return this.addressedit.list[this.addressedit.list1_index].sub[this.addressedit.list2_index].sub;
                        }else{
                            return [];
                        }
                    }else{
                        return [];
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }

        }
    },
    methods:{
        EditShow:function(index){                           //地址编辑框弹出
            event.stopPropagation();
            if(index>=0){
                $("#deal .address-edit").addClass("active");
            }else{
                $(event.target).parent("").siblings(".address-edit").addClass("active");
                this.addressedit.address.id="";
            }
            $(event.target).parents(".address-wrap").addClass("active");
        },
        AddressEditHide:function(){                         //地址编辑框隐藏
            $(event.target).parents(".address-edit").removeClass("active");
        },
        SubmitAddressChange:function(){
            AddressEditAdd(this);
        },
        MenuShow:function(event){           //地址选择下拉列表
            var that;
            if($(event.target).is("div")){
                that = $(event.target)
            }else{
                that = $(event.target).parent("div");
            }
            if(this["list"+(that.index()+1)].length>0){
                if(that.find(".menu").hasClass("active")){
                    that.find(".menu").removeClass("active");
                }else{
                    that.find(".menu").addClass("active");
                }
                var index = that.find(".menu .active").index();
                that.find(".menu").scrollTop(index*50);
            }
        },
        SelectCity:function(event){             //选择城市
            event.stopPropagation();
            var that = $(event.target);
            var aid= that.attr("data-id");
            var index =that.index();
            var content = that.html();
            var parent = that.parent(".menu").parent("div");
            var p_index = parent.index()+1;
            this.addressedit["list"+p_index+"_index"] = index;
            this.addressedit["list"+p_index+"_name"] = content;
            this.addressedit["list"+p_index+"_id"] = aid;
            that.parent(".menu").removeClass("active").parent("div").addClass("active");
            if(p_index == 1){
                this.addressedit["list2_index"]= 0;
                this.addressedit["list3_index"]= 0;
                this.addressedit["list2_name"]= "请选择";
                this.addressedit["list3_name"]= "请选择";
            }else if(p_index == 2){
                this.addressedit["list3_index"]= 0;
                this.addressedit["list3_name"]= "请选择";
            }
        },
        AddressEdit:function(e){                //地址编辑

            e.stopPropagation();
            var index = $(e.target).parents("li").index();
            this.EditShow(1);
            var address_wrap = $(this.$el).find(".address-wrap");
            address_wrap.addClass("active");

            var userlist = this.address_list[index];
            $("#deal .edit_username").val(userlist.username);
            $("#deal .edit_phone").val(userlist.phone);
            $("#deal .addressdetail").val(userlist.addressdetail);
            this.addressedit.list1_name = userlist.province;
            this.addressedit.list2_name = userlist.city;
            this.addressedit.list3_name = userlist.area;
            this.addressedit.list1_id = userlist.provinceid;
            this.addressedit.list2_id = userlist.cityid;
            this.addressedit.list3_id = userlist.areaid;
            this.$nextTick(function(){
                this.addressedit.list1_index = $("#deal .address-edit .address-select-wrap .menu").eq(0).children(".active").index();
                this.$nextTick(function(){
                    this.addressedit.list2_index = $("#deal .address-edit .address-select-wrap .menu").eq(1).children(".active").index();
                    this.$nextTick(function(){
                        this.addressedit.list3_index = $("#deal .address-edit .address-select-wrap .menu").eq(2).children(".active").index();
                    })
                });
            })
            for(let i in this.addressedit.address){
                this.addressedit.address[i] = userlist[i];
            }
            for(let i =0;i<this.list1.length;i++){
                if(this.list1[i].name == userlist.province){
                    this.addressedit.list1_index = i;
                    $(this.$el).find(".menu").eq(0).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
            for(let i =0;i<this.list2.length;i++){
                if(this.list2[i].name == userlist.city){
                    this.addressedit.list2_index = i;
                    $(this.$el).find(".menu").eq(1).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
            for(let i =0;i<this.list3.length;i++){
                if(this.list3[i].name == userlist.area){
                    this.addressedit.list3_index = i;
                    $(this.$el).find(".menu").eq(2).children("li").eq(i).addClass("active").siblings().removeClass("active");
                }
            }
        },
        CancelDeal:function(){
            $("#deal").click();
        },
        DealConfirm:function(){
            var id =this.list_select.id;
            var addressid =this.list_select.address.id;
            var plantime = $(this.$el).find(".select-time>p").html();
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    orderid:localStorage.orderid,
                    id:id,
                    addressid:addressid,
                    plantime:plantime
                },
                //dataType:"json",
                success:function(e){
                    if(e.error>0){
                        alert(e.message)
                    }else{
                        alert("合并成功!");
                        $("#deal").click();
                        GetPlanList();
                    }
                }
            })
        }
    }
});


var remarks_pop =new Vue({
    el:"#remarks-pop",
    data:{
        lis:[],
        id:2,
        show:true,
        remark_content:""
    },
    methods:{
        OpenRemark:function(){
            this.show = false;
            event.stopPropagation();
            remarks_pop.select_week=[];
        },
        OpenRemarks:function(){
            remarks_pop.show = true;
            event.stopPropagation();
            remarks_pop.select_week=[];
        },
        StopEvent:function(){
            event.stopPropagation();
        },
        SubmitRemark:function(){
            $.ajax({
                url:"",
                type:"post",
                data:{
                    content:this.remark_content,
                    weeks:this.select_week,
                    id:this.id
                }
            })
        }
    }
});
var cover = new Vue({
    el:"#cover",
    data:{
        id:"",
        status:""
    },
    methods:{
        Cancel:function(){
            $("#cover").removeClass("active");
        },
        Confirm:function(){
            console.log(this.id)
            if(this.status == 4){
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        orderid:localStorage.orderid,
                        id:this.id
                    },
                    //dataType:'json',
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("撤销审批成功！");
                            cover.Cancel();
                            GetPlanList();
                        }
                    }
                })
            }else if(this.status ==6){
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        orderid:localStorage.orderid,
                        id:this.id
                    },
                    //dataType:'json',
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("撤销追回成功！");
                            cover.Cancel();
                            GetPlanList();
                        }
                    }
                })
            }else if(this.status== 2){
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        orderid:localStorage.orderid,
                        id:this.id
                    },
                    //dataType:'json',
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("计划正在追回！");
                            cover.Cancel();
                            GetPlanList();
                        }
                    }
                })
            }else if(this.status == 'pause'){
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        orderid:localStorage.orderid,
                    },
                    //dataType:'json',
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("订单已暂停！");
                            cover.Cancel();
                            order_detail.status=3;
                            order_list_wrap.status=3;
                        }
                    }
                })
            }else if (this.status=='continue'){
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        orderid:localStorage.orderid
                    },
                    //dataType:'json',
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("订单已继续！");
                            cover.Cancel();
                            order_detail.status=e.status;
                        }
                    }
                })
            }
        }
    }
});
var time_change = new Vue({
    el:"#time-change",
    data:{
        sendtime:"",
        spacing:3
    },
    methods:{
        AddSpacing:function(){
            if(this.spacing<30){
                this.spacing ++;
            }
        },
        ReduceSpacing:function(){
            if(this.spacing>1){
                this.spacing --;
            }
        },
        SpacingShow:function(){
            $(".select-spacing .menu").addClass("active");
            event.stopPropagation();
        },
        SpacingConfirm:function(){
            $(".select-spacing .menu").removeClass("active");
            event.stopPropagation();
        },
        TimeSelect:function(){
            event.stopPropagation();
            var _this;
            if($(event.target).is("div")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parent("div");
            }
            var data={
                that:_this.children("p"),
                position:"bottom",
                y:_this.find("p").attr("y"),
                m:_this.find("p").attr("m"),
                d:_this.find("p").attr("d")
            };
            TimeShow(data);
        },
        Submit:function(){
            if($("#time-change .select-time p").html()){
                console.log($("#time-change .select-time p").html())
                $.ajax({
                    url:"",
                    type:"POST",
                    data:{
                        userid:localStorage.userid,
                        token:localStorage.token,
                        orderid:localStorage.orderid,
                        time:$("#time-change .select-time p").html(),
                        spacing:this.spacing
                    },
                    //dataType:"json",
                    success:function(e){
                        if(e.error>0){
                            alert(e.message)
                        }else{
                            alert("修改成功！")
                            $("#time-change").click();
                        }
                    }
                })
            }else{
                alert("请选择发货时间!")
            }

        }
    }
});

