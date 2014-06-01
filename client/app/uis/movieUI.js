iris.ui(
    function (self) {

         var moviesAjax = iris.resource(iris.path.resource.movies);


        self.create = function () {
 
            self.tmplMode(self.APPEND);
            self.tmpl(iris.path.uis.movieUI.html); 
            

            var prueba ="prueba de recepcion de parametros";

            var moviesAjax = iris.resource(iris.path.resource.movies);
            var movieid = self.setting("movieid");
            var imagen =self.setting("imagen");
            console.log(imagen);
            var hide = self.setting("hide");
            console.log(hide);

            var fullmovie_UI = self.ui("fullmovie_container",iris.path.uis.fullmovie.js,self.APPEND);


            
             self.get("coleccion").click(function(e){
                e.preventDefault();
                console.log("has pinchado en coleccion");
                console.log("el valor recibido por la funcion es "+movieid);
                moviesAjax.addCollection(movieid,function(data){
                    console.log(data);
                });
                

            
              
            });




           /* self.get("compartir").click(function(e){
                e.preventDefault();
                console.log("has pinchado en compartir");
                var share  = self.ui("contador",iris.path.uis.modalshare.js,self.APPEND);

               /* moviesAjax.compartir(movieid,function(data){
                    console.log(data);
                })*/
            // }); 


            

            self.get("detalle").click(function(e){
                e.preventDefault();
                console.log("has pinchado en detalle");
                moviesAjax.getFullMovie(movieid,function(data){

                    if(data.Status==200){
                        console.log(data);
                        var i = 1;
                        for (i in data.result){
                            var movie_name = (data.result[i].movie_name);
                            var director_name = (data.result[i].director);
                            var actors_name = (data.result[i].actors);
                            var movie_year = (data.result[i].movie_year);
                            var imagen =(data.result[i].imagen);
                            var movie_category = (data.result[i].movie_category);
                            var score = (data.result[i].score);
                            var sinopsis = (data.result[i].sinopsis);
                            var trailer = (data.result[i].trailer);
                            console.log(sinopsis);
                            var fullmovie_UI = self.ui("fullmovie_container",iris.path.uis.fullmovie.js,{"moviename":movie_name,"director":director_name,"actors":actors_name,"score":score,"trailer":trailer,"imagen":imagen},self.APPEND);
                            fullmovie_UI.show();
                            
                            

                    };
                    }else{
                        console.log("error en la consulta");

                    }

                });
              
                

            });

            



           

            self.get("stars").on('starrr:change', function(e, value ){
                self.get("count").text(value);
                 $.ajax({
                type:"post",
                data: {'value' : value,'movieid':movieid},
                url:"http://localhost/cinemaBuena/cinema2/cinemaBuena/server/DAOS/rating.php",
                async: true,
                success: function(data){
                console.log("exito en la consulta");
                console.log(data);
            },
            error: function (obj, error, objError){
            console.log("ha sucedido un error a la hora de enviar la nota de la pelicula");
         }
            });

     });           
            stars();
            

            
            
    
        };
        self.awake = function () {   
            console.log("movieUI Awakened");
            var movieid = self.setting("movieid");
            var moviename =self.setting("name");
            
            self.get("moviename").text("TITULO DE LA PELI :" +self.setting("name"));
            self.get("director").text("DIRECTOR : "+self.setting("director"));
            self.get("portada").attr("src",""+self.setting("imagen")+"");

            
            




            self.get("close").click(
                function(){
                    
                    console.log("has pinchado el boton de cerrar");
                });
           

           self.get("compartir").click(function(e){
                e.preventDefault();
                console.log("has pinchado en compartir"+movieid);
                var share  = self.ui("modalshare_container",iris.path.uis.modalshare.js,{"movieid":movieid,"moviename":moviename},self.APPEND);


               
             }); 
            
           
            
            

        };

        self.sleep = function () {
            console.log("movieUI Asleep");
        };

        self.destroy = function () {
            console.log("movieUI  Destroyed");
        };
    },
    iris.path.uis.movieUI.js
);