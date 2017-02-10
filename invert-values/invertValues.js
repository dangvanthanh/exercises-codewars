function invertValues (array) {
  return array.map(x => ~x + 1)
}

module.exports = invertValues
