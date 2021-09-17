const features = require('../main');

test('Sort and concatenate', () => {
  expect(features.feature1(["hello", "abc", "acb", "abc", "bling"]))
  .toBe("abc abc acb bling hello");
});