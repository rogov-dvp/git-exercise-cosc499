const feature2 = require('../main');

test('adds 1 + 2 to equal 3', () => {
  expect(feature2([1,5,2,12,3,32,52,14,23,1,9])).toBe(154);
});