$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    // Following are for 4 buttons. Look things up in the jQuery reference.
    
	$("#btn1").click(function(){
        $(this).text("-done-");
		$("#square1").css("background-color","Black").animate({width:'150px'},500);
    });
    $("#btn2").click(function(){
		$(this).text("-done-");
        $("#square2").css("background-color","Red").animate({width:'300px'},500);
    });
    $("#btn3").click(function(){
		$(this).text("-done-");
        $("#square3").css("background-color","Yellow").animate({width:'450px'},500);
    });
    $("#btn4").click(function(){
		$(this).text("-done-");
        $("#square4").css("background-color","Blue").animate({width:'600px'},500);
    });
});
