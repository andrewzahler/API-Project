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


function thunderCats () {
    $.ajax({
            url: "https://api.myjson.com/bins/17jmtn",
            method: "GET"
        })
        .done(function(response) {
            console.log(response);

            // When a region is selected from dropdown on page 1 or page 2...

            // grab the top trending topic for each city (name of city, name of topic, volume) from the JSON
                // how in the what???

            // store name of each topic, name of city and tweet volume in an array of objects





//**------ Use this structure
var trendingMap = {
    "alberquerue":{
        topTrend: 'trump',
        tweet_volume: 500,
        topTrends: [
            {
                trend: 'trump',
                tweet_volume: 500
            },
            {
                trend: 'trumps mom',
                tweet_volume: 400
            }
        ]
    }
}

//**------- use this
var cityName = response[0].name

trendingMap[cityName].topTrends[0].trend


//*** and this
// chooses the number value because short-circuit evaluation 
var switcheroo = switcheroo || 300; 

            // organize the object by tweet_volume

            // define which cities are in what region; make an array of objects containing all top trending topics for the region

            // pull from our array of trending topic objects the top trending topic per region, then the second, third, fourth, fifth

            // plot them on a map, which will center on the region. ... Ricardo's javascript picks up here 

            // Ricardo needs 
            // path for the tweet_volume of each trending topic 
            // path for city with top trending topic in each region
            // paths for trending topics 2-5 for each region 

        });
    // --------- end of object-building code -------- //
