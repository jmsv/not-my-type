// `testMash` - a random mash from human/1 training data for testing `process` function
const testMash = require('../training-data/human/1')[Math.floor(Math.random() * 40) + 0].events

const process = rawMashData => {
  // uses `rawMashData` to generate mathsy numbers

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
    keyDistanceAvr: 0,
    keyDistanceAvrLeft: 0,
    keyDistanceAvrRight: 0,
    spacebarFreq: spacebarFreq(),
    usedKeys: usedKeys()
  }
}

module.exports = process
