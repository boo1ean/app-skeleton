var PrettyError = require('pretty-error');
var _ = require('lodash');

var pe = new PrettyError();

function scalars_only (item) {
	return !_.isObject(item);
};

function objects_only (item) {
	return _.isObject(item);
};

function get_data (args) {
	args = args.filter(objects_only);

	if (args.length === 1) {
		return args[0];
	}

	return args;
};

function get_message (args) {
	return args.filter(scalars_only).join('');
};

function current_time () {
	return new Date();
};

function notify (level) {
	return function() {
		var args = Array.prototype.slice.apply(arguments);

		return console.log({
			level: level,
			time: current_time(),
			message: get_message(args),
			data: get_data(args)
		});
	};
};

var find_error = function(args) {
	return _.find(args, _.isObject);
};

function notify_error (level) {
	return function() {
		var args = Array.prototype.slice.apply(arguments);

		var message = get_message(args);
		var error = find_error(args);

		var rendered_error = pe.render(error);
		console.error(message, rendered_error);
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

process.on('uncaughtException', function onUncaughtException (error) {
	log.alert(error);
});
