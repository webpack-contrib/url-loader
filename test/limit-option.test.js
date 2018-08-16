/* eslint-disable
  prefer-destructuring,
*/
import webpack from '@webpack-contrib/test-utils';

describe('limit option', () => {
  test('{undefined}', async () => {
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

  test('{Number} (big)', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: Number.MAX_SAFE_INTEGER,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });

  test('{Number} (less)', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: Number.MIN_SAFE_INTEGER,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });

  test('{String} (big)', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: '8192',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });
});
