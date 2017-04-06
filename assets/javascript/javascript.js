
// ------- validate text input on page 1 ------ //
$("button").on("click", function() {
	// event.preventDefault();

	var userName = $('#textfield-name').val();

	// var storedName = localStorage.setItem("usernameVar", userName)

	if (userName === '') {
		alert ("Please enter your name!")
	}
	
	else {

		// var storedName = localStorage.setItem("usernameVar", userName);

		load("projectmap.html");
		// console.log(userName);
		// console.log(storedName);

		function myFunction() {
		    var x = $('#page2');
		    if (x.style.display === 'none') {
		        x.style.display = 'block';
		    } else {
		        x.style.display = 'none';
		    }
		}

		myFunction();

		// $('#name-here').html(localStorage.getItem("usernameVar")); 
	}
});

// ------- end validating input ------ //






