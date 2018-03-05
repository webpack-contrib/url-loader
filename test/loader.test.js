/* eslint-disable
  prefer-destructuring,
*/
import webpack from '@webpack-contrib/test-utils';

describe('Loader', () => {
  test('Defaults', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {},
      },
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });
});
