
// ------- validate text input on page 1 ------ //
<<<<<<< HEAD
$("#submit-btn").on("click", function() {
=======
$("button").on("click", function() {
>>>>>>> ricardo_branch
	// event.preventDefault();

	var userName = $('#textfield-name').val();

	// var storedName = localStorage.setItem("usernameVar", userName)

	if (userName === '') {
		alert ("Please enter your name!")
	}
	
	else {

		var storedName = localStorage.setItem("name", userName);

<<<<<<< HEAD

		

		// $('#name-here').html(localStorage.getItem("usernameVar")); 
	}
});

// ------- end validating input ------ //






=======
		load("projectmap.html");
		// console.log(userName);
		// console.log(storedName);


		// $('#name-here').html(localStorage.getItem("usernameVar")); 
	}
});

// ------- end validating input ------ //
>>>>>>> ricardo_branch
