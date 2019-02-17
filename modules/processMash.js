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

const timeDiffAverage = currentMash => {

  let averageTime = 0;
  let currentIndex = 0;
  let completeKeystrokes = 0;
  currentMash.forEach(element => {
    if(element.type === "keydown") {
      for(let i = currentIndex; i < currentMash.length-1; i++) {
        if(currentMash[i].key === element.key && currentMash[i].type === "keyup") {
          averageTime = averageTime + (currentMash[i].time - element.time);
          completeKeystrokes++;

        }
      }
    }
    currentIndex++;
  });
  averageTime = Math.round(averageTime / completeKeystrokes);
  return averageTime;

}

const process = events => {
  events = preprocess(events)

  const lRKeyDistAvrs = getLRKeyDists(events)

  return {
    timeDiffAvr: timeDiffAverage(events),
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
