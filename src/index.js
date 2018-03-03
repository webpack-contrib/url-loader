/* eslint-disable
  global-require,
  no-param-reassign,
  prefer-destructuring,
  import/no-dynamic-require,
*/
import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import mime from 'mime';
import schema from './options.json';

// Loader Mode
export const raw = true;

export default function loader(src) {
  // Loader Options
  const options = getOptions(this) || {};

  validateOptions(schema, options, 'URL Loader');

  const file = this.resourcePath;
  // Set limit for resource inlining (file size)
  let limit = options.limit;

  if (limit) {
    limit = parseInt(limit, 10);
  }
  // Get MIME type
  const mimetype = options.mimetype || mime.getType(file);

  // No limit or within the specified limit
  if (!limit || src.length < limit) {
    if (typeof src === 'string') {
      src = Buffer.from(src);
    }

    return `module.exports = ${JSON.stringify(
      `data:${mimetype || ''};base64,${src.toString('base64')}`
    )}`;
  }

  const fallback = require(options.fallback ? options.fallback : 'file-loader');

  return fallback.call(this, src);
}
