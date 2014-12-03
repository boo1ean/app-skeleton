var posts = require('../../core/posts');

var controller = {
	query: function query () {
		return posts.query();
	},

	create: function create (params, req) {
		return posts.create(params, req.user);
	}
};

module.exports = controller;
