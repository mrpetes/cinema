iris.ui(
    function (self) {

        var username,userpassword,usermail,sleep;
        var userAjax = iris.resource(iris.path.resource.user);

        self.create = function () {
            self.tmplMode(self.APPEND);
            self.tmpl(iris.path.uis.loginform.html); 

             self.get("btn-login").click(function(e){
                e.preventDefault();
                console.log("has pinchado en login");


             }); 
            

            self.get("reglink").click(function(e){
                e.preventDefault();
                console.log("has pinchado en register");


             }); 
             self.get("forgetpass").click(function(e){
                e.preventDefault();
                console.log("has pinchado en fortgetpass");


             }); 
            
              self.get(" signinlink").click(function(e){
                e.preventDefault();
                console.log("has pinchado en sign in");


             });

            self.get("register-btn").click(function(){
             var username =self.get("register-username").val();
             var usermail = self.get("register-email").val();
             var userpassword = self.get("register-password").val();
             
             

            if(validateFormRegister(username,usermail,userpassword)){
                    userAjax.register(username,userpassword,usermail,function(data){
                    console.log(data);

                    if(data.Status==="200"){

                     $("#success").fadeIn(2000).fadeOut(1500);

                     }else{

                    $("#error").fadeIn(2000).fadeOut(1500);
                 }
                    
              
                });
            };

                    self.get("register-username").val('');
                    
                    self.get("register-password").val('');
                    
                    
             
         });

       // if(validateFormLogin(username,userpassword)){
            self.get("btn-login").click(function(){

                var username = self.get("login-username").val();
                var password = self.get("login-password").val();

                userAjax.login(username,password,function(data){
                    console.log(data);
                    
                      if(data.Status === "200"){
                        sleep = true;
                        iris.navigate("#/carrusel");
                        self.destroyUI();

                    }
                    
                });
             });
         // };
            
        };
        self.awake = function () {   
            console.log("loginform Screen Awakened");
        };

        self.sleep = function () {
            console.log("loginform Screen Asleep");
        };

        self.destroy = function () {
            console.log("loginform Screen Destroyed");
        };

        function validateFormRegister(username, usermail, userpassword) {
                var regExpEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var regExpUserName = /^[a-zA-Z]{4,20}$/;
                var regExpPassword = /^[a-zA-Z0-9!@#$%^&*]{5,20}$/;
                 if (!regExpUserName.test(username)) {
                    $('#username').fadeIn(2000).fadeOut(1000);
                }
                if (!regExpEmail.test(usermail)) {
                    $('#usermail').fadeIn(2000).fadeOut(1000);
                }
                if (!regExpPassword.test(userpassword)) {
                   $('#userpassword').fadeIn(2000).fadeOut(1000);
                }
                if(regExpUserName.test(username) && regExpEmail.test(usermail) && regExpPassword.test(userpassword)){
                    return true;
                }else{
                    return false;
                }
        };
        function validateFormLogin(username,userpassword) {
                
                var regExpUserName = /^[a-zA-Z]{4,20}$/;
                var regExpPassword = /^[a-zA-Z0-9!@#$%^&*]{5,20}$/;
                 if (!regExpUserName.test(username)) {
                    $('#username').fadeIn(2000).fadeOut(1000);
                }
                
                if (!regExpPassword.test(userpassword)) {
                   $('#userpassword').fadeIn(2000).fadeOut(1000);
                }
                if(regExpUserName.test(username)  && regExpPassword.test(userpassword)){
                    return true;
                }else{
                    return false;
                }
        };
            

    },
    iris.path.uis.loginform.js
);