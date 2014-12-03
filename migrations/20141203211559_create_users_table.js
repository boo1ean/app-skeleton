'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(t) {
		t.bigIncrements().primary();

		t.dateTime('created_at').notNull();
		t.dateTime('updated_at').nullable();

		t.text('email').notNull();
		t.text('name').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
