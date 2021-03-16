jQuery(function($){
	$('html').removeClass('nojs');
	$('html').addClass('hasjs');
});

function validateForm() {
	var a = document.forms[][].value;
	var b = document.forms[][].value;
	var c = document.forms[][].value;
	if ((a == "") || (b == "")|| (c == "")){
		alert("Please fill in the primary sections.");
	}
	else{
		alert("Welcome to Mountain Boys gaming!");
	}
	
	
	
}