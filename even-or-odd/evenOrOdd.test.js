const evenOrOdd = require('./evenOrOdd')

test('Test even or odd number 2, 0 is even - 1, 7 is odd', () => {
  expect(evenOrOdd(2)).toBe('Even')
  expect(evenOrOdd(0)).toBe('Even')
  expect(evenOrOdd(7)).toBe('Odd')
  expect(evenOrOdd(1)).toBe('Odd')
})
