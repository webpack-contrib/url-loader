/* eslint-disable
  prefer-destructuring,
*/
import webpack from '@webpack-contrib/test-utils';

describe('Options', () => {
  describe('mimetype', () => {
    test('{String}', async () => {
      const config = {
        loader: {
          test: /\.png$/,
          options: {
            mimetype: 'image/png',
          },
        },
      };

      const stats = await webpack('fixture.js', config);
      const { source } = stats.toJson().modules[0];

      expect(source).toMatchSnapshot();
    });
  });
});
