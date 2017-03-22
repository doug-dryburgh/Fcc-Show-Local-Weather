$(document).ready(function () {
    var lat;
    var long;
    var weatherUrl;
    var units = "&units=metric";
    var degrees = "&degC";
    var windSpeed = "m/s";
    var imperial = false;
    var unitDisplay = "Units(&degC)"

    function getWeather() {
        $("#units").html(unitDisplay);
        //GEOLOCATION API
        $.getJSON("http://ip-api.com/json", function (val) {
            lat = val.lat;
            long = val.lon;
            //WEATHER API 
            weatherUrl = ("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + units + "&appid=409f1cb952a0d8fadf518d0bd02565b8");
            $.getJSON(weatherUrl, function (val) {
                //BACKGROUND & ICON SELECTOR
                var currentCondition = val.weather[0].icon;
                switch (currentCondition) {
                case "01d":
                case "01n":
                    $("#pageContainer").css("background-image", "url(https://c6.staticflickr.com/1/149/31494822285_8701510ffb_o.jpg)");
                    $("#weatherIcon").attr("src", "https: //i.imgsafe.org/b7489b82ff.png");
                    break;
                case "13d":
                case "13n":
                    $("#pageContainer").css("background-image", "url(https://c1.staticflickr.com/1/744/31348343872_e5131901d8_o.jpg)");
                    $("#weatherIcon").attr("src", "https://i.imgsafe.org/b748b3bace.png");
                    break;
                case "09d":
                case "09n":
                case "10d":
                case "10n":
                    $("#pageContainer").css("background-image", "url(https://c8.staticflickr.com/1/78/30685999103_b15932caf8_o.jpg)");
                    $("#weatherIcon").attr("src", "https://i.imgsafe.org/b748a9bba7.png");
                    break;
                case "03d":
                case "03n":
                case "04d":
                case "04n":
                    $("#pageContainer").css("background-image", "url(https://c6.staticflickr.com/6/5504/30686001733_3139008abc_o.jpg)");
                    $("#weatherIcon").attr("src", "https://i.imgsafe.org/b7489629ae.png");
                    break;
                case "11d":
                case "11n":
                    $("#pageContainer").css("background-image", "url(https://c4.staticflickr.com/6/5621/30686004603_b0891c64b1_o.jpg)");
                    $("#weatherIcon").attr("src", "https://i.imgsafe.org/b7488a0ad2.png");
                    break;
                case "02d":
                case "02n":
                    $("#pageContainer").css("background-image", "url(https://c3.staticflickr.com/1/131/31348350042_8ee5c8fb11_o.jpg)");
                    $("#weatherIcon").attr("src", "https://i.imgsafe.org/b748808025.png");
                    break;
                default:
                    $("#pageContainer").css("background-image", "url(https://c1.staticflickr.com/6/5563/31348342832_05af1a6842_o.jpg)");
                    $("#weatherIcon").attr("src", "https://i.imgsafe.org/b7696835e5.png");
                    break;
                }
                $("#myLoc").html(val.name + ", " + val.sys.country);
                $("#temp").html(Math.floor(val.main.temp) + " " + degrees);
                $("#addConditions").html("Status: " + val.weather[0].description + "<br>" + "Cloud Cover: " + val.clouds.all + "%" + "<br>" + "Wind Speed: " + val.wind.speed + " " + windSpeed + "<br>" + "Humidity: " + val.main.humidity + "%");
            });
        });
    }
    getWeather();
    //UNIT TOGGLE
    $("#unitToggle").click(function () {
        if (imperial === false) {
            imperial = true;
            units = "&units=imperial";
            degrees = "&degF";
            windSpeed = "mph";
            unitDisplay = "Units(&degF)"
            getWeather();
        }
        else {
            imperial = false;
            units = "&units=metric";
            degrees = "&degC";
            windSpeed = "m/s";
            unitDisplay = "Units(&degC)"
            getWeather();
        }
    });
});