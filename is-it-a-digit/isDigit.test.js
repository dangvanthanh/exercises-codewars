const isDigit = require('./isDigit');

test('Test digit', () => {
  expect(isDigit('')).toBe(false)
  expect(isDigit('7')).toBe(true)
  expect(isDigit(' ')).toBe(false)
  expect(isDigit('a')).toBe(false)
  expect(isDigit('a5')).toBe(false)
  expect(isDigit('14')).toBe(false)
})
