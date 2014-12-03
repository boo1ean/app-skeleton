var service = require('app-service');
var log = require('./log');

function before (methodName) {
	log.debug(this.methodName, arguments);
}

service.configure({ before: before });

module.exports = service;
