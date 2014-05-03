var util = require('util');
var log = require('../core/log');

module.exports = function (res) {
	return function (error) {
		if (error && error.errors) {
			res.json(error);
		} else {
			log.error(error);
			res.status(500);
			res.end();
		}
	};
};
