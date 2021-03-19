jQuery(function($){
	$('html').removeClass('nojs');
	$('html').addClass('hasjs');
});

function validateForm() {
	var a = document.forms["ESPORTS"]["FullName"].value;
	var b = document.forms["ESPORTS"]["EmailAddress"].value;
	var c = document.forms["ESPORTS"]["DateOfBirth"].value;
	if ((a == "") || (b == "")|| (c == "")){
		alert("Please fill in the primary sections.");
	}
	else{
		alert("Welcome to Mountain Boys gaming!");
	}
}