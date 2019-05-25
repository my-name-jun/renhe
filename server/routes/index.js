var express = require('express')
var router = express.Router()
var code = '4562'
/* GET home page. */
router.post('/service/save', function(req, res, next) {
  var dataToRes = {
    data: {},
    msg: '提交成功',
    statusCode: 1
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(dataToRes))
})
router.post('/service/sendCode', function(req, res, next) {
  var dataToRes = {
    data: { code: code },
    msg: '发送成功',
    statusCode: 1
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(dataToRes))
})

module.exports = router
