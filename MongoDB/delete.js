const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const jsonParser = bodyParser.json()

const MongoClient = require('mongodb')
const ObjectId = require('mongodb').ObjectId

const url = 'mongodb://localhost:27017'

let removeDataInDb = (db, id, callback) => { //third param "callback" is optional. Here, use it to print out response message in the terminal and postman
    let collection = db.collection('people')
    collection.deleteOne({"_id": id}, function (err, result) {
        console.log("its done gone")
        callback(result) //when using third param callback, call it here
    })
}

app.delete('/people/:id', jsonParser, (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        console.log('Connected correctly to MongoDb')

        let db = client.db('axolotls')
        let id = ObjectId(req.params.id)
        removeDataInDb(db, id, (result) => {
            console.log({deletedCount: result.deletedCount})
            //this prints out the result in the terminal
            res.json({deletedCount: result.deletedCount})
            //this prints out the result in the postman
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})