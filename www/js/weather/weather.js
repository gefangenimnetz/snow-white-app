var weather = {
    node: document.getElementById('widget_weather'),
    apiUrl: 'http://api.openweathermap.org/data/2.5/weather?q=' + CONFIG.weather.city + '&units=' + CONFIG.weather.units + '&appid=' + CONFIG.weather.appid,

    init: function(){
        this.fetchWeatherJSON(this.apiUrl);

        this.interval = setInterval(function() {
            this.fetchWeatherJSON();
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
                '<span class="weather__icon"><i class="wi wi-owm-' + weather.weather[0].id + '"></i></span>' +
                '<span class="weather__temp">' + Math.round(weather.main.temp) + '°</span>' +
            '</span>' +
            '<ui class="weather__forecast">' +
            '</ui>' +
        '';
    }
}
