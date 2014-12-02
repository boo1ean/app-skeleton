var dal = require('../../framework/dal');
var knex = require('../services/db');

module.exports = dal({ table: 'users', knex: knex });
