// ------- validate text input on page 1 ------ //
$("#submit-btn").on("click", function() {

    event.preventDefault();

    var userName = $('#textfield-name').val();

    if (userName === '') {

        $('#warningDiv').html('<div class="alert alert-warning"> Please enter your name</div>')

    } else {
        localStorage.setItem("name", userName);

        $("#letsGo").css({ "display": "inline" });

        $("#submit-btn").css({ "display": "none" });

        $('#name').html(localStorage.getItem("name"));

        // $('#letsGo').show($('#letsGo'));
    }




    // $('#name-here').html(localStorage.getItem("usernameVar")); 
});


// ------- end validating input ------ //


// ------- start building map for page 2 ----- //

//*** VARIABLES

var trendingMap = {};
var randomCities = [];
var regions = {
    northeast: ["newyork", "philadelphia", "baltimore", "pittsburgh", "providence", "newhaven", "harrisburg", "boston"],
    west: ["seattle", "portland", "lasvegas", "seattle", "portland", "losangeles", "lasvegas", "sacramento", "sanjose", "albuquerque", "coloradosprings", "denver", "fresno", "honolulu", "longbeach", "phoenix", "saltlakecity", "tucson", "sandiego"],
    south: ["sanjose", "dallas", "sanantonio", "oklahomacity", "houston", "elpaso", "birmingham", "neworleans", "louisville", "tallahassee", "miami", "orlando", "austin", "charlotte", "greensboro", "jackson", "jacksonville", "memphis", "nashville", "raleigh", "richmond", "virginiabeach", "washingtondc", "tampa"],
    midwest: ["minneapolis", "omaha", "kansascity", "chicago", "detroit", "cincinnati", "cleveland", "columbus", "indianapolis", "milwaukee"]
};
var regionsForSidebar = {
    northeast: ["new york", "philadelphia", "baltimore", "pittsburgh", "providence", "new haven", "harrisburg", "boston"],
    west: ["portland", "las vegas", "seattle", "portland", "los angeles", "sacramento", "albuquerque", "colorado springs", "denver", "fresno", "honolulu", "long beach", "phoenix", "salt lake city", "tucson", "san diego"],
    south: ["dallas-ft. worth", "san antonio", "oklahoma city", "houston", "el paso", "birmingham", "new orleans", "louisville", "tallahassee", "miami", "orlando", "austin", "charlotte", "greensboro", "jackson", "jacksonville", "memphis", "nashville", "raleigh", "richmond", "virginia beach", "washington", "tampa"],
    midwest: ["minneapolis", "omaha", "kansas city", "chicago", "detroit", "cincinnati", "cleveland", "columbus", "indianapolis", "milwaukee"]
};

