import webpack from './helpers/compiler';

describe('limit option', () => {
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

  it('{Number} (big)', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: Number.MAX_SAFE_INTEGER,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('{Number} (less)', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: Number.MIN_SAFE_INTEGER,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('{String} (big)', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: '8192',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });
});
