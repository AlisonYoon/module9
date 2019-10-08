const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, function(err, client) {
    console.log('Connected correctly to MongoDb')

    let db = client.db('axolotls')
    getDataFromDb(db)
})

let getDataFromDb = (db) => {
    var collection = db.collection('people')
    //equiv SELECT * WHERE name = 'bob'
    //collection.find({name: 'bob'})
    //equiv SELECT name
    //collection.find({name: {$exists: true}})
    collection.find({}).toArray((err, docs) => {
        console.log("Found the following records:")
        console.log(docs)
    })
}

let getDataFromDbToView = (db, callback) => {
    var collection = db.collection('people')
    collection. find({name: {$exists: true}}).toArray((err, docs) => {
        console.log("Found the following records:")
        callback(docs)
    })
}

app.get('/people', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        console.log('Connected correctly to MongoDb')

        let db = client.db('axolotls')
        getDataFromDbToView(db, (result) => {
            console.log(result)
            res.json(result)
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})