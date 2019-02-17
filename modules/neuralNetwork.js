const brain = require('brain.js')

const processMash = require('./processMash')

const mashs = require('../training-data/human/1')

const startNetwork = () => {
  let net = new brain.NeuralNetwork()

  net.train(mashs.map(mash => {
    return {
      input: processMash(mash.events),
      output: { human: 1 }
    }
  }))

  return net
}

module.exports = { startNetwork }
