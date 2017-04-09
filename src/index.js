import { getOptions } from 'loader-utils';
// import { validateOptions }  from 'schema-utils';
/* eslint-disable import/order */
import { lookup } from 'mime';

/**
 * URL Loader
 *
 * > Inlines files as Base64 encoded DataURL
 *
 * @author Tobias Koppers (@sokra)
 *         Michael Ciniawsky (@michael-cinaiwsky) <michael.ciniawsky@gmail.com>
 * @version 1.0.0
 * @license MIT
 *
 * @module url-loader
 *
 * @requires loaderUtils
 * @requires schemaUtils
 *
 * @requires mime
 *
 * @method loader
 *
 * @param  {String} file File
 *
 * @return {String|Function} url Url
 */
export default function (file) {
  const options = getOptions(this) || {};

  // validateOptions('./schema', options, 'URL Loader')

  let limit = (
    this.options && this.options.url && this.options.url.dataUrlLimit
  ) || 0;

  if (options.limit) {
    limit = parseInt(options.limit, 10);
  }

  const mime = options.mimetype || lookup(this.resourcePath);

  if (limit <= 0 || file.length < limit) {
    return `module.exports = ${JSON.stringify(`data:${mime ? `${mime};` : ''} base64,${file.toString('base64')}`)}`;
  }
  /* eslint-disable global-require, import/no-unresolved */
  const fileLoader = require('file-loader');
  return fileLoader.call(this, file);
}
