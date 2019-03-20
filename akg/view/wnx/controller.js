var commonService = require('../../lib/commonService');
var service = require('./service');
var networl = require('./../../network/network');


//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    people:3999,
    number:'5.50',
    count:60,
    code_w:'发送验证码',
    code:12,
    form_data:[],

    m1:require('./img/m1.png'),
    m2:require('./img/m2.png'),
    m3:require('./img/m3.png'),
    m4:require('./img/m4.png'),

    //GEN_properties

    //endregion

    //region 主要数据

    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑

    submit:function()
    {
        $('#myModal').modal('show');
    },
    if_code:function()
    {
        var phone = $('#phone').val();
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!myreg.test(phone))
        {
            alert("请输入正确的手机号码！");
        }
        else
        {
            $('#send').css('display','none');
            $('#down').css('display','inline-block');
            networl.receive_code(function (data) {
                vm.code = data.data.code;
            });
            var inter = setInterval(function () {
                vm.count = vm.count - 1;
                if (vm.count == 0)
                {
                    clearInterval(inter);
                    $('#send').css('display','inline-block');
                    $('#down').css('display','none');
                    vm.code_w = '重新发送'
                    vm.count = 60;
                }
            },1000);
        }
    },

    submit_form:function()
    {
        var name = $('#name').val();
        var phone = $('#phone').val();
        var code = $('#code').val();
        var time = $('#time').val();
        vm.form_data.push(name,phone,code,time);
        if (name != '')
        {
            if (code == vm.code)
            {
                networl.send_form(vm.form_data);
                alert("预约成功！");
                $('#send').css('display','inline-block');
                $('#down').css('display','none');
                $('#myModal').modal('hide');
                $('#name').val('');
                $('#phone').val('');
                $('#code').val('');
            }
            else
            {
                alert("验证码有误！");
            }
        }
        else
        {
            alert("请输入姓名！");
        }
    },
    //region 组件逻辑



    //GEN_actions

    //endregion

    //region 校验逻辑

    //endregion

    //region 数据监听
    bindListeners: function () {



        //GEN_listeners
    }


    //endregion 数据监听

});

vm.bindListeners();


//GEN_run
