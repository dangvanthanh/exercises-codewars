const getNumberFromString = require('./getNumberFromString')

test('Get nunber from string', () => {
  expect(getNumberFromString('hell5o wor6ld')).toBe(56)
  expect(getNumberFromString('1')).toBe(1)
  expect(getNumberFromString('123')).toBe(123)
  expect(getNumberFromString('this is number: 7')).toBe(7)
})
