function countPositivesSumNegatives (array) {
  let result = []

  if (typeof array === 'object' && array instanceof Array) {
    if (array.length) {
      let count = 0
      let sum = 0

      array.forEach((x) => {
        if (x >= 0) {
          count++
        }
      })

      sum = array.filter(x => {
        return x < 0
      }).reduce((a, b) => {
        return a + b
      }, 0)

      result.push(count)
      result.push(sum)
    }
  }

  return result
}

module.exports = countPositivesSumNegatives
