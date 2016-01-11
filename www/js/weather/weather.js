var weather = {
    node: document.getElementById('widget_weather'),
    apiUrlNow: 'http://api.openweathermap.org/data/2.5/weather?q=' + CONFIG.weather.city + '&units=' + CONFIG.weather.units + '&appid=' + CONFIG.weather.appid,
    //apiUrlForecast: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + CONFIG.weather.city + '&units=' + CONFIG.weather.units + '&appid=' + CONFIG.weather.appid,

    init: function(){
        this.fetchWeatherJSON(this.apiUrlNow);

        this.interval = setInterval(function() {
            this.fetchWeatherJSON(this.apiUrlNow);
        }.bind(this), 1000 * 60 * 60); //1 hour
    },

    fetchWeatherJSON: function(url){
        fetch(url).then(function(response) { 
            return response.json();
        }).then(function(j) {
            this.update( j );
        }.bind(this));
    },

    update: function(weather){
        this.node.innerHTML = ''+ 
            '<span class="weather__today">' +
                '<i class="weather__icon wi wi-owm-' + weather.weather[0].id + '"></i>' +
                '<span class="weather__temp">' + Math.round(weather.main.temp) + '°</span>' +
            '</span>' +
            '<ul class="weather__forecast">' +
                '<li><span class="weather__day">Di</span><i class="weather__icon wi wi-owm-600"></i><span class="weather__temp">9°</span></li>' +
                '<li><span class="weather__day">Mi</span><i class="weather__icon wi wi-owm-600"></i><span class="weather__temp">9°</span></li>' +
                '<li><span class="weather__day">Do</span><i class="weather__icon wi wi-owm-600"></i><span class="weather__temp">9°</span></li>' +
            '</ul>' +
        '';
    }
}
