var config = require('../../config');

var knex = require('knex')({
	client: 'pg',
	connection: config.db.pg.connection
});

module.exports = knex;
