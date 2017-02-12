const countSheeps = require('./countSheeps')

test('There are 17 sheep in total', () => {
  let input = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
  ]
  expect(countSheeps(input)).toBe(17)
})
