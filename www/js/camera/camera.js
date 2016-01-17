var camera = {
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
            // if server is up, it will return the url of http://<server ip>:port/
            // the ip is the active network connection
            // if no wifi or no cell, "127.0.0.1" will be returned.
            console.log('CameraServer Started @ ' + url); 
        }, function( error ){
            console.log('CameraServer Start failed: ' + error);
        });
    }
};