const choice = a => a[Math.floor(Math.random() * a.length)]
const chars = ['1', '2', '3', '4', '5', 'q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'j', 'o', '0']

const genEvents = () => {
  let events = []

  for (let i = 0; i < 100; i++) {
    events.push({
      key: choice(chars),
      type: choice(['keyup', 'keydown']),
      time: i * 50
    })
  }

  return events
}


let output = []
for (let i = 0; i < 1000; i++) {
  output.push({ events: genEvents() })
}

const fs = require('fs')
fs.writeFileSync('rubbishbot.json', JSON.stringify(output, null, 2))
