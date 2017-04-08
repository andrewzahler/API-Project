
// ------- validate text input on page 1 ------ //
<<<<<<< HEAD
$("button").on("click", function() {
=======
$("#submit-btn").on("click", function() {
>>>>>>> master
	// event.preventDefault();

	var userName = $('#textfield-name').val();

	// var storedName = localStorage.setItem("usernameVar", userName)

	if (userName === '') {
		alert ("Please enter your name!")
	}
	
	else {

		// var storedName = localStorage.setItem("usernameVar", userName);

<<<<<<< HEAD
		load("projectmap.html");
		// console.log(userName);
		// console.log(storedName);


		// $('#name-here').html(localStorage.getItem("usernameVar")); 
	}
});

// ------- end validating input ------ //
=======

		

		$('#name-here').html(localStorage.getItem("usernameVar")); 
	}
});

// ------- end validating input ------ //






>>>>>>> master
