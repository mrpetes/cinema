iris.path = {
	screens : {
    mainpage: {js: "client/app/screens/mainpage.js", html: "client/app/screens/mainpage.html"},
    prueba:{js:"client/app/screens/prueba.js",html: "client/app/screens/prueba.html"},
    carrusel:{js:"client/app/screens/carrusel.js",html:"client/app/screens/carrusel.html"},
    contact:{js:"client/app/screens/contact.js",html:"client/app/screens/contact.html"},
    categories:{js:"client/app/screens/categories.js",html:"client/app/screens/categories.html"},
    cover:{js:"client/app/screens/cover.js",html:"client/app/screens/cover.html"},
    uploader:{js:"client/app/screens/uploader.js",html:"client/app/screens/uploader.html"},
    news:{js:"client/app/screens/news.js",html:"client/app/screens/news.html"}

   },
   uis:{
   		loginform:{js:"client/app/uis/loginform.js",html:"client/app/uis/loginform.html"},
      inner_register:{js:"client/app/uis/inner_register.js",html:"client/app/uis/inner_register.html"},
      categorieUI:{js:"client/app/uis/categorieUI.js", html:"client/app/uis/categorieUI.html"},
      movieUI:{js:"client/app/uis/movieUI.js", html:"client/app/uis/movieUI.html"},
      fullmovie:{js:"client/app/uis/fullmovie.js", html:"client/app/uis/fullmovie.html"},
      modalshare:{js:"client/app/uis/modalshare.js",html:"client/app/uis/modalshare.html"},
      modalmessage:{js:"client/app/uis/modalmessage.js",html:"client/app/uis/modalmessage.html"}
   },
   resource:{
              user:"resources/userAjax.js",
              movies:"resources/moviesAjax.js"
   }
};


$(document).ready(
    function () {
        iris.baseUri("./"); //Optional: It sets de base directory of the application
        iris.welcome(iris.path.screens.mainpage.js); //It loads the behavior file of the welcome Screen
    }
);