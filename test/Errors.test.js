/* eslint-disable
  prefer-destructuring,
*/
import loader from '../src';

describe('Errors', () => {
  test('Validation Error', () => {
    const err = () => loader.call({ query: { limit: {} } });

    expect(err).toThrow();
    expect(err).toThrowErrorMatchingSnapshot();
  });
});
