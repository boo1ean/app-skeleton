var dal = require('../../framework/dal');
var knex = require('../services/db');

var methods = {
	queryLatest: function () {
		return this.query().limit(30).orderBy('id', 'desc');
	}
};

module.exports = dal({ table: 'posts', knex: knex, methods: methods });
