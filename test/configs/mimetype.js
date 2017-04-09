const fixture = require('../fixtures/file.png');

test('MIME TypeError', () => {
  expect(fixture).toEqual(42);
});
