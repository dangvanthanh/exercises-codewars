const countPositivesSumNegatives = require('./countPositivesSumNegatives')

test('Count positives and sum negatives empty', () => {
  expect(countPositivesSumNegatives([])).toEqual([])
})

test('Count positives and sum negatives basic', () => {
  let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
  let expected = [10, -65]
  expect(countPositivesSumNegatives(input)).toEqual(expected)
})

test('Count positives and sum negatives advanves', () => {
  let input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
  let expected = [10, -50]
  expect(countPositivesSumNegatives(input)).toEqual(expected)
})
