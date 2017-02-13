const stringCleanNumber = require('./stringCleanNumber')

test('Clean number from string', () => {
  expect(stringCleanNumber('! !')).toBe('! !')
  expect(stringCleanNumber('123456789')).toBe('')
  expect(stringCleanNumber('This looks5 grea8t!')).toBe('This looks great!')
})
