const feature1 = require('../main');

test('Sort and concatenate', () => {
  expect(feature1(["hello", "abc", "acb", "abc", "bling"]))
  .toBe("abc abc acb bling hello");
});