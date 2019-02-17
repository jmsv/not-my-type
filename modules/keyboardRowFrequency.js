const keyboard = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '#'],
  ['\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
]

const getLetterRow = letter => {
  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].includes(letter)) {
      return i
    }
  }
  return keyboard.length
}

const getRowFrequencies = events => {
  const eventRows = events.map(e => getLetterRow(e.key))

  return eventRows.reduce((acc, rowNum) => {
    acc[rowNum] += 1
    return acc
  }, [0, 0, 0, 0, 0])
    .map(x => x / events.length)
}

// console.log('getFrequencies()', getFrequencies([{ key: '2' }, { key: 'g' }, { key: 'h' }]))

module.exports = { getRowFrequencies }
