const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello everyone!'))

app.get('/axolotls', (req, res) => res.send('This is axolotls!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))