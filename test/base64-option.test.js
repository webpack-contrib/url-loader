/* eslint-disable
  prefer-destructuring,
*/
import webpack from '@webpack-contrib/test-utils';

describe('base64 option', () => {
  test('{undefined}', async () => {
    const config = {
      loader: {
        test: /\.svg$/,
        options: {},
      },
    };

    const stats = await webpack('base64/fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });

  test('{Boolean} false', async () => {
    const config = {
      loader: {
        test: /\.svg$/,
        options: {
          base64: false,
        },
      },
    };

    const stats = await webpack('base64/fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });

  test('{Boolean} true', async () => {
    const config = {
      loader: {
        test: /\.svg$/,
        options: {
          base64: true,
        },
      },
    };

    const stats = await webpack('base64/fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });
});
