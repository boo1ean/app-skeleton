var PrettyError = require('pretty-error');
var pe = new PrettyError();

var notify = function(level) {
	return console.log.bind(console, level);
};

var notify_error = function(level) {
	return function(error) {
		console.error(level);
		var rendered_error = pe.render(error);
		console.error(rendered_error);
	};
};

var log = {
	/**
	 * System is unusable.
	 */
	emergency: notify_error('emergency'),
	
	/**
	 * Action must be taken immediately.
	 *
	 * Example: Entire website down, database unavailable, etc. This should
	 * trigger the SMS alerts and wake you up.
	 */
	alert: notify_error('alert'),
	
	/**
	 * Critical conditions.
	 *
	 * Example: Application component unavailable, unexpected exception.
	 */
	critical: notify_error('critical'),
	
	/**
	 * Runtime errors that do not require immediate action but should typically
	 * be logged and monitored.
	 */
	error: notify_error('error'),
	
	/**
	 * Exceptional occurrences that are not errors.
	 *
	 * Example: Use of deprecated APIs, poor use of an API, undesirable things
	 * that are not necessarily wrong.
	 */
	warning: notify('warning'),
	
	/**
	 * Normal but significant events.
	 */
	notice: notify('notice'),
	
	/**
	 * Interesting events.
	 *
	 * Example: User logs in, SQL logs.
	 */
	info: notify('info'),
	
	/**
	 * Detailed debug information.
	 */
	debug: notify('debug'),
	
	/**
	 * Logs with an arbitrary level.
	 */
	log: notify('log')
};

module.exports = log;

process.on('uncaughtException', function (error) {
	log.alert('Uncaught exception', error);
});
