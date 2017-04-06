// ------- validate text input on page 1 ------ //
$("button").on("click", function() {
    // event.preventDefault();

    var userName = $('#textfield-name').val();

    // var storedName = localStorage.setItem("usernameVar", userName)

    if (userName === '') {
        alert("Please enter your name!")
    } else {

        // var storedName = localStorage.setItem("usernameVar", userName);

        load("projectmap.html");
        // console.log(userName);
        // console.log(storedName);


        // $('#name-here').html(localStorage.getItem("usernameVar")); 
    }
});

// ------- end validating input ------ //

// ------- start of object-building code ------ //

var masterObject = {};
var allCities = [];
var cityFiveTrends = [];
var singleTrend = {};

function buildMasterObject() {
    $.ajax({
            url: "https://api.myjson.com/bins/17jmtn",
            method: "GET"
        })
        .done(function(response) {
            console.log(response);
            // this stores all the cities from the response in an array, then adds that array to an object 
            for (var i = 0; i < response.length; i++) {
                var cityName = response[i].locations[0].name;
                allCities.push(cityName);
            };
            masterObject.cities = allCities;
            // I WANT THIS to iterate through each object in the array in the response, and on each one iterate through its array of trends, looking for the first five trends that have a real value for the property tweet_volume. THEN I WANT IT to grab the values of two properties for each of those five trends and store them in an object singleTrend, which will be pushed into the array cityFiveTrends iteratively.      
            for (var i = 0; i < response.length; i++) {
                for (x in response[i].trends) {
                    if (response[i].trends[x].tweet_volume !== null && cityFiveTrends.length < 5) {
                        singleTrend.name = response[i].trends[x].name;
                        singleTrend.tweets = response[i].trends[x].tweet_volume;
                        cityFiveTrends.push(singleTrend);
                    };
                };
            };
            console.log(cityFiveTrends);
            // Finally I want this part to iterate through all the cities in the masterObject, adding the correct array of trends to each one 
            for (var i = 0; i < masterObject.cities.length; i++) {
                masterObject.cities[i].trends = cityFiveTrends;
            };

            console.log(masterObject);
        });
};

$(document).ready(function() {
    buildMasterObject();
});
// --------- end of object-building code -------- //
