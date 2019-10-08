var express = require('express')
var mysql = require('mysql')
var app = express()
var port = 3000

var connection = mysql.createConnection({
    host: '192.168.20.20',
    user: 'root',
    database: 'cats'
})

app.get('/breed', function(req, res) {
    connection.connect()

    connection.query('SELECT `breed` FROM `breed`;', function(error, results, fields) {
        res.json({data: results})
    })
})



app.listen(port, function () {
    console.log('hello')
})
