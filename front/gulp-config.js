var assets = require('../gulp/assets');

var js = assets.js.angularFramework(__dirname).concat(assets.js.angularApp(__dirname));
var css = assets.css.styles(__dirname);
var templates = assets.html.angularTemplates(__dirname);

module.exports = {
	name: 'front',
	path: __dirname,
	assets: {
		templates: templates,
		js: js,
		css: css
	}
};
