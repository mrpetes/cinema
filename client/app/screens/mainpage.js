iris.screen(
    function (self) {
        self.create = function () {   
            console.log("mainpage Screen Created");
            self.tmpl(iris.path.screens.mainpage.html);
            self.on("unread_message",updateDiv);
            var userAjax = iris.resource(iris.path.resource.user);

            self.screens("screens",[
                    ["prueba",iris.path.screens.prueba.js],
                    ["carrusel",iris.path.screens.carrusel.js],
                    ["contact",iris.path.screens.contact.js],
                    ["categories",iris.path.screens.categories.js],
                    ["cover",iris.path.screens.cover.js],
                    ["upload",iris.path.screens.uploader.js],
                    ["news",iris.path.screens.news.js]
                ]);

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
            
           self.get("closesession").click(function(e){
                e.preventDefault();
                userAjax.logout(function(data){
                    console.log(data);
                if(data.Status==200){
                     iris.navigate("#/cover");
                }
                })
           });

           function updateDiv(){
            alert("llamamos a updateDiv");
        };

              
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