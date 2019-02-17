const human1 = require('../training-data/human/1')
const human2 = require('../training-data/human/2')

const bot1 = require('../training-data/bot/1')

const load = () => ({
  human: [...human1, ...human2],
  bot: [...bot1]
})

module.exports = load
