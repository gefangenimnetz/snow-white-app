var weather = {
    node: document.getElementById('widget_weather'),
    apiUrl: 'http://api.openweathermap.org/data/2.5/weather?q=' + CONFIG.weather.city + '&units=' + CONFIG.weather.units + '&appid=' + CONFIG.weather.appid,

    init: function(){
        this.fetchWeatherJSON(this.apiUrl);
    },

    fetchWeatherJSON: function(url){
        fetch(url).then(function(response) { 
            return response.json();
        }).then(function(j) {
            this.update( j );
        }.bind(this));
    },

    update: function(weather){
        this.node.innerHTML = '<i class="wi wi-thermometer"></i> ' + weather.main.temp + ' C° <i class="wi wi-owm-' + weather.weather[0].id + '"></i> ' +  weather.weather[0].main;
    }
}
