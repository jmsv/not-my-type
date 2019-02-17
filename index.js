const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const network = require('./modules/neuralNetwork')
const processMash = require('./modules/processMash')

const app = express()

const routeDetect = require('./routes/detect')

console.log('generating network...')
let trainedNetwork = network.startNetwork()
console.log('...network running')

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.json())

app.post('/api/detect', (req, res) => {
  const mash = req.body
  const m = processMash(mash)

  console.log('m :', m)

  console.log('trainedNetwork.run(m) :', trainedNetwork.run(m))

  res.json({ human: trainedNetwork.run(m).human > 0.1 })
})

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const port = process.env.PORT || 5000

// console.log('HUMAN TEST')
// const someHuman = require('./training-data/test-data/james1.json')
// const humanResults = someHuman.map(m => {
//   const mash = processMash(m.events)
//   return trainedNetwork.run(mash)
// })
// console.log('HUMAN results :', humanResults)

// console.log('BOT TEST')
// const someBot = require('./training-data/bot/1').slice(300, 327)
// const botResults = someBot.map(m => {
//   const mash = processMash(m.events)
//   return trainedNetwork.run(mash)
// })
// console.log('BOT results :', botResults)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
