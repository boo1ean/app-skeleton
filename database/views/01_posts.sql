create or replace view v_posts as 
select

p.*,

(select row_to_json(row) from (
	select u.id, u.name
	from users u
	where u.id = p.user_id) row) as user

from posts p;
