var _ = require('lodash')
var service = require('../../framework/service');
var users = require('./dal');
var validation = require('./validation');

var colors = [
	'black', 'maroon', 'green', 'navy', 'olive',
	'purple', 'teal', 'blue', 'silver',
	'gray', 'fuchsia', 'aqua'
];

var methods = {
	query: users.query,

	create: function create (data) {
		data.color = _.sample(colors);
		return users.create(data).then(users.find);
	}
};

module.exports = service({ methods: methods, validation: validation });
