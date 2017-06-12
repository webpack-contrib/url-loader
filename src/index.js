import { getOptions } from 'loader-utils'; // eslint-disable-line
import validateOptions  from 'schema-utils'; //eslint-disable-line

import { lookup } from 'mime'; // eslint-disable-line
import loader from 'file-loader'; // eslint-disable-line

/**
 * URL Loader
 *
 * > Inline files as `base64` encoded URL
 *
 * @author Tobias Koppers (@sokra)
 *
 * @version 1.0.0
 * @license MIT
 *
 * @module url-loader
 *
 * @requires loader-utils
 * @requires schema-utils
 *
 * @requires mime
 * @requires 'file-loader'
 *
 * @method loader
 *
 * @param  {String} src Source
 *
 * @return {callback}   url Url/File
 */
export default function (src) {
  const cb = this.async();
  const file = this.resourcePath;

  const options = getOptions(this) || {};

  validateOptions(require('./options.json'), options, 'URL Loader'); // eslint-disable-line

  options.limit = options.limit ? parseInt(options.limit, 10) : 0;
  options.mimetype = options.mimetype || lookup(file);
  options.encoding = options.encoding || 'base64';

  if (options.limit <= 0 || src.length < options.limit) {
    const result = `export default ${
        JSON.stringify(`data:${options.mimetype ? `${options.mimetype};` : ''
      }${options.encoding},${src.toString(options.encoding)}`)}`;

    const map = {
      version: 3,
      file: '',
      names: [],
      mappings: '',
      sourceRoot: '',
      sources: [''],
      sourcesContent: [''] // eslint-disable-line
    };

    const meta = { locals: { hello: 'Hello World!' } };

    return cb(null, result, map, meta);
  }

  return cb(null, loader.call(this, src));
}
