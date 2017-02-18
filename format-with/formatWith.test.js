const formatWith = require('./formatWith')

test('Format with', () => {
  expect(formatWith('Hello {0}')('Codewars')).toBe('Hello Codewars')
  expect(formatWith('{0} is a {1} {2}')('Today', 'good', 'day')).toBe('Today is a good day')
  expect(formatWith('{0} + {0} = {1}')('1', '2')).toBe('1 + 1 = 2')
  expect(formatWith('Hello {0} {1}')('Codewars', '!')).toBe('Hello Codewars !')
  expect(formatWith('{0} is a {1} {2}')('Today', 'good', 'day!')).toBe('Today is a good day!')
  expect(formatWith('{0} * {1} = {1}')('1', '2')).toBe('1 * 2 = 2')
})
