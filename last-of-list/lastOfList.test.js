const lastOfList = require('./lastOfList')

test('Last of array [1, 2, 3, 4, 5] is 5', () => {
  expect(lastOfList([1, 2, 3, 4, 5])).toBe(5)
})

test('Last of string "xyz" is "z"', () => {
  expect(lastOfList('xyz')).toBe('z')
})

test('Last of arguments 1, "b", 3, "d", 5 is 5', () => {
  expect(lastOfList(1, "b", 3, "d", 5)).toBe(5)
})
