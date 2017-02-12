const isUppercase = require('./isUppercase')

test('Is the string uppercase', () => {
  expect(isUppercase('Hello World')).toBe(false)
  expect(isUppercase('HELLO WORLD')).toBe(true)
})
