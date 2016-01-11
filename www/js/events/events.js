var events = {
    init: function(){
        this.fetchICS();
    },

    fetchICS: function(){
        fetch('../js/events/google_birthday.ics').then(function(response) { 
            return response.text();
        }).then(function(j) {
            this.update( j );
        }.bind(this));
    },

    update: function(data){
        var root = new ICAL.Component( ICAL.parse(data) );
        var vevents = root.getAllSubcomponents('vevent');
        vevents.forEach(function(vevent){
            var evt = new ICAL.Event(vevent);
            console.log(evt.startDate.toJSDate(), evt.endDate.toJSDate());
        });
    }
}