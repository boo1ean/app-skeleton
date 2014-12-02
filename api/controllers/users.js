var users = require('../../core/users');

var controller = {
	query: function create () {
		return users.query();
	}
};

module.exports = controller;
