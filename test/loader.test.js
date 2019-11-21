import webpack from './helpers/compiler';

describe('Loader', () => {
  it('should works', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {},
      },
    };

    const stats = await webpack('fixture.js', config);
    const { modules, errors, warnings } = stats.toJson();

    expect(modules[0].source).toMatchSnapshot();
    expect(errors).toMatchSnapshot('errors');
    expect(warnings).toMatchSnapshot('warnings');
  });

  it('should works when limit as a query string', async () => {
    const config = {
      rules: [
        {
          test: /\.png$/,
          use: {
            loader: `${require.resolve('../src')}?limit=10000`,
          },
        },
      ],
    };

    const stats = await webpack('fixture.js', config);
    const { modules, errors, warnings } = stats.toJson();

    expect(modules[0].source).toMatchSnapshot();
    expect(errors).toMatchSnapshot('errors');
    expect(warnings).toMatchSnapshot('warnings');
  });

  it('should work with ModuleConcatenationPlugin', async () => {
    const config = {
      mode: 'production',
      loader: {
        test: /(png|jpg|svg)/,
        options: {
          esModules: true,
        },
      },
    };

    const stats = await webpack('fixture.js', config);

    expect(
      stats.compilation.assets['main.bundle.js'].source()
    ).toMatchSnapshot();
  });

  it('should work with ModuleConcatenationPlugin with fallback', async () => {
    const config = {
      mode: 'production',
      loader: {
        test: /(png|jpg|svg)/,
        options: {
          esModules: true,
          limit: 10,
        },
      },
    };

    const stats = await webpack('fixture.js', config);

    expect(
      stats.compilation.assets['main.bundle.js'].source()
    ).toMatchSnapshot();
  });
});
