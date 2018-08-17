/* eslint-disable
  prefer-destructuring,
*/
import webpack from '@webpack-contrib/test-utils';

describe('mimetype option', () => {
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

  test('{String}', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          mimetype: 'image/x-custom',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const { source } = stats.toJson().modules[0];

    expect(source).toMatchSnapshot();
  });
});
