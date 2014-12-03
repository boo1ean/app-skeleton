var v = require('../../framework/validation');
var users = require('./dal');

v.extendRules({
	'unique name': uniqueName
});

function uniqueName (name) {
	return users.find({ name: name }).then(function (user) {
		if (user) {
			return 'uniq name plz';
		}
	});
}

var create = v({
	name: ['required', 'unique name']
});

module.exports = {
	create: create
};
