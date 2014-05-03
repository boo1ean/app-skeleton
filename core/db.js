var pg      = require('pg'),
    Q       = require('q'),
    sprintf = require('util').format,
    _       = require('lodash'),
    uri     = require('../config').db.uri;

var query = function() {
	var deferred = Q.defer();
	var args = Array.prototype.slice.call(arguments);
	pg.connect(uri, function(err, client, done) {
		if (err) {
			deferred.reject({
				args: args,
				err: err
			});
		} else {
			args.push(function(err, result) {

				done(); // Release client back to the pool

				if (err) {
					deferred.reject({
						args: args,
						err: err
					});
				} else {
					deferred.resolve(result.rows);
				}
			});

			client.query.apply(client, args);
		}
	});

	return deferred.promise;
};

var querySingle = function() {
	var args = Array.prototype.slice.call(arguments);
	return query.apply(this, args).then(function (data) {
		return data.length >= 1 ? data[0] : null;
	});
};

var insert = function(table, row) {
	var sql = 'INSERT INTO %s %s VALUES %s RETURNING *';

	var prepare = function(row) {
		var tokens = [];
		var count  = _.keys(row).length;

		for (var i = 1; i <= count; ++i) {
			tokens.push('$' + i);
		}

		return '(' + tokens.join() + ')';
	};

	var fields = '(' + _.keys(row).join() + ')';
	var placeholders = prepare(row);

	return querySingle(sprintf(sql, table, fields, placeholders), _.values(row));
};

var update = function(table, row) {
	if (!row.id) {
		throw new Error('Can\'t update row without id.');
	}

	var params = [row.id];
	var sql = 'UPDATE ' + table + ' SET %s WHERE id = $1 RETURNING *';
	
	var s = _.keys(row).filter(function (key) {
		return key !== 'id';
	}).map(function (key, index) {
		params.push(row[key]);
		return key + ' = $' + (index + 2);
	}).join(', ');

	sql = sprintf(sql, s);
	return querySingle(sql, params);
};

module.exports = {
	query: query,
	querySingle: querySingle,
	insert: insert,
	update: update
};
