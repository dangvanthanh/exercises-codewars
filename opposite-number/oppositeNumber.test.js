const oppositeNumber = require('./oppositeNumber')

test('Opposite number', () => {
  expect(oppositeNumber(1)).toBe(-1)
  expect(oppositeNumber(0)).toBe(0)
  expect(oppositeNumber(4.25)).toBe(-4.25)
  expect(oppositeNumber(3.3333333)).toBe(-3.3333333)
  expect(oppositeNumber(-12525220.3325)).toBe(12525220.3325)
  expect(oppositeNumber(-5)).toBe(5)
})
