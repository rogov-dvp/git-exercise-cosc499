const features = require('../main');

test('Sum', () => {
  expect(features.feature2([1,5,2,12,3,32,52,14,23,1,9])).toBe(154);
});