var weather = {
    node: document.getElementById('widget_weather'),
    apiUrl: 'http://api.openweathermap.org/data/2.5/weather?q=' + CONFIG.weather.city + '&units=' + CONFIG.weather.units + '&appid=' + CONFIG.weather.appid,
    mappingUrl: './js/weather/mapping.json',
    iconMapping: '',

    init: function(){
        this.fetchIconMapJSON(this.mappingUrl);
    },

    fetchWeatherJSON: function(url){
        fetch(url).then(function(response) { 
            return response.json();
        }).then(function(j) {
            var icon = Object.keys(this.iconMapping).find(key => this.iconMapping[key] === j.weather[0].main.toLowerCase());
            this.update( j,icon );
        }.bind(this));
    },

    fetchIconMapJSON: function(url){
        fetch(url).then(function(response) { 
            return response.json();
        }).then(function(j) {
            this.iconMapping = j[0];
            this.fetchWeatherJSON(this.apiUrl);
        }.bind(this));
    },

    update: function(weather,icon){
        this.node.innerHTML = '<i class="wi wi-thermometer"></i> ' + weather.main.temp + ' C° <i class="wi ' + icon + '"></i> ' +  weather.weather[0].main;
    }
}
