const brain = require('brain.js')

const processMash = require('./processMash')

const mashs = require('../training-data/human/1')

module.exports = {
  startNetwork () {
    let net = new brain.NeuralNetwork()

    net.train(mashs.map(mash => ({
      input: processMash(mash.events),
      output: { human: 1 }
    })))

    return net
  }
}
