var knex = require('../core/services/db');
var fs = require('fs');
var Promise = require('bluebird');
var colors = require('colors');

var files = fs.readdirSync(__dirname + '/views').map(function(file) {
	return {
		name: file,
		sql: fs.readFileSync(__dirname + '/views/' + file).toString()
	};
});

var promise = Promise.resolve();

files.forEach(function(file) {
	promise = promise.then(function() {
		return knex.raw(file.sql);
	}).then(function() {
		console.log('OK'.green + ' ' + file.name.cyan);
	});
});

promise.done(function() {
	console.log('Done!'.rainbow);
	process.exit();
}, function(reason) {
	console.log('ERR'.red)
	console.dir(reason);
	process.exit();
});
