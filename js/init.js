iris.path = {
	screens : {
    mainpage: {js: "client/app/screens/mainpage.js", html: "client/app/screens/mainpage.html"},
    prueba:{js:"client/app/screens/prueba.js",html: "client/app/screens/prueba.html"},
    carrusel:{js:"client/app/screens/carrusel.js",html:"client/app/screens/carrusel.html"},
    contact:{js:"client/app/screens/contact.js",html:"client/app/screens/contact.html"},
    categories:{js:"client/app/screens/categories.js",html:"client/app/screens/categories.html"},
    cover:{js:"client/app/screens/cover.js",html:"client/app/screens/cover.html"}

   },
   uis:{
   		loginform:{js:"client/app/uis/loginform.js",html:"client/app/uis/loginform.html"},
      inner_register:{js:"client/app/uis/inner_register.js",html:"client/app/uis/inner_register.html"}
   }
};


$(document).ready(
    function () {
        iris.baseUri("./"); //Optional: It sets de base directory of the application
        iris.welcome(iris.path.screens.mainpage.js); //It loads the behavior file of the welcome Screen
    }
);