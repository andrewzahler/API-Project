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
var regionsConverted = {
    northeast: ["New York", "Philadelphia", "Baltimore", "Pittsburgh", "Providence", "New Haven", "Harrisburg", "Boston"],
    west: ["Seattle", "Portland", "Las Vegas", "Seattle", "Portland", "Los Angeles", "Sacramento", "Albuquerque", "Colorado Springs", "Denver", "Fresno", "Honolulu", "Long Beach", "Phoenix", "Salt Lake City", "Tucson", "San Diego"],
    south: ["Dallas-Ft. Worth", "San Antonio", "Oklahoma City", "Houston", "El Paso", "Birmingham", "New Orleans", "Louisville", "Atlanta", "Tallahassee", "Miami", "Orlando", "Austin", "Charlotte", "Greensboro", "Jackson", "Jacksonville", "Memphis", "Nashville", "Raleigh", "Richmond", "Virginia Beach", "Washington", "Tampa"],
    midwest: ["Minneapolis", "Omaha", "Kansas City", "Chicago", "Detroit", "Cincinnati", "Cleveland", "Columbus", "Indianapolis", "Milwaukee"]
};

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
// <<<<<<< caitlin-branch
//         };
//     });
// };

// // Can't sort the object of top trending topics, so this function is a step toward populating 
// // the map sidebar with five random cities from whatever region is selected.  

// =======
//             console.log(trendingMap);

        });
};

// populates the map sidebar with five random cities from selected region  

$("#sel1").change(function(event) {
    var key = event.target.value;
    console.log(key);
    if (key === "NE") {
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regionsConverted.northeast.length);
            var cityTemp = regionsConverted.northeast.splice(randomNum, 1)
            randomCities.push(cityTemp);
        };
    } else if (key === "S") {
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regionsConverted.south.length);
            var cityTemp = regionsConverted.south.splice(randomNum, 1)
            randomCities.push(cityTemp);
        };
    } else if (key === "W") {
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regionsConverted.west.length);
            var cityTemp = regionsConverted.west.splice(randomNum, 1)
            randomCities.push(cityTemp);
        };
    } else if (key === "MW") {
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regionsConverted.midwest.length);
            var cityTemp = regionsConverted.midwest.splice(randomNum, 1)
            randomCities.push(cityTemp);
        };
    };
    console.log(randomCities);
    for (var i = 0; i < randomCities.length; i++) {
        var cityName = randomCities[i];
        var trendTopic = trendingMap[cityName].trend;
        var topicVolume = trendingMap[cityName].volume;
        console.log(topicVolume);
        //**This is where it stops working //
        $("#topic" + (i + 1)).html(trendTopic);
        $("#city" + (i + 1)).html(cityName);
        $("#pop" + (i + 1)).html(topicVolume);
    };
});




// Main function



objectBuilder();
