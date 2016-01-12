var events = {
    init: function(){
        //this.fetchICS();
        this.getLocalDeviceEvents();
    },

    onEventsReceivedSuccess: function(data){
        console.log(data);
        alert("The next event is: ", data[0].title);
    },

    onError: function(msg){
        alert(msg);
    },

    getLocalDeviceEvents: function(){
        var startDate = new Date();
        var endDate = new Date();
        endDate.setDate(startDate.getDate() + 14);
        window.plugins.calendar.findEvent(null, null, null, startDate, endDate, this.onEventsReceivedSuccess, this.onError);
    }

    // fetchICS: function(){
    //     fetch('../js/events/google_birthday.ics').then(function(response) { 
    //         return response.text();
    //     }).then(function(j) {
    //         this.update( j );
    //     }.bind(this));
    // },

    // update: function(data){
    //     var root = new ICAL.Component( ICAL.parse(data) );
    //     var vevents = root.getAllSubcomponents('vevent');
    //     vevents.forEach(function(vevent){
    //         var evt = new ICAL.Event(vevent);
    //         console.log(evt.startDate.toJSDate(), evt.endDate.toJSDate());
    //     });
    // }
}