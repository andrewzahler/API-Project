// ------- validate text input on page 1 ------ //
$("button").on("click", function() {
	// event.preventDefault();

	if ($('#textfield-name').val() === '') {
		alert ("Please enter your name!")
	}
	
});

// ------- end validating input ------ //