const invertValues = require('./invertValues')

test('Invert values [1, 2, 3, 4, 5] is [-1,-2,-3,-4,-5]', () => {
  let input = [1, 2, 3, 4, 5]
  let expected = [-1, -2, -3, -4, -5]
  expect(invertValues(input)).toEqual(expected)
})

test('Invert values [1, -2, 3, -4, 5] is [-1, 2, -3, 4, -5]', () => {
  let input = [1, -2, 3, -4, 5]
  let expected = [-1, 2, -3, 4, -5]
  expect(invertValues(input)).toEqual(expected)
})
