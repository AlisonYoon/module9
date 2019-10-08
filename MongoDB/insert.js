const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const jsonParser = bodyParser.json()

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

var insertIntoDb = (db, newPerson, callback) => {
    let collection = db.collection('people')
    collection.insertOne(newPerson, (err, result) => {
        console.log('inserted a new person in the db')
        callback(result)
    })
}

// app.post('/people', jsonParser, (req, res) => {
//     MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
//         console.log('Connected correctly to MongoDb')
//
//         let db = client.db('axolotls')
//         let newPerson = req.body
//         insertIntoDb(db, newPerson, (result) => {
//             res.json({recordsInserted: result.insertedCount})
//         })
//     })
// })

let insertManyIntoDb = (db) => {
    let collection = db.collection('people')
    collection.insertMany([
        {"name" : "Piglet"},
        {"name" : "Pooh", "food" : "honey"}
    ], (err,result) => {
        console.log('inserted a new person in the db')
        console.log(result)
    })
}

app.post('/people', jsonParser, (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        console.log('Connected correctly to MongoDb')

        let db = client.db('axolotls')
        let newPerson = req.body
        insertManyIntoDb(db, newPerson, (result) => {
            res.json({recordsInserted: result.insertedCount})
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})