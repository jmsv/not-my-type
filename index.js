const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routeDetect = require('./routes/detect')

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.json())

app.use('/api/detect', routeDetect, (req, res) => res.sendStatus(401))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`listening on ${port}`)
