//DESDE EL FORMULARIO DE REGISTRO RECOGEMOS LOS CAMPOS DE LOS VALORES DEL USUARIO//

//ESTO LO HACEMOS EN EL ARCHIVO LOGINFORM.JS//

  self.get("register-btn").click(function(){
             var username =self.get("register-username").val();
             var usermail = self.get("register-email").val();
             var userpassword = self.get("register-password").val();
             
            //recogemos los valores con el metodo .val() si no , nos da error al tratar el atributo siempre como un string// 

            //usamos la funcion de ajax de iris y desde la funcion de abajo llamamos al metodo register de userajax.js//
                    userAjax.register(username,userpassword,usermail,function(data){ //que es el callback con el data que es el recipiente de la respuesta aun vacio//
                    console.log(data); //este es el data final con el  resultado de la operacion //
              
                })

                    self.get("register-username").val(''); //esto lo hacemos para volver a dejar esos campos vacios//

                    
                    self.get("register-password").val('');
                    
                    
             
         });

  //EN USERAJAX.JS//


  		iris.resource(
        function(self) {

            self.register = function(user, password, email, callback) { //recibe los campos de la loginform.js , el callback es la function (data) enviada anteriormente//

                console.log("estas dentro de la funcion register");
                alert("el valor de usuario es"+user+"el valor de password es: "+password+" el valor de email es "+email);
                self.post("server/SERVICES/userService.php/signup",{name:user,password:password,mail:email}).done(function(data) { 
                	//llamamos al metodo post y le pasamos los datos de nuevo con la url ya preparada por toro//
                	//en el objeto que le pasamos le damos primero el nombre de la clase en php y lo igualamos con el valor recibido//
                	//en este caso por ejemplo name(nombre de la clase):user(atributo recibido)//
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            };
            //en cada uno de los dos casos , sea fail o done , reciben la funcion con el recipiente data y lo llenan con el resultado de la consulta ajax//

        }, 
        iris.path.resource.user
);
