const keyboardDistance = require('./keyboardDistance')

// `testMash` - a random mash from human/1 training data for testing `process` function
const testMash = require('../training-data/human/1')[Math.floor(Math.random() * 40) + 0]

const getKeyDistAvr = events => {
  return events.reduce((acc, event, i) => {
    if (i < events.length - 1) {
      return acc + keyboardDistance(event.key, events[i + 1].key)
    }

    return acc
  }, 0) / (events.length - 1)
}

const process = events => {
  // uses `events` to generate mathsy numbers

  function spacebarFreq() {
    let spacebarCount = 0;
    for(let i = 0; i < testMash.length; i++) {
      if(testMash[i].key === " "){
        spacebarCount++
      }
    }
    const spacebarFreq = spacebarCount / 100;
    return spacebarFreq;
  }

  function usedKeys() {
    let usedKeys = []
    for(let i = 0; i < testMash.length; i++) {
      if(!(usedKeys.includes(testMash[i].key))) {
        usedKeys.push(testMash[i].key);
      }
    }
    return usedKeys.length;
  }


  return {
    timeDiffAvr: 0,
    timeDiffVariance: 0,
    keyDistanceAvr: getKeyDistAvr(events),
    keyDistanceAvrLeft: 0,
    keyDistanceAvrRight: 0,
    spacebarFreq: spacebarFreq(),
    usedKeys: usedKeys()
  }
}

// // test thing
// console.log('processed events:', process(testMash.events))

module.exports = process
