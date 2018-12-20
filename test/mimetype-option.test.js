import webpack from './helpers/compiler';

describe('mimetype option', () => {
  it('{undefined}', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {},
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('{String}', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          mimetype: 'image/x-custom',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });
});
