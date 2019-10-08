const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const jsonParser = bodyParser.json()

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

let updateDataInDb = (db, newData) => {
    let collection = db. collection('people')
    collection.updateOne({"name" : "Bob"}, { $set: newData }, (err, result) => {
        //updateOne() will create new one if the one you're trying to update doesn't exist
        console.log("Updated the document")
    })
}

app.put('/people', jsonParser, (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        console.log('Connected correctly to MongoDb')

        let db = client.db('axolotls')
        let newData = req.body // write something in the Postman to update with data
        updateDataInDb(db, newData)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})