iris.screen(
    function (self) {
        self.create = function () {   
            console.log("prueba Screen Created");
            self.tmpl(iris.path.screens.prueba.html);

             

            

        };
        self.awake = function () {   
            console.log("prueba Screen Awakened");
            
           
        };

        self.sleep = function () {
            console.log("prueba Screen Asleep");
        };

        self.destroy = function () {
            console.log("prueba Screen Destroyed");
        };
    },
    iris.path.screens.prueba.js
);