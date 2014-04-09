iris.screen(
    function (self) {
        self.create = function () {   
            console.log("contact Screen Created");
            self.tmpl(iris.path.screens.contact.html);

           

            

        };
        self.awake = function () {   
            console.log("contact Screen Awakened");
            
           
        };

        self.sleep = function () {
            console.log("contact Screen Asleep");
        };

        self.destroy = function () {
            console.log("contact Screen Destroyed");
        };
    },
    iris.path.screens.contact.js
);