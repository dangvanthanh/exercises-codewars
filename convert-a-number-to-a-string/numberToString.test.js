const numberToString = require('./numberToString')

test('Convert a number to a string', () => {
  expect(numberToString(123)).toBe('123')
})
