var vvs = {
    node: document.getElementById('widget_vvs'),
    apiUrl: 'https://efa-api.asw.io/api/v1/station/' + config.vvs.stationId + '/departures/?format=json',

    init: function(){
        this.fetchDeparturesJSON(this.apiUrl);
    },

    fetchDeparturesJSON: function(url){
        fetch(url).then(function(response) { 
            return response.json();
        }).then(function(j) {
            var filteredTrains = j.filter(function(train){
                return (train.number === config.vvs.trainNumber) && (train.direction === config.vvs.direction);
            });
            this.update(filteredTrains);
        }.bind(this));
    },

    update: function(trains){
        this.node.innerHTML = 'U7 um: ' + trains[0].departureTime.hour + ':' + trains[0].departureTime.minute;
    }
}