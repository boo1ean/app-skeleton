var _ = require('lodash');
var errorHandler = require('./error-handler');

var adapter = function(action) {
	return function (req, res) {
		var params = _.extend({}, req.params, req.query, req.body);

		var onFulfilled = function(data) {
			res.json(data);
		};

		var onRejected = errorHandler(res);

		try {
			action(params, req.user, req, res).done(onFulfilled, onRejected);
		} catch (error) {
			onRejected(error);
		}
	};
}

var adapt = function(controller) {
	var actions = require(controller);
	var result = {};
	for (var name in actions) {
		result[name] = adapter(actions[name]);
	}
	return result;
}

module.exports = adapt;
