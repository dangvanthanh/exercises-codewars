const isDigit = require('../is-it-a-digit/isDigit')

function getNumberFromString (letter) {
  return parseInt(letter.split('').filter(isDigit).join(''), 10)
}

module.exports = getNumberFromString
