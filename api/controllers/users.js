var users = require('../../core/users');

var controller = {
	query: function query () {
		return users.query();
	}
};

module.exports = controller;
