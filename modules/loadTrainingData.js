const human1 = require('../training-data/human/1')
const human2 = require('../training-data/human/2')
const human3 = require('../training-data/human/alexTrainingData1')

const bot1 = require('../training-data/bot/rubbishbot')

const load = () => ({
  human: [...human1, ...human2, ...human3],
  bot: [...bot1]
})

module.exports = load
