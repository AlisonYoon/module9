var express = require('express')
var mysql = require('mysql')
var exphbs = require('express-handlebars')
var app = express()
var port = 3000

var connection = mysql.createConnection({
    host: '192.168.20.20',
    user: 'root',
    database: 'academyPortal'
})

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/applicants', function(req, res) {
    connection.connect()
    connection.query('SELECT `name`, `email` FROM `applicants`;', function(error, results, fields) {
        //var breedList = res.json({data: results})
        res.render('home', {data: results})
    })
})



app.listen(port, function () {
    console.log('hello')
})
