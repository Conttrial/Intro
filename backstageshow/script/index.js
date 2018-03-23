/**
 * Created by 5 on 2017/10/26.
 */




var body = new Vue({
    el:"#body",
    data:{
        time:"",
        timelist:[],
        weekstime:"",
        taobao:{
            untilnow:12323,
            compare:"+21",
            percent:"+1.1%",
            time:'',
            data:"",
            pre:"",
            next:""
        },  //淘宝数据
        weixin:{
            untilnow:12323,
            compare:"+11",
            percent:"+0.1%",
            time:'',
            data:"",
            pre:"",
            next:""
        },  //微信数据
        app:{
            untilnow:12323,
            compare:"-32",
            percent:"-2.2%",
            time:'',
            data:"",
            pre:"",
            next:""
        },     //app数据
        offline:{
            untilnow:12323,
            compare:"-21",
            percent:"-2.1%",
            time:'',
            data:"",
            pre:"",
            next:""
        },   //线下数据
        sales:{
            platform:[99],
            paidprice:0,
            opaidprice:0,
            paidordernum:0,
            opaidordernum:0,
            paidusernum:0,
            opaidusernum:0,
            unpaidprice:0,
            ounpaidprice:0,
            unpaidordernum:0,
            ounpaidordernum:0,
            unpaidusernum:0,
            ounpaidusernum:0
        },          //销售数据
        order:{
            platform:[99],
            compeleted:0,
            ocompeleted:0,
            paused:0,
            opaused:0,
            unpaid:0,
            ounpaid:0,
            nosend:0,
            onosend:0,
            hang:0,
            ohang:0,
            recover:0,
            orecover:0
        },          //订单数据
        service:{
            refund:0,
            orefund:0,
            reissue:0,
            oreissue:0,
            reissuegift:0,
            oreissuegift:0
        },        //服务数据
        goods:{
            plan:0,
            oplan:0,
            addpack:0,
            oaddpack:0,
            normal:0,
            onormal:0
        },          //商品数据

        taobaoOption :{
            color:["#ffcf3f"],
            backgroundColor:"#fff",
            title: {
                text: '{a|}{b|}服务人数（/周/7天）',
                left:20,
                top:25,
                textStyle:{
                    color:"#3b3934",
                    fontFamily:"pinghei",
                    fontSize:"16",
                    fontWeight:500,
                    rich:{
                        a: {
                            backgroundColor: '#ffcf3f',
                            width:10,
                            height:10
                        },
                        b:{
                            width:10
                        }
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:"25%",
                containLabel: true
            },
            tooltip: {
                trigger:'axis',
                backgroundColor:"#fff",
                textStyle:{
                    color:"#999999",
                    fontSize:"14"
                },
                formatter:function(params){
                    //console.log(params);
                    if(params[0].dataIndex>0){
                        return "起"+body.taobao.data[params[0].dataIndex-1].name+"日，止"+params[0].name+"日<br/>服务人数：<i>"+params[0].value+"</i>人";
                    }else{
                        return "起七日前，止"+params[0].name+"日<br/>服务人数：<i>"+params[0].value+"</i>人";
                    }
                },
                extraCssText: 'box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);'
            },
            graphic:{
                id:"demo",
                type:"text",
                style:{
                    width:30,
                    height:30
                }
            },
            xAxis: {
                data: [],
                axisLine:{
                    show:false
                },
                boundaryGap: false,
                axisLabel:{
                    color:"#999",
                    fontSize:"13"
                },
                axisTick:{
                    show:false
                },
                splitLine:{
                    show:false
                },
                axisPointer:{
                    show:true,
                    label:{
                        show:false
                    },
                    z:0
                }
            },
            yAxis: {
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                offset:35,
                axisLabel:{
                    color:"#999",
                    fontSize:"13",
                    align:"left"
                },
                splitLine:{
                    lineStyle:{
                        color:"#f8f5ec"
                    }
                }
            },
            series: [{
                name: '服务人数',
                type: 'line',
                areaStyle:{
                    normal:{
                        color:"rgba(254,205,72,0.1)"
                    }
                },
                showSymbol:false,
                data: []
            }]
        },      //淘宝折线图数据
        weixinOption : {
    color:["#ffcf3f"],
    backgroundColor:"#fff",
    title: {
        text: '{a|}{b|}服务人数（/周/7天）',
        left:20,
        top:25,
        textStyle:{
            color:"#3b3934",
            fontFamily:"pinghei",
            fontSize:"16",
            fontWeight:500,
            rich:{
                a: {
                    backgroundColor: '#ffcf3f',
                    width:10,
                    height:10
                },
                b:{
                    width:10
                }
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:"25%",
        containLabel: true
    },
    tooltip: {
        trigger:'axis',
        backgroundColor:"#fff",
        textStyle:{
            color:"#999999",
            fontSize:"14"
        },
        formatter:function(params){
            //console.log(params);
            if(params[0].dataIndex>0){
                return "起"+body.weixin.data[params[0].dataIndex-1].name+"日，止"+params[0].name+"日<br/>服务人数：<i>"+params[0].value+"</i>人";
            }else{
                return "起七日前，止"+params[0].name+"日<br/>服务人数：<i>"+params[0].value+"</i>人";
            }
        },
        extraCssText: 'box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);'
    },
    graphic:{
        id:"demo",
        type:"text",
        style:{
            width:30,
            height:30
        }
    },
    xAxis: {
        data: [],
        axisLine:{
            show:false
        },
        boundaryGap: false,
        axisLabel:{
            color:"#999",
            fontSize:"13"
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show:false
        },
        axisPointer:{
            show:true,
            label:{
                show:false
            },
            z:0
        }
    },
    yAxis: {
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        offset:35,
        axisLabel:{
            color:"#999",
            fontSize:"13",
            align:"left"
        },
        splitLine:{
            lineStyle:{
                color:"#f8f5ec"
            }
        }
    },
    series: [{
        name: '服务人数',
        type: 'line',
        areaStyle:{
            normal:{
                color:"rgba(254,205,72,0.1)"
            }
        },
        showSymbol:false,
        data: []
    }]
},      //微信折线图数据
        appOption :{
        color:["#ffcf3f"],
        backgroundColor:"#fff",
        title: {
            text: '{a|}{b|}服务人数（/周/7天）',
            left:20,
            top:25,
            textStyle:{
                color:"#3b3934",
                fontFamily:"pinghei",
                fontSize:"16",
                fontWeight:500,
                rich:{
                    a: {
                        backgroundColor: '#ffcf3f',
                        width:10,
                        height:10
                    },
                    b:{
                        width:10
                    }
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:"25%",
            containLabel: true
        },
        tooltip: {
            trigger:'axis',
            backgroundColor:"#fff",
            textStyle:{
                color:"#999999",
                fontSize:"14"
            },
            formatter:function(params){
                //console.log(params);
                if(params[0].dataIndex>0){
                    return "起"+body.app.data[params[0].dataIndex-1].name+"日，止"+params[0].name+"日<br/>服务人数：<i>"+params[0].value+"</i>人";
                }else{
                    return "起七日前，止"+params[0].name+"日<br/>服务人数：<i>"+params[0].value+"</i>人";
                }
            },
            extraCssText: 'box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);'
        },
        graphic:{
            id:"demo",
            type:"text",
            style:{
                width:30,
                height:30
            }
        },
        xAxis: {
            data: [],
            axisLine:{
                show:false
            },
            boundaryGap: false,
            axisLabel:{
                color:"#999",
                fontSize:"13"
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
            axisPointer:{
                show:true,
                label:{
                    show:false
                },
                z:0
            }
        },
        yAxis: {
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            offset:35,
            axisLabel:{
                color:"#999",
                fontSize:"13",
                align:"left"
            },
            splitLine:{
                lineStyle:{
                    color:"#f8f5ec"
                }
            }
        },
        series: [{
            name: '服务人数',
            type: 'line',
            areaStyle:{
                normal:{
                    color:"rgba(254,205,72,0.1)"
                }
            },
            showSymbol:false,
            data: []
        }]
},        //App折线图数据
        offlineOption : {
            color:["#ffcf3f"],
            backgroundColor:"#fff",
            title: {
                text: '{a|}{b|}服务人数（/周/7天）',
                left:20,
                top:25,
                textStyle:{
                    color:"#3b3934",
                    fontFamily:"pinghei",
                    fontSize:"16",
                    fontWeight:500,
                    rich:{
                        a: {
                            backgroundColor: '#ffcf3f',
                            width:10,
                            height:10
                        },
                        b:{
                            width:10
                        }
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:"25%",
                containLabel: true
            },
            tooltip: {
                trigger:'axis',
                backgroundColor:"#fff",
                textStyle:{
                    color:"#999999",
                    fontSize:"14"
                },
                formatter:function(params){
                    //console.log(params);
                    if(params[0].dataIndex>0){
                        return "起"+body.offline.data[params[0].dataIndex-1].name+"日，止"+params[0].name+"日<br/>服务人数：<i>"+params[0].value+"</i>人";
                    }else{
                        return "起七日前，止"+params[0].name+"日<br/>服务人数：<i>"+params[0].value+"</i>人";
                    }
                },
                extraCssText: 'box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);'
            },
            graphic:{
                id:"demo",
                type:"text",
                style:{
                    width:30,
                    height:30
                }
            },
            xAxis: {
                data: [],
                axisLine:{
                    show:false
                },
                boundaryGap: false,
                axisLabel:{
                    color:"#999",
                    fontSize:"13"
                },
                axisTick:{
                    show:false
                },
                splitLine:{
                    show:false
                },
                axisPointer:{
                    show:true,
                    label:{
                        show:false
                    },
                    z:0
                }
            },
            yAxis: {
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                offset:35,
                axisLabel:{
                    color:"#999",
                    fontSize:"13",
                    align:"left"
                },
                splitLine:{
                    lineStyle:{
                        color:"#f8f5ec"
                    }
                }
            },
            series: [{
                name: '服务人数',
                type: 'line',
                areaStyle:{
                    normal:{
                        color:"rgba(254,205,72,0.1)"
                    }
                },
                showSymbol:false,
                data: []
            }]
        },   //线下折线图数据
        demo:0   //折线图翻页测试
    },
    computed:{
        today:function(){
            if(this.time){
                return this.time;
            }else{
                var date = new Date();
                return date.getFullYear()+"/"+parseInt(date.getMonth()+1)+"/"+date.getDate();
            }
        },
        salesplatform:function(){
            var data={};
            for(let i in this.sales.platform){
                data['platform'+[this.sales.platform[i]]] = true;
            }
            return data;
        },   //销售数据来源
        orderplatform:function(){
            var data={};
            for(let i in this.order.platform){
                data['platform'+[this.order.platform[i]]] = true;
            }
            return data;
        },   //订单数据来源
        percent:function(){
            var reg = /\-/g;
            var data={};
            if(reg.test(this.taobao.percent)){
                data.taobao= false;
            }else{
                data.taobao = true;
            }
            if(reg.test(this.weixin.percent)){
                data.weixin= false;
            }else{
                data.weixin = true;
            }
            if(reg.test(this.app.percent)){
                data.app = false;
            }else{
                data.app = true;
            }
            if(reg.test(this.offline.percent)){
                data.offline = false;
            }else{
                data.offline = true;
            }
            return data;
        },         //百分比颜色
        NextControl:function(){
            var data = {
                taobao:false,
                weixin:false,
                app:false,
                offline:false
            };
            if(this.taobao.next){
                data.taobao = true;
            }
            if(this.weixin.next){
                data.weixin = true;
            }
            if(this.app.next){
                data.app = true;
            }
            if(this.offline.next){
                data.offline = true
            }
            return data;
        },     //上一组控制
        PreControl:function(){
            var data = {
                taobao:false,
                weixin:false,
                app:false,
                offline:false
            };
            if(this.taobao.pre){
                data.taobao = true;
            }
            if(this.weixin.pre){
                data.weixin = true;
            }
            if(this.app.pre){
                data.app = true;
            }
            if(this.offline.pre){
                data.offline = true
            }
            return data;
        }       //下一组控制

    },
    methods:{
        ChangePlatform:function(e){
            var _this;
            if($(event.target).hasClass("radio-wrap")){
                _this = $(event.target);
            }else{
                _this = $(event.target).parents(".radio-wrap");
            }
            var platform = _this.attr("data-platform");
            var k;
            if(platform == 99){
                this[e].platform = [99];
            }else{
                for(let i in this[e].platform){
                    if(this[e].platform[i] == platform){
                        if(this[e].platform.length>1){
                            this[e].platform.splice(i,1);
                        }
                        return;
                    }
                    if(this[e].platform[i] ==99){
                        k = true;
                    }
                }
                if(k){
                    this[e].platform=[platform];
                }else{
                    this[e].platform.push(platform)
                }
                if(this[e].platform.length==4){
                    this[e].platform=[99]
                }
            }

            if(e =='sales'){
                this.GetSalesData();
            }else if(e=='order'){
                this.GetOrderData();
            }
        },  //改变数据来源
        PreWeek:function(e){
            if(this.PreControl[e]){
                for(var i =0 ;i<this.timelist.length;i++){
                    if(this[e].time == this.timelist[i]){
                        this[e].time = this.timelist[i+1];
                        break;
                    }
                }
                if(e == 'taobao'){
                    this.GetTaoBaoData();
                }else if(e =='weixin'){
                    this.GetWeiXinData();
                }else if(e =='app'){
                    this.GetAppData();
                }else if(e =='offline'){
                    this.GetOffLineData();
                }
                this.demo++;
            }
        },         //获取上一组数据
        NextWeek:function(e){
            if(this.NextControl[e]){
                for(var i =0 ;i<this.timelist.length;i++){
                    if(this[e].time == this.timelist[i]){
                        this[e].time = this.timelist[i-1];
                        break;
                    }
                }
                if(e == 'taobao'){
                    this.GetTaoBaoData();
                }else if(e =='weixin'){
                    this.GetWeiXinData();
                }else if(e =='app'){
                    this.GetAppData();
                }else if(e =='offline'){
                    this.GetOffLineData();
                }
                this.demo--;
            }
        },        //获取下一组数据
        taobaoRefresh:function(){
            taobaoChart.setOption(this.taobaoOption);
        },
        weixinRefresh:function(){
            weixinChart.setOption(this.weixinOption);
        },
        appRefresh:function(){
            appChart.setOption(this.appOption);
        },
        offlineRefresh:function(){
            offlineChart.setOption(this.offlineOption);
        },
        GetSalesData:function(){
            var platform;
            if(this.sales.platform.length==1&&this.sales.platform[0]==99){
                platform = "1,2,3,4"
            }else{
                platform = this.sales.platform.join(",")
            }
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    starttime:$(".time-select .st").html(),
                    endtime:$(".time-select .et").html(),
                    platform:platform
                },
                //dataType:"json",
                success:function(e){
                    var e={
                        error:0,
                        paidprice:24123.00,
                        opaidprice:1234.00,
                        paidordernum:3453,
                        opaidordernum:2321,
                        paidusernum:2324,
                        opaidusernum:4321,
                        unpaidprice:234.37,
                        ounpaidprice:353.01,
                        unpaidordernum:231,
                        ounpaidordernum:232,
                        unpaidusernum:352,
                        ounpaidusernum:123

                    };
                    var reg = /num\b/;
                    for(let i in e){
                        if(body.sales[i] !=undefined){
                            body.sales[i] = 0;
                            if(reg.test(i)){
                                NumberCount(i,e[i],'sales','Int')
                            }else{
                                NumberCount(i,e[i],'sales')
                            }
                        }
                    }
                }
            })
        },
        GetOrderData:function(){
            var platform;
            if(this.sales.platform.length==1&&this.sales.platform[0]==99){
                platform = "1,2,3,4"
            }else{
                platform = this.sales.platform.join(",")
            }
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    starttime:$(".time-select .st").html(),
                    endtime:$(".time-select .et").html(),
                    platform:platform
                },
                //dataType:"json",
                success:function(e){
                    var e={
                        error:0,
                        compeleted:132,
                        ocompeleted:231,
                        paused:231,
                        opaused:231,
                        unpaid:435,
                        ounpaid:1332,
                        nosend:1234,
                        onosend:1231,
                        hang:231,
                        ohang:43,
                        recover:2,
                        orecover:1

                    };
                    for(let i in e){
                        if(body.order[i] != undefined){
                            body.order[i] = 0;
                            NumberCount(i,e[i],'order','Int')
                        }
                    }
                }
            })
        },
        GetServiceData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    starttime:$(".time-select .st").html(),
                    endtime:$(".time-select .et").html()
                },
                //dataType:"json",
                success:function(e){
                    var e={
                        error:0,
                        refund:123,
                        orefund:121,
                        reissue:254,
                        oreissue:345,
                        reissuegift:645,
                        oreissuegift:235
                    };
                    for(let i in e){
                        if(body.service[i] != undefined){
                            body.service[i] = 0;
                            NumberCount(i,e[i],'service','Int')
                        }
                    }
                }
            })
        },
        GetGoodsData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    starttime:$(".time-select .st").html(),
                    endtime:$(".time-select .et").html()
                },
                //dataType:"json",
                success:function(e){
                    var e={
                        error:0,
                        plan:123,
                        oplan:321,
                        addpack:657,
                        oaddpack:452,
                        normal:24,
                        onormal:57
                    };
                    for(let i in e){
                        if(body.goods[i] != undefined){
                            body.goods[i] = 0;
                            NumberCount(i,e[i],'goods','Int')
                        }
                    }
                }
            })
        },
        GetTaoBaoData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    endtime:this.taobao.time
                },
                beforeSend:function(){
                    body.PreControl.taobao = false;
                },
                //dataType:"json",
                success:function(e){
                    if(body.demo ==0){     //测试
                        var e={
                            error:0,
                            list:[
                                {name:"2017-09-23",value:2333},
                                {name:"2017-09-30",value:2999},
                                {name:"2017-10-07",value:1341},
                                {name:"2017-10-14",value:4322},
                                {name:"2017-10-21",value:3421},
                                {name:"2017-10-28",value:1233},
                                {name:"2017-11-04",value:1341},
                                {name:"2017-11-11",value:4322}
                            ],
                            next:false,
                            pre:true
                        };
                    }else{
                        var e={
                            error:0,
                            list:[
                                {name:"2017-08-04",value:1997},
                                {name:"2017-08-11",value:4135},
                                {name:"2017-08-18",value:2319},
                                {name:"2017-08-25",value:1421},
                                {name:"2017-09-02",value:1341},
                                {name:"2017-09-09",value:4322},
                                {name:"2017-09-16",value:3421},
                                {name:"2017-09-23",value:1233}
                            ],
                            next:true,
                            pre:false
                        }
                    }

                    for(var i =0;i<e.list.length;i++){
                        Vue.set(body.taobaoOption.xAxis.data,i,e.list[i].name.split("-")[1]+"-"+e.list[i].name.split("-")[2])
                    }
                    Vue.set(body.taobaoOption.series[0],'data',e.list);
                    Vue.set(body.taobao,'data',e.list);
                    Vue.set(body.taobao,'pre',e.pre);
                    Vue.set(body.taobao,'next',e.next);
                    Vue.set(body.taobao,'time',e.list[e.list.length-1].name);
                    body.taobaoRefresh();
                    if(body.timelist.length>0){
                        var key1,key2;
                        for(let i =0;i<body.timelist.length;i++){
                            if(body.timelist[i] == e.list[e.list.length-1].name){
                                key1 = true;
                            }
                            if(body.timelist[i] ==e.list[0].name){
                                key2 = true;
                            }
                        }
                        if(!key1){
                            body.timelist.push(e.list[e.list.length-1].name)
                        }
                        if(!key2){
                            body.timelist.push(e.list[0].name)
                        }
                    }else{
                        body.timelist.push(e.list[e.list.length-1].name);
                        body.timelist.push(e.list[0].name);
                    }
                }
            })
        },    //获取淘宝数据
        GetWeiXinData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    endtime:this.weixin.time
                },
                //dataType:"json",
                beforeSend:function(){
                    body.PreControl.weixin = false;
                },
                success:function(e){
                    var e={
                        error:0,
                        list:[
                            {name:"2017-08-04",value:1997},
                            {name:"2017-08-11",value:4135},
                            {name:"2017-08-18",value:2319},
                            {name:"2017-08-25",value:1421},
                            {name:"2017-09-02",value:1341},
                            {name:"2017-09-09",value:4322},
                            {name:"2017-09-16",value:3421},
                            {name:"2017-09-23",value:1233},
                            {name:"2017-09-30",value:2999}
                        ],
                        next:false,
                        pre:false
                    };
                    for(var i =0;i<e.list.length;i++){
                        Vue.set(body.weixinOption.xAxis.data,i,e.list[i].name.split("-")[1]+"-"+e.list[i].name.split("-")[2])
                    }
                    Vue.set(body.weixinOption.series[0],'data',e.list);
                    Vue.set(body.weixin,'data',e.list);
                    Vue.set(body.weixin,'pre',e.pre);
                    Vue.set(body.weixin,'next',e.next);
                    body.weixinRefresh();
                }
            })
        },    //获取微信数据
        GetAppData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    endtime:this.app.time
                },
                //dataType:"json",
                beforeSend:function(){
                    body.PreControl.app = false;
                },
                success:function(e){
                    var e={
                        error:0,
                        list:[
                            {name:"2017-08-04",value:1997},
                            {name:"2017-08-11",value:4135},
                            {name:"2017-08-18",value:2319},
                            {name:"2017-08-25",value:1421},
                            {name:"2017-09-02",value:1341},
                            {name:"2017-09-09",value:4322},
                            {name:"2017-09-16",value:3421},
                            {name:"2017-09-23",value:1233},
                            {name:"2017-09-30",value:2999}
                        ],
                        next:false,
                        pre:false
                    };
                    for(var i =0;i<e.list.length;i++){
                        Vue.set(body.appOption.xAxis.data,i,e.list[i].name.split("-")[1]+"-"+e.list[i].name.split("-")[2])
                    }
                    Vue.set(body.appOption.series[0],'data',e.list);
                    Vue.set(body.app,'data',e.list);
                    Vue.set(body.app,'pre',e.pre);
                    Vue.set(body.app,'next',e.next);
                    body.appRefresh();
                }
            })
        },       //获取App数据
        GetOffLineData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    endtime:this.offline.time
                },
                //dataType:"json",
                beforeSend:function(){
                    body.PreControl.offline = false;
                },
                success:function(e){
                    var e={
                        error:0,
                        list:[
                            {name:"2017-08-04",value:1997},
                            {name:"2017-08-11",value:4135},
                            {name:"2017-08-18",value:2319},
                            {name:"2017-08-25",value:1421},
                            {name:"2017-09-02",value:1341},
                            {name:"2017-09-09",value:4322},
                            {name:"2017-09-16",value:3421},
                            {name:"2017-09-23",value:1233},
                            {name:"2017-09-30",value:2999}
                        ],
                        pre:false,
                        next:false
                    };
                    for(var i =0;i<e.list.length;i++){
                        Vue.set(body.offlineOption.xAxis.data,i,e.list[i].name.split("-")[1]+"-"+e.list[i].name.split("-")[2])
                    }
                    Vue.set(body.offlineOption.series[0],'data',e.list);
                    Vue.set(body.offline,'data',e.list);
                    Vue.set(body.offline,'pre',e.pre);
                    Vue.set(body.offline,'next',e.next);
                    body.offlineRefresh();
                }
            })
        },  //获取线下数据
        GetTaoBaoWeekData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    starttime:this.weekstime.split("-")[0],
                    endtime:this.weekstime.split("-")[1]
                },
                //dataType:"json",
                success:function(){
                    var e ={
                        error:0,
                        untilnow:1335,
                        compare:"+232",
                        percent:"+1.0%"
                    }
                    if(e.error>0){
                        alert(e.message);
                        if(e.error>=9000){
                            localStorage.clear();
                            location.href="/backstage/html/login.html"
                        }
                    }else{
                        body.taobao.untilnow = e.untilnow;
                        body.taobao.compare = e.compare;
                        body.taobao.percent = e.percent;
                    }
                }
            })
        },
        GetWeiXinWeekData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    starttime:this.weekstime.split("-")[0],
                    endtime:this.weekstime.split("-")[1]
                },
                //dataType:"json",
                success:function(){
                    var e ={
                        error:0,
                        untilnow:335,
                        compare:"-22",
                        percent:"-1.2%"
                    }
                    if(e.error>0){
                        alert(e.message);
                        if(e.error>=9000){
                            localStorage.clear();
                            location.href="/backstage/html/login.html"
                        }
                    }else{
                        body.weixin.untilnow = e.untilnow;
                        body.weixin.compare = e.compare;
                        body.weixin.percent = e.percent;
                    }
                }
            })
        },
        GetAppWeekData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    starttime:this.weekstime.split("-")[0],
                    endtime:this.weekstime.split("-")[1]
                },
                //dataType:"json",
                success:function(){
                    var e ={
                        error:0,
                        untilnow:535,
                        compare:"+22",
                        percent:"+1.2%"
                    }
                    if(e.error>0){
                        alert(e.message);
                        if(e.error>=9000){
                            localStorage.clear();
                            location.href="/backstage/html/login.html"
                        }
                    }else{
                        body.app.untilnow = e.untilnow;
                        body.app.compare = e.compare;
                        body.app.percent = e.percent;
                    }
                }
            })
        },
        GetOffLineWeekData:function(){
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token,
                    starttime:this.weekstime.split("-")[0],
                    endtime:this.weekstime.split("-")[1]
                },
                //dataType:"json",
                success:function(){
                    var e ={
                        error:0,
                        untilnow:235,
                        compare:"+62",
                        percent:"+3.2%"
                    }
                    if(e.error>0){
                        alert(e.message);
                        if(e.error>=9000){
                            localStorage.clear();
                            location.href="/backstage/html/login.html"
                        }
                    }else{
                        body.offline.untilnow = e.untilnow;
                        body.offline.compare = e.compare;
                        body.offline.percent = e.percent;
                    }
                }
            })
        }
    },
    mounted(){
        this.$nextTick(function() {
            taobaoChart = echarts.init(document.getElementById("taobaochart"));
            weixinChart = echarts.init(document.getElementById("weixinchart"));
            appChart = echarts.init(document.getElementById("appchart"));
            offlineChart = echarts.init(document.getElementById("offlinechart"));
            $.ajax({
                url:"",
                type:"POST",
                data:{
                    userid:localStorage.userid,
                    token:localStorage.token
                },
                //dataType:"json",
                success:function(){
                    var e ={
                        error:0,
                        time:"2017-09-30"
                    }
                    if(e.error>0){
                        alert(e.message);
                        if(e.error>=9000){
                            localStorage.clear();
                            location.href="/backstage/html/login.html"
                        }
                    }else{
                        body.taobao.time = e.time;
                        body.weixin.time= e.time;
                        body.app.time= e.time;
                        body.offline.time= e.time;
                        body.taobaoRefresh();
                        body.weixinRefresh();
                        body.appRefresh();
                        body.offlineRefresh();
                        body.GetSalesData();
                        body.GetOrderData();
                        body.GetServiceData();
                        body.GetGoodsData();
                        body.GetTaoBaoData();
                        body.GetWeiXinData();
                        body.GetAppData();
                        body.GetOffLineData();
                        body.GetTaoBaoWeekData();
                        body.GetWeiXinWeekData();
                        body.GetAppWeekData();
                        body.GetOffLineWeekData();
                    }
                }
            })

        })
    }
});



