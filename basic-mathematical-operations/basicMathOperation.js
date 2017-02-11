function basicMathOperation (operation, x, y) {
  if (operation === '+') {
    return x + y
  } else if (operation === '-') {
    return x - y
  } else if (operation === '*') {
    return x * y
  } else if (operation === '/') {
    return x / y
  } else {
    return 0
  }
}

module.exports = basicMathOperation
