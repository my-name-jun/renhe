var commonService = require('../../lib/commonService');
var service = require('./service');


//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    nj16:require('./img/nj16.png'),
    nj15:require('./img/nj15.png'),
    nj17:require('./img/nj17.png'),
    nj14:require("./img/nj14.png"),
    qrcode:require("./img/qrcode.png"),
    a_point:require("./img/a_point.png"),
    u_point:require("./img/u_point.png"),
    step2:require("./img/step2.png"),
    step3:require("./img/step3.png"),
    step4:require("./img/step4.png"),


    //GEN_properties

    //endregion

    //region 主要数据

    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑

    receive:function()
    {
        $('#myModal').modal('show');
    },
    //region 组件逻辑

    button1:function(i)
    {
        if(i == 1)
        {
            $('#content1').css('display','none');
            $('#content2').css('display','block');
            $('#icon1').attr('src',vm.u_point);
            $('#icon2').attr('src',vm.a_point);
        }
        else if (i == 2)
        {
            $('#content1').css('display','block');
            $('#content2').css('display','none');
            $('#icon1').attr('src',vm.a_point);
            $('#icon2').attr('src',vm.u_point);
        }
        else if(i == 3)
        {
            $('#content2').css('display','none');
            $('#content3').css('display','block');
            $('#icon2').attr('src',vm.u_point);
            $('#icon3').attr('src',vm.a_point);
        }
        else if (i == 4)
        {
            $('#content2').css('display','block');
            $('#content3').css('display','none');
            $('#icon2').attr('src',vm.a_point);
            $('#icon3').attr('src',vm.u_point);
        }
        else if(i == 5)
        {
            $('#content3').css('display','none');
            $('#content4').css('display','block');
            $('#icon3').attr('src',vm.u_point);
            $('#icon4').attr('src',vm.a_point);
        }
        else if (i == 6)
        {
            $('#content3').css('display','block');
            $('#content4').css('display','none');
            $('#icon3').attr('src',vm.a_point);
            $('#icon4').attr('src',vm.u_point);
        }


    },


    //GEN_actions

    //endregion

    //region 校验逻辑

    //endregion

    //region 数据监听
    bindListeners: function () {
        $('#myModal').on('hidden.bs.modal',function () {
            $('#content1').css('display','block');
            $('#content2').css('display','none');
            $('#content3').css('display','none');
            $('#content4').css('display','none');
            $('#icon1').attr('src',vm.a_point);
            $('#icon2').attr('src',vm.u_point);
            $('#icon3').attr('src',vm.u_point);
            $('#icon4').attr('src',vm.u_point);
        })
        //GEN_listeners
    }


    //endregion 数据监听

});

vm.bindListeners();


//GEN_run
