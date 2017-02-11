const stringToArray = require('./stringToArray')

test('String to array', () => {
  expect(stringToArray('I love arrays they are my favorite')).toEqual(["I", "love", "arrays", "they", "are", "my", "favorite"])
})
