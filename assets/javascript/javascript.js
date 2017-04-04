// ------- validate text input on page 1 ------ //
$("button").on("click", function() {
	// event.preventDefault();

	if ($('#textfield-name').val() === '') {
		alert ("Please enter your name!")
	}
	
	else {
		function redirect(){
			var url = "http://www.google.com";
			window.open(url, '_top');
		}
	}
});

// ------- end validating input ------ //