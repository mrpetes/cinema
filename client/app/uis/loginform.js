iris.ui(
    function (self) {
        self.create = function () {
            self.tmplMode(self.APPEND);
            self.tmpl(iris.path.uis.loginform.html);  
            

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

            self.get("register").click(function(e){
                if(valida_pass($('#password').val())){
                    register(function(data){ //callback
                        if(data.state===0){
                              $("#mail").val("");
                                $("#password").val("");
                                alert("User succesfully registered .An email has been sent to activate the account");
                            } else if (data.state === 1) {
                                $("#mail").val("");
                                $("#password").val("");
                                alert("User already registered");
                            } else if (data.state === 2) {
                                $("#mail").val("");
                                $("#password").val("");
                                alert("Active the account trough your email.");
                            } else if (data.state === 3) {
                                $("#mail").val("");
                                $("#password").val("");
                                alert("Incorrect email format");
                            }
                        });
                    } else {
                        $("#mail").val("");
                        $("#password").val("");
                        alert("The password is too weak , please choose another one.");
                    }
                });
            
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
    },
    iris.path.uis.loginform.js
);