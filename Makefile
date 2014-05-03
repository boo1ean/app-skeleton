server-down:
	cd etc/supervisor; supervisorctl -c supervisord.conf shutdown

server-up:
	cd etc/supervisor; supervisord -c supervisord.conf

server: server-down server-up

.PHONY: test