var citymap = {
    albuquerque: {
        center: {
            lat: 35.107049,
            lng: -106.616063
        },
        population: 908252
    },
    austin: {
        center: {
            lat: 30.2672,
            lng: -97.7431
        },
        population: 858400
    },
    baltimore: {
        center: {
            lat: 39.2904,
            lng: -76.6122
        },
        population: 622793
    },
    batonrouge: {
        center: {
            lat: 30.4583,
            lng: -91.1403
        },
        population: 830480
    },
    birmingham: {
        center: {
            lat: 33.5207,
            lng: -86.8025
        },
        population: 212378
    },
    boston: {
        center: {
            lat: 42.3601,
            lng: -71.0589
        },
        population: 700000
    },
    charlotte: {
        center: {
            lat: 35.2271,
            lng: -80.8431
        },
        population: 850000
    },
    chicago: {
        center: {
            lat: 41.8781,
            lng: -87.6298
        },
        population: 2710000
    },
    cincinnati: {
        center: {
            lat: 39.1031,
            lng: -84.5120
        },
        population: 2120000
    },
    cleveland: {
        center: {
            lat: 41.4993,
            lng: -81.6944
        },
        population: 400000
    },
    coloradosprings: {
        center: {
            lat: 38.8339,
            lng: -104.8214
        },
        population: 486000
    },
    columbus: {
        center: {
            lat: 39.9612,
            lng: -82.9988
        },
        population: 2023000
    },
    dallas: {
        center: {
            lat: 32.7767,
            lng: -96.7970
        },
        population: 7246231
    },
    denver: {
        center: {
            lat: 39.7392,
            lng: -104.9903
        },
        population: 2900003
    },
    detroit: {
        center: {
            lat: 42.3314,
            lng: -83.0458
        },
        population: 688000
    },
    elpaso: {
        center: {
            lat: 31.7619,
            lng: -106.4850
        },
        population: 674433
    },
    fresno: {
        center: {
            lat: 36.7468,
            lng: -119.7726
        },
        population: 509924
    },
    greensboro: {
        center: {
            lat: 36.0726,
            lng: -79.7920
        },
        population: 258277
    },
    harrisburg: {
        center: {
            lat: 40.2732,
            lng: -76.8867
        },
        population: 50000
    },
    honolulu: {
        center: {
            lat: 21.3069,
            lng: -157.8583
        },
        population: 390000
    },
    houston: {
        center: {
            lat: 29.7604,
            lng: -95.3698
        },
        population: 2230000
    },
    indianapolis: {
        center: {
            lat: 39.7684,
            lng: -86.1581
        },
        population: 2000000
    },
    jackson: {
        center: {
            lat: 32.2988,
            lng: -90.1848
        },
        population: 181000
    },
    jacksonville: {
        center: {
            lat: 30.3322,
            lng: -81.6557
        },
        population: 842253
    },
    kansascity: {
        center: {
            lat: 39.0997,
            lng: -94.5786
        },
        population: 467007
    },
    lasvegas: {
        center: {
            lat: 36.1699,
            lng: -115.1398
        },
        population: 600000
    },
    longbeach: {
        center: {
            lat: 33.7701,
            lng: -118.1937
        },
        population: 469428
    },
    losangeles: {
        center: {
            lat: 34.052,
            lng: -118.243
        },
        population: 3857799
    },
    louisville: {
        center: {
            lat: 38.2527,
            lng: -85.7585
        },
        population: 253128
    },
    memphis: {
        center: {
            lat: 35.1495,
            lng: -90.0490
        },
        population: 653400
    },
    mesa: {
        center: {
            lat: 33.4152,
            lng: -111.8315
        },
        population: 457587
    },
    miami: {
        center: {
            lat: 25.7617,
            lng: -80.1918
        },
        population: 417670
    },
    milwaukee: {
        center: {
            lat: 43.0389,
            lng: -87.9065
        },
        population: 599164
    },
    minneapolis: {
        center: {
            lat: 44.9778,
            lng: -93.2650
        },
        population: 400070
    },
    nashville: {
        center: {
            lat: 36.1627,
            lng: -86.7816
        },
        population: 678889
    },
    newhaven: {
        center: {
            lat: 41.3083,
            lng: -72.9279
        },
        population: 130660
    },
    neworleans: {
        center: {
            lat: 29.9511,
            lng: -90.0715
        },
        population: 378715
    },
    newyork: {
        center: {
            lat: 40.714,
            lng: -74.005
        },
        population: 8405837
    },
    norfolk: {
        center: {
            lat: 36.8508,
            lng: -76.2859
        },
        population: 246139
    },
    oklahomacity: {
        center: {
            lat: 35.4676,
            lng: -97.5164
        },
        population: 610613
    },
    omaha: {
        center: {
            lat: 41.2524,
            lng: -95.9980
        },
        population: 434353
    },
    orlando: {
        center: {
            lat: 28.5383,
            lng: -81.3792
        },
        population: 255483
    },
    philadelphia: {
        center: {
            lat: 39.9526,
            lng: -75.1652
        },
        population: 1553302
    },
    phoenix: {
        center: {
            lat: 33.4484,
            lng: -112.0740
        },
        population: 1513020
    },
    pittsburgh: {
        center: {
            lat: 40.4406,
            lng: -79.9959
        },
        population: 305841
    },
    portland: {
        center: {
            lat: 45.5231,
            lng: -122.6765
        },
        population: 609456
    },
    providence: {
        center: {
            lat: 41.8240,
            lng: -71.4128
        },
        population: 177944
    },
    raleigh: {
        center: {
            lat: 35.7796,
            lng: -78.6382
        },
        population: 431747
    },
    richmond: {
        center: {
            lat: 37.5407,
            lng: -77.4360
        },
        population: 214114
    },
    sacramento: {
        center: {
            lat: 38.5816,
            lng: -121.4944
        },
        population: 479686
    },
    saltlakecity: {
        center: {
            lat: 40.7608,
            lng: -111.8910
        },
        population: 191180
    },
    sanantonio: {
        center: {
            lat: 29.4241,
            lng: -98.4936
        },
        population: 1409002
    },
    sandiego: {
        center: {
            lat: 32.7157,
            lng: -117.1611
        },
        population: 1356030
    },
    sanfrancisco: {
        center: {
            lat: 37.7749,
            lng: -122.4194
        },
        population: 837442
    },
    sanjose: {
        center: {
            lat: 37.3382,
            lng: -121.8863
        },
        population: 998537
    },
    seattle: {
        center: {
            lat: 47.6062,
            lng: -122.3321
        },
        population: 652405
    },
    stlouis: {
        center: {
            lat: 38.6270,
            lng: -90.1994
        },
        population: 318416
    },
    tallahassee: {
        center: {
            lat: 30.4383,
            lng: -84.2807
        },
        population: 186411
    },
    tampa: {
        center: {
            lat: 27.9506,
            lng: -82.4572
        },
        population: 352957
    },
    tucson: {
        center: {
            lat: 32.2217,
            lng: -110.9265
        },
        population: 526116
    },
    virginiabeach: {
        center: {
            lat: 36.8529,
            lng: -75.9780
        },
        population: 448479
    },
    washingtondc: {
        center: {
            lat: 38.9072,
            lng: -77.0369
        },
        population: 658893
    }
};

