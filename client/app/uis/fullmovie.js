iris.ui(
    function (self) {
        self.create = function () {
            self.tmplMode(self.APPEND);
            self.tmpl(iris.path.uis.fullmovie.html);
            self.get("close").click(function(){
                console.log("pinchaste");
                self.destroyUI();
               
            })

            self.get("moviename").text("TITULO DE LA PELI :" +self.setting("moviename"));
            self.get("director").text("DIRECTOR/ES:"+self.setting("director"));
            self.get("actors").text("ACTORES :"+self.setting("actors"));
            self.get("score").text("VALORACION:"+self.setting("score"));
            self.get("trailer").attr("src",""+self.setting("trailer")+"");
            self.get("portada").attr("src",""+self.setting("imagen")+"");
            
           

            
        };
        self.awake = function () {   
            console.log("fullmovie UI Awakened");

          
          
        };

        self.sleep = function () {
            console.log("fullmovie UI Asleep");
        };

        self.destroy = function () {
            console.log("fullmovie UI Destroyed");
        };
    },
    iris.path.uis.fullmovie.js
);