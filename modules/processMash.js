const preprocess = require('./preprocess')
const { getKeyDistAvr, getLRKeyDists } = require('./processKeyboardDistance')

// `testMash` - a random mash from human/1 training data for testing `process` function
// const testMash = require('../training-data/human/1')[Math.floor(Math.random() * 40) + 0]

const spacebarFreq = currentMash => {
  let spacebarCount = 0
  for (let i = 0; i < currentMash.length; i++) {
    if (currentMash[i].key === ' ') {
      spacebarCount++
    }
  }
  const spacebarFreq = spacebarCount / 100
  return spacebarFreq
}

const usedKeys = currentMash => {
  let usedKeys = []
  for (let i = 0; i < currentMash.length; i++) {
    if (!(usedKeys.includes(currentMash[i].key))) {
      usedKeys.push(currentMash[i].key)
    }
  }
  return usedKeys.length
}

const process = events => {
  events = preprocess(events)

  const lRKeyDistAvrs = getLRKeyDists(events)

  return {
    // timeDiffAvr: 0,
    // timeDiffVariance: 0,
    keyDistanceAvr: getKeyDistAvr(events),
    keyDistanceAvrLeft: lRKeyDistAvrs.left,
    keyDistanceAvrRight: lRKeyDistAvrs.right,
    keyDistanceAvrSideDiff: Math.abs(lRKeyDistAvrs.right - lRKeyDistAvrs.left),
    spacebarFreq: spacebarFreq(events),
    usedKeys: usedKeys(events)
  }
}

// // test thing
// console.log('processed events:', process(testMash.events))

module.exports = process
