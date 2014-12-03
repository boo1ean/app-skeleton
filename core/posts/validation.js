var v = require('../../framework/validation');

var create = v({
	body: ['required']
});

module.exports = {
	create: create
};
