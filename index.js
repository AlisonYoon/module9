const http = require('http')
const thingy = require('./test')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(function(req, res){
    res.statusCode = 200
    res.setHeader = ('Content-Type', 'text/plain')
    res.end(thingy.name)
})

server.listen(port, hostname, function(){
    console.log('Server running at http://' + hostname + ':' + port)
    console.log(thingy)
})