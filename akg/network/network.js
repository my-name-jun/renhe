/**
 * Created by brave on 17/3/28.
 */

var config = require('../config/config');

var object = {
    post: function (interfaceName, data) {
        var deferred = Deferred();
        $.ajax({
            url: config.host + config.appName + "/" + interfaceName,
            type: 'post',
            timeout: 180000,
            data: data,
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (res, error) {
                deferred.reject(res);
            }
        });
        return deferred.promise
    },
    postFile: function (interfaceName, data) {
        var deferred = Deferred();
        // var url = config.backendUrl + interfaceName;
        var url = config.host + config.appName + "/" + interfaceName;
        $.ajax({
            url: url,
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: data,
            processData: false,
            contentType: false,
            timeout: 180000,
            complete: function () {
            }
        }).done(function (data) {
            alert("success")
        }).fail(function (data) {
            alert("error")
        });
        return deferred.promise
    },
    postFile2: function (interfaceName, data) {
        var deferred = Deferred();
        var url = config.backendUrl + interfaceName;
        // var url = config.host + config.appName + "/" + interfaceName;
        avalon.log(url)
        $.ajax({
            url: url,
            type: 'post',
            timeout: 180000,
            data: data,
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (res, error) {
                deferred.reject(res);
            }
        });
        return deferred.promise
    },


    receive_code: function (callback) {
        $.ajax({
            url:'/service/sendCode',
            method:'post',
            contentType: "application/json; charset=utf-8",
            dataType:"json",
        }).success(function (data) {
            callback(data);
            console.log(data);
        }).error(function (data) {
            console.log(data)
        });
    },

    send_form: function (f_data) {
        $.ajax({
            url:'/service/save',
            method:'post',
            contentType: "application/json; charset=utf-8",
            dataType:"json",
            data:JSON.stringify(f_data),
        }).success(function (data) {
            console.log(data);
        }).error(function (data) {
            console.log(data)
        });
    },
};


module.exports = object;