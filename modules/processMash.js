// `testMash` - a random mash from human/1 training data for testing `process` function
const testMash = require('../training-data/human/1')[Math.floor(Math.random() * 40) + 0].events

const process = rawMashData => {
  // uses `rawMashData` to generate mathsy numbers

  return {
    timeDiffAvr: 0,
    timeDiffVariance: 0,
    keyDistanceAvr: 0,
    keyDistanceAvrLeft: 0,
    keyDistanceAvrRight: 0
  }
}

module.exports = process
