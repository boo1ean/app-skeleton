var users = require('../../core/users');
var config = require('../../config').apps.api;
var jwt = require('jsonwebtoken');

var controller = {
	query: function query () {
		return users.query();
	},

	create: function create (params) {
		return users.create(params).then(function (user) {
			var options = { expiresInMinutes: config.jwt_expires_in_minutes };
			var token = jwt.sign(user, config.jwt_secret, options);
			return { token: token, user: user };
		});
	}
};

module.exports = controller;