var regionmap = {
    NE: {
        lat: 37.090,
        lng: -95.712
    },
    S: {
        lat: 32.7767,
        lng: -96.7970
    },
    W: {
        lat: 33.7701,
        lng: -118.1937
    },
    MW: {
        lat: 47.090,
        lng: -95.712
    },
}
var map;


//*** FUNCTIONS
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


// Object.keys() - takes an object and returns an array of all the keys in the object

$("#sel1").change(function(event) {
    var key = event.target.value;
    console.log(regionmap[key])
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {
            lat: regionmap[key].lat,
            lng: regionmap[key].lng
        },
        mapTypeId: 'terrain'
    });

});
// var str = "";
//   $( "select option:selected" ).each(function() {
//     str += $( this ).text() + " ";
//   });
//   $( "div" ).text( str );
// })
// .change();



function initMap() {
    // Global variable for accessing json


    // Create the map.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {
            lat: 37.090,
            lng: -95.712
        },
        mapTypeId: 'terrain'
    });
    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    // Extract out the city for each JSON, loop through JSON object. For each key, get the tweet volume and replace population 

    // init AJAX call to JSON file


    $.ajax({
            url: "https://api.myjson.com/bins/1c3nzr",
            method: "GET",
            async: false
        })
        .done(function(response) {
            for (i in response) {
                var cityName = response[i].locations[0].name.toLowerCase();
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
            }
        })

    console.log(trendingMap);

    for (var city in citymap) {

        var cleanedCity = city.toLowerCase();
        cleanedCity = cleanedCity.split(" ").join("");

        console.log(city);
        console.log(cleanedCity);
        console.log(trendingMap[cleanedCity]);

        if (trendingMap[cleanedCity] != undefined && trendingMap[cleanedCity].hasOwnProperty("volume")) {

            // for (var city in trendingMap) {
            //     console.log("hello")
            //     console.log(trendingMap[city])
            // }
            // LOOP THROUGH THE JSON AND SEARCH FOR WHERE city == key.
            // WHEN YOU FIND A MATCH set var tweetAmount = "that value"

            // Add the circle for this city to the map.
            var cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: citymap[city].center,
                radius: Math.sqrt(trendingMap[cleanedCity].volume) * 100
            })
        }
        // var mapOptions = {
        //     zoom: 5,
        //     center: new google.maps.LatLng(37.09024, -100.712891),
        //     panControl: false,
        //     panControlOptions: {
        //         position: google.maps.ControlPosition.BottomLEFT
        //     },
        //     zoomControl: true,
        //     zoomControlOptions: {
        //         style: google.maps.ZoomControlStyle.LARGE
        //         position: google.maps.ControlPosition.RIGHT_CENTER
        //     },
        //     scaleControl: false
        // }
        // function zoomNE() {
        //     regions.northeast =  new google.maps.Map(document.getElementById('map'), {
        //     zoom: 7,
        //     center: {
        //         lat: 37.090,
        //         lng: -95.712
        //     },
        //     mapTypeId: 'terrain'
        // })
        // };
    }


}
// populates the map sidebar with five random cities from selected region 



