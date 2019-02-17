const brain = require('brain.js')

const processMash = require('./processMash')

const loadTrainingData = require('./loadTrainingData')
const trainingData = loadTrainingData()

const generateTrainingMap = who => mash => ({
  input: processMash(mash.events),
  output: { [who]: 1 }
})

const startNetwork = () => {
  let net = new brain.NeuralNetwork()

  net.train([
    ...trainingData.human.map(generateTrainingMap('human')),
    ...trainingData.bot.slice(0, 100).map(generateTrainingMap('bot'))
  ])

  return net
}

module.exports = { startNetwork }
