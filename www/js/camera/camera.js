var camera = {
    node: document.getElementById('livecam'),


    init: function(){
        if (device.platform === 'browser'){
            return;
        }

        cordova.plugins.CameraServer.startServer({
            'www_root' : '/',
            'port' : 8080,
            'localhost_only' : false,
            'json_info': []
        }, function( url ){
            console.log('CameraServer Started @ ' + url); 
            this.startCameraCapture(url);

        }.bind(this), function( error ){
            console.log('CameraServer Start failed: ' + error);
        });
    },

    startCameraCapture: function(url){
        cordova.plugins.CameraServer.startCamera(function(){
            console.log('Capture Started');
            this.interval = setInterval(function() {
                this.updateLiveImage();
            }.bind(this), 100);
        }.bind(this),function( error ){
            console.log('CameraServer StartCapture failed: ' + error);
        });
    },

    updateLiveImage: function(){
        this.node.setAttribute('src', 'http://localhost:8080/live.jpg?rand=' + Math.round(Math.random()*1000000));
    }


};