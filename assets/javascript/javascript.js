// Set Global Variables

var food = 0;
var sports = 0;
var weather = 0;
var politics = 0;
var travel = 0;
var TV = 0;
var movies = 0;
var shopping = 0;
var bars = 0;
var music = 0;
var hashtags = [
    "#food",
    "#sports",
    "#weather",
    "#politics",
    "#travel",
    "#TV",
    "#movies",
    "#shopping",
    "#bars",
    "#music"
];
var randomNum;
var topHashtags;


// Functions

// Generates random number to be used in populateHashtags function
function getRandomNumber(min, max) {
    randomNum = Math.floor(Math.random() * (max - min)) + min;
};

// 
function getHashtags() {
    $("#CHANGETHIS").on("click", function() {
        $.ajax({
                url: "http://www.json-generator.com/api/json/get/bRXYoPdpea?indent=2",
                method: "GET"
            })
            // counts number of times each hashtag turns up in the JSON;
            // eventually will be able to display this number with the right hashtag in sidebar; will try to figure out more elegant solution
            .done(function(response) {
                for (var i = 0; i < response.length; i++) {
                    if (response[i].hashtag === "#food") {
                        food++;
                    } else if (response[i].hashtag === "#sports") {
                        sports++;
                    } else if (response[i].hashtag === "#weather") {
                        weather++;
                    } else if (response[i].hashtag === "#politics") {
                        politics++;
                    } else if (response[i].hashtag === "#travel") {
                        travel++;
                    } else if (response[i].hashtag === "#TV") {
                        TV++;
                    } else if (response[i].hashtag === "#movies") {
                        movies++;
                    } else if (response[i].hashtag === "#shopping") {
                        shopping++;
                    } else if (response[i].hashtag === "#bars") {
                        bars++;
                    } else if (response[i].hashtag === "#music") {
                        music++;
                    };
                };
                // grabs random item from array of hashtags to display in sidebar;
                // would obviously prefer to display the most frequently occuring hashtags,
                // but couldn't figure out how to sort and pull based on frequency;  
                // also still working out a bug where function returns "undefined" sometimes
                function populateHashtags() {
                    topHashtags = [];
                    for (var i = 0; i < 5; i++) {
                        getRandomNumber(0, 9);
                        console.log(randomNum);
                            topHashtags.push(hashtags[randomNum]);
                            $("#div" + (i + 1)).html(topHashtags[i]);
                            hashtags.splice(randomNum, 1);
                        };
                    };
                populateHashtags();
                console.log(topHashtags);
            });
    });
};

// Main process
$(document).ready(function() {
    getHashtags();
});


// ------- validate text input on page 1 ------ //
$("button").on("click", function() {
	// event.preventDefault();

	if ($('#textfield-name').val() === '') {
		alert ("Please enter your name!")
	}
	
});

// ------- end validating input ------ //
