const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 2019

const jsonParser = bodyParser.json()

const MongoClient = require('mongodb')
const url = 'mongodb://localhost:27017'

let insertIntoDb = (db, newItem, callback) => {
    let collection = db.collection('todolist')
    collection.insertOne(newItem, (err, result) => {
        console.log('inserted a new to-do item in the db')
        callbaack(result)
    })
}

//displays todo items
app.get('/todos', (req, res) => {
    res.send('all the to-do items')
})

//get individual todo item
app.get('/todos/:id', (req, res) => {
    res.send('this gets an individual to-do item')
})

//add todo items
app.post('/todos', jsonParser, function(req, res){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        console.log('Connected correctly to MongoDb')

        let db = client.db('axolotls')
        let newPerson = req.body
        insertIntoDb(db, newPerson, (result) => {
            res.json({recordsInserted: result.insertedCount})
        })
    })
})

//move todo items from <to do> to <done>
app.put('/todos/:id', jsonParser, function(req, res){
    let doneTodo = req.params
    doneTodo.doneItem = 'this one is done'
    res.json(doneTodo)
})

app.listen(port, function() {
    console.log(`To Do app listening on port ${port}`)
})