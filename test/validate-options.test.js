import loader from '../src';

it('validate options', async () => {
  const validate = (options) =>
    loader.call(
      Object.assign(
        {},
        {
          resourcePath: 'image.png',
          query: options,
          emitFile: () => {},
        }
      ),
      'context'
    );

  expect(() => validate()).not.toThrow();

  // The `fallback` loader can have any optsions so we use `additionalProperties: false` to avoid problems.
  expect(() => validate({ unknown: 'unknown' })).not.toThrow();

  expect(() => validate({ limit: 8192 })).not.toThrow();
  expect(() => validate({ limit: true })).not.toThrow();
  expect(() => validate({ limit: '8192' })).not.toThrow();
  expect(() => validate({ limit: [] })).toThrowErrorMatchingSnapshot();

  expect(() => validate({ mimetype: 'image/png' })).not.toThrow();
  expect(() => validate({ mimetype: true })).toThrowErrorMatchingSnapshot();

  expect(() => validate({ fallback: 'custom-loader' })).not.toThrow();
  expect(() =>
    validate({ fallback: { loader: 'custom-loader' } })
  ).not.toThrow();
  expect(() =>
    validate({
      fallback: { loader: 'custom-loader', options: { unknown: 'unknown' } },
    })
  ).not.toThrow();
  expect(() =>
    validate({
      fallback: { loader: 'custom-loader', options: 'string' },
    })
  ).not.toThrow();
  expect(() => validate({ fallback: true })).toThrowErrorMatchingSnapshot();
});
