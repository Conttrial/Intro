/**
 * Created by 5 on 2017/10/19.
 */

$(function(){
    $.ajax({                                      //===========================获取该用户提交过的bug列表
        url:"",
        type:"POST",
        data:{
            userid:"??",     //用户id
            token:""         //token
        },
        dataType:'json',
        success:function(data){
            main_right.lis_all = data.list;       //返回数据列表
        }
    })
});

var main_right = new Vue({
    el:"#main-right",
    data:{
        lis_all:[
            {
                img:"",
                described:"Swift 有类似 Python 的易用性，有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"1",
                module:["购买界面","购买下一步","产品信息区域"],
                times:3,
                level:2,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"2017/08/09 16:09:22",
                status:1,
                reply:{
                    "name":"李大钊",
                    "content":"哈哈哈哈哈哈哈哈哈哈哈"
                }
            },
            {
                img:"",
                described:"Swift 有类似 Python 的易用性，有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"1",
                module:["购买界面","购买下一步","产品信息区域"],
                times:3,
                level:2,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"2017/08/09 16:09:22",
                status:1,
                reply:{
                    "name":"李大钊",
                    "content":"哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈红红火火恍恍惚哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈红红火火恍恍惚哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈红红火火恍恍惚惚2333333333哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈红红火火吼吼吼吼哈哈哈哈哈哈"
                }
            },
            {
                img:"",
                described:"Swift 有类似 Python 的易用性，有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"1",
                module:["购买界面","购买下一步","产品信息区域"],
                times:3,
                level:2,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"2017/08/09 16:09:22",
                status:1,
                reply:{
                    "name":"李大钊",
                    "content":"哈哈哈哈哈哈哈哈哈哈哈"
                }
            },
            {
                img:["../../image/home_page_Bug信息收集管理_查看截图_弹出_img20171021.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            },
            {
                img:["https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94ef21bc9c82d158bf825eb3b00b19d5/0ff41bd5ad6eddc4143c13a939dbb6fd5366338c.jpg",             "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=2b14f3a7898ba61edfbb9b6f2709a53c/5243fbf2b21193132a5f0add6e380cd791238dbb.jpg"],
                described:"Swift 有类似 Python 的易用性，有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行有比较强行弥补了 Objective-C 的哪些不足？融合了哪些其他语言的优秀特性？将它和 C#相比各有",
                from:"2",
                module:["购买界面","购买下一步"],
                times:1,
                level:3,
                sub_time:"2017/07/08 16:00:00",
                solve_time:"",
                status:0,
                reply:{

                }
            }
        ],
        lis:[],                     //需要展现的订单
        nowpage:1,                  //现在显示的第几页
        showpages:100              //一页显示多少条
    },
    computed:{
        Pages:function(){
            return Math.ceil(this.lis_all.length/this.showpages)
        }
    },
    components:{
        "lis":{
            props:["to"],
            template:'<li :class="{active:to.reply.content}">'
                        +'<div class="content">'
                            +'<div>'
                                +'<div>'
                                    +'<div v-if="to.img" @click="ImageCheck">'
                                        +'<img src="../../image/link.png" alt=""/><h3>查看截图</h3>'
                                    +'</div>'
                                    +'{{to.described}}'
                                +'</div>'
                            +'</div>'
                            +'<div>'
                                +'<div v-if="to.from == 0">'
                                    +'<p>我家小黑</p>'
                                    +'<p>App</p>'
                                +'</div>'
                                +'<div v-else-if="to.from == 1">'
                                    +'<p>微信应用</p>'
                                +'</div>'
                                +'<div v-else-if="to.from == 2">'
                                    +'<p>后台</p>'
                                    +'<p>管理中心</p>'
                                +'</div>'
                            +'</div>'
                            +'<div>'
                                +'<p v-for="data in to.module">{{data}}</p>'
                            +'</div>'
                            +'<div>'
                                +'<div v-if="to.times == 0">'
                                    +'<p>只出现过一次</p>'
                                    +'<p>再未复现过</p>'
                                +'</div>'
                                +'<div v-else-if="to.times == 1">'
                                    +'<p>偶尔出现</p>'
                                    +'<p>未有发现规律</p>'
                                +'</div>'
                                +'<div v-else-if="to.times == 2">'
                                    +'<p>一定规律会触发</p>'
                                    +'<p>100%发生</p>'
                                +'</div>'
                                +'<div v-else-if="to.times == 3">'
                                    +'<p>必定触发</p>'
                                +'</div>'
                            +'</div>'
                            +'<div>'
                                +'<div v-if="to.level == 0">'
                                    +'<p>没有影响</p>'
                                    +'<p>但是降低工作效率</p>'
                                +'</div>'
                                +'<div v-else-if="to.level == 1">'
                                    +'<p>影响正常工作</p>'
                                    +'<p>并且降低工作效率</p>'
                                +'</div>'
                                +'<div v-else-if="to.level == 2">'
                                    +'<p>无法正常工作</p>'
                                    +'<p>必须解决此bug</p>'
                                    +'<p>才能进行正常工作</p>'
                                +'</div>'
                                +'<div v-else-if="to.level == 3">'
                                    +'<p>无法正常工作</p>'
                                    +'<p>所有工作都因此停止</p>'
                                +'</div>'
                            +'</div>'
                            +'<div>'
                                +'<p>{{to.sub_time.split(" ")[0]}} {{to.sub_time.split(" ")[1]}} 提交</p>'
                            +'<div v-if="to.solve_time">'
                                +'<p>{{to.solve_time.split(" ")[0]}} {{to.solve_time.split(" ")[1]}} 解决</p>'
                            +'</div>'
                            +'</div>'
                            +'<div>'
                                +'<img v-if="to.status == 1" src="../../image/done-gou.png" alt=""/>'
                                +'<img v-else src="../../image/time.png" alt=""/>'
                                +'<p v-if="to.status == 1">已修复</p>'
                                +'<p v-else>待处理</p>'
                            +'</div>'
                        +'</div>'
                        +'<div class="reply" v-if="to.reply.name">'
                        +'<p>管理员：{{to.reply.name}} @回复:</p>'
                        +'<p>{{to.reply.content}}</p>'
                        +'</div>'
                    +'</li>',
            methods:{
                ImageCheck:function(){
                    $("#cover").addClass("active");
                    cover.imgs = this.to.img;
                    cover.now = 0;
                    cover.$nextTick(function(){
                        $("#cover .wrap .content img")[0].onload = function(){
                            cover.ImgWidth();
                        }
                    })
                }
            }
        }
    },
    methods:{
        GetData:function(){
            this.lis=[];
            for(let i = (this.nowpage-1)*this.showpages,j=0;i<this.nowpage*this.showpages && i<this.lis_all.length;i++){
                Vue.set(this.lis, j,this.lis_all[i]);
                j++;
            }
            //var S =setInterval(function(){
            //    var s =10
            //    $(window).scrollTop(0)
            //},s)
        },
        PageMenu:function(){
            $("#paging .menu").addClass("active");
            $("#paging .menu [data-page="+this.showpages+"]").addClass("active");
        },
        ChangeShowPages:function(){
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
        NowPage:function(){
            this.nowpage = parseInt($(event.target).html());
            this.GetData();
        },
        PrePage:function(){
            if(this.nowpage>1){
                this.nowpage--;
                this.GetData();
            }
        },
        NextPage:function(){
            if(this.nowpage<this.Pages){
                this.nowpage++;
                this.GetData();
            }
        },
        LastPage:function(){
            if(this.nowpage<this.Pages){
                this.nowpage = this.Pages;
                this.GetData();
            }
        },
        FirstPage:function(){
            if(this.nowpage>1){
                this.nowpage = 1;
                this.GetData();
            }
        }
    }
});

main_right.GetData();



var cover = new Vue({
    el:"#cover",
    data:{
        imgs:[],
        now:0
    },
    methods:{
        Next:function(){
            if($(event.target).hasClass("active")){
                var _this = this;
                this.now = this.now+1;
                this.$nextTick(function(){
                    $("#cover .wrap .content img")[0].onload = function(){
                        _this.ImgWidth();
                    }
                })
            }
        },
        Pre:function(){
            if($(event.target).hasClass("active")){
                var _this = this;
                this.now = this.now-1;
                this.$nextTick(function(){
                    $("#cover .wrap .content img")[0].onload = function(){
                        _this.ImgWidth();
                    }
                })
            }
        },
        Close:function(){
            this.$el.setAttribute("class","");
        },
        ImgWidth:function(){
            var imgwidth = $("#cover .wrap .content img").width();
            console.log(imgwidth)
            if(imgwidth>1020){
                $("#cover .wrap").width(imgwidth+60);
            }else{
                $("#cover .wrap").width(1020);
            }
        }
    }
});