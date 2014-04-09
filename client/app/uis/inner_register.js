iris.ui(
    function (self) {
        self.create = function () {
            self.tmplMode(self.APPEND);
            self.tmpl(iris.path.uis.inner_register.html);

            
        };
        self.awake = function () {   
            console.log("inner_register Screen Awakened");
        };

        self.sleep = function () {
            console.log("inner_register Screen Asleep");
        };

        self.destroy = function () {
            console.log("inner_register Screen Destroyed");
        };
    },
    iris.path.uis.inner_register.js
);