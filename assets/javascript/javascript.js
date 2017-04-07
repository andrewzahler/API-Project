
// ------- validate text input on page 1 ------ //
$("#submit-btn").on("click", function() {
	// event.preventDefault();

	var userName = $('#textfield-name').val();

	// var storedName = localStorage.setItem("usernameVar", userName)

	if (userName === '') {
		alert ("Please enter your name!")
	}
	
	else {

		var storedName = localStorage.setItem("name", userName);


		

		// $('#name-here').html(localStorage.getItem("usernameVar")); 
	}
});

// ------- end validating input ------ //






