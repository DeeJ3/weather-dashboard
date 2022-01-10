//api: 56ab867c085ca6673558a30eb383880a

//current: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=56ab867c085ca6673558a30eb383880a&units=imperial

// fiveday: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=56ab867c085ca6673558a30eb383880a&units=imperial

var searchBtn = document.getElementById('search-btn')
var fiveDayContainer = document.getElementById('five-day-container')

searchBtn.addEventListener('click', function () {
    var city = document.getElementById('city-input').value

    getCurrentForecast(city)
})//When button is clicked, the getcurrentforecast function is called passing in the city value from the searched input 

function getCurrentForecast(value) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=56ab867c085ca6673558a30eb383880a&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            var lat = data.coord.lat
            var lon = data.coord.lon
            getFiveDayForecast(lat, lon)

            document.getElementById('cityName').textContent = data.name
            document.getElementById('temp').textContent = 'Temp: ' + data.main.temp + ' F'
            document.getElementById('humidity').textContent = 'Humidity: ' + data.main.humidity
            // wind


        })//utilizing this call function to pull the data from the API
}

// 
function getFiveDayForecast(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=56ab867c085ca6673558a30eb383880a&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            //
            document.getElementById('uv').textContent = 'UV Index: ' + data.current.uvi
            
            //
            for (var i = 0; i < 5; i++) {
                var card = document.createElement('div')
                fiveDayContainer.append(card)

                var date = document.createElement('h2')
                date.textContent = moment().add(i + 1, 'days').format('dddd')
                card.append(date)

                // 
                var fiveTemp = document.createElement('p')
                fiveTemp.textContent = 'Temp: ' + data.daily[i].temp.day +' F'
                card.append(fiveTemp)

                var fiveHumidity = document.createElement('p')
                fiveHumidity.textContent = 'Humidity: ' + data.daily[i].humidity
                card.append(fiveHumidity)

                var fiveWind = document.createElement('p')
                fiveWind.textContent = 'Wind Speed: ' + data.daily[i].wind_speed + ' MPH'
                card.append(fiveWind)
            }

        })
}