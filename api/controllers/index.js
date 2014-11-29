var path = require('path');
var Promise = require('bluebird');

module.exports = {
	index: function(params, req, res) {
		return new Promise(function (resolve) {
			res.sendFile(path.resolve(__dirname + '/../../front/server-views/index.html'), resolve)
		});
	}
};
