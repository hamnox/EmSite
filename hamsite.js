main = function() {
	activate_section = function(type_to_activate){
		$(".active_section").remove();
		/* keep this for notes $.ajax({url:urlstr, data:(if POST), success:function,dataType:str}); 
		jQuery.get(url,function( data ) {}; */
		$(".content").load(type_to_activate + ".html");
		$(".content").children().addClass("active_section"); /* need to add article support sometime... but how?
			Parse a directory file? I just don't know..*/
		};

    $("#menubutton").click(function(){
        if($("#menu").hasClass("menu_open")) {
            $("#menu").animate({left: "-15%"},100);
            $("#menu").removeClass("menu_open");
        } else {
            $("#menu").animate({left: "0px"},100);
            $("#menu").addClass("menu_open");
        }
    });

    $("#projects").click(activate_section("projects"));
    $("#essays").click(activate_section("essays"));
    $("#art").click(activate_section("art"));	
    $("#musings").click(activate_section("musings"));
    $("#menulinks").click(activate_section("menulinks"));
};
$(document).ready(main);