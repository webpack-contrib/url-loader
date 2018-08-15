/* eslint-disable
  prefer-destructuring,
*/
import webpack from '@webpack-contrib/test-utils';

describe('Options', () => {
  describe('fallback', () => {
    test('{String}', async () => {
      const config = {
        loader: {
          test: /\.png$/,
          options: {
            limit: 100,
            fallback: 'file-loader',
          },
        },
      };

      const stats = await webpack('fixture.js', config);
      const { source } = stats.toJson().modules[0];

      expect(source).toMatchSnapshot();
    });

    test('{undefined}', async () => {
      const config = {
        loader: {
          test: /\.png$/,
          options: {
            limit: 100,
            name: 'name-for-url-loader.[ext]',
          },
        },
      };

      const stats = await webpack('fixture.js', config);
      const { source } = stats.toJson().modules[0];

      expect(source).toMatchSnapshot();
    });

    // Version 1.0.1 passes options provided to url-loader to the fallback as well, so make sure that still works.
    test('{String}', async () => {
      const config = {
        loader: {
          test: /\.png$/,
          options: {
            limit: 100,
            fallback: 'file-loader',
            name: '[name].[ext]',
          },
        },
      };

      const stats = await webpack('fixture.js', config);
      const { source } = stats.toJson().modules[0];

      expect(source).toMatchSnapshot();
    });

    // Test passing explicitly provided options to the fallback loader.
    test('{String}', async () => {
      const config = {
        loader: {
          test: /\.png$/,
          options: {
            limit: 100,
            name: 'name-for-url-loader.[ext]',
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'name-for-file-loader.[ext]',
              },
            },
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
            limit: 100,
            name: 'name-for-url-loader.[ext]',
            fallback: 'file-loader?name=name-for-file-loader.[ext]',
          },
        },
      };

      const stats = await webpack('fixture.js', config);
      const { source } = stats.toJson().modules[0];

      expect(source).toMatchSnapshot();
    });
  });
});
