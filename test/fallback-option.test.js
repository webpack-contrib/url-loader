import path from 'path';

import webpack from './helpers/compiler';

describe('fallback option', () => {
  it('{undefined}', async () => {
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
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('{String}', async () => {
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
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('{String} (with query)', async () => {
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
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('{Object}', async () => {
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
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });
});
