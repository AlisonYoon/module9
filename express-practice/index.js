const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello everyone!'))

app.get('/users?name=cuthbert', function(req, res){
    console.log(req.query)
})

app.get('/users/:id', (req, res) => console.log(req.params))


app.get('/axolotls', (req, res) => res.send('This is axolotls!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Getting data out of the request
//1. ex : /users?name=cuthbert
//req.query to access a JS object (which is cuthbert here)
//2. eg: /users/:id
//  req.params to access object of URL params (eg. {id: 5})