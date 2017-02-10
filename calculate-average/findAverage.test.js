const findAverage = require('./findAverage')

test('Find average [1, 2, 3] is 2', () => {
  expect(findAverage([1, 2, 3])).toBe(2)
})

test('Find average [5, 4, 6] is 5', () => {
  expect(findAverage([5, 4, 6])).toBe(5)
})
