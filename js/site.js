jQuery(function($){
	$('html').removeClass('nojs');
	$('html').addClass('hasjs');
});

function validateForm() {
	var a = document.forms["ESPORTS"]["full-name"].value;
	var b = document.forms["ESPORTS"]["email"].value;
	var c = document.forms["ESPORTS"]["phone"].value;
	if ((a == "") || (b == "")|| (c == "")){
		alert("Please fill in the primary sections.");
	}
	else{
		alert("Welcome to Mountain Boys gaming!");
	}
	
	
	
}