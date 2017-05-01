             //------------------------------------------------------------------------------------过滤函数
Vue.filter("money",function(value){
    return "￥"+value.toFixed(2);
})

             //------------------------------------------------------------------------------------组件
Vue.component("good",{
    props:["good"],
    template:'<div class="good"><img :src="good.src"><p>{{good.name}}</p></div>'
})
Vue.component("price",{
    props:["price"],
    template:"<div>{{price.price | money}}</div>"
})
Vue.component("number",{
    props:["number"],
    template:'<div class="number"><button v-on:click="numberChange(false)">-</button><input v-model="number.number"/><button v-on:click="numberChange(true)">+</button></button></div>',
    methods:{
        numberChange:function(control){
            if(control){
                this.number.number++;
            }else{
                if(this.number.number > 0){
                    this.number.number--;
                }
            }
        }
    }
})
Vue.component("total",{
    props:["total"],
    computed:{
        calTotal:function(){
            return this.total.price*this.total.number;
        }
    },
    template:'<div class="total">{{this.calTotal | money}}</div>'
})
Vue.component("goods",{
    props:["food"],
    template:'<li><good :good = food></good><price :price = food></price><number :number = food></number><total :total=food></total></li>'
})

new Vue({
    el:"#app",
    data:{
        list:[]
    },

    computed:{
        payTotal:function(){
            var e,sum=0;
            for(e in this.list){
                sum = this.list[e].price * this.list[e].number +sum;
            }
            return sum;
        }
    },
    mounted:function(){
        this.getData();
    },
    methods:{
        getData:function(){
            var _this = this;
            axios.get("data/data.json").then(function(res){
                _this.list = res.data.list;
            })
        }
    }

})


window.addEventListener("load",function(){
    document.getElementById("app").style.height = window.innerHeight +"px";
    document.getElementById("main").style.height = window.innerHeight
                                                    - document.getElementById("header").offsetHeight
                                                    -document.getElementById("footer").offsetHeight +"px";
})
window.addEventListener("resize",function(){
    document.getElementById("app").style.height = window.innerHeight +"px";
    document.getElementById("main").style.height = window.innerHeight
                                                    -document.getElementById("header").offsetHeight
                                                    -document.getElementById("footer").offsetHeight +"px";
});

