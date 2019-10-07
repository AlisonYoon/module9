const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const jsonParser = bodyParser.json()

//displays todo items
app.get('/todos', (req, res) => res.send('all the to-do items'))

//get individual todo item
app.get('/todos/:id', (req, res) => res.send('this gets an individual to-do item'))

//add todo items
app.post('/todos', jsonParser, function(req, res){
    let result = req.body
    result.todo = 'to-do item was added'
    res.json(result)
})

//move todo items from <to do> to <done>
app.put('/todos/:id', jsonParser, function(req, res){
    let doneTodo = req.body
    doneTodo.doneItem = 'this one is done'
    res.json(doneTodo)
})

app.listen(port, function() {
    console.log(`To Do app listening on port ${port}`)
})