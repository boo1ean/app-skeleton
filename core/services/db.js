var config = require('../../config');

var knex = require('knex')(config.db);

module.exports = knex;
