iris.screen(
    function (self) {

       // var userAjax = iris.resource(iris.path.resource.user);
        //var sleep;

        self.create = function () {   
            console.log("cover Screen Created");
            self.tmpl(iris.path.screens.cover.html);

            /* userAjax.me(function(data){
                console.log(data);
                if(data.Status === "200"){
                    iris.navigate("#/micine");
                }
            });*/

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
            
            /* sleep = false;
                console.log("cover Screen Awakened");
                userAjax.me(function(data){
                    if(data.Status === "200"){
                        sleep = true;
                        iris.navigate("#/carrusel");
                    }
                 });
            };*/

            
           
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