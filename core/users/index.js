var service = require('../../framework/service');
var dal = require('./dal');
var validation = require('./validation');

var methods = {
	query: dal.query,

	create: function create (data) {
		return dal.create(data).then(dal.find);
	}
};

module.exports = service({ methods: methods, validation: validation });
