server-down:
	cd etc/supervisor; supervisorctl -c supervisord.conf shutdown

server-up:
	cd etc/supervisor; supervisord -c supervisord.conf

server: server-down server-up

db-up:
	node database/unviews.js
	knex --cwd database migrate:latest
	node database/views.js

db-down:
	node database/unviews.js
	knex --cwd database migrate:rollback

db-refresh: db-down db-up

.PHONY: test
