/* eslint-disable
  prefer-destructuring,
*/
import webpack from '@webpack-contrib/test-utils';

describe('Options', () => {
  describe('limit', () => {
    test('{Number}', async () => {
      const config = {
        loader: {
          test: /\.png$/,
          options: {
            limit: 100000,
          },
        },
      };

      const stats = await webpack('fixture.js', config);
      const { source } = stats.toJson().modules[0];

      expect(source).toMatchSnapshot();
    });

    test('{String}', async () => {
      const config = {
        loader: {
          test: /\.png$/,
          options: {
            limit: '100000',
          },
        },
      };

      const stats = await webpack('fixture.js', config);
      const { source } = stats.toJson().modules[0];

      expect(source).toMatchSnapshot();
    });
  });
});
