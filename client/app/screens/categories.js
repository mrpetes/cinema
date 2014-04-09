iris.screen(

   

        function(self) {
            
            self.create = function() {
                self.tmpl(iris.path.screens.categories.html);
                console.log("categories Screen Created");
                load_categories();



                
            };
            self.awake = function() {
                load_categories();
                console.log("categories Screen Awakened");
            };

            self.sleep = function() {
                console.log("categories Screen Asleep");
            };

            self.destroy = function() {
                console.log("categories Screen Destroyed");
            };


            function load_categories(){


             

                alert("llamada a funcion carga categorias");
                $("#div_categorias").remove();
                var i = 0;
                var check = $('#addfav:checked').val();
                var div_allcategories = $("<div id='div_categorias'></div>");
                var arrcategories = new Array("TERROR","ROMANCE","ANIMACION","HISTORICO","AVENTURAS","COMEDIA","SAGAS","INFANTIL","ACCION","THRILLER","MUSICAL","DOCUMENTAL");
                
                while(i<arrcategories.length){
                var singlecat=$("<div class='col-md-4 col-lg-2 col-xs-6' id='singlecat'></div>");
                var div_picture = $("<div class='thumbnail col-lg-8 col-md-8 col-xs-8' thumbnail'><img src= 'img/categories/" + arrcategories[i ] + ".jpg' ></div>");
                var label = $("<div id='label'><label>" + arrcategories[i ]+ "</label></div>");
                var checkbox = $("<input type='checkbox' name='addfav' data-id='" + arrcategories[i] + "' id='" +arrcategories[i] + "'></span>");
                var button =$("<button type='button'  class='btn btn-primary col-md-12 col-lg-12 col-xs-12')'><h6>ADD</h6></button>");
                div_picture.append(label);
                button.append(checkbox);
                div_picture.append(button);
                singlecat.append(div_picture);
                $(div_allcategories).append(singlecat);
                
                 i++;
                 
                
            };
            $("#categories").append(div_allcategories);
        };

        function check_checked(){

            $('#addfav:checked').val();
        };
         check_checked();
       
        },iris.path.screens.categories.js
        );
