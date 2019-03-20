var commonService = require('../../lib/commonService');
var service = require('./service');
var network = require('./../../network/network');

//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    f_data:[],

    nj15:require("./img/nj15.png"),
    nj2:require("./img/nj2.png"),
    nj5:require("./img/nj5.png"),
    nj6:require("./img/nj6.png"),
    nj7:require("./img/nj7.png"),
    nj8:require("./img/nj8.png"),
    nj3:require("./img/nj3.png"),
    nj4:require("./img/nj4.png"),
    nj9:require("./img/nj9.png"),
    nj10:require("./img/nj10.png"),
    nj11:require("./img/nj11.png"),
    nj12:require("./img/nj12.png"),
    nj13:require("./img/nj13.png"),
    nj14:require("./img/nj14.png"),
    //region 组件数据

    //GEN_properties

    //endregion

    //region 主要数据

    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑

    submit_form:function()
    {
        var phone = $('#phone').val();
        var name = $('#name').val();
        var select = $('#select').val();
        vm.f_data.push(phone,name,select);
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!myreg.test(phone) || name == '')
        {
            alert("请输入正确的手机号码及姓名！");
        }
        else
        {
            network.send_form(vm.f_data);
            window.location.href = "success.html";
        }
    },
    scroll_top:function()
    {
      window.scrollTo(0,0);
    },

    //region 组件逻辑



    //GEN_actions

    //endregion

    //region 校验逻辑

    //endregion
    mymodol:function(){
        $('#myModal').modal('show');
    },
    //region 数据监听
    bindListeners: function () {

        window.addEventListener('scroll',function () {
           var scrolly = window.scrollY;
            if (scrolly > 400)
            {
                $('#submit').css({'position':'fixed','bottom':'0'});
            }
            else
            {
                $('#submit').css({'position':'absolute','bottom':'-100%'});
            }
        });
        //GEN_listeners
    }


    //endregion 数据监听

});

vm.bindListeners();

//GEN_run
