var service = require('../../framework/service');
var users = require('./dal');
var validation = require('./validation');

var methods = {
	query: users.query,

	create: function create (data) {
		return users.create(data).then(users.find);
	}
};

module.exports = service({ methods: methods, validation: validation });
