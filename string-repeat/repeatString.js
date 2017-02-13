function repeatString (n, s) {
  let temp = s
  let i = 1

  while (i < n) {
    s += temp
    i++
  }

  return s
}

module.exports = repeatString
