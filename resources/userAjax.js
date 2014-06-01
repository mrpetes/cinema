iris.resource(
        function(self) {


            self.login = function(user, password, callback) {
                 
                alert(" dentro de la funcion login de userajax el valor de usuario es"+user+"el valor de password es: "+password);
                self.post("server/SERVICES/userService.php/login", {name: user, password: password}).done(function(data) {
                     callback(data);
                }).fail(function(data){
                     callback(data);
                });
            };       
       
            self.register = function(user, password, email, callback) {

                console.log("estas dentro de la funcion register");
                alert("el valor de usuario es"+user+"el valor de password es: "+password+" el valor de email es "+email);
                self.post("server/SERVICES/userService.php/signup",{name:user,password:password,mail:email}).done(function(data) {
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });
            };

            self.me = function(callback) {
                return self.post("server/SERVICES/userService.php/me").done(function(data) {
                    callback(data);
                });
            };

             self.logout = function(callback) {
                return self.post("server/SERVICES/userService.php/logout").done(function(data) {
                    
                    callback(data);
                    
                });
            };
            self.checkMessages = function(callback){
                console.log("estas dentro de checkMessages");
                self.post("server/SERVICES/userService.php/checkMessages").done(function(data){
                    callback(data);
                }).fail(function(data){
                    callback(data);
                });

            };

        }, 
        iris.path.resource.user
);






