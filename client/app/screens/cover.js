iris.screen(
    function (self) {
        self.create = function () {   
            console.log("cover Screen Created");
            self.tmpl(iris.path.screens.cover.html);

            var ui_modal = self.ui("loginform_container", iris.path.uis.loginform.js);
            self.get("login").click(
             function(e) {
                console.log("has pinchado en el formulario");
                ui_modal.show();
                e.preventDefault();
             });
            
            self.get("close").click(
                function(){
                    ui_modal.hide();
                });
    


             };


            

        self.awake = function () {   
            console.log("cover Screen Awakened");

            
           
        };

        self.sleep = function () {
            console.log("cover Screen Asleep");
        };

        self.destroy = function () {
            console.log("cover Screen Destroyed");
        };
    },
    iris.path.screens.cover.js
);