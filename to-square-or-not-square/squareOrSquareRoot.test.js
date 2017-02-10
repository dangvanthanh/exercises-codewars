const squareOrSquareRoot = require('./squareOrSquareRoot')

test('Square or not square [4, 3, 9, 7, 2, 1] is [2, 9, 3, 49, 4, 1]', () => {
  let input = [4, 3, 9, 7, 2, 1]
  let expected = [2, 9, 3, 49, 4, 1]
  expect(squareOrSquareRoot(input)).toEqual(expected)
})

test('Square or not square [100, 101, 5, 5, 1, 1] is [ 10, 10201, 25, 25, 1, 1]', () => {
  let input = [100, 101, 5, 5, 1, 1]
  let expected = [ 10, 10201, 25, 25, 1, 1 ]
  expect(squareOrSquareRoot(input)).toEqual(expected)
})

test('Square or not square [1, 2, 3, 4, 5, 6] is [1, 4, 9, 2, 25, 36]', () => {
  let input = [1, 2, 3, 4, 5, 6]
  let expected = [1, 4, 9, 2, 25, 36]
  expect(squareOrSquareRoot(input)).toEqual(expected)
})
