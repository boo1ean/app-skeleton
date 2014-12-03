var users = require('../../core/users');

var controller = {
	query: function query () {
		return users.query();
	},

	create: function create (params) {
		return users.create(params);
	}
};

module.exports = controller;
