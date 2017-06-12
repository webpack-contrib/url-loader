/* eslint-disable */
import webpack from './webpack';

test('File', () => {
  const config = { loader: { mimetype: 'image/png', limit: 2000 } };

  return webpack('file.js', config)
    .then((result) => {
      console.log(result.err)
      console.log(result.src)
      console.log(result.map)
    })
    .catch((err) => console.log(err));
});
