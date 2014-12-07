main = function() {
    $("#menubutton").click(function(){
        if($("#menu").hasClass("menu_open")) {
            $("#menu").animate({left: "-150px"},100);
            $("#menu").removeClass("menu_open");
        } else {
            $("#menu").animate({left: "0px"},100);
            $("#menu").addClass("menu_open");
        }
    });

}
$(document).ready(main);