iris.screen(
    function (self) {
        self.create = function () {   
            console.log("mainpage Screen Created");
            self.tmpl(iris.path.screens.mainpage.html);

            self.screens("screens",[
                    ["prueba",iris.path.screens.prueba.js],
                    ["carrusel",iris.path.screens.carrusel.js],
                    ["contact",iris.path.screens.contact.js],
                    ["categories",iris.path.screens.categories.js],
                    ["cover",iris.path.screens.cover.js]
                ]);
            
           

              
        };

        self.awake = function () {   
            console.log("main-page Screen Awakened");
             if ( !document.location.hash ) {                
                iris.navigate("#/cover"); //Default Screen
            }


        };

        self.sleep = function () {
            console.log("main-page Screen Asleep");
        };

        self.destroy = function () {
            console.log("main-page Screen Destroyed");
        };
    },
    iris.path.screens.mainpage.js
);