const toAlternatingCase = require('./toAlternatingCase')

test('Convert to alternating case', () => {
  expect(toAlternatingCase('hello world')).toEqual('HELLO WORLD')
  expect(toAlternatingCase('HELLO WORLD')).toEqual('hello world')
  expect(toAlternatingCase('HeLLo WoRLD')).toEqual('hEllO wOrld')
})
