/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var loaderUtils = require("loader-utils");
var mime = require("mime");
module.exports = function(content) {
	this.cacheable && this.cacheable();
	var query = loaderUtils.parseQuery(this.query);
	var limit = (this.options && this.options.url && this.options.url.dataUrlLimit) || 0;
	if(query.limit) {
		limit = parseInt(query.limit, 10);
	}
	var mimetype = query.mimetype || query.minetype || mime.lookup(this.resourcePath);
	if(limit <= 0 || content.length < limit) {
		return "module.exports = " + JSON.stringify("data:" + (mimetype ? mimetype + ";" : "") + "base64," + content.toString("base64"));
	} else {
		var url = loaderUtils.interpolateName(this, query.name, {
				context: query.context || this.options.context,
				content: content,
				regExp: query.regExp
			});
		this.emitFile(url, content);
		return "module.exports = " + JSON.stringify(query.cdnUrl + url);
	}
}
module.exports.raw = true;
