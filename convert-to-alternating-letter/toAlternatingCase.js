const isUpperCase = require('../is-the-string-uppercase/isUpperCase')

function toAlternatingCase (letters) {
  let swapLetter = letter => isUpperCase(letter) ? letter.toLowerCase() : letter.toUpperCase()

  return letters.split('').map(swapLetter).join('')
}

module.exports = toAlternatingCase
