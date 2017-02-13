const repeatString = require('./repeatString')

test('String repeat by n times', () => {
  expect(repeatString(3, '*')).toBe('***')
  expect(repeatString(5, '#')).toBe('#####')
  expect(repeatString(2, 'ha')).toBe('haha')
})
