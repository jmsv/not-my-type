const { getKeyDistAvr } = require('./processKeyboardDistance')

// `testMash` - a random mash from human/1 training data for testing `process` function
//const testMash = require('../training-data/human/1')[Math.floor(Math.random() * 40) + 0]
const testMash = require('../training-data/human/1');

<<<<<<< HEAD
const getKeyDistAvr = events => {
  return events.reduce((acc, event, i) => {
    if (i < events.length - 1) {
      return acc + keyboardDistance(event.key, events[i + 1].key)
    }

    return acc
  }, 0) / (events.length - 1)
}

const spacebarFreq = currentMash => {
  let spacebarCount = 0
  for (let i = 0; i < currentMash.length; i++) {
    if (currentMash[i].key === ' ') {
      spacebarCount++
=======
const process = events => {
  // uses `events` to generate mathsy numbers

  function spacebarFreq () {
    let spacebarCount = 0
    for (let i = 0; i < testMash.length; i++) {
      if (testMash[i].key === ' ') {
        spacebarCount++
      }
>>>>>>> 580f8641877b5472e2731eeb86ddd83dd669ad3e
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
  // uses `events` to generate mathsy numbers

  return {
    timeDiffAvr: 0,
    timeDiffVariance: 0,
    keyDistanceAvr: getKeyDistAvr(events),
    keyDistanceAvrLeft: 0,
    keyDistanceAvrRight: 0,
    spacebarFreq: spacebarFreq(events),
    usedKeys: usedKeys(events)
  }
}

// // test thing
// console.log('processed events:', process(testMash.events))

module.exports = process
