var service = require('app-service');
var log = require('./log');

function before (methodName) {
	this.time = process.hrtime();
	log.debug(methodName, Array.prototype.slice.call(arguments, 1));
}

function after (methodName) {
	var diff = process.hrtime(this.time);
	log.debug(methodName, 'finished', diff);
}

service.configure({ before: before, after: after });

module.exports = service;
