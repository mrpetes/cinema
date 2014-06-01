iris.ui(
    function (self) {
        
        

        self.create = function () {
            self.tmplMode(self.APPEND);
            self.tmpl(iris.path.uis.modalshare.html);
            
            var movieid= self.setting("movieid");
            var moviename = self.setting("moviename");
            self.get("titulo").text("TITULO DE LA PELI: "+moviename);






    
        };
        self.awake = function () { 

           var moviesAjax = iris.resource(iris.path.resource.movies);
           var movieid= self.setting("movieid");
           var moviename = self.setting("moviename");
           
           self.get("buscaruser").click(function(){
            var user = self.get("usuario").val();
            moviesAjax.userSearch(moviename,movieid,user,function(data){
                if(data.Status==200){
                console.log(data);
                }else{
                    console.log("error");
                }
            })
            



          });

          self.get("close").click(function(e){
                e.preventDefault();
                self.destroyUI();
            });
          self.get("buscaruser").click(function(e){
                e.preventDefault();
                self.destroyUI();
            });
     

        };

        self.sleep = function () {
            console.log("modalshare UI Asleep");
        };

        self.destroy = function () {
            console.log("modalshare UI Destroyed");
        };
    },
    iris.path.uis.modalshare.js
);