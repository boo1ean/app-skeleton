var Q = require('q');

module.exports = {
	index: function(params, req) {
		return Q({
			verb: 'hello',
			target: 'world'
		});
	}
};
