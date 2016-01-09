var date = {
    node: document.getElementById('widget_datetime'),

    init: function(){
        moment.locale(config.date.locale);
        this.dateNode = document.createElement("span");
        this.dateNode.classList.add('datetime__date');
        this.timeNode = document.createElement("span");
        this.timeNode.classList.add('datetime__time');
        this.node.appendChild(this.dateNode);
        this.node.appendChild(this.timeNode);
        this.interval = setInterval(function() {
            this.update();
        }.bind(this), 1000);
    },

    update: function(){
        this.dateNode.innerHTML = moment().format("dddd, D. MMMM YYYY");
        this.timeNode.innerHTML = moment().format("H:mm");
    }
};