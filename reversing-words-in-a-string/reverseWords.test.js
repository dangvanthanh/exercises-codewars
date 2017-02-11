const reverseWords = require('./reverseWords')

test('Reverse words "Hello World" to "World Hello"', () => {
  let input = 'Hello World'
  let expected = 'World Hello'
  expect(reverseWords(input)).toBe(expected)
})

test('Reverse words "Hi There." to "There. Hi"', () => {
  let input = 'Hi There.'
  let expected = 'There. Hi'
  expect(reverseWords(input)).toBe(expected)
})
