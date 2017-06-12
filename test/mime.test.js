/* eslint-disable */
import webpack from './webpack';

test('MIME', () => {
  const config = { loader: { mimetype: 'image/png', limit: 30000 } };

  return webpack('mime.js', config)
    .then((result) => {
      console.log(result.err)
      console.log(result.src)
      console.log(result.map)
    })
    .catch((err) => console.log(err));
});
