iris.screen(
    function (self) {

      function UpdateDiv(status){
  
          if(status==true){
          self.get("messages").text("alguien te ha recomendado una peli!!");
        }else{
          
        }

    };
    

        $(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
      });
    });

       var moviesAjax = iris.resource(iris.path.resource.movies);
       var userAjax = iris.resource(iris.path.resource.user);
       iris.on("unread_message",UpdateDiv);

        self.create = function () {   
            console.log("carrusel Screen Created");
            self.tmpl(iris.path.screens.carrusel.html);

            userAjax.checkMessages(function(data){

              console.log(data);
              if(data.Status==200){
                 var i =1;
                    
                    for(var i in data.result){
                       
                       
                       var usermovies = (data.result[i].user_movies);
                    
                       console.log("pelicula: "+usermovies);
                       
                       //self.ui("micine_container", iris.path.uis.movieUI.js,{"usermovies":usermovies},self.APPEND);
                       
                    };
                  }
                    else{
                      console.log(data);
                    }
                

              
            });

            moviesAjax.getAllMovies(function(data){
                if(data.Status==200){
                    console.log(data);
                    var i =1;
                    
                    for(var i in data.result){
                       
                       var movie_name = (data.result[i].movie_name);
                       var director_name = (data.result[i].director);
                       var movie_id = (data.result[i].movie_id);
                       var imagen =(data.result[i].imagen)
                       self.ui("micine_container", iris.path.uis.movieUI.js,{"name":movie_name,"director":director_name,"movieid":movie_id,"imagen":imagen},self.APPEND);
                       
                    };
                }else{
                    console.log(data.message);
                }
            });



        
            self.get("buscar").click(function(){
                var searchRequest=self.get("termino").val();
            console.log("se ha recibido el actor"+searchRequest);
                console.log("hs pulsado el boton de buscar");
            });
      


        
      
        
       

            
        };

        self.awake = function () {   
        console.log("carrusel Screen Awakened");
        

        self.get("favoritas").click(function(){
            self.destroyUIs("micine_container");
            moviesAjax.getFavorites(function(data){
                if(data.Status==200){
                    console.log(data);
                    var i=1;

                    for(var i in data.result){
                       var movie_name = (data.result[i].movie_name);
                       var director_name = (data.result[i].director);
                       var imagen =(data.result[i].imagen);
                       var movie_id = (data.result[i].movie_id);
                       var hide = "false";
                       self.ui("micine_container", iris.path.uis.movieUI.js,{"name":movie_name,"director":director_name,"movieid":movie_id,"hide":hide,"imagen":imagen},self.APPEND);
                    };
                    
                }else{
                    console.log(data.message);
                    
                     $("#error").fadeIn(2000).fadeOut(1500);
                    
                }
            });
        });

        self.get("todas").click(function(){
          self.destroyUIs("micine_container");
           moviesAjax.getAllMovies(function(data){
                if(data.Status==200){
                    console.log(data);
                    var i =1;
                    
                    for(var i in data.result){
                       
                       var movie_name = (data.result[i].movie_name);
                       var director_name = (data.result[i].director);
                       var movie_id = (data.result[i].movie_id);
                       var imagen =(data.result[i].imagen);
                       self.ui("micine_container", iris.path.uis.movieUI.js,{"name":movie_name,"director":director_name,"movieid":movie_id,"imagen":imagen},self.APPEND);
                       
                    };
                }else{
                    console.log(data.message);
                }
            });
        });

        
            
            

        };

        self.sleep = function () {
            console.log("carrusel Screen Asleep");
        };

        self.destroy = function () {
            console.log("carrusel Screen Destroyed");
        };
    },
    iris.path.screens.carrusel.js
);