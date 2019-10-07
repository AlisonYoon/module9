const http = require('http')
const pokemon = require('pokemon')
const Quote = require('inspirational-quotes')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(function(req, res){
    res.statusCode = 200
    res.setHeader = ('Content-Type', 'text/plain')
    // res.end(pokemon.random())
    res.end(Quote.getRandomQuote())
})

server.listen(port, hostname, function(){
    console.log('Server running at http://' + hostname + ':' + port)
})