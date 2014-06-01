iris.ui(
    function (self) {
        self.create = function () {
            self.tmplMode(self.APPEND);
            self.tmpl(iris.path.uis.categorieUI.html);

    
        };
        self.awake = function () {   
            console.log("categorieUI UI Awakened");
            self.get("descripcion").text("PELICULAS DE TEMATICA :  " +self.setting("descripcion"));
            self.get("genero").text(self.setting("genero"));
            self.get("ruta").attr("src","img/categories/"+self.setting("genero")+".jpg");
            

        };

        self.sleep = function () {
            console.log("categorieUI UI Asleep");
        };

        self.destroy = function () {
            console.log("categorieUI UI Destroyed");
        };
    },
    iris.path.uis.categorieUI.js
);