var mysql = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({

    host: '127.0.0.1',       //主机
    user: 'root',            //MySQL认证用户名
    password: 'yxxx2018',
    port: '3306',
    database: 'BlockChainMedicine'

});

//创建一个connection
connection.connect(function (err) {

    if (err) {

        console.log('[query] - :' + err);

        return;

    }

    console.log('[connection connect]  succeed!');

});

var express = require('express');
var app = express();

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('../'));

//监听端口为3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});