function squareOrSquareRoot (array) {
  return array.map(x => {
    let half = Math.floor(Math.sqrt(x))
    if (half * half === x) {
      return half
    } else {
      return x * x
    }
  })
}

module.exports = squareOrSquareRoot
