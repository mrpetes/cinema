create database if not exists thecinemaconspiracy;
use thecinemaconspiracy;


    //ORDEN DE INSERCION DE LAS TABLAS//

  
   create table movies(
	movie_id INT NOT NULL AUTO_INCREMENT,
	movie_name VARCHAR(200) NOT NULL,
	movie_year INT(10),
	actors VARCHAR(200)NOT NULL,
	movie_category VARCHAR(100)NOT NULL,
	imagen LONGBLOB,
	score DECIMAL(3,2),
	primary key(movie_id)

	);

   	create table categories(
    name_categorie VARCHAR(100),
    PRIMARY KEY(name_categorie)
    );
		
	create table user_info(
    mail VARCHAR(100),
    password varchar(20),
    name VARCHAR(100),
    surname VARCHAR(100),
    phone VARCHAR(9),
    mobilephone VARCHAR(9),
    user_categories VARCHAR(100),
    confirmation_code VARCHAR(200),
    PRIMARY KEY (mail),
    FOREIGN KEY (user_categories) REFERENCES categories(name_categorie)

    );

    create table user_movie_categories(
    mail_user_data varchar(100) not null,
    user_categories varchar (100) not null,
    FOREIGN KEY (mail_user_data) REFERENCES user_info(mail),
    FOREIGN KEY (user_categories) REFERENCES categories(name_categorie)
    );

    create table user_movies(
		user_mail VARCHAR(100)NOT NULL,
		user_movies int NOT NULL,
		FOREIGN KEY(user_mail) REFERENCES user_info(mail),
		FOREIGN KEY(user_movies)REFERENCES movies(movie_id)
		
	
	);
       //esta tabla aun  no la he podido insertar//
	create table user_movie_share(
			user_mail VARCHAR(100),
			movie_shared VARCHAR(200),
			share_link VARCHAR (100),
    		PRIMARY KEY (share_link),
			FOREIGN KEY (movie_shared) REFERENCES movies(movie_name),
			FOREIGN KEY (user_mail)REFERENCES user_info(mail)
			

		);

	//CONSULTA PARA VER TODAS LAS PELICULAS QUE TIENE UN USUARIO EN CONCRETO//

	select m.movie_name ,m.movie_id,u.user_movies,u.user_mail from movies m , user_movies u where m.movie_id=u.user_movies and u.user_mail = 'pedrorupster@gmail.com';