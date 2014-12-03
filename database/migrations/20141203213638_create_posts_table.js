'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('posts', function(t) {
		t.bigIncrements().primary();

		t.dateTime('created_at').notNull().defaultTo('now');
		t.dateTime('updated_at').nullable();

		t.text('body').notNull();

		t.bigint('user_id').references('users.id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('posts');
};
