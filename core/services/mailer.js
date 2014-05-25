var nodemailer = require('nodemailer');
var Q = require('q');
var _ = require('lodash');
var config = require('../../config').mailer;

var transport = nodemailer.createTransport(config.transport, config.nodemailer);

module.exports = {
	send: function(message) {
		var deferred = Q.defer();

		message = _.pick(message, ['from', 'to', 'subject', 'text', 'html']);
		
		if (!message.from || !message.to || !message.subject || !(message.text || message.html)) {
			deferred.reject(new Error('From, to, subject, text or html are required message fields.'));
		}
		
		if (_.isArray(message.to)) {
			message.to = message.to.join(', ');
		}

		// Allow utf-8 subjects
		message.subject = '=?utf-8?B?' + (new Buffer(message.subject).toString('base64')) + '?=';

		transport.sendMail(message, function(error, response) {
			if (error) {
				deferred.reject(error);
			} else {
				deferred.resolve();
			}
		});
		
		return deferred.promise;
	}
};
