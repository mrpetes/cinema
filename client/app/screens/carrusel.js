iris.screen(
    function (self) {
        self.create = function () {   
            console.log("carrusel Screen Created");
            self.tmpl(iris.path.screens.carrusel.html);

            $(document).ready(function(){
    var boxheight = $('.carousel-inner').height();
    var itemlength = $('.item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
    $('.list-group-item').outerHeight(triggerheight); //maybe Bootsnipp only
    //$('.list-group-item').height(triggerheight); //works fine in local testing
    
    var clickEvent = false;
    $('#myCarousel').carousel({
        interval:   4000    
    }).on('click', '.list-group li', function() {
            clickEvent = true;
            $('.list-group li').removeClass('active');
            $(this).addClass('active');     
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.list-group').children().length -1;
            var current = $('.list-group li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.list-group li').first().addClass('active'); 
            }
        }
        clickEvent = false;
    });
})
            

            
        };

        self.awake = function () {   
            console.log("carrusel Screen Awakened");
        };

        self.sleep = function () {
            console.log("carrusel Screen Asleep");
        };

        self.destroy = function () {
            console.log("carrusel Screen Destroyed");
        };
    },
    iris.path.screens.carrusel.js
);