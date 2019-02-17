const xo = 1.9
const yo = 1.9

const keyCoords = {
  '`': [0, 0],
  '1': [1 * xo, 0],
  '2': [2 * xo, 0],
  '3': [3 * xo, 0],
  '4': [4 * xo, 0],
  '5': [5 * xo, 0],
  '6': [6 * xo, 0],
  '7': [7 * xo, 0],
  '8': [8 * xo, 0],
  '9': [9 * xo, 0],
  '0': [10 * xo, 0],
  '-': [11 * xo, 0],
  '=': [11 * xo, 0],

  q: [0.8 + 1 * xo, yo],
  w: [0.8 + 2 * xo, yo],
  e: [0.8 + 3 * xo, yo],
  r: [0.8 + 4 * xo, yo],
  t: [0.8 + 5 * xo, yo],
  y: [0.8 + 6 * xo, yo],
  u: [0.8 + 7 * xo, yo],
  i: [0.8 + 8 * xo, yo],
  o: [0.8 + 9 * xo, yo],
  p: [0.8 + 10 * xo, yo],
  '[': [0.8 + 11 * xo, yo],
  ']': [0.8 + 12 * xo, yo],

  a: [1.5 + 1 * xo, yo * 2],
  s: [1.5 + 2 * xo, yo * 2],
  d: [1.5 + 3 * xo, yo * 2],
  f: [1.5 + 4 * xo, yo * 2],
  g: [1.5 + 5 * xo, yo * 2],
  h: [1.5 + 6 * xo, yo * 2],
  j: [1.5 + 7 * xo, yo * 2],
  k: [1.5 + 8 * xo, yo * 2],
  l: [1.5 + 9 * xo, yo * 2],
  ';': [1.5 + 10 * xo, yo * 2],
  "'": [1.5 + 11 * xo, yo * 2],
  '#': [1.5 + 12 * xo, yo * 2],

  '\\': [0.5 + 1 * xo, yo * 3],
  z: [0.5 + 2 * xo, yo * 3],
  x: [0.5 + 3 * xo, yo * 3],
  c: [0.5 + 4 * xo, yo * 3],
  v: [0.5 + 5 * xo, yo * 3],
  b: [0.5 + 6 * xo, yo * 3],
  n: [0.5 + 7 * xo, yo * 3],
  m: [0.5 + 8 * xo, yo * 3],
  ',': [0.5 + 9 * xo, yo * 3],
  '.': [0.5 + 10 * xo, yo * 3],
  '/': [0.5 + 11 * xo, yo * 3],

  ' ': [7 * xo, yo * 4]
}

const getDistance = (letterA, letterB) => {
  return Math.sqrt(
    Math.pow(keyCoords[letterA][0] - keyCoords[letterB][0], 2) +
    Math.pow(keyCoords[letterA][1] - keyCoords[letterB][1], 2)
  ) / 25
}

module.exports = getDistance
