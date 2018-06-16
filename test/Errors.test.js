/* eslint-disable
  prefer-destructuring,
*/
import webpack from '@webpack-contrib/test-utils';

describe('Errors', () => {
  test('Validation Error', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: {},
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    // eslint-disable-next-line
    const fn = () => eval(source);

    expect(fn).toThrowErrorMatchingSnapshot();
  });
});
