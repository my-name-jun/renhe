webpackJsonp([6],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(54);
	__webpack_require__(56);




/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(avalon) {var commonService = __webpack_require__(24);
	var service = __webpack_require__(55);

	//GEN_dependences

	var vm = avalon.define({
	    $id: "vm",
	    name: '',
	    mobile: '',
	    gender: '',
	    address: '123123',

	    anyFuncti: function () {
	        var that = this;
	        var data = {
	            name: that.name,
	            mobile: that.mobile,
	            gender: that.gender,
	            address: that.address,
	        };
	        service.postToServer(data)
	    }
	});


	// $('#mobile_input').change(function () {
	//     var mo = $('#mobile_input').val().length;
	//     if (mo<=11){alert(mo)}
	//
	// })
	//
	// $('#submit').click( function () {
	//     var name = $('#name_input').val();
	//     var mobile = $('#mobile_input').val();
	//     var sex = $('#gender_select').val();
	//     var data={
	//         name:name,
	//         mobile:mobile,
	//         sex:sex,
	//     }
	//     network.post('data',data);
	// });


	//GEN_run

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	var service = {
	    interface: __webpack_require__(25),

	    postToServer: function (data) {
	        var that = this;
	        that.interface.post('tt', data)
	    },


	    //GEN_services
	};

	module.exports = service;

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});