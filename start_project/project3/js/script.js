// komentar - zapis ktory bude vzdy

(function($){
    $(function(){

    //*scroll to section*//
        $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top},1000)
        });

        $(".jq--scroll-about-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-pizza").offset().top},1200)
        });

        $(".jq--scroll-references").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top},1400)
        });

        $(".jq--scroll-gallery").click(function(){
            $("html, body").animate({scrollTop: $(".jq--gallery").offset().top},1600)
        });

        $(".jq--scroll-formular").click(function(){
            $("html, body").animate({scrollTop: $(".jq--formular").offset().top},1800)
        });

    //*scroll buttons to section*//
        $(".jq--scroll-button1").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top},1000)
        });

        $(".jq--scroll-button2").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top},1400)
        });

    //*Mobile navigation*//
        $(".jq--nav-icon").click(function(){
            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").slideToggle();
            $("nav ul").fadeToggle();
        });
        /*change menu to cross*/

    $(".jq--image-hamburger").click(function(){
  
        if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
        {
            $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
        } 
        else 
        {
            $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
        }  
});


    });
 })(jQuery);