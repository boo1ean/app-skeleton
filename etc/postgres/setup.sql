CREATE USER root WITH PASSWORD 'root';
CREATE DATABASE app TEMPLATE template0 OWNER root
	ENCODING 'UTF8'
	LC_COLLATE = 'en_US.UTF-8'
	LC_CTYPE = 'en_US.UTF-8';
