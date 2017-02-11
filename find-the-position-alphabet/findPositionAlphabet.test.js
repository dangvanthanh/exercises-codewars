const findPositionAlphabet = require('./findPositionAlphabet')

test('Position of "a" in alphabet: 1', () => {
  expect(findPositionAlphabet('a')).toBe('Position of "a" in alphabet: 1')
})

test('Position of "z" in alphabet: 26', () => {
  expect(findPositionAlphabet('z')).toBe('Position of "z" in alphabet: 26')
})

test('Position of "e" in alphabet: 5', () => {
  expect(findPositionAlphabet('e')).toBe('Position of "e" in alphabet: 5')
})
