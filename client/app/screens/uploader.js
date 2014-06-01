iris.screen(
    function (self) {

       // var moviename,movie_year,actors,director,sinopsis,categorie,picture;//
       var moviename;

        var moviesAjax = iris.resource(iris.path.resource.movies);


        self.create = function () {   
            console.log("upload Screen Created");
            self.tmpl(iris.path.screens.uploader.html);

            self.get("enviar").click(function(){

            movie_name = self.get("movie_name").val();
            actors = self.get("Actors").val();
            movie_year = self.get("movie_year").val();
            director = self.get("Director").val();
            sinopsis = self.get("sinopsis").val();
            category = self.get("movie_categorie").val();
            picture = self.get("upload").val();


            //console.log(moviename+actors+director+sinopsis+categorie+picture);

                moviesAjax.add_movie(movie_name,actors,movie_year,director,sinopsis,category,picture,function(data){
                console.log(data);

                if(data){

                     $("#success").fadeIn(2000).fadeOut(1000);

                 }else{

                    $("#error").fadeIn(2000).fadeOut(1000);
                 }
              
              
               })

           });

            moviesAjax.getAllMovies(function(data){
                if(data.Status==200){
                    console.log(data);
                    var i =1;
                    for(var i in data.result){
                       
                       var movie_name = (data.result[i].movie_name);
                       var director_name = (data.result[i].director);
                       var movie_id = (data.result[i].movie_id);
                       var moviepicture =(data.result[i].imagen);
                       self.ui("UI_container", iris.path.uis.movieUI.js,{"name":movie_name,"director":director_name,"movieid":movie_id,"imagen":moviepicture},self.APPEND);
                    };
                }else{
                    console.log(data.message);
                }
            });


            
            

        };
        self.awake = function () {   
            console.log("upload Screen Awakened");
            
           
        };

        self.sleep = function () {
            console.log("upload Screen Asleep");
        };

        self.destroy = function () {
            console.log("upload Screen Destroyed");
        };
    },
    iris.path.screens.uploader.js
);