const basicMathOperation = require('./basicMathOperation')

test('Add math operation', () => {
  expect(basicMathOperation('+', 4, 7)).toBe(11)
})

test('Subtract math operation', () => {
  expect(basicMathOperation('-', 15, 18)).toBe(-3)
})

test('Multiply math operation', () => {
  expect(basicMathOperation('*', 5, 5)).toBe(25)
})

test('Devide math operation', () => {
  expect(basicMathOperation('/', 49, 7)).toBe(7)
})
