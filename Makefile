server-down:
	cd etc/supervisor; supervisorctl -c supervisord.conf shutdown

server-up:
	cd etc/supervisor; supervisord -c supervisord.conf

server: server-down server-up

db-up:
	knex --cwd database migrate:latest

db-down:
	knex --cwd database migrate:rollback

db-refresh: db-down db-up

.PHONY: test
