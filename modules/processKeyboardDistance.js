const keyboardDistance = require('./keyboardDistance')

const getKeyDistances = events => {
  return events.slice(0, events.length - 1)
    .map((e, i) => keyboardDistance(e.key, events[i + 1].key))
}

const getKeyDistAvr = events => {
  const dists = getKeyDistances(events)
  return dists.reduce((acc, dist) => acc + dist, 0) / events.length
}

const getLRKeyDists = events => {
  const l = ['`', '1', '2', '3', '4', '5', '6', 'q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', '\\', 'z', 'x', 'c', 'v', 'b']

  const keySides = {
    left: [],
    right: []
  }

  events.forEach(event => {
    const { key } = event
    if (l.includes(key)) {
      keySides.left.push(event)
    } else {
      keySides.right.push(event)
    }
  })

  const lrAvrs = {
    left: getKeyDistAvr(keySides.left),
    right: getKeyDistAvr(keySides.right)
  }

  return lrAvrs
}

module.exports = { getKeyDistAvr, getLRKeyDists }
