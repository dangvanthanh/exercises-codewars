function removeStringScapes (letter) {
  return letter.replace(/\s+/g, '')
}

module.exports = removeStringScapes
