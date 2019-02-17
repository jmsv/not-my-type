const resolveShiftChars = require('./resolveShiftChars')

const preprocess = events => {
  return events.map(event => {
    if (Object.keys(resolveShiftChars).includes(event.key)) {
      event.key = resolveShiftChars[event.key]
    }
    return event
  })
}

module.exports = preprocess
