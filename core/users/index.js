var service = require('../../framework/service');

var methods = {
	query: function create () {
		return [
			{
				email: 'user@app-helpers.io',
				name: 'John Galt'
			},
			{
				email: 'snow@app-helpers.io',
				name: 'John Snow'
			},
		];
	}
};

module.exports = service({ methods: methods });
