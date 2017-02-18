const isLucky = require('./isLucky')

test('Lucky bus ticket', () => {
  expect(isLucky('123321')).toBe(true)
  expect(isLucky('100001')).toBe(true)
  expect(isLucky('100200')).toBe(false)
  expect(isLucky('12341234')).toBe(false)
  expect(isLucky('12a12a')).toBe(false)
  expect(isLucky('')).toBe(false)
})
