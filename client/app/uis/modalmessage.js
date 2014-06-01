iris.ui(
    function (self) {
        
        

        self.create = function () {
            self.tmplMode(self.APPEND);
            self.tmpl(iris.path.uis.modalshare.html);
            
            


    
        };
        self.awake = function () { 



          
          self.get("close").click(function(e){
                e.preventDefault();
                self.destroyUI();
            });
          self.get("buscaruser").click(function(e){
                e.preventDefault();
                self.destroyUI();
            });
     

        };

        self.sleep = function () {
            console.log("modalshare UI Asleep");
        };

        self.destroy = function () {
            console.log("modalshare UI Destroyed");
        };
    },
    iris.path.uis.modalshare.js
);