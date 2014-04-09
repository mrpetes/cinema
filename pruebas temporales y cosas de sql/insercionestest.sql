insert into user_info (mail,password,name) values ("pedrorupster@gmail.com","abc123456","pedro");

insert into categories (name_categorie) values ("terror");
insert into categories (name_categorie) values ("accion");
insert into categories (name_categorie) values ("animacion");

insert into movies (movie_name,movie_year,actors,movie_category)values("Dracula",1992,"Winona Ryder, Gary Oldman","terror");
insert into movies (movie_name,movie_year,actors,movie_category)values("Jungla de cristal",1988,"Bruce Willis","accion");

insert into user_movies(user_mail,user_movies)values ("pedrorupster@gmail.com",1);

//CONSULTA PARA VER TODAS LAS PELICULAS QUE TIENE UN USUARIO EN CONCRETO//

	select m.movie_name ,m.movie_id,u.user_movies,u.user_mail from movies m , user_movies u where m.movie_id=u.user_movies and u.user_mail = 'pedrorupster@gmail.com';

//CONSULTA PARA VER UNA PELICULA  POR ACTOR //

	select *from movies where actors like '%willis%';

//CONSULTA PARA VER LAS PELICULAS POR GENERO//

	select *from movies where movie_category ='terror';

//CONSULTA PARA VER LAS PELICULAS POR AÑO//

	select * from movies where movie_year ='1992';

//CONSULTA PARA VER LA NOTA  DE UNA PELICULA//

	select score from movies where movie_name='Los Juegos Del Hambre';


//CONSULTA PARA VER LA NOTA MEDIA DE LAS PELICULAS EN GENERAL DE UN USUARIO EN CONCRETO//

select avg(m.score), m.movie_name ,m.movie_id,u.user_movies,u.user_mail from movies m , user_movies u where m.movie_id=u.user_movies and u.user_mail = 'pedrorupster@gmail.com';


//CONSULTA PARA VER LA NOTA  DE ALGUNA PELICULA EN PARTICULAR DE UN USUARIO CONCRETO//

select m.score, m.movie_name ,m.movie_id,u.user_movies,u.user_mail from movies m , user_movies u where m.movie_id=u.user_movies and u.user_mail = 'pedrorupster@gmail.com' and m.movie_name='Los Juegos Del Hambre';