var config = require('../../config');

var pg = require('knex')({
  client: 'pg',
  connection: config.db.pg.connection
});

module.exports = db;
