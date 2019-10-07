const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3030

var jsonParser = bodyParser.json()

app.post('/cheese', jsonParser, function(req, res) {
    let result = req.body
    result.age = 1000
    res.json(result)
    console.log(result)
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
})