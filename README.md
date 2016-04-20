# url loader for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

The `cdn-url` loader works like the `file` loader, but can return a Data Url if the file is smaller than a limit. Otherwise it returns a link to a specified resource on a CDN.

The limit can be specified with a query parameter. (Defaults to no limit)

If the file is greater than the limit the CDN link is used.

``` javascript
require("cdn-url?limit=10000!./file.png");
// => DataUrl if "file.png" is smaller that 10kb

require("cdn-url?mimetype=image/png!./file.png");
// => Specify mimetype for the file (Otherwise it's inferred from extension.)
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
