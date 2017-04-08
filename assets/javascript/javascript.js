
// ------- validate text input on page 1 ------ //
<<<<<<< HEAD
<<<<<<< HEAD
$("button").on("click", function() {
=======
$("#submit-btn").on("click", function() {
>>>>>>> master
=======
$("#submit-btn").on("click", function() {
=======
$("button").on("click", function() {
>>>>>>> ricardo_branch
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
<<<<<<< HEAD
		load("projectmap.html");
		// console.log(userName);
		// console.log(storedName);


		// $('#name-here').html(localStorage.getItem("usernameVar")); 
=======

		

		$('#name-here').html(localStorage.getItem("usernameVar")); 
>>>>>>> master
	}
});

// ------- end validating input ------ //
<<<<<<< HEAD
=======

		

		$('#name-here').html(localStorage.getItem("usernameVar")); 
	}
});

// ------- end validating input ------ //






>>>>>>> master
=======






=======
		load("projectmap.html");
		// console.log(userName);
		// console.log(storedName);


		// $('#name-here').html(localStorage.getItem("usernameVar")); 
	}
});

// ------- end validating input ------ //
>>>>>>> ricardo_branch
>>>>>>> master
