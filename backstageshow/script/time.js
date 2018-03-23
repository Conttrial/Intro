
//$("#search-starttime").on("click",function(){
//    var data={
//        that:$("#search-starttime"),
//        position:"bottom",
//        y:$(this).attr("y"),
//        m:$(this).attr("m"),
//        d:$(this).attr("d")
//    };
//    TimeShow(data);
//});
//$("#search-endtime").on("click",function(){
//    var data={
//        that:$("#search-endtime"),
//        position:"bottom",
//        y:$(this).attr("y"),
//        m:$(this).attr("m"),
//        d:$(this).attr("d")
//    };
//    TimeShow(data);
//});
    //初始化

var limittime="";
var multiselect='';
var timeselect='';
var multitime=[];
var weekk;
var weeks=[];
var weeksindex=[];
    SelectRender();
    function SelectRender(){
        var time = '<div id="select-date">'
            +'<div id="select-date-title">'
            +'<div id="select-date-pre">'
            +'<div id="select-date-pre-year"><img src="/Intro/backstageshow/image/pre-year.png" alt=""/></div>'
            +'<div id="select-date-pre-month"><img src="/Intro/backstageshow/image/pre-month.png" alt=""/></div>'
            +'</div>'
            +'<div id="select-date-date">'
            +'<div id="select-date-year">2017</div>/<div id="select-date-month">05</div>'
            +'</div>'
            +'<div id="select-date-next">'
            +'<div id="select-date-next-month"><img src="/Intro/backstageshow/image/next-month.png" alt=""/></div>'
            +'<div id="select-date-next-year"><img src="/Intro/backstageshow/image/next-year.png" alt=""/></div>'
            +'</div>'
            +'</div>'
            +'<div id="select-date-weeks">'
            +'<div>一</div>'
            +'<div>二</div>'
            +'<div>三</div>'
            +'<div>四</div>'
            +'<div>五</div>'
            +'<div>六</div>'
            +'<div>日</div>'
            +'</div>'
            +'<div id="select-date-day">'
            +'<div>1</div>'
            +'<div>2</div>'
            +'<div>3</div>'
            +'<div>4</div>'
            +'<div>5</div>'
            +'<div>6</div>'
            +'<div>7</div>'
            +'<div>8</div>'
            +'<div>9</div>'
            +'<div>10</div>'
            +'<div>11</div>'
            +'<div>12</div>'
            +'<div>13</div>'
            +'<div>14</div>'
            +'<div>15</div>'
            +'<div>16</div>'
            +'<div>17</div>'
            +'<div>18</div>'
            +'<div>19</div>'
            +'<div>20</div>'
            +'<div>21</div>'
            +'<div>22</div>'
            +'<div>23</div>'
            +'<div>24</div>'
            +'<div>25</div>'
            +'<div>26</div>'
            +'<div>27</div>'
            +'<div>28</div>'
            +'<div>29</div>'
            +'<div>30</div>'
            +'<div>31</div>'
            +'<div>32</div>'
            +'<div>33</div>'
            +'<div>34</div>'
            +'<div>35</div>'
            +'<div>36</div>'
            +'<div>37</div>'
            +'<div>38</div>'
            +'<div>39</div>'
            +'<div>40</div>'
            +'<div>41</div>'
            +'<div>42</div>'
            +'</div>'
            +'<div id="select-date-times">'
            +'<input id="select-date-hours" type="number" maxlength="2" min="0" placeholder="时"/>'
            +'<span>:</span>'
            +'<input id="select-date-minutes" type="number" maxlength="2" placeholder="分" />'
            +'<span>:</span>'
            +'<input id="select-date-seconds" type="number" maxlength="2" placeholder="秒"/>'
            +'<div id="select-date-now">现在</div>'
            +'<div id="select-date-confirm">确定</div>'
            +'</div>'
            +'<div id="select-date-sure-wrap">'
            +'<div id="select-date-sure">设置为新的时间</div>'
            +'</div>'
            +'</div>'
            ;
        $("body").append(time);
        $("#select-date").slideUp(0);
        $("#select-date").on("click",function(){
            event.stopPropagation();
        });
        SelectTimeBind();
    }
    //弹出时间组件
    function TimeShow(data){
        if(data.type=='week'){
            weekk=true;
            $("#select-date-day").addClass("week");
        }else{
            $("#select-date-day").removeClass("week");
            weekk=false;
        }
        $("#select-date").attr("tar",data.that);
        if(data.multiselect){
            multiselect = 1;
        }else{
            multiselect = 0;
        }
        if(data.type == "second"){
            $("#select-date-sure-wrap").css("display","none");
            $("#select-date-times").css("display","flex");
        }else{
            $("#select-date-times").css("display","none");
            $("#select-date-sure-wrap").css("display","block");
        }
        event.stopPropagation();
        if(data.that.attr("time") == "active"){
            $("#select-date").slideUp(0).removeClass("active");
            data.that.attr("time","");
            if(data.mu1&&data.mu2){
                data.mu1.attr("time","");
                data.mu2.attr("time","");
            }
        }else{
            $("[time=active]").attr("time","");
            $("[time=mu1]").attr("time","");
            $("[time=mu2]").attr("time","");
            data.that.attr("time","active");
            if(data.mu1&&data.mu2){
                data.mu1.attr("time","mu1");
                data.mu2.attr("time","mu2");
            }
            var left,top;
            if(data.position == "bottom"){
                left = data.that.offset().left-(302-data.that.width())/2;
                top = data.that.offset().top+data.that.outerHeight();
            }else if(data.position =="left"){
                left =data.that.offset().left-302;
                top = data.that.offset().top;
            }else if(data.position =="right"){
                left = data.that.offset().left+data.that.outerWidth();
                top = data.that.offset().top;
            }
            $("#select-date").css({"left":left,"top":top}).slideDown(0).addClass("active");
            if(data.st&&data.et){
                if(data.multiselect){
                    multitime[0] = data.st;
                    multitime[1] = data.et;
                    SelectTime(data.et.split("/")[0],data.et.split("/")[1],data.et.split("/")[2]);
                }else if (data.type =='week'){
                    weeks[0] = data.st;
                    weeks[1] = data.et;
                    SelectTime(data.et.split("/")[0],data.et.split("/")[1],data.et.split("/")[2]);
                }
            }else{
                if(data.y && data.m && data.d){
                    timeselect = data.y+"/"+data.m+"/"+data.d
                    if(data.limit){
                        if(data.h && data.n && data.s){
                            SelectTime(data.y,data.m,data.d,data.h,data.n,data.s,data.limit)
                        }else{
                            SelectTime(data.y,data.m,data.d,'','','',data.limit)
                        }
                    }else{
                        if(data.h && data.n && data.s){
                            SelectTime(data.y,data.m,data.d,data.h,data.n,data.s)
                        }else{
                            SelectTime(data.y,data.m,data.d)
                        }
                    }
                }else{
                    if(data.type == "second"){
                        SelectNow(false);
                    }else if(data.type !='week'){
                        SelectNow(true);
                    }
                }
            }

        }
    }
    //选择时间
    function SelectTime(y,m,d,h,n,s,limit) {
        if(limit){
            var starty = parseInt(limit.starttime.split("/")[0]);
            var startm = parseInt(limit.starttime.split("/")[1]);
            var startd = parseInt(limit.starttime.split("/")[2]);
            var endy =   parseInt(limit.endtime.split("/")[0]);
            var endm =   parseInt(limit.endtime.split("/")[1]);
            var endd =   parseInt(limit.endtime.split("/")[2]);
        }
        limittime=limit;
        y = parseInt(y);
        m = parseInt(m);
        d = parseInt(d);
        if(h&&n&&s){
            $("#select-date-hours").val(h);
            if(n<10){
                $("#select-date-minutes").val(+n);
            }else{
                $("#select-date-minutes").val(n);
            }
            if(s<10){
                $("#select-date-seconds").val(s);
            }else{
                $("#select-date-seconds").val(s);
            }
        }
        var r;
        //判断闰年
        if (y % 100 == 0) {
            if (y % 400 == 0) {
                r = true;
            } else {
                r = false;
            }
        } else {
            if (y % 4 == 0) {
                r = true;
            } else {
                r = false;
            }
        }

        $("#select-date-year").html(y);
        if (m < 10) {
            $("#select-date-month").html("0" + m);
        } else {
            $("#select-date-month").html(m);
        }

        var date = new Date(y, m - 1, 1);
        //获取星期
        var week = date.getDay();
        //获取当月天数
        var length = getDayNum(m, r);
        var ps = $("#select-date-day>div");
        if (d) {
            $("#select-date-day>div.active").removeClass("active");
            ps.eq(d + week - 2).addClass("active")
            if(weekk){
                weeksindex[0] = d+week-8;
                weeksindex[1] = d+week-2;
            }
        } else {
            ps.removeClass("active")
        }
        //渲染内容
        for (let i = week, j = 1; i < length + week + 1; i++) {
            ps.eq(i - 1).html(j);
            ps.eq(i - 1).removeClass("pre next no select").addClass("act");
            if(y<starty ||y>endy){
                ps.eq(i-1).addClass("no");
            }else{
                if(starty == endy){
                    if(m<startm ||m>endm){
                        ps.eq(i-1).addClass("no");
                    }else{
                        if(endy ==starty){
                            if(endm == startm){
                                if(i<startd+week||i>endd+week){
                                    ps.eq(i-1).addClass("no");
                                }
                            }else{
                                if(m == endm){
                                    if(i>endd+week){
                                        ps.eq(i-1).addClass("no");
                                    }
                                }else if(m == startm){
                                    if(i<startd+week){
                                        ps.eq(i-1).addClass("no");
                                    }
                                }
                            }
                        }else{
                            if(y ==endy){
                                if(m == endm){
                                    if(i>endd+week){
                                        ps.eq(i-1).addClass("no");
                                    }
                                }
                            }else if(y ==starty){
                                if(m == startm){
                                    if(i<startd+week){
                                        ps.eq(i-1).addClass("no");
                                    }
                                }
                            }
                        }
                    }
                }else{
                    if(y==starty){
                        if(m==startm){
                            if(i<startd+week){
                                ps.eq(i-1).addClass("no");
                            }
                        }
                    }else if(y==endy){
                        if(m ==endm){
                            if(i>endd+week){
                                ps.eq(i-1).addClass("no");
                            }
                        }
                    }
                }
            }
            j++;
        }
        for (let i = week-1, j = getDayNum(m - 1, r); i > 0; i--) {
            ps.eq(i - 1).html(j);
            ps.eq(i - 1).removeClass("act no select").addClass("pre");
            if(limit){
                if(y<starty||y>endy){
                    ps.eq(i-1).addClass("no");
                }else{
                    if(starty == endy){
                        if(m<startm ||m>endm){
                            ps.eq(i-1).addClass("no");
                        }else{
                            if(endy == starty){
                                if(endm == startm){
                                    ps.eq(i-1).addClass("no");
                                }else{
                                    if(m == startm+1){
                                        if(j<startd){
                                            ps.eq(i-1).addClass("no");
                                        }
                                    }else{
                                        ps.eq(i-1).addClass("no");
                                    }
                                }
                            }else{
                                if(endy == y){
                                    if(startm ==12 &&endm ==1){
                                        if(j<startd){
                                            ps.eq(i-1).addClass("no");
                                        }
                                    }
                                }else if(starty == y){
                                    if(startm == m){
                                        ps.eq(i-1).addClass("no");
                                    }
                                }
                            }
                        }
                    }else{
                        if(y ==starty){
                            if(m ==startm){
                                ps.eq(i-1).addClass("no");
                            }else if(m == startm+1){
                                if(j<startd){
                                    ps.eq(i-1).addClass("no");
                                }
                            }
                        }else if(y ==endy){
                            if(m == 1){
                                if(j<startd){
                                    ps.eq(i-1).addClass("no");
                                }
                            }
                        }
                    }

                }
            }
            j--;

        }
        for (let i = length + week, j = 1; i <= 42; i++) {
            ps.eq(i - 1).html(j);
            ps.eq(i - 1).removeClass("act no select").addClass("next");
            if(limit){
                if(y>endy ||y<starty){
                    ps.eq(i-1).addClass("no");
                }else{
                    if(starty ==endy){
                        if(m>endm ||m<startm){
                            ps.eq(i-1).addClass("no");
                        }else{
                            if(endy == starty){
                                if(endm == startm){
                                    ps.eq(i-1).addClass("no");
                                }else{
                                    if(endm == m){
                                        ps.eq(i-1).addClass("no");
                                    }else if(startm == m){
                                        if(j>endd){
                                            ps.eq(i-1).addClass("no");
                                        }
                                    }
                                }
                            }else{
                                if(endy == y){
                                    if(endm == m){
                                        ps.eq(i-1).addClass("no");
                                    }
                                }else if(starty == y){
                                    if(startm ==12 &&endm ==1){
                                        if(j>endd){
                                            ps.eq(i-1).addClass("no");
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if(y == starty){
                            if(m == 12){
                                if(j>endd){
                                    ps.eq(i-1).addClass("no");
                                }
                            }
                        }else if(y ==endy){
                            if(m ==endm){
                                ps.eq(i-1).addClass("no");
                            }else if(m==endm-1){
                                if(j>endd){
                                    ps.eq(i-1).addClass("no");
                                }
                            }
                        }
                    }

                }
            }
            j++;
        }
        $("#select-date-day>div.act").unbind("click").click(SelectDay);
        //点击下个月的日期
        $("#select-date-day>div.next").unbind("click").click(function(){
            if(!weekk){
                if(!$(this).hasClass("no")){
                    var day =$(this).html();
                    var year = parseInt($("#select-date-year").html());
                    var month;
                    if($("#select-date-month").html()<12){
                        month = parseInt($("#select-date-month").html())+1;
                    }else{
                        month = 1;
                        year++;
                    }
                    if(day<10){
                        day ='0'+day;
                    }
                    //SelectTime(year,month,day,'','','',limit);
                    var k;
                    var time = year+"/"+month+"/"+day;
                    if(!multiselect){
                        $("#select-date-day .active").removeClass("active");
                        timeselect = time;
                    }else{
                        k = true;
                        if(multitime.length<2){
                            multitime.push(time);
                        }else{
                            if(time != multitime[0] && time!=multitime[1]){
                                if(multitime[0]>multitime[1]){
                                    if(time>multitime[0]){
                                        $("#select-date-day .active").eq(1).removeClass("active");
                                        multitime[0] = time;
                                    }else if(time<multitime[1]){
                                        $("#select-date-day .active").eq(0).removeClass("active");
                                        multitime[1] = time;
                                    }else{
                                        $("#select-date-day .active").eq(0).removeClass("active");
                                        multitime[1] = time;
                                    }
                                }else{
                                    if(time>multitime[1]){
                                        $("#select-date-day .active").eq(1).removeClass("active");
                                        multitime[1] = time;
                                    }else if(time<multitime[0]){
                                        $("#select-date-day .active").eq(0).removeClass("active");
                                        multitime[0] = time;
                                    }else{
                                        $("#select-date-day .active").eq(0).removeClass("active");
                                        multitime[0] = time;
                                    }
                                }

                            }else{
                                if(time == multitime[0]){
                                    multitime.splice(0,1);
                                }else{
                                    multitime.splice(1,1);
                                }
                                $(this).removeClass("active");
                            }
                            if(multitime.length==2){
                                let m = parseInt($("#select-date-month").html());
                                k = false;
                                for(let i=0;i<multitime.length;i++){
                                    if(parseInt(multitime[i].split("/")[1]) == m){
                                        k=true;
                                    }
                                }
                            }

                        }
                        MultiTimeRender();
                    }
                    if(!k){
                        SelectTime(year,month,day,'','','',limit);
                        MultiTimeRender();
                    }
                    SelectRefresh();
                }
            }else{
                var index = $(this).index();
                var stindex = Math.floor(index/7)*7;
                var etindex = stindex +6;
                var sd = $("#select-date-day>div").eq(stindex).html();
                if(sd<10){
                    sd = "0"+sd;
                }
                var ed = $("#select-date-day>div").eq(etindex).html();
                if(ed<10){
                    ed = "0"+ed;
                }
                if($("#select-date-day>div").eq(stindex).hasClass("pre")){
                    let y,m;
                    if($("#select-date-month").html()==1){
                        y = parseInt($("#select-date-year").html())-1;
                        m = 12;
                    }else{
                        y = $("#select-date-year").html();
                        m = parseInt($("#select-date-month").html())-1;
                        if(m<10){
                            m = '0'+m
                        }
                    }
                    weeks[0] = y+"/"+m+"/"+sd;
                }else{
                    weeks[0]= $("#select-date-year").html()+"/"+$("#select-date-month").html()+"/"+sd;
                }
                if($("#select-date-day>div").eq(etindex).hasClass("next")){
                    let y,m;
                    if($("#select-date-month").html()==12){
                        y = parseInt($("#select-date-year").html())+1;
                        m = 1;
                    }else{
                        y = $("#select-date-year").html();
                        m = parseInt($("#select-date-month").html())+1;
                        if(m<10){
                            m = '0'+m
                        }
                    }
                    weeks[1] = y+"/"+m+"/"+ed;
                }else{
                    weeks[1]= $("#select-date-year").html()+"/"+$("#select-date-month").html()+"/"+ed;
                }
                weeksindex[0]=stindex;
                weeksindex[1]=etindex;
                SelectRefresh();
                MultiTimeRender();
            }

        });
        //点击上个月的日期
        $("#select-date-day>div.pre").unbind("click").click(function(){
            if(!weekk){
                if(!$(this).hasClass("no")){
                    var day =$(this).html();
                    var year = parseInt($("#select-date-year").html());
                    var month;
                    if($("#select-date-month").html()>1){
                        month = parseInt($("#select-date-month").html())-1;
                    }else{
                        month =12;
                        year--;
                    }
                    if(day<10){
                        day ='0'+day;
                    }
                    var k;

                    var time = year+"/"+month+"/"+day;
                    if(!multiselect){
                        $("#select-date-day .active").removeClass("active");
                        timeselect = time;
                    }else{
                        k = true;
                        if(multitime.length<2){
                            multitime.push(time);
                        }else{
                            if(time != multitime[0] && time!=multitime[1]){
                                if(multitime[0]>multitime[1]){
                                    if(time>multitime[0]){
                                        $("#select-date-day .active").eq(1).removeClass("active");
                                        multitime[0] = time;
                                    }else if(time<multitime[1]){
                                        $("#select-date-day .active").eq(0).removeClass("active");
                                        multitime[1] = time;
                                    }else{
                                        $("#select-date-day .active").eq(0).removeClass("active");
                                        multitime[1] = time;
                                    }
                                }else{
                                    if(time>multitime[1]){
                                        $("#select-date-day .active").eq(1).removeClass("active");
                                        multitime[1] = time;
                                    }else if(time<multitime[0]){
                                        $("#select-date-day .active").eq(0).removeClass("active");
                                        multitime[0] = time;
                                    }else{
                                        $("#select-date-day .active").eq(0).removeClass("active");
                                        multitime[0] = time;
                                    }
                                }

                            }else{
                                if(time == multitime[0]){
                                    multitime.splice(0,1);
                                }else{
                                    multitime.splice(1,1);
                                }
                            }
                            if(multitime.length==2){
                                let m = parseInt($("#select-date-month").html());
                                k = false;
                                for(let i=0;i<multitime.length;i++){
                                    if(parseInt(multitime[i].split("/")[1]) == m){
                                        k=true;
                                    }
                                }
                            }

                        }
                        MultiTimeRender();
                    }
                    if(!k){
                        SelectTime(year,month,day,'','','',limit);
                        MultiTimeRender();
                    }
                    SelectRefresh();
                }
            }else{
                var index = $(this).index();
                var stindex = Math.floor(index/7)*7;
                var etindex = stindex +6;
                var sd = $("#select-date-day>div").eq(stindex).html();
                if(sd<10){
                    sd = "0"+sd;
                }
                var ed = $("#select-date-day>div").eq(etindex).html();
                if(ed<10){
                    ed = "0"+ed;
                }
                if($("#select-date-day>div").eq(stindex).hasClass("pre")){
                    let y,m;
                    if($("#select-date-month").html()==1){
                        y = parseInt($("#select-date-year").html())-1;
                        m = 12;
                    }else{
                        y = $("#select-date-year").html();
                        m = parseInt($("#select-date-month").html())-1;
                        if(m<10){
                            m = '0'+m
                        }
                    }
                    weeks[0] = y+"/"+m+"/"+sd;
                }else{
                    weeks[0]= $("#select-date-year").html()+"/"+$("#select-date-month").html()+"/"+sd;
                }
                if($("#select-date-day>div").eq(etindex).hasClass("next")){
                    let y,m;
                    if($("#select-date-month").html()==12){
                        y = parseInt($("#select-date-year").html())+1;
                        m = 1;
                    }else{
                        y = $("#select-date-year").html();
                        m = parseInt($("#select-date-month").html())+1;
                        if(m<10){
                            m = '0'+m
                        }
                    }
                    weeks[1] = y+"/"+m+"/"+ed;
                }else{
                    weeks[1]= $("#select-date-year").html()+"/"+$("#select-date-month").html()+"/"+ed;
                }
                weeksindex[0]=stindex;
                weeksindex[1]=etindex;
                SelectRefresh();
                MultiTimeRender();
            }
        });
        MultiTimeRender();
        SelectRefresh();
    }
    //选择时间事件绑定
    function SelectTimeBind(){
        $("#select-date-pre-year").on("click", function () {
            if(limittime){
                var starty = parseInt(limittime.starttime.split("/")[0]);
                if(parseInt($("#select-date-year").html()) - 1>=starty){
                    SelectTime(parseInt($("#select-date-year").html()) - 1, $("#select-date-month").html(),'','','','',limittime)
                }
            } else{
                SelectTime(parseInt($("#select-date-year").html()) - 1, $("#select-date-month").html())
            }
            MultiTimeRender();
            SelectRefresh();
        });
        $("#select-date-pre-month").on("click", function () {
            var month = $("#select-date-month").html() - 1;
            var year = $("#select-date-year").html();
            if (month == 0) {
                month = 12;
                year--;
            }
            if(limittime){
                var startm = parseInt(limittime.starttime.split("/")[1]);
                var starty = parseInt(limittime.starttime.split("/")[0]);
                if(year>=starty){
                    if(month>=startm){
                        SelectTime(year,month,'','','','',limittime)
                    }
                }
            }else{
                SelectTime(year, month)
            }
            MultiTimeRender();
            SelectRefresh();

        });
        $("#select-date-next-year").on("click", function () {
            if(limittime){
                var endy = parseInt(limittime.endtime.split("/")[0]);
                if(parseInt($("#select-date-year").html()) + 1<=endy){
                    SelectTime(parseInt($("#select-date-year").html()) + 1, $("#select-date-month").html(),'','','','',limittime)
                }
            } else{
                SelectTime(parseInt($("#select-date-year").html()) + 1, $("#select-date-month").html())
            }
            MultiTimeRender();
            SelectRefresh();
        });
        $("#select-date-next-month").on("click", function () {
            var month = parseInt($("#select-date-month").html()) + 1;
            var year = $("#select-date-year").html();
            if (month == 13) {
                month = 1;
                year++;
            }
            if(limittime){
                var endy =parseInt(limittime.endtime.split("/")[0]);
                var endm =   parseInt(limittime.endtime.split("/")[1]);
                if(year<=endy){
                    if(month<=endm){
                        SelectTime(year,month,'','','','',limittime)
                    }
                }
            }else{
                SelectTime(year, month)
            }
            MultiTimeRender();
            SelectRefresh();
        });
        $("#select-date-now").on("click",function(){
            if($("#select-date-times").css("display") == "none"){
                SelectNow(true)
            }else{
                SelectNow(false)
            }

        });
        $("#select-date-confirm").on("click",GetTime);
        $("#select-date-sure").on("click",GetTime);
        $("#select-date-times>input").on("input",function(){
            if($(this).attr("id") == "select-date-hours"){
                if($(this).val()>23){
                    $(this).val(23)
                }else if($(this).val()<0){
                    $(this).val(0);
                }
            }else{
                if($(this).val()>60){
                    $(this).val(60)
                }else if($(this).val()<0){
                    $(this).val(0);
                }
            }
            $(this).val(Math.ceil($(this).val()));
        });
        $("#select-date-day>div").hover(function(){
            if(weekk){
                var index = $(this).index();
                var stindex = Math.floor(index/7)*7;
                var etindex = stindex +6;
                for(var i=stindex;i<etindex;i++){
                    $("#select-date-day>div").eq(i).addClass("select")
                }
                $("#select-date-day>div").eq(stindex).addClass("active");
                $("#select-date-day>div").eq(etindex).addClass("active");
            }
        },function(){
            if(weekk){
                var index = $(this).index();
                var stindex = Math.floor(index/7)*7;
                var etindex = stindex +6;
                if(parseInt($("#select-date-day>div").eq(stindex).html())!=parseInt(weeks[0].split("/")[2]) || parseInt($("#select-date-day>div").eq(etindex).html())!=parseInt(weeks[1].split("/")[2])){
                    for(var i=stindex;i<etindex;i++){
                        $("#select-date-day>div").eq(i).removeClass("select")
                    }
                    $("#select-date-day>div").eq(stindex).removeClass("active");
                    $("#select-date-day>div").eq(etindex).removeClass("active");
                }
            }
        })
    }
    //点击选择日期
    function SelectDay(limit){
        if(!weekk){
            if(!$(this).hasClass("no")){
                var day;
                if(parseInt($(this).html())<10){
                    day = '0'+$(this).html();
                }else{
                    day = $(this).html();
                }
                var time = $("#select-date-year").html()+"/"+$("#select-date-month").html()+"/"+day;
                if(!multiselect){
                    $("#select-date-day .active").removeClass("active");
                    $(this).addClass("active");
                    timeselect = time;
                }else{
                    if(multitime.length<2){
                        multitime.push(time);
                    }else{
                        if(time != multitime[0] && time!=multitime[1]){
                            if(multitime[0]>multitime[1]){
                                if(time>multitime[0]){
                                    $("#select-date-day .active").eq(1).removeClass("active");
                                    multitime[0] = time;
                                }else{
                                    if($("#select-date-day .active").length == 2 || multitime[1].split("/")[1] != multitime[0].split("/")[1]){
                                        if(multitime[0].split("/")[1] != time.split("/")[1]){
                                            $("#select-date-day .active").eq(0).removeClass("active");
                                        }
                                    }
                                    multitime[1] = time;
                                }
                            }else{
                                if(time>multitime[1]){
                                    $("#select-date-day .active").eq(1).removeClass("active");
                                    multitime[1] = time;
                                }else{
                                    if($("#select-date-day .active").length == 2 || multitime[1].split("/")[1] != multitime[0].split("/")[1]){
                                        if(multitime[1].split("/")[1] != time.split("/")[1]){
                                            $("#select-date-day .active").eq(0).removeClass("active");
                                        }
                                    }
                                    multitime[0] = time;
                                }
                            }
                        }else{
                            if(time == multitime[0]){
                                multitime.splice(0,1);
                            }else{
                                multitime.splice(1,1);
                            }
                        }

                    }
                    SelectRefresh();
                    MultiTimeRender();
                }

            }
        }else{
            var index = $(this).index();
            var stindex = Math.floor(index/7)*7;
            var etindex = stindex +6;
            var sd = $("#select-date-day>div").eq(stindex).html();
            if(sd<10){
                sd = "0"+sd;
            }
            var ed = $("#select-date-day>div").eq(etindex).html();
            if(ed<10){
                ed = "0"+ed;
            }
            if($("#select-date-day>div").eq(stindex).hasClass("pre")){
                let y,m;
                if($("#select-date-month").html()==1){
                    y = parseInt($("#select-date-year").html())-1;
                    m = 12;
                }else{
                    y = $("#select-date-year").html();
                    m = parseInt($("#select-date-month").html())-1;
                    if(m<10){
                        m = '0'+m
                    }
                }
                weeks[0] = y+"/"+m+"/"+sd;
            }else{
                weeks[0]= $("#select-date-year").html()+"/"+$("#select-date-month").html()+"/"+sd;
            }
            if($("#select-date-day>div").eq(etindex).hasClass("next")){
                let y,m;
                if($("#select-date-month").html()==12){
                    y = parseInt($("#select-date-year").html())+1;
                    m = 1;
                }else{
                    y = $("#select-date-year").html();
                    m = parseInt($("#select-date-month").html())+1;
                    if(m<10){
                        m = '0'+m
                    }
                }
                weeks[1] = y+"/"+m+"/"+ed;
            }else{
                weeks[1]= $("#select-date-year").html()+"/"+$("#select-date-month").html()+"/"+ed;
            }
            weeksindex[0]=stindex;
            weeksindex[1]=etindex;
            SelectRefresh();
            MultiTimeRender();
        }
    }

    function SelectNow(e){
        var d = new Date();
        var day,month;
        if(d.getDate()<10){
            day='0'+d.getDate()
        }else{
            day = d.getDate();
        }
        if(d.getMonth()<9){
            month = '0'+parseInt(d.getMonth()+1)
        }else{
            month = d.getMonth()+1;
        }
        var time = d.getFullYear()+"/"+month+"/"+day;
        timeselect = time;
        if(e){
            SelectTime(d.getFullYear(), month, day);
        }else{
            SelectTime(d.getFullYear(), month, day,d.getHours(),d.getMinutes(),d.getSeconds());
        }
        if(multiselect){
            if(multitime.length<2){
                multitime.push(time)
            }
        }else{
            timeselect = time;
        }
    }
    //确认时间
    function GetTime(){

        if(weekk){
            weeks.sort();
            $("[time=mu1]").html(weeks[0]);
            $("[time=mu2]").html(weeks[1]);
            $("[time=active]").attr("time","");
            timeselect = "";
            $("#select-date").slideUp(0).removeClass("active");
        }else{
            if(!multiselect){
                var time = {
                    year:timeselect.split("/")[0],
                    month:timeselect.split("/")[1],
                    day:timeselect.split("/")[2],
                    h:$("#select-date-hours").val(),
                    m:$("#select-date-minutes").val(),
                    s:$("#select-date-seconds").val()
                };

                if(time.h&&time.m&&time.s){
                    if($("[time=active]").is("input")){
                        $("[time=active]").val(time.year+"/"+time.month+"/"+time.day+" "+time.h+":"+time.m+":"+time.s);
                        $("[time=active]").focus();
                        //console.log($("#select-date").attr("tar"))
                        //$("#select-date").attr("tar").click();
                    }else{
                        $("[time=active]").html(time.year+"/"+time.month+"/"+time.day+" "+time.h+":"+time.m+":"+time.s);
                    }
                    $("[time=active]").attr({"y":time.year,'m':time.month,'d':time.day,'h':time.h,'n':time.m,'s':time.s});
                }else{
                    if($("[time=active]").is("input")){
                        $("[time=active]").val(time.year+"/"+time.month+"/"+time.day);
                        $("[time=active]").focus();
                    }else{
                        $("[time=active]").html(time.year+"/"+time.month+"/"+time.day);
                    }
                    $("[time=active]").attr({"y":time.year,'m':time.month,'d':time.day});
                }

            }else if(multiselect){
                console.log(multitime)
                if(multitime.length==1){
                    $("[time=mu1]").html(multitime[0]);
                    $("[time=mu2]").html(multitime[0]);
                }else{
                    multitime.sort();
                    $("[time=mu1]").html(multitime[0]);
                    $("[time=mu2]").html(multitime[1]);
                }
            }
            $("[time=active]").attr("time","");
            timeselect = "";
            $("#select-date").slideUp(0).removeClass("active");
        }
    }
    //获取月份天数
    function getDayNum(m, r) {
        if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 0||m==12) {
            return 31;
        } else if (m == 2) {
            if (r) {
                return 29;
            } else {
                return 28;
            }
        } else {
            return 30;
        }
    }

    function MultiTimeRender(){
        var starttime,endtime,y,m,sy,sm,sd,ey,em,ed;
        y = parseInt($("#select-date-year").html());
        m = parseInt($("#select-date-month").html());
        if(weekk){
            $("#select-date-day>div").removeClass("select");
            for(var i =weeksindex[0];i<weeksindex[1];i++){
                $("#select-date-day>div").eq(i).addClass("select");
            }
        }else{
            if(multiselect){
                if(multitime.length ==2){
                    if(multitime[0]>multitime[1]){
                        starttime = multitime[1];
                        endtime = multitime[0];
                    }else{
                        starttime = multitime[0];
                        endtime = multitime[1];
                    }

                    sy = parseInt(starttime.split("/")[0]);
                    sm = parseInt(starttime.split("/")[1]);
                    sd = parseInt(starttime.split("/")[2]);
                    ey = parseInt(endtime.split("/")[0]);
                    em = parseInt(endtime.split("/")[1]);
                    ed = parseInt(endtime.split("/")[2]);
                    var acdays = $("#select-date-day .act");
                    var predays = $("#select-date-day .pre");
                    var nextdays = $("#select-date-day .next");
                    var alldays = $("#select-date-day>div");
                    var st = sy*12+sm;
                    var et = ey*12+em;
                    var now = y*12+m;
                    if(now <=st){
                        predays.removeClass("select")
                    }else if( now >st){
                        if(now<=et+1){
                            if(now == st+1){
                                if(st == et){
                                    for(let i =0;i<predays.length;i++){
                                        if(parseInt(predays.eq(i).html())>sd && parseInt(predays.eq(i).html())<ed){
                                            predays.eq(i).addClass("select");
                                        }else{
                                            predays.eq(i).removeClass("select");
                                        }
                                    }
                                }else{
                                    for(let i =0;i<predays.length;i++){
                                        if(parseInt(predays.eq(i).html())>sd){
                                            predays.eq(i).addClass("select");
                                        }else{
                                            predays.eq(i).removeClass("select");
                                        }
                                    }
                                }
                            }else if(now <et+1 && now>st+1){
                                predays.addClass("select")
                            }else if(now == et+1){
                                for(let i =0;i<predays.length;i++){
                                    if(parseInt(predays.eq(i).html())<ed){
                                        predays.eq(i).addClass("select");
                                    }else{
                                        predays.eq(i).removeClass("select");
                                    }
                                }
                            }
                        }else{
                            predays.removeClass("select")
                        }
                    }

                    if(now >=et){
                        nextdays.removeClass("select")
                    }else if( now <et){
                        if(now>=st-1){
                            if(now == et-1){
                                if(st == et){
                                    for(let i =0;i<nextdays.length;i++){
                                        if(parseInt(nextdays.eq(i).html())>sd && parseInt(nextdays.eq(i).html())<ed){
                                            nextdays.eq(i).addClass("select");
                                        }else{
                                            nextdays.eq(i).removeClass("select");
                                        }
                                    }
                                }else{
                                    for(let i =0;i<nextdays.length;i++){
                                        if(parseInt(nextdays.eq(i).html())<ed){
                                            nextdays.eq(i).addClass("select");
                                        }else{
                                            nextdays.eq(i).removeClass("select");
                                        }
                                    }
                                }
                            }else if(now <et-1 && now>st-1){
                                nextdays.addClass("select")
                            }else if(now == st-1){
                                for(let i =0;i<nextdays.length;i++){
                                    if(parseInt(nextdays.eq(i).html())>sd){
                                        nextdays.eq(i).addClass("select");
                                    }else{
                                        nextdays.eq(i).removeClass("select");
                                    }
                                }
                            }
                        }else{
                            nextdays.removeClass("select")
                        }
                    }


                    if(now<st ||now >et){
                        acdays.removeClass("select")
                    }else{
                        if(now ==st){
                            if(st ==et){
                                for(let i =0;i<acdays.length;i++){
                                    if(parseInt(acdays.eq(i).html())>sd && parseInt(acdays.eq(i).html())<ed){
                                        acdays.eq(i).addClass("select");
                                    }else{
                                        acdays.eq(i).removeClass("select");
                                    }
                                }
                            }else{
                                for(let i =0;i<acdays.length;i++){
                                    if(parseInt(acdays.eq(i).html())>sd){
                                        acdays.eq(i).addClass("select");
                                    }else{
                                        acdays.eq(i).removeClass("select");
                                    }
                                }
                            }
                        }else if(now>st &&now <et){
                            acdays.addClass("select");
                        }else if(now ==et){
                            for(let i =0;i<acdays.length;i++){
                                if(parseInt(acdays.eq(i).html())<ed){
                                    acdays.eq(i).addClass("select");
                                }else{
                                    acdays.eq(i).removeClass("select");
                                }
                            }
                        }
                    }
                }else{
                    var alldays = $("#select-date-day>div");
                    for(let i =0;i<alldays.length;i++){
                        alldays.eq(i).removeClass("select");
                    }
                }
            }

        }


    }

    function SelectRefresh(){
        if(weekk){
            $("#select-date-day>div").removeClass("active");
            $("#select-date-day>div").eq(weeksindex[0]).addClass("active");
            $("#select-date-day>div").eq(weeksindex[1]).addClass("active");
        }else {
            if(multiselect){
                $("#select-date-day>div").removeClass("active");
                var acdays = $("#select-date-day .act");
                var predays = $("#select-date-day .pre");
                var nextdays = $("#select-date-day .next");
                for(let i =0;i<multitime.length;i++){
                    var y = parseInt(multitime[i].split("/")[0]);
                    var m = parseInt(multitime[i].split("/")[1]);
                    var d = parseInt(multitime[i].split("/")[2]);
                    var ny = parseInt($("#select-date-year").html());
                    var nm = parseInt($("#select-date-month").html());
                    var now = ny*12+nm;
                    var ac = y*12+m;
                    if(ac == now-1){
                        for(let j =0;j<predays.length;j++){
                            if(parseInt(predays.eq(j).html()) == d){
                                predays.eq(j).addClass("active");
                            }
                        }
                    }else if (ac ==now){
                        for(let j =0;j<acdays.length;j++){
                            if(parseInt(acdays.eq(j).html()) == d){
                                acdays.eq(j).addClass("active");
                            }
                        }
                    }else if (ac == now+1){
                        for(let j =0;j<nextdays.length;j++){
                            if(parseInt(nextdays.eq(j).html()) == d){
                                nextdays.eq(j).addClass("active");
                            }
                        }

                    }
                    //if(y == ny){
                    //    if(m == nm){
                    //        var day = parseInt(d);
                    //        $("#select-date-day .act").eq(day-1).addClass("active");
                    //    }else if(m == parseInt(nm)-1){
                    //        let pres=$("#select-date-day .pre");
                    //        for(let j =0;j<pres.length;j++){
                    //            if(pres.eq(j).html() == d){
                    //                pres.eq(j).addClass("active");
                    //            }
                    //        }
                    //    }else if(m == parseInt(nm)+1){
                    //        let nexts=$("#select-date-day .next");
                    //        for(let j =0;j<nexts.length;j++){
                    //            if(parseInt(nexts.eq(j).html()) == parseInt(d)){
                    //                nexts.eq(j).addClass("active");
                    //            }
                    //        }
                    //    }
                    //}else if(y ==parseInt(ny) -1){
                    //    let pres=$("#select-date-day .pre");
                    //    for(let j =0;j<pres.length;j++){
                    //        if(pres.eq(j).html() == d){
                    //            pres.eq(j).addClass("active");
                    //        }
                    //    }
                    //}else if (y ==parseInt(ny)+1){
                    //    let nexts=$("#select-date-day .next");
                    //    for(let j =0;j<nexts.length;j++){
                    //        if(parseInt(nexts.eq(j).html()) == parseInt(d)){
                    //            nexts.eq(j).addClass("active");
                    //        }
                    //    }
                    //}
                }
            }else{
                if(timeselect.split("/")[0] == $("#select-date-year").html()){
                    if(timeselect.split("/")[1]== $("#select-date-month").html()){
                        var day = parseInt(timeselect.split("/")[2]);
                        $("#select-date-day .act").eq(day-1).addClass("active")
                    }
                }
            }
        }
    }