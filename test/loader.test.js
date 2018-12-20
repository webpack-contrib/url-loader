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
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });
});