$("#sel1").change(function(event) {
    var key = event.target.value;
    console.log(key);

    if (key === "NE") {
        var northeastTemp = [];
        randomCities = [];
        for (var i = 0; i < regionsForSidebar.northeast.length; i++) {
            var city = regionsForSidebar.northeast[i];
            // var cleanedCity = city.split(" ").join("");
            northeastTemp.push(city);
        };
        console.log(northeastTemp);
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regionsForSidebar.northeast.length);
            var cityTemp = regionsForSidebar.northeast.slice(randomNum, randomNum + 1);
            randomCities.push(cityTemp);
        };
    } else if (key === "S") {
        var southTemp = [];
        randomCities = [];
        for (var i = 0; i < regionsForSidebar.south.length; i++) {
            var city = regionsForSidebar.south[i];
            // var cleanedCity = city.split(" ").join("");
            southTemp.push(city);
        };
        console.log(southTemp);
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regionsForSidebar.south.length);
            var cityTemp = regionsForSidebar.south.slice(randomNum, randomNum + 1);
            randomCities.push(cityTemp);
        };
    } else if (key === "W") {
        var westTemp = [];
        randomCities = [];
        for (var i = 0; i < regionsForSidebar.west.length; i++) {
            var city = regionsForSidebar.west[i];
            // var cleanedCity = city.split(" ").join("");
            westTemp.push(city);
        };
        console.log(westTemp);
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regionsForSidebar.west.length);
            var cityTemp = regionsForSidebar.west.slice(randomNum, randomNum + 1);
            randomCities.push(cityTemp);
        };
    } else if (key === "MW") {
        var midwestTemp = [];
        randomCities = [];
        for (var i = 0; i < regionsForSidebar.midwest.length; i++) {
            var city = regionsForSidebar.midwest[i];
            // var cleanedCity = city.split(" ").join("");
            midwestTemp.push(city);
        };
        console.log(midwestTemp);
        for (var i = 0; i < 5; i++) {
            var randomNum = getRandomInt(0, regionsForSidebar.midwest.length);
            var cityTemp = regionsForSidebar.midwest.slice(randomNum, randomNum + 1);
            randomCities.push(cityTemp);
        };

    };
    $("#topic").empty();
    $("#city").empty();
    $("#pop").empty();
    for (var i = 0; i < randomCities.length; i++) {
        var cityName = randomCities[i];
        // var printName = cityName.toUpperCase(); 
        var trendTopic = trendingMap[cityName].trend;
        var topicVolume = trendingMap[cityName].volume;
        $("#topic" + (i + 1)).html(trendTopic);
        $("#city" + (i + 1)).html(cityName);
        $("#pop" + (i + 1)).html(topicVolume);
    };
});

//*** MAIN PROCESS

$("#letsGo").on("click", function() {
    console.log("success!");
    initMap();
});