//初始化设置 绑定
$(function(){
    var today = new Date();
    var startday = new Date();
    var endday = new Date();
    for(let day = today.getDay();day>1;day--){
        startday.setDate(startday.getDate()-1);
    }
    for(let day = today.getDay();day<7;day++){
        endday.setDate(endday.getDate()+1);
    }
    var sm = startday.getMonth()+1;
    if(sm<10){
        sm = "0"+sm;
    }
    var ssd = startday.getDate();
    if(ssd<10){
        ssd = "0"+ssd;
    }
    var em = endday.getMonth()+1;
    if(em<10){
        em = "0"+em;
    }
    var eed = endday.getDate();
    if(eed<10){
        eed = "0"+eed;
    }
    var sd = startday.getFullYear()+"/"+sm+"/"+ssd;
    var ed = endday.getFullYear()+"/"+em+"/"+eed;

    var endday1 = new Date();
    var startday1= new Date();
    startday1.setDate(startday1.getDate()-7);

    var ey1 = endday1.getFullYear();
    var em1 = endday1.getMonth()+1;
    if(em1<10){
        em1 = "0"+em1;
    }
    var ed1 = endday1.getDate();
    if(ed1<10){
        ed1 = "0"+ed1;
    }
    var sy1 = startday1.getFullYear();
    var sm1 = startday1.getMonth()+1;
    var sd1 = startday1.getDate();
    if(sm1<10){
        sm1 = "0"+sm1;
    }
    if(sd1<10){
        sd1 = "0"+sd1;
    }
    $(".time-select").find("span").eq(1).html(ey1+"/"+em1+"/"+ed1);
    $(".time-select").find("span").eq(0).html(sy1+"/"+sm1+"/"+sd1);


    $(".time-select2").find("span").eq(0).html(sd);
    $(".time-select2").find("span").eq(1).html(ed);
    $(".time-select").on("click",function(){
        var data={
            that:$(".time-select"),
            position:"bottom",
            y:$(this).attr("y"),
            m:$(this).attr("m"),
            d:$(this).attr("d"),
            multiselect:true,
            mu1:$(this).find(".st"),
            mu2:$(this).find(".et"),
            st:$(this).find(".st").html(),
            et:$(this).find(".et").html()
        };
        TimeShow(data);
    });
    var key1=0,key2=0;
    $(".time-select").find("span").on("DOMNodeInserted",function(){
        key1++;
        if(key1==2){
            Vue.set(body,'time',$(".time-select .et").html());
            body.GetSalesData();
            body.GetOrderData();
            body.GetServiceData();
            body.GetGoodsData();
            key1=0;
        }
    });
    $(".time-select2").find("span").on("DOMNodeInserted",function(){
        key2++;
        if(key2==2){
            body.weekstime = $(".time-select2").find("span").eq(0).html()+"-"+$(".time-select2").find("span").eq(1).html();
            body.GetTaoBaoWeekData();
            body.GetWeiXinWeekData();
            body.GetAppWeekData();
            body.GetOffLineWeekData();
            key2=0;
        }
    });

    $(".time-select2").on("click",function(){
        var data={
            that:$(".time-select2"),
            position:"bottom",
            y:$(this).attr("y"),
            m:$(this).attr("m"),
            d:$(this).attr("d"),
            mu1:$(this).find(".st"),
            mu2:$(this).find(".et"),
            st:$(this).find(".st").html(),
            et:$(this).find(".et").html(),
            type:"week"
        };
        TimeShow(data);
    });





});


function NumberCount(i,d,target,type){
    if(type =='Int'){
        body[target][i] += Math.ceil((d-body[target][i])/2);
        if(body[target][i]<d){
            setTimeout(function(){
                NumberCount(i,d,target,type)
            },20)
        }
    }else{
        var e = parseFloat(body[target][i])*100;
        e += Math.ceil((d*100-e)/2);
        body[target][i] = (e/100).toFixed(2);
        if(body[target][i]<d){
            setTimeout(function(){
                NumberCount(i,d,target,type)
            },20)
        }
    }

}