/* eslint-disable
  prefer-destructuring,
*/
import path from 'path';

import webpack from '@webpack-contrib/test-utils';

describe('fallback option', () => {
  test('{undefined}', async () => {
    const config = {
      rules: [
        {
          test: /\.png$/,
          use: {
            loader: path.join(__dirname, '../src'),
            options: {},
          },
        },
      ],
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });

  test('{String}', async () => {
    const config = {
      rules: [
        {
          test: /\.png$/,
          use: {
            loader: path.join(__dirname, '../src'),
            options: {
              limit: Number.MIN_SAFE_INTEGER,
              name: '[name].[hash].[ext]',
              unknown: 'value',
              fallback: path.join(__dirname, 'fixtures/x-custom-loader'),
            },
          },
        },
      ],
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });

  test('{String} (with query)', async () => {
    const config = {
      rules: [
        {
          test: /\.png$/,
          use: {
            loader: path.join(__dirname, '../src'),
            options: {
              limit: Number.MIN_SAFE_INTEGER,
              name: '[name].[hash].[ext]',
              unknown: 'value',
              fallback: `${path.join(
                __dirname,
                'fixtures/x-custom-loader'
              )}?name=fallback-[hash].[ext]&unknown=fallback-value`,
            },
          },
        },
      ],
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });

  test('{Object}', async () => {
    const config = {
      rules: [
        {
          test: /\.png$/,
          use: {
            loader: path.join(__dirname, '../src'),
            options: {
              limit: Number.MIN_SAFE_INTEGER,
              name: '[name].[hash].[ext]',
              unknown: 'value',
              fallback: {
                loader: path.join(__dirname, 'fixtures/x-custom-loader'),
                options: {
                  name: 'fallback-[hash].[ext]',
                  unknown: 'fallback-other-value',
                },
              },
            },
          },
        },
      ],
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });
});
