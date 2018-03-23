/**
 * Created by 5 on 2017/12/2.
 */

var card = new Vue({
    el:"#card",
    data:{
        img:"../../image/tb_800_@210px.jpg",
        name:"陈南康",
        sex:"男",
        phone:13254671245,
        join_time:"2017/05/05",
        department:"产品研发/技术部",
        preid:"201603210001",
        worktime:"723天21小时",
        type:"普通用户",
        contactsname:"刘德华",
        contactsphone:"18542315561",
        address:"湖北省武汉市江岸区汉黄路十大家工业园一期213栋2楼武汉黑狗科技"
    }
});
$(function(){

})
var edit = new Vue({
    el:"#edit",
    data:{
        img:"",
        contactsname:"",
        contactsphone:"",
        nickname:"",
        password:"",
        npassword:"",
        cpassword:""
    }
})


$(function(){
    $("input[type=file]").unbind("change").change(function(){
            if(this.files.length>0){
                $(this).siblings("div").addClass("active");
                var reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                var that = $(this);
                reader.onload = function(){
                    edit.img =reader.result;
                }
            }
        }
    );
    $(".imgup .cover .close").unbind("click").on("click",function(){
        $(this).parent(".cover").removeClass("active").siblings("input").val('').siblings("img").css("background","transparent");
        edit.img ="";
    });

    $("#card .edit").on("click",function(){
        if(card.img){
            edit.img = card.img;
            edit.contactsname = card.contactsname;
            edit.contactsphone = card.contactsphone;
            $(".imgup .cover").addClass("active");
        }
    })
})