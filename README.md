[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Url Loader</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev url-loader
```

<h2 align="center">Usage</h2>

The `url-loader` works like the [`file-loader`](https://github.com/webpack-contrib/file-loader), but can return a DataURL if the file is smaller than a byte limit.

**component.js**
```js
import image from './image.png'
```

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
            options: {
              limit: 8192
            }  
          }
        ]
      }
    ]
  }
}
```

<h2 align="center">Options</h2>

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`limit`**|`{Number}`|`0`|Byte limit to inline files as DataURL|
|**`mimetype`**|`{String}`|`extname`|Specify MIME type for the file (Otherwise it's inferred from the file extension)|
|**`prefix`**|`{String}`|`false`|Parameters for the [`file-loader`](https://github.com/webpack-contrib/file-loader) are valid too. They are passed to the file-loader if used|

#### `limit`

If the file is greater than the limit (in bytes) the [`file-loader`](https://github.com/webpack-contrib/file-loader) is used and all query parameters are passed to it.

The limit can be specified via loader options and defaults to no limit.

**webpack.config.js**
```js
{
  loader: 'url-loader',
  options: {
    limit: 8192
  }
}
```

### `mimetype`

Set the MIME type for the file. If unspecified the file extensions will be used to lookup the MIME type.

**webpack.config.js**
```js
{
  loader: 'url-loader',
  options: {
    mimetype: 'image/png'
  }
}
```

### `prefix`

```js
{
  loader: 'url-loader',
  options: {
    prefix: 'img'
  }
}
```

<h2 align="center">Examples</h2>

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/bebraw.png?v=3&s=150">
        </br>
        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/d3viant0ne.png?v=3&s=150">
        </br>
        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/SpaceK33z.png?v=3&s=150">
        </br>
        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/TheLarkInn.png?v=3&s=150">
        </br>
        <a href="https://github.com/TheLarkInn">Sean Larkin</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/michael-ciniawsky.png?v=3&s=150">
        </br>
        <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/url-loader.svg
[npm-url]: https://npmjs.com/package/url-loader

[node]: https://img.shields.io/node/v/url-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-contrib/url-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/url-loader

[tests]: http://img.shields.io/travis/webpack-contrib/url-loader.svg
[tests-url]: https://travis-ci.org/webpack-contrib/url-loader

[cover]: https://coveralls.io/repos/github/webpack-contrib/url-loader/badge.svg
[cover-url]: https://coveralls.io/github/webpack-contrib/url-loader

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
