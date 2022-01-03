//api: 56ab867c085ca6673558a30eb383880a

//current: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=56ab867c085ca6673558a30eb383880a&units=imperial

// fiveday: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=56ab867c085ca6673558a30eb383880a&units=imperial

var searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', function() {
    var city = document.getElementById('city-input').value
    
    getCurrentForecast(city)
})

function getCurrentForecast(value) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ value +'&appid=56ab867c085ca6673558a30eb383880a&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}