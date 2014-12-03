var service = require('../../framework/service');
var posts = require('./dal');
var validation = require('./validation');

var methods = {
	create: function (data, user) {
		data.user_id = user.id;
		return posts.create(data).then(posts.find);
	},

	query: function () {
		return posts.queryLatest();
	}
};

module.exports = service({ methods: methods, validation: validation });
