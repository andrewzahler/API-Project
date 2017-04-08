// function turnOnButton() {
//     var x = $('#letsGo');
//     if (x.style.display === 'none') {
//         x.style.display = 'inline';
//     } else {
//         x.style.display = 'none';
//     }
// }


// ------- validate text input on page 1 ------ //
$("#submit-btn").on("click", function() {

    event.preventDefault();

    var userName = $('#textfield-name').val();

    if (userName === '') {

        $('#warningDiv').html('<div class="alert alert-warning"> Please enter your name</div>')

    } else {
        localStorage.setItem("name", userName);

        $("#letsGo").css({"display": "inline"});

        $("#submit-btn").css({"display": "none"});

        $('#name').html(localStorage.getItem("name"));

        // $('#letsGo').show($('#letsGo'));
    }


        

    // $('#name-here').html(localStorage.getItem("usernameVar")); 
})


// ------- end validating input ------ //

//******** Andrew's code begins here ********

//*** variables
// This is our main object of the top trending terms, organized by city. 
// Each city is a child object with properties "trend" and "volume".   
var trendingMap = {};
var randomCities = [];


// ******** functions ******** //

// creates randomized integer for tweet_volume with "null" value
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

 
function objectBuilder() {
    // init AJAX call to JSON file
    $.ajax({
        url: "https://api.myjson.com/bins/1c3nzr",
        method: "GET"
    })
    .done(function(response) {
        for (i in response) {
            var cityName = response[i].locations[0].name;
            var trendName = response[i].trends[0].name;
            var tweetVol = response[i].trends[0].tweet_volume;
            trendingMap[cityName] = {};

            trendingMap[cityName].trend = trendName; //assigning the property "trend"

            // console.log(trendName);

            if (tweetVol === null) {
                var randomTweetVol = getRandomInt(1000, 30000);
                trendingMap[cityName].volume = randomTweetVol;
            } else {
                trendingMap[cityName].volume = tweetVol;
            };
        };
    });
};

// Can't sort the object of top trending topics, so this function is a step toward populating 
// the map sidebar with five random cities from whatever region is selected.  

$("#sel1").change(function(event) {
    var key = event.target.value;
    console.log(key);
    if (key === "NE") {
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regions.northeast.length);
            var popper  = regions.northeast.pop(randomNum, 1);
            randomCities.push(popper);
        };
    } else if (key === "S") {
        var randomCities = [];
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regions.south.length);
            var popper = regions.south.pop(randomNum, 1);
            randomCities.push(popper);
        };
    } else if (key === "W") {
        var randomCities = [];
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regions.west.length);
            var popper = regions.west.popper(randomNum, 1);
            randomCities.push(popper);
        };
    } else if (key === "MW") {
        var randomCities = [];
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regions.midwest.length);
            var popper = regions.midwest.pop(randomNum, 1);
            randomCities.push(popper);
        };
    };
    console.log(randomCities);
});

// Main function



objectBuilder();
