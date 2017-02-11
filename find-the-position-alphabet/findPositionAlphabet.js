function findPositionAlphabet (letter) {
  return `Position of "${letter}" in alphabet: ${letter.charCodeAt() - 96}`
}

module.exports = findPositionAlphabet
