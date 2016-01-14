var date = {
    node: document.getElementById('widget_datetime'),

    init: function(){
        moment.locale(CONFIG.date.locale);
        
        this.timeNode = document.createElement("span");
        this.timeNode.classList.add('datetime__time', 'huge');
        this.dateNode = document.createElement("span");
        this.dateNode.classList.add('datetime__date');
        this.node.appendChild(this.timeNode);
        this.node.appendChild(this.dateNode);
        
        this.interval = setInterval(function() {
            this.update();
        }.bind(this), 1000);
    },

    update: function(){
        this.dateNode.innerHTML = moment().format("dddd, D. MMMM YYYY");
        this.timeNode.innerHTML = moment().format("H:mm");
    }
};