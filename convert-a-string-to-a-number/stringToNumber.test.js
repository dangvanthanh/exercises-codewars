const stringToNumber = require('./stringToNumber')

test('Convert a string to a number', () => {
  expect(stringToNumber('1234')).toBe(1234)
  expect(stringToNumber('605')).toBe(605)
  expect(stringToNumber('1045')).toBe(1045)
  expect(stringToNumber('-7')).toBe(-7)
})
