var knex = require('../core/services/db');

var sql = ' \
	drop view \
	if exists \
	v_posts cascade \
';

knex.raw(sql).then(function() {
	console.log('Successfully dropped views');
	process.exit();
}, function() {
	console.log(arguments);
});
