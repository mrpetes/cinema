iris.resource(
        function(self) {


            self.add_movie = function(moviename,actors,movie_year,director,sinopsis,category,picture,callback) {
                 console.log("estas dentro de la funcion add_movie de moviesajax");
               // alert("movie_name :"+movie_name+" actors : "+actors+" director "+director+" sinopsis :"+sinopsis+" movie_categorie"+movie_categorie+" upload "+upload);
                alert("el titulo de la pelicula recogido por moviesAjax es : "+moviename);
                self.post("server/SERVICES/movieServices.php/addmovie", {movie_name: moviename,actors:actors,movie_year:movie_year,director:director,sinopsis:sinopsis,movie_category:category,imagen:picture}).done(function(data) {
                     callback(data);
                }).fail(function(data){
                     callback(data);
                });
            };

            self.getAllMovies = function(callback){
                console.log("estas dentro de getAllMovies");
                self.post("server/SERVICES/movieServices.php/getAllMovies").done(function(data){
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            };

            self.getFullMovie  = function(movieid,callback){
                console.log("estas dentro de getFullMovie y el id recogido por la funcion es : "+movieid);

                self.post("server/SERVICES/movieServices.php/getFullMovie",{movie_id:movieid}).done(function(data){
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            };

            self.addCollection = function(movieid ,callback){
                console.log("el valor recibido por addCollection es de "+movieid);
                self.post("server/SERVICES/movieservices.php/addCollection",{movie_id:movieid}).done(function(data){
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            };

            self.getFavorites = function(callback){
                console.log("estas dentro de getFavorites");
                self.post("server/SERVICES/movieservices.php/getFavorites").done(function(data){
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            }

            self.compartir =function(callback){
                console.log("estas dentro de compartir");
                self.post("server/SERVICES/movieservices.php/compartir").done(function(data){
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            }

            self.userSearch =function(moviename,movieid,user,callback){
                console.log("estas dentro de buscar usuario");
                console.log("el movieid recibido es :"+movieid);
                console.log("el usuario recibido es :"+user);
                console.log("la pelicula recibida es "+moviename);
                self.post("server/SERVICES/movieservices.php/userSearch",{name:user,movie_name:moviename,movie_id:movieid}).done(function(data){
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            }

            self.totalScore = function(movieid){
                console.log("el movieid es"+movieid);
                self.post("server/DAOS/totalScore.php").done(function(data){
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            }

            

            /*self.rating = function(callback){
                console.log("estas en rating");
                self.get("server/SERVICES/movieServices.php/rating").
            } */
       
          
        }, 
        iris.path.resource.movies
);

/*
                var movieid = self.setting("movieid");
                

                 $.ajax({
                type:"post",
                data: {'value' : value,'movieid':movieid},
                url:"http://localhost/cinema buena/cinema2/cinema buena /server/DAOS/rating.php",
                async: true,
                success: function(data){
                console.log("exito en la consulta");
                console.log(data);


            },
            error: function (obj, error, objError){
            console.log("ha sucedido un error a la hora de enviar la nota de la pelicula");
         }
            });

   




















            */