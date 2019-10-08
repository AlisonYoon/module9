const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const jsonParser = bodyParser.json()

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const url = 'mongodb://localhost:27017'

var updateDataInDb = function (db, id, newData) {
    var collection = db.collection('people')
    collection.updateOne({"_id": id}
        , { $set: newData}
        , function (err, result) {
            console.log(result)
            console.log("updated the document")
        })
}



app.put('/people/:id', jsonParser, function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
        console.log('Connected correctly to MongoDb')

        let db = client.db('axolotls')
        let newData = req.body
        let id = ObjectId(req.params.id)
        updateDataInDb(db, id, newData)
    })
})



app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
})