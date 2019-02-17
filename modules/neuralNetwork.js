const brain = require('brain.js')

const processMash = require('./processMash')

const loadTrainingData = require('./loadTrainingData')
const trainingData = loadTrainingData()

const generateTrainingMapHuman = mash => ({
  input: processMash(mash.events),
  output: { human: 1 }
})

const generateTrainingMapBot = mash => ({
  input: processMash(mash.events),
  output: { bot: 1 }
})

const startNetwork = () => {

  const config = {
    hiddenLayers: [10]
  }

  let net = new brain.NeuralNetwork(config)

  net.train([
    ...trainingData.human.map(generateTrainingMapHuman),
    ...trainingData.bot.slice(0, trainingData.human.length).map(generateTrainingMapBot)
  ])

  // net.train([
  //   trainingData.human.map(generateTrainingMapHuman)
  //   trainingData.bot.slice(0, trainingData.human.length).map(generateTrainingMapBot)
  // ])

  return net
}

module.exports = { startNetwork }
